"use client";

import React, { useState } from "react";
import { Copy, Check, Shield, AlertTriangle, Lock } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function PromptLab() {
  const [activeTab, setActiveTab] = useState<string>("system-prompt");
  const [copied, setCopied] = useState<boolean>(false);

  // Live DLP test input for Module 3
  const [testInput, setTestInput] = useState<string>(
    "curl https://api.openai.com/v1/chat/completions -H 'Authorization: Bearer sk-proj-1234567890abcdef' ; rm -rf /"
  );

  const activeModule = portfolioData.promptEngineeringLab.modules.find(
    (m) => m.id === activeTab
  )!;

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const simulateSanitization = (input: string) => {
    let sanitized = input;
    sanitized = sanitized.replace(/sk-[a-zA-Z0-9_-]{20,}/g, "[REDACTED_OPENAI_KEY]");
    sanitized = sanitized.replace(/sk_live_[a-zA-Z0-9_-]{20,}/g, "[REDACTED_STRIPE_KEY]");
    sanitized = sanitized.replace(/ghp_[a-zA-Z0-9_-]{20,}/g, "[REDACTED_GITHUB_PAT]");

    const hasChaining = /[;&|`]/.test(input);
    const hasPathTraversal = /\.\.\//.test(input);
    const blocked = hasChaining || hasPathTraversal;

    return {
      sanitized,
      blocked,
      reason: blocked
        ? hasChaining
          ? "CRITICAL: Blocked command chaining operator (; or && or |)"
          : "CRITICAL: Blocked directory traversal attack (../)"
        : "PASS: Zero-Trust Pre-Execution Approved",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  return (
    <section id="lab" className="py-24 bg-[#05080E] text-slate-100 border-t border-cyan-950/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Context Engineering Playground</span>
          </div>
          <h3 className="font-mono text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            <span className="text-cyan-400 font-light">&lt;</span>
            prompt &amp; context engineering lab
            <span className="text-cyan-400 font-light">&gt;</span>
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-mono leading-relaxed">
            Architectural patterns designed for enterprise LLMs: system prompt invariants, hierarchical context budgeting, and zero-trust pre-execution security.
          </p>
        </div>

        {/* Tabbed Card Container */}
        <div className="rounded-2xl bg-[#090D17] border border-cyan-900/50 overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.08)]">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-cyan-950 bg-[#060911] px-4 py-3 gap-2">
            <div className="flex flex-wrap gap-2">
              {portfolioData.promptEngineeringLab.modules.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveTab(mod.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === mod.id
                      ? "bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {mod.name}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => copyCode(activeModule.code)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/50 text-xs text-cyan-300 border border-cyan-800/40 font-mono transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                  {activeModule.type}
                </span>
                <h4 className="font-mono font-bold text-lg text-white">
                  {activeModule.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 font-sans">
                {activeModule.description}
              </p>
            </div>

            {/* Code Box */}
            <div className="rounded-xl bg-[#05070E] border border-cyan-950/80 p-4 sm:p-5 font-mono text-xs text-slate-200 overflow-x-auto shadow-inner">
              <pre className="leading-relaxed whitespace-pre font-mono">
                {activeModule.code}
              </pre>
            </div>

            {/* Live Interactive DLP test */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t border-cyan-950/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    AgentSentinel Live DLP Interceptor
                  </h5>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Type a command to test live regex redaction &amp; AST blocking
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] text-slate-400 font-mono">
                    Agent Input Command:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070E] border border-cyan-900/60 text-xs font-mono text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                  />
                </div>

                <div
                  className={`p-4 rounded-xl border font-mono text-xs ${
                    simulationResult.blocked
                      ? "bg-rose-950/30 border-rose-600/40 text-rose-300"
                      : "bg-emerald-950/30 border-emerald-600/40 text-emerald-300"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {simulationResult.blocked ? (
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Lock className="w-4 h-4 text-emerald-400" />
                    )}
                    {simulationResult.reason}
                  </div>
                  <div className="text-[#aaa] text-[11px] mt-2">
                    <span className="font-bold text-[#888]">Sanitized Output to LLM: </span>
                    <span className="bg-black/50 px-2 py-0.5 rounded select-all text-white">
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
