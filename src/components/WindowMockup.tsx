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
      className={`group cursor-pointer rounded-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden ${
        isMarketing
          ? "bg-white border border-[#E7DFD3] hover:border-[#D4C8B5] shadow-[0_10px_30px_rgba(40,30,20,0.06)] hover:shadow-[0_20px_45px_rgba(194,65,12,0.12)]"
          : "bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] shadow-xs hover:shadow-md"
      }`}
    >
      {/* MACINTOSH / WINDOWS MINIMIZE & WINDOW HEADER BAR */}
      <div
        className={`px-4 py-2.5 flex items-center justify-between select-none ${
          isMarketing
            ? "bg-[#F3EFE7] border-b border-[#E7DFD3]"
            : "bg-[#F8FAFC] border-b border-[#E2E8F0]"
        }`}
      >
        {/* 3 Minimize / Maximize / Close dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
        </div>

        {/* Window Title Bar */}
        <div
          className={`text-[11px] truncate max-w-[200px] sm:max-w-xs text-center flex items-center justify-center gap-1.5 font-sans font-medium ${
            isMarketing ? "text-[#57534E]" : "text-[#475569]"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isMarketing ? "bg-amber-600/70" : "bg-[#2563EB]"
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
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
              title="View Source on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              className={`text-[10px] font-mono ${
                isMarketing ? "text-[#A8A29E]" : "text-[#64748B]"
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
          isMarketing ? "bg-[#FAF8F5]" : "bg-[#F8FAFC]"
        }`}
      >
        {children}
      </div>

      {/* CAPTION BAR */}
      <div
        className={`p-4 sm:p-5 flex items-center justify-between transition-colors ${
          isMarketing
            ? "bg-white border-t border-[#E7DFD3] group-hover:bg-[#FAF8F5]"
            : "bg-white border-t border-[#E2E8F0] group-hover:bg-[#F8FAFC]/60"
        }`}
      >
        <div>
          <h4
            className={`tracking-tight leading-tight transition-colors ${
              isMarketing
                ? "font-serif text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#C2410C]"
                : "font-sans text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB]"
            }`}
          >
            {title}
          </h4>
          <p
            className={`text-xs mt-1 font-sans ${
              isMarketing ? "font-medium text-[#78716C]" : "text-[#64748B]"
            }`}
          >
            {role} • {category}
          </p>
        </div>

        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ml-3 shadow-xs ${
            isMarketing
              ? "bg-[#F3EFE7] text-[#1C1917] group-hover:bg-[#C2410C] group-hover:text-white"
              : "bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] group-hover:bg-[#2563EB] group-hover:text-white"
          }`}
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
}

