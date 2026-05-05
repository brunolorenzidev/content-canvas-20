"use client";

import { Player } from "@remotion/player";
import { PerspectiveMarquee } from "@/components/ui/perspective-marquee";

const ITEMS = [
  "Excelência",
  "Performance",
  "Inovação",
  "Precisão",
  "Exclusividade",
  "Tecnologia",
];

function Scene() {
  return (
    <PerspectiveMarquee
      items={ITEMS}
      color="#ffffff"
      background="transparent"
      fadeColor="#1a0010"
      fontSize={120}
    />
  );
}

export function MarqueeBanner() {
  return (
    <section
      aria-label="Valores Grafeno Coat"
      style={{ background: "var(--gradient-brand)" }}
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px]">
        <Player
          component={Scene}
          durationInFrames={600}
          fps={30}
          compositionWidth={1280}
          compositionHeight={300}
          style={{ width: "100%", height: "auto" }}
          autoPlay
          loop
          controls={false}
        />
      </div>
    </section>
  );
}
