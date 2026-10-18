"use client";

import React, { useState } from "react";
import { Terminal, Shield, Cpu, Copy, Check, Sparkles, AlertTriangle, Lock } from "lucide-react";
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

  // Live AgentSentinel Sanitizer Simulation
  const simulateSanitization = (input: string) => {
    let sanitized = input;
    // Redact OpenAI / Stripe / Bearer secrets
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
    <section id="prompt-lab" className="py-20 bg-slate-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Live Engineering Showcase
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Prompt Architecture & Context Engineering Lab
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real architectural patterns for enterprise LLMs: prompt invariant enforcement,
            hierarchical token window management, and zero-trust pre-execution gateways.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Tab Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-slate-950/80 px-4 py-3 gap-2">
            <div className="flex flex-wrap gap-2">
              {portfolioData.promptEngineeringLab.modules.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveTab(mod.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    activeTab === mod.id
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-mono transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Architecture
                </>
              )}
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                  {activeModule.type}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {activeModule.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {activeModule.description}
              </p>
            </div>

            {/* Code / Architecture Window */}
            <div className="relative rounded-xl bg-slate-950 border border-white/10 p-4 sm:p-5 font-mono text-xs text-slate-200 overflow-x-auto">
              <pre className="leading-relaxed whitespace-pre font-mono">
                {activeModule.code}
              </pre>
            </div>

            {/* Live Interactive Simulator for Zero-Trust MCP */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    Live AgentSentinel DLP Simulator
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    Type a command below to test live regex redaction & AST blocking
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] text-slate-400 font-mono">
                    Agent Input Command:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Live Output Card */}
                <div
                  className={`p-4 rounded-xl border font-mono text-xs ${
                    simulationResult.blocked
                      ? "bg-rose-950/40 border-rose-500/50 text-rose-200"
                      : "bg-emerald-950/40 border-emerald-500/50 text-emerald-200"
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
                  <div className="text-slate-300 text-[11px] mt-2">
                    <span className="font-bold text-slate-400">Sanitized Prompt to LLM: </span>
                    <span className="bg-black/40 px-2 py-1 rounded select-all">
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

