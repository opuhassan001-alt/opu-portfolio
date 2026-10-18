"use client";

import React from "react";
import { ArrowRight, Github } from "lucide-react";

interface WindowMockupProps {
  id: string;
  title: string;
  category: string;
  role: string;
  windowTitle: string;
  windowType?: "browser" | "terminal" | "excel" | "extension";
  githubUrl?: string;
  variant?: "marketing" | "tech";
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
  variant = "marketing",
  onClick,
  children,
}: WindowMockupProps) {
  const isMarketing = variant === "marketing";

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
        isMarketing
          ? "bg-white border border-[#E7DFD3] hover:border-[#D4C8B5] shadow-[0_10px_30px_rgba(40,30,20,0.06)] hover:shadow-[0_20px_45px_rgba(194,65,12,0.12)]"
          : "bg-[#0A192F] border border-[#233554] hover:border-[#64FFDA]/60 shadow-[0_12px_40px_rgba(2,12,27,0.7)] hover:shadow-[0_0_35px_rgba(100,255,218,0.18)]"
      }`}
    >
      {/* MACINTOSH / WINDOWS MINIMIZE & WINDOW HEADER BAR */}
      <div
        className={`px-4 py-2.5 flex items-center justify-between select-none ${
          isMarketing
            ? "bg-[#F3EFE7] border-b border-[#E7DFD3]"
            : "bg-[#020C1B] border-b border-[#233554]"
        }`}
      >
        {/* 3 Minimize / Maximize / Close dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block" />
        </div>

        {/* Window Title Bar */}
        <div
          className={`text-[11px] truncate max-w-[200px] sm:max-w-xs text-center flex items-center justify-center gap-1.5 ${
            isMarketing
              ? "font-sans font-medium text-[#57534E]"
              : "font-mono text-[#8892B0]"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isMarketing ? "bg-amber-600/70" : "bg-[#64FFDA]"
            }`}
          />
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
              className={`p-1 rounded transition-colors ${
                isMarketing
                  ? "text-[#78716C] hover:text-[#1C1917]"
                  : "text-[#8892B0] hover:text-[#64FFDA]"
              }`}
              title="View Source on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              className={`text-[10px] font-mono ${
                isMarketing ? "text-[#A8A29E]" : "text-[#8892B0]"
              }`}
            >
              v1.0
            </span>
          )}
        </div>
      </div>

      {/* WINDOW MOCKUP CANVAS / CONTENT */}
      <div
        className={`relative p-5 sm:p-6 overflow-hidden min-h-[220px] flex flex-col justify-center ${
          isMarketing
            ? "bg-[#FAF8F5]"
            : "bg-[#0B1A33]"
        }`}
      >
        {children}
      </div>

      {/* CAPTION BAR */}
      <div
        className={`p-4 sm:p-5 flex items-center justify-between transition-colors ${
          isMarketing
            ? "bg-white border-t border-[#E7DFD3] group-hover:bg-[#FAF8F5]"
            : "bg-[#112240] border-t border-[#233554] group-hover:bg-[#152B52]"
        }`}
      >
        <div>
          <h4
            className={`tracking-tight leading-tight ${
              isMarketing
                ? "font-serif text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#C2410C]"
                : "font-mono text-sm sm:text-base font-bold text-[#CCD6F6] group-hover:text-[#64FFDA]"
            } transition-colors`}
          >
            {title}
          </h4>
          <p
            className={`text-xs mt-1 ${
              isMarketing
                ? "font-sans font-medium text-[#78716C]"
                : "font-mono text-[#8892B0]"
            }`}
          >
            {role} • {category}
          </p>
        </div>

        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ml-3 shadow-md ${
            isMarketing
              ? "bg-[#F3EFE7] text-[#1C1917] group-hover:bg-[#C2410C] group-hover:text-white"
              : "bg-[#1E3A8A]/40 text-[#64FFDA] border border-[#64FFDA]/30 group-hover:bg-[#64FFDA] group-hover:text-[#0A192F] shadow-[0_0_12px_rgba(100,255,218,0.2)]"
          }`}
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
}

