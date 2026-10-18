"use client";

import React, { useState } from "react";
import { Terminal, Shield, AlertTriangle, Check, Copy, Play, RefreshCw, FileCode, Cpu, Code2 } from "lucide-react";
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
          ? "CRITICAL: Blocked shell command chaining operator (; or && or |)"
          : "CRITICAL: Blocked directory traversal attack (../)"
        : "PASS: Zero-Trust Pre-Execution Sanitization Succeeded",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  return (
    <section id="lab" className="py-24 bg-[#071326] text-[#CCD6F6] border-t border-[#1E3A8A]/40 relative overflow-hidden">
      {/* Subtle background tech texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100, 255, 218, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 255, 218, 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A192F] border border-[#233554] text-[#64FFDA] font-mono text-xs uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 text-[#64FFDA]" />
            <span>Developer IDE &amp; Context Architecture Studio</span>
          </div>
          <h3 className="font-mono text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
            <span className="text-[#64FFDA] font-light">&lt;</span>
            prompt &amp; context engineering lab
            <span className="text-[#64FFDA] font-light">&gt;</span>
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-[#8892B0] max-w-xl mx-auto font-mono leading-relaxed">
            Enterprise architectural patterns designed for production LLMs: system prompt invariants, hierarchical context budgeting, and zero-trust AST sanitization.
          </p>
        </div>

        {/* Authentic Developer IDE Window Container */}
        <div className="rounded-2xl bg-[#0A192F] border border-[#233554] overflow-hidden shadow-[0_20px_50px_rgba(2,12,27,0.8)]">
          {/* IDE Window Title Bar */}
          <div className="flex items-center justify-between border-b border-[#233554] bg-[#020C1B] px-4 py-2.5 select-none">
            {/* macOS buttons */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block" />
            </div>

            {/* Breadcrumb path */}
            <div className="text-xs font-mono text-[#8892B0] flex items-center gap-1.5">
              <span className="text-slate-500">opu-portfolio</span>
              <span>/</span>
              <span className="text-slate-400">src</span>
              <span>/</span>
              <span className="text-slate-400">context-engineering</span>
              <span>/</span>
              <span className="text-[#64FFDA] font-semibold">{activeModule.id}.ts</span>
            </div>

            <div className="text-[11px] font-mono text-[#8892B0] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#64FFDA] animate-pulse" />
              <span>TypeScript 5.4</span>
            </div>
          </div>

          {/* IDE Editor Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#233554] bg-[#071326] px-2 pt-2 gap-2">
            <div className="flex flex-wrap gap-1">
              {portfolioData.promptEngineeringLab.modules.map((mod) => {
                const isActive = activeTab === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveTab(mod.id)}
                    className={`px-3.5 py-2 rounded-t-lg text-xs font-mono flex items-center gap-2 transition-all border-t-2 ${
                      isActive
                        ? "bg-[#0A192F] text-[#64FFDA] border-[#64FFDA] font-semibold shadow-xs"
                        : "bg-transparent text-[#8892B0] border-transparent hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <FileCode className={`w-3.5 h-3.5 ${isActive ? "text-[#64FFDA]" : "text-[#8892B0]"}`} />
                    <span>{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => copyCode(activeModule.code)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-1.5 rounded-lg bg-[#112240] hover:bg-[#1A335E] text-xs text-[#64FFDA] border border-[#233554] font-mono transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#64FFDA]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Editor Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#0A192F]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#112240] text-[#64FFDA] border border-[#233554]">
                  {activeModule.type}
                </span>
                <h4 className="font-mono font-bold text-lg text-white">
                  {activeModule.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#8892B0] mt-2 font-sans leading-relaxed">
                {activeModule.description}
              </p>
            </div>

            {/* Code Box with Line Numbers */}
            <div className="rounded-xl bg-[#020C1B] border border-[#233554] p-4 sm:p-5 font-mono text-xs text-[#CCD6F6] overflow-x-auto shadow-inner">
              <pre className="leading-relaxed whitespace-pre font-mono text-[11.5px]">
                {activeModule.code}
              </pre>
            </div>

            {/* Interactive Live DLP Test Console */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t border-[#233554] space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#64FFDA] flex items-center gap-2 font-mono">
                    <Shield className="w-4 h-4 text-[#64FFDA]" />
                    <span>AgentSentinel Live DLP Interceptor (Interactive)</span>
                  </h5>
                  <span className="text-[11px] text-[#8892B0] font-mono">
                    Type below to test live regex redaction &amp; command injection blocking
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] text-[#8892B0] font-mono">
                    Agent Input Command:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#020C1B] border border-[#233554] text-xs font-mono text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA] transition"
                  />
                </div>

                <div
                  className={`p-4 rounded-xl border font-mono text-xs ${
                    simulationResult.blocked
                      ? "bg-rose-950/30 border-rose-600/50 text-rose-300"
                      : "bg-[#071F18] border-[#64FFDA]/40 text-[#64FFDA]"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {simulationResult.blocked ? (
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Check className="w-4 h-4 text-[#64FFDA]" />
                    )}
                    <span>{simulationResult.reason}</span>
                  </div>
                  <div className="text-[#8892B0] text-[11px] mt-2">
                    <span className="font-bold text-slate-400">Sanitized Output Forwarded to Model: </span>
                    <span className="bg-[#020C1B] px-2.5 py-1 rounded-md select-all text-white border border-[#233554] inline-block mt-1">
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
