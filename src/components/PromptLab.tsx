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
          ? "Critical: Blocked shell command chaining operator (; or && or |)"
          : "Critical: Blocked directory traversal attack (../)"
        : "Pass: Zero-trust pre-execution sanitization succeeded",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  return (
    <section id="lab" className="py-24 bg-[#F8FAFC] text-[#0F172A] border-t border-[#E2E8F0] relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Sentence Case & Adham Lean Navy System */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] font-sans text-xs font-semibold mb-3">
            <Code2 className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Interactive engineering studio</span>
          </div>
          <h3 className="font-sans text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Prompt &amp; context engineering lab
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto font-sans leading-relaxed">
            Enterprise architectural patterns for production LLMs: system invariants, hierarchical context budgeting, and zero-trust pre-execution filters.
          </p>
        </div>

        {/* Developer IDE Studio Window Container */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden shadow-md">
          {/* IDE Window Title Bar */}
          <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F1F5F9] px-4 py-2.5 select-none">
            {/* macOS buttons */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
            </div>

            {/* Breadcrumb path */}
            <div className="text-xs font-mono text-[#64748B] flex items-center gap-1.5">
              <span>opu-portfolio</span>
              <span>/</span>
              <span>src</span>
              <span>/</span>
              <span>context-engineering</span>
              <span>/</span>
              <span className="text-[#0F172A] font-semibold">{activeModule.id}.ts</span>
            </div>

            <div className="text-xs font-sans text-[#475569] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="font-medium">TypeScript 5.4</span>
            </div>
          </div>

          {/* IDE Editor Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-3 pt-2 gap-2">
            <div className="flex flex-wrap gap-1">
              {portfolioData.promptEngineeringLab.modules.map((mod) => {
                const isActive = activeTab === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveTab(mod.id)}
                    className={`px-3.5 py-2 rounded-t-lg text-xs font-sans flex items-center gap-2 transition-all border-t-2 ${
                      isActive
                        ? "bg-white text-[#2563EB] border-[#2563EB] font-semibold shadow-xs"
                        : "bg-transparent text-[#64748B] border-transparent hover:text-[#0F172A] hover:bg-slate-100"
                    }`}
                  >
                    <FileCode className={`w-3.5 h-3.5 ${isActive ? "text-[#2563EB]" : "text-[#64748B]"}`} />
                    <span>{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => copyCode(activeModule.code)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-1.5 rounded-lg bg-white hover:bg-[#F1F5F9] text-xs font-semibold text-[#0F172A] border border-[#CBD5E1] transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Editor Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-white font-sans">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                  {activeModule.type}
                </span>
                <h4 className="font-bold text-lg text-[#0F172A]">
                  {activeModule.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                {activeModule.description}
              </p>
            </div>

            {/* Code Box with Line Numbers */}
            <div className="rounded-xl bg-[#0F172A] border border-[#1E293B] p-4 sm:p-5 font-mono text-xs text-[#E2E8F0] overflow-x-auto shadow-inner">
              <pre className="leading-relaxed whitespace-pre font-mono text-[11.5px]">
                {activeModule.code}
              </pre>
            </div>

            {/* Interactive Live DLP Test Console */}
            {activeTab === "zero-trust-mcp" && (
              <div className="pt-6 border-t border-[#E2E8F0] space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2 font-sans">
                    <Shield className="w-4 h-4 text-[#2563EB]" />
                    <span>AgentSentinel live DLP interceptor (interactive)</span>
                  </h5>
                  <span className="text-[11px] text-[#64748B]">
                    Test live regex redaction &amp; command injection blocking
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] text-[#64748B] font-medium">
                    Agent input command:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition shadow-xs"
                  />
                </div>

                <div
                  className={`p-4 rounded-xl border text-xs ${
                    simulationResult.blocked
                      ? "bg-rose-50 border-rose-200 text-rose-800"
                      : "bg-emerald-50 border-emerald-200 text-emerald-800"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {simulationResult.blocked ? (
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                    ) : (
                      <Check className="w-4 h-4 text-emerald-600" />
                    )}
                    <span>{simulationResult.reason}</span>
                  </div>
                  <div className="text-[#475569] text-[11px] mt-2">
                    <span className="font-semibold text-[#0F172A]">Sanitized output forwarded to model: </span>
                    <span className="bg-white px-2.5 py-1 rounded border border-[#E2E8F0] text-[#0F172A] font-mono inline-block mt-1">
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
