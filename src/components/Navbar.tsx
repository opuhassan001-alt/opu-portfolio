"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Case Studies", href: "#projects" },
  { label: "Skills", href: "#skills" },
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-display font-bold text-base tracking-tight shadow-sm group-hover:bg-blue-700 transition-colors">
            EH
          </div>
          <div>
            <span className="block font-display font-bold text-slate-900 text-base leading-tight">
              {portfolioData.personal.name}
            </span>
            <span className="block text-xs text-slate-500 font-medium">
              BBA Graduate • Marketing
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-navy-900 hover:bg-slate-100/80 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-3.5 py-2 rounded-lg text-sm font-semibold text-navy-800 hover:bg-navy-50 transition-colors flex items-center gap-1.5"
          >
            <Briefcase className="w-4 h-4 text-blue-700" />
            Hire / Connect
          </a>
          <a
            href={portfolioData.personal.cvUrl}
            download="Estakball_Hossain_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-navy-900 text-white hover:bg-blue-700 transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-900 hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={portfolioData.personal.cvUrl}
              download="Estakball_Hossain_CV.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-navy-900 text-white hover:bg-blue-700 transition-all"
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

