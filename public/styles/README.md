# Example images

Drop real example images for each art style in this folder.

## Naming convention

Each image must be named after the style's `id` (see `src/data/styles.ts`) with a
`.jpg` extension:

```
public/styles/<id>.jpg
```

For example:

- `cyberpunk-neon.jpg`
- `soft-watercolor.jpg`
- `classical-oil.jpg`

## How it works

Every card in the gallery tries to load `/styles/<id>.jpg`. If the file exists, the
card shows your real image. If it's missing (or fails to load), the card automatically
falls back to generated gradient art based on the style's color palette — so the
gallery always looks complete, and upgrades itself as you add images here.

## Recommended specs

- **Aspect ratio:** 4:3 (e.g. 1200×900). Images are cropped to fill, so other ratios
  work but 4:3 looks best.
- **Format:** `.jpg` (you can change the extension by editing the `image` field in
  `src/data/styles.ts`).
- Keep files reasonably small (ideally < 300 KB each) for fast loading.
