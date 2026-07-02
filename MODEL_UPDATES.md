# Updating models & redeploying — quick guide

## A. Everyday updates (code or model) — just push to GitHub
Once the GitHub Actions workflow is set up (see below), your entire release
process is:

```bash
git add -A
git commit -m "describe the change"
git push
```

GitHub rebuilds and redeploys automatically in ~2 minutes. Clients get the
update on their next online visit (the app auto-updates its offline cache).

### One-time GitHub Pages setup
Repo → **Settings → Pages → Build and deployment → Source: "GitHub Actions"**
(not "Deploy from a branch"). That's it. The included
`.github/workflows/deploy.yml` handles the rest on every push.

---

## B. Swapping in a NEW model (future retrains)

Your models live in **`public/models/`** as ONNX files:
- `acorn_count.onnx`  — the YOLOv8 acorn detector
- `acorn_type.onnx`   — the EfficientNet Heavy/Medium/Light classifier
- `config.json`       — thresholds & settings (no rebuild logic, just values)

### Step 1 — Convert your new PyTorch model to ONNX

**Acorn Count (YOLOv8 .pt → .onnx):**
```python
from ultralytics import YOLO
YOLO("yolov8_acorn_best_NEW.pt").export(format="onnx", imgsz=640, opset=13)
# produces yolov8_acorn_best_NEW.onnx
```
Rename it to `acorn_count.onnx` and drop it in `public/models/`.

**Acorn Type (EfficientNet .pth → .onnx):**
```python
import torch, torch.nn as nn
from torchvision import models
sd = torch.load("acorn_effnetb0_NEW.pth", map_location="cpu", weights_only=False)
if isinstance(sd, dict):
    for k in ("model_state","state_dict","model","net"):
        if k in sd and isinstance(sd[k], dict): sd = sd[k]; break
sd = {k.replace("module.",""):v for k,v in sd.items()}
lin = sorted([k for k in sd if k.startswith("classifier.") and k.endswith(".weight")],
             key=lambda k:int(k.split(".")[1]))
net = models.efficientnet_b0(weights=None)
if len(lin)==1:
    nc = sd[lin[0]].shape[0]
    net.classifier = nn.Sequential(nn.Dropout(0.2, inplace=True), nn.Linear(1280, nc))
else:
    hid = sd[lin[0]].shape[0]; nc = sd[lin[1]].shape[0]
    net.classifier = nn.Sequential(nn.Dropout(0.2), nn.Linear(1280,hid), nn.ReLU(),
                                   nn.Dropout(0.2), nn.Linear(hid,nc))
net.load_state_dict(sd); net.eval()
torch.onnx.export(net, torch.randn(1,3,224,224), "acorn_type.onnx",
    input_names=["input"], output_names=["logits"],
    dynamic_axes={"input":{0:"batch"},"logits":{0:"batch"}}, opset_version=13)
```
Drop the resulting `acorn_type.onnx` in `public/models/`.

### Step 2 — (only if behaviour changed) edit config.json
```json
{
  "acorn_count": { "conf_threshold": 0.17, "nms_iou": 0.4,
                   "tile_size": 640, "tile_stride": 576,
                   "calibration": { "a": 1.0, "b": 0.0 }, "use_calibration": false },
  "acorn_type":  { "classes": ["Heavy","Medium","Light"], "input_size": 224 }
}
```
- Change `conf_threshold` to re-tune counting sensitivity — **no rebuild of code needed**.
- If you retrain with different classes, update the `classes` list (order must
  match the model's output order).
- Density bands (Heavy ≥150, Medium ≥40) are in `src/lib/inference.js`
  (`count >= 150 ...`) if you ever want to change those cutoffs.

### Step 3 — commit & push
```bash
git add public/models/
git commit -m "swap in retrained models"
git push
```
Done. Redeploys automatically; clients pick it up on next online load.

### ⚠️ Two things to keep identical when swapping models
1. **Input size**: acorn_count must stay a 640-trained YOLOv8; acorn_type must
   stay 224×224. If you change these, update `tile_size`/`input_size` accordingly.
2. **File names**: keep `acorn_count.onnx` / `acorn_type.onnx`, or update the
   names in `src/lib/inference.js` (the `getSession` function).

### Sanity-check before shipping
Deploy, open the app, run one known image, and confirm the count/class matches
what your Python evaluation produced. The browser math is verified identical to
PyTorch, so if the ONNX export is correct, the app result will match.
