"use client";

import React, { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function AdhamHero() {
  const [hoveredSide, setHoveredSide] = useState<"none" | "left" | "right">("none");
  const [slidingSide, setSlidingSide] = useState<"none" | "left" | "right">("none");
  const [mouseShift, setMouseShift] = useState(0);

  // Mouse tracking across hero stage (mirrors Adham Dannaway's interactive physics)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (slidingSide !== "none") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0 (far left) to 1 (far right)
    const normalized = (relX - 0.5) * 2; // -1 to +1

    // Subtle horizontal dampening shift (up to ±26px)
    const shiftPx = Math.round(normalized * 26);
    setMouseShift(shiftPx);

    if (relX < 0.46) {
      setHoveredSide("left");
    } else if (relX > 0.54) {
      setHoveredSide("right");
    } else {
      setHoveredSide("none");
    }
  };

  const handleMouseLeave = () => {
    if (slidingSide === "none") {
      setHoveredSide("none");
      setMouseShift(0);
    }
  };

  // Click handler that slides the face towards the chosen side before scrolling
  const handleSideClick = (side: "left" | "right", targetId: string) => {
    setSlidingSide(side);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => {
        setSlidingSide("none");
      }, 900);
    }, 140);
  };

  // Determine current image transformation
  let translateX = mouseShift;
  let scale = 1;

  if (slidingSide === "left") {
    translateX = -52;
    scale = 1.04;
  } else if (slidingSide === "right") {
    translateX = 52;
    scale = 1.04;
  } else if (hoveredSide === "left") {
    translateX = Math.min(mouseShift, -18);
    scale = 1.025;
  } else if (hoveredSide === "right") {
    translateX = Math.max(mouseShift, 18);
    scale = 1.025;
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200/80 pt-6 pb-12 sm:pb-20 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability / Sub-header bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {portfolioData.personal.availability}
          </div>
        </div>

        {/* Adham Dannaway Exact Split Stage */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 min-h-[480px] lg:min-h-[560px]">
          {/* LEFT: DESIGNER / MARKETER COLUMN */}
          <div
            onMouseEnter={() => setHoveredSide("left")}
            onMouseLeave={() => setHoveredSide("none")}
            className={`w-full lg:w-[24%] text-center lg:text-left z-20 transition-all duration-300 ${
              hoveredSide === "right" ? "opacity-35 blur-[0.3px]" : "opacity-100"
            }`}
          >
            <a
              href="#marketing-work"
              onClick={(e) => {
                e.preventDefault();
                handleSideClick("left", "marketing-work");
              }}
              className="inline-block group focus:outline-none cursor-pointer"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-slate-900 group-hover:text-[#C2410C] transition-colors lowercase leading-none">
                marketer
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-sm">
                Growth &amp; product marketer specialising in consumer psychology, brand strategy and business analytics.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#C2410C] group-hover:translate-x-1.5 transition-transform">
                <span>View marketing work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

          {/* CENTER: THE MASTER SPLIT PORTRAIT (Significantly Enlarged & Fully Interactive) */}
          <div className="relative w-full max-w-[800px] lg:w-[52%] flex items-center justify-center z-10 px-2 sm:px-4">
            <div className="relative w-full max-w-[740px] flex items-center justify-center">
              {/* Dynamic ambient back glow shifting with cursor motion */}
              <div
                style={{
                  transform: `translateX(${translateX * 0.4}px)`,
                  transition: "transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`absolute inset-0 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
                  hoveredSide === "left"
                    ? "bg-amber-200/50"
                    : hoveredSide === "right"
                    ? "bg-emerald-200/40"
                    : "bg-slate-100/60"
                }`}
              />

              {/* Master Split Portrait with Buttery Smooth Movement */}
              <div
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  transition: "transform 380ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="relative w-full overflow-hidden rounded-2xl drop-shadow-md"
              >
                <img
                  src="/estakball-marketer-engineer.jpg"
                  alt="Estakball Hossain — Marketer & Engineer"
                  className="w-full h-auto object-contain select-none pointer-events-none block"
                />

                {/* Left Clickable Half (Marketer) */}
                <a
                  href="#marketing-work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSideClick("left", "marketing-work");
                  }}
                  onMouseEnter={() => setHoveredSide("left")}
                  aria-label="View Marketing Work"
                  className="absolute inset-y-0 left-0 w-1/2 z-30 cursor-pointer group/left-zone focus:outline-none"
                >
                  <div className="absolute bottom-4 left-6 hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-amber-200/80 text-[11px] font-semibold text-amber-900 opacity-0 group-hover/left-zone:opacity-100 transition-all duration-200 -translate-y-1 group-hover/left-zone:translate-y-0">
                    <ArrowRight className="w-3.5 h-3.5 rotate-180 text-amber-700" />
                    <span>View Marketing</span>
                  </div>
                </a>

                {/* Right Clickable Half (Engineer) */}
                <a
                  href="#ai-work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSideClick("right", "ai-work");
                  }}
                  onMouseEnter={() => setHoveredSide("right")}
                  aria-label="Explore AI Systems"
                  className="absolute inset-y-0 right-0 w-1/2 z-30 cursor-pointer group/right-zone focus:outline-none"
                >
                  <div className="absolute bottom-4 right-6 hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-emerald-200/80 text-[11px] font-semibold text-emerald-900 opacity-0 group-hover/right-zone:opacity-100 transition-all duration-200 -translate-y-1 group-hover/right-zone:translate-y-0">
                    <span>Explore AI Systems</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: CODER / ENGINEER COLUMN */}
          <div
            onMouseEnter={() => setHoveredSide("right")}
            onMouseLeave={() => setHoveredSide("none")}
            className={`w-full lg:w-[24%] text-center lg:text-right z-20 transition-all duration-300 ${
              hoveredSide === "left" ? "opacity-35 blur-[0.3px]" : "opacity-100"
            }`}
          >
            <a
              href="#ai-work"
              onClick={(e) => {
                e.preventDefault();
                handleSideClick("right", "ai-work");
              }}
              className="inline-block group focus:outline-none cursor-pointer"
            >
              <h1 className="font-mono text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors leading-none">
                <span className="text-slate-400 font-light">&lt;</span>
                engineer
                <span className="text-slate-400 font-light">&gt;</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-sm ml-auto">
                Prompt &amp; context engineer who designs zero-trust MCP systems, token-budgeted memory and reliable AI workflows.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 group-hover:-translate-x-1.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                <span>Explore AI systems</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Quick Bar */}
        <div className="mt-14 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-4">
            <span>BBA Marketing Graduate</span>
            <span>•</span>
            <span>Abdur Rajjak College</span>
            <span>•</span>
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.cvUrl}
              download="Estakball_Hossain_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

