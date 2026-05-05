const ITEMS = [
  "Excelência",
  "Performance",
  "Inovação",
  "Precisão",
  "Exclusividade",
  "Tecnologia",
];

export function MarqueeBanner() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Valores Grafeno Coat"
      style={{ background: "var(--gradient-brand)" }}
      className="relative w-full overflow-hidden border-y border-brand-foreground/10 py-5"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{ background: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)" }}
      />
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee-scroll 35s linear infinite",
          perspective: "800px",
          willChange: "transform",
        }}
      >
        {loop.map((w, i) => (
          <span
            key={i}
            className="inline-flex items-center font-display text-3xl font-extrabold uppercase tracking-tight text-brand-foreground/90 sm:text-4xl md:text-5xl"
            style={{ transform: "rotateX(12deg)" }}
          >
            {w}
            <span className="mx-6 text-brand">•</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
