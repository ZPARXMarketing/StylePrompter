# Contributing to StylePrompt

Thanks for your interest in making StylePrompt better! 🎨

## Getting set up

```bash
npm install
npm run dev      # http://localhost:5173
```

Requires **Node 22+**.

## Ways to contribute

### Add a new art style

Add one object to the `styleData` array in [`src/data/styles.ts`](./src/data/styles.ts):

```ts
{
  id: "your-style-id",        // kebab-case; also the image filename
  name: "Your Style",
  category: "Painting",        // reuse an existing category when possible
  description: "One-line mood or summary.",
  prompt: "The full, ready-to-paste prompt…",
  tags: ["keyword", "for", "search"],
  palette: ["#aabbcc", "#ddeeff", "#112233"], // 2–4 hex colors for the fallback art
  angle: 120,                  // optional: gradient angle / seed
}
```

The `image` field is added automatically as `/styles/<id>.jpg`.

### Add a real example image

Save an image in `public/styles/` named after the style's `id` (e.g. `your-style-id.jpg`).
4:3 aspect ratio looks best. The card swaps from gradient art to your image automatically.

### Improve the UI

Components live in `src/components/`. Please keep things accessible (labels, focus
states) and honor `prefers-reduced-motion`.

## Before you open a PR

Run the production build — it type-checks and bundles:

```bash
npm run build
```

CI runs the same step on every pull request. Keep PRs focused and include a short
description of the change. Thank you! 🙌
