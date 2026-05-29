interface ToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (value: string) => void;
  resultCount: number;
}

export const ALL_CATEGORIES = "All";

export default function Toolbar({
  query,
  onQueryChange,
  categories,
  activeCategory,
  onCategoryChange,
  resultCount,
}: ToolbarProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search styles, moods, keywords…"
          aria-label="Search art styles"
          className="w-full rounded-xl border border-white/10 bg-zinc-900/70 py-3 pl-11 pr-4 text-base text-white placeholder:text-zinc-500 focus:border-fuchsia-400/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Chip
          label={ALL_CATEGORIES}
          active={activeCategory === ALL_CATEGORIES}
          onClick={() => onCategoryChange(ALL_CATEGORIES)}
        />
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            active={activeCategory === cat}
            onClick={() => onCategoryChange(cat)}
          />
        ))}
      </div>

      <p className="text-sm text-zinc-500" aria-live="polite">
        {resultCount} {resultCount === 1 ? "style" : "styles"}
      </p>
    </div>
  );
}

interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function Chip({ label, active, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 ${
        active
          ? "border-transparent bg-white text-zinc-900"
          : "border-white/10 bg-zinc-900/60 text-zinc-300 hover:border-white/25 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg
      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
