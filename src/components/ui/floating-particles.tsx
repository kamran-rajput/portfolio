"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  colors?: string[];
}

// Deterministic pseudo-random number generator to prevent SSR / Client hydration mismatch
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function FloatingParticles({
  count = 14,
  className,
  colors = [
    "bg-primary/20",
    "bg-primary/15",
    "bg-accent/15",
    "bg-muted-foreground/15",
    "bg-primary/25",
  ],
}: FloatingParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const pSize = Number((pseudoRandom(i * 1 + 1) * 4 + 2).toFixed(2));
      const pLeft = Number((pseudoRandom(i * 2 + 1) * 100).toFixed(2));
      const pTop = Number((pseudoRandom(i * 3 + 1) * 100).toFixed(2));
      const pDelay = Number((pseudoRandom(i * 4 + 1) * 8).toFixed(2));
      const pDuration = Number((pseudoRandom(i * 5 + 1) * 8 + 10).toFixed(2));

      return {
        id: i,
        size: pSize,
        left: pLeft,
        top: pTop,
        delay: pDelay,
        duration: pDuration,
        color: colors[i % colors.length],
      };
    });
  }, [count, colors]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none -z-10",
        className
      )}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className={cn("absolute rounded-full", p.color)}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `float-gentle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
