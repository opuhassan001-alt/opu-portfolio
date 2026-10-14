"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Briefcase, Phone, Mail, Volume2, VolumeX } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { soundFx } from "@/utils/sound";

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
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    setSoundOn(soundFx.isEnabled());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/85 backdrop-blur-sm border-b border-slate-200/50 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Clickable Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Estakball Hossain Portfolio Home"
        >
          <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-display font-bold text-base tracking-tight shadow-sm group-hover:bg-blue-700 transition-colors">
            EH
          </div>
          <div>
            <span className="block font-display font-bold text-slate-900 text-sm sm:text-base leading-tight group-hover:text-blue-700 transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="block text-[11px] sm:text-xs text-slate-500 font-medium">
              BBA Graduate • Marketing
            </span>
          </div>
        </Link>

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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSoundOn(soundFx.toggle())}
            className="p-2 rounded-lg text-slate-500 hover:text-navy-900 hover:bg-slate-100 transition-colors"
            title={soundOn ? "Mute interactive sounds" : "Enable interactive sounds"}
            aria-label={soundOn ? "Mute sounds" : "Enable sounds"}
          >
            {soundOn ? (
              <Volume2 className="w-4 h-4 text-blue-700" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>
          <a
            href="#contact"
            onClick={() => soundFx.playClick()}
            className="px-3.5 py-2 rounded-lg text-sm font-semibold text-navy-800 hover:bg-navy-50 transition-colors flex items-center gap-1.5"
          >
            <Briefcase className="w-4 h-4 text-blue-700" />
            Hire / Connect
          </a>
          <a
            href={portfolioData.personal.cvUrl}
            download="Estakball_Hossain_CV.pdf"
            onClick={() => soundFx.playClick()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-navy-900 text-white hover:bg-blue-700 transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] z-50 bg-slate-900/60 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-3 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-blue-700 hover:bg-slate-50 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </a>
              ))}
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <Briefcase className="w-4 h-4 text-blue-700" />
                Hire / Connect Directly
              </a>
              <a
                href={portfolioData.personal.cvUrl}
                download="Estakball_Hossain_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-navy-900 text-white hover:bg-blue-700 transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                Download Full CV (PDF)
              </a>

              {/* Mobile Phone, Email & Sound Bar */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-around text-xs text-slate-600">
                <a
                  href={`tel:${portfolioData.personal.phoneRaw}`}
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-1.5 font-medium hover:text-blue-700 p-1"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-700" />
                  Call Direct
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-1.5 font-medium hover:text-blue-700 p-1"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-700" />
                  Send Email
                </a>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => setSoundOn(soundFx.toggle())}
                  className="flex items-center gap-1.5 font-medium text-slate-600 hover:text-navy-900 p-1"
                >
                  {soundOn ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-blue-700" />
                      Sound: On
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                      Sound: Off
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
