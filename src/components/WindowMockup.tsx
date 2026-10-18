"use client";

import React from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

interface WindowMockupProps {
  id: string;
  title: string;
  category: string;
  role: string;
  windowTitle: string;
  windowType?: "browser" | "terminal" | "excel" | "extension";
  githubUrl?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function WindowMockup({
  id,
  title,
  category,
  role,
  windowTitle,
  windowType = "browser",
  githubUrl,
  onClick,
  children,
}: WindowMockupProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] hover:border-[#444] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden flex flex-col justify-between"
    >
      {/* MACINTOSH / WINDOWS MINIMIZE & WINDOW HEADER BAR */}
      <div className="bg-[#141414] border-b border-[#262626] px-4 py-2.5 flex items-center justify-between select-none">
        {/* 3 Minimize / Maximize / Close dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block" />
        </div>

        {/* Window Title Bar */}
        <div className="text-[11px] font-mono text-slate-400 truncate max-w-[220px] sm:max-w-xs text-center flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
          {windowTitle}
        </div>

        {/* Action icon */}
        <div className="flex items-center gap-1.5">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-500 hover:text-white p-1 rounded transition-colors"
              title="View Source on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-slate-600 text-[10px] font-mono">v1.0</span>
          )}
        </div>
      </div>

      {/* WINDOW MOCKUP CANVAS / CONTENT */}
      <div className="relative p-5 sm:p-6 bg-[#0f1115] overflow-hidden min-h-[220px] flex flex-col justify-center">
        {children}
      </div>

      {/* ADHAM DANNAWAY EXACT CAPTION BAR */}
      <div className="p-4 sm:p-5 bg-[#181818] border-t border-[#262626] flex items-center justify-between group-hover:bg-[#1f1f1f] transition-colors">
        <div>
          <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-tight leading-tight">
            {title}
          </h4>
          <p className="text-xs text-[#888888] mt-1 font-normal">
            {role} • {category}
          </p>
        </div>

        <span className="w-8 h-8 rounded-full bg-[#2a2a2a] group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all shrink-0 ml-3 shadow-md">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
}
