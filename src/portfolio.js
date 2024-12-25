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
    "Results-driven software engineer with a strong foundation in problem-solving, Python, Django, and Django Rest Framework (DRF). Complemented by expertise in frontend technologies and DevOps. Passionate about building scalable, AI-driven solutions that deliver seamless user experience, and impacting millions of users daily."
  ),
  resumeLink: "./assets/Junior.Software.Engineer.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abuubaida01",
  linkedin: "https://www.linkedin.com/in/abuubaidaaz/",
  gmail: "abuubaida901@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/abuubaidaaz",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ I can design and implement robust RESTful APIs using Django Rest Framework and asynchronous programming to handle high-concurrency use cases."
    ),
    emoji(
      "⚡ I'm able to create visually appealing and highly responsive React.js frontends that scale seamlessly to handle large user bases, integrating with backend systems efficiently for a smooth user experience."
    ),
    emoji(
      "⚡ I Use containerization (Docker, Kubernetes) and CI/CD pipelines (GitHub Actions) to streamline deployments and ensure reliable software delivery."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "HTML",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "Tailwind CSS",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "SQL",
    //   fontAwesomeClassname: "fab fa-database"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "React JS",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "Django",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "FastAPI",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "DRF",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "PSQL",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "MSQL",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "K8s",
    //   fontAwesomeClassname: "fas fa-K8s"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    // {
    //   skillName: "Git",
    //   fontAwesomeClassname: "fab fa-git"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Umaer Basha Institute of Technology (UBIT)",
      logo: require("./assets/images/ubit.jpeg"),
      subHeader: "Bachelor in Software Engineering (BSSE)",
      duration: "January 2021 - November 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Got 3.1 CGPA"]
    },
    {
      schoolName: "Government Islamia Science College, Karachi",
      logo: require("./assets/images/Islamia_Science_College_Karachi_logo.png"),
      subHeader: "Intermediate board",
      duration: "Jan 2019 - Dec 2020"
      // desc: "Ranked top 5% in the college. Took Pre Engineering",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures and Algorithms ",
      progressPercentage: "90%"
    },
    {
      Stack:
        "Python, Django, Django-Rest-Framework, Unit Testing, Celery, caching strategies, Redis and memcached",
      progressPercentage: "89%"
    },
    {
      Stack: "React, HTML, Tailwind ",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL,MySQL PostgreSQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Docker, Kubernetes",
      progressPercentage: "70%"
    },
    {
      Stack: "Git, GitHub, CI/CD Pipeline using GitHub Actions",
      progressPercentage: "76%"
    },
    {
      Stack: "Cloud Platforms AWS",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Engineer",
      company: " Smartbenefits.pk",
      companylogo: require("./assets/images/smartbenefits.png"),
      date: "January 2024 – Present",
      desc: "I developed key features for the HR Portal, including a scheduling tool for managing employee insurance, a Net Promoter Score system for HR feedback, and a provident fund management feature with real-time updates. I implemented a doctor chat feature with prescription delivery, managed policy and KYC document life cycles, and automated insurance policy expiry reminders using Celery. I integrated third-party APIs like HubSpot, Mailerlite, and Vouch365, and created a feedback system for OPD claims generating 500+ responses weekly. I also collaborated with senior developers to improve my coding, debugging, and documentation skills."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Connecting needy people and donors.",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/1sefarz-logo.png"),
      projectName: "AddaZakat",
      projectDesc:
        "I worked on AddaZakat, a platform enabling donations of Zakat to needy families, as well as supporting Masajid, Madaris, and NGOs. I designed authentication features for user registration, login, email verification, and password management. I developed the posts feature, allowing users to create posts with information, documents, and videos, which are AI-verified before publication. Donors can engage with posts through upvoting, downvoting, commenting, saving, reporting, and donating. I also implemented user-centric features such as personalized post recommendations, browsing history, saved posts, advanced search/filter, dark mode, profile management, and customizable user settings.",
      footerLink: [
        {
          name: "Visit Website",
          url: "addazakat.com"
        }
        //  you can add extra buttons here.
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle: "Some Stuff that I have done !",

  achievementsCards: [
    {
      title: "Convolutional Neural Networks",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1-QzNydqYMNzbdRfcEM69zDR0tVqDhrML/view?usp=drive_link"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    
    {
      title: "Improving Deep Neural Networks",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1-BFmmjuTPiHkGwLgmM21KQinB856TX82/view?usp=drive_link" 
        },
      ]
    },
    
    {
      title: "Neural Networks and Deep Learning",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1QgOW5y1y7Nx1Fn3UGTEfDOGkv7ufq5kK/view?usp=drive_link" 
        },
      ]
    },

    {
      title: "Machine Learning with Tree-Based Models",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/12kKAISj6xdfgrvbRF72Z-9E6QpAxBKox/view?usp=drive_link" 
        },
      ]
    },

    {
      title: "Supervised Learning with scikit-learn",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1jCpJD9TRpkiQN4ErsWfUjIqGV6K362a-/view?usp=drive_link" 
        },
      ]
    },

    {
      title: "Unsupervised Learning",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1fKBVHeqjh2alwjdq8bOxjoUm9Z7uEvQd/view?usp=drive_link" 
        },
      ]
    },

    {
      title: "Python",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1DNr-A7PxAlNqbWkwUVS_aMBReyh3el30/view?usp=drive_link" 
        },
      ]
    },

    {
      title: "Exploratory Data Analysis",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1ES6L8w16VECtm-V3ynlTaLPCMdxEGpDh/view?usp=drive_link" 
        },
      ]
    },

    {
      title: "Data Collection & Data Wrangling",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1Ffs3wkUpiawlzKXtMlRhQm4_wL0FvkHB/view?usp=drive_link" 
        },
      ]
    },

    {
      title: "Practical Database Design",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1zaVVwSh0TXJ5JFUcybecmkGcLKOFXgQY/view?usp=drive_link" 
        },
      ]
    },

    {
      title: "Problem Solving",
      subtitle:"",
      image: require("./assets/images/personal-pic1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { 
          name: "Visit here",
          url: "https://drive.google.com/file/d/1_0Dv193L_IrX-GUZKnxD3ByzzpS8NrZk/view?usp=drive_link" 
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-331-2371338",
  email_address: "abuubaida901@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
