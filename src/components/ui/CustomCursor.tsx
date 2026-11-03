"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "text" | "hidden">("default");
  const [cursorText, setCursorText] = useState("");
  const [isPointerFine, setIsPointerFine] = useState(false);

  // Position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for outer ring
  const springConfig = { damping: 24, stiffness: 250, mass: 0.15 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop/mouse devices
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setIsPointerFine(finePointer);
    if (!finePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor-text") || cursorTarget.getAttribute("data-cursor") || "";
        if (text && text !== "true") {
          setCursorType("text");
          setCursorText(text);
          return;
        }
      }

      // Check standard interactive elements
      const interactive = target.closest("a, button, input, textarea, select, [role='button'], summary");
      if (interactive) {
        setCursorType("hover");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isPointerFine || !isVisible) return null;

  return (
    <>
      {/* Outer Smooth Trailing Ring / Pill */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: cursorType === "text" ? 1 : cursorType === "hover" ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {cursorType === "text" ? (
          <div className="px-3.5 py-1.5 rounded-full bg-[#eee2ca] text-[#1d1a15] text-[11px] font-subheading font-bold uppercase tracking-wider shadow-xl flex items-center gap-1 border border-[#c3a47b]/40">
            <span>{cursorText}</span>
          </div>
        ) : (
          <div
            className={`rounded-full transition-all duration-200 ${
              cursorType === "hover"
                ? "w-10 h-10 border border-[#c3a47b]/70 bg-[#c3a47b]/10 backdrop-blur-[1px]"
                : "w-7 h-7 border border-[#c3a47b]/40"
            }`}
          />
        )}
      </motion.div>

      {/* Center Precise Dot (only in default/hover mode) */}
      {cursorType !== "text" && (
        <motion.div
          aria-hidden="true"
          className="fixed top-0 left-0 pointer-events-none z-[10000] w-1.5 h-1.5 bg-[#dbc39c] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            x: mouseX,
            y: mouseY,
          }}
          animate={{
            scale: cursorType === "hover" ? 0 : 1,
            opacity: cursorType === "hover" ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      )}
    </>
  );
}
