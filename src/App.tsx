import { useEffect, useMemo, useRef, useState } from "react";
import { artStyles, categories } from "./data/styles";
import Header from "./components/Header";
import Toolbar, { ALL_CATEGORIES } from "./components/Toolbar";
import StyleCard from "./components/StyleCard";
import Toast from "./components/Toast";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  });
  const toastTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return artStyles.filter((style) => {
      const matchesCategory =
        activeCategory === ALL_CATEGORIES || style.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [
        style.name,
        style.description,
        style.category,
        ...style.tags,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeCategory]);

  const showToast = (styleName: string) => {
    setToast({ message: `“${styleName}” prompt copied to clipboard`, visible: true });
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(
      () => setToast((t) => ({ ...t, visible: false })),
      2000,
    );
  };

  return (
    <div className="min-h-full">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Toolbar
          query={query}
          onQueryChange={setQuery}
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          resultCount={filtered.length}
        />

        {filtered.length > 0 ? (
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((style) => (
              <li
                key={style.id}
                style={{ animation: "fade-in-up 0.4s ease-out both" }}
              >
                <StyleCard style={style} onCopied={showToast} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            onReset={() => {
              setQuery("");
              setActiveCategory(ALL_CATEGORIES);
            }}
          />
        )}
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
        StylePrompt — explore, copy, create. Prompts work with Midjourney, DALL·E,
        Stable Diffusion &amp; more.
      </footer>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-20 flex flex-col items-center text-center">
      <div className="text-5xl">🎨</div>
      <h2 className="mt-4 text-xl font-semibold text-white">No styles found</h2>
      <p className="mt-2 max-w-sm text-zinc-400">
        Try a different keyword or category — there are plenty of styles waiting to
        inspire you.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
      >
        Clear filters
      </button>
    </div>
  );
}
