import type { ArtStyle } from "../data/styles";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import StyleArt from "./StyleArt";

interface StyleCardProps {
  style: ArtStyle;
  onCopied: (styleName: string) => void;
}

export default function StyleCard({ style, onCopied }: StyleCardProps) {
  const { copy, copied } = useCopyToClipboard();

  const handleCopy = async () => {
    const ok = await copy(style.prompt);
    if (ok) onCopied(style.name);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/50">
      <div className="relative overflow-hidden">
        <StyleArt style={style} />
        <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
          {style.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {style.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">{style.description}</p>
        </div>

        <p className="line-clamp-3 rounded-lg bg-black/30 p-3 text-sm leading-relaxed text-zinc-300">
          {style.prompt}
        </p>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy the ${style.name} prompt to your clipboard`}
          className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
            copied
              ? "bg-emerald-500 text-white"
              : "bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white hover:from-fuchsia-500 hover:to-violet-500"
          }`}
        >
          {copied ? (
            <>
              <CheckIcon /> Copied!
            </>
          ) : (
            <>
              <CopyIcon /> Copy Prompt
            </>
          )}
        </button>
      </div>
    </article>
  );
}

function CopyIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
