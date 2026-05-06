import React, { useState, useEffect, CSSProperties } from "react";

export interface BackgroundSceneProps {
  beamCount?: number;
  className?: string;
}

const BACKGROUND_BEAM_COUNT = 60;

const BackgroundScene: React.FC<BackgroundSceneProps> = ({
  beamCount = BACKGROUND_BEAM_COUNT,
  className,
}) => {
  const [beams, setBeams] = useState<Array<{ id: number; style: CSSProperties }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 2 + 4;
      const fadeDur = riseDur;
      const dropDur = Math.random() * 3 + 3;
      return {
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 3) + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s, ${dropDur}s`,
        },
      };
    });
    setBeams(generated);
  }, [beamCount]);

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: "#000500",
      }}
    >
      {/* Grid floor */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,127,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,127,0.18) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg) translateY(20%)",
          transformOrigin: "center bottom",
          animation: "moveGrid 4s linear infinite",
          maskImage: "linear-gradient(to top, black 30%, transparent 80%)",
        }}
      />
      {/* Main glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-10%",
          width: "60%",
          height: "60%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(0,255,127,0.8) 0%, transparent 60%)",
          animation: "mainGlow 3s ease-in-out infinite alternate",
        }}
      />
      {/* Floor glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "0",
          width: "80%",
          height: "20%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at center, rgba(60,255,157,0.6) 0%, transparent 70%)",
          animation: "floorGlow 5s ease-in-out infinite",
        }}
      />
      {/* Beams */}
      <div style={{ position: "absolute", inset: 0 }}>
        {beams.map((beam) => (
          <div
            key={beam.id}
            style={{
              position: "absolute",
              bottom: 0,
              height: "100%",
              background:
                "linear-gradient(to top, rgba(0,255,127,0.9), transparent)",
              animationName: "rise, fade, floorGlow",
              animationTimingFunction: "linear, ease-in-out, ease-in-out",
              animationIterationCount: "infinite",
              ...beam.style,
            }}
          />
        ))}
      </div>
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,5,0,0.85) 100%)",
        }}
      />
    </div>
  );
};

export default BackgroundScene;
