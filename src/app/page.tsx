import React from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import AdhamHero from "@/components/AdhamHero";
import DennisWork from "@/components/DennisWork";
import DennisLab from "@/components/DennisLab";
import DennisAboutSkills from "@/components/DennisAboutSkills";
import DennisEducation from "@/components/DennisEducation";
import DennisContact from "@/components/DennisContact";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Adham Hero with Split Dual-Portrait (Kept Intact) */}
        <AdhamHero />

        {/* Dennis Snellenberg Recent Work Rows & Floating Zoom Modal */}
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
