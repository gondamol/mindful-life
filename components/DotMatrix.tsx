"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DotMatrixProps {
  totalDots: number;
  coloredDots?: Array<{ count: number; color: string }>;
  animate?: boolean;
}

export function DotMatrix({ totalDots, coloredDots = [], animate = true }: DotMatrixProps) {
  // Calculate grid dimensions (aim for roughly square grid)
  const dotsPerRow = Math.ceil(Math.sqrt(totalDots * 1.5)); // 1.5 for wider aspect ratio
  const rows = Math.ceil(totalDots / dotsPerRow);

  // Create array of dot colors
  const dotColors: string[] = [];
  let remainingDots = totalDots;

  // Fill with colored dots
  coloredDots.forEach(({ count, color }) => {
    for (let i = 0; i < count && remainingDots > 0; i++) {
      dotColors.push(color);
      remainingDots--;
    }
  });

  // Fill remaining with gray
  while (remainingDots > 0) {
    dotColors.push("bg-gray-700");
    remainingDots--;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div 
        className="grid gap-1.5"
        style={{
          gridTemplateColumns: `repeat(${dotsPerRow}, minmax(0, 1fr))`,
        }}
      >
        {dotColors.map((color, index) => (
          <motion.div
            key={index}
            initial={animate ? { scale: 0, opacity: 0 } : undefined}
            animate={animate ? { scale: 1, opacity: 1 } : undefined}
            transition={
              animate
                ? {
                    duration: 0.2,
                    delay: index * 0.001,
                    ease: "easeOut",
                  }
                : undefined
            }
            className={cn(
              "aspect-square rounded-full",
              color
            )}
          />
        ))}
      </div>
    </div>
  );
}
