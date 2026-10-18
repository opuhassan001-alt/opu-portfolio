"use client";

import React, { useState } from "react";
import { Copy, Terminal, Check, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function DennisLab() {
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

  // Plain-English Zero-Trust DLP Pre-Execution Inspection Engine
  const simulateSanitization = (input: string) => {
    const hasSecret = /sk-[a-zA-Z0-9]{20,}/.test(input) || /Bearer\s+[a-zA-Z0-9_.-]+/.test(input);
    const hasChaining = /[;&|`]/.test(input);
    const hasTraversal = /\.\.\//.test(input);

    let sanitized = input;
    if (hasSecret) {
      sanitized = sanitized.replace(/sk-[a-zA-Z0-9]{20,}/g, "[REDACTED_API_SECRET]");
      sanitized = sanitized.replace(/Bearer\s+[a-zA-Z0-9_.-]+/g, "Bearer [REDACTED_BEARER_TOKEN]");
    }

    const blocked = hasChaining || hasTraversal;

    return {
      blocked,
      sanitized,
      reason: blocked
        ? hasChaining
          ? "Execution Blocked: Dangerous command chaining operator (; or && or |) detected"
          : "Execution Blocked: Directory traversal (../) rejected by zero-trust gateway"
        : "Safety Check Passed: Input sanitized and approved for execution",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  // Plain human explanations for each lab module
  const modulePlainExplanations: Record<string, string> = {
    "system-prompt":
      "A structured system prompt template that ensures AI agents stick to strict JSON formats and never hallucinate answers.",
    "zero-trust-mcp":
      "An execution firewall that scans agent inputs and outputs, automatically masking secret credentials and blocking dangerous terminal commands.",
    "token-partitioning":
      "A smart memory strategy that splits the 32,000-token context window into reserved sections so the AI never runs out of room during long tasks.",
  };

  return (
    <section
      id="lab"
      className="py-28 sm:py-36 bg-[#FAFAFA] text-[#141414] border-t border-neutral-200/80 relative select-none overflow-hidden"
    >
      {/* Subtle Dennis Snellenberg Editorial Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header (Matching DennisWork Exactly) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
              <span>(02 / INTERACTIVE LAB &bull; ARCHITECTURE)</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.08]">
              Context engineering &amp; <br />
              <span className="text-neutral-400">zero-trust engine.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-md self-start md:self-end leading-relaxed">
            Live architectural frameworks for AI agent reliability, token window compaction, and runtime security firewalls.
          </p>
        </div>

        {/* Minimalist Studio Console Container (Monochrome Black & White) */}
        <div className="rounded-3xl bg-white border border-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden">
          {/* Top Bar with Numbered Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-neutral-200 px-6 py-4 bg-neutral-50/60 gap-4">
            <div className="flex flex-wrap gap-2">
              {portfolioData.promptEngineeringLab.modules.map((mod, idx) => {
                const isActive = activeTab === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveTab(mod.id)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-neutral-950 text-white shadow-sm"
                        : "bg-white text-neutral-600 hover:text-neutral-950 border border-neutral-200"
                    }`}
                  >
                    <span className="font-mono text-[11px] opacity-60">0{idx + 1}.</span>
                    <span>{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => copyCode(activeModule.code)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-mono text-neutral-800 transition-colors font-medium cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-neutral-950" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Module Content */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-100">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Specification &bull; {activeModule.type}
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-neutral-950 mt-1">
                  {activeModule.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans max-w-md leading-relaxed">
                {modulePlainExplanations[activeModule.id] || activeModule.description}
              </p>
            </div>

            {/* High-Contrast Matte Black Code Slate (Zero AI Slop) */}
            <div className="relative rounded-2xl bg-[#0F0F10] border border-neutral-800 p-6 font-mono text-xs text-neutral-200 overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800/80 text-[11px] text-neutral-400">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{activeModule.id}.ts</span>
                </span>
                <span className="text-neutral-500 font-mono">TypeScript &bull; Architecture Spec</span>
              </div>
              <pre className="leading-relaxed whitespace-pre font-mono text-[12px] text-neutral-300">
                {activeModule.code}
              </pre>
            </div>

            {/* Interactive Zero-Trust DLP Testbed (Monochrome Black & White) */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t border-neutral-100 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-800 font-semibold">
                    Live Input Sanitization Simulator
                  </h4>
                  <span className="text-xs text-neutral-500 font-sans">
                    Test how the security filter catches leaked API keys and command injections
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-neutral-500 uppercase">
                    Test Input Message:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900 transition"
                  />
                </div>

                {/* Monochrome Status Card */}
                <div className="p-4 rounded-xl bg-[#0F0F10] text-white border border-neutral-800 text-xs font-sans space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold tracking-wider ${
                        simulationResult.blocked
                          ? "bg-white text-neutral-950"
                          : "bg-neutral-800 text-neutral-200"
                      }`}
                    >
                      {simulationResult.blocked ? "BLOCKED" : "APPROVED"}
                    </span>
                    <span className="text-neutral-300">{simulationResult.reason}</span>
                  </div>

                  <div className="pt-2 border-t border-neutral-800 text-neutral-400 font-mono text-[11px]">
                    <span className="text-neutral-500 uppercase">Sanitized Output: </span>
                    <span className="text-neutral-200 ml-1">{simulationResult.sanitized}</span>
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
