import React, { useEffect, useRef } from 'react'
// Leaflet is now BUNDLED with the app (npm) instead of injected from a CDN at
// runtime. The old CDN loader failed silently on GitHub Pages (unpkg blocked /
// rate-limited / slow), and its .catch() then showed the "needs internet" card
// even when you were online. Bundling removes that failure entirely — only the
// map TILES need a connection now, which is unavoidable for any online map.
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const CLASS_COLOR = {
  Heavy: '#d97706', Medium: '#16a34a', Light: '#0284c7',
  'Light/None': '#0284c7', Error: '#9ca3af',
}

export default function MapView({ results }) {
  const mapRef = useRef(null)
  const mapObj = useRef(null)

  const withGPS = results.filter(r => r.gps)

  useEffect(() => {
    if (!mapRef.current) return

    // tear down any previous map
    if (mapObj.current) { mapObj.current.remove(); mapObj.current = null }

    const center = withGPS.length
      ? [withGPS[0].gps.lat, withGPS[0].gps.lng]
      : [35.96, -83.92]
    const map = L.map(mapRef.current, { preferCanvas: true })
      .setView(center, withGPS.length ? 16 : 5)
    // Modern OSM tile endpoint (the old {s}. subdomain form is deprecated).
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap', maxZoom: 19,
    }).addTo(map)
    mapObj.current = map

    const markers = []
    withGPS.forEach(r => {
      const isDet = r.kind === 'detector'
      const color = CLASS_COLOR[String(isDet ? r.category : r.topClass)] || '#6b8f77'
      const label = isDet ? String(r.count ?? 0) : (r.treeNumber ?? '?')
      const icon = L.divIcon({
        className: '',
        html: `<div style="width:36px;height:36px;border-radius:50%;background:${color};
          border:3px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,.28);display:flex;
          align-items:center;justify-content:center;font-size:11px;font-weight:700;
          color:#fff;font-family:'DM Sans',sans-serif;">${label}</div>`,
        iconSize: [36, 36], iconAnchor: [18, 18], popupAnchor: [0, -20],
      })
      const popup = `<div style="font-family:'DM Sans',sans-serif;font-size:13px;min-width:160px;">
        <div style="font-weight:700;color:#0d2818;margin-bottom:4px;word-break:break-all;">${r.imageName}</div>
        ${r.treeNumber ? `<div style="color:#4a7c5e;margin-bottom:4px;">Tree ${r.treeNumber}</div>` : ''}
        ${isDet
          ? `<div style="font-size:20px;font-weight:800;color:#1b4332;">${r.count ?? 0}
               <span style="font-size:12px;font-weight:500;color:#6b8f77;">acorns</span></div>
             <span style="display:inline-block;padding:2px 10px;border-radius:100px;background:${color}22;color:${color};font-weight:700;font-size:11px;">${r.category ?? ''}</span>`
          : `<span style="display:inline-block;padding:2px 10px;border-radius:100px;background:${color}22;color:${color};font-weight:700;font-size:11px;">${r.topClass}</span>
             <div style="color:#6b8f77;font-size:12px;margin-top:4px;">Confidence: <strong>${(r.confidence ?? 0).toFixed(1)}%</strong></div>`}
        <div style="color:#9ca3af;font-size:11px;margin-top:6px;">${r.gps.lat.toFixed(6)}, ${r.gps.lng.toFixed(6)}</div>
      </div>`
      markers.push(L.marker([r.gps.lat, r.gps.lng], { icon }).addTo(map).bindPopup(popup))
    })

    setTimeout(() => map.invalidateSize(), 200)
    if (markers.length > 1) {
      map.fitBounds(L.featureGroup(markers).getBounds().pad(0.2))
    }

    return () => {
      if (mapObj.current) { mapObj.current.remove(); mapObj.current = null }
    }
    // eslint-disable-next-line
  }, [results])

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {withGPS.length === 0 && (
        <div style={{ margin: '12px 24px', padding: '10px 14px', borderRadius: 12, fontSize: 13,
          background: '#fffbeb', color: '#92400e', border: '1px solid #fde68a' }}>
          ⚠️ No GPS coordinates found in these images. Map pins need EXIF GPS data in the photos.
        </div>
      )}
      <div style={{ flex: 1, margin: '12px 24px', minHeight: 0, position: 'relative' }}>
        <div ref={mapRef} style={{ position: 'absolute', inset: 0, borderRadius: 12, overflow: 'hidden', background: '#eef4f0' }} />
      </div>
    </div>
  )
}
