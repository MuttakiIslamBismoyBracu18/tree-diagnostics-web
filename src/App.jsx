import React, { useState, useCallback, useRef, useEffect } from 'react'
import {
  Leaf, TreePine, Activity, Map as MapIcon, Hash, Wheat, ChevronRight,
  CheckCircle2, Upload, X, FolderOpen, Loader2, Download, RefreshCw,
  Eye, Tag, BarChart2, AlertTriangle, WifiOff, ArrowLeft
} from 'lucide-react'
import { warmup, runAcornType, runAcornCount, greenFraction, loadConfig } from './lib/inference'
import { loadImage, extractTreeNumber, extractGPS, exportCSV, exportXLSX } from './lib/utils'
import DetectionViewer from './components/DetectionViewer'

const MODELS = [
  { type: 'acorn_count', label: 'Acorn Count', Icon: Hash,
    desc: 'Detects and counts every visible acorn on the canopy, returning a precise integer estimate per tree.',
    chips: ['Integer count', 'Detection boxes', 'Density band'] },
  { type: 'acorn_type', label: 'Acorn Type', Icon: Wheat,
    desc: 'Classifies each canopy into a production category — Heavy, Medium, or Low/None acorn density.',
    chips: ['Heavy', 'Medium', 'Light'] },
]

export default function App() {
  const [step, setStep] = useState('home')          // home|model|upload|processing|results
  const [model, setModel] = useState('acorn_count')
  const [files, setFiles] = useState([])            // {id, file, name}
  const [results, setResults] = useState([])
  const [progress, setProgress] = useState({ done: 0, total: 0, tile: 0, current: '' })
  const [dlProgress, setDlProgress] = useState(null) // {type, pct} during first model download
  const abortRef = useRef(false)

  // ---- HOME ----
  if (step === 'home') return <Home onStart={() => setStep('model')} />

  return (
    <div className="fade" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TopBar step={step} onHome={() => setStep('home')} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        {step === 'model' && (
          <ModelSelect model={model} setModel={setModel} onNext={() => setStep('upload')} />
        )}
        {step === 'upload' && (
          <UploadPage files={files} setFiles={setFiles}
            onBack={() => setStep('model')}
            onRun={() => { startProcessing() }} />
        )}
        {step === 'processing' && (
          <Processing progress={progress} dlProgress={dlProgress} model={model} />
        )}
        {step === 'results' && (
          <Results results={results} model={model}
            onNew={() => { setFiles([]); setResults([]); setStep('model') }} />
        )}
      </div>
    </div>
  )

  async function startProcessing() {
    abortRef.current = false
    setResults([])
    setProgress({ done: 0, total: files.length, tile: 0, current: '' })
    setStep('processing')

    // Ensure models are ready (download+cache on first run, with progress)
    try {
      await warmup((type, pct) => setDlProgress({ type, pct }))
      setDlProgress(null)
    } catch (e) {
      setDlProgress(null)
      setResults([{ imageId: 'err', imageName: 'Model load', kind: 'invalid', topClass: 'Error',
        valid: false, invalidReason: 'Could not load models: ' + e.message, processedAt: new Date().toISOString() }])
      setStep('results')
      return
    }

    await loadConfig()
    const out = []
    for (let i = 0; i < files.length; i++) {
      if (abortRef.current) break
      const f = files[i]
      setProgress(p => ({ ...p, current: f.name, tile: 0 }))
      try {
        const img = await loadImage(f.file)
        const treeNumber = extractTreeNumber(f.name)
        const gps = await extractGPS(f.file)

        let res
        if (model === 'acorn_type') {
          const gf = greenFraction(img)
          if (gf < 0.10) {
            res = { kind: 'invalid', topClass: 'Invalid', valid: false,
              invalidReason: `Insufficient green content (${(gf * 100).toFixed(1)}%). Not a tree canopy.` }
          } else {
            const r = await runAcornType(img)
            res = { ...r, valid: true }
          }
        } else {
          const r = await runAcornCount(img, (tp) => setProgress(p => ({ ...p, tile: tp })))
          res = { ...r, valid: true }
        }

        out.push({
          imageId: f.id, imageName: f.name, file: f.file,
          treeNumber, gps, processedAt: new Date().toISOString(), ...res,
        })
      } catch (e) {
        out.push({ imageId: f.id, imageName: f.name, kind: 'invalid', topClass: 'Error',
          valid: false, invalidReason: e.message, processedAt: new Date().toISOString() })
      }
      setProgress(p => ({ ...p, done: i + 1 }))
      setResults([...out])
    }
    setStep('results')
  }
}

// ============================================================================
function Home({ onStart }) {
  const [vis, setVis] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVis(true), 60); return () => clearTimeout(t) }, [])
  const FEATURES = [
    { Icon: TreePine, title: 'Acorn Intelligence', desc: 'Count individual acorns or classify canopy production density from drone imagery.' },
    { Icon: Activity, title: 'Verifiable Results', desc: 'Inspect every detected acorn with an interactive box overlay you can zoom into.' },
    { Icon: MapIcon, title: 'Works Offline', desc: 'Runs entirely in your browser. No internet, no install, no data ever leaves your device.' },
    { Icon: Leaf, title: 'Export Reports', desc: 'Download results as CSV or Excel for seasonal and year-over-year analysis.' },
  ]
  return (
    <div style={{ height: '100%', overflow: 'auto', background: 'linear-gradient(160deg,#f0fdf4,#f8fdf9 60%,#ecfdf5)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '64px 24px 40px' }}>
        <div style={{ width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg,#1b4332,#2d6a4f)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(27,67,50,.25)',
          opacity: vis ? 1 : 0, transform: vis ? 'scale(1)' : 'scale(.85)', transition: 'all .6s' }}>
          <Leaf size={32} color="#fff" />
        </div>
        <h1 className="serif" style={{ fontSize: 'clamp(30px,4vw,48px)', color: '#0d2818', margin: '24px 0 12px', lineHeight: 1.15,
          opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(16px)', transition: 'all .6s .1s' }}>
          Diagnose tree health,<br /><span style={{ color: '#1b4332' }}>intelligently.</span>
        </h1>
        <p style={{ maxWidth: 520, color: '#4a7c5e', lineHeight: 1.65, marginBottom: 32,
          opacity: vis ? 1 : 0, transition: 'all .6s .2s' }}>
          Upload drone imagery and get AI-powered acorn counts and canopy classifications —
          entirely in your browser, fully offline, with nothing to install.
        </p>
        <button className="btn-primary" style={{ fontSize: 15, padding: '12px 28px',
          opacity: vis ? 1 : 0, transition: 'all .6s .3s' }} onClick={onStart}>
          <Leaf size={16} /> Start Diagnosis
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16,
        padding: '0 40px 48px', maxWidth: 760, margin: '0 auto', width: '100%',
        opacity: vis ? 1 : 0, transition: 'all .6s .5s' }}>
        {FEATURES.map(({ Icon, title, desc }) => (
          <div key={title} className="card" style={{ padding: 20 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg,#dcf5e6,#baeacf)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <Icon size={18} color="#1b4332" />
            </div>
            <h3 style={{ fontSize: 14, color: '#0d2818', marginBottom: 4 }}>{title}</h3>
            <p style={{ fontSize: 12, color: '#6b8f77', lineHeight: 1.5 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function TopBar({ step, onHome }) {
  const steps = [['model', 'Select'], ['upload', 'Upload'], ['processing', 'Analyze'], ['results', 'Results']]
  const idx = steps.findIndex(s => s[0] === step)
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px', height: 52, background: 'var(--color-primary)', flexShrink: 0 }}>
      <button onClick={onHome} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
        <Leaf size={18} /><span className="serif" style={{ fontSize: 15, fontWeight: 600 }}>Tree Diagnostics</span>
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {steps.map(([key, label], i) => (
          <React.Fragment key={key}>
            {i > 0 && <ChevronRight size={13} style={{ color: 'rgba(255,255,255,.3)' }} />}
            <span style={{ padding: '4px 8px', borderRadius: 6, fontSize: 12,
              color: key === step ? '#fff' : 'rgba(255,255,255,.45)',
              background: key === step ? 'rgba(255,255,255,.15)' : 'transparent',
              fontWeight: key === step ? 600 : 400 }}>{label}</span>
          </React.Fragment>
        ))}
      </div>
      <div style={{ width: 150 }} />
    </nav>
  )
}

function ModelSelect({ model, setModel, onNext }) {
  return (
    <div className="fade" style={{ maxWidth: 900, margin: '0 auto', padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h2 className="serif" style={{ fontSize: 26, color: '#0d2818' }}>Choose an Analysis</h2>
        <p style={{ fontSize: 14, color: '#6b8f77', marginTop: 4 }}>Both models are built in and run offline — just pick one.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
        {MODELS.map(({ type, label, Icon, desc, chips }) => {
          const active = model === type
          return (
            <button key={type} onClick={() => setModel(type)} className="card"
              style={{ padding: 24, textAlign: 'left', cursor: 'pointer',
                border: active ? '2px solid #1b4332' : '1px solid var(--color-border)',
                background: active ? '#f0fdf4' : '#fff' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, marginBottom: 16,
                background: active ? 'linear-gradient(135deg,#1b4332,#2d6a4f)' : 'linear-gradient(135deg,#dcf5e6,#baeacf)',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={24} color={active ? '#fff' : '#1b4332'} />
              </div>
              <div style={{ fontWeight: 600, fontSize: 16, color: '#0d2818', marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 12, color: '#6b8f77', lineHeight: 1.6, marginBottom: 12 }}>{desc}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {chips.map(c => <span key={c} style={{ fontSize: 12, padding: '2px 8px', borderRadius: 100, background: '#dcf5e6', color: '#155432' }}>{c}</span>)}
              </div>
              {active && <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 12, fontSize: 12, color: '#1b4332', fontWeight: 500 }}><CheckCircle2 size={13} /> Selected</div>}
            </button>
          )
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn-primary" onClick={onNext}>Continue <ChevronRight size={16} /></button>
      </div>
    </div>
  )
}

function UploadPage({ files, setFiles, onBack, onRun }) {
  const [drag, setDrag] = useState(false)
  const inputRef = useRef()

  const add = useCallback((fileList) => {
    const imgs = Array.from(fileList).filter(f => f.type.startsWith('image/'))
    setFiles(prev => {
      const existing = new Set(prev.map(p => p.name + p.file.size))
      const next = imgs.filter(f => !existing.has(f.name + f.size))
        .map(f => ({ id: Math.random().toString(36).slice(2), file: f, name: f.name }))
      return [...prev, ...next]
    })
  }, [setFiles])

  return (
    <div className="fade" style={{ maxWidth: 760, margin: '0 auto', padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
      <div>
        <h2 className="serif" style={{ fontSize: 26, color: '#0d2818' }}>Upload Images</h2>
        <p style={{ fontSize: 14, color: '#6b8f77', marginTop: 4 }}>Drag &amp; drop drone images, or browse. JPG, PNG, TIFF.</p>
      </div>
      <div onClick={() => inputRef.current.click()}
        onDragOver={e => { e.preventDefault(); setDrag(true) }}
        onDragLeave={() => setDrag(false)}
        onDrop={e => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files) }}
        style={{ border: `2px dashed ${drag ? '#1b4332' : '#a8d5b5'}`, borderRadius: 16, padding: '40px 24px',
          textAlign: 'center', cursor: 'pointer', background: drag ? 'rgba(27,67,50,.04)' : 'rgba(240,250,244,.5)',
          display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, background: drag ? '#1b4332' : '#dcf5e6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
          <Upload size={22} color={drag ? '#fff' : '#1b4332'} />
        </div>
        <div style={{ fontWeight: 600, fontSize: 14, color: '#0d2818' }}>{drag ? 'Drop images here' : 'Drag & drop images'}</div>
        <div style={{ fontSize: 12, color: '#6b8f77', margin: '4px 0 8px' }}>or</div>
        <button className="btn-secondary" style={{ fontSize: 12 }} onClick={e => { e.stopPropagation(); inputRef.current.click() }}><FolderOpen size={13} /> Browse Files</button>
        <input ref={inputRef} type="file" accept="image/*" multiple style={{ display: 'none' }}
          onChange={e => { add(e.target.files); e.target.value = '' }} />
      </div>

      {files.length > 0 && (
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: '#1b4332' }}>{files.length} image{files.length !== 1 ? 's' : ''} queued</span>
            <button onClick={() => setFiles([])} style={{ fontSize: 12, color: '#991b1b', background: '#fef2f2', border: 'none', padding: '4px 8px', borderRadius: 8, cursor: 'pointer' }}>Clear all</button>
          </div>
          <div style={{ overflow: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {files.map(f => (
              <div key={f.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: '#dcf5e6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <TreePine size={15} color="#1b4332" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#0d2818', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
                  <div style={{ fontSize: 12, color: '#6b8f77' }}>{(f.file.size / 1048576).toFixed(1)} MB</div>
                </div>
                <button onClick={() => setFiles(files.filter(x => x.id !== f.id))} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><X size={14} color="#9ca3af" /></button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid var(--color-border)' }}>
        <button className="btn-secondary" onClick={onBack}><ArrowLeft size={14} /> Back</button>
        <button className="btn-primary" disabled={files.length === 0} onClick={onRun}>Run Analysis <ChevronRight size={16} /></button>
      </div>
    </div>
  )
}

function Processing({ progress, dlProgress, model }) {
  const pct = progress.total ? Math.round((progress.done / progress.total) * 100) : 0
  return (
    <div className="fade" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28, padding: 40 }}>
      <div style={{ width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg,#1b4332,#2d6a4f)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(27,67,50,.25)' }}>
        <Loader2 size={32} color="#fff" className="spin" />
      </div>
      <div style={{ textAlign: 'center', width: '100%', maxWidth: 420 }}>
        {dlProgress ? (
          <>
            <div className="serif" style={{ fontSize: 20, color: '#0d2818', marginBottom: 4 }}>Preparing models…</div>
            <div style={{ fontSize: 13, color: '#6b8f77', marginBottom: 16 }}>
              First run only — caching {dlProgress.type === 'acorn_count' ? 'Acorn Count' : 'Acorn Type'} model for offline use ({Math.round(dlProgress.pct * 100)}%)
            </div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: `${Math.round(dlProgress.pct * 100)}%` }} /></div>
          </>
        ) : (
          <>
            <div className="serif" style={{ fontSize: 20, color: '#0d2818', marginBottom: 4 }}>Analysing images…</div>
            <div style={{ fontSize: 13, color: '#6b8f77', marginBottom: 4 }}>{progress.done} / {progress.total} images</div>
            {progress.current && <div style={{ fontSize: 12, color: '#4a7c5e', marginBottom: 16, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {progress.current}{model === 'acorn_count' && progress.tile > 0 ? ` — scanning ${Math.round(progress.tile * 100)}%` : ''}
            </div>}
            <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
            <div style={{ fontSize: 12, color: '#4a7c5e', marginTop: 8, fontFamily: 'monospace' }}>{pct}%</div>
            {model === 'acorn_count' && <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 12 }}>Large drone images are scanned in tiles — this can take 1–3 minutes each. Accuracy first.</div>}
          </>
        )}
      </div>
    </div>
  )
}

function Results({ results, model, onNew }) {
  const [viewer, setViewer] = useState(null)
  const [offline, setOffline] = useState(!navigator.onLine)
  useEffect(() => {
    const on = () => setOffline(false), off = () => setOffline(true)
    window.addEventListener('online', on); window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])

  const valid = results.filter(r => r.valid)
  const isDet = valid.some(r => r.kind === 'detector')
  const total = valid.reduce((s, r) => s + (r.count || 0), 0)
  const avg = valid.length ? Math.round(total / valid.length) : 0

  return (
    <div className="fade" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', borderBottom: '1px solid var(--color-border)', background: '#fff', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#0d2818' }}>{results.length} images · {valid.length} valid</span>
          {isDet && <>
            <span style={{ fontSize: 12, padding: '2px 10px', borderRadius: 100, background: '#1b4332', color: '#fff', fontWeight: 600 }}>{total.toLocaleString()} acorns total</span>
            <span style={{ fontSize: 12, padding: '2px 10px', borderRadius: 100, background: '#dcf5e6', color: '#155432' }}>avg {avg}/tree</span>
          </>}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn-secondary" style={{ fontSize: 12, padding: '6px 12px' }} onClick={() => exportCSV(results)}><Download size={13} /> CSV</button>
          <button className="btn-secondary" style={{ fontSize: 12, padding: '6px 12px' }} onClick={() => exportXLSX(results)}><Download size={13} /> Excel</button>
          <button className="btn-primary" style={{ fontSize: 12, padding: '6px 12px' }} onClick={onNew}><RefreshCw size={13} /> New</button>
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {results.map(r => <ResultCard key={r.imageId} r={r} onView={() => setViewer(r)} />)}
      </div>
      {viewer && <DetectionViewer result={viewer} onClose={() => setViewer(null)} />}
    </div>
  )
}

function ResultCard({ r, onView }) {
  const [exp, setExp] = useState(false)
  const isDet = r.kind === 'detector'
  const badge = isDet
    ? (r.category === 'Heavy' ? 'badge-heavy' : r.category === 'Medium' ? 'badge-medium' : 'badge-light')
    : (r.topClass === 'Heavy' ? 'badge-heavy' : r.topClass === 'Medium' ? 'badge-medium' : r.topClass === 'Light' ? 'badge-light' : 'badge-wilt')
  const [thumb, setThumb] = useState(null)
  useEffect(() => {
    if (!r.file) return
    const url = URL.createObjectURL(r.file); setThumb(url)
    return () => URL.revokeObjectURL(url)
  }, [r.file])

  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <div style={{ width: 96, background: '#f0f9f4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {thumb ? <img src={thumb} alt="" style={{ width: 96, height: 72, objectFit: 'cover' }} /> : <TreePine size={24} color="#a8d5b5" />}
        </div>
        <div style={{ flex: 1, padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 600, fontSize: 14, color: '#0d2818', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 260 }}>{r.imageName}</span>
            {r.treeNumber && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, padding: '2px 8px', borderRadius: 100, background: '#f0fdf4', color: '#1b4332', border: '1px solid #bbf7d0' }}><Tag size={10} /> Tree {r.treeNumber}</span>}
            {!r.valid && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, padding: '2px 8px', borderRadius: 100 }} className="badge-wilt"><AlertTriangle size={10} /> {r.topClass === 'Error' ? 'Error' : 'Invalid'}</span>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            {isDet ? (
              <>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 20, color: '#1b4332', fontVariantNumeric: 'tabular-nums' }}>
                  <Hash size={15} />{r.count}<span style={{ fontWeight: 500, fontSize: 12, color: '#6b8f77' }}>acorns</span>
                </span>
                {r.category && <span className={badge} style={{ fontSize: 11, padding: '2px 10px', borderRadius: 100, fontWeight: 600 }}>{r.category}</span>}
              </>
            ) : r.valid ? (
              <>
                <span className={badge} style={{ fontSize: 12, padding: '2px 10px', borderRadius: 100, fontWeight: 600 }}>{r.topClass}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontFamily: 'monospace', color: r.confidence >= 80 ? '#16a34a' : r.confidence >= 60 ? '#ca8a04' : '#dc2626' }}><BarChart2 size={11} /> {r.confidence?.toFixed(1)}%</span>
              </>
            ) : null}
            {r.gps && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#6b8f77' }}><MapIcon size={11} /> {r.gps.lat.toFixed(5)}, {r.gps.lng.toFixed(5)}</span>}
          </div>
          {!r.valid && r.invalidReason && <div style={{ fontSize: 12, color: '#b45309' }}>{r.invalidReason}</div>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingRight: 12 }}>
          {isDet && r.valid && r.boxes?.length > 0 && (
            <button onClick={onView} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, padding: '6px 10px', borderRadius: 8, color: '#1b4332', background: '#f0fdf4', border: '1px solid #bbf7d0', cursor: 'pointer' }}><Eye size={13} /> View</button>
          )}
          {!isDet && r.valid && r.allProbabilities?.length > 0 && (
            <button onClick={() => setExp(!exp)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
              {exp ? <ChevronRight size={16} color="#6b8f77" style={{ transform: 'rotate(90deg)' }} /> : <ChevronRight size={16} color="#6b8f77" />}
            </button>
          )}
        </div>
      </div>
      {exp && !isDet && r.allProbabilities && (
        <div style={{ padding: '4px 16px 12px', borderTop: '1px solid var(--color-border)' }}>
          {r.allProbabilities.map(p => (
            <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
              <span style={{ fontSize: 12, width: 70, color: '#4a7c5e' }}>{p.label}</span>
              <div className="progress-bar" style={{ flex: 1 }}><div className="progress-fill" style={{ width: `${p.probability}%` }} /></div>
              <span style={{ fontSize: 12, fontFamily: 'monospace', width: 48, textAlign: 'right', color: '#6b8f77' }}>{p.probability.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
