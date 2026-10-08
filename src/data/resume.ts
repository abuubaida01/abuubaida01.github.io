export const profile = {
  name: "Abu Ubaida",
  monogram: "AU.",
  role: "Senior Software Engineer",
  location: "Karachi, Pakistan",
  email: "abuubaida901@gmail.com",
  phone: "+92 331 2371338",
  availability: "Available for Senior Software & AI Roles",
  headline:
    "Senior Software Engineer building scalable distributed systems, high-performance backends, and agentic workflows.",
  subheadline:
    "Senior Software Engineer with nearly 3 years building production AI features for a SaaS platform serving 600+ enterprise clients. Hands-on with agentic AI, MCP servers, RAG, function calling, prompt engineering, and AWS-based automation. Owning AI solutions end to end, from design to production and handover.",
  links: {
    github: "https://github.com/abuubaida01",
    linkedin: "https://www.linkedin.com/in/abuubaidaaz",
    twitter: "https://twitter.com/abuubaidaaz",
    resume: "./Abu-Ubaida-Resume.pdf",
  },
};

export const metrics = [
  { value: "Nearly 3", label: "Years Experience" },
  { value: "600+", label: "Enterprise Clients Served" },
  { value: "85%+", label: "AI Grounded Accuracy" },
  { value: "80%", label: "LLM Token Reduction" },
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
      "Migrated long-running third-party insurer data-sync jobs from Django-Celery to AWS Step Functions scheduled via Amazon EventBridge, running as a single workflow of ~9 hours — reduced AWS EC2 costs and improved server availability.",
      "Architected a nightly Lambda analytics pipeline (Celery-scheduled) that runs complex SQL against a read-only replica to pre-compute usage statistics for 600+ enterprise clients and publishes client-specific JSON to Amazon S3. Dashboard load times fell from ~5 minutes to under 2 minutes with zero production database load, giving the Sales team real-time data during plan renewals and directly supporting renewal conversations.",
      "Reduced LLM token usage by 80% (7,800 to 1,500 tokens per client) by restructuring raw query output into a compact delta array before inference, covering AI-generated chart insights across 600+ nightly dashboard refreshes.",
      "Introduced Claude Code with spec-driven development and PR review standards across the engineering team, taking features from requirements to tested, reviewed PRs with agent assistance; mentored 2 junior engineers and improved code consistency.",
    ],
    stack: [
      "AWS Step Functions",
      "Amazon EventBridge",
      "AWS Lambda",
      "Celery",
      "Python",
      "Amazon S3",
      "PostgreSQL",
      "Claude Code",
    ],
  },
  {
    company: "Smartbenefits",
    title: "Software Engineer",
    period: "Jan 2025 — Jul 2026",
    location: "Karachi, Pakistan",
    highlights: [
      "Built a multi-agent medical-query chatbot (Vertex AI, Google ADK, WebSocket) handling 1,000+ queries per month at 75%+ accuracy, reducing dependency on human support staff.",
      "Built 5 MCP tools on the Django backend with FastMCP and connected it to Vertex AI agents via function calling. The tools serve the latest knowledge-base content and client-specific policy PDFs, grounding answers in live data and improving accuracy and source citations (75% → 85% on internal evaluation).",
      "Built an end-to-end document-intelligence RAG system for handwritten receipts and technical PDFs: benchmarked traditional OCR (TrOCR, AWS Textract, Qwen-OCR) against vision-language models (Gemma-3, Llama-3.2-Vision), selected Gemma-3-4b-it for best quality/speed trade-off, embedded extracted text into Pinecone, and exposed retrieval to an LLM agent via function calling with prompt-engineered system instructions, served via FastAPI chat interface.",
      "Architected a serverless layer on AWS Lambda for bulk exports, cron jobs, and heavy I/O, eliminating recurring memory spikes on the core Django application and reducing monthly compute spend and server loads.",
      "Built in-portal OPD claim submission and Celery-based automated onboarding/offboarding, cutting HR team workload by 30%.",
      "Shipped a branch-level oversight dashboard, a Send Login Invite flow, and a monthly PF contribution upload (background-task processing), giving multi-location clients real-time visibility into benefits utilization and removing manual HR tracking.",
    ],
    stack: [
      "Python",
      "Django",
      "FastAPI",
      "Vertex AI",
      "Google ADK",
      "FastMCP",
      "Pinecone",
      "AWS Lambda",
      "Celery",
      "WebSocket",
    ],
  },
  {
    company: "Smartbenefits",
    title: "Junior Software Engineer",
    period: "Jan 2024 — Jan 2025",
    location: "Karachi, Pakistan",
    highlights: [
      "Built an automated Quarterly Benefits Usage Report system (IPD, OPD, Cashless Medicine, Doctor Chat, Discounts) via cron jobs, delivering insights to 1,000+ HR professionals four times a year and removing manual reporting effort.",
      "Built the Provident Fund Management feature for real-time dividend and fund-growth tracking, improving transparency and reducing PF-related support queries.",
      "Delivered an in-app doctor chat feature in partnership with NoorCare (consultations and prescriptions), driving 500+ chats per week.",
      "Built a customizable post-claim feedback questionnaire tool for the marketing team, generating 1,000+ weekly responses and continuous customer-sentiment data.",
      "Served as the primary technical contact for enterprise clients in working sessions, resolving integration issues on secure client networks and protecting account retention during onboarding. Collaborated with product, ops, and support teams to ship these features.",
    ],
    stack: ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
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
    name: "FeesDay",
    tagline: "B2B payment-reminder & recurring-fee collection engine",
    description:
      "Founded, designed and built a B2B SaaS platform that automates recurring-fee collection and payment reminders over email and WhatsApp, using a modular FastAPI backend and PostgreSQL (SQLAlchemy).",
    highlights: [
      "Migrated reminder engine from single in-process APScheduler to decoupled serverless architecture (Celery, EventBridge, AWS Lambda, API Gateway)",
      "Isolated WhatsApp messaging from core API, handling 1M+ requests with millisecond response times at a fraction of prior compute cost",
      "Implemented JWT authentication with refresh-token rotation and asynchronous webhook handlers for real-time delivery tracking",
      "Bulk Excel/CSV data-import pipeline with comprehensive validation",
    ],
    stack: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "AWS Lambda",
      "Amazon EventBridge",
      "Celery",
      "API Gateway",
    ],
    link: "https://feesday.com",
    repo: "https://github.com/abuubaida01",
    accent: "#6366F1",
  },
  {
    name: "Hemaayah",
    tagline: "Pakistan's first remittance-linked health insurance product",
    description:
      "Led end-to-end architecture of Hemaayah, building 3 platforms from scratch (Partner Portal, Ops Portal, Customer Website) with automated zero-touch policy issuance.",
    highlights: [
      "Built 3 platforms from scratch: Partner Portal, Ops Portal, and Customer Website",
      "Integrated Vodafone Qatar, Ompay, and Bank of Punjab Exchange via secure webhooks, triggering policy creation automatically on every qualifying remittance",
      "Automated policy delivery over WhatsApp (Botpress), enabling fully zero-touch issuance with no manual ops involvement",
      "Real-time policy validation and automated document delivery pipeline",
    ],
    stack: ["Django", "PostgreSQL", "WhatsApp API", "Botpress", "AWS", "Webhooks"],
    link: "https://hemaayah.com/",
    repo: "https://github.com/abuubaida01",
    accent: "#22D3EE",
  },
  {
    name: "AddaZakat",
    tagline: "Service-Oriented Social Impact Platform with AI Assistant",
    description:
      "Architected a full-stack Service-Oriented Architecture (Django, FastAPI, Next.js) connecting global donors with verified NGOs and needy families, featuring real-time chat, notifications, and AI assistance.",
    highlights: [
      "Integrated conversational AI assistant using LangGraph and an MCP server to help users articulate and publish need-based stories",
      "Real-time chat & notification systems connecting global donors with verified NGOs",
      "Optimized SEO and scaled AWS infrastructure (EC2, S3, Amplify)",
      "Reached 3,000+ monthly visitors and 17,000+ views within 90 days",
    ],
    stack: ["Django", "FastAPI", "Next.js", "LangGraph", "FastMCP", "AWS (EC2, S3, Amplify)"],
    link: "https://addazakat.com",
    repo: "https://github.com/abuubaida01",
    accent: "#3B82F6",
  },
];

export interface SkillGroup {
  title: string;
  blurb: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLM Systems",
    blurb: "Multi-agent systems, MCP, RAG pipelines, and LLM tooling",
    skills: [
      "LLM Applications",
      "AI Agents",
      "Multi-Agent Systems",
      "MCP (Model Context Protocol)",
      "FastMCP",
      "LangGraph",
      "LangChain",
      "CrewAI",
      "Agent Development Kit (ADK)",
      "Vertex AI",
      "RAG Pipelines",
      "Claude Code (Coding Agents)",
      "Pinecone",
      "Scikit-learn",
    ],
  },
  {
    title: "Backend & Architecture",
    blurb: "High-throughput services, serverless, and system design",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "Django REST Framework",
      "SQLAlchemy",
      "Alembic",
      "Celery",
      "Pytest",
      "PHP",
      "JavaScript",
      "Microservices",
      "Serverless Architecture",
      "Service-Oriented Architecture",
      "Distributed Systems",
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "AWS serverless orchestration, containerization, and CI/CD",
    skills: [
      "AWS Lambda",
      "AWS Step Functions",
      "Amazon EventBridge",
      "Amazon S3",
      "Amazon EC2",
      "Amazon SQS",
      "API Gateway",
      "AWS Amplify",
      "GCP",
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Cloudflare",
    ],
  },
  {
    title: "Full-Stack, Data & Integrations",
    blurb: "Databases, reactive frontends, and enterprise APIs",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Vector Databases",
      "React.js",
      "Next.js",
      "REST APIs",
      "WebSocket",
      "Webhooks",
      "Tailwind CSS",
      "WhatsApp API",
      "Botpress",
      "Payment Gateways",
      "Enterprise Integrations",
    ],
  },
];

export const recognition = {
  degree: {
    title: "BS in Software Engineering",
    school: "University of Karachi (UBIT)",
    level: "GPA 3.1 / 4.0",
    year: "2024",
    focus: [
      "Software Engineering Principles",
      "Distributed Systems",
      "Data Structures",
      "Software Design",
      "System Architecture",
    ],
  },
  award: {
    title: "Breakout Performer Award",
    org: "Smartbenefits",
    date: "March 2026",
    detail:
      "Honored with the Breakout Performer Award for exceptional technical contributions and the rapid deployment of multiple end-to-end AI and backend features.",
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
