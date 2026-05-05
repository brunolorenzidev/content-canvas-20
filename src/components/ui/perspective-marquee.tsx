"use client";

import { useCurrentFrame } from "remotion";

export interface PerspectiveMarqueeProps {
  items?: string[];
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  pixelsPerFrame?: number;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
  fadeColor?: string;
  background?: string;
  speed?: number;
  className?: string;
}

const FONT_FAMILY =
  "Inter, -apple-system, BlinkMacSystemFont, sans-serif";

const DEFAULT_ITEMS = [
  "Excelência",
  "Performance",
  "Inovação",
  "Precisão",
  "Exclusividade",
  "Tecnologia",
];

export function PerspectiveMarquee({
  items = DEFAULT_ITEMS,
  fontSize = 84,
  color = "#fafafa",
  fontWeight = 700,
  pixelsPerFrame = 2,
  rotateY = -28,
  rotateX = 8,
  perspective = 1200,
  fadeColor = "#1a0010",
  background = "transparent",
  speed = 1,
  className,
}: PerspectiveMarqueeProps) {
  const frame = useCurrentFrame() * speed;

  const itemPadding = fontSize * 0.9;
  const approxItemWidth = items.reduce(
    (acc, item) => acc + item.length * fontSize * 0.6 + itemPadding,
    0,
  );

  const offset = -((frame * pixelsPerFrame) % approxItemWidth);
  const rendered = [...items, ...items, ...items];

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: `${perspective}px`,
        fontFamily: FONT_FAMILY,
      }}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            transform: `translateX(${offset}px)`,
          }}
        >
          {rendered.map((item, i) => {
            const itemCenter =
              i * (approxItemWidth / items.length) +
              approxItemWidth / items.length / 2 +
              offset;
            const norm = (itemCenter - 640) / 640;
            const distance = Math.min(1, Math.abs(norm));
            const blurPx = distance * 6;
            const opacity = 1 - distance * 0.4;

            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  padding: `0 ${itemPadding / 2}px`,
                  fontSize,
                  fontWeight,
                  color,
                  opacity,
                  filter: `blur(${blurPx}px)`,
                  letterSpacing: "-0.02em",
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to right, ${fadeColor} 0%, transparent 20%, transparent 80%, ${fadeColor} 100%)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
