import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#4ade80",
  colorTo = "#065f46",
  delay = 0,
}: BorderBeamProps) => {
  const style: CSSProperties = {
    "--size": `${size}px`,
    "--duration": `${duration}s`,
    "--border-width": `${borderWidth}px`,
    "--color-from": colorFrom,
    "--color-to": colorTo,
    "--delay": `-${delay}s`,
  } as CSSProperties;

  return (
    <div
      style={style}
      className={cn("border-beam pointer-events-none absolute inset-0 rounded-[inherit]", className)}
    />
  );
};

export default BorderBeam;
