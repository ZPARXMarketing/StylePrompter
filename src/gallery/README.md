# Your gallery — drop files here

Add your own styles with **no code and no Claude**. Just upload files; the gallery
rebuilds itself automatically on the next deploy.

## How to add a style

Create a **category folder**, then add an **image** and a matching **`.txt` prompt**
with the same name:

```
src/gallery/
  Sci-Fi/
    Cyberpunk Neon.jpg
    Cyberpunk Neon.txt      ← the full prompt goes in here
  Painting/
    Soft Watercolor.png
    Soft Watercolor.txt
```

That's it. The result:

| From the files…            | Becomes…                          |
| -------------------------- | --------------------------------- |
| Folder name (`Sci-Fi`)     | the **category** (and a filter chip) |
| Image file name            | the style **title**               |
| `.txt` file contents       | the **prompt** (shown + copyable) |
| The image                  | the card's **picture**            |

## Uploading from the browser (no git needed)

1. On GitHub, open this `src/gallery/` folder → **Add file → Upload files**.
2. Drag in your image **and** its `.txt` file (create the category folder by typing
   `My Category/` at the start of the file name when prompted).
3. **Commit** — Netlify redeploys and the new card appears.

## Notes

- Supported image types: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.
- The `.txt` must share the image's name (e.g. `Aurora Dream.jpg` + `Aurora Dream.txt`).
- No `.txt`? The card still shows, using the title as a placeholder prompt.
- Keep images reasonably small (ideally < 300 KB) for fast loading.
- These files are bundled at **build time**, so only what's committed here ships —
  visitors to the live site can never add or change anything.
