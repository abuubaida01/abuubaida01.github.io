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
  username: "Abu-Ubaida",
  title: "Hi, I'm Abu-Ubaida",
  subTitle: emoji(
    "Full-stack software engineer with 2.5+ years of experience architecting AI-powered platforms and enterprise systems at scale. Proven track record of reducing operational overhead by 80%+ through intelligent automation, resilient distributed architectures, and seamless user experiences."
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
  title: "What I do",
  subTitle: "FULL-STACK SOFTWARE ENGINEER | AI INTEGRATION EXPERT | CLOUD ARCHITECT",
  skills: [
    emoji(
      "⚡ Architect robust RESTful and GraphQL APIs using Python (FastAPI, Django) to power mission-critical enterprise applications and automated workflows."
    ),
    emoji(
      "⚡ Build dynamic, responsive, and high-performance frontends with Next.js, React, and modern state management (Zustand)."
    ),
    emoji(
      "⚡ Design and implement Agentic AI solutions (RAG, LangGraph, ADK, FastMCP) to automate complex processes and enhance user experiences."
    ),
    emoji(
      "⚡ Deploy containerized applications using Docker and orchestrate automated CI/CD pipelines via GitHub Actions on AWS infrastructure."
    )
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "React / Next.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Umaer Basha Institute of Technology (UBIT), University of Karachi",
      logo: require("./assets/images/ubit.jpeg"),
      subHeader: "Bachelor in Software Engineering (BSSE)",
      duration: "Completed in 2024",
      descBullets: ["Graduated with a focus on Software Architecture, Modern Web Technologies, and Data Engineering."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Python, FastAPI & Django", progressPercentage: "95%" },
    { Stack: "AI Engineering (RAG, LLMs, LangGraph, ADK)", progressPercentage: "85%" },
    { Stack: "Frontend (React.js, Next.js, Tailwind)", progressPercentage: "80%" },
    { Stack: "Databases (PostgreSQL, MongoDB, Redis)", progressPercentage: "90%" },
    { Stack: "Cloud Platforms (AWS, GCP) & DevOps (Docker, CI/CD)", progressPercentage: "85%" },
    { Stack: "System Architecture & API Design", progressPercentage: "90%" }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Smartbenefits.pk",
      companylogo: require("./assets/images/smartbenefits.png"),
      date: "January 2025 – Present",
      desc: "Promoted to lead the development of enterprise-scale HR and insurance platforms supporting 20,000+ employees. I architected 'Hemaayah', Pakistan's first remittance-linked health insurance product with WhatsApp Botpress integration.",
      descBullets: [
        "Led end-to-end development of three platforms (Partner Portal, Ops Portal, Customer Website) from scratch for Hemaayah.",
        "Engineered multi-agentic AI chatbots (Vertex AI, WebSocket) resolving 1,000+ monthly medical queries with 85%+ accuracy.",
        "Built self-updating AI agents to automatically enrich the medical knowledge corpus on every OPD claim settlement, maintaining an always-current AI base with zero engineering intervention.",
        "Shipped 'Send Login Invite' and 'Upload Monthly PF Contribution' features with background task processing, driving measurable platform adoption and eliminating manual file tracking.",
        "Integrated webhook APIs with Qatar-based enterprises (Vodafone, Ompay) and Bank of Punjab Exchange for fully automated health policy delivery to Pakistani families."
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Smartbenefits.pk",
      companylogo: require("./assets/images/smartbenefits.png"),
      date: "January 2024 – December 2024",
      desc: "Spearheaded automation and system optimization for a portal supporting 400+ corporate clients, dramatically reducing manual workload through Celery background jobs.",
      descBullets: [
        "Automated quarterly utilization reporting and policy expiry notifications, eliminating 20+ hours/week of manual work.",
        "Developed Provident Fund Management Feature for real-time tracking of dividends and fund growth.",
        "Developed a doctor chat feature in collaboration with NoorCare, driving over 500 prescription chats per week.",
        "Implemented a scalable feedback feature prompting users post claim-settlement, yielding over 1,000 weekly feedback responses."
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
  subtitle: "Showcasing my expertise in building scalable platforms, from concept to deployment.",
  projects: [
    {
      projectName: "School Management System",
      projectDesc: "A high-performance School Management platform streamlining operations for admins, teachers, and students. Designed a secure, role-based architecture leveraging FastAPI, GraphQL, Next.js, OAuth2/JWT, and SQLAlchemy. Validated state management with Zustand, containerized via Docker, automated by GitHub Actions CI/CD, and deployed to AWS EC2.",
      footerLink: [
        { name: "Visit Website", url: "https://smsb.addazakat.com/docs" }
      ]
    },
    {
      projectName: "Event Registration System",
      projectDesc: "A FastAPI-based event system processing 8,000+ attendees monthly. Features automated QR code generation, email distribution, and real-time reporting via Google Sheets/Drive APIs. Engineered a fully automated CI/CD pipeline and deployed the infrastructure on AWS.",
      footerLink: [
        { name: "View Source", url: "https://github.com/abuubaida01/event-management-system" }
      ]
    },
    {
      projectName: "AddaZakat",
      projectDesc: "A social impact platform connecting global donors with verified seekers. Architected a full-stack solution using Django/FastAPI backend (Service-Oriented Architecture via Microservices) and Next.js frontend, deployed on AWS. Pioneered conversational AI-powered post creation using LangGraph.",
      footerLink: [
        { name: "Visit Website", url: "https://addazakat.com/" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Awards & Certifications 🏆"),
  subtitle: "Recognitions and formal learning that validate my expertise.",
  achievementsCards: [
    {
      title: "Breakout Performer Award",
      subtitle: "Smartbenefits (2026)",
      image: require("./assets/images/my_image.jpg"),
      imageAlt: "Breakout Performer Award",
      footerLink: []
    },
    {
      title: "FastAPI Full Stack Mastery",
      subtitle: "Certification",
      image: require("./assets/images/my_image.jpg"),
      imageAlt: "FastAPI Certification",
      footerLink: []
    },
    {
      title: "Python Problem-solving",
      subtitle: "HackerRank Certification",
      image: require("./assets/images/my_image.jpg"),
      imageAlt: "HackerRank Certification",
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
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
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
