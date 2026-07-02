import React, { useEffect, useRef, useState, useCallback } from 'react'
import { X, ZoomIn, ZoomOut, Maximize, Download, Loader2 } from 'lucide-react'

export default function DetectionViewer({ result, onClose }) {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const imgRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const view = useRef({ scale: 1, ox: 0, oy: 0 })
  const pan = useRef({ active: false, sx: 0, sy: 0, ox: 0, oy: 0 })
  const [, force] = useState(0)
  const boxes = result.boxes || []

  useEffect(() => {
    if (!result.file) { setLoading(false); return }
    const url = URL.createObjectURL(result.file)
    const img = new Image()
    img.onload = () => { imgRef.current = img; fit(); draw(); setLoading(false) }
    img.onerror = () => setLoading(false)
    img.src = url
    return () => URL.revokeObjectURL(url)
    // eslint-disable-next-line
  }, [result])

  const fit = useCallback(() => {
    const img = imgRef.current, w = wrapRef.current
    if (!img || !w) return
    const s = Math.min(w.clientWidth / img.width, w.clientHeight / img.height) * 0.96
    view.current = { scale: s, ox: (w.clientWidth - img.width * s) / 2, oy: (w.clientHeight - img.height * s) / 2 }
  }, [])

  const draw = useCallback(() => {
    const c = canvasRef.current, w = wrapRef.current, img = imgRef.current
    if (!c || !w || !img) return
    c.width = w.clientWidth; c.height = w.clientHeight
    const ctx = c.getContext('2d')
    ctx.clearRect(0, 0, c.width, c.height)
    const { scale, ox, oy } = view.current
    ctx.save(); ctx.translate(ox, oy); ctx.scale(scale, scale); ctx.drawImage(img, 0, 0); ctx.restore()
    ctx.strokeStyle = 'rgba(255,60,60,.95)'; ctx.fillStyle = 'rgba(255,60,60,.12)'; ctx.lineWidth = 1.5
    for (const b of boxes) {
      const sx = b[0] * scale + ox, sy = b[1] * scale + oy, sw = (b[2] - b[0]) * scale, sh = (b[3] - b[1]) * scale
      ctx.fillRect(sx, sy, sw, sh); ctx.strokeRect(sx, sy, sw, sh)
    }
  }, [boxes])

  useEffect(() => {
    const ro = new ResizeObserver(() => { fit(); draw() })
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [fit, draw])

  const zoomAt = (cx, cy, f) => {
    const v = view.current
    const ix = (cx - v.ox) / v.scale, iy = (cy - v.oy) / v.scale
    v.scale = Math.max(0.05, Math.min(30, v.scale * f))
    v.ox = cx - ix * v.scale; v.oy = cy - iy * v.scale
    draw(); force(n => n + 1)
  }

  const exportAnnotated = () => {
    const img = imgRef.current; if (!img) return
    const off = document.createElement('canvas'); off.width = img.width; off.height = img.height
    const ctx = off.getContext('2d'); ctx.drawImage(img, 0, 0)
    ctx.strokeStyle = 'rgba(255,40,40,.95)'; ctx.lineWidth = Math.max(2, img.width / 900)
    for (const b of boxes) ctx.strokeRect(b[0], b[1], b[2] - b[0], b[3] - b[1])
    const pad = Math.max(10, img.width / 120)
    ctx.font = `bold ${Math.max(20, img.width / 45)}px sans-serif`
    const label = `${result.count} acorns`
    ctx.fillStyle = 'rgba(27,67,50,.85)'; ctx.fillRect(pad, pad, ctx.measureText(label).width + pad * 2, Math.max(30, img.width / 32))
    ctx.fillStyle = '#fff'; ctx.fillText(label, pad * 2, pad + Math.max(24, img.width / 40))
    off.toBlob(b => {
      const url = URL.createObjectURL(b); const a = document.createElement('a')
      a.href = url; a.download = result.imageName.replace(/\.[^.]+$/, '') + '_detections.jpg'; a.click()
      URL.revokeObjectURL(url)
    }, 'image/jpeg', 0.92)
  }

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(13,40,24,.75)', backdropFilter: 'blur(3px)' }}>
      <div onClick={e => e.stopPropagation()} className="card" style={{ width: 'min(92vw,1100px)', height: 'min(88vh,800px)', background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: '#0d2818', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 500 }}>{result.imageName}</div>
            <div style={{ fontSize: 12, color: '#6b8f77', marginTop: 2 }}>
              <span style={{ color: '#1b4332', fontWeight: 700 }}>{result.count} acorns detected</span>
              {result.category ? ` · ${result.category} production` : ''}{result.treeNumber ? ` · Tree ${result.treeNumber}` : ''}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 2 }}>
            {[[ZoomIn, () => zoomAt(wrapRef.current.clientWidth / 2, wrapRef.current.clientHeight / 2, 1.25)],
              [ZoomOut, () => zoomAt(wrapRef.current.clientWidth / 2, wrapRef.current.clientHeight / 2, 1 / 1.25)],
              [Maximize, () => { fit(); draw(); force(n => n + 1) }],
              [Download, exportAnnotated]].map(([Ic, fn], i) => (
              <button key={i} onClick={fn} style={{ padding: 8, borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer' }}><Ic size={16} color="#4a7c5e" /></button>
            ))}
            <button onClick={onClose} style={{ padding: 8, borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer', marginLeft: 4 }}><X size={18} color="#6b8f77" /></button>
          </div>
        </div>
        <div ref={wrapRef} style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#0e1810', cursor: 'grab' }}
          onWheel={e => { e.preventDefault(); const r = canvasRef.current.getBoundingClientRect(); zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.12 : 1 / 1.12) }}
          onMouseDown={e => { const r = canvasRef.current.getBoundingClientRect(); pan.current = { active: true, sx: e.clientX - r.left, sy: e.clientY - r.top, ox: view.current.ox, oy: view.current.oy } }}
          onMouseMove={e => { if (!pan.current.active) return; const r = canvasRef.current.getBoundingClientRect(); view.current.ox = pan.current.ox + (e.clientX - r.left - pan.current.sx); view.current.oy = pan.current.oy + (e.clientY - r.top - pan.current.sy); draw() }}
          onMouseUp={() => pan.current.active = false} onMouseLeave={() => pan.current.active = false}>
          {loading && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#86d8ac' }}><Loader2 size={28} className="spin" /></div>}
          <canvas ref={canvasRef} style={{ display: 'block' }} />
        </div>
        <div style={{ padding: '8px 20px', borderTop: '1px solid var(--color-border)', fontSize: 12, color: '#9ca3af', display: 'flex', justifyContent: 'space-between' }}>
          <span>Scroll to zoom · drag to pan · each red box is one detected acorn</span>
          <span style={{ color: '#6b8f77' }}>{boxes.length} boxes</span>
        </div>
      </div>
    </div>
  )
}
