import Image from "next/image";

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-charcoal px-6 py-16 text-off-white">
      {/* Subtle radial glow for depth — anchored behind the wordmark. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(123,97,228,0.18) 0%, rgba(31,34,39,0) 65%)",
        }}
      />

      <header className="relative z-10 flex flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Yetorix Y-symbol"
            width={56}
            height={56}
            priority
          />
          <span className="font-sora text-3xl font-bold tracking-tight sm:text-4xl">
            Yetorix
          </span>
        </div>
        <h1 className="font-sora text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Stories in Motion
        </h1>
        <p className="font-sora text-lg font-semibold uppercase tracking-[0.32em] text-electric-violet sm:text-xl">
          Coming Soon
        </p>
        <p className="max-w-md text-balance font-jakarta text-base leading-relaxed text-off-white/75 sm:text-lg">
          A creative studio for visual, sonic, and narrative content.
        </p>
      </header>

      {/* Service icons — decorative only. Spec calls them out as
          [Image] [Video] [Music] [Story] with no descriptions. */}
      <ul
        aria-label="Service tracks"
        className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
      >
        <ServiceTile label="Image" glyph="◇" tone="violet" />
        <ServiceTile label="Video" glyph="▷" tone="coral" />
        <ServiceTile label="Music" glyph="◉" tone="teal" />
        <ServiceTile label="Story" glyph="✸" tone="violet" />
      </ul>

      <footer className="relative z-10 mt-16 font-jakarta text-xs tracking-wide text-off-white/55">
        © 2026 Yetorix LLC
      </footer>
    </main>
  );
}

type Tone = "violet" | "coral" | "teal";

function ServiceTile({
  label,
  glyph,
  tone,
}: {
  label: string;
  glyph: string;
  tone: Tone;
}) {
  // Map tone → border + accent so each tile reads as part of the same
  // family but still nods at the brand colors. No background on idle so
  // the radial glow shows through.
  const accent = {
    violet: "#7B61E4",
    coral: "#FF6B4A",
    teal: "#1E6B77",
  }[tone];

  return (
    <li
      className="group flex h-16 w-24 flex-col items-center justify-center gap-1 rounded-md border bg-off-white/[0.02] transition-colors hover:bg-off-white/[0.05] sm:h-20 sm:w-28"
      style={{ borderColor: `${accent}66` }}
    >
      <span
        aria-hidden
        className="text-2xl leading-none sm:text-3xl"
        style={{ color: accent }}
      >
        {glyph}
      </span>
      <span className="font-sora text-[10px] font-semibold uppercase tracking-[0.18em] text-off-white/80 sm:text-xs">
        {label}
      </span>
    </li>
  );
}
