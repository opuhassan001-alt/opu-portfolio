"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Copy, Check, Shield, AlertTriangle, Terminal, Lock } from "lucide-react";
import "./BestsellersBookShowcase.css";
import { portfolioData } from "@/data/portfolio";
import { sound } from "@/lib/sound";

interface Step {
  title: string;
  body: string;
}

interface BookData {
  id: string;
  key: "agent-zero" | "claude" | "cursor";
  title: string;
  kicker: string;
  subtitle: string;
  footer: string;
  year: string;
  coverColor: string;
  coverImage: string;
  videoSrc: string;
  description: string;
  steps: Step[];
  prompt: string;
  review: string;
  liveUrl?: string;
  repoUrl?: string;
}

const BOOKS: Record<string, BookData> = {
  "agent-zero": {
    id: "agent-zero",
    key: "agent-zero",
    kicker: "Field Manual · I",
    title: "Agent Zero",
    subtitle: "Autonomous Architecture",
    footer: "Systems · Tools · Taste",
    year: "2026",
    coverColor: "#363126",
    coverImage:
      "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/eafc13621b9605d30356b7d4396072b2593a46e0c47c96d17ba60ca03d98f925.jpg",
    videoSrc:
      "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/6b3318cc6a7da610e3a55369131b20a2419cda826d558da09da284f09582956d.mp4",
    description:
      "Autonomous systems architecture, deterministic tool workflows, and agent execution environments.",
    steps: [],
    prompt: "",
    review: "",
    liveUrl: "https://github.com/opuhassan001-alt/agent-sentinel-mcp",
    repoUrl: "https://github.com/opuhassan001-alt/agent-sentinel-mcp"
  },
  claude: {
    id: "claude",
    key: "claude",
    kicker: "Field Manual · II",
    title: "Skills",
    subtitle: "Growth & AI Engineering",
    footer: "Prompt · Strategy · Code",
    year: "2026",
    coverColor: "#945a3e",
    coverImage:
      "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/99df6a45ad1f9dd7e47b65c064df0ae58c7c22069fadd9aa896754c3bad27123.jpg",
    videoSrc:
      "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/76a7b0b20e4992f91bb5febf2fa8edd2d33fd4b7bb0cda5f8ae0fffdff9d5a7e.mp4",
    description:
      "Core competencies spanning Growth Marketing analytics and Prompt & AI Engineering.",
    steps: [],
    prompt: "",
    review: "",
    liveUrl: "https://github.com/opuhassan001-alt",
    repoUrl: "https://github.com/opuhassan001-alt"
  },
  cursor: {
    id: "cursor",
    key: "cursor",
    kicker: "Field Manual · III",
    title: "Projects",
    subtitle: "Shipped & Academics",
    footer: "Work · Roadmap · CGPA",
    year: "2026",
    coverColor: "#566044",
    coverImage:
      "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/5f73c2c9094bbeef04fdc241909a4672235142882112ec15c6d130f89bf5fd16.jpg",
    videoSrc:
      "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/aabcdc51e4d9f6c4cbf6656bbd3447d6b50814507395f9e5bd0efecd7c1b22b3.mp4",
    description:
      "Catalog of projects, case studies, and verified academic credentials.",
    steps: [],
    prompt: "",
    review: "",
    liveUrl: "https://github.com/opuhassan001-alt",
    repoUrl: "https://github.com/opuhassan001-alt"
  }
};

const FUTURE_PROJECTS: { title: string; tag: string; desc: string }[] = [];

export default function BestsellersBookShowcase() {
  const [selectedBookKey, setSelectedBookKey] = useState<string | null>(null);
  const [mode, setMode] = useState<"gallery" | "detail">("gallery");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedModuleId, setCopiedModuleId] = useState<string | null>(null);
  const [testInput, setTestInput] = useState<string>(
    "SELECT * FROM users WHERE key = 'sk-proj-9a8b7c6d5e4f3a2b1c0d';"
  );

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedModuleId(id);
    showToast("Code copied to clipboard");
    setTimeout(() => setCopiedModuleId(null), 2000);
  };

  const simulateSanitization = (input: string) => {
    const hasSecret =
      /sk-(?:proj-)?[a-zA-Z0-9_-]{15,}/.test(input) ||
      /Bearer\s+[a-zA-Z0-9_.-]+/.test(input);
    // Command chaining detects ';', '&&', '|', '`' when followed by another command.
    // Trailing semicolon at the end of an SQL statement is valid termination, not chaining.
    const hasChaining = /(;|&&|\||`)\s*\S+/.test(input) || /(&&|\||`)/.test(input);
    const hasTraversal = /\.\.\//.test(input);

    let sanitized = input;
    if (hasSecret) {
      sanitized = sanitized.replace(
        /sk-(?:proj-)?[a-zA-Z0-9_-]{15,}/g,
        "[REDACTED_API_SECRET]"
      );
      sanitized = sanitized.replace(
        /Bearer\s+[a-zA-Z0-9_.-]+/g,
        "Bearer [REDACTED_BEARER_TOKEN]"
      );
    }

    const blocked = hasChaining || hasTraversal;

    return {
      blocked,
      sanitized,
      reason: blocked
        ? hasChaining
          ? "Execution Blocked: Dangerous command chaining operator (; or && or |) detected"
          : "Execution Blocked: Directory traversal (../) rejected by zero-trust gateway"
        : hasSecret
        ? "Safety Check Passed: 1 API secret masked and redacted before LLM context"
        : "Safety Check Passed: Input clean, zero security anomalies detected",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const detailScrollRef = useRef<HTMLDivElement>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const pointerState = useRef({
    x: 0,
    y: 0,
    clientX: -10000,
    clientY: -10000
  });

  const showToast = useCallback((msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    setToastVisible(true);
    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 1800);
  }, []);

  const selectedData = selectedBookKey ? BOOKS[selectedBookKey] : null;

  // Handle select book
  const selectBook = (key: string) => {
    if (mode === "detail") return;
    const card = cardRefs.current[key];
    if (!card) return;

    sound.playPageFlip();
    setSelectedBookKey(key);
    setMode("detail");
    card.style.setProperty("--detail-yaw", "-5deg");
    card.style.setProperty("--detail-pitch", "0deg");
    card.dataset.orbiting = "false";
  };

  // Close detail view
  const closeDetail = () => {
    if (mode !== "detail") return;
    sound.playClick();
    setMode("gallery");
    const lastKey = selectedBookKey;
    const lastCard = lastKey ? cardRefs.current[lastKey] : null;
    if (lastCard) {
      lastCard.style.setProperty("--detail-yaw", "-5deg");
      lastCard.style.setProperty("--detail-pitch", "0deg");
      lastCard.dataset.orbiting = "false";
    }

    setTimeout(() => {
      setSelectedBookKey(null);
    }, 700);
  };

  // Enable seamless mouse wheel scrolling in detail drawer:
  // Intercept wheel events on the entire detail panel with { passive: false },
  // call preventDefault() and stopPropagation() to block page-level Lenis capture,
  // and directly scroll the detail-scroll container by e.deltaY.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || mode !== "detail") return;

    const handleWheel = (e: WheelEvent) => {
      const scrollContainer = detailScrollRef.current;
      if (!scrollContainer) return;

      // Allow natural horizontal scroll inside code blocks or action rail if applicable
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        const target = e.target as HTMLElement | null;
        const horizContainer = target?.closest(".spec-pre, .action-rail") as HTMLElement | null;
        if (horizContainer && horizContainer.scrollWidth > horizContainer.clientWidth) {
          return;
        }
      }

      e.preventDefault();
      e.stopPropagation();
      scrollContainer.scrollTop += e.deltaY;
    };

    panel.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      panel.removeEventListener("wheel", handleWheel);
    };
  }, [mode, selectedBookKey]);

  // Parallax update
  const updateParallax = useCallback(() => {
    animationFrameRef.current = null;
    const { x, y, clientX, clientY } = pointerState.current;

    if (mode === "detail" && selectedBookKey) {
      const activeCard = cardRefs.current[selectedBookKey];
      if (!activeCard) return;

      const bounds = activeCard.getBoundingClientRect();
      const bookCenterX = bounds.left + bounds.width / 2;
      const bookCenterY = bounds.top + bounds.height / 2;

      const isPointerInViewport =
        clientX >= 0 &&
        clientX <= window.innerWidth &&
        clientY >= 0 &&
        clientY <= window.innerHeight;

      const horizontalReach =
        clientX < bookCenterX
          ? Math.max(bookCenterX, 1)
          : Math.max(window.innerWidth - bookCenterX, 1);
      const verticalReach =
        clientY < bookCenterY
          ? Math.max(bookCenterY, 1)
          : Math.max(window.innerHeight - bookCenterY, 1);

      const viewportX = isPointerInViewport
        ? Math.max(-1, Math.min(1, (clientX - bookCenterX) / horizontalReach))
        : -5 / 16;
      const viewportY = isPointerInViewport
        ? Math.max(-1, Math.min(1, (clientY - bookCenterY) / verticalReach))
        : 0;

      activeCard.style.setProperty("--detail-yaw", `${viewportX * 16}deg`);
      activeCard.style.setProperty("--detail-pitch", `${viewportY * -10}deg`);
      activeCard.dataset.orbiting = String(isPointerInViewport);
      return;
    }

    if (mode !== "gallery" || !wrapperRef.current) return;

    wrapperRef.current.style.setProperty("--mx", `${x * 11}px`);
    wrapperRef.current.style.setProperty("--my", `${y * 8}px`);

    const keys = ["agent-zero", "claude", "cursor"];
    keys.forEach((k, index) => {
      const card = cardRefs.current[k];
      if (!card) return;
      const depth = index === 1 ? 1 : 0.58;
      card.style.setProperty("--local-x", `${x * 15 * depth}px`);
      card.style.setProperty("--local-y", `${y * 9 * depth}px`);
    });
  }, [mode, selectedBookKey]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      pointerState.current.x = e.clientX / window.innerWidth - 0.5;
      pointerState.current.y = e.clientY / window.innerHeight - 0.5;
      pointerState.current.clientX = e.clientX;
      pointerState.current.clientY = e.clientY;

      if (!animationFrameRef.current) {
        animationFrameRef.current = window.requestAnimationFrame(updateParallax);
      }
    };

    const handlePointerLeave = () => {
      pointerState.current.x = 0;
      pointerState.current.y = 0;
      pointerState.current.clientX = -10000;
      pointerState.current.clientY = -10000;

      if (!animationFrameRef.current) {
        animationFrameRef.current = window.requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateParallax]);

  // Sync video play
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([k, video]) => {
      if (!video) return;
      const isVisible =
        mode === "gallery" || (mode === "detail" && k === selectedBookKey);
      if (isVisible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [mode, selectedBookKey]);

  return (
    <div
      id="portfolio-showcase"
      ref={wrapperRef}
      className="threeui-book-wrapper selection:bg-[#c3a47b] selection:text-[#1d1a15]"
      data-mode={mode}
      data-menu={menuOpen ? "open" : "closed"}
    >
      {/* Anchor targets for smooth navigation from Navbar & AdhamHero */}
      <div id="portfolio" className="absolute -top-24 pointer-events-none" />
      <div id="work" className="absolute -top-24 pointer-events-none" />
      <div id="marketing-work" className="absolute -top-24 pointer-events-none" />
      <div id="ai-work" className="absolute -top-24 pointer-events-none" />
      <div id="lab" className="absolute -top-24 pointer-events-none" />
      <div id="skills" className="absolute -top-24 pointer-events-none" />
      <div id="education" className="absolute -top-24 pointer-events-none" />
      <div id="credentials" className="absolute -top-24 pointer-events-none" />
      <main
        ref={stageRef}
        className="stage"
        aria-label="Interactive AI and systems field library"
      >
        {/* Top Editorial Bar */}
        <header className="topbar">
          <a className="brand" href="#portfolio-showcase" aria-label="Field Manuals home">
            Field Manuals
          </a>
          <div className="nav-actions">
            <button
              className="icon-button"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="menu-glyph" aria-hidden="true" />
            </button>
            <button
              className="ticket-button"
              type="button"
              onClick={() => showToast("The collection is complete.")}
            >
              The Collection
            </button>
          </div>
        </header>

        {/* Hero Background Lettering */}
        <h1 className="hero-word" aria-hidden="true">
          Agents
        </h1>

        {/* 3D Book Gallery */}
        <section className="gallery" aria-label="AI coding field manuals">
          {/* Book 1: Agent Zero */}
          <button
            ref={(el) => { cardRefs.current["agent-zero"] = el; }}
            className={`book-card ${selectedBookKey === "agent-zero" ? "selected" : ""}`}
            type="button"
            data-book="agent-zero"
            data-cursor="read"
            data-cursor-text="READ ↗"
            aria-label="Open Agent Zero details"
            style={
              {
                "--cover-color": "#363126",
                "--cover": `url('${BOOKS["agent-zero"].coverImage}')`
              } as React.CSSProperties
            }
            onClick={() => selectBook("agent-zero")}
            onPointerEnter={() => {
              const el = cardRefs.current["agent-zero"];
              if (el) el.dataset.hovered = "true";
            }}
            onPointerLeave={() => {
              const el = cardRefs.current["agent-zero"];
              if (el) el.dataset.hovered = "false";
            }}
          >
            <span className="book" aria-hidden="true">
              <span className="book-shadow" />
              <span className="book-back" />
              <span className="page-block" />
              <span className="page-fan">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="front-cover">
                <video
                  ref={(el) => { videoRefs.current["agent-zero"] = el; }}
                  className="cover-motion"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={BOOKS["agent-zero"].videoSrc} type="video/mp4" />
                </video>
                <span className="cover-copy">
                  <span className="cover-kicker">Field Manual · I</span>
                  <span className="cover-title">Agent Zero</span>
                  <span className="cover-subtitle">Autonomous Architecture</span>
                  <span />
                  <span className="cover-footer">Systems · Tools · Taste</span>
                </span>
              </span>
              <span className="open-badge">Read</span>
            </span>
          </button>

          {/* Book 2: Skills */}
          <button
            ref={(el) => { cardRefs.current["claude"] = el; }}
            className={`book-card ${selectedBookKey === "claude" ? "selected" : ""}`}
            type="button"
            data-book="claude"
            data-cursor="read"
            data-cursor-text="READ ↗"
            aria-label="Open Skills details"
            style={
              {
                "--cover-color": "#945a3e",
                "--cover": `url('${BOOKS["claude"].coverImage}')`
              } as React.CSSProperties
            }
            onClick={() => selectBook("claude")}
            onPointerEnter={() => {
              const el = cardRefs.current["claude"];
              if (el) el.dataset.hovered = "true";
            }}
            onPointerLeave={() => {
              const el = cardRefs.current["claude"];
              if (el) el.dataset.hovered = "false";
            }}
          >
            <span className="book" aria-hidden="true">
              <span className="book-shadow" />
              <span className="book-back" />
              <span className="page-block" />
              <span className="page-fan">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="front-cover">
                <video
                  ref={(el) => { videoRefs.current["claude"] = el; }}
                  className="cover-motion"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={BOOKS["claude"].videoSrc} type="video/mp4" />
                </video>
                <span className="cover-copy">
                  <span className="cover-kicker">Field Manual · II</span>
                  <span className="cover-title">Skills</span>
                  <span className="cover-subtitle">Growth &amp; AI Engineering</span>
                  <span />
                  <span className="cover-footer">Prompt · Strategy · Code</span>
                </span>
              </span>
              <span className="open-badge">Read</span>
            </span>
          </button>

          {/* Book 3: Projects */}
          <button
            ref={(el) => { cardRefs.current["cursor"] = el; }}
            className={`book-card ${selectedBookKey === "cursor" ? "selected" : ""}`}
            type="button"
            data-book="cursor"
            data-cursor="read"
            data-cursor-text="READ ↗"
            aria-label="Open Projects details"
            style={
              {
                "--cover-color": "#566044",
                "--cover": `url('${BOOKS["cursor"].coverImage}')`
              } as React.CSSProperties
            }
            onClick={() => selectBook("cursor")}
            onPointerEnter={() => {
              const el = cardRefs.current["cursor"];
              if (el) el.dataset.hovered = "true";
            }}
            onPointerLeave={() => {
              const el = cardRefs.current["cursor"];
              if (el) el.dataset.hovered = "false";
            }}
          >
            <span className="book" aria-hidden="true">
              <span className="book-shadow" />
              <span className="book-back" />
              <span className="page-block" />
              <span className="page-fan">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="front-cover">
                <video
                  ref={(el) => { videoRefs.current["cursor"] = el; }}
                  className="cover-motion"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={BOOKS["cursor"].videoSrc} type="video/mp4" />
                </video>
                <span className="cover-copy">
                  <span className="cover-kicker">Field Manual · III</span>
                  <span className="cover-title">Projects</span>
                  <span className="cover-subtitle">Shipped &amp; Academics</span>
                  <span />
                  <span className="cover-footer">Work · Roadmap · CGPA</span>
                </span>
              </span>
              <span className="open-badge">Read</span>
            </span>
          </button>
        </section>

        {/* Detail Panel / Slide-out Reader Drawer */}
        <section
          ref={panelRef}
          className="detail-panel"
          id="detailPanel"
          aria-live="polite"
          aria-hidden={mode !== "detail"}
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
        >
          {selectedData && (
            <>
              <h2 className="detail-title">{selectedData.title}</h2>
              <div
                ref={detailScrollRef}
                className="detail-scroll"
                tabIndex={0}
                aria-label="Field manual details"
                data-lenis-prevent="true"
                data-lenis-prevent-wheel="true"
              >
                <p className="detail-description">{selectedData.description}</p>

                {selectedData.key === "cursor" ? (
                  <>
                    <section className="doc-section">
                      <p className="doc-label">Shipped &amp; Production Projects</p>
                      {portfolioData.projects.length > 0 ? (
                        portfolioData.projects.map((proj) => (
                          <div key={proj.id} className="drawer-card">
                            <div className="drawer-card-header">
                              <h3 className="drawer-card-title">{proj.title}</h3>
                              <span className="drawer-card-badge">{proj.category}</span>
                            </div>
                            <p className="drawer-card-desc">{proj.summary}</p>
                            <div className="drawer-tags">
                              {proj.tools.map((t, idx) => (
                                <span key={idx} className="drawer-tag">
                                  {t}
                                </span>
                              ))}
                            </div>
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="drawer-link"
                              >
                                <span>View Repository on GitHub &rarr;</span>
                              </a>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="drawer-card" style={{ padding: "20px 16px" }}>
                          <p className="drawer-card-desc" style={{ color: "var(--muted)", margin: 0 }}>
                            New projects and case studies will be published here.
                          </p>
                        </div>
                      )}
                    </section>

                    {FUTURE_PROJECTS.length > 0 && (
                      <section className="doc-section">
                        <p className="doc-label">Future Project Roadmap</p>
                        {FUTURE_PROJECTS.map((item, idx) => (
                          <div key={idx} className="drawer-card">
                            <div className="drawer-card-header">
                              <h3 className="drawer-card-title">{item.title}</h3>
                              <span className="drawer-card-badge">{item.tag}</span>
                            </div>
                            <p className="drawer-card-desc">{item.desc}</p>
                          </div>
                        ))}
                      </section>
                    )}

                    <section className="doc-section">
                      <p className="doc-label">Academic Credentials &amp; Results</p>
                      {portfolioData.education.map((edu, idx) => (
                        <div key={idx} className="drawer-card">
                          <div className="drawer-card-header">
                            <div>
                              <h3 className="drawer-card-title">{edu.degree}</h3>
                              <p style={{ margin: "2px 0 0", color: "#d5c39c", fontSize: "11.5px" }}>
                                {edu.institution} &bull; {edu.period}
                              </p>
                            </div>
                            <span className="drawer-edu-result">{edu.result}</span>
                          </div>
                          <p className="drawer-card-desc" style={{ marginTop: "6px" }}>
                            {edu.majorOrGroup} ({edu.scale})
                          </p>
                          <ul style={{ margin: "6px 0 0", paddingLeft: "16px", color: "var(--muted)", fontSize: "12px", lineHeight: "1.5" }}>
                            {edu.highlights.map((h, hIdx) => (
                              <li key={hIdx}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </section>
                  </>
                ) : selectedData.key === "claude" ? (
                  <>
                    <section className="doc-section">
                      <p className="doc-label">AI &amp; Context Engineering Capabilities</p>
                      <div>
                        {portfolioData.skills.aiEngineering.map((skill, idx) => (
                          <div key={idx} className="drawer-card">
                            <div className="drawer-card-header">
                              <h3 className="drawer-card-title">{skill.name}</h3>
                              {skill.level && <span className="drawer-edu-result">{skill.level}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="doc-section">
                      <p className="doc-label">Growth Marketing &amp; Business Analytics</p>
                      <div>
                        {portfolioData.skills.marketing.map((skill, idx) => (
                          <div key={idx} className="drawer-card">
                            <div className="drawer-card-header">
                              <h3 className="drawer-card-title">{skill.name}</h3>
                              {skill.level && <span className="drawer-edu-result">{skill.level}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="doc-section">
                      <p className="doc-label">Core Technical Stack &amp; Tooling</p>
                      <div className="drawer-tags">
                        {[
                          "Model Context Protocol (MCP)",
                          "Context Engineering",
                          "Prompt Architecture (CoT)",
                          "TypeScript",
                          "JavaScript (ES6+)",
                          "Next.js 16",
                          "Node.js",
                          "Tailwind CSS",
                          "Chrome Manifest V3",
                          "MS Excel (Financial & Sales)",
                          "SQL (Queries & Filters)",
                          "STP & 4Ps Framework",
                          "Consumer Psychology",
                          "Jest Unit Testing",
                          "Git & GitHub",
                          "Autonomous Agent Loops"
                        ].map((t, idx) => (
                          <span key={idx} className="drawer-tag drawer-tag-primary">
                            {t}
                          </span>
                        ))}
                      </div>
                    </section>

                    {selectedData.review ? (
                      <section className="doc-section">
                        <p className="doc-label">Operational Quality Gate</p>
                        <p className="doc-review">{selectedData.review}</p>
                      </section>
                    ) : null}
                  </>
                ) : (
                  <>
                    {/* Live Interactive Zero-Trust DLP Pre-Execution Inspection Engine (DennisLab) */}
                    <section className="doc-section">
                      <p className="doc-label">Live Zero-Trust DLP Pre-Execution Censor</p>
                      <div className="dlp-simulator-card">
                        <div className="dlp-simulator-header">
                          <h4 className="dlp-simulator-title">
                            <Shield className="w-4 h-4 text-emerald-400" />
                            <span>Pre-Execution Inspection Simulator</span>
                          </h4>
                          <span
                            className={`dlp-badge ${
                              simulationResult.blocked
                                ? "dlp-badge-blocked"
                                : "dlp-badge-safe"
                            }`}
                          >
                            {simulationResult.blocked ? (
                              <>
                                <AlertTriangle className="w-3 h-3" />
                                <span>BLOCKED</span>
                              </>
                            ) : (
                              <>
                                <Check className="w-3 h-3" />
                                <span>SAFE / SANITIZED</span>
                              </>
                            )}
                          </span>
                        </div>

                        <label className="dlp-input-label">
                          Agent Input Command / SQL / Prompt:
                        </label>
                        <input
                          type="text"
                          value={testInput}
                          onChange={(e) => setTestInput(e.target.value)}
                          placeholder="Type bash commands or SQL queries..."
                          className="dlp-input"
                        />

                        <p
                          className={`dlp-reason-text ${
                            simulationResult.blocked
                              ? "dlp-reason-blocked"
                              : "dlp-reason-safe"
                          }`}
                        >
                          {simulationResult.reason}
                        </p>

                        <div className="dlp-output-wrapper">
                          <div className="dlp-output-label">Sanitized Host Execution Payload:</div>
                          <pre className="dlp-output-code">
                            {simulationResult.blocked
                              ? "[EXECUTION_ABORTED_BY_FIREWALL: Dangerous operator or path traversal rejected]"
                              : simulationResult.sanitized}
                          </pre>
                        </div>
                      </div>
                    </section>

                    {/* Architecture Specifications & System Invariant Modules (DennisLab) */}
                    <section className="doc-section">
                      <p className="doc-label">Context Engineering &amp; Architecture Specs</p>
                      {[
                        {
                          id: "system-prompt",
                          num: "01",
                          title: "Structured Enterprise System Prompt Template",
                          spec: "Schema Invariants & Prompt Hardening · Architecture Spec",
                          desc: "A structured prompt template enforcing strict JSON schemas, system invariants, and hallucination defense.",
                          tags: ["System Invariants", "JSON Schema", "CoT Structuring"],
                          lang: "XML / Prompt Spec",
                          code: portfolioData.promptEngineeringLab.modules[0]?.code || "",
                        },
                        {
                          id: "zero-trust-mcp",
                          num: "02",
                          title: "Zero-Trust MCP Protocol & Live DLP Censor",
                          spec: "Pre-Execution Command Interceptor & Secret Firewall · Active Gateway",
                          desc: "Execution firewall that scans agent inputs and outputs, automatically masking secret credentials and blocking dangerous commands.",
                          tags: ["Zero-Trust DLP", "AST Sanitizer", "Live Simulation"],
                          lang: "TypeScript / Node.js",
                          code: portfolioData.promptEngineeringLab.modules[2]?.code || "",
                        },
                        {
                          id: "context-window",
                          num: "03",
                          title: "Hierarchical Token Partitioning Engine",
                          spec: "32k Context Compaction & Reserved State Trees · Memory Strategy",
                          desc: "Smart memory strategy splitting the context window into reserved partitions so the AI never runs out of room during long tasks.",
                          tags: ["Context Budgeting", "32k Window", "Memory Trees"],
                          lang: "ASCII Memory Diagram",
                          code: portfolioData.promptEngineeringLab.modules[1]?.code || "",
                        },
                      ].map((mod) => (
                        <div key={mod.id} className="drawer-card">
                          <div className="drawer-card-header">
                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
                                <span className="drawer-card-badge">Chapter {mod.num}</span>
                              </div>
                              <h3 className="drawer-card-title">{mod.title}</h3>
                              <p style={{ margin: "2px 0 0", color: "#d5c39c", fontSize: "11px" }}>
                                {mod.spec}
                              </p>
                            </div>
                          </div>

                          <p className="drawer-card-desc">{mod.desc}</p>

                          <div className="drawer-tags" style={{ marginTop: "8px" }}>
                            {mod.tags.map((t, tIdx) => (
                              <span key={tIdx} className="drawer-tag">
                                {t}
                              </span>
                            ))}
                          </div>

                          {mod.code && (
                            <div className="spec-code-wrapper">
                              <div className="spec-code-topbar">
                                <span className="spec-code-lang">{mod.lang}</span>
                                <button
                                  type="button"
                                  onClick={() => copyCode(mod.code, mod.id)}
                                  className="spec-copy-btn"
                                >
                                  {copiedModuleId === mod.id ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-400" />
                                      <span>Copied</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>Copy Code</span>
                                    </>
                                  )}
                                </button>
                              </div>
                              <pre className="spec-pre">{mod.code}</pre>
                            </div>
                          )}
                        </div>
                      ))}
                    </section>
                  </>
                )}
              </div>

              <div className="bottom-dock">
                <div
                  className="meta-row"
                  aria-label="Field edition and publication year"
                >
                  <div className="stars" aria-label="Field edition">
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                    <span className="dim">◇</span>
                  </div>
                  <span className="meta-divider" aria-hidden="true" />
                  <span className="review-source">Field Notes</span>
                  <span className="year">{selectedData.year}</span>
                </div>
                <hr className="detail-rule" />
                <div className="action-rail" aria-label="Field manual actions">
                  <button
                    className="pill language"
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      detailScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
                      showToast(`Field manual · ${selectedData.year} Edition`);
                    }}
                    title="Jump to Top / Overview"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                    Field Edition
                  </button>

                  <button
                    className="pill"
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      if (detailScrollRef.current) {
                        detailScrollRef.current.scrollTo({
                          top: 240,
                          behavior: "smooth"
                        });
                      }
                      showToast(`Viewing ${selectedData.title} Notes & Specs...`);
                    }}
                  >
                    Read Notes
                  </button>

                  <a
                    className="pill"
                    href={selectedData.repoUrl || "https://github.com/opuhassan001-alt"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      sound.playClick();
                      showToast(`Opening ${selectedData.title} Source on GitHub...`);
                    }}
                  >
                    View Guide
                  </a>

                  <button
                    className="pill icon-only"
                    type="button"
                    aria-label="Save book"
                    aria-pressed={isSaved}
                    onClick={() => {
                      sound.playClick();
                      setIsSaved((prev) => {
                        const next = !prev;
                        showToast(
                          next
                            ? "Saved to your reading list."
                            : "Removed from your reading list."
                        );
                        return next;
                      });
                    }}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.8 4.2h10.4v15.6L12 16.6l-5.2 3.2V4.2Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Close Button */}
        <button
          className="close-button"
          type="button"
          aria-label="Close detail view"
          tabIndex={mode === "detail" ? 0 : -1}
          onClick={closeDetail}
        >
          ×
        </button>

        {/* Floating Blossom Petals */}
        <div className="blossom-field" aria-hidden="true">
          <span
            className="blossom"
            style={
              {
                "--blossom-x": "4%",
                "--blossom-size": "30px",
                "--blossom-r": "18deg",
                "--blossom-duration": "10s",
                "--blossom-delay": "-4s"
              } as React.CSSProperties
            }
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span
            className="blossom"
            style={
              {
                "--blossom-x": "16%",
                "--blossom-size": "19px",
                "--blossom-r": "74deg",
                "--blossom-duration": "8.5s",
                "--blossom-delay": "-1s"
              } as React.CSSProperties
            }
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span
            className="blossom"
            style={
              {
                "--blossom-x": "31%",
                "--blossom-size": "25px",
                "--blossom-r": "-20deg",
                "--blossom-duration": "11s",
                "--blossom-delay": "-7s"
              } as React.CSSProperties
            }
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span
            className="blossom"
            style={
              {
                "--blossom-x": "44%",
                "--blossom-size": "17px",
                "--blossom-r": "48deg",
                "--blossom-duration": "9.5s",
                "--blossom-delay": "-5s"
              } as React.CSSProperties
            }
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span
            className="blossom"
            style={
              {
                "--blossom-x": "58%",
                "--blossom-size": "28px",
                "--blossom-r": "12deg",
                "--blossom-duration": "12s",
                "--blossom-delay": "-8s"
              } as React.CSSProperties
            }
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span
            className="blossom"
            style={
              {
                "--blossom-x": "69%",
                "--blossom-size": "20px",
                "--blossom-r": "92deg",
                "--blossom-duration": "9s",
                "--blossom-delay": "-3s"
              } as React.CSSProperties
            }
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span
            className="blossom"
            style={
              {
                "--blossom-x": "79%",
                "--blossom-size": "32px",
                "--blossom-r": "32deg",
                "--blossom-duration": "11.5s",
                "--blossom-delay": "-6s"
              } as React.CSSProperties
            }
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span
            className="blossom"
            style={
              {
                "--blossom-x": "89%",
                "--blossom-size": "22px",
                "--blossom-r": "-14deg",
                "--blossom-duration": "10.5s",
                "--blossom-delay": "-9s"
              } as React.CSSProperties
            }
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span
            className="blossom"
            style={
              {
                "--blossom-x": "96%",
                "--blossom-size": "16px",
                "--blossom-r": "56deg",
                "--blossom-duration": "8s",
                "--blossom-delay": "-2s"
              } as React.CSSProperties
            }
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>

        {/* Menu Navigation Drawer */}
        <nav
          className="menu-layer"
          id="menuLayer"
          aria-label="Site menu"
          aria-hidden={!menuOpen}
        >
          <ul className="menu-list">
            <li>
              <a
                className="menu-link"
                href="#portfolio-showcase"
                onClick={() => setMenuOpen(false)}
              >
                Volumes
              </a>
            </li>
            <li>
              <a
                className="menu-link"
                href="#hero"
                onClick={() => {
                  setMenuOpen(false);
                  showToast("Navigating to Profile...");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="menu-link"
                href="#contact"
                onClick={() => {
                  setMenuOpen(false);
                  showToast("Navigating to Contact...");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </main>

      {/* Toast Notification */}
      <div
        className="toast"
        role="status"
        aria-live="polite"
        data-show={toastVisible ? "true" : "false"}
      >
        {toastMessage}
      </div>
    </div>
  );
}

