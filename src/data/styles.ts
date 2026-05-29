export interface ArtStyle {
  /** Unique slug; also the basename of the example image in /public/styles. */
  id: string;
  /** Display name, e.g. "Cyberpunk Neon". */
  name: string;
  /** Grouping used by the category filter chips. */
  category: string;
  /** One-line mood / summary shown on the card. */
  description: string;
  /** Full, ready-to-paste prompt. */
  prompt: string;
  /** Extra keywords for search matching. */
  tags: string[];
  /** 2–4 hex colors driving the gradient-art fallback. */
  palette: string[];
  /** Gradient angle / seed for variety (degrees). */
  angle?: number;
  /** Path to a real image; falls back to gradient art when the file is absent. */
  image?: string;
}

/** Helper: every style points at /styles/<id>.jpg by convention. */
const img = (id: string) => `/styles/${id}.jpg`;

const styleData: Omit<ArtStyle, "image">[] = [
  {
    id: "cyberpunk-neon",
    name: "Cyberpunk Neon",
    category: "Sci-Fi",
    description: "Rain-soaked megacity drenched in electric neon and holograms.",
    prompt:
      "A lone figure in a rain-soaked cyberpunk megacity at night, towering neon signs in pink and cyan, holographic advertisements, wet reflective streets, volumetric fog, cinematic lighting, ultra-detailed, 8k, blade runner aesthetic",
    tags: ["futuristic", "neon", "city", "blade runner", "sci-fi", "night"],
    palette: ["#ff2bd6", "#7b2bff", "#15e6ff"],
    angle: 135,
  },
  {
    id: "soft-watercolor",
    name: "Soft Watercolor",
    category: "Painting",
    description: "Delicate washes and bleeding pigments on textured paper.",
    prompt:
      "A serene mountain landscape in soft watercolor, gentle pastel washes, bleeding pigments, visible paper texture, loose brushwork, dreamy atmosphere, minimal detail, airy negative space",
    tags: ["watercolor", "soft", "pastel", "painting", "landscape", "gentle"],
    palette: ["#bfe3f0", "#f6d6e6", "#fcefcf"],
    angle: 60,
  },
  {
    id: "classical-oil",
    name: "Classical Oil Painting",
    category: "Painting",
    description: "Rich impasto and chiaroscuro in the old-master tradition.",
    prompt:
      "A regal portrait in the style of a classical oil painting, dramatic chiaroscuro lighting, rich impasto brushstrokes, deep warm tones, baroque composition, museum quality, fine detail, Rembrandt lighting",
    tags: ["oil", "classical", "baroque", "portrait", "old master", "rembrandt"],
    palette: ["#5a3a1a", "#c9972b", "#1c140c"],
    angle: 120,
  },
  {
    id: "anime",
    name: "Anime",
    category: "Illustration",
    description: "Crisp cel-shaded characters with expressive eyes.",
    prompt:
      "An anime-style character portrait, cel shading, vibrant colors, expressive large eyes, dynamic hair, detailed background, studio-quality key visual, clean line art, Makoto Shinkai inspired skies",
    tags: ["anime", "manga", "cel shaded", "japanese", "character", "illustration"],
    palette: ["#ff8fb1", "#7ec8ff", "#fff1a8"],
    angle: 45,
  },
  {
    id: "surrealism",
    name: "Surrealism",
    category: "Fine Art",
    description: "Dreamlike impossible scenes where logic dissolves.",
    prompt:
      "A surreal dreamscape with melting clocks and floating islands, impossible architecture, juxtaposed objects, soft eerie light, Salvador Dali inspired, hyper-detailed, symbolic and uncanny",
    tags: ["surreal", "dream", "dali", "impossible", "abstract", "uncanny"],
    palette: ["#e8a13a", "#3a6ea5", "#d96c4a"],
    angle: 200,
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    category: "Retro",
    description: "80s nostalgia: pastel grids, statues, and chrome.",
    prompt:
      "A vaporwave aesthetic scene, retro 1980s sunset with a pink and purple gradient sky, neon grid floor, roman statue, palm trees, glitch effects, chrome text, nostalgic dreamlike vibe",
    tags: ["vaporwave", "retro", "80s", "grid", "neon", "aesthetic"],
    palette: ["#ff71ce", "#b967ff", "#01cdfe"],
    angle: 160,
  },
  {
    id: "art-deco",
    name: "Art Deco",
    category: "Retro",
    description: "Gilded symmetry, bold geometry, Gatsby-era glamour.",
    prompt:
      "An art deco poster design, bold geometric patterns, gold and black color scheme, symmetrical composition, elegant sunburst motifs, 1920s Gatsby glamour, sleek metallic accents, vintage luxury",
    tags: ["art deco", "geometric", "gold", "1920s", "vintage", "luxury"],
    palette: ["#d4af37", "#0e0e0e", "#1c5d5d"],
    angle: 90,
  },
  {
    id: "ukiyo-e",
    name: "Ukiyo-e",
    category: "Illustration",
    description: "Japanese woodblock waves, flat color, bold outlines.",
    prompt:
      "A traditional Japanese ukiyo-e woodblock print, great wave motif, flat color planes, bold outlines, Mount Fuji in the background, muted indigo and earth tones, Hokusai inspired, visible woodgrain texture",
    tags: ["ukiyo-e", "woodblock", "japanese", "hokusai", "wave", "traditional"],
    palette: ["#2a4d69", "#dcd0a8", "#bc8f56"],
    angle: 30,
  },
  {
    id: "low-poly",
    name: "Low Poly",
    category: "3D",
    description: "Faceted geometric forms in crisp flat shading.",
    prompt:
      "A low poly 3D illustration of a mountain fox, faceted geometric shapes, flat shading, vibrant gradient sky, clean minimal forms, isometric view, crisp triangulated surfaces, modern render",
    tags: ["low poly", "3d", "geometric", "faceted", "render", "minimal"],
    palette: ["#ff7e5f", "#feb47b", "#86a8e7"],
    angle: 50,
  },
  {
    id: "pixel-art",
    name: "Pixel Art",
    category: "Retro",
    description: "Charming 16-bit sprites and dithered gradients.",
    prompt:
      "A detailed pixel art scene of a cozy fantasy village at dusk, 16-bit retro game style, limited color palette, dithering, glowing lantern light, isometric perspective, crisp pixels, nostalgic SNES vibe",
    tags: ["pixel", "8-bit", "16-bit", "retro game", "sprite", "pixelated"],
    palette: ["#3a2c5a", "#e85d75", "#f9c74f"],
    angle: 70,
  },
  {
    id: "steampunk",
    name: "Steampunk",
    category: "Sci-Fi",
    description: "Brass gears, steam, and Victorian invention.",
    prompt:
      "A steampunk airship soaring above a Victorian city, brass gears and copper pipes, billowing steam, intricate clockwork machinery, warm sepia tones, ornate detail, retro-futuristic invention",
    tags: ["steampunk", "brass", "victorian", "gears", "airship", "retro-futuristic"],
    palette: ["#b5651d", "#8c6239", "#3e2b1c"],
    angle: 110,
  },
  {
    id: "gothic",
    name: "Gothic",
    category: "Fine Art",
    description: "Shadowed cathedrals and brooding romantic gloom.",
    prompt:
      "A gothic cathedral interior shrouded in shadow, towering stone arches, stained glass casting colored light, dramatic darkness, brooding romantic atmosphere, fog, ornate carvings, cinematic gloom",
    tags: ["gothic", "dark", "cathedral", "shadow", "moody", "romantic"],
    palette: ["#2b2b3a", "#5b2333", "#8a7f9c"],
    angle: 180,
  },
  {
    id: "minimalist-line",
    name: "Minimalist Line Art",
    category: "Illustration",
    description: "A single confident contour on clean negative space.",
    prompt:
      "A minimalist single-line drawing of a human face, continuous unbroken contour, black line on cream background, elegant simplicity, abundant negative space, modern editorial illustration",
    tags: ["minimal", "line art", "single line", "simple", "editorial", "clean"],
    palette: ["#f4f1ea", "#1a1a1a", "#c8c2b6"],
    angle: 20,
  },
  {
    id: "pop-art",
    name: "Pop Art",
    category: "Retro",
    description: "Bold Ben-Day dots and comic-book punch.",
    prompt:
      "A pop art portrait in the style of Roy Lichtenstein, bold Ben-Day dots, thick black outlines, primary color blocks, comic book halftone, high contrast, retro advertising punch",
    tags: ["pop art", "warhol", "lichtenstein", "comic", "dots", "bold"],
    palette: ["#ffde00", "#ff2247", "#0066ff"],
    angle: 100,
  },
  {
    id: "impressionist",
    name: "Impressionist",
    category: "Painting",
    description: "Dappled light caught in loose, broken brushstrokes.",
    prompt:
      "An impressionist painting of a garden in bloom, dappled sunlight, loose broken brushstrokes, vibrant complementary colors, soft focus, plein air feeling, Monet inspired, shimmering light",
    tags: ["impressionist", "monet", "brushstrokes", "garden", "light", "painting"],
    palette: ["#8ec5a3", "#f3c9dd", "#fbe7a1"],
    angle: 55,
  },
  {
    id: "cosmic-nebula",
    name: "Cosmic Nebula",
    category: "Sci-Fi",
    description: "Swirling stardust, deep space, and glowing gas clouds.",
    prompt:
      "A vast cosmic nebula in deep space, swirling clouds of glowing gas, brilliant star clusters, magenta and teal hues, distant galaxies, ultra-detailed astrophotography style, ethereal and infinite",
    tags: ["space", "nebula", "galaxy", "cosmic", "stars", "astrophotography"],
    palette: ["#3a1c71", "#d76d77", "#21d4fd"],
    angle: 220,
  },
  {
    id: "fantasy-concept",
    name: "Fantasy Concept Art",
    category: "Sci-Fi",
    description: "Epic painterly worlds for games and films.",
    prompt:
      "Epic fantasy concept art of a floating castle above misty cliffs, dramatic god rays, lush detail, painterly rendering, sweeping cinematic scale, golden hour, matte painting, trending on ArtStation",
    tags: ["fantasy", "concept art", "matte painting", "epic", "castle", "artstation"],
    palette: ["#1f3b57", "#d9a14b", "#7bb6a1"],
    angle: 140,
  },
  {
    id: "film-noir",
    name: "Film Noir",
    category: "Photography",
    description: "High-contrast black & white with venetian-blind shadows.",
    prompt:
      "A film noir scene, dramatic black and white, high contrast lighting, deep shadows, venetian blind light streaks, cigarette smoke, 1940s detective mood, cinematic grain, mysterious atmosphere",
    tags: ["noir", "black and white", "contrast", "detective", "shadow", "cinematic"],
    palette: ["#111111", "#9a9a9a", "#2c2c2c"],
    angle: 75,
  },
  {
    id: "synthwave",
    name: "Synthwave",
    category: "Retro",
    description: "Retro-future sunsets, chrome, and laser grids.",
    prompt:
      "A synthwave landscape, neon sunset with horizontal stripes, glowing grid road stretching to the horizon, palm tree silhouettes, retro-futuristic chrome, purple and orange glow, outrun aesthetic",
    tags: ["synthwave", "outrun", "retro", "neon", "sunset", "grid"],
    palette: ["#fe1c80", "#fc7303", "#5b1e9c"],
    angle: 165,
  },
  {
    id: "claymation",
    name: "Claymation",
    category: "3D",
    description: "Handmade clay characters with cozy fingerprint charm.",
    prompt:
      "A claymation character scene, handmade plasticine textures, visible fingerprints, soft studio lighting, stop-motion charm, rounded chunky forms, cozy whimsical mood, tilt-shift focus",
    tags: ["claymation", "clay", "stop motion", "plasticine", "3d", "whimsical"],
    palette: ["#f2a65a", "#7bc950", "#5aa9e6"],
    angle: 65,
  },
  {
    id: "stained-glass",
    name: "Stained Glass",
    category: "Fine Art",
    description: "Luminous glass panels bound by black leading.",
    prompt:
      "A stained glass window depicting a phoenix, luminous jewel-toned glass panels, bold black leading outlines, backlit glow, intricate mosaic segments, sacred geometric border, radiant light",
    tags: ["stained glass", "mosaic", "glass", "luminous", "church", "jewel tones"],
    palette: ["#1b6ca8", "#f4a259", "#bc4749"],
    angle: 130,
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    category: "Retro",
    description: "Primary shapes, grids, and functional modernism.",
    prompt:
      "A Bauhaus-inspired composition, primary color blocks, bold geometric shapes, circles squares and triangles, clean grid layout, functional modernist design, balanced asymmetry, vintage poster",
    tags: ["bauhaus", "geometric", "modernist", "primary colors", "design", "grid"],
    palette: ["#e63946", "#f1c40f", "#1d3557"],
    angle: 95,
  },
  {
    id: "isometric-3d",
    name: "Isometric 3D",
    category: "3D",
    description: "Tidy diorama worlds rendered in clean isometry.",
    prompt:
      "An isometric 3D diorama of a tiny cozy coffee shop, clean soft 3D render, pastel color scheme, miniature detail, soft global illumination, charming tilt-shift world, blender style, perfectly tidy",
    tags: ["isometric", "3d", "diorama", "render", "blender", "miniature"],
    palette: ["#a0c4ff", "#ffc6ff", "#caffbf"],
    angle: 40,
  },
  {
    id: "double-exposure",
    name: "Double Exposure",
    category: "Photography",
    description: "Two images fused — a silhouette filled with landscape.",
    prompt:
      "A double exposure portrait, silhouette of a face blended with a misty forest landscape, soft monochrome with subtle color, ethereal overlay, fine art photography, dreamy and contemplative",
    tags: ["double exposure", "photography", "silhouette", "blend", "ethereal", "forest"],
    palette: ["#2c3e50", "#95a5a6", "#dfe6e9"],
    angle: 85,
  },
  {
    id: "psychedelic",
    name: "Psychedelic",
    category: "Abstract",
    description: "Kaleidoscopic swirls of saturated, melting color.",
    prompt:
      "A psychedelic artwork, kaleidoscopic swirling patterns, hyper-saturated melting colors, fractal symmetry, 1960s trippy poster vibe, glowing rainbow gradients, hypnotic detail, visionary art",
    tags: ["psychedelic", "trippy", "kaleidoscope", "fractal", "colorful", "60s"],
    palette: ["#ff006e", "#8338ec", "#3a86ff"],
    angle: 210,
  },
  {
    id: "charcoal-sketch",
    name: "Charcoal Sketch",
    category: "Illustration",
    description: "Smudged graphite and charcoal on rough paper.",
    prompt:
      "A charcoal sketch portrait, expressive smudged shading, rough paper texture, dramatic contrast, loose gestural strokes, white highlights, monochrome fine art drawing, hand-drawn feel",
    tags: ["charcoal", "sketch", "drawing", "graphite", "monochrome", "hand-drawn"],
    palette: ["#3d3d3d", "#cfcabf", "#7a7367"],
    angle: 25,
  },
  {
    id: "minimalist-3d",
    name: "Soft 3D Render",
    category: "3D",
    description: "Pastel claylike forms with dreamy soft lighting.",
    prompt:
      "A soft minimalist 3D render of abstract floating shapes, pastel matte materials, gentle global illumination, subtle shadows, dreamy clean background, modern product aesthetic, calming and tactile",
    tags: ["3d render", "soft", "pastel", "abstract", "minimal", "matte"],
    palette: ["#ffd6e0", "#c1e7e3", "#fff4cc"],
    angle: 48,
  },
  {
    id: "comic-book",
    name: "Comic Book",
    category: "Illustration",
    description: "Dynamic inked panels with bold action energy.",
    prompt:
      "A dynamic comic book illustration, bold ink outlines, dramatic action pose, vivid flat colors, halftone shading, speed lines, dramatic perspective, superhero graphic novel style, high energy",
    tags: ["comic", "graphic novel", "ink", "superhero", "action", "halftone"],
    palette: ["#ef233c", "#2b2d42", "#ffd000"],
    angle: 105,
  },
  {
    id: "art-nouveau",
    name: "Art Nouveau",
    category: "Fine Art",
    description: "Flowing organic lines and ornate floral elegance.",
    prompt:
      "An art nouveau illustration of an elegant woman framed by flowing floral vines, ornate organic curves, muted gold and sage palette, decorative border, Alphonse Mucha inspired, intricate elegance",
    tags: ["art nouveau", "mucha", "floral", "ornate", "elegant", "decorative"],
    palette: ["#a7c4a0", "#d4af6a", "#7d5a50"],
    angle: 35,
  },
  {
    id: "macro-nature",
    name: "Macro Nature",
    category: "Photography",
    description: "Extreme close-ups with dewdrops and silky bokeh.",
    prompt:
      "An extreme macro photograph of a dew-covered leaf with a tiny insect, razor-thin depth of field, silky bokeh, glistening water droplets, vivid natural color, crisp detail, golden morning light",
    tags: ["macro", "photography", "nature", "bokeh", "close-up", "insect"],
    palette: ["#3a7d44", "#9ed670", "#f2e8a6"],
    angle: 58,
  },
  {
    id: "ink-wash",
    name: "Ink Wash (Sumi-e)",
    category: "Painting",
    description: "Zen brush strokes in flowing black ink on white.",
    prompt:
      "A traditional sumi-e ink wash painting of bamboo in the wind, fluid expressive black brush strokes, varied ink density, abundant white space, zen minimalism, single accent of red seal stamp",
    tags: ["sumi-e", "ink wash", "zen", "brush", "minimal", "japanese"],
    palette: ["#1a1a1a", "#f5f3ee", "#b23a48"],
    angle: 28,
  },
];

export const artStyles: ArtStyle[] = styleData.map((s) => ({
  ...s,
  image: img(s.id),
}));

/** Distinct categories, in first-seen order, for the filter chips. */
export const categories: string[] = Array.from(
  new Set(artStyles.map((s) => s.category)),
);
