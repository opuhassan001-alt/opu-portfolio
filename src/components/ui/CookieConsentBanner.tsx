"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

const COOKIE_STORAGE_KEY = "cookie_consent_choice_v1";

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!saved) {
      // Delay slightly for smooth non-jarring entrance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: "all" | "essential") => {
    localStorage.setItem(COOKIE_STORAGE_KEY, choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#1d1a15]/95 border border-[#c3a47b]/50 rounded-2xl p-5 shadow-2xl text-[#eee2ca] backdrop-blur-md">
        {/* Top Icon & Title */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#29251d] text-[#dbc39c] border border-[#c3a47b]/40 flex-shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#eee2ca] tracking-wide font-heading">
              Privacy &amp; Cookie Choices
            </h3>
          </div>
          <button
            onClick={() => handleChoice("essential")}
            className="p-1 rounded-lg text-[#c5b79e] hover:text-[#eee2ca] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c3a47b]"
            aria-label="Close and keep essential cookies only"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message */}
        <p className="text-xs text-[#c5b79e] leading-relaxed mb-4 font-body">
          We use strictly necessary cookies to ensure our portfolio operates reliably and remember your preferences. We do not use third-party advertising trackers or sell your personal data.
        </p>

        {/* Transparent Policy Links */}
        <div className="flex items-center gap-3 text-[11px] text-[#c5b79e] mb-4 pb-3 border-b border-[#c3a47b]/20 font-subheading">
          <Link
            href="/cookie-policy"
            className="underline hover:text-[#dbc39c] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c3a47b] rounded"
          >
            Cookie Policy
          </Link>
          <span>•</span>
          <Link
            href="/privacy-policy"
            className="underline hover:text-[#dbc39c] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c3a47b] rounded"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Action Buttons: No Dark Patterns (Equal prominence and accessibility) */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => handleChoice("essential")}
            className="w-full py-2.5 px-3 rounded-xl bg-[#29251d] hover:bg-[#343025] text-[#eee2ca] text-xs font-semibold font-subheading border border-[#c3a47b]/40 transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c3a47b]"
          >
            Essential Only
          </button>
          <button
            onClick={() => handleChoice("all")}
            className="w-full py-2.5 px-3 rounded-xl bg-[#c3a47b] hover:bg-[#dbc39c] text-[#1d1a15] text-xs font-bold font-subheading shadow-md transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc39c] flex items-center justify-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-[#1d1a15]" />
            <span>Accept All</span>
          </button>
        </div>
      </div>
    </div>
  );
}
