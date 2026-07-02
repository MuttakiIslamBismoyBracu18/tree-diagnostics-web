// ============================================================================
//  Browser-side helpers: image loading, EXIF GPS, tree-number parsing, export
// ============================================================================

// Load a File into an HTMLImageElement (decoded, ready for canvas).
export function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => { resolve(img) /* keep url alive; revoked by caller */ }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Could not decode image')) }
    img.src = url
    img._objectUrl = url
  })
}

// Parse a tree number from a DJI-style filename, e.g. "..._Tree011.JPG" -> "011"
export function extractTreeNumber(name) {
  const m = name.match(/Tree[_-]?(\d{1,4})/i)
  return m ? m[1] : null
}

// ── Minimal EXIF GPS reader (JPEG only). Returns {lat,lng} or null. ─────────
export async function extractGPS(file) {
  try {
    const buf = new DataView(await file.slice(0, 256 * 1024).arrayBuffer())
    if (buf.getUint16(0) !== 0xFFD8) return null   // not a JPEG
    let offset = 2
    const len = buf.byteLength
    while (offset < len - 4) {
      const marker = buf.getUint16(offset)
      if (marker === 0xFFE1) {                       // APP1 (EXIF)
        return parseExifGPS(buf, offset + 4)
      }
      if ((marker & 0xFF00) !== 0xFF00) break
      offset += 2 + buf.getUint16(offset + 2)
    }
  } catch { /* ignore */ }
  return null
}

function parseExifGPS(view, start) {
  // "Exif\0\0"
  if (view.getUint32(start) !== 0x45786966) return null
  const tiff = start + 6
  const little = view.getUint16(tiff) === 0x4949
  const rd16 = (o) => view.getUint16(o, little)
  const rd32 = (o) => view.getUint32(o, little)

  const ifd0 = tiff + rd32(tiff + 4)
  const n = rd16(ifd0)
  let gpsIFD = 0
  for (let i = 0; i < n; i++) {
    const e = ifd0 + 2 + i * 12
    if (rd16(e) === 0x8825) { gpsIFD = tiff + rd32(e + 8); break }
  }
  if (!gpsIFD) return null

  const gn = rd16(gpsIFD)
  let latRef = 'N', lngRef = 'E', lat = null, lng = null
  const readRationalTriplet = (valOff) => {
    const out = []
    for (let k = 0; k < 3; k++) {
      const num = rd32(valOff + k * 8), den = rd32(valOff + k * 8 + 4)
      out.push(den ? num / den : 0)
    }
    return out[0] + out[1] / 60 + out[2] / 3600
  }
  for (let i = 0; i < gn; i++) {
    const e = gpsIFD + 2 + i * 12
    const tag = rd16(e)
    const valOff = tiff + rd32(e + 8)
    if (tag === 1) latRef = String.fromCharCode(view.getUint8(e + 8))
    else if (tag === 3) lngRef = String.fromCharCode(view.getUint8(e + 8))
    else if (tag === 2) lat = readRationalTriplet(valOff)
    else if (tag === 4) lng = readRationalTriplet(valOff)
  }
  if (lat == null || lng == null) return null
  if (latRef === 'S') lat = -lat
  if (lngRef === 'W') lng = -lng
  return { lat, lng }
}

// ── CSV export ──────────────────────────────────────────────────────────────
export function exportCSV(results) {
  const cols = ['image_name', 'tree_number', 'result', 'acorn_count', 'category',
                'confidence_pct', 'latitude', 'longitude', 'valid', 'processed_at']
  const rows = results.map(r => {
    const isDet = r.kind === 'detector'
    return {
      image_name: r.imageName,
      tree_number: r.treeNumber ?? '',
      result: isDet ? `${r.count} acorns` : r.topClass,
      acorn_count: isDet ? r.count : '',
      category: r.category ?? '',
      confidence_pct: isDet ? '' : (r.confidence ?? ''),
      latitude: r.gps?.lat ?? '',
      longitude: r.gps?.lng ?? '',
      valid: r.valid,
      processed_at: r.processedAt,
    }
  })
  const esc = v => `"${String(v).replace(/"/g, '""')}"`
  const csv = [cols.join(','), ...rows.map(r => cols.map(c => esc(r[c])).join(','))].join('\n')
  downloadBlob('\uFEFF' + csv, 'tree_diagnostics.csv', 'text/csv;charset=utf-8')
}

// ── XLSX export (minimal, valid SpreadsheetML via SheetJS-free approach) ─────
// We generate a simple .xls (HTML table) that Excel opens cleanly — no deps.
export function exportXLSX(results) {
  const cols = ['Image', 'Tree #', 'Result', 'Acorn Count', 'Category', 'Confidence %',
                'Latitude', 'Longitude', 'Valid', 'Processed At']
  const rowHtml = results.map(r => {
    const isDet = r.kind === 'detector'
    const cells = [
      r.imageName, r.treeNumber ?? '', isDet ? `${r.count} acorns` : r.topClass,
      isDet ? r.count : '', r.category ?? '', isDet ? '' : (r.confidence ?? ''),
      r.gps?.lat ?? '', r.gps?.lng ?? '', r.valid, r.processedAt,
    ]
    return '<tr>' + cells.map(c => `<td>${String(c).replace(/</g, '&lt;')}</td>`).join('') + '</tr>'
  }).join('')
  const html = `<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="utf-8"></head>
    <body><table border="1"><tr>${cols.map(c => `<th>${c}</th>`).join('')}</tr>${rowHtml}</table></body></html>`
  downloadBlob(html, 'tree_diagnostics.xls', 'application/vnd.ms-excel')
}

function downloadBlob(content, filename, mime) {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = filename
  document.body.appendChild(a); a.click(); document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
