"use client";

import React, { useState } from "react";
import Interactive3DBook from "@/components/Interactive3DBook";
import Navbar from "@/components/Navbar";
import AdhamHero from "@/components/AdhamHero";
import DennisWork from "@/components/DennisWork";
import DennisLab from "@/components/DennisLab";
import DennisAboutSkills from "@/components/DennisAboutSkills";
import DennisEducation from "@/components/DennisEducation";
import DennisContact from "@/components/DennisContact";
import { BookOpen, ArrowUp } from "lucide-react";

export default function HomePage() {
  const [viewMode, setViewMode] = useState<"book" | "classic">("book");

  // Default Experience: Hyper-Realistic 3D Interactive Book (Matching seanaiux.com/book)
  if (viewMode === "book") {
    return <Interactive3DBook onSwitchToClassic={() => setViewMode("classic")} />;
  }

  // Classic View Fallback with quick toggle back to 3D Book Mode
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white relative">
      {/* Persistent Floating 3D Book Mode Switcher */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setViewMode("book")}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider shadow-2xl border border-neutral-700 transition-all hover:scale-105"
        >
          <BookOpen className="w-4 h-4 text-[#D4AF37]" />
          <span>Switch to 3D Book Experience</span>
        </button>
      </div>

      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Adham Hero with Split Dual-Portrait */}
        <AdhamHero />

        {/* Dennis Snellenberg Recent Work Rows & Floating Zoom Mini-Card */}
        <DennisWork />

        {/* Dennis Snellenberg Context Engineering & Zero-Trust Lab */}
        <DennisLab />

        {/* Dennis Snellenberg Philosophy & Dual Disciplines */}
        <DennisAboutSkills />

        {/* Dennis Snellenberg Academic Education & Credentials */}
        <DennisEducation />

        {/* Dennis Snellenberg Iconic Giant Magnetic Contact Section */}
        <DennisContact />
      </main>

      {/* Dennis Snellenberg Minimalist Editorial Footer */}
      <footer className="bg-[#141414] border-t border-neutral-800 py-10 text-xs text-neutral-400 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Estakball Hossain. All rights reserved.</span>
          </div>

          <nav className="flex items-center gap-6 font-medium lowercase">
            <a href="#hero" className="hover:text-white transition-colors">
              about
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              work
            </a>
            <a href="#lab" className="hover:text-white transition-colors">
              lab
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              disciplines
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              credentials
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              contact
            </a>
          </nav>

          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
