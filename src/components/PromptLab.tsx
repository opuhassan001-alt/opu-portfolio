"use client";

import React, { useState } from "react";
import { Shield, AlertTriangle, Check, Copy, FileCode, Sparkles, BookOpen, Crown, Flame, Compass } from "lucide-react";
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

  // Live sanitization simulator
  const simulateSanitization = (input: string) => {
    const hasSecret = /sk-[a-zA-Z0-9]{20,}/.test(input) || /Bearer\s+[a-zA-Z0-9_.-]+/.test(input);
    const hasChaining = /[;&|`]/.test(input);
    const hasTraversal = /\.\.\//.test(input);

    let sanitized = input;
    if (hasSecret) {
      sanitized = sanitized.replace(/sk-[a-zA-Z0-9]{20,}/g, "[REDACTED_API_KEY]");
      sanitized = sanitized.replace(/Bearer\s+[a-zA-Z0-9_.-]+/g, "Bearer [REDACTED_TOKEN]");
    }

    const blocked = hasChaining || hasTraversal;

    return {
      blocked,
      sanitized,
      reason: blocked
        ? hasChaining
          ? "Excommunicated: Blocked shell command chaining operator (; or && or |)"
          : "Excommunicated: Blocked directory traversal attack (../)"
        : "Sanctified: Zero-trust pre-execution codex filter approved",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  return (
    <section
      id="lab"
      className="py-24 bg-[#110E16] text-[#EADBCA] border-t-2 border-[#382F45] relative overflow-hidden select-none"
    >
      {/* Gothic Cathedral Pointed Arch & Rib Vault Geometric Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, #D4AF37 0%, transparent 65%), linear-gradient(to right, rgba(212, 175, 55, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.08) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 36px 36px, 36px 36px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#8B1E22]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gothic Section Header */}
        <div className="text-center mb-16 relative">
          {/* Gothic Latin Ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-sm bg-[#1C1625] border border-[#D4AF37]/50 text-[#D4AF37] font-serif text-xs font-bold tracking-[0.25em] uppercase mb-3 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>SANCTUM CONTEXTUS • EX LIBRIS AGENTIS</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#FAF3E8] leading-tight drop-shadow-md">
            Prompt &amp; Context Engineering Scriptorium
          </h3>

          <p className="mt-3 text-sm sm:text-base text-[#B3A6BC] max-w-xl mx-auto font-serif italic leading-relaxed">
            Sacred architectural codices for autonomous intelligence: system invariants, hierarchical 32k context budgeting, and zero-trust pre-execution filters.
          </p>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono text-[#D4AF37]/80">
            <span>✠ ANNO MMXXVI ✠</span>
            <span>•</span>
            <span>VERITAS PER ALGORITMUM</span>
          </div>
        </div>

        {/* Cathedral Scriptorium Codex Container */}
        <div className="rounded-xl bg-[#16121E] border-2 border-[#4A3C5C] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Gothic Arch Vault Title Bar */}
          <div className="flex items-center justify-between border-b-2 border-[#3D314D] bg-[#1E1729] px-5 py-3 select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B1E22] border border-[#D4AF37]/40 inline-block shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] border border-[#D4AF37]/60 inline-block shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B2C4F] border border-[#D4AF37]/30 inline-block shadow-xs" />
            </div>

            {/* Scriptorium Codex Title */}
            <div className="text-xs font-serif tracking-widest text-[#D4AF37] flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span className="uppercase font-bold">CODEX TRACTATUS:</span>
              <span className="font-mono text-[#FAF3E8]">{activeModule.id}.ts</span>
            </div>

            <div className="text-xs font-mono text-[#B3A6BC] flex items-center gap-2">
              <Flame className="w-3 h-3 text-[#E65100]" />
              <span>TypeScript 5.4</span>
            </div>
          </div>

          {/* Scriptorium Illuminated Manuscript Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#3D314D] bg-[#120E18] px-3 pt-2 gap-2">
            <div className="flex flex-wrap gap-1">
              {portfolioData.promptEngineeringLab.modules.map((mod) => {
                const isActive = activeTab === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveTab(mod.id)}
                    className={`px-4 py-2 text-xs font-serif flex items-center gap-2 transition-all border-t-2 ${
                      isActive
                        ? "bg-[#1E1729] text-[#D4AF37] border-[#D4AF37] font-bold shadow-inner"
                        : "bg-transparent text-[#9E90A8] border-transparent hover:text-[#FAF3E8] hover:bg-[#1A1424]"
                    }`}
                  >
                    <span className="text-[11px] font-mono opacity-60">✠</span>
                    <span>{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => copyCode(activeModule.code)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-1.5 rounded-sm bg-[#221A2F] hover:bg-[#2F2440] text-xs font-serif text-[#D4AF37] border border-[#D4AF37]/40 transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-bold">Transcription Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Copy Inscription</span>
                </>
              )}
            </button>
          </div>

          {/* Scriptorium Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#16121E]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#342A42]">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-sm text-[11px] font-serif font-bold tracking-wider bg-[#2B1F3D] text-[#D4AF37] border border-[#D4AF37]/40 uppercase mb-1.5">
                  {activeModule.type} • CHAPTER SPECIFICATION
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF3E8] tracking-wide">
                  {activeModule.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#B3A6BC] font-serif italic max-w-md">
                {activeModule.description}
              </p>
            </div>

            {/* Ancient Stone Slate Code Box */}
            <div className="relative rounded-lg bg-[#0A080F] border-2 border-[#2E243A] p-4 sm:p-5 font-mono text-xs text-[#E8DCC8] overflow-x-auto shadow-inner">
              <div className="absolute top-2 right-3 text-[10px] font-serif text-[#D4AF37]/40 tracking-widest pointer-events-none uppercase">
                ARCHIVUM CODEX
              </div>
              <pre className="leading-relaxed whitespace-pre font-mono text-[11.5px] pt-1">
                {activeModule.code}
              </pre>
            </div>

            {/* Interactive Gothic Gatekeeper Console (Zero-Trust Interceptor) */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t-2 border-[#342A42] space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-serif font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#D4AF37]" />
                    <span>Inquisitor DLP Interceptor (Live Threat Analysis)</span>
                  </h5>
                  <span className="text-[11px] font-serif italic text-[#B3A6BC]">
                    Sanctifies execution streams &amp; purges profane shell injections
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-serif text-[#D4AF37]">
                    Inbound Agent Command Inscription:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-sm bg-[#0E0B14] border-2 border-[#4A3C5C] text-xs font-mono text-[#FAF3E8] focus:outline-none focus:border-[#D4AF37] transition shadow-inner"
                  />
                </div>

                <div
                  className={`p-4 rounded-sm border-2 text-xs font-serif ${
                    simulationResult.blocked
                      ? "bg-[#2A1015] border-[#8B1E22] text-[#FCA5A5]"
                      : "bg-[#10251B] border-[#1D6F42] text-[#A7F3D0]"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1 tracking-wide">
                    {simulationResult.blocked ? (
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Check className="w-4 h-4 text-emerald-400" />
                    )}
                    <span>{simulationResult.reason}</span>
                  </div>
                  <div className="text-[#E5D7EB] text-[11px] mt-2 font-mono">
                    <span className="font-serif font-bold text-[#D4AF37]">Sanctified Output: </span>
                    <span className="bg-[#0A080F] px-2.5 py-1 rounded border border-[#3E314F] text-[#FAF3E8] inline-block mt-1">
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
