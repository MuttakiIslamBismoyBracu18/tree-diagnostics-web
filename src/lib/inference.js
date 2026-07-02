// ============================================================================
//  Tree Diagnostics — in-browser inference engine (ONNX Runtime Web)
//  Runs entirely offline once the page + models are cached.
//
//  Mirrors the verified Python pipeline exactly:
//   - acorn_type:  EfficientNet-B0, 224x224, ImageNet norm, softmax(3)
//   - acorn_count: YOLOv8 tiled 640 sliding window, decode 8400 candidates,
//                  confidence threshold, NMS merge → integer count + boxes
// ============================================================================
import * as ort from 'onnxruntime-web'

// Keep it robust across machines: WASM backend, multi-threaded when available.
ort.env.wasm.numThreads = Math.min(4, (navigator.hardwareConcurrency || 2))
ort.env.wasm.simd = true

const IMAGENET_MEAN = [0.485, 0.456, 0.406]
const IMAGENET_STD  = [0.229, 0.224, 0.225]

let _sessions = {}       // cache: type -> ort.InferenceSession
let _config = null

export async function loadConfig() {
  if (_config) return _config
  const res = await fetch(`${import.meta.env.BASE_URL}models/config.json`)
  _config = await res.json()
  return _config
}

export async function getSession(type, onProgress) {
  if (_sessions[type]) return _sessions[type]
  const file = type === 'acorn_type' ? 'acorn_type.onnx' : 'acorn_count.onnx'
  const url = `${import.meta.env.BASE_URL}models/${file}`

  // Fetch with progress so the UI can show a download bar on first visit.
  const resp = await fetch(url)
  const total = Number(resp.headers.get('content-length')) || 0
  const reader = resp.body.getReader()
  const chunks = []
  let received = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
    received += value.length
    if (total && onProgress) onProgress(received / total)
  }
  const buf = new Uint8Array(received)
  let pos = 0
  for (const c of chunks) { buf.set(c, pos); pos += c.length }

  const session = await ort.InferenceSession.create(buf.buffer, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'all',
  })
  _sessions[type] = session
  return session
}

// ── Warm up both models (called after first load) ──────────────────────────
export async function warmup(onProgress) {
  await loadConfig()
  await getSession('acorn_count', p => onProgress?.('acorn_count', p))
  await getSession('acorn_type',  p => onProgress?.('acorn_type', p))
}

// ============================================================================
//  Image helpers
// ============================================================================
// Draw an (optionally cropped) region of an image into a canvas at target size.
function regionToCanvas(img, sx, sy, sw, sh, tw, th) {
  const c = document.createElement('canvas')
  c.width = tw; c.height = th
  const ctx = c.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, tw, th)
  return ctx.getImageData(0, 0, tw, th)
}

// ============================================================================
//  ACORN TYPE  (classification)
// ============================================================================
export async function runAcornType(img) {
  const cfg = (await loadConfig()).acorn_type
  const size = cfg.input_size || 224
  const session = await getSession('acorn_type')

  const { data } = regionToCanvas(img, 0, 0, img.width, img.height, size, size)
  // NCHW float32, ImageNet-normalised
  const input = new Float32Array(3 * size * size)
  const plane = size * size
  for (let i = 0; i < plane; i++) {
    const r = data[i * 4] / 255, g = data[i * 4 + 1] / 255, b = data[i * 4 + 2] / 255
    input[i]             = (r - IMAGENET_MEAN[0]) / IMAGENET_STD[0]
    input[plane + i]     = (g - IMAGENET_MEAN[1]) / IMAGENET_STD[1]
    input[2 * plane + i] = (b - IMAGENET_MEAN[2]) / IMAGENET_STD[2]
  }
  const tensor = new ort.Tensor('float32', input, [1, 3, size, size])
  const out = await session.run({ input: tensor })
  const logits = Array.from(out.logits.data)

  // softmax
  const m = Math.max(...logits)
  const exp = logits.map(v => Math.exp(v - m))
  const sum = exp.reduce((a, b) => a + b, 0)
  const probs = exp.map(v => v / sum)

  const classes = cfg.classes || ['Heavy', 'Medium', 'Light']
  const all = classes.map((label, i) => ({ label, probability: +(probs[i] * 100).toFixed(2) }))
    .sort((a, b) => b.probability - a.probability)
  const top = all[0]
  return { kind: 'classifier', topClass: top.label, confidence: top.probability, allProbabilities: all }
}

// ============================================================================
//  ACORN COUNT  (YOLOv8 tiled detection)
// ============================================================================
export async function runAcornCount(img, onTileProgress) {
  const cfg = (await loadConfig()).acorn_count
  const tile = cfg.tile_size || 640
  const stride = cfg.tile_stride || 576
  const conf = cfg.conf_threshold ?? 0.17
  const iou = cfg.nms_iou ?? 0.4
  const session = await getSession('acorn_count')

  const W = img.width, H = img.height

  // Tile origins covering the whole image, last tile snapped to the edge
  const tops = []
  for (let t = 0; t <= Math.max(H - tile, 0); t += stride) tops.push(t)
  if (tops.length === 0 || tops[tops.length - 1] + tile < H) tops.push(Math.max(0, H - tile))
  const lefts = []
  for (let l = 0; l <= Math.max(W - tile, 0); l += stride) lefts.push(l)
  if (lefts.length === 0 || lefts[lefts.length - 1] + tile < W) lefts.push(Math.max(0, W - tile))

  const totalTiles = tops.length * lefts.length
  let doneTiles = 0
  const allBoxes = []   // [x1,y1,x2,y2,score] in full-image coords

  for (const top of tops) {
    for (const left of lefts) {
      const sw = Math.min(tile, W - left)
      const sh = Math.min(tile, H - top)
      // Draw the tile region scaled into a full 640x640 (letterbox by scaling;
      // model was trained on 640 tiles so we scale the region to 640).
      const { data } = regionToCanvas(img, left, top, sw, sh, tile, tile)

      const input = new Float32Array(3 * tile * tile)
      const plane = tile * tile
      for (let i = 0; i < plane; i++) {
        input[i]             = data[i * 4]     / 255
        input[plane + i]     = data[i * 4 + 1] / 255
        input[2 * plane + i] = data[i * 4 + 2] / 255
      }
      const tensor = new ort.Tensor('float32', input, [1, 3, tile, tile])
      const out = await session.run({ images: tensor })
      // output (1,5,8400): rows cx,cy,w,h,conf (in 640 space)
      const key = Object.keys(out)[0]
      const o = out[key]
      const [, ch, n] = o.dims   // ch=5, n=8400
      const d = o.data
      // scale factors from 640-space back to the source region
      const scaleX = sw / tile, scaleY = sh / tile
      for (let j = 0; j < n; j++) {
        const score = d[4 * n + j]
        if (score < conf) continue
        const cx = d[j], cy = d[n + j], ww = d[2 * n + j], hh = d[3 * n + j]
        const x1 = (cx - ww / 2) * scaleX + left
        const y1 = (cy - hh / 2) * scaleY + top
        const x2 = (cx + ww / 2) * scaleX + left
        const y2 = (cy + hh / 2) * scaleY + top
        allBoxes.push([x1, y1, x2, y2, score])
      }
      doneTiles++
      onTileProgress?.(doneTiles / totalTiles)
      // Yield to the event loop so the UI stays responsive
      await new Promise(r => setTimeout(r, 0))
    }
  }

  const kept = nms(allBoxes, iou)
  let count = kept.length
  if (cfg.use_calibration) {
    const a = cfg.calibration?.a ?? 1, b = cfg.calibration?.b ?? 0
    count = Math.max(0, Math.round(a * count + b))
  }
  const category = count >= 150 ? 'Heavy' : count >= 40 ? 'Medium' : 'Light/None'
  const boxes = kept.map(b => b.map(v => +v.toFixed(1)))
  return { kind: 'detector', count, category, boxes, imageSize: [W, H] }
}

// ── Non-max suppression ─────────────────────────────────────────────────────
function nms(boxes, iouThresh) {
  const order = boxes.map((b, i) => i).sort((a, b) => boxes[b][4] - boxes[a][4])
  const keep = []
  const suppressed = new Uint8Array(boxes.length)
  for (const i of order) {
    if (suppressed[i]) continue
    keep.push(boxes[i])
    for (const j of order) {
      if (j === i || suppressed[j]) continue
      if (iouOf(boxes[i], boxes[j]) > iouThresh) suppressed[j] = 1
    }
  }
  return keep
}

function iouOf(a, b) {
  const x1 = Math.max(a[0], b[0]), y1 = Math.max(a[1], b[1])
  const x2 = Math.min(a[2], b[2]), y2 = Math.min(a[3], b[3])
  const w = Math.max(0, x2 - x1), h = Math.max(0, y2 - y1)
  const inter = w * h
  const areaA = (a[2] - a[0]) * (a[3] - a[1])
  const areaB = (b[2] - b[0]) * (b[3] - b[1])
  return inter / (areaA + areaB - inter + 1e-9)
}

// ============================================================================
//  Green-content validation (Acorn Type only) — mirrors backend
// ============================================================================
export function greenFraction(img) {
  const s = 200
  const c = document.createElement('canvas')
  c.width = s; c.height = s
  const ctx = c.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(img, 0, 0, s, s)
  const { data } = ctx.getImageData(0, 0, s, s)
  let green = 0
  for (let i = 0; i < s * s; i++) {
    const r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2]
    if (g > r * 1.05 && g > b * 1.05 && g > 40) green++
  }
  return green / (s * s)
}
