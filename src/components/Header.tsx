export default function Header() {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      {/* Ambient glow backdrop. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 120% at 20% -10%, rgba(217,70,239,0.25), transparent 60%), radial-gradient(50% 120% at 90% 0%, rgba(34,211,238,0.20), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-cyan-400 text-lg font-black text-white shadow-lg">
            S
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            StylePrompt
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl">
          The ultimate AI art inspiration gallery.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Browse beautiful example art across dozens of styles. Each one comes with a
          ready-to-use prompt — just tap{" "}
          <span className="font-medium text-zinc-200">Copy Prompt</span> and paste into
          Midjourney, DALL·E, Stable Diffusion, or any AI generator. No typing, no
          guessing — explore, copy, and create.
        </p>
      </div>
    </header>
  );
}
