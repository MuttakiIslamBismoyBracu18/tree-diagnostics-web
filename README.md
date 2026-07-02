# 🌳 Tree Diagnostics — Offline Web App (PWA)

A **zero-install, fully-offline** browser app for acorn analysis from drone
imagery. Both AI models run **inside the browser** via ONNX Runtime Web — no
Python, no server, no installer, no per-OS builds. Works on Mac, Windows,
Linux, ChromeOS, and iPad.

- **Acorn Count** — YOLOv8 tiled detection → integer acorn count + inspectable boxes
- **Acorn Type** — EfficientNet-B0 → Heavy / Medium / Light canopy density

Verified to produce **identical results** to the desktop/Python version
(same ONNX weights, same tiling + NMS math).

---

## How it works (and why it's offline)

1. The client opens a URL **once** while online.
2. The browser downloads and permanently caches the app **and both model
   files** (~55 MB total, one time) using a Service Worker.
3. After that first visit it works **100% offline, forever** — even with no
   signal in the field. Analysis, counting, the detection viewer, and CSV/Excel
   export all run locally. No image ever leaves the device.

The only thing that needs internet is the optional GPS **map tiles**; counts,
classifications, and exports are fully offline.

---

## Deploying it (one-time, ~10 min)

The app is just static files in `dist/`. Host them anywhere that serves static
files over HTTPS. Three easy free options:

### Option 1 — Netlify Drop (easiest, no account math)
1. Run `npm install && npm run build` (produces `dist/`).
2. Go to https://app.netlify.com/drop
3. Drag the whole **`dist`** folder onto the page.
4. You get a URL like `https://tree-dx.netlify.app`. Send it to your clients.

### Option 2 — GitHub Pages
1. Push this project to a GitHub repo.
2. `npm run build`, then push the `dist/` contents to a `gh-pages` branch
   (or use the Pages action). Enable Pages in repo settings.

### Option 3 — Any web server / intranet
Copy `dist/` to any static host (Apache, nginx, S3, SharePoint static hosting,
a shared drive served over HTTP). Because `base: './'` is set, it works from any
subfolder.

> **HTTPS is required** for offline (Service Worker) to work — every host above
> provides it automatically. `http://localhost` also works for local testing.

---

## For your clients

1. Open the URL once (any modern browser: Chrome, Edge, Safari, Firefox).
2. Optionally click the browser's **Install** icon in the address bar to add it
   as a desktop/home-screen app (looks and launches like a native app).
3. After the first load, it works offline forever. Pick a model, drop in drone
   images, get results, export CSV/Excel.

No installer, no Gatekeeper prompt, no admin rights, nothing to sign.

---

## Developing / rebuilding
```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build at http://localhost:4173
```

### Updating models
Replace the files in `public/models/` (`acorn_type.onnx`, `acorn_count.onnx`)
and adjust `public/models/config.json` (confidence threshold, NMS IoU, count
density bands are in the app). Rebuild and redeploy. Clients get the update on
their next online visit automatically.

---

## Performance note
Acorn counting tiles each 8000×5332 drone image into ~130 patches run through
YOLOv8 in WebAssembly. Expect ~1–3 minutes per image on a typical laptop
(faster on machines with more CPU cores; the app uses multiple threads). Acorn
Type classification is near-instant. Accuracy is identical to the desktop app.

© 2025 Edge Forestry
