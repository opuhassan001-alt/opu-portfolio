export interface CaseStudy {
  id: string;
  title: string;
  category: "Marketing" | "Data & SQL" | "Supply Chain" | "HR & Operations";
  subtitle: string;
  duration: string;
  tools: string[];
  summary: string;
  problem: string;
  methodology: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
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
    title: "BBA Graduate — Marketing & Business Operations",
    tagline:
      "Enthusiastic and disciplined Business Administration (Marketing) graduate ready to deliver measurable value across Marketing, Supply Chain, Finance, and Human Resources.",
    summary:
      "An enthusiastic and disciplined fresh BBA graduate in Marketing looking for the opportunity to begin a high-impact career in Marketing, Supply Chain, Finance, or Human Resources. Equipped with strong analytical thinking, foundational SQL and MS Excel data skills, and fluent bilingual communication. Eager to learn new skills and grow into a results-driven professional through hands-on experience and mentorship.",
    location: "Pallabi, Dhaka Cantonment, Dhaka - 1206",
    country: "Bangladesh",
    phone: "+880 1633-375854",
    phoneRaw: "8801633375854",
    email: "opuhassan001@gmail.com",
    cvUrl: "/Estakball_Hossain_CV.pdf",
    avatarUrl: "/profile.jpg",
    availability: "Open to Entry-Level Roles, Management Trainee & Internships",
    socials: {
      linkedin: "https://www.linkedin.com/in/estakball-hossain-opu",
      whatsapp: "https://wa.me/8801633375854",
      facebook: "https://www.facebook.com/opuhassan001",
    },
  },

  careerPillars: [
    {
      title: "Marketing & Brand Strategy",
      description:
        "Academic specialization in Marketing with a strong grasp of consumer behavior, market segmentation (STP), 4Ps execution, and competitive benchmarking.",
      skills: ["Market Research", "Consumer Insights", "Campaign Planning", "Brand Positioning"],
    },
    {
      title: "Supply Chain & Coordination",
      description:
        "Process-oriented mindset suited for procurement tracking, vendor communication, inventory classification, and logistics reporting.",
      skills: ["Inventory Tracking", "Vendor Liaison", "Process Discipline", "Order Coordination"],
    },
    {
      title: "Finance & Data Analytics",
      description:
        "Commerce background from SSC through BBA combined with MS Excel modeling and foundational SQL querying for data-driven reporting.",
      skills: ["MS Excel Reporting", "SQL (Basic Queries)", "Cost & KPI Analysis", "Data Cleansing"],
    },
    {
      title: "Human Resources & People Ops",
      description:
        "Strong interpersonal communication, team collaboration, and organizational adaptability to support recruitment, onboarding, and HR operations.",
      skills: ["Team Collaboration", "Bilingual Communication", "Talent Coordination", "Documentation"],
    },
  ],

  caseStudies: [
    {
      id: "dhaka-retail-consumer-study",
      title: "Consumer Buying Behavior & Digital Brand Positioning in Urban Retail",
      category: "Marketing",
      subtitle: "BBA Major Research Project — Marketing",
      duration: "Academic Research Case Study",
      tools: ["MS Excel", "Survey Analysis", "STP Framework", "MS Word"],
      summary:
        "Evaluated how social proof, pricing sensitivity, and digital touchpoints influence purchase decisions among young adults in Dhaka's fast-growing retail sector.",
      problem:
        "Local retail brands struggle to convert social media engagement into repeat store and online purchases due to unclear value propositions and unsegmented promotional targeting.",
      methodology: [
        "Designed a structured 18-question survey instrument assessing price sensitivity, brand trust factors, and promotional channel preference.",
        "Compiled and cleaned responses in MS Excel, using Pivot Tables and cross-tabulation to segment respondents by age bracket and purchasing frequency.",
        "Applied the STP (Segmentation, Targeting, Positioning) and 4Ps marketing mix frameworks to formulate actionable recommendations.",
      ],
      outcomes: [
        "Identified that transparent pricing and peer reviews drove 68% of first-time purchase decisions compared to generic discount ads.",
        "Developed a 3-tier customer segmentation model with tailored messaging templates for student, early-career, and family buyer personas.",
        "Presented an executive report in MS Word with visual Excel charts for clear stakeholder decision-making.",
      ],
      metrics: [
        { label: "Sample Analyzed", value: "150+ Respondents" },
        { label: "Key Purchase Driver", value: "68% Trust & Reviews" },
        { label: "Target Personas", value: "3 Segments" },
      ],
    },
    {
      id: "sql-excel-sales-analytics",
      title: "Retail Sales Performance & Customer Retention Analysis",
      category: "Data & SQL",
      subtitle: "Business Analytics Case Study (SQL & MS Excel)",
      duration: "Self-Directed Analytical Project",
      tools: ["SQL (Basic)", "MS Excel", "KPI Dashboards", "Data Filtering"],
      summary:
        "Extracted and analyzed multi-category retail transaction records using foundational SQL queries and built an executive MS Excel summary sheet to spot revenue leaks.",
      problem:
        "Raw transactional data across product categories makes it difficult for business managers to quickly identify underperforming SKUs and seasonal demand dips.",
      methodology: [
        "Wrote foundational SQL queries (SELECT, WHERE, GROUP BY, ORDER BY) to aggregate monthly revenue by product line and regional branch.",
        "Exported query outputs into MS Excel to calculate month-over-month growth rates, contribution margins, and top-20% revenue contributors.",
        "Constructed a clean visual summary table highlighting reorder priorities and promotional timing.",
      ],
      outcomes: [
        "Isolated the top 20% of product SKUs responsible for 74% of total category revenue (Pareto principle validation).",
        "Highlighted two seasonal demand troughs where targeted bundle promotions could stabilize monthly cash flow.",
        "Reduced manual reporting preparation time by organizing standardized Excel templates.",
      ],
      metrics: [
        { label: "Pareto Revenue Share", value: "74% from Top SKUs" },
        { label: "Query Operations", value: "SQL & Excel" },
        { label: "Reporting Format", value: "Executive KPI Sheet" },
      ],
    },
    {
      id: "fmcg-supply-chain-inventory",
      title: "FMCG Distribution & Inventory Stock-Out Prevention Model",
      category: "Supply Chain",
      subtitle: "Operations & Supply Chain Case Study",
      duration: "Business Operations Project",
      tools: ["MS Excel", "ABC Analysis", "Supply Chain Ops", "Vendor Matrix"],
      summary:
        "Modeled a structured inventory tracking and reorder-point worksheet in MS Excel to balance holding costs against stock-out risks for fast-moving consumer goods.",
      problem:
        "Inconsistent lead times and manual stock tracking frequently cause either costly overstocking of slow-moving items or stock-outs of high-demand essentials.",
      methodology: [
        "Categorized a sample catalog of 60 FMCG items using ABC Inventory Analysis based on annual consumption value.",
        "Built an automated MS Excel sheet flagging items approaching safety stock thresholds based on average daily usage and supplier lead time.",
        "Created a standardized vendor evaluation rubric scoring delivery reliability, price stability, and communication responsiveness.",
      ],
      outcomes: [
        "Established clear reorder triggers for Class-A high-velocity items to prevent revenue loss from stock-outs.",
        "Provided a repeatable Excel template suitable for entry-level supply chain and warehouse coordination workflows.",
      ],
      metrics: [
        { label: "Catalog Modeled", value: "60 FMCG SKUs" },
        { label: "Classification", value: "ABC Matrix" },
        { label: "Primary Tool", value: "MS Excel Models" },
      ],
    },
    {
      id: "hr-onboarding-collaboration-study",
      title: "Structured Onboarding & Cross-Functional Team Effectiveness",
      category: "HR & Operations",
      subtitle: "Human Resource Management Case Study",
      duration: "Academic Organizational Study",
      tools: ["MS Word", "HR Workflows", "Team Collaboration", "Communication"],
      summary:
        "Designed a 30-60-90 day onboarding checklist and communication protocol aimed at accelerating fresh graduate integration into corporate teams.",
      problem:
        "Newly hired graduates often experience role ambiguity during their first quarter, slowing down productivity and cross-departmental collaboration.",
      methodology: [
        "Reviewed standard HR onboarding practices and mapped common friction points for entry-level business associates.",
        "Drafted a structured 30-60-90 day milestone tracker and mentorship feedback form in MS Word and MS Excel.",
        "Outlined weekly check-in templates to align individual learning goals with departmental KPIs.",
      ],
      outcomes: [
        "Produced a ready-to-use onboarding documentation pack covering orientation, tool training, and first-project review.",
        "Demonstrated how clear documentation and proactive communication improve early-stage employee confidence and retention.",
      ],
      metrics: [
        { label: "Framework", value: "30-60-90 Day Plan" },
        { label: "Focus Area", value: "People Operations" },
        { label: "Deliverable", value: "SOP & Evaluation Kit" },
      ],
    },
  ] as CaseStudy[],

  skills: {
    computer: [
      {
        name: "Microsoft Excel",
        level: "Proficient",
        percentage: 85,
        detail: "Spreadsheets, data organization, Pivot Tables, formulas, and business reporting",
      },
      {
        name: "Microsoft Word",
        level: "Advanced",
        percentage: 90,
        detail: "Executive documentation, academic reports, business proposals, and formatting",
      },
      {
        name: "SQL (Basic)",
        level: "Foundational",
        percentage: 65,
        detail: "Data extraction, SELECT queries, filtering (WHERE), sorting, and basic aggregations",
      },
      {
        name: "Internet Research & Digital Tools",
        level: "Advanced",
        percentage: 92,
        detail: "Market intelligence, competitor research, online data sourcing, and modern workspace tools",
      },
    ],
    professional: [
      {
        name: "Business Communication",
        description: "Clear, respectful, and persuasive verbal and written communication across diverse teams.",
      },
      {
        name: "Team Collaboration",
        description: "Proven ability to coordinate in group projects, support shared goals, and build rapport.",
      },
      {
        name: "Analytical Thinking",
        description: "Breaking down business problems into structured data points to support practical decisions.",
      },
      {
        name: "Time Management",
        description: "Disciplined scheduling, deadline adherence, and prioritizing multi-step tasks.",
      },
      {
        name: "Fast Learner",
        description: "Eager to absorb new software workflows, industry processes, and mentorship feedback.",
      },
      {
        name: "Adaptability",
        description: "Comfortable transitioning across Marketing, Supply Chain, Finance, and HR environments.",
      },
    ],
    languages: [
      {
        language: "Bangla",
        proficiency: "Native Proficiency",
        detail: "Mother tongue — full professional and interpersonal fluency",
        percent: 100,
      },
      {
        language: "English",
        proficiency: "Fluent",
        detail: "Professional working proficiency in reading, business writing, and speaking",
        percent: 88,
      },
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
        "Specialized in Marketing Management, Consumer Behavior, and Brand Strategy",
        "Completed core coursework across Financial Accounting, Supply Chain Fundamentals, Human Resource Management, and Business Statistics",
        "Developed analytical reporting, presentation, and team leadership capabilities",
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
        "Focused on Accounting, Business Organization & Management, Finance, and Economics",
        "Built a disciplined academic foundation in a structured collegiate environment",
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
        "Strong foundation in Business Studies, Accounting principles, and Mathematics",
        "Active participation in school sports and collaborative student activities",
      ],
    },
  ] as EducationItem[],

  interests: [
    {
      name: "Football",
      description:
        "Passionate follower and player — reinforces teamwork, tactical awareness, resilience, and discipline under pressure.",
    },
    {
      name: "Movies & Cinema",
      description:
        "Appreciates compelling storytelling, diverse cultural perspectives, and human psychology — inspiring creative marketing narratives.",
    },
  ],
};

