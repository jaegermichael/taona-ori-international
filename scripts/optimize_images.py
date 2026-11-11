"""Build web-ready images from the client-supplied originals in source-images/.

Usage: python -X utf8 scripts/optimize_images.py
Outputs WebP files at several widths to public/images/ and a 1200x630 og.jpg.
"""
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source-images"
OUT = ROOT / "public" / "images"
WIDTHS = [640, 1080, 1600]


def trim_black_bars(im: Image.Image) -> Image.Image:
    """Remove solid black letterbox bars (quartz-pillar.jpg is a phone screenshot)."""
    gray = im.convert("L").point(lambda p: 255 if p > 18 else 0)
    box = gray.getbbox()
    return im.crop(box) if box else im


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = {}
    for f in sorted(SRC.glob("*.jpg")):
        im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
        im = trim_black_bars(im)
        widths = sorted({min(w, im.width) for w in WIDTHS})
        entries = []
        for w in widths:
            copy = im if w == im.width else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            dest = OUT / f"{f.stem}-{w}.webp"
            copy.save(dest, "WEBP", quality=72, method=6)
            entries.append({"w": w, "src": f"/images/{dest.name}"})
            print(f"{dest.name}: {copy.size} {dest.stat().st_size // 1024} KB")
        manifest[f.stem] = {"width": im.width, "height": im.height, "sources": entries}
    (ROOT / "src" / "data" / "images.generated.json").write_text(json.dumps(manifest, indent=2) + "\n")
    # Social share image (WhatsApp / Facebook / LinkedIn previews)
    hero = ImageOps.exif_transpose(Image.open(SRC / "wall-night-1.jpg")).convert("RGB")
    og = ImageOps.fit(hero, (1200, 630), Image.LANCZOS, centering=(0.5, 0.45))
    og.save(ROOT / "public" / "og.jpg", "JPEG", quality=82, optimize=True, progressive=True)
    print("og.jpg written")


if __name__ == "__main__":
    main()
