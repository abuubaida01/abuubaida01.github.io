Abu Ubaida
Karachi, Pakistan abuubaida901@gmail.com (+92)3312371338 in/abuubaidaaz abuubaida01.github.io/
SUMMARY
Results-driven Full-Stack Software & AI Engineer with 3 years of experience architecting scalable backend applications, microservices, and AI-
powered products. Promoted twice in under three years (Junior Software Engineer to Senior Software Engineer). Expert in Python (FastAPI,
Django) with a track record of optimizing system performance, cutting manual workflows, and shipping high-performance APIs. Skilled in
database design (PostgreSQL, Redis), AWS cloud infrastructure, and frontend integration with React/Next.js.
EXPERIENCE
Senior Software Engineer
Smartbenefits July 2026 - Present Karachi, Pakistan
,
• Architected a nightly Celery-scheduled Lambda analytics pipeline running complex SQL against a read-only replica to pre-compute usage
statistics for 600+ enterprise clients, publishing results to S3 as client-specific JSON — cut dashboard load times from ~15 minutes to under
10ms with zero production database load.
• Cut LLM token usage 80% (7,800 → 1,500 tokens/client) for AI-generated chart insights by restructuring raw query output into a compact
delta array before inference — scoped to the 2 charts that need AI, across 600+ nightly dashboard refreshes.
• Built an automated JSON export pipeline to Amazon S3 with a cached API (1-hour TTL) powering interactive charts in the HR Portal — cut data
latency for the Sales team during plan renewals and directly supported renewal conversations with real-time data.
• Mentored 2 junior engineers, instituting PR standards and structured code reviews that reduced review cycle time and improved code
consistency across the team.
Software Engineer
Smartbenefits January 2025 - July 2026 Karachi, Pakistan
,
• Served as the primary technical point of contact for enterprise clients via Google Meet, resolving integration issues on secure client networks
and protecting account retention during onboarding.
• Architected a serverless microservices system (AWS Lambda) to offload bulk exports, cron jobs, and heavy I/O — eliminated recurring
memory spikes on the core application and freed capacity for primary workloads.
• Cut infrastructure costs by migrating all heavy cron jobs to AWS Lambda, reducing core server load and monthly compute spend.
• Shipped Send Login Invite and Upload Monthly PF Contribution (with background task processing) — drove dependent onboarding adoption
and eliminated manual HR file tracking for PF workflows.
• Built a multi-agent AI chatbot (Vertex AI, ADK, WebSocket) resolving 1,000+ monthly medical queries at 85%+ accuracy, cutting dependency
on human support staff; designed self-updating agents that auto-enrich the knowledge base on every OPD claim settlement — a zero-
maintenance AI knowledge system.
• Led end-to-end architecture of Hemaayah, Pakistan's first remittance-linked health insurance product — built 3 platforms (Partner Portal, Ops
Portal, Customer Website) from scratch with WhatsApp-based policy issuance (Botpress) and webhook integrations (Vodafone Qatar, Ompay,
Bank of Punjab Exchange), enabling fully automated, zero-touch policy delivery on every qualifying remittance.
• Built an automated Quarterly Benefits Usage Report system (IPD, OPD, Cashless Medicine, Doctor Chat, Discounts) via cron jobs — delivered
actionable insights to 1,000+ HR professionals four times a year and eliminated all manual reporting effort.
• Reduced HR team workload by 30% by building in-portal OPD claims submission on behalf of employees; cut operational overhead further with
Celery-based automated onboarding/offboarding.
• Shipped a branch-level oversight dashboard giving multi-location enterprises real-time visibility into HR operations and benefits utilization —
supported faster, data-backed decisions across branches; paired with a quarterly NPS system used to track and act on client satisfaction trends.
Junior Software Engineer
Smartbenefits January 2024 - January 2025 Karachi, Pakistan
,
• Automated quarterly utilization reporting and policy expiry notifications for 400+ corporate clients via Celery background jobs, eliminating
20+ hours/week of manual HR effort.
• Built the Provident Fund Management feature enabling real-time dividend and fund-growth tracking for employees — improved transparency
and reduced PF-related support queries.
• Delivered a doctor chat feature in partnership with NoorCare, letting users consult doctors and receive prescriptions in-app — drove 500+
chats/week, expanding platform engagement beyond core insurance use.
• Built a customizable feedback questionnaire tool for marketing, triggered post-claim-settlement — generated 1,000+ weekly responses,
giving the company continuous customer-sentiment data.
EDUCATION
BS in Software Engineering (EQF Level 6)
University of Karachi (UBIT) • Karachi, Pakistan • 2024 • GPA 3.1/4.0
• Key Focus Areas: Software Engineering Principles, Distributed Systems, Data Structures, Software Design, Capstone Project.
PROJECT
FeesDay (B2B SaaS Platform)
Feesday • feesday.com • January 2026 - Present
• Automate fee collection with email and WhatsApp reminders
• Designed and built Feesday, a B2B SaaS platform automating recurring-fee collection and payment reminders via a modular FastAPI backend and
PostgreSQL database managed with SQLAlchemy.
• Migrated the reminder engine from a single in-process APScheduler instance to a decoupled serverless architecture (Celery scheduling →
SQS → AWS Lambda → API Gateway), isolating WhatsApp messaging from the core API — enabling the system to reliably handle 1M+ requests
with millisecond response times at a fraction of the prior compute cost.
• Implemented secure JWT-based authentication (including refresh-token rotation), asynchronous webhook handlers for real-time delivery
tracking, and a bulk data-import pipeline accepting validated Excel/CSV customer uploads.
AddaZakat (Social Impact Platform)
addazakat.com • addazakat.com • January 2024 - Present
• It connects donors worldwide with verified seekers like needy families and NGOs.
• Architected a full-stack Service-Oriented Architecture (Django, FastAPI, Next.js) connecting global donors with verified NGOs, featuring real-time
chat and notification systems.
• Integrated a conversational Al assistant using LangGraph and MCP Server to help users articulate and publish detailed need-based stories.
• Optimized SEO and scaled AWS infrastructure (EC2, S3, Amplify) to support platform growth, achieving 3,000+ monthly visitors and 17,000+ views
within a 90-day period.
SKILLS
Languages & Frameworks: Python, Django, FastAPI, SQLAlchemy, Alembic, Celery, Django REST Framework, Pytest, GraphQL
AI & LLMs: RAG, Agent Development Kit (ADK), LangChain, LangGraph, LLM Models, FastMCP , Claude Code, Vertex AI, CrewAI, Scikit-learn
Databases: PostgreSQL, MySQL, Redis (Cache), Pinecone (Vector DB), MongoDB, vector databases, Data preparation, Data processing
Cloud, DevOps & Tools: AWS (EC2, S3, Amplify), GCP , Docker, Git, Cloudflare, GitHub Actions, WhatsApp API, Google Sheets API, Payment
Gateways
Architecture: System Design, Parallel Processing, Batch & Real-time Processing, In-Memory Caching (Redis), Distributed Systems
Frontend: React.js, Next.js, Tailwind CSS, HTML, Bootstrap
AWARDS & HONORS
Breakout Performer Award
Smartbenefits • March 2026
• Honored with the Breakout Performer Award for exceptional technical contributions and the rapid deployment of multiple end-to-end Al and
backend features.
CERTIFICATIONS
LLM Engineering, RAG and AI Agents
Udemy • April 2026
FastAPI Full Stack Mastery
Udemy • November 2025
Problem Solving (Advanced)
HackerRank • July 2024