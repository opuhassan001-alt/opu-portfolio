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
    <section id="lab" className="py-20 bg-[#111111] text-white border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white lowercase">
            prompt &amp; context engineering lab
          </h3>
          <p className="mt-2 text-sm text-[#888888] max-w-xl mx-auto">
            Architectural patterns designed for enterprise LLMs: system prompt invariants, hierarchical context budgeting, and zero-trust pre-execution security.
          </p>
        </div>

        {/* Tabbed Card Container */}
        <div className="rounded-xl bg-[#1b1b1b] border border-[#2d2d2d] overflow-hidden shadow-2xl">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#2d2d2d] bg-[#161616] px-4 py-3 gap-2">
            <div className="flex flex-wrap gap-2">
              {portfolioData.promptEngineeringLab.modules.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveTab(mod.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === mod.id
                      ? "bg-white text-black font-bold"
                      : "text-[#888] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {mod.name}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => copyCode(activeModule.code)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#aaa] font-mono transition-colors"
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
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-white/10 text-white">
                  {activeModule.type}
                </span>
                <h4 className="font-display font-bold text-lg text-white">
                  {activeModule.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#888] mt-1.5">
                {activeModule.description}
              </p>
            </div>

            {/* Code Box */}
            <div className="rounded-xl bg-[#121212] border border-[#252525] p-4 sm:p-5 font-mono text-xs text-slate-200 overflow-x-auto">
              <pre className="leading-relaxed whitespace-pre font-mono">
                {activeModule.code}
              </pre>
            </div>

            {/* Live Interactive DLP test */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t border-[#2d2d2d] space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    AgentSentinel Live DLP Interceptor
                  </h5>
                  <span className="text-[11px] text-[#777]">
                    Type a command to test live regex redaction & AST blocking
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] text-[#888] font-mono">
                    Agent Input Command:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-[#333] text-xs font-mono text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
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
