"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, X, GraduationCap, Award, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function DennisEducation() {
  const [hoveredEduId, setHoveredEduId] = useState<string | null>(null);
  const [selectedEduId, setSelectedEduId] = useState<string | null>(null);

  // Smooth mouse tracking physics for the floating preview pop-up window
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const targetPos = useRef({ x: -500, y: -500 });
  const currentPos = useRef({ x: -500, y: -500 });
  const animationFrameRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInsideSection, setIsInsideSection] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updatePhysics = () => {
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.14);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.14);

      setMousePos({
        x: Math.round(currentPos.current.x),
        y: Math.round(currentPos.current.y),
      });

      animationFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animationFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const educationRecords = [
    {
      id: "bba-marketing",
      number: "01",
      title: "Bachelor of Business Administration (BBA)",
      major: "Marketing Major",
      institution: "Abdur Rajjak College, National University",
      period: "2021 – 2026",
      result: "CGPA 3.42",
      scale: "4.00",
      plainSummary:
        "Comprehensive four-year business degree focusing on consumer buying behavior, quantitative research, sales analytics, and retail distribution channels.",
      curriculum: [
        "Consumer Behavior & Market Research Methodologies",
        "Strategic Marketing & Brand Positioning (STP / 4Ps)",
        "Sales Management & Business Statistics",
        "Supply Chain & Retail Inventory Operations",
      ],
      thesisTitle: "Urban Consumer Buying Behavior & Retail Pricing Sensitivity in Dhaka",
    },
    {
      id: "hsc-science",
      number: "02",
      title: "Higher Secondary Certificate (HSC)",
      major: "Science Division",
      institution: "Mirpur College, Dhaka Education Board",
      period: "2017 – 2019",
      result: "GPA 4.58",
      scale: "5.00",
      plainSummary:
        "Rigorous pre-university science curriculum focusing on analytical mathematics, physics, and empirical laboratory research.",
      curriculum: [
        "Higher Mathematics & Calculus",
        "Physics & Quantitative Analysis",
        "Chemistry & Laboratory Experiments",
        "Information & Communication Technology",
      ],
      thesisTitle: "Dhaka Board Higher Secondary Science Certification",
    },
    {
      id: "ssc-science",
      number: "03",
      title: "Secondary School Certificate (SSC)",
      major: "Science Division",
      institution: "Pallabi Model High School, Dhaka Education Board",
      period: "2015 – 2017",
      result: "GPA 4.86",
      scale: "5.00",
      plainSummary:
        "Foundational secondary science education with distinction in General Mathematics and Higher Mathematics.",
      curriculum: [
        "General Mathematics & Geometry",
        "Higher Mathematics",
        "General Science & Physics",
        "English & Bengali Literature",
      ],
      thesisTitle: "Dhaka Board Secondary School Science Certification",
    },
  ];

  const hoveredEdu = educationRecords.find((e) => e.id === hoveredEduId) || null;
  const selectedEdu = educationRecords.find((e) => e.id === selectedEduId) || null;

  return (
    <section
      id="education"
      ref={sectionRef}
      onMouseEnter={() => setIsInsideSection(true)}
      onMouseLeave={() => {
        setIsInsideSection(false);
        setHoveredEduId(null);
      }}
      className="py-28 sm:py-36 bg-[#FAFAFA] text-[#141414] border-t border-neutral-200/80 relative select-none overflow-hidden"
    >
      {/* Subtle Dennis Snellenberg Editorial Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ============================================================ */}
      {/* AUTOMATIC HOVER POP-UP WINDOW (MEDIUM SIZE & MONOCHROME)     */}
      {/* ============================================================ */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out hidden md:block"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        <div
          className={`relative -top-36 -left-44 w-88 h-56 transition-all duration-300 ease-out origin-center ${
            hoveredEdu && isInsideSection
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-50 opacity-0 translate-y-6 pointer-events-none"
          }`}
        >
          {hoveredEdu && (
            <div className="w-full h-full bg-[#0F0F10] p-6 text-white flex flex-col justify-between rounded-2xl border border-neutral-800 shadow-2xl relative select-none">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-medium">
                  ACADEMIC RECORD
                </span>
                <span className="text-[11px] font-mono text-neutral-400 font-semibold">
                  {hoveredEdu.result} / {hoveredEdu.scale}
                </span>
              </div>

              <div className="py-2">
                <h4 className="text-xl font-medium tracking-tight text-white">
                  {hoveredEdu.title}
                </h4>
                <p className="mt-1 text-xs text-neutral-400 font-sans">
                  {hoveredEdu.institution}
                </p>
                <p className="mt-1 text-[11px] text-neutral-300 font-sans leading-relaxed line-clamp-2">
                  {hoveredEdu.plainSummary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-400">
                <span className="text-neutral-400">{hoveredEdu.period}</span>
                <span className="text-white font-sans font-medium flex items-center gap-1">
                  Click to inspect <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          )}

          {/* Minimalist Circular "Inspect" Badge */}
          <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-white text-neutral-950 flex items-center justify-center text-[11px] font-sans font-medium tracking-wider uppercase shadow-xl border border-neutral-200 pointer-events-none">
            <span className="flex items-center gap-0.5">
              Open <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
              <span>(04 / CREDENTIALS &amp; FOUNDATIONS)</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.08]">
              Academic education <br />
              <span className="text-neutral-400">&amp; credentials.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-md self-start md:self-end leading-relaxed">
            Formal business administration degree and secondary science credentials establishing analytical rigor.
          </p>
        </div>

        {/* ============================================================ */}
        {/* ONLY MAIN HEADINGS ON THE PAGE (DENNIS SNELLENBERG ROWS)     */}
        {/* ============================================================ */}
        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {educationRecords.map((edu) => {
            const isHovered = hoveredEduId === edu.id;
            const isDimmed = hoveredEduId !== null && !isHovered;

            return (
              <div
                key={edu.id}
                onMouseEnter={() => setHoveredEduId(edu.id)}
                onClick={() => setSelectedEduId(edu.id)}
                className={`group relative py-10 sm:py-14 cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 sm:px-6 rounded-2xl ${
                  isHovered ? "bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]" : ""
                } ${isDimmed ? "opacity-35" : "opacity-100"}`}
              >
                {/* Left: Number & Main Heading */}
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    {edu.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 group-hover:translate-x-3 transition-transform duration-300">
                      {edu.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-sans max-w-xl group-hover:text-neutral-700 transition-colors">
                      {edu.institution} &bull; <span className="text-neutral-800">{edu.major}</span>
                    </p>
                  </div>
                </div>

                {/* Right: Result / Score & Action Arrow */}
                <div className="flex items-center gap-4 sm:gap-6 self-start md:self-center shrink-0">
                  <div className="text-right">
                    <div className="text-base sm:text-lg font-normal text-neutral-950 font-sans tracking-tight">
                      {edu.result}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      Scale: {edu.scale} &bull; Click to Open
                    </div>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-200 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white text-neutral-500 flex items-center justify-center transition-all duration-300 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400 pt-4">
          <span>HOVER ROW TO REVEAL MEDIUM PREVIEW &bull; CLICK TO OPEN FULL TRANSCRIPT WINDOW</span>
          <span>OFFICIAL ACADEMIC CREDENTIALS &bull; NATIONAL UNIVERSITY BANGLADESH</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CLICK-TO-OPEN MEDIUM-SIZED WINDOW (STUDIO MODAL)             */}
      {/* ============================================================ */}
      {selectedEdu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedEduId(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-8 pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono font-medium mb-3">
                <span>RECORD {selectedEdu.number}</span>
                <span>&bull;</span>
                <span>{selectedEdu.period}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                {selectedEdu.title}
              </h3>
              <p className="mt-1 text-sm font-sans text-neutral-600 font-medium">
                {selectedEdu.institution}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-sans leading-relaxed">
                {selectedEdu.plainSummary}
              </p>
            </div>

            {/* Academic Score Card */}
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Official Result</span>
                <div className="text-2xl font-bold text-neutral-950 mt-0.5">{selectedEdu.result}</div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Grading Scale</span>
                <div className="text-base font-mono text-neutral-700 font-semibold mt-0.5">{selectedEdu.scale}</div>
              </div>
            </div>

            {/* Curriculum Coursework */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                Key Coursework &amp; Academic Focus
              </h4>
              <ul className="space-y-2">
                {selectedEdu.curriculum.map((course, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thesis / Milestone */}
            <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500 font-mono">
              <span className="uppercase text-neutral-400">Major Academic Focus: </span>
              <span className="text-neutral-800 font-medium">{selectedEdu.thesisTitle}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
