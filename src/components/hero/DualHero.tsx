"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  TrendingUp,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Download,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function DualHero() {
  const [splitPos, setSplitPos] = useState<number>(50); // percentage 0 to 100
  const [activeSide, setActiveSide] = useState<"neutral" | "marketer" | "ai">("neutral");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(15, Math.min(85, (x / rect.width) * 100));
    setSplitPos(pct);
    if (pct < 45) {
      setActiveSide("marketer");
    } else if (pct > 55) {
      setActiveSide("ai");
    } else {
      setActiveSide("neutral");
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const pct = Math.max(15, Math.min(85, (x / rect.width) * 100));
    setSplitPos(pct);
    if (pct < 45) {
      setActiveSide("marketer");
    } else if (pct > 55) {
      setActiveSide("ai");
    } else {
      setActiveSide("neutral");
    }
  }, []);

  const setFixedMode = (mode: "marketer" | "neutral" | "ai") => {
    setActiveSide(mode);
    if (mode === "marketer") setSplitPos(85);
    else if (mode === "ai") setSplitPos(15);
    else setSplitPos(50);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex flex-col justify-center border-b border-white/10 select-none py-14 lg:py-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left marketing warm-blue aura */}
        <div
          className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl transition-opacity duration-500 ${
            activeSide === "ai" ? "opacity-30" : "opacity-80"
          }`}
        />
        {/* Right AI cyber-cyan aura */}
        <div
          className={`absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl transition-opacity duration-500 ${
            activeSide === "marketer" ? "opacity-30" : "opacity-80"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Status & Switcher Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {portfolioData.personal.availability}
          </div>

          {/* Quick Dual-Mode Selector Pills */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFixedMode("marketer")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeSide === "marketer"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Growth Marketer
            </button>
            <button
              type="button"
              onClick={() => setFixedMode("neutral")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeSide === "neutral"
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              50 / 50 Dual Persona
            </button>
            <button
              type="button"
              onClick={() => setFixedMode("ai")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeSide === "ai"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Context Engineer
            </button>
          </div>
        </div>

        {/* Main 3-Column Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* LEFT COLUMN: THE GROWTH MARKETER */}
          <div
            className={`lg:col-span-4 text-center lg:text-left transition-all duration-300 ${
              activeSide === "ai" ? "opacity-40 lg:opacity-60 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              BBA Marketing Specialist
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Growth & Product{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Marketer
              </span>
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
              {portfolioData.personal.marketerTagline}
            </p>

            {/* Pillar Pills */}
            <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
              {["Consumer Behavior", "STP & 4Ps", "Dhaka Retail Research", "Excel & SQL Pareto"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-blue-950/70 border border-blue-500/30 text-blue-200 text-xs font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#marketing-track"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-blue-600/20"
              >
                Marketing Case Studies
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CENTER: THE INTERACTIVE SPLIT PORTRAIT */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-72 sm:w-80 lg:w-84 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 cursor-ew-resize group bg-slate-900"
            >
              {/* BASE LAYER: Human Marketer Photo */}
              <img
                src={portfolioData.personal.avatarHuman}
                alt="Estakball Hossain - Growth Marketer"
                className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
              />

              {/* TOP LAYER: Cybernetic AI Engineer Photo (Clipped) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-all duration-75"
                style={{
                  clipPath: `inset(0 0 0 ${splitPos}%)`,
                }}
              >
                <img
                  src={portfolioData.personal.avatarAI}
                  alt="Estakball Hossain - Prompt & Context Engineer"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              {/* DRAGGABLE / HOVER DIVIDER LINE */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-white to-cyan-400 pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{ left: `${splitPos}%`, transform: "translateX(-50%)" }}
              >
                {/* Center glowing badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/90 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-xl">
                  ‹ ›
                </div>
              </div>

              {/* Bottom Labels inside Frame */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex items-center justify-between text-[11px] font-bold text-white pointer-events-none">
                <span
                  className={`transition-opacity ${
                    splitPos > 30 ? "opacity-100 text-blue-300" : "opacity-30"
                  }`}
                >
                  ◀ Growth Marketer
                </span>
                <span
                  className={`transition-opacity ${
                    splitPos < 70 ? "opacity-100 text-cyan-300" : "opacity-30"
                  }`}
                >
                  Context Engineer ▶
                </span>
              </div>
            </div>

            {/* Instruction hint */}
            <p className="mt-3 text-center text-xs text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Hover or drag across the portrait to explore both personas
            </p>
          </div>

          {/* RIGHT COLUMN: THE CONTEXT & PROMPT ENGINEER */}
          <div
            className={`lg:col-span-4 text-center lg:text-right transition-all duration-300 ${
              activeSide === "marketer" ? "opacity-40 lg:opacity-60 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              AI Systems & MCP Builder
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Prompt &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300">
                Context Engineer
              </span>
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
              {portfolioData.personal.aiTagline}
            </p>

            {/* AI Tech Pills */}
            <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-end">
              {[
                "AgentSentinel MCP",
                "MindShield Extension",
                "Token Budgeting",
                "Zero-Trust Guardrails",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-200 text-xs font-mono font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-end">
              <a
                href="#ai-track"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-lg shadow-cyan-500/20"
              >
                AI Systems & MCP Tools
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner: The Rare Hybrid Intersection */}
        <div className="mt-14 p-5 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-cyan-900/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-slate-950 font-bold shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-sm sm:text-base text-white">
                The Sweet Spot: Where Consumer Psychology Meets Context Engineering
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Bridging real business ROI, market positioning, and autonomous AI systems without the usual agency fluff.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={portfolioData.personal.cvUrl}
              download="Estakball_Hossain_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              Download CV (PDF)
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
            >
              Contact Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

