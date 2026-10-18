"use client";

import React, { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function AdhamHero() {
  const [hoveredSide, setHoveredSide] = useState<"none" | "left" | "right">("none");

  return (
    <section
      id="hero"
      className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200/80 pt-6 pb-12 sm:pb-20 select-none"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability / Sub-header bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {portfolioData.personal.availability}
          </div>
        </div>

        {/* Adham Dannaway Exact Split Stage */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 min-h-[460px] lg:min-h-[520px]">
          {/* LEFT: DESIGNER / MARKETER COLUMN */}
          <div
            onMouseEnter={() => setHoveredSide("left")}
            onMouseLeave={() => setHoveredSide("none")}
            className={`w-full lg:w-[28%] text-center lg:text-left z-20 transition-all duration-300 ${
              hoveredSide === "right" ? "opacity-35 blur-[0.3px]" : "opacity-100"
            }`}
          >
            <a
              href="#marketing-work"
              className="inline-block group focus:outline-none"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors lowercase leading-none">
                marketer
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-sm">
                Growth &amp; product marketer specialising in consumer psychology, brand strategy and business analytics.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                <span>View marketing work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

          {/* CENTER: THE MASTER SPLIT PORTRAIT */}
          <div className="relative w-full max-w-[620px] lg:w-[48%] flex items-center justify-center z-10 px-2 sm:px-4">
            <div className="relative w-full aspect-[16/9] max-w-[560px] flex items-center justify-center">
              {/* Subtle back ambient glow */}
              <div
                className={`absolute inset-0 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${
                  hoveredSide === "left"
                    ? "bg-amber-200/40"
                    : hoveredSide === "right"
                    ? "bg-blue-100/60"
                    : "bg-slate-100/50"
                }`}
              />

              {/* The Master Image */}
              <img
                src="/estakball-marketer-engineer.jpg"
                alt="Estakball Hossain — Marketer & Engineer"
                className={`w-full h-auto object-contain transition-all duration-300 drop-shadow-sm ${
                  hoveredSide === "left"
                    ? "scale-[1.02]"
                    : hoveredSide === "right"
                    ? "scale-[1.02]"
                    : "scale-100"
                }`}
              />
            </div>
          </div>

          {/* RIGHT: CODER / ENGINEER COLUMN */}
          <div
            onMouseEnter={() => setHoveredSide("right")}
            onMouseLeave={() => setHoveredSide("none")}
            className={`w-full lg:w-[28%] text-center lg:text-right z-20 transition-all duration-300 ${
              hoveredSide === "left" ? "opacity-35 blur-[0.3px]" : "opacity-100"
            }`}
          >
            <a
              href="#ai-work"
              className="inline-block group focus:outline-none"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors leading-none">
                <span className="text-slate-400 font-light">&lt;</span>
                engineer
                <span className="text-slate-400 font-light">&gt;</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-sm ml-auto">
                Prompt &amp; context engineer who designs zero-trust MCP systems, token-budgeted memory and reliable AI workflows.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 group-hover:-translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                <span>Explore AI systems</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Quick Bar */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
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
