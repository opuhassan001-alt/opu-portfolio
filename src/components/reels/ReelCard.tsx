"use client";

import React from "react";
import { ArrowUpRight, Shield, Zap, Sparkles, Database, Terminal, GraduationCap, Mail } from "lucide-react";

export interface ReelItem {
  id: string;
  slotIndex: number;
  title: string;
  tag: string;
  category: "ai-engineering" | "marketing" | "academic" | "contact";
  subtitle: string;
  metric: string;
  tools: string[];
  link: string;
  iconName: string;
}

interface ReelCardProps {
  item: ReelItem;
  poseTransform: string;
  appear: number;
  behindCamera?: boolean;
  isFrontFacing: boolean; // Only front-facing cards animate/play video
  onClick?: () => void;
}

function ReelCardComponent({
  item,
  poseTransform,
  appear,
  behindCamera = false,
  isFrontFacing,
  onClick,
}: ReelCardProps) {
  const isMarketing = item.category === "marketing";
  const isAcademic = item.category === "academic";

  const renderIcon = () => {
    switch (item.iconName) {
      case "shield":
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case "terminal":
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case "database":
        return <Database className="w-5 h-5 text-amber-400" />;
      case "grad":
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case "mail":
        return <Mail className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-neutral-300" />;
    }
  };

  const isHidden = behindCamera || appear <= 0.001;

  return (
    <a
      href={item.link}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${item.title} — ${item.subtitle}`}
      className="absolute top-1/2 left-1/2 -mt-[240px] -ml-[135px] w-[270px] h-[480px] rounded-2xl bg-[#0D0D10] text-white p-5 flex flex-col justify-between shadow-2xl border border-neutral-800/80 hover:border-neutral-500 group select-none will-change-transform transition-colors duration-150"
      style={{
        transformStyle: "preserve-3d",
        transform: poseTransform,
        opacity: behindCamera ? 0 : appear,
        visibility: isHidden ? "hidden" : "visible",
        pointerEvents: isHidden || appear < 0.8 ? "none" : "auto",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800/90 text-[11px] font-mono">
        <div className="flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${
              isMarketing
                ? "bg-amber-400"
                : isAcademic
                ? "bg-blue-400"
                : "bg-emerald-400"
            } ${isFrontFacing ? "animate-pulse" : ""}`}
          />
          <span className="uppercase tracking-widest text-neutral-400 font-medium">
            {item.tag}
          </span>
        </div>
        <span className="text-neutral-500 font-mono">0{item.slotIndex + 1}</span>
      </div>

      {/* Card Middle Stage (9:16 Vertical Visual) */}
      <div className="my-auto py-4 flex flex-col items-center text-center">
        {/* Animated Visual Glyph Box */}
        <div
          className={`w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 transition-transform duration-200 ${
            isFrontFacing ? "scale-105 shadow-lg shadow-black/40" : "scale-100"
          } group-hover:scale-110`}
        >
          {renderIcon()}
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-amber-200 transition-colors line-clamp-2">
          {item.title}
        </h3>

        <p className="mt-2 text-xs text-neutral-400 font-sans leading-relaxed line-clamp-3">
          {item.subtitle}
        </p>

        {/* Highlight Metric Pill */}
        <div className="mt-4 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-300">
          {item.metric}
        </div>
      </div>

      {/* Card Footer: Tags & Action */}
      <div className="pt-3 border-t border-neutral-800/90 flex items-center justify-between text-[11px] font-mono">
        <span className="text-neutral-500 truncate max-w-[150px]">
          {item.tools[0] || "Architecture"}
        </span>
        <span className="inline-flex items-center gap-1 text-white font-medium group-hover:translate-x-1 transition-transform">
          VIEW <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </a>
  );
}

const ReelCard = React.memo(ReelCardComponent);
export default ReelCard;
