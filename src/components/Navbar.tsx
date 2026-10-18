"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, MessageCircle, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 lowercase hover:text-slate-600 transition-colors"
        >
          estakball hossain
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold lowercase tracking-wide text-slate-600">
          <a href="#hero" className="hover:text-slate-900 transition-colors">
            about
          </a>
          <a href="#portfolio" className="hover:text-slate-900 transition-colors">
            portfolio
          </a>
          <a href="#lab" className="hover:text-slate-900 transition-colors">
            lab
          </a>
          <a href="#skills" className="hover:text-slate-900 transition-colors">
            skills
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            contact
          </a>

          {/* Social Icons Strip */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-600 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.cvUrl}
              download="Estakball_Hossain_CV.pdf"
              className="ml-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold normal-case flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              CV
            </a>
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 font-semibold text-sm lowercase text-slate-700">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-slate-900 py-1"
          >
            about
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-slate-900 py-1"
          >
            portfolio
          </a>
          <a
            href="#lab"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-slate-900 py-1"
          >
            lab
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-slate-900 py-1"
          >
            skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-slate-900 py-1"
          >
            contact
          </a>
        </div>
      )}
    </header>
  );
}
