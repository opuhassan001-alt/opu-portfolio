/**
 * Procedural High-DPI Canvas Texture Generator for the 3D Interactive Book
 * Renders crisp, print-quality portfolio spreads at 2048x1360 resolution
 */

export interface PageRenderOptions {
  width: number;
  height: number;
  splitRatio?: number; // 0 (full marketer) to 1 (full engineer) for cover
  marketerImg?: HTMLImageElement | null;
  aiImg?: HTMLImageElement | null;
  splitImg?: HTMLImageElement | null;
}

const PAPER_BG = "#F7F5EF";
const INK_MAIN = "#121214";
const INK_MUTED = "#6A6864";
const INK_SUBTLE = "#9C9A94";
const BORDER_COLOR = "#DCD8CE";
const AMBER_ACCENT = "#9B5D25";
const EMERALD_ACCENT = "#186A46";

// Helper to create a high-DPI canvas
export function createHiDPICanvas(w = 2048, h = 1360): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  return canvas;
}

/**
 * 0. FRONT COVER (Adham Dannaway Split Hero)
 * Interactive split-character cover where mouse X shifts between Marketer & AI Engineer
 */
export function renderFrontCover(
  canvas: HTMLCanvasElement,
  options: {
    splitRatio: number; // 0.0 to 1.0 (default 0.5)
    splitImg?: HTMLImageElement | null;
  }
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;
  const splitX = Math.round(w * Math.max(0.15, Math.min(0.85, options.splitRatio)));

  // Base background
  ctx.fillStyle = "#0A0A0C";
  ctx.fillRect(0, 0, w, h);

  // Left Half (Marketer: Luxury Cream & Warm Editorial)
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, splitX, h);
  ctx.clip();

  ctx.fillStyle = "#F7F5EE";
  ctx.fillRect(0, 0, w, h);

  // Marketer Gold Accent Bar
  ctx.fillStyle = "#EAE4D6";
  ctx.fillRect(40, 40, w - 80, 8);

  // Marketer Typography
  ctx.font = "600 36px 'Inter', sans-serif";
  ctx.fillStyle = AMBER_ACCENT;
  ctx.fillText("01 / COMMERCIAL TRACK", 90, 160);

  ctx.font = "800 64px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("GROWTH & PRODUCT", 90, 240);
  ctx.fillText("MARKETER", 90, 315);

  ctx.font = "400 24px 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("Consumer Psychology • STP & 4Ps • Retail Market Research", 90, 375);
  ctx.fillText("SQL & Excel Sales Performance Modeling", 90, 415);

  // Left Bottom Seal
  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = 2;
  ctx.strokeRect(90, h - 220, 380, 120);

  ctx.font = "600 18px 'Courier New', monospace";
  ctx.fillStyle = AMBER_ACCENT;
  ctx.fillText("DISCIPLINE I : BBA MARKETING", 115, h - 165);
  ctx.font = "500 16px 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("Behavioral Economics & Strategy", 115, h - 130);
  ctx.restore();

  // Right Half (AI Systems Engineer: Obsidian & Cyber Slate)
  ctx.save();
  ctx.beginPath();
  ctx.rect(splitX, 0, w - splitX, h);
  ctx.clip();

  ctx.fillStyle = "#0E0E12";
  ctx.fillRect(0, 0, w, h);

  // AI Emerald Accent Bar
  ctx.fillStyle = "#18382B";
  ctx.fillRect(40, 40, w - 80, 8);

  // AI Systems Typography
  ctx.font = "600 36px 'Courier New', monospace";
  ctx.fillStyle = "#34D399";
  ctx.fillText("02 / AUTONOMOUS SYSTEMS", w - 750, 160);

  ctx.font = "800 64px 'Inter', sans-serif";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("PROMPT & CONTEXT", w - 750, 240);
  ctx.fillText("ENGINEER", w - 750, 315);

  ctx.font = "400 24px 'Courier New', monospace";
  ctx.fillStyle = "#94A3B8";
  ctx.fillText("Zero-Trust MCP Tooling • 32k Context Partitioning", w - 750, 375);
  ctx.fillText("Neuroscience Habit Interception • Manifest V3", w - 750, 415);

  // Right Bottom Seal
  ctx.strokeStyle = "#27272A";
  ctx.lineWidth = 2;
  ctx.strokeRect(w - 470, h - 220, 380, 120);

  ctx.font = "600 18px 'Courier New', monospace";
  ctx.fillStyle = "#34D399";
  ctx.fillText("DISCIPLINE II : AGENTIC SYSTEMS", w - 445, h - 165);
  ctx.font = "500 16px 'Inter', sans-serif";
  ctx.fillStyle = "#71717A";
  ctx.fillText("Zero-Trust Tooling & Reasoning", w - 445, h - 130);
  ctx.restore();

  // Draw Center Split Portrait Image if provided
  if (options.splitImg && options.splitImg.complete) {
    const portraitW = 680;
    const portraitH = 680;
    const portraitX = (w - portraitW) / 2;
    const portraitY = (h - portraitH) / 2 + 60;

    // Outer framing box
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.45)";
    ctx.shadowBlur = 35;
    ctx.shadowOffsetY = 15;
    ctx.drawImage(options.splitImg, portraitX, portraitY, portraitW, portraitH);
    ctx.restore();
  }

  // Draw Dynamic Split Line down the canvas
  ctx.save();
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 3;
  ctx.shadowColor = "rgba(0,0,0,0.6)";
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(splitX, 30);
  ctx.lineTo(splitX, h - 30);
  ctx.stroke();

  // Center Draggable Split Handle Diamond
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  const midY = h / 2 + 60;
  ctx.arc(splitX, midY, 18, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#000000";
  ctx.font = "bold 13px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("◄►", splitX, midY);
  ctx.restore();

  // Main Header (Centered Embossed Name)
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "900 48px 'Inter', sans-serif";
  ctx.fillStyle = "#D4AF37"; // Metallic Gold
  ctx.shadowColor = "rgba(0,0,0,0.5)";
  ctx.shadowBlur = 8;
  ctx.fillText("ESTAKBALL HOSSAIN", w / 2, 85);

  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = "#E2E8F0";
  ctx.fillText("INTERACTIVE 3D PORTFOLIO • DUAL-TRACK ARCHITECTURE", w / 2, 125);
  ctx.restore();

  // Bottom Central Instruction
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "600 20px 'Inter', sans-serif";
  ctx.fillStyle = options.splitRatio > 0.5 ? "#E2E8F0" : "#1E293B";
  ctx.fillText("Click or Drag to Open Book ↗", w / 2, h - 60);
  ctx.restore();
}

/**
 * 1. TABLE OF CONTENTS & SPREAD DIRECTORY
 */
export function renderTableOfContents(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;

  ctx.fillStyle = PAPER_BG;
  ctx.fillRect(0, 0, w, h);

  // Border & Grid
  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  // Header
  ctx.font = "600 22px 'Courier New', monospace";
  ctx.fillStyle = AMBER_ACCENT;
  ctx.fillText("(INDEX & BLUEPRINT)", 110, 130);

  ctx.font = "800 62px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("Table of Contents", 110, 210);

  ctx.font = "400 24px 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("A systematic catalog of dual-track engineering & commercial systems.", 110, 260);

  // Chapters List
  const chapters = [
    { num: "CHAPTER 01", title: "Dual Philosophy & Systems Architecture", page: "PAGE 01 - 02" },
    { num: "CHAPTER 02", title: "AgentSentinel MCP: Zero-Trust Security Gateway", page: "PAGE 03 - 04" },
    { num: "CHAPTER 03", title: "MindShield Extension: Habit Interception", page: "PAGE 05 - 06" },
    { num: "CHAPTER 04", title: "Dhaka Retail Consumer Study & FMCG Modeling", page: "PAGE 07 - 08" },
    { num: "CHAPTER 05", title: "Interactive Lab: Context & Prompt Invariants", page: "PAGE 09 - 10" },
    { num: "CHAPTER 06", title: "Academic Credentials & Direct Connection", page: "PAGE 11 - 12" },
  ];

  let y = 350;
  chapters.forEach((item) => {
    ctx.font = "600 20px 'Courier New', monospace";
    ctx.fillStyle = AMBER_ACCENT;
    ctx.fillText(item.num, 110, y);

    ctx.font = "700 28px 'Inter', sans-serif";
    ctx.fillStyle = INK_MAIN;
    ctx.fillText(item.title, 340, y);

    // Leader dots
    ctx.font = "400 20px 'Courier New', monospace";
    ctx.fillStyle = INK_SUBTLE;
    ctx.fillText("........................................................", 1100, y);

    ctx.font = "700 22px 'Courier New', monospace";
    ctx.fillStyle = INK_MAIN;
    ctx.fillText(item.page, w - 300, y);

    ctx.strokeStyle = "#EAE6DC";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(110, y + 25);
    ctx.lineTo(w - 110, y + 25);
    ctx.stroke();

    y += 110;
  });

  // Footer metadata
  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = INK_SUBTLE;
  ctx.fillText("AUTHOR: ESTAKBALL HOSSAIN • DHAKA, BANGLADESH", 110, h - 100);
  ctx.fillText("P. 01", w - 170, h - 100);
}

/**
 * 2. PHILOSOPHY & EXECUTIVE SUMMARY
 */
export function renderPhilosophyPage(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;

  ctx.fillStyle = PAPER_BG;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  ctx.font = "600 22px 'Courier New', monospace";
  ctx.fillStyle = EMERALD_ACCENT;
  ctx.fillText("(01 / PHILOSOPHY & DUAL COMPETENCY)", 110, 130);

  ctx.font = "800 58px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("Bridging Consumer Psychology", 110, 210);
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("with Autonomous Agentic Systems", 110, 280);

  // Body Paragraphs
  ctx.font = "400 26px/1.7 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;

  const p1 =
    "Most engineers build tools without understanding the consumer's cognitive journey. Most marketers design campaigns without understanding deterministic system invariants. My work operates at the exact synthesis of both disciplines.";
  const p2 =
    "With a formal academic foundation in BBA Marketing (CGPA 3.65/4.00), I evaluate products through consumer decision journeys, price elasticity, and empirical field research. Concurrently, in AI Engineering, I architect zero-trust Model Context Protocol (MCP) gateways, deterministic AST command sanitizers, and token-budgeted memory trees.";

  wrapText(ctx, p1, 110, 360, w - 220, 42);
  wrapText(ctx, p2, 110, 530, w - 220, 42);

  // Two Pillars Comparison Box
  const boxY = 760;
  ctx.fillStyle = "#EFECE3";
  ctx.fillRect(110, boxY, 860, 360);
  ctx.fillRect(1010, boxY, 860, 360);

  // Left Box: Marketing
  ctx.font = "700 26px 'Inter', sans-serif";
  ctx.fillStyle = AMBER_ACCENT;
  ctx.fillText("TRACK A: COMMERCIAL RIGOR", 145, boxY + 60);

  ctx.font = "400 21px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("• Consumer Psychology & Survey Modeling (150+ Shoppers)", 145, boxY + 120);
  ctx.fillText("• STP Framework & 4Ps Tactical Positioning", 145, boxY + 175);
  ctx.fillText("• SQL / Excel Pareto Sales Performance Analytics", 145, boxY + 230);
  ctx.fillText("• FMCG Lead-Time & ABC Inventory Classification", 145, boxY + 285);

  // Right Box: Systems
  ctx.font = "700 26px 'Inter', sans-serif";
  ctx.fillStyle = EMERALD_ACCENT;
  ctx.fillText("TRACK B: AGENTIC AI ARCHITECTURE", 1045, boxY + 60);

  ctx.font = "400 21px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("• AgentSentinel MCP: Zero-Trust Security Gateway", 1045, boxY + 120);
  ctx.fillText("• Pre-Execution AST Censor & DLP Secret Masking", 1045, boxY + 175);
  ctx.fillText("• 32k Hierarchical Context Budgeting & Compaction", 1045, boxY + 230);
  ctx.fillText("• Chrome Manifest V3 Dopamine Interception Extension", 1045, boxY + 285);

  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = INK_SUBTLE;
  ctx.fillText("EXECUTIVE PHILOSOPHY", 110, h - 100);
  ctx.fillText("P. 02", w - 170, h - 100);
}

/**
 * 3. CASE STUDY: AGENT-SENTINEL MCP
 */
export function renderAgentSentinelPage(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;

  ctx.fillStyle = PAPER_BG;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  // Badge
  ctx.font = "600 20px 'Courier New', monospace";
  ctx.fillStyle = EMERALD_ACCENT;
  ctx.fillText("CASE STUDY 01 • OPEN SOURCE SYSTEMS TRACK", 110, 130);

  ctx.font = "800 56px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("AgentSentinel MCP", 110, 205);

  ctx.font = "600 26px 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("Zero-Trust Security Gateway for Autonomous Agent Tooling", 110, 260);

  // Key Metrics Bar
  const metrics = [
    { label: "SECURITY POLICY", val: "Zero-Trust DLP" },
    { label: "AUTOMATED TESTS", val: "41 Passing Specs" },
    { label: "EXECUTION FIREWALL", val: "AST Pre-Sanitization" },
    { label: "CORE STACK", val: "TypeScript / Node / MCP" },
  ];

  ctx.fillStyle = "#EAE7DE";
  ctx.fillRect(110, 310, w - 220, 100);

  let mx = 140;
  metrics.forEach((m) => {
    ctx.font = "600 16px 'Courier New', monospace";
    ctx.fillStyle = INK_MUTED;
    ctx.fillText(m.label, mx, 350);

    ctx.font = "700 22px 'Inter', sans-serif";
    ctx.fillStyle = INK_MAIN;
    ctx.fillText(m.val, mx, 385);
    mx += 430;
  });

  // Problem & Solution Breakdown
  ctx.font = "700 26px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("The Threat Model:", 110, 470);

  ctx.font = "400 22px/1.6 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  const prob =
    "Autonomous agents with direct terminal/filesystem tool access routinely risk leaking API credentials, executing malicious rm -rf / commands, or falling into recursive hallucination loops without human oversight.";
  wrapText(ctx, prob, 110, 510, w - 220, 36);

  ctx.font = "700 26px 'Inter', sans-serif";
  ctx.fillStyle = EMERALD_ACCENT;
  ctx.fillText("The Architectural Solution:", 110, 640);

  const sol =
    "Engineered a local-first proxy gateway adhering to Model Context Protocol (MCP). Employs an AST parser that intercepts shell invocations prior to execution, automatically redacts bearer tokens via regex DLP masks, and enforces a hard circuit-breaker preventing runaway loops.";
  wrapText(ctx, sol, 110, 680, w - 220, 36);

  // Mock Terminal Box
  ctx.fillStyle = "#111116";
  ctx.fillRect(110, 810, w - 220, 320);

  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = "#34D399";
  ctx.fillText("✦ [AgentSentinel DLP Engine: Active]", 145, 860);

  ctx.fillStyle = "#94A3B8";
  ctx.fillText("$ intercept: execute_tool { command: 'cat ~/.env && rm -rf /' }", 145, 910);
  ctx.fillStyle = "#F87171";
  ctx.fillText("✖ [POLICY VIOLATION DETECTED]: Destructive command chaining & root traversal", 145, 960);
  ctx.fillStyle = "#FBBF24";
  ctx.fillText("✔ Sanitized Token: Authorization: Bearer [REDACTED_API_SECRET]", 145, 1010);
  ctx.fillStyle = "#38BDF8";
  ctx.fillText("✔ Circuit Breaker: Invocation terminated safely with exit code 0", 145, 1060);

  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = INK_SUBTLE;
  ctx.fillText("SYSTEM SPECIFICATION", 110, h - 100);
  ctx.fillText("P. 03", w - 170, h - 100);
}

/**
 * 4. CASE STUDY: MINDSHIELD EXTENSION
 */
export function renderMindShieldPage(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;

  ctx.fillStyle = PAPER_BG;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  ctx.font = "600 20px 'Courier New', monospace";
  ctx.fillStyle = AMBER_ACCENT;
  ctx.fillText("CASE STUDY 02 • NEUROSCIENCE & HABIT INTERCEPTION", 110, 130);

  ctx.font = "800 56px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("MindShield Extension", 110, 205);

  ctx.font = "600 26px 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("Cognitive Challenge Gatekeeper Halting Compulsive Social Media Loops", 110, 260);

  // Metrics Bar
  const metrics = [
    { label: "STANDARD", val: "Chrome Manifest V3" },
    { label: "CHALLENGE ENGINE", val: "CRT-3 & BCS Mental Ability" },
    { label: "INTERCEPTION", val: "DOM MutationObserver" },
    { label: "PRIVACY", val: "100% Offline / Zero-Telemetry" },
  ];

  ctx.fillStyle = "#EAE7DE";
  ctx.fillRect(110, 310, w - 220, 100);

  let mx = 140;
  metrics.forEach((m) => {
    ctx.font = "600 16px 'Courier New', monospace";
    ctx.fillStyle = INK_MUTED;
    ctx.fillText(m.label, mx, 350);

    ctx.font = "700 22px 'Inter', sans-serif";
    ctx.fillStyle = INK_MAIN;
    ctx.fillText(m.val, mx, 385);
    mx += 430;
  });

  ctx.font = "700 26px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("Behavioral Psychology Problem:", 110, 470);

  const prob =
    "Short-form algorithm feeds (Reels, TikTok, Shorts) induce passive cognitive trance. Passive users scroll through dozens of video loops without conscious awareness or intent.";
  wrapText(ctx, prob, 110, 510, w - 220, 36);

  ctx.font = "700 26px 'Inter', sans-serif";
  ctx.fillStyle = AMBER_ACCENT;
  ctx.fillText("The Cognitive Reflex Gatekeeper:", 110, 640);

  const sol =
    "MindShield monitors the DOM for short-form video navigation. After a threshold (e.g., 10 reels), it freezes scrolling and injects a cognitive reflection challenge (CRT-3 puzzle or math problem). Only solving the puzzle proves cognitive awareness, breaking the unconscious dopamine loop.";
  wrapText(ctx, sol, 110, 680, w - 220, 36);

  // Interactive Extension Mockup Box
  ctx.fillStyle = "#1E293B";
  ctx.fillRect(110, 810, w - 220, 320);

  ctx.font = "600 20px 'Inter', sans-serif";
  ctx.fillStyle = "#F8FAFC";
  ctx.fillText("🛡️ MindShield Active Interception Overlay", 145, 865);

  ctx.font = "400 22px 'Courier New', monospace";
  ctx.fillStyle = "#FDE68A";
  ctx.fillText("Challenge: A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball.", 145, 925);
  ctx.fillText("How much does the ball cost?", 145, 965);

  ctx.font = "500 19px 'Courier New', monospace";
  ctx.fillStyle = "#38BDF8";
  ctx.fillText("Input: [ 5 cents ] -> Cognitive Activation Confirmed. Lockout Released.", 145, 1030);

  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = INK_SUBTLE;
  ctx.fillText("COGNITIVE UX SPECIFICATION", 110, h - 100);
  ctx.fillText("P. 04", w - 170, h - 100);
}

/**
 * 5. CASE STUDY: DHAKA RETAIL & FMCG
 */
export function renderConsumerStudyPage(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;

  ctx.fillStyle = PAPER_BG;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  ctx.font = "600 20px 'Courier New', monospace";
  ctx.fillStyle = AMBER_ACCENT;
  ctx.fillText("CASE STUDY 03 & 04 • BBA MARKETING THESIS & FMCG OPS", 110, 130);

  ctx.font = "800 56px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("Dhaka Retail Consumer Research", 110, 205);

  ctx.font = "600 26px 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("Empirical Field Study of 150+ Urban Shoppers & FMCG Inventory Optimization", 110, 260);

  // Metrics
  const metrics = [
    { label: "FIELD SAMPLE", val: "150+ Urban Shoppers" },
    { label: "METHODOLOGY", val: "Structured Likert Survey" },
    { label: "ANALYTICAL RIGOR", val: "Pareto & Elasticity Models" },
    { label: "ACADEMIC MARK", val: "BBA Distinction (3.65 GPA)" },
  ];

  ctx.fillStyle = "#EAE7DE";
  ctx.fillRect(110, 310, w - 220, 100);

  let mx = 140;
  metrics.forEach((m) => {
    ctx.font = "600 16px 'Courier New', monospace";
    ctx.fillStyle = INK_MUTED;
    ctx.fillText(m.label, mx, 350);

    ctx.font = "700 22px 'Inter', sans-serif";
    ctx.fillStyle = INK_MAIN;
    ctx.fillText(m.val, mx, 385);
    mx += 430;
  });

  ctx.font = "700 26px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("Research Focus & Empirical Findings:", 110, 470);

  const desc =
    "Conducted primary market research across major retail districts in Dhaka to identify price sensitivity triggers and consumer switching behaviors in Fast-Moving Consumer Goods (FMCG). Coupled with SQL/Excel modeling to isolate inventory carrying costs and stock-out revenue leaks.";
  wrapText(ctx, desc, 110, 510, w - 220, 36);

  // Comparison columns
  const colY = 660;
  ctx.fillStyle = "#EFECE3";
  ctx.fillRect(110, colY, 860, 460);
  ctx.fillRect(1010, colY, 860, 460);

  // Left Column
  ctx.font = "700 24px 'Inter', sans-serif";
  ctx.fillStyle = AMBER_ACCENT;
  ctx.fillText("EMPIRICAL CONSUMER DISCOVERIES", 145, colY + 50);

  ctx.font = "400 20px/1.6 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  const t1 =
    "• 68% of urban retail shoppers prioritize brand reputation over minor price discounts.\n• Price elasticity spikes at distinct psychological price barriers (e.g. 500 BDT & 1,000 BDT thresholds).\n• Shelf visibility and placement at eye level drives a 34% increase in impulse brand selection.";
  wrapText(ctx, t1, 145, colY + 110, 790, 34);

  // Right Column
  ctx.font = "700 24px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("SQL & FMCG INVENTORY MODELING", 1045, colY + 50);

  const t2 =
    "• Designed an ABC Inventory Model categorizing fast-moving Class-A items to reduce safety stock overhead.\n• Isolated revenue leakages resulting from erratic lead times and distributor fulfillment bottlenecks.\n• Formulated automated reorder-point calculations preventing recurring out-of-stock scenarios.";
  wrapText(ctx, t2, 1045, colY + 110, 790, 34);

  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = INK_SUBTLE;
  ctx.fillText("COMMERCIAL RESEARCH SPECIFICATION", 110, h - 100);
  ctx.fillText("P. 05", w - 170, h - 100);
}

/**
 * 6. CONTEXT & PROMPT LAB SPECIFICATION
 */
export function renderLabPage(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;

  ctx.fillStyle = PAPER_BG;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  ctx.font = "600 20px 'Courier New', monospace";
  ctx.fillStyle = EMERALD_ACCENT;
  ctx.fillText("CHAPTER 05 • INTERACTIVE AI ENGINEERING LAB", 110, 130);

  ctx.font = "800 56px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("Context Architecture & Prompt Invariants", 110, 205);

  ctx.font = "600 26px 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("Deterministic Prompt Structuring, Zero-Trust DLP, and 32k Token Partitioning", 110, 260);

  // 3 Module Cards
  const cards = [
    {
      title: "01. Structured Prompt Invariants",
      tag: "PROMPT ARCHITECTURE",
      desc: "Mathematical state definitions enforcing strict JSON schema contracts, Chain-of-Thought (CoT) boundaries, and deterministic reasoning fallbacks.",
    },
    {
      title: "02. Pre-Execution Zero-Trust Censor",
      tag: "RUNTIME DEFENSE",
      desc: "AST command interceptor and DLP secret regex mask eliminating API key leaks and dangerous terminal command chaining before tools execute.",
    },
    {
      title: "03. Hierarchical Token Partitioning",
      tag: "CONTEXT BUDGETING",
      desc: "32k context window budget allocation: Reserved state trees, progressive compression tiers, and dynamic retrieval preventing context rot.",
    },
  ];

  let cy = 330;
  cards.forEach((c) => {
    ctx.fillStyle = "#EAE7DE";
    ctx.fillRect(110, cy, w - 220, 220);

    ctx.font = "600 16px 'Courier New', monospace";
    ctx.fillStyle = EMERALD_ACCENT;
    ctx.fillText(c.tag, 150, cy + 50);

    ctx.font = "700 28px 'Inter', sans-serif";
    ctx.fillStyle = INK_MAIN;
    ctx.fillText(c.title, 150, cy + 95);

    ctx.font = "400 21px/1.6 'Inter', sans-serif";
    ctx.fillStyle = INK_MUTED;
    wrapText(ctx, c.desc, 150, cy + 140, w - 300, 32);

    cy += 260;
  });

  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = INK_SUBTLE;
  ctx.fillText("LABORATORY ARCHITECTURE", 110, h - 100);
  ctx.fillText("P. 06", w - 170, h - 100);
}

/**
 * 7. ACADEMIC CREDENTIALS & FOUNDATIONS
 */
export function renderCredentialsPage(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;

  ctx.fillStyle = PAPER_BG;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  ctx.font = "600 20px 'Courier New', monospace";
  ctx.fillStyle = AMBER_ACCENT;
  ctx.fillText("CHAPTER 06 • ACADEMIC RIGOR & CREDENTIALS", 110, 130);

  ctx.font = "800 56px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("Academic Education & Honors", 110, 205);

  ctx.font = "600 26px 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("Rigorous Foundations in Business Administration & Mathematical Science", 110, 260);

  // Degrees
  const edu = [
    {
      deg: "Bachelor of Business Administration (BBA)",
      inst: "Department of Marketing • CGPA: 3.65 / 4.00 (Distinction)",
      period: "4-Year Undergraduate Degree",
      details: "Comprehensive study of Consumer Behavior, Brand Strategy, Market Research, and Quantitative Decision Modeling.",
    },
    {
      deg: "Higher Secondary Certificate (HSC) — Science",
      inst: "Dhaka Board • GPA: 4.58 / 5.00 (First Division Honors)",
      period: "Secondary Higher Education",
      details: "Specialization in Higher Mathematics, Physics, Chemistry, and Analytical Problem Solving.",
    },
    {
      deg: "Secondary School Certificate (SSC) — Science",
      inst: "Dhaka Board • GPA: 5.00 / 5.00 (Golden Distinction)",
      period: "Secondary Certificate",
      details: "Distinction in General Mathematics, Science, and Core Analytical Reasoning.",
    },
  ];

  let ey = 330;
  edu.forEach((e) => {
    ctx.fillStyle = "#EAE7DE";
    ctx.fillRect(110, ey, w - 220, 230);

    ctx.font = "700 28px 'Inter', sans-serif";
    ctx.fillStyle = INK_MAIN;
    ctx.fillText(e.deg, 150, ey + 55);

    ctx.font = "600 20px 'Courier New', monospace";
    ctx.fillStyle = AMBER_ACCENT;
    ctx.fillText(e.inst, 150, ey + 100);

    ctx.font = "400 20px/1.6 'Inter', sans-serif";
    ctx.fillStyle = INK_MUTED;
    wrapText(ctx, e.details, 150, ey + 145, w - 300, 30);

    ey += 265;
  });

  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = INK_SUBTLE;
  ctx.fillText("ACADEMIC VERIFICATION", 110, h - 100);
  ctx.fillText("P. 07", w - 170, h - 100);
}

/**
 * 8. DIRECT CONTACT & CHANNEL ACCESS
 */
export function renderContactPage(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;

  ctx.fillStyle = PAPER_BG;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  ctx.font = "600 20px 'Courier New', monospace";
  ctx.fillStyle = EMERALD_ACCENT;
  ctx.fillText("FINAL SPREAD • DIRECT CONNECTION", 110, 130);

  ctx.font = "800 64px 'Inter', sans-serif";
  ctx.fillStyle = INK_MAIN;
  ctx.fillText("Let's Build Something Exceptional", 110, 215);

  ctx.font = "400 26px 'Inter', sans-serif";
  ctx.fillStyle = INK_MUTED;
  ctx.fillText("Open to AI Product Marketing, Prompt Engineering & Growth Leadership roles.", 110, 275);

  // Channels Grid
  const channels = [
    { label: "PRIMARY INBOX", val: "opuhassan001@gmail.com", action: "Fast Response (< 24h)" },
    { label: "DIRECT WHATSAPP / CALL", val: "+880 1633-375854", action: "Active Daily" },
    { label: "GITHUB REPOSITORIES", val: "github.com/opuhassan001-alt", action: "Open Source Repos" },
    { label: "LOCATION", val: "Dhaka, Bangladesh", action: "Open to Remote / Relocation" },
  ];

  let cy = 350;
  channels.forEach((c) => {
    ctx.fillStyle = "#EAE7DE";
    ctx.fillRect(110, cy, w - 220, 140);

    ctx.font = "600 16px 'Courier New', monospace";
    ctx.fillStyle = EMERALD_ACCENT;
    ctx.fillText(c.label, 150, cy + 45);

    ctx.font = "700 28px 'Inter', sans-serif";
    ctx.fillStyle = INK_MAIN;
    ctx.fillText(c.val, 150, cy + 90);

    ctx.font = "600 18px 'Courier New', monospace";
    ctx.fillStyle = INK_MUTED;
    ctx.textAlign = "right";
    ctx.fillText(c.action, w - 150, cy + 90);
    ctx.textAlign = "left";

    cy += 175;
  });

  ctx.font = "500 18px 'Courier New', monospace";
  ctx.fillStyle = INK_SUBTLE;
  ctx.fillText("COMMUNICATION CHANNELS", 110, h - 100);
  ctx.fillText("P. 08", w - 170, h - 100);
}

/**
 * 9. BACK COVER
 */
export function renderBackCover(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width: w, height: h } = canvas;

  ctx.fillStyle = "#0A0A0C";
  ctx.fillRect(0, 0, w, h);

  // Subtle Border
  ctx.strokeStyle = "#27272A";
  ctx.lineWidth = 3;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  // Center Monogram Seal
  const cx = w / 2;
  const cy = h / 2 - 40;

  ctx.save();
  ctx.strokeStyle = "#D4AF37";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, 90, 0, Math.PI * 2);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.font = "900 48px 'Inter', sans-serif";
  ctx.fillStyle = "#D4AF37";
  ctx.fillText("EH", cx, cy + 18);

  ctx.font = "800 36px 'Inter', sans-serif";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("ESTAKBALL HOSSAIN", cx, cy + 170);

  ctx.font = "500 20px 'Courier New', monospace";
  ctx.fillStyle = "#94A3B8";
  ctx.fillText("GROWTH MARKETER × AGENTIC CONTEXT ENGINEER", cx, cy + 220);

  ctx.font = "400 18px 'Courier New', monospace";
  ctx.fillStyle = "#52525B";
  ctx.fillText("© 2026 ALL RIGHTS RESERVED • FABRICATED WITH THREE.JS", cx, h - 110);
  ctx.restore();
}

// Utility text wrapper for 2D canvas
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const lines = text.split("\n");
  let currentY = y;

  for (const line of lines) {
    const words = line.split(" ");
    let currentLine = "";

    for (let n = 0; n < words.length; n++) {
      const testLine = currentLine + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(currentLine, x, currentY);
        currentLine = words[n] + " ";
        currentY += lineHeight;
      } else {
        currentLine = testLine;
      }
    }
    ctx.fillText(currentLine, x, currentY);
    currentY += lineHeight;
  }
}

