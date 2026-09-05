/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abu Ubaida",
  title: "Abu Ubaida",
  subTitle: emoji(
    "Senior Full-Stack Software & AI Engineer with 3+ years of experience architecting scalable backend applications, microservices, and AI-powered products. Promoted twice in under three years—from Junior to Senior Software Engineer. I specialize in Python (FastAPI, Django), cloud-native AWS infrastructure, and building intelligent, high-performance systems that ship measurable business impact."
  ),
  resumeLink: "#",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/abuubaida01",
  linkedin: "https://www.linkedin.com/in/abuubaidaaz/",
  gmail: "abuubaida901@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "SENIOR FULL-STACK ENGINEER | AI SYSTEMS ARCHITECT | CLOUD INFRASTRUCTURE EXPERT",
  skills: [
    emoji(
      "⚡ Architect scalable microservices and high-performance RESTful/GraphQL APIs with Python (FastAPI, Django, Celery) powering mission-critical enterprise platforms."
    ),
    emoji(
      "⚡ Design and deploy serverless cloud architectures (AWS Lambda, EC2, S3, API Gateway) that eliminate operational overhead and slash infrastructure costs."
    ),
    emoji(
      "⚡ Engineer production-grade Agentic AI systems (RAG, LangGraph, ADK, Vertex AI, FastMCP) that automate complex workflows and deliver measurable efficiency gains."
    ),
    emoji(
      "⚡ Build responsive, high-performance frontends with React, Next.js, and Tailwind CSS, containerized with Docker and automated via GitHub Actions CI/CD."
    )
  ],

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "React / Next.js", fontAwesomeClassname: "fab fa-react"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Karachi (UBIT)",
      logo: require("./assets/images/ubit.jpeg"),
      subHeader: "BS in Software Engineering (EQF Level 6)",
      duration: "Completed in 2024 · GPA 3.1/4.0",
      descBullets: [
        "Key Focus Areas: Software Engineering Principles, Distributed Systems, Data Structures, Software Design, Capstone Project."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {Stack: "Python, FastAPI, Django & DRF", progressPercentage: "95%"},
    {
      Stack: "AI & LLMs (RAG, ADK, LangChain, LangGraph, Vertex AI)",
      progressPercentage: "90%"
    },
    {
      Stack: "Databases (PostgreSQL, Redis, MongoDB, Pinecone)",
      progressPercentage: "92%"
    },
    {
      Stack: "AWS, GCP & DevOps (Docker, Lambda, CI/CD)",
      progressPercentage: "88%"
    },
    {
      Stack: "System Design & Distributed Architectures",
      progressPercentage: "87%"
    },
    {
      Stack: "Frontend (React.js, Next.js, Tailwind CSS)",
      progressPercentage: "82%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Smartbenefits",
      companylogo: require("./assets/images/smartbenefits.png"),
      date: "July 2026 – Present",
      desc: "Architecting scalable data pipelines, serverless systems, and AI-powered features for enterprise HR and insurance platforms serving 600+ enterprise clients.",
      descBullets: [
        "Architected a nightly Celery-scheduled Lambda analytics pipeline running complex SQL against a read-only replica—cut dashboard load times from ~15 minutes to under 10ms with zero production database load.",
        "Cut LLM token usage 80% (7,800 → 1,500 tokens/client) by restructuring raw query output into a compact delta array before inference on AI-generated chart insights.",
        "Built an automated JSON export pipeline to Amazon S3 with a cached API (1-hour TTL) powering interactive charts in the HR Portal.",
        "Mentored 2 junior engineers, instituting PR standards and structured code reviews that reduced review cycle time."
      ]
    },
    {
      role: "Software Engineer",
      company: "Smartbenefits",
      companylogo: require("./assets/images/smartbenefits.png"),
      date: "January 2025 – July 2026",
      desc: "Primary technical lead for enterprise client integrations and AI system architecture, driving measurable automation and infrastructure cost reduction.",
      descBullets: [
        "Architected a serverless microservices system (AWS Lambda)—eliminated recurring memory spikes and freed capacity for primary workloads.",
        "Built a multi-agent AI chatbot (Vertex AI, ADK, WebSocket) resolving 1,000+ monthly medical queries at 85%+ accuracy.",
        "Led end-to-end architecture of Hemaayah, Pakistan's first remittance-linked health insurance product—built 3 platforms from scratch.",
        "Cut infrastructure costs by migrating all heavy cron jobs to AWS Lambda significantly reducing monthly compute spend.",
        "Reduced HR team workload by 30% through in-portal OPD claims submission and Celery-based automated onboarding/offboarding."
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Smartbenefits",
      companylogo: require("./assets/images/smartbenefits.png"),
      date: "January 2024 – January 2025",
      desc: "Built automation features and real-time systems for a portal supporting 400+ corporate clients.",
      descBullets: [
        "Automated quarterly utilization reporting and policy expiry notifications, eliminating 20+ hours/week of manual HR effort.",
        "Built the Provident Fund Management feature enabling real-time dividend and fund-growth tracking for employees.",
        "Delivered a doctor chat feature in partnership with NoorCare—driving 500+ chats/week.",
        "Built a customizable feedback questionnaire tool generating 1,000+ weekly responses for customer-sentiment data."
      ]
    }
  ]
};

// Open Source Section to View Github Pinned Projects
const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Key Projects",
  subtitle:
    "Selected work demonstrating my ability to ship production-grade platforms—from concept through to scalable, cloud-native deployment.",
  projects: [
    {
      projectName: "FeesDay",
      projectDesc:
        "A B2B SaaS platform automating recurring-fee collection and payment reminders via a modular FastAPI backend and PostgreSQL managed with SQLAlchemy. Migrated the reminder engine from a single in-process APScheduler instance to a decoupled serverless architecture (Celery → SQS → AWS Lambda → API Gateway), enabling the system to handle 1M+ requests with millisecond response times at a fraction of the prior compute cost. Implemented secure JWT-based authentication with refresh-token rotation, asynchronous webhook handlers, and a bulk data-import pipeline.",
      footerLink: [{name: "Visit Website", url: "https://feesday.netlify.app/"}]
    },
    {
      projectName: "AddaZakat",
      projectDesc:
        "A social impact platform connecting global donors with verified seekers like needy families and NGOs. Architected a full-stack Service-Oriented Architecture (Django, FastAPI, Next.js) with real-time chat and notification systems. Integrated a conversational AI assistant using LangGraph and MCP Server to help users articulate and publish need-based stories. Scaled AWS infrastructure (EC2, S3, Amplify) to support 3,000+ monthly visitors and 17,000+ views within a 90-day period.",
      footerLink: [{name: "Visit Website", url: "https://addazakat.com"}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Awards & Certifications"),
  subtitle:
    "Professional recognitions and formal certifications validating my technical expertise.",
  achievementsCards: [
    {
      title: "Breakout Performer Award",
      subtitle: "Smartbenefits · March 2026",
      image: require("./assets/images/picture.png"),
      imageAlt: "Breakout Performer Award",
      footerLink: []
    },
    {
      title: "LLM Engineering, RAG and AI Agents",
      subtitle: "Udemy · April 2026",
      image: require("./assets/images/picture.png"),
      imageAlt: "LLM Engineering Certification",
      footerLink: []
    },
    {
      title: "FastAPI Full Stack Mastery",
      subtitle: "Udemy · November 2025",
      image: require("./assets/images/picture.png"),
      imageAlt: "FastAPI Certification",
      footerLink: []
    },
    {
      title: "Problem Solving (Advanced)",
      subtitle: "HackerRank · July 2024",
      image: require("./assets/images/picture.png"),
      imageAlt: "HackerRank Problem Solving Certification",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Have a project in mind or want to discuss an opportunity? My inbox is always open.",
  number: "+92-331-2371338",
  email_address: "abuubaida901@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "abuubaidaaz", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
