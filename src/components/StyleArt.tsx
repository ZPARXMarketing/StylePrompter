import { useState } from "react";
import type { ArtStyle } from "../data/styles";

interface StyleArtProps {
  style: ArtStyle;
}

/**
 * The card thumbnail. Tries to load the style's real image (`/styles/<id>.jpg`)
 * and, if it's missing or fails to load, swaps to a deterministic gradient-art
 * fallback built from the style's palette. Pure presentation — no network beyond
 * the optional image.
 */
export default function StyleArt({ style }: StyleArtProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(style.image) && !imageFailed;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
      {/* Gradient fallback — always rendered underneath so there's never a blank gap. */}
      <GradientArt style={style} />

      {showImage && (
        <img
          src={style.image}
          alt={`${style.name} example art`}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

function GradientArt({ style }: StyleArtProps) {
  const [c0, c1, c2] = normalizePalette(style.palette);
  const angle = style.angle ?? 120;

  return (
    <div className="absolute inset-0">
      {/* Base diagonal wash. */}
      <div
        className="absolute inset-0 art-drift"
        style={{
          background: `linear-gradient(${angle}deg, ${c0}, ${c1} 55%, ${c2})`,
          animation: "art-drift 18s ease-in-out infinite",
        }}
      />
      {/* Two soft radial "blobs" for depth and variety. */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 60% at ${seedPercent(angle, 18)}% ${seedPercent(
            angle,
            7,
          )}%, ${withAlpha(c2, 0.85)}, transparent 60%), radial-gradient(50% 50% at ${seedPercent(
            angle,
            71,
          )}% ${seedPercent(angle, 63)}%, ${withAlpha(c0, 0.7)}, transparent 65%)`,
          mixBlendMode: "screen",
        }}
      />
      {/* Subtle grain/sheen overlay via inline SVG. */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id={`grain-${style.id}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${style.id})`} />
      </svg>
      {/* Bottom scrim so overlaid text/badges stay legible. */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
    </div>
  );
}

/** Ensure we always have three colors to work with. */
function normalizePalette(palette: string[]): [string, string, string] {
  const p = palette.length ? palette : ["#6d28d9", "#db2777", "#06b6d4"];
  return [p[0], p[1] ?? p[0], p[2] ?? p[1] ?? p[0]];
}

/** Deterministic 0–100 position derived from the angle + an offset. */
function seedPercent(angle: number, offset: number): number {
  return Math.round(((angle + offset * 13) % 100 + 100) % 100);
}

/** Convert a #rrggbb hex to an rgba() string with the given alpha. */
function withAlpha(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((ch) => ch + ch)
          .join("")
      : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
