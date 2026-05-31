<div align="center">

<img src="./docs/banner.svg" alt="StylePrompt — the ultimate AI art inspiration gallery" width="100%" />

# StylePrompt

**The ultimate AI art inspiration gallery.** Browse a clean gallery of beautiful art styles — each with a ready-to-use prompt. Tap **Copy Prompt** and paste straight into Midjourney, DALL·E, Stable Diffusion, or any AI generator. No typing, no guessing — just explore, copy, and create.

[![License: MIT](https://img.shields.io/badge/License-MIT-7c3aed.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-18-22d3ee.svg?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg?logo=vite&logoColor=white)](https://vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8.svg?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-d946ef.svg)](#-contributing)

[Deploy](#-deploy) · [Quick start](#-quick-start) · [Add your own images](#-add-your-own-example-images) · [Contributing](#-contributing)

</div>

---

## ✨ Features

- 🎨 **30+ curated art styles** — Cyberpunk Neon, Soft Watercolor, Classical Oil, Anime, Surrealism, Vaporwave, Art Deco, Ukiyo-e, Synthwave, Stained Glass, Bauhaus, and many more.
- 📋 **One-tap copy** — every card has a **Copy Prompt** button with instant "Copied!" feedback and a toast.
- 🔍 **Live search & filters** — search by name, mood, or keyword, and filter by category chips.
- 🖼️ **Self-illustrating gallery** — each card generates unique gradient art from the style's palette, so it looks complete out of the box and **auto-upgrades** the moment you drop in real images.
- ⚡ **Fast & static** — no backend, no API keys, no runtime AI. Pure client-side React, deployable anywhere.
- 📱 **Responsive & accessible** — mobile-first 1→4 column grid, keyboard-friendly, reduced-motion aware, dark gallery aesthetic.

## 🖼️ Preview

The banner above is rendered from the app's own design language. Cards show the example art on top, the style name and category, the full prompt, and a gradient **Copy Prompt** button — exactly what you get when you run it locally.

## 🚀 Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

> Requires **Node 22+**.

## 🧩 Tech stack

| Layer      | Choice                          |
| ---------- | ------------------------------- |
| Framework  | React 18                        |
| Build tool | Vite 6                          |
| Language   | TypeScript 5 (strict)           |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Hosting    | Static — works on Netlify, Vercel, GitHub Pages, Cloudflare Pages… |

## 🗂️ Project structure

```
StylePrompter/
├─ public/
│  ├─ favicon.svg
│  └─ styles/              # drop real example images here (<id>.jpg)
├─ src/
│  ├─ components/
│  │  ├─ Header.tsx        # hero + tagline
│  │  ├─ Toolbar.tsx       # search bar + category filter chips
│  │  ├─ StyleCard.tsx     # a single gallery card
│  │  ├─ StyleArt.tsx      # image with gradient-art fallback
│  │  └─ Toast.tsx         # "copied" confirmation
│  ├─ data/styles.ts       # the art-style catalog (edit me!)
│  ├─ hooks/useCopyToClipboard.ts
│  ├─ App.tsx              # state, filtering, layout
│  └─ index.css            # Tailwind + base styles + keyframes
├─ docs/banner.svg
├─ netlify.toml
└─ index.html
```

## 🎨 Add your own pictures & prompts (no code)

The fastest way to add a new style — **just upload two files, no code edit required.**
Drop an image and a matching `.txt` prompt into a category folder under
[`src/gallery/`](./src/gallery/):

```
src/gallery/
  Sci-Fi/
    Cyberpunk Neon.jpg      ← the picture
    Cyberpunk Neon.txt      ← the prompt (same name)
```

- **Folder name** → the category (and a filter chip)
- **Image file name** → the style title
- **`.txt` contents** → the prompt (displayed + copyable)

The gallery is rebuilt automatically at deploy time (via Vite's `import.meta.glob`), so
no code change is needed. You can do it entirely from the GitHub web UI:
**`src/gallery/` → Add file → Upload files → commit.** See
[`src/gallery/README.md`](./src/gallery/README.md) for the full walkthrough.

### Other options

- **Attach an image to a built-in style:** save it as `public/styles/<id>.jpg` (the
  `id`s live in [`src/data/styles.ts`](./src/data/styles.ts)). The card swaps from its
  gradient art to your image automatically.
- **Hand-author a curated style:** add an entry to the `styleData` array in
  [`src/data/styles.ts`](./src/data/styles.ts) with `id`, `name`, `category`,
  `description`, `prompt`, `tags`, and a `palette`.

## 🌐 Deploy

This is a static site — point any host at `npm run build` with a publish directory of `dist`.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ZPARXMarketing/StylePrompter)

A [`netlify.toml`](./netlify.toml) is included with the build command, Node version, SPA fallback, and asset caching already configured. For Vercel/Cloudflare Pages, use build command `npm run build` and output directory `dist`.

## 🛣️ Roadmap

- [ ] Real example images for every style
- [ ] Copy variants (e.g. with/without aspect-ratio flags per generator)
- [ ] Favorites / "my prompts" saved locally
- [ ] Shareable deep links to a single style

## 🤝 Contributing

Contributions are welcome! Great first PRs:

- Add a new art style (one object in `src/data/styles.ts`).
- Contribute real example images under `public/styles/`.
- Polish UI, accessibility, or animations.

Please run `npm run build` before opening a PR so the type-check and production build pass.

## 📄 License

[MIT](./LICENSE) © ZPARX Marketing

<div align="center"><sub>Built with React, Vite, TypeScript & Tailwind. Explore, copy, create. 🎨</sub></div>
