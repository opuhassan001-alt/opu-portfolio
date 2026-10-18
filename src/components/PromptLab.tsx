"use client";

import React, { useState } from "react";
import { Shield, AlertTriangle, Check, Copy, FileCode, Sparkles, Compass, Eye, Moon, Clock, Wind, Orbit } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function PromptLab() {
  const [activeTab, setActiveTab] = useState(
    portfolioData.promptEngineeringLab.modules[0].id
  );
  const [copied, setCopied] = useState(false);
  const [testInput, setTestInput] = useState(
    "SELECT * FROM users WHERE key = 'sk-proj-9a8b7c6d5e4f3a2b1c0d';"
  );

  const activeModule =
    portfolioData.promptEngineeringLab.modules.find((m) => m.id === activeTab) ||
    portfolioData.promptEngineeringLab.modules[0];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Live surrealist reality anchor
  const simulateSanitization = (input: string) => {
    const hasSecret = /sk-[a-zA-Z0-9]{20,}/.test(input) || /Bearer\s+[a-zA-Z0-9_.-]+/.test(input);
    const hasChaining = /[;&|`]/.test(input);
    const hasTraversal = /\.\.\//.test(input);

    let sanitized = input;
    if (hasSecret) {
      sanitized = sanitized.replace(/sk-[a-zA-Z0-9]{20,}/g, "[DISSOLVED_SECRET_KEY]");
      sanitized = sanitized.replace(/Bearer\s+[a-zA-Z0-9_.-]+/g, "Bearer [DISSOLVED_TOKEN]");
    }

    const blocked = hasChaining || hasTraversal;

    return {
      blocked,
      sanitized,
      reason: blocked
        ? hasChaining
          ? "Paradox Collapsed: Subconscious shell command chaining operator (; or && or |) dissolved"
          : "Paradox Collapsed: Impossible directory traversal attack (../) anchored back to reality"
        : "Dream Stabilized: Zero-trust invariant filter holds waking consciousness intact",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  return (
    <section
      id="lab"
      className="py-24 bg-[#0F0D1A] text-[#EDE7F6] border-t-2 border-[#312547] relative overflow-hidden select-none"
    >
      {/* Surrealist Dreamscape Background: Warped Horizon & Celestial Nebula */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 20%, #7C3AED 0%, transparent 60%), radial-gradient(circle at 80% 80%, #F59E0B 0%, transparent 45%), linear-gradient(to right, rgba(167, 139, 250, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(167, 139, 250, 0.06) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 100% 100%, 36px 36px, 36px 36px",
        }}
      />

      {/* Floating Surrealist Cloud / Eye Orbs */}
      <div className="absolute top-10 left-10 w-72 h-44 bg-[#6D28D9]/20 rounded-[50%] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-48 bg-[#D97706]/15 rounded-[60%_40%_70%_30%] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Surrealism Section Header */}
        <div className="text-center mb-16 relative">
          {/* Surrealist Metaphysical Ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1735] border border-[#A78BFA]/40 text-[#DDD6FE] font-serif text-xs italic tracking-widest uppercase mb-3 shadow-[0_0_25px_rgba(139,92,246,0.2)]">
            <Eye className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>LA PERSISTANCE DU CONTEXTE • SURREALIST METAPHYSICS</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#FAF5FF] leading-tight drop-shadow-md">
            Prompt &amp; Context Engineering Dreamscape
          </h3>

          <p className="mt-3 text-sm sm:text-base text-[#C4B5FD] max-w-xl mx-auto font-serif italic leading-relaxed">
            Where tokens bend like liquid clocks and system invariants anchor artificial consciousness in waking reality.
          </p>

          {/* Dali Warped Melting Badge */}
          <div className="mt-4 flex items-center justify-center gap-3 text-xs font-mono text-[#FCD34D]">
            <Clock className="w-3.5 h-3.5 animate-pulse text-[#F59E0B]" />
            <span>~32,000 Liquid Tokens in Equilibrium</span>
            <span>•</span>
            <span>Zero Hallucination Drift</span>
          </div>
        </div>

        {/* Surrealist Studio Canvas */}
        <div className="rounded-[2.5rem] bg-[#171329] border-2 border-[#4C3B6B] shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden relative">
          {/* Top Twilight Horizon Bar */}
          <div className="flex items-center justify-between border-b-2 border-[#382C52] bg-[#221A3B] px-6 py-3.5 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EC4899] shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#8B5CF6] shadow-xs" />
            </div>

            {/* Dreamscape Title */}
            <div className="text-xs font-serif italic tracking-wider text-[#FDE68A] flex items-center gap-2">
              <Orbit className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span className="font-bold">Ethereal Continuum:</span>
              <span className="font-mono text-white not-italic">{activeModule.id}.ts</span>
            </div>

            <div className="text-xs font-mono text-[#DDD6FE] flex items-center gap-1.5">
              <Moon className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>TypeScript 5.4</span>
            </div>
          </div>

          {/* Dream Module Floating Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#382C52] bg-[#140F24] px-4 pt-2.5 gap-2">
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.promptEngineeringLab.modules.map((mod) => {
                const isActive = activeTab === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveTab(mod.id)}
                    className={`px-4 py-2 text-xs font-serif rounded-t-2xl flex items-center gap-2 transition-all border-t-2 ${
                      isActive
                        ? "bg-[#221A3B] text-[#FDE68A] border-[#F59E0B] font-bold shadow-sm"
                        : "bg-transparent text-[#A78BFA] border-transparent hover:text-white hover:bg-[#1C1530]"
                    }`}
                  >
                    <span className="text-[11px] font-mono text-[#F59E0B]">◈</span>
                    <span>{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => copyCode(activeModule.code)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-2 rounded-full bg-[#271E42] hover:bg-[#342759] text-xs font-serif text-[#FDE68A] border border-[#F59E0B]/40 transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-bold">Dream Pattern Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Copy Pattern</span>
                </>
              )}
            </button>
          </div>

          {/* Dream Scriptorium Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#171329]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#382C52]">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-serif italic bg-[#2D214D] text-[#FDE68A] border border-[#F59E0B]/40 uppercase mb-2">
                  {activeModule.type} • METAPHYSICAL FOUNDATION
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {activeModule.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#DDD6FE] font-serif italic max-w-md">
                {activeModule.description}
              </p>
            </div>

            {/* Surrealist Liquid Code Slate */}
            <div className="relative rounded-2xl bg-[#0B0914] border-2 border-[#382C52] p-4 sm:p-5 font-mono text-xs text-[#E9D5FF] overflow-x-auto shadow-inner">
              <div className="absolute top-2 right-4 text-[10px] font-serif italic text-[#F59E0B]/50 tracking-widest pointer-events-none">
                L&apos;ESPRIT DE LA MACHINE
              </div>
              <pre className="leading-relaxed whitespace-pre font-mono text-[11.5px] pt-1">
                {activeModule.code}
              </pre>
            </div>

            {/* Interactive Reality Anchor: Zero-Trust DLP Gatekeeper */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t-2 border-[#382C52] space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-serif font-bold tracking-wider text-[#FDE68A] flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#F59E0B]" />
                    <span>The Anchor of Reality (Zero-Trust Invariant Gatekeeper)</span>
                  </h5>
                  <span className="text-[11px] font-serif italic text-[#C4B5FD]">
                    Prevents agent hallucinations from breaching execution safety
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-serif italic text-[#DDD6FE]">
                    Inbound Agent Thought / Tool Invocation:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D0A17] border-2 border-[#4C3B6B] text-xs font-mono text-white focus:outline-none focus:border-[#F59E0B] transition shadow-inner"
                  />
                </div>

                <div
                  className={`p-4 rounded-xl border-2 text-xs font-serif ${
                    simulationResult.blocked
                      ? "bg-[#331422] border-[#EC4899] text-[#FBCFE8]"
                      : "bg-[#132B25] border-[#10B981] text-[#A7F3D0]"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1 tracking-wide">
                    {simulationResult.blocked ? (
                      <AlertTriangle className="w-4 h-4 text-[#EC4899]" />
                    ) : (
                      <Check className="w-4 h-4 text-[#10B981]" />
                    )}
                    <span>{simulationResult.reason}</span>
                  </div>
                  <div className="text-[#E9D5FF] text-[11px] mt-2 font-mono">
                    <span className="font-serif font-bold text-[#FDE68A]">Waking Reality Result: </span>
                    <span className="bg-[#0B0914] px-2.5 py-1 rounded border border-[#382C52] text-white inline-block mt-1">
                      {simulationResult.sanitized}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
