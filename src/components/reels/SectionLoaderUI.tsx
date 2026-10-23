"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SectionLoaderUIProps {
  loadedCount: number;  // 0 to 16 real loaded items
  totalCount: number;   // 16
  isComplete: boolean;
  onSkip: () => void;
}

export default function SectionLoaderUI({
  loadedCount,
  totalCount,
  isComplete,
  onSkip,
}: SectionLoaderUIProps) {
  const [scrambledText, setScrambledText] = useState("Loading Showcase");
  const percent = Math.min(100, Math.round((loadedCount / totalCount) * 100));

  // Scrambled caption effect that decodes as progress reaches 100%
  useEffect(() => {
    if (isComplete || percent >= 100) {
      setScrambledText("Showcase Ready");
      return;
    }

    const target = "Loading Showcase";
    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const revealedIndex = Math.floor((percent / 100) * target.length);

    const interval = setInterval(() => {
      const result = target
        .split("")
        .map((char, idx) => {
          if (char === " ") return " ";
          if (idx < revealedIndex) return char;
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join("");
      setScrambledText(result);
    }, 70);

    return () => clearInterval(interval);
  }, [percent, isComplete]);

  // Rolling digit values
  const tens = Math.floor(percent / 10);
  const ones = percent % 10;

  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-8 sm:p-14 select-none">
      {/* Top Left: Clean Title flying into header wordmark */}
      <div className="flex items-center justify-between pointer-events-auto">
        <motion.div
          layoutId="section-header-wordmark"
          transition={{ duration: 1.4, ease: [0.5, 0, 0.15, 1] }}
          className="flex items-center gap-2"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium">
            PORTFOLIO SHOWCASE
          </span>
        </motion.div>

        {/* Visible Skip Entrance Escape Button */}
        {!isComplete && (
          <button
            onClick={onSkip}
            aria-label="Skip section entrance animation"
            className="pointer-events-auto text-xs font-mono text-neutral-500 hover:text-neutral-900 border border-neutral-300 hover:border-neutral-900 rounded-full px-3.5 py-1 transition-all"
          >
            Skip [ESC]
          </button>
        )}
      </div>

      {/* Bottom Right: Real Asset Mono Tabular Counter with Rolling Digits */}
      <div className="self-end text-right pointer-events-auto">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-1">
          {scrambledText}
        </div>

        <div className="flex items-baseline justify-end text-6xl sm:text-8xl font-mono font-medium tracking-tight text-neutral-950 overflow-hidden h-[1.12em] tabular-nums">
          {/* Tens Column */}
          <div className="relative w-[0.62em] h-full overflow-hidden">
            <motion.div
              animate={{ y: `-${tens * 10}%` }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
              className="absolute top-0 left-0 flex flex-col"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                <span key={d} className="h-[1.12em] flex items-center justify-center">
                  {d}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Ones Column */}
          <div className="relative w-[0.62em] h-full overflow-hidden">
            <motion.div
              animate={{ y: `-${ones * 10}%` }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
              className="absolute top-0 left-0 flex flex-col"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                <span key={d} className="h-[1.12em] flex items-center justify-center">
                  {d}
                </span>
              ))}
            </motion.div>
          </div>

          <span className="text-3xl sm:text-4xl text-neutral-400 font-sans font-light ml-1.5">
            %
          </span>
        </div>
      </div>
    </div>
  );
}
