"use client";

import { Sparkles } from "lucide-react";

const BENEFITS = [
  "340% mais resistência contra raios UV, calor e intempéries naturais",
  "Aumenta em até 80% a intensidade de brilho e o reflexo",
  "Melhora em até 500% a sensação ao toque",
  "Até 7x mais proteção contra fezes de aves",
  "Até 7x mais repelente a líquidos, sujeira e agentes contaminantes",
  "Até 10x mais proteção contra seivas de árvores",
  "Transfere até 35% mais resistência ao verniz contra impactos e arranhões",
];

function Card({ text }: { text: string }) {
  return (
    <div className="mx-4 flex h-44 w-72 shrink-0 flex-col justify-between rounded-2xl border border-brand-foreground/15 bg-brand-foreground/5 p-6 text-left backdrop-blur-md shadow-lg">
      <Sparkles className="size-6 text-brand" />
      <p className="text-sm font-medium leading-snug text-brand-foreground">{text}</p>
    </div>
  );
}

export function BenefitsCarousel() {
  const loop = [...BENEFITS, ...BENEFITS];
  return (
    <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-benefits-scroll">
        {loop.map((b, i) => (
          <Card key={i} text={b} />
        ))}
      </div>
    </div>
  );
}
