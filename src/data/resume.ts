export const profile = {
  name: "Abu Ubaida",
  monogram: "AU.",
  role: "Full-Stack & AI Engineer",
  location: "Karachi, Pakistan",
  email: "abuubaida901@gmail.com",
  phone: "(+92) 331 2371 338",
  availability: "Available for Full-Stack & AI Engineering Roles",
  headline:
    "Full-Stack & AI Engineer building scalable distributed systems, high-performance backends, and agentic workflows.",
  subheadline:
    "I architect resilient backend systems in Python (FastAPI, Django), craft polished frontends with Next.js/React/TypeScript, and ship production AI agents with LangGraph, RAG, and MCP. Promoted twice in under three years — from Junior to Senior Software Engineer.",
  links: {
    github: "https://github.com/abuubaida01",
    linkedin: "https://www.linkedin.com/in/abuubaidaaz",
    twitter: "https://twitter.com/abuubaidaaz",
    resume: "https://app.rezi.ai/s/2NDjJjHlGxWjN2USY6bP",
  },
};

export const metrics = [
  { value: "3+", label: "Years Experience" },
  { value: "3", label: "Promotions in 3 Years" },
  { value: "600+", label: "Enterprise Clients Served" },
  { value: "85%+", label: "AI Agent Resolution" },
];

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export const experience: Role[] = [
  {
    company: "Smartbenefits",
    title: "Senior Software Engineer",
    period: "Jul 2026 — Present",
    location: "Karachi, Pakistan",
    highlights: [
      "Architected a nightly Celery-scheduled Lambda analytics pipeline running complex SQL against a read-only replica, pre-computing usage stats for 600+ enterprise clients — cutting dashboard load times from ~15 minutes to under 10ms with zero production DB load.",
      "Cut LLM token usage 80% (7,800 → 1,500 tokens/client) for AI-generated chart insights by restructuring query output into a compact delta array before inference, across 600+ nightly dashboard refreshes.",
      "Built an automated JSON export pipeline to Amazon S3 with a cached API (1-hour TTL) powering interactive charts in the HR Portal, supporting real-time renewal conversations for the Sales team.",
      "Mentored 2 junior engineers, instituting PR standards and structured code reviews that reduced review cycle time.",
    ],
    stack: ["Python", "FastAPI", "AWS Lambda", "Celery", "S3", "PostgreSQL"],
  },
  {
    company: "Smartbenefits",
    title: "Software Engineer",
    period: "Jan 2025 — Jul 2026",
    location: "Karachi, Pakistan",
    highlights: [
      "Built a multi-agent AI chatbot (Vertex AI, ADK, WebSocket) resolving 1,000+ monthly medical queries at 85%+ accuracy — with self-updating agents that auto-enrich the knowledge base, a zero-maintenance AI system.",
      "Led end-to-end architecture of Hemaayah, Pakistan's first remittance-linked health insurance product — built 3 platforms (Partner, Ops, Customer) with WhatsApp-based policy issuance and webhook integrations, enabling zero-touch automated policy delivery.",
      "Architected serverless microservices (AWS Lambda) to offload bulk exports and cron jobs — eliminated recurring memory spikes and cut monthly compute spend.",
      "Reduced HR workload 30% with in-portal OPD claims submission and Celery-based automated onboarding/offboarding.",
      "Shipped a branch-level oversight dashboard and quarterly NPS system, delivering actionable insights to 1,000+ HR professionals.",
    ],
    stack: ["Python", "Django", "Vertex AI", "LangChain", "AWS", "Next.js"],
  },
  {
    company: "Smartbenefits",
    title: "Junior Software Engineer",
    period: "Jan 2024 — Jan 2025",
    location: "Karachi, Pakistan",
    highlights: [
      "Automated quarterly utilization reporting and policy-expiry notifications for 400+ corporate clients via Celery, eliminating 20+ hours/week of manual HR effort.",
      "Built the Provident Fund Management feature enabling real-time dividend and fund-growth tracking — reducing PF-related support queries.",
      "Delivered a doctor chat feature with NoorCare, driving 500+ chats/week past core insurance engagement.",
      "Built a post-claim-settlement feedback questionnaire tool generating 1,000+ weekly responses.",
    ],
    stack: ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
  },
  {
    company: "SaaS & Open Source",
    title: "Founder / Independent Projects",
    period: "2024 — Present",
    location: "Remote",
    highlights: [
      "Designed and built Feesday, a B2B SaaS platform automating recurring-fee collection via a modular FastAPI backend — migrated the reminder engine to a serverless architecture (Celery → SQS → Lambda → API Gateway), handling 1M+ requests reliably.",
      "Architected AddaZakat, a service-oriented platform (Django, FastAPI, Next.js) connecting global donors to verified NGOs, with a LangGraph/MCP conversational AI assistant and 3,000+ monthly visitors.",
    ],
    stack: ["FastAPI", "Next.js", "LangGraph", "FastMCP", "AWS"],
  },
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  link: string;
  repo: string;
  accent: string;
}

export const projects: Project[] = [
  {
    name: "Feesday",
    tagline: "B2B payment-reminder & reconciliation engine",
    description:
      "SaaS platform automating recurring-fee collection with email & WhatsApp reminders. A modular FastAPI backend and PostgreSQL database managed with SQLAlchemy.",
    highlights: [
      "Serverless reminder engine: Celery → SQS → AWS Lambda → API Gateway",
      "Handles 1M+ requests with millisecond response times",
      "JWT auth with refresh-token rotation + async webhook handlers",
      "Bulk data-import pipeline (validated Excel/CSV uploads)",
    ],
    stack: ["FastAPI", "Next.js", "PostgreSQL", "AWS Lambda", "Celery", "SQS"],
    link: "https://feesday.com",
    repo: "https://github.com/abuubaida01",
    accent: "#6366F1",
  },
  {
    name: "AddaZakat",
    tagline: "AI-agent social-impact platform",
    description:
      "Connects global donors with verified NGOs in real time. A service-oriented architecture with a LangGraph/MCP conversational AI assistant that helps users articulate and publish need-based stories.",
    highlights: [
      "LangGraph + MCP conversational story-publishing agent",
      "Real-time chat & notification systems",
      "3,000+ monthly visitors, 17,000+ views in 90 days",
      "SEO-optimized AWS infrastructure (EC2, S3, Amplify)",
    ],
    stack: ["Next.js", "Django", "FastAPI", "LangGraph", "FastMCP", "AWS"],
    link: "https://addazakat.com",
    repo: "https://github.com/abuubaida01",
    accent: "#3B82F6",
  },
  {
    name: "Hemaayah",
    tagline: "Multi-portal policy generation & validation backend",
    description:
      "Pakistan's first remittance-linked health insurance product. Built 3 platforms from scratch with WhatsApp-based policy issuance (Botpress) and webhook integrations for fully automated, zero-touch policy delivery.",
    highlights: [
      "Partner, Ops, and Customer portals built end-to-end",
      "WhatsApp-based policy issuance via Botpress",
      "Webhooks: Vodafone Qatar, Ompay, Bank of Punjab Exchange",
      "Automated PDF pipeline + verification workflows",
    ],
    stack: ["Django", "PostgreSQL", "WhatsApp API", "Botpress", "AWS"],
    link: "https://feesday.com",
    repo: "https://github.com/abuubaida01",
    accent: "#22D3EE",
  },
  {
    name: "Super School",
    tagline: "Asynchronous GraphQL backend",
    description:
      "Queue-driven school-administration backend exposing a fully async GraphQL API for multi-tenant school management, built to scale with Dockerized services.",
    highlights: [
      "Async FastAPI + Strawberry GraphQL",
      "Queue-backed background processing",
      "PostgreSQL with Dockerized deployment",
      "REST↔GraphQL hybrid surface",
    ],
    stack: ["FastAPI", "Strawberry GraphQL", "PostgreSQL", "Docker"],
    link: "https://github.com/abuubaida01",
    repo: "https://github.com/abuubaida01",
    accent: "#34D399",
  },
];

export interface SkillGroup {
  title: string;
  blurb: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Systems",
    blurb: "Resilient, high-throughput service architecture",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "Node.js",
      "GraphQL",
      "REST APIs",
      "Celery",
      "Redis",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "AI & Agentic Workflows",
    blurb: "Production AI systems with real-world impact",
    skills: [
      "LangGraph",
      "Vertex AI",
      "RAG Pipelines",
      "FastMCP",
      "Google GenAI SDK",
      "Ollama",
      "Agent Development Kit",
      "LangChain",
    ],
  },
  {
    title: "Frontend Systems",
    blurb: "Polished, fast, accessible interfaces",
    skills: ["TypeScript", "React.js", "Next.js", "Tailwind CSS", "HTMX", "State Management"],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Serverless, CI/CD, and infrastructure",
    skills: [
      "AWS Lambda",
      "AWS EC2",
      "AWS S3",
      "EventBridge",
      "CloudFront",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "CI/CD Pipelines",
    ],
  },
];

export const recognition = {
  degree: {
    title: "B.S. in Software Engineering",
    school: "University of Karachi (UBIT)",
    level: "EQF Level 6",
    year: "2024",
    focus: [
      "Software Engineering Principles",
      "Distributed Systems",
      "Data Structures",
      "Software Design",
      "Capstone Project",
    ],
  },
  award: {
    title: "Breakout Performer Award",
    org: "Smartbenefits",
    date: "March 2026",
    detail:
      "Honored for exceptional technical contributions and the rapid deployment of multiple end-to-end AI and backend features.",
  },
  certifications: [
    { name: "LLM Engineering, RAG and AI Agents", issuer: "Udemy", date: "Apr 2026" },
    { name: "FastAPI Full Stack Mastery", issuer: "Udemy", date: "Nov 2025" },
    { name: "Problem Solving (Advanced)", issuer: "HackerRank", date: "Jul 2024" },
  ],
};

export const navLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Tech Stack", id: "tech-stack" },
  { label: "Impact", id: "impact" },
];
