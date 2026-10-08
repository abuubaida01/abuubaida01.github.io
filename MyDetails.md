# Abu Ubaida
Karachi, Pakistan • abuubaida901@gmail.com • +92 3312371338 • English (Fluent) • linkedin.com/in/abuubaidaaz • abuubaida01.github.io/

## SUMMARY
Senior Software Engineer with nearly 3 years building production AI features for a SaaS platform serving 600+ enterprise clients. Hands-on with agentic AI, MCP servers, RAG, function calling and prompt engineering, plus AWS-based automation and backend/API integrations. Owning AI solutions end to end, from design to production and handover.

## EXPERIENCE

### Senior Software Engineer
**Smartbenefits** — *July 2026 - Present, Karachi, Pakistan*
- Migrated long-running third-party insurer data-sync jobs from Django-Celery to AWS Step Functions scheduled via Amazon EventBridge, running as a single workflow of about 9 hours. This reduced AWS EC2 costs and improved server availability.
- Architected a nightly Lambda analytics pipeline (Celery-scheduled) that runs complex SQL against a read-only replica to pre-compute usage statistics for 600+ enterprise clients and publishes client-specific JSON to Amazon S3. Dashboard load times fell from about 5 minutes to under 2 minutes with zero production database load. This gave the Sales team real-time data during plan renewals and directly supported renewal conversations.
- Reduced LLM token usage by 80% (7,800 to 1,500 tokens per client) by restructuring raw query output into a compact delta array before inference. This covered AI-generated chart insights across 600+ nightly dashboard refreshes.
- Introduced Claude Code with spec-driven development and PR review standards across the engineering team, taking features from requirements to tested, reviewed PRs with agent assistance; mentored 2 junior engineers and improved code consistency.

### Software Engineer
**Smartbenefits** — *January 2025 - July 2026, Karachi, Pakistan*
- Built a multi-agent medical-query chatbot (Vertex AI, Google ADK, WebSocket) handling 1,000+ queries per month at 75%+ accuracy, reducing dependency on human support staff.
- Built 5 MCP tools on the Django backend with FastMCP and connected it to the Vertex AI agents via function calling. The tools serve the latest knowledge-base content and client-specific policy PDFs, which grounded answers in live data and improved accuracy and source citations (75% -> 85% on internal evaluation).
- Built an end-to-end document-intelligence RAG system for handwritten receipts and technical PDFs: benchmarked traditional OCR (TrOCR, AWS Textract, Qwen-OCR) against vision-language models (Gemma-3, Llama-3.2-Vision), selected Gemma-3-4b-it for the best quality/speed trade-off, then embedded and chunked the extracted text into Pinecone and exposed retrieval to an LLM agent through function calling, with prompt-engineered system instructions that ground answers in retrieved context, served via a FastAPI chat interface.
- Architected a serverless layer on AWS Lambda for bulk exports, cron jobs and heavy I/O, eliminating recurring memory spikes on the core Django application and reducing monthly compute spend and server loads.
- Built in-portal OPD claim submission and Celery-based automated onboarding/offboarding, cutting HR team workload by 30%.
- Shipped a branch-level oversight dashboard, a Send Login Invite flow and a monthly PF contribution upload (background-task processing), giving multi-location clients real-time visibility into benefits utilization and removing manual HR tracking.

### Junior Software Engineer
**Smartbenefits** — *January 2024 - January 2025, Karachi, Pakistan*
- Built an automated Quarterly Benefits Usage Report system (IPD, OPD, Cashless Medicine, Doctor Chat, Discounts) via cron jobs, delivering insights to 1,000+ HR professionals four times a year and removing manual reporting effort.
- Built the Provident Fund Management feature for real-time dividend and fund-growth tracking, improving transparency and reducing PF-related support queries.
- Delivered an in-app doctor chat feature in partnership with NoorCare (consultations and prescriptions), driving 500+ chats per week.
- Built a customizable post-claim feedback questionnaire tool for the marketing team, generating 1,000+ weekly responses and continuous customer-sentiment data.
- Served as the primary technical contact for enterprise clients in working sessions, resolving integration issues on secure client networks and protecting account retention during onboarding. Collaborated with product, ops and support teams to ship these features.

## EDUCATION
**BS in Software Engineering**
University of Karachi (UBIT) • Karachi, Pakistan • 2024 • GPA 3.1/4.0

## PROJECTS

### FeesDay (B2B SaaS Platform)
*Feesday • feesday.com • January 2026 - Present*
- Founded, designed and built a B2B SaaS platform that automates recurring-fee collection and payment reminders over email and WhatsApp, using a modular FastAPI backend and PostgreSQL (SQLAlchemy).
- Migrated the reminder engine from a single in-process APScheduler to a decoupled serverless architecture (Celery, EventBridge, AWS Lambda, API Gateway). This isolated WhatsApp messaging from the core API and handled 1M+ requests with millisecond response times at a fraction of the prior compute cost.
- Implemented JWT authentication with refresh-token rotation, asynchronous webhook handlers for real-time delivery tracking, and a bulk Excel/CSV import pipeline with validation.

### Hemaayah
*Smartbenefits • hemaayah.com/ • January 2026 - Present*
- Led end-to-end architecture of Hemaayah, Pakistan's first remittance-linked health insurance product, building 3 platforms from scratch (Partner Portal, Ops Portal, Customer Website).
- Integrated Vodafone Qatar, Ompay and Bank of Punjab Exchange via secure webhooks, triggering policy creation automatically on every qualifying remittance.
- Automated policy delivery over WhatsApp (Botpress), enabling fully zero-touch issuance with no manual ops involvement.

### AddaZakat (Social Impact Platform)
*addazakat.com • addazakat.com • January 2024 - Present*
- Architected a full-stack Service-Oriented Architecture (Django, FastAPI, Next.js) connecting global donors with verified NGOs and needy families, with real-time chat and notifications.
- Integrated a conversational AI assistant using LangGraph and an MCP server to help users articulate and publish need-based stories.
- Optimized SEO and scaled AWS infrastructure (EC2, S3, Amplify), reaching 3,000+ monthly visitors and 17,000+ views within 90 days.

## SKILLS
- **Languages & Frameworks:** Python, Django, FastAPI, Django REST Framework, SQLAlchemy, Alembic, Celery, Pytest, PHP, JavaScript
- **AI & LLM:** LLM Applications, AI Agents, Multi-Agent Systems, Model Context Protocol (MCP), FastMCP, LangGraph, LangChain, CrewAI, Agent Development Kit (ADK), Vertex AI, RAG, Claude Code (coding agents), Pinecone, Scikit-learn
- **Cloud & DevOps:** AWS (Lambda, Step Functions, EventBridge, S3, EC2, SQS, API Gateway, Amplify), GCP, Docker, Git, GitHub Actions, CI/CD, Cloudflare
- **Full-Stack Development:** React.js, Next.js, REST APIs, WebSocket, Webhooks, HTML, Tailwind CSS, Bootstrap
- **Databases:** PostgreSQL, MySQL, MongoDB, Redis, Vector Databases
- **Integrations:** Third-Party APIs, WhatsApp API, Botpress, Payment Gateways, Google Sheets API, Enterprise Integrations
- **Architecture:** Microservices, Serverless Architecture, Service-Oriented Architecture, System Design, Distributed Systems, Batch and Real-Time Processing, Caching

## AWARDS & HONORS
**Breakout Performer Award**
*Smartbenefits • March 2026*
- Honored with the Breakout Performer Award for exceptional technical contributions and the rapid deployment of multiple end-to-end AI and backend features.

## CERTIFICATIONS
- **LLM Engineering, RAG and AI Agents** - Udemy • April 2026
- **FastAPI Full Stack Mastery** - Udemy • November 2025
- **Problem Solving (Advanced)** - HackerRank • July 2024