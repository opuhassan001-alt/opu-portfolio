"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Github, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "The Dual Persona", href: "#hero" },
  { label: "AI Systems", href: "#projects" },
  { label: "Prompt Lab", href: "#prompt-lab" },
  { label: "Marketing & Strategy", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-slate-950/70 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white flex items-center justify-center font-display font-black text-base tracking-tight shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform">
            EH
          </div>
          <div>
            <span className="block font-display font-bold text-white text-base leading-tight group-hover:text-cyan-300 transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="block text-[11px] font-mono text-slate-400">
              Growth Marketer × Context Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={portfolioData.personal.cvUrl}
            download="Estakball_Hossain_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-950 hover:bg-cyan-400 hover:text-slate-950 transition-all shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-white/10 px-4 pt-3 pb-5 space-y-2 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={portfolioData.personal.cvUrl}
              download="Estakball_Hossain_CV.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-950 hover:bg-cyan-400"
            >
              <Download className="w-4 h-4" />
              Download Full CV (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
