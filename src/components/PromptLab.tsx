"use client";

import React, { useState } from "react";
import { Shield, AlertTriangle, Check, Copy, BookOpen, Crown, Feather, Scroll, Compass, Award } from "lucide-react";
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

  // Victorian Cryptographic Telegraph Interceptor
  const simulateSanitization = (input: string) => {
    const hasSecret = /sk-[a-zA-Z0-9]{20,}/.test(input) || /Bearer\s+[a-zA-Z0-9_.-]+/.test(input);
    const hasChaining = /[;&|`]/.test(input);
    const hasTraversal = /\.\.\//.test(input);

    let sanitized = input;
    if (hasSecret) {
      sanitized = sanitized.replace(/sk-[a-zA-Z0-9]{20,}/g, "[REDACTED_BY_ORDER_OF_PARLIAMENT]");
      sanitized = sanitized.replace(/Bearer\s+[a-zA-Z0-9_.-]+/g, "Bearer [REDACTED_CREDENTIAL]");
    }

    const blocked = hasChaining || hasTraversal;

    return {
      blocked,
      sanitized,
      reason: blocked
        ? hasChaining
          ? "Transmission Impounded: Contraband shell chaining operator (; or && or |) intercepted"
          : "Transmission Impounded: Malicious directory traversal (../) prohibited by security writ"
        : "Royal Censor Approved: Safe pre-execution transmission verified and dispatch-ready",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  return (
    <section
      id="lab"
      className="py-24 bg-[#F5EFE6] text-[#2C2523] border-t border-[#DDD3C4] relative overflow-hidden select-none"
    >
      {/* Victorian Vintage Engraving Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120, 95, 60, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 95, 60, 0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Victorian Royal Academy Header */}
        <div className="text-center mb-16 relative">
          {/* Engraved Regency Header Ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE2D5] border border-[#C5B498] text-[#5C4318] font-serif text-xs tracking-[0.2em] uppercase mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#8A631E]" />
            <span>VICTORIAN COMPENDIUM &bull; ROYAL ACADEMY OF CONTEXT &bull; EST. 2024</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1C1715] leading-tight">
            A Treatise on Prompt &amp; Context Engineering
          </h3>

          <div className="flex items-center justify-center gap-3 my-2 text-[#9E8256] text-xs font-serif">
            <span>❦</span>
            <span className="w-16 h-px bg-[#C8B89E]" />
            <span className="italic">Vol. IV &bull; Disquisition on Agentic Principles</span>
            <span className="w-16 h-px bg-[#C8B89E]" />
            <span>❧</span>
          </div>

          <p className="mt-2 text-sm sm:text-base text-[#6E6358] max-w-2xl mx-auto font-serif leading-relaxed">
            Being an empirical investigation into immutable system invariants, hierarchical context window allocations, and zero-trust pre-execution censors for reasoning engines.
          </p>
        </div>

        {/* The Victorian Compendium Volume (Double-Bordered Vellum Console) */}
        <div className="rounded-2xl bg-[#FCFAF7] border-4 border-double border-[#C5A059]/70 shadow-[0_10px_35px_rgba(50,35,20,0.06)] overflow-hidden">
          {/* Engraved Gilded Volume Header Bar */}
          <div className="flex items-center justify-between border-b-2 border-[#D8C7AA] bg-[#EFE7D8] px-6 py-3 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#6B1D24] border border-[#501319] shadow-2xs inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#9E7B38] border border-[#7A5D25] shadow-2xs inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#244833] border border-[#163322] shadow-2xs inline-block" />
            </div>

            {/* Inscribed Chapter Title */}
            <div className="text-xs font-serif text-[#5C4318] flex items-center gap-2 tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#8A631E]" />
              <span className="font-bold uppercase">DISQUISITION:</span>
              <span className="font-mono text-[#1C1715] font-semibold">{activeModule.id}.ts</span>
            </div>

            <div className="text-xs font-serif text-[#6E6358] flex items-center gap-1.5">
              <span className="font-bold">Standard:</span>
              <span className="font-mono text-[#1C1715]">TypeScript 5.4</span>
            </div>
          </div>

          {/* Victorian Book Ribbon Bookmark Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#D8C7AA] bg-[#F5EFE4] px-4 pt-2.5 gap-2">
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.promptEngineeringLab.modules.map((mod, idx) => {
                const isActive = activeTab === mod.id;
                const romanNumerals = ["I", "II", "III"];
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveTab(mod.id)}
                    className={`px-4 py-2 text-xs font-serif rounded-t-lg flex items-center gap-2 transition-all border-t-2 ${
                      isActive
                        ? "bg-[#FCFAF7] text-[#6B1D24] border-[#6B1D24] font-bold shadow-2xs"
                        : "bg-transparent text-[#786D61] border-transparent hover:text-[#1C1715] hover:bg-[#EAE2D3]"
                    }`}
                  >
                    <span className="font-serif font-bold text-[#8A631E]">{romanNumerals[idx] || "IV"}.</span>
                    <span>{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => copyCode(activeModule.code)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-2 rounded-sm bg-[#EFE7D8] hover:bg-[#E5DBC7] text-xs font-serif text-[#5C4318] border border-[#C5A059] transition-colors shadow-2xs font-semibold cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Transcription Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8A631E]" />
                  <span>Transcribe Specification</span>
                </>
              )}
            </button>
          </div>

          {/* Compendium Page Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#FCFAF7]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8DEC9]">
              <div>
                <span className="inline-block px-3 py-0.5 rounded-sm text-[11px] font-serif uppercase tracking-widest bg-[#EFE7D8] text-[#6B1D24] border border-[#D5C29F] font-bold mb-1.5">
                  CHAPTER {activeTab === "system-invariants" ? "I" : activeTab === "zero-trust-mcp" ? "II" : "III"} &bull; {activeModule.type}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1715] tracking-tight">
                  {activeModule.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#6E6358] font-serif italic max-w-md leading-relaxed">
                {activeModule.description}
              </p>
            </div>

            {/* Victorian Iron Gall Ink Engraved Slate */}
            <div className="relative rounded-xl bg-[#231F1D] border-2 border-[#6E5632] p-5 font-mono text-xs text-[#F2ECE4] overflow-x-auto shadow-inner">
              <div className="absolute top-2 right-4 text-[10px] font-serif text-[#C5A059]/60 tracking-widest uppercase pointer-events-none">
                ❧ EX LIBRIS AGENTIS
              </div>
              <pre className="leading-relaxed whitespace-pre font-mono text-[11.5px] pt-1">
                {activeModule.code}
              </pre>
            </div>

            {/* Interactive Victorian Cryptographic Telegraph Guard (Zero-Trust Interceptor) */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t-2 border-[#E8DEC9] space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-serif font-bold uppercase tracking-wider text-[#5C4318] flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#8A631E]" />
                    <span>The Analytical Engine&apos;s Zero-Trust Telegraph Censor</span>
                  </h5>
                  <span className="text-[11px] font-serif italic text-[#6E6358]">
                    Intercepts illicit command injection &amp; impounds unauthorized secret credentials
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-serif text-[#5C4318] font-semibold">
                    Inbound Dispatch Message for Inspection:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-sm bg-white border-2 border-[#C5A059] text-xs font-mono text-[#1C1715] focus:outline-none focus:border-[#6B1D24] transition shadow-2xs"
                  />
                </div>

                <div
                  className={`p-4 rounded-sm border-2 text-xs font-serif ${
                    simulationResult.blocked
                      ? "bg-[#FDF2F0] border-[#8B2329] text-[#7A1C22]"
                      : "bg-[#F0F7F3] border-[#1D5E3A] text-[#14482B]"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1 tracking-wide">
                    {simulationResult.blocked ? (
                      <AlertTriangle className="w-4 h-4 text-red-700" />
                    ) : (
                      <Check className="w-4 h-4 text-emerald-800" />
                    )}
                    <span>{simulationResult.reason}</span>
                  </div>
                  <div className="text-[#3A332E] text-[11px] mt-2 font-mono">
                    <span className="font-serif font-bold text-[#5C4318]">Sanctified Dispatch Payload: </span>
                    <span className="bg-white px-2.5 py-1 rounded border border-[#D5C7B0] text-[#1C1715] inline-block mt-1">
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
