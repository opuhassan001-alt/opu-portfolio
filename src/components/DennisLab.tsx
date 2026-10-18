"use client";

import React, { useState } from "react";
import { Shield, AlertTriangle, Check, Copy, Terminal, Code2, Lock, ArrowUpRight, Zap } from "lucide-react";
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

  // Zero-Trust DLP Pre-Execution Inspection Engine
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
          ? "Execution Intercepted: Command chaining operator (; or && or |) detected"
          : "Execution Intercepted: Path traversal (../) rejected by zero-trust gateway"
        : "Safety Check Passed: Input sanitized and approved for execution",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  return (
    <section
      id="lab"
      className="py-28 sm:py-36 bg-[#F5F5F7] text-[#141414] border-t border-neutral-200/80 relative select-none overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span>(02 / INTERACTIVE LAB &bull; ARCHITECTURE)</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.08]">
              Prompt &amp; context <br />
              <span className="text-neutral-400">engineering engine.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-md self-start md:self-end leading-relaxed">
            Live architectural implementations for LLM token compaction, zero-trust MCP protocols, and runtime credential DLP firewalls.
          </p>
        </div>

        {/* Minimalist Studio Console Container */}
        <div className="rounded-3xl bg-white border border-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Top Bar with Numbered Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-neutral-200 px-6 py-4 bg-neutral-50/50 gap-4">
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
                    <span className="font-mono text-[11px] opacity-70">0{idx + 1}.</span>
                    <span>{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => copyCode(activeModule.code)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-mono text-neutral-700 transition-colors font-semibold cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
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

          {/* Module Description & Metadata */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-100">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Module Specification &bull; {activeModule.type}
                </span>
                <h4 className="text-2xl sm:text-3xl font-medium text-neutral-950 mt-1">
                  {activeModule.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans max-w-md leading-relaxed">
                {activeModule.description}
              </p>
            </div>

            {/* High-Contrast Charcoal Code Slate */}
            <div className="relative rounded-2xl bg-[#141416] border border-neutral-800 p-6 font-mono text-xs text-neutral-200 overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{activeModule.id}.ts</span>
                </span>
                <span className="text-neutral-500 font-mono">TypeScript &bull; Zero-Trust Specification</span>
              </div>
              <pre className="leading-relaxed whitespace-pre font-mono text-[12px]">
                {activeModule.code}
              </pre>
            </div>

            {/* Interactive Zero-Trust DLP Testbed */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t border-neutral-100 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span>Live Pre-Execution DLP Simulation</span>
                  </h5>
                  <span className="text-xs text-neutral-500">
                    Test command injection and API secret sanitization in real time
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-neutral-600 font-medium">
                    Test Input Payload:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900 transition"
                  />
                </div>

                <div
                  className={`p-4 rounded-xl border text-xs font-sans ${
                    simulationResult.blocked
                      ? "bg-red-50/60 border-red-200 text-red-900"
                      : "bg-emerald-50/60 border-emerald-200 text-emerald-900"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {simulationResult.blocked ? (
                      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    ) : (
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    <span>{simulationResult.reason}</span>
                  </div>
                  <div className="text-neutral-700 text-xs mt-2 font-mono">
                    <span className="font-sans font-semibold text-neutral-800">Sanitized Dispatch: </span>
                    <span className="bg-white px-2 py-0.5 rounded border border-neutral-200 text-neutral-950 inline-block mt-1">
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

