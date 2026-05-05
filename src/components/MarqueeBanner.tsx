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
      className="relative overflow-hidden border-y border-brand-foreground/10 py-10"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
        style={{ background: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)" }}
      />
      <div
        className="flex gap-16 whitespace-nowrap"
        style={{
          animation: "marquee-scroll 40s linear infinite",
          perspective: "800px",
        }}
      >
        {loop.map((w, i) => (
          <span
            key={i}
            className="font-display text-5xl font-extrabold uppercase tracking-tight text-brand-foreground/90 md:text-7xl"
            style={{ transform: "rotateX(12deg)" }}
          >
            {w}
            <span className="mx-8 text-brand">•</span>
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
