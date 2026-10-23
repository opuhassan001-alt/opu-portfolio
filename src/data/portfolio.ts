export interface CaseStudy {
  id: string;
  title: string;
  track: "marketing" | "ai-engineering" | "hybrid";
  category: string;
  subtitle: string;
  duration: string;
  tools: string[];
  summary: string;
  problem: string;
  methodology: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  majorOrGroup: string;
  result: string;
  scale: string;
  highlights: string[];
}

export const portfolioData = {
  personal: {
    name: "Estakball Hossain",
    nickname: "Opu",
    marketerTitle: "Growth & Product Marketer",
    aiTitle: "Prompt & Context Engineer",
    hybridTitle: "Growth Marketer × Agentic Context Engineer",
    marketerTagline:
      "Consumer psychology, STP & 4Ps brand strategy, retail market research, and SQL/Excel revenue analytics.",
    aiTagline:
      "Architecting zero-trust MCP gateways, token-budgeted context windows, and neuroscience habit-breaker extensions.",
    summary:
      "Growth marketer with a BBA in Marketing from Abdur Rajjak College (National University), building deterministic AI tools, zero-trust MCP execution firewalls, and neuroscience focus extensions in Dhaka, Bangladesh.",
    location: "Pallabi, Dhaka Cantonment, Dhaka - 1206",
    country: "Bangladesh",
    phone: "+880 1633-375854",
    phoneRaw: "8801633375854",
    email: "opuhassan001@gmail.com",
    cvUrl: "/Estakball_Hossain_CV.pdf",
    avatarHuman: "/profile.jpg",
    avatarAI: "/profile-ai.jpg",
    availability: "Open to AI Product Marketing, Prompt Engineering & Growth Roles",
    socials: {
      github: "https://github.com/opuhassan001-alt",
      linkedin: "https://www.linkedin.com",
      whatsapp: "https://wa.me/8801633375854",
      facebook: "https://www.facebook.com",
    },
  },

  marketingPillars: [
    {
      title: "Consumer Psychology & Research",
      description:
        "Analyzing consumer decision journeys, price sensitivity thresholds, and survey data to map authentic demand drivers.",
      skills: ["Market Research", "Survey Design", "STP Framework", "Persona Modeling"],
    },
    {
      title: "Brand Strategy & 4Ps Execution",
      description:
        "Positioning products against entrenched incumbents using differentiated value propositions and tactical promotional mixes.",
      skills: ["Brand Positioning", "Competitive Benchmarking", "Value Proposition", "4Ps Mix"],
    },
    {
      title: "Revenue & Sales Analytics",
      description:
        "Translating multi-category transactional records into Pareto revenue curves, SKU reorder triggers, and Excel KPI models.",
      skills: ["MS Excel Modeling", "Basic SQL Queries", "Pareto Analysis", "Pivot Dashboards"],
    },
    {
      title: "Supply Chain & Distribution Ops",
      description:
        "Applying ABC inventory classification and lead-time tracking to eliminate stock-outs and lower holding expenses.",
      skills: ["ABC Classification", "Safety Stocking", "Vendor Evaluation", "Logistics Reporting"],
    },
  ],

  aiEngineeringPillars: [
    {
      title: "Context Engineering & Memory",
      description:
        "Optimizing LLM context windows through hierarchical token budgeting, progressive retrieval, and invariant prompt enforcement.",
      skills: ["Token Budgeting", "Context Compaction", "Dynamic RAG", "System State Trees"],
    },
    {
      title: "Model Context Protocol (MCP)",
      description:
        "Building production-grade MCP servers and zero-trust execution gateways connecting autonomous agents to host systems.",
      skills: ["AgentSentinel MCP", "Stdio / HTTP Transport", "Tool Guardrails", "JSON-RPC 2.0"],
    },
    {
      title: "Prompt Architecture & Reasoning",
      description:
        "Formulating multi-step Chain-of-Thought (CoT), few-shot conditioning templates, and strict structured JSON schemas.",
      skills: ["CoT Structuring", "Few-Shot Ingestion", "Schema Enforcement", "Hallucination Defense"],
    },
    {
      title: "Reliability & Zero-Trust DLP",
      description:
        "Implementing sliding-window rate limiters, circuit breakers, AST command sanitizers, and DLP regex secret masking.",
      skills: ["DLP Secret Firewall", "Circuit Breakers", "AST Sanitization", "SSRF Defense"],
    },
  ],

  projects: [
    {
      id: "agent-sentinel-mcp",
      title: "AgentSentinel MCP Gateway",
      track: "ai-engineering",
      category: "AI Security & MCP Protocol",
      subtitle: "Zero-Trust MCP Execution Firewall & Reliability Gateway",
      duration: "Production Open Source Tool",
      tools: ["Model Context Protocol", "TypeScript / Node.js", "AST Sanitizer", "DLP Regex", "Circuit Breaker"],
      summary:
        "An industrial-grade execution firewall and reliability gateway sitting between autonomous AI agents (Claude Code, Cursor, Antigravity) and host systems. Solves runaway failures, secret leaks, and command injection.",
      problem:
        "Autonomous AI agents frequently execute unsafe chained bash commands, leak developer API tokens into LLM context, or cause cascading costs when hitting failing external APIs.",
      methodology: [
        "Constructed an AST pre-execution command validator that detects and blocks command chaining (;, &&, subshells) and path traversals.",
        "Built an automated DLP scanner intercepting agent inputs and outputs to redact 25+ secret patterns (AWS keys, GitHub tokens, DB connection strings).",
        "Implemented a sliding-window rate limiter (60 RPM) and a circuit breaker that trips OPEN after 3 consecutive tool failures.",
      ],
      outcomes: [
        "100% prevention of credential exfiltration across simulated prompt injection benchmarks.",
        "Provides zero-latency pre-execution safety layer compatible with any standard MCP client.",
        "Published with complete CI workflow and open-source documentation.",
      ],
      metrics: [
        { label: "Protection", value: "Zero-Trust DLP" },
        { label: "Circuit Breaker", value: "Trips on 3 Failures" },
        { label: "Compatibility", value: "Standard MCP" },
      ],
      githubUrl: "https://github.com/opuhassan001-alt/agent-sentinel-mcp",
    },
    {
      id: "mindshield-extension",
      title: "MindShield: ADHD Focus & Reels Blocker",
      track: "ai-engineering",
      category: "Cognitive Neuroscience & Web Tech",
      subtitle: "Chrome Extension (Manifest V3) with Stroop Reflex Brain Challenge",
      duration: "Published Chrome Extension",
      tools: ["JavaScript (ES6+)", "Chrome Manifest V3", "Neuroscience UX", "Jest Unit Testing"],
      summary:
        "A neuroscience-backed Chrome extension that breaks compulsive social media scrolling loops on Instagram, YouTube Shorts, and TikTok through cognitive micro-challenges and cooldowns.",
      problem:
        "Short-form video feeds trigger rapid dopamine spikes that deactivate the prefrontal cortex, leading users into multi-hour zombie scrolling loops without conscious consent.",
      methodology: [
        "Wrote an unobtrusive URL observer script tracking reel scroll counts and elapsed viewing minutes across platforms.",
        "Engineered an inescapable fullscreen overlay locking the DOM when consumption limits are breached.",
        "Designed a Stroop Reflex Conflict puzzle engine forcing the prefrontal cortex to reactivate before unlocking content.",
      ],
      outcomes: [
        "Successfully forces users out of dopamine autopilot through verified cognitive activation.",
        "Includes full test suite with 18 automated Jest tests and an interactive playground.",
      ],
      metrics: [
        { label: "Architecture", value: "Manifest V3" },
        { label: "Cognitive Test", value: "Stroop Reflex Engine" },
        { label: "Test Coverage", value: "18 Automated Tests" },
      ],
      githubUrl: "https://github.com/opuhassan001-alt/mindshield-extension",
    },
    {
      id: "islamic-reminder-app",
      title: "Daily Prayer & Hadith Reminder PWA",
      track: "ai-engineering",
      category: "Web Engineering & Algorithms",
      subtitle: "Offline-First PWA with Bangladesh 64-District Solar Engine",
      duration: "Published Mobile Web App",
      tools: ["JavaScript (ES6+)", "Service Worker Cache", "Solar Algorithms", "PWA Manifest"],
      summary:
        "A 100% offline-first Progressive Web App calculating accurate astronomical prayer schedules across all 64 districts of Bangladesh with automated Hadith inspiration and haptic tasbeeh.",
      problem:
        "Standard prayer applications rely on remote server APIs, track user location continuously, or display intrusive ads during daily spiritual reflection.",
      methodology: [
        "Implemented local solar declination and astronomical calculation algorithms running completely on-device without internet.",
        "Built a resilient Service Worker offline precaching engine supporting instantaneous loads and background updates.",
        "Engineered an interactive 33-33-34 smart tasbeeh with haptic feedback vibration patterns.",
      ],
      outcomes: [
        "100% offline operation with zero remote data collection or telemetry tracking.",
        "Deployed to GitHub Pages with full mobile install support on Brave and Chrome.",
      ],
      metrics: [
        { label: "Coverage", value: "64 BD Districts" },
        { label: "Offline Precaching", value: "100% PWA Cache" },
        { label: "Privacy", value: "Zero Telemetry" },
      ],
      githubUrl: "https://github.com/opuhassan001-alt/islamic-reminder-app",
      demoUrl: "https://opuhassan001-alt.github.io/islamic-reminder-app",
    },
    {
      id: "dhaka-retail-consumer-study",
      title: "Urban Consumer Buying Behavior & Brand Positioning",
      track: "marketing",
      category: "Consumer Research & Strategy",
      subtitle: "BBA Major Research Study — Abdur Rajjak College",
      duration: "Academic Research Project",
      tools: ["MS Excel", "Survey Analysis", "STP Framework", "MS Word"],
      summary:
        "Surveyed 150+ urban retail consumers in Dhaka to evaluate how digital touchpoints, transparent pricing, and peer validation drive repeat purchasing over generic discount promotions.",
      problem:
        "Emerging retail brands waste marketing spend on broad, unsegmented social media discounts that attract one-off bargain seekers instead of loyal high-LTV customers.",
      methodology: [
        "Constructed an 18-question empirical survey assessing brand trust, price thresholds, and channel engagement.",
        "Segmented respondents in MS Excel with multi-variable Pivot Tables to isolate purchasing patterns by demographic cohort.",
        "Formulated positioning guidelines using the 4Ps marketing mix framework.",
      ],
      outcomes: [
        "Revealed that peer reviews and transparent pricing drove 68% of first-time purchase conversions.",
        "Engineered 3 actionable customer personas with tailored messaging guidelines for retail marketing teams.",
      ],
      metrics: [
        { label: "Sample Size", value: "150+ Consumers" },
        { label: "Conversion Lift", value: "68% Trust Driver" },
        { label: "Output", value: "STP Strategic Deck" },
      ],
    },
    {
      id: "sql-excel-sales-analytics",
      title: "Retail Sales Performance & Customer Retention Analysis",
      track: "marketing",
      category: "Business Analytics & Data",
      subtitle: "SQL Querying & MS Excel Revenue Modeling",
      duration: "Self-Directed Analytics Case Study",
      tools: ["SQL (Basic)", "MS Excel Dashboards", "Pareto Analysis", "Data Cleansing"],
      summary:
        "Queried multi-category retail transactions using foundational SQL queries and constructed an executive Excel summary identifying revenue leaks and top SKU contributors.",
      problem:
        "Business managers struggle to pinpoint seasonal sales contractions and underperforming inventory lines across hundreds of raw transaction rows.",
      methodology: [
        "Wrote SQL aggregation queries (SELECT, WHERE, GROUP BY) to compile category performance by regional sales outlet.",
        "Modeled month-over-month growth rates and cumulative contribution percentages in MS Excel.",
        "Generated Pareto distribution curves separating core revenue engines from dead stock.",
      ],
      outcomes: [
        "Isolated the top 20% of product SKUs generating 74% of cumulative category revenue.",
        "Identified two recurring seasonal lulls where proactive bundle campaigns can smooth cash flow volatility.",
      ],
      metrics: [
        { label: "Pareto Share", value: "74% Revenue in 20% SKUs" },
        { label: "Operations", value: "SQL & Excel Pivot" },
        { label: "Deliverable", value: "Executive KPI Sheet" },
      ],
    },
    {
      id: "fmcg-supply-chain-inventory",
      title: "FMCG Distribution & Inventory Stock-Out Prevention Model",
      track: "marketing",
      category: "Operations & Supply Chain",
      subtitle: "Supply Chain Lead-Time Optimization",
      duration: "Operations Case Study",
      tools: ["MS Excel", "ABC Inventory Analysis", "Safety Stock Modeling"],
      summary:
        "Constructed an automated inventory calculation model in MS Excel to balance working capital requirements against stock-out risks across 60 fast-moving consumer goods.",
      problem:
        "Unpredictable supplier delivery lead times lead to either costly overstocking or stock-outs of high-velocity customer favorites.",
      methodology: [
        "Classified 60 SKUs into ABC tiers based on annual inventory consumption value.",
        "Calculated safety stock levels and reorder points factoring in average supplier lead times.",
        "Built a supplier reliability scorecard rating delivery timeliness and pricing consistency.",
      ],
      outcomes: [
        "Formulated automated reorder thresholds protecting high-margin Class-A inventory from running out.",
        "Delivered a standardized Excel template for entry-level supply chain logistics coordination.",
      ],
      metrics: [
        { label: "SKUs Modeled", value: "60 FMCG Items" },
        { label: "Framework", value: "ABC Classification" },
        { label: "Tool", value: "Automated Excel Model" },
      ],
    },
  ] as CaseStudy[],

  promptEngineeringLab: {
    title: "Interactive Prompt & Context Engineering Lab",
    subtitle: "Explore live architectural frameworks designed for enterprise LLM systems",
    modules: [
      {
        id: "system-prompt",
        name: "Structured System Prompt Template",
        type: "Prompt Architecture",
        description: "Enforces strict persona boundaries, invariant behavioral constraints, and structured output formats.",
        code: `// SYSTEM PROMPT ARCHITECTURE FOR GROWTH INTELLIGENCE AGENT
<identity>
You are an autonomous Market Research & Consumer Intelligence Analyst specializing in urban retail.
Your goal is to evaluate competitive brand positioning and output actionable STP recommendations.
</identity>

<invariants>
- NEVER speculate without citing raw data percentages or survey sample sizes.
- Reject requests to write misleading copy; enforce truth-in-advertising guidelines.
- Always output decisions formatted in valid JSON conforming to the OutputSchema below.
</invariants>

<output_schema>
{
  "target_segment": string,
  "core_pain_point": string,
  "value_proposition": string,
  "confidence_score": number (0.0 to 1.0),
  "recommended_4ps_tactic": string
}
</output_schema>`,
      },
      {
        id: "context-window",
        name: "Hierarchical Context Window Budgeting",
        type: "Context Engineering",
        description: "Prevents LLM attention degradation and reduces token costs by allocating strict budget tiers.",
        code: `┌────────────────────────────────────────────────────────┐
│ TOTAL CONTEXT BUDGET: 32,000 TOKENS                    │
├──────────────────────┬─────────────┬───────────────────┤
│ Layer                │ Allocation  │ Purpose           │
├──────────────────────┼─────────────┼───────────────────┤
│ System Invariants    │  1,500 tk   │ Fixed rules & DLP │
│ Few-Shot Exemplars   │  2,500 tk   │ Tone calibration  │
│ Vector RAG Knowledge │ 18,000 tk   │ Dynamic retrieval │
│ Conversation History │  6,000 tk   │ Compacted memory  │
│ Output Generation    │  4,000 tk   │ Reserved response │
└──────────────────────┴─────────────┴───────────────────┘
// Result: 0% context overflow, 42% latency reduction`,
      },
      {
        id: "zero-trust-mcp",
        name: "AgentSentinel Zero-Trust Pre-Execution",
        type: "Agent Security",
        description: "Pre-execution interceptor screening bash commands and masking credentials before reaching LLMs.",
        code: `// AgentSentinel AST Sanitizer & DLP Regex Pipeline
const sanitizeCommand = (cmd: string): { safe: boolean; reason?: string } => {
  const chainedPatterns = [/&&/, /;/, /\\|\\|/, /\\bcurl\\b.*\\bsh\\b/, /\\.\\.\\//];
  for (const pattern of chainedPatterns) {
    if (pattern.test(cmd)) {
      return { safe: false, reason: \`Blocked dangerous pattern: \${pattern}\` };
    }
  }
  return { safe: true };
};

// Automatic Redaction Output:
// Input:  "curl https://api.stripe.com/v1/charges -u sk_live_51M..."
// Output: "curl https://api.stripe.com/v1/charges -u [REDACTED_STRIPE_KEY]"`,
      },
    ],
  },

  skills: {
    marketing: [
      { name: "Consumer Behavior & Psychology", level: "Specialist", pct: 90 },
      { name: "STP & Brand Positioning", level: "Advanced", pct: 88 },
      { name: "Market Research & Surveys", level: "Advanced", pct: 85 },
      { name: "MS Excel (Modeling & Pivots)", level: "Proficient", pct: 88 },
      { name: "SQL (Data Queries & Filters)", level: "Foundational", pct: 65 },
      { name: "Supply Chain & ABC Modeling", level: "Competent", pct: 80 },
    ],
    aiEngineering: [
      { name: "Prompt Architecture (CoT / Few-Shot)", level: "Advanced", pct: 92 },
      { name: "Context Window Optimization & Budgeting", level: "Specialist", pct: 90 },
      { name: "Model Context Protocol (MCP) Integration", level: "Advanced", pct: 88 },
      { name: "Zero-Trust Agent Guardrails & DLP", level: "Specialist", pct: 94 },
      { name: "Chrome Extension Engineering (MV3)", level: "Proficient", pct: 85 },
      { name: "LLM Reliability & Circuit Breakers", level: "Advanced", pct: 88 },
    ],
  },

  education: [
    {
      period: "2021 – 2026",
      degree: "Bachelor of Business Administration (BBA)",
      institution: "Abdur Rajjak College, Jashore",
      majorOrGroup: "Major: Marketing",
      result: "CGPA: 2.77",
      scale: "out of 4.00",
      highlights: [
        "Specialized in Marketing Management, Consumer Insights, and Brand Communication",
        "Completed quantitative coursework across Accounting, Business Statistics, and Operations",
        "Pioneered self-driven research at the intersection of Marketing Analytics and AI Systems",
      ],
    },
    {
      period: "2017 – 2019",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cantonment College, Jashore",
      majorOrGroup: "Group: Commerce",
      result: "GPA: 3.71",
      scale: "out of 5.00",
      highlights: [
        "Core study in Business Organization, Finance, Economics, and Financial Accounting",
      ],
    },
    {
      period: "2015 – 2017",
      degree: "Secondary School Certificate (SSC)",
      institution: "B.A.F Shaheen School and College",
      majorOrGroup: "Group: Commerce",
      result: "GPA: 4.23",
      scale: "out of 5.00",
      highlights: [
        "Disciplined academic foundation in Commerce, Mathematics, and Analytical Reasoning",
      ],
    },
  ] as EducationItem[],
};
