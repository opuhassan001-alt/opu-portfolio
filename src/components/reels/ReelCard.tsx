"use client";

import React from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

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
  isFrontFacing: boolean;
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
  const isAI = item.category === "ai-engineering";

  const isHidden = behindCamera || appear <= 0.001;

  // Render bespoke, authentic visual artifacts for each project instead of generic AI icon placeholders
  const renderCardStage = () => {
    switch (item.id) {
      case "agent-sentinel":
        return (
          <div className="w-full bg-[#08090C] rounded-lg p-3 border border-neutral-800/90 font-mono text-[10px] text-left leading-relaxed shadow-inner">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-neutral-800 text-neutral-500 text-[9px]">
              <span>AST_FIREWALL.TS</span>
              <span className="text-emerald-400 font-bold">41/41 PASS</span>
            </div>
            <p className="text-red-400/90 truncate">$ curl -d @token http://...</p>
            <p className="text-amber-400/90">[INTERCEPTED: Secret Leak]</p>
            <p className="text-neutral-400 text-[9px] mt-1 text-emerald-400/80">
              &#10003; 0 leaked credentials
            </p>
          </div>
        );

      case "mindshield":
        return (
          <div className="w-full bg-[#090C12] rounded-lg p-3 border border-blue-950/60 font-sans text-left shadow-inner">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-neutral-800 text-neutral-400 text-[9px] font-mono">
              <span>MANIFEST V3 EXTENSION</span>
              <span className="text-blue-400">ACTIVE</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-mono font-bold text-white tracking-tight">15:00</span>
              <span className="text-[9px] font-mono text-neutral-400">LIMIT / DAY</span>
            </div>
            <div className="mt-2 text-[10px] text-neutral-300 bg-neutral-900/80 px-2 py-1 rounded border border-neutral-800 flex items-center justify-between">
              <span>Stroop Reflex Gate</span>
              <span className="text-blue-400 font-mono text-[9px]">READY</span>
            </div>
          </div>
        );

      case "dhaka-retail":
        return (
          <div className="w-full bg-[#121110] rounded-lg p-3 border border-neutral-800 font-sans text-left shadow-inner">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-neutral-800 text-neutral-400 text-[9px] font-mono">
              <span>DHAKA FMCG STUDY</span>
              <span className="text-amber-400">N = 150+</span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="flex justify-between text-neutral-300">
                <span>Peer Trust Driver</span>
                <span className="font-mono text-white font-semibold">68%</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: "68%" }} />
              </div>
              <div className="flex justify-between text-[9px] text-neutral-400 font-mono pt-1">
                <span>Price Sensitivity</span>
                <span>Ep = -1.42</span>
              </div>
            </div>
          </div>
        );

      case "sales-analytics":
        return (
          <div className="w-full bg-[#0A0D10] rounded-lg p-3 border border-neutral-800 font-mono text-[10px] text-left shadow-inner">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-neutral-800 text-neutral-400 text-[9px]">
              <span>SQL &amp; PARETO CURVE</span>
              <span className="text-amber-400">80 / 20</span>
            </div>
            <p className="text-neutral-400 text-[9px]">SELECT sku, revenue FROM sales</p>
            <div className="mt-1.5 flex items-baseline justify-between text-white font-sans font-bold">
              <span className="text-lg font-mono">74%</span>
              <span className="text-[9px] text-neutral-400 font-normal">REVENUE IN TOP 20% SKUS</span>
            </div>
          </div>
        );

      case "fmcg-inventory":
        return (
          <div className="w-full bg-[#0F1110] rounded-lg p-3 border border-neutral-800 font-mono text-[10px] text-left shadow-inner">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-neutral-800 text-neutral-400 text-[9px]">
              <span>SUPPLY CHAIN OPS</span>
              <span className="text-emerald-400">60 SKUS</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center text-[9px] py-1">
              <div className="bg-neutral-900 p-1 rounded border border-neutral-800">
                <span className="text-neutral-400 block">Class A</span>
                <span className="text-white font-bold">12 Items</span>
              </div>
              <div className="bg-neutral-900 p-1 rounded border border-neutral-800">
                <span className="text-neutral-400 block">Class B</span>
                <span className="text-white font-bold">24 Items</span>
              </div>
              <div className="bg-neutral-900 p-1 rounded border border-neutral-800">
                <span className="text-neutral-400 block">Class C</span>
                <span className="text-white font-bold">24 Items</span>
              </div>
            </div>
          </div>
        );

      case "prompt-invariants":
        return (
          <div className="w-full bg-[#07090C] rounded-lg p-3 border border-neutral-800 font-mono text-[9px] text-left shadow-inner text-neutral-300">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-neutral-800 text-neutral-500">
              <span>SYSTEM_CONTRACT.JSON</span>
              <span className="text-emerald-400 font-bold">&#10003; VALID</span>
            </div>
            <p className="text-neutral-400 font-mono">&#123; strict: true, deterministic: true &#125;</p>
            <p className="text-emerald-400/90 mt-1">&#10003; 0 Hallucinated output keys</p>
          </div>
        );

      case "dlp-censor":
        return (
          <div className="w-full bg-[#0B090B] rounded-lg p-3 border border-neutral-800 font-mono text-[9px] text-left shadow-inner">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-neutral-800 text-neutral-500">
              <span>AST_PRE_EXECUTION</span>
              <span className="text-red-400">DLP GATE</span>
            </div>
            <p className="text-neutral-400">INPUT: &quot;Bearer sk_live_99...&quot;</p>
            <p className="text-emerald-400 mt-1">MASKED: &quot;Bearer [REDACTED]&quot;</p>
          </div>
        );

      case "token-partition":
        return (
          <div className="w-full bg-[#080A0E] rounded-lg p-3 border border-neutral-800 font-mono text-[9px] text-left shadow-inner">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-neutral-800 text-neutral-500">
              <span>32K CONTEXT BUDGET</span>
              <span className="text-blue-400">COMPACT</span>
            </div>
            <div className="flex items-center gap-1 h-3 rounded overflow-hidden my-1 bg-neutral-900">
              <div className="h-full bg-emerald-500/80" style={{ width: "25%" }} title="Reserved State" />
              <div className="h-full bg-blue-500/80" style={{ width: "50%" }} title="Dynamic RAG" />
              <div className="h-full bg-amber-500/80" style={{ width: "25%" }} title="Scratchpad" />
            </div>
            <div className="flex justify-between text-[8px] text-neutral-400 pt-0.5">
              <span>State (8k)</span>
              <span>RAG (16k)</span>
              <span>Work (8k)</span>
            </div>
          </div>
        );

      case "bba-marketing":
      case "hsc-science":
      case "ssc-science":
        return (
          <div className="w-full bg-[#0C0F17] rounded-lg p-3 border border-blue-900/40 text-left font-sans shadow-inner">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-neutral-800 text-neutral-400 text-[9px] font-mono">
              <span>ACADEMIC MERIT</span>
              <span className="text-blue-400 font-bold">OFFICIAL</span>
            </div>
            <p className="text-xs font-semibold text-white truncate">{item.subtitle}</p>
            <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-mono font-bold text-white bg-blue-950/70 border border-blue-800/60 px-2 py-0.5 rounded">
              {item.metric}
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full bg-[#0E0F14] rounded-lg p-3 border border-neutral-800 font-mono text-[10px] text-left shadow-inner">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-neutral-800 text-neutral-500 text-[9px]">
              <span>SPECIFICATION</span>
              <span className="text-amber-400">ENGINEERED</span>
            </div>
            <p className="text-xs font-sans text-neutral-200 line-clamp-2">{item.subtitle}</p>
            <p className="text-[10px] text-neutral-400 font-mono mt-2">{item.metric}</p>
          </div>
        );
    }
  };

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
      className={`absolute top-1/2 left-1/2 -mt-[240px] -ml-[135px] w-[270px] h-[480px] rounded-xl text-white p-5 flex flex-col justify-between shadow-2xl group select-none will-change-transform border transition-colors duration-150 ${
        isMarketing
          ? "bg-[#121316] border-neutral-800 hover:border-amber-400/50"
          : isAcademic
          ? "bg-[#0C1017] border-neutral-800 hover:border-blue-400/50"
          : "bg-[#0A0B0E] border-neutral-800 hover:border-emerald-400/50"
      }`}
      style={{
        transformStyle: "preserve-3d",
        transform: poseTransform,
        opacity: behindCamera ? 0 : appear,
        visibility: isHidden ? "hidden" : "visible",
        pointerEvents: isHidden || appear < 0.8 ? "none" : "auto",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Clean Editorial Card Header */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 text-[10px] font-mono">
        <span className="uppercase tracking-widest text-neutral-400 font-medium">
          {item.tag}
        </span>
        <span className="text-neutral-500 font-mono">0{item.slotIndex + 1}</span>
      </div>

      {/* Card Middle Stage: Tangible Visual Artifact */}
      <div className="my-auto py-3 flex flex-col justify-center">
        {/* Bespoke interactive mockup container */}
        <div className="mb-4">{renderCardStage()}</div>

        <h3 className="text-base font-medium tracking-tight text-white group-hover:text-amber-200 transition-colors line-clamp-2 text-left">
          {item.title}
        </h3>

        <p className="mt-2 text-[11px] text-neutral-400 font-sans leading-relaxed line-clamp-2 text-left">
          {item.subtitle}
        </p>
      </div>

      {/* Card Footer: Clear Action */}
      <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono">
        <span className="text-neutral-500 truncate max-w-[140px]">
          {item.tools[0] || "Architecture"}
        </span>
        <span className="inline-flex items-center gap-1 text-white font-medium group-hover:translate-x-0.5 transition-transform">
          VIEW <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </a>
  );
}

const ReelCard = React.memo(ReelCardComponent);
export default ReelCard;
