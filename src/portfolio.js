/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gaurav Beniwal",
  title: "Hi all, I'm Gaurav",
  subTitle: emoji(
    "Experienced full-stack developer with 2+ years of experience in designing and optimizing high-quality RESTful APIs using Java and Spring Boot. I'm also AWS certified. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uTwmZciYQn-xWSMq3wwV-gODZ0IMU0xn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gauravbeniwal9233",
  linkedin: "https://www.linkedin.com/in/gaurav-beniwal/",
  gmail: "gaurav.beniwal9233@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I BREAK THINGS ON THE FRONT-END AND FIX THEM ON THE BACK-END... OR VICE VERSA",
  skills: [
    emoji(
      "⚡ Develop scalable and responsive full-stack applications"
    ),
    emoji("⚡ Design and optimize cloud infrastructure"),
    emoji(
      "⚡ Implement CI/CD pipelines, containerization, and DevOps practices"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-brands fa-angular"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-brands fa-java"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-brands fa-linux"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State Polytechnic University",
      logo: require("./assets/images/Cal_Poly_Pomona_Logo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "Aug 2019 - May 2023",
      desc: "Active member of CPP CSS, DS/AI clubs; intramural soccer champion.",
      descBullets: [
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Cache Memory, Artificial Intelligence, Machine Learning, Neural Networks, Cloud Computing",
        "GPA: 3.56 / 4.00"
      ]
    },
    {
      schoolName: "Los Osos High School",
      logo: require("./assets/images/Los_Osos_High_School_Logo.jpg"),
      subHeader: "Diploma",
      duration: "Aug 2015 - May 2019",
      desc: "Completed AP coursework in Calculus AB and Chemistry.",
      descBullets: ["Member of the Table Tennis Club and participated in school tournaments"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud/DevOps",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AWS Administrator",
      company: "Wellinks",
      companylogo: require("./assets/images/wellinksLogo.png"),
      date: "Feb 2025 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Migrated API Gateway & Lambda to SAM templates, enhancing infrastructure reliability and ensuring HIPAA compliance for Wellinks’ chronic pulmonary care services, minimizing risk of data loss.",
        "Automated CI/CD pipeline using AWS CodeBuild, integrating Microsoft Teams for real-time build notifications, reducing troubleshooting time and improving team efficiency.",
        "Collaborated across teams to align cloud infrastructure with healthcare needs, enhancing communication and service delivery for chronic disease management.",
      ]
    },
    {
      role: "Software Engineer",
      company: "Indoqubix",
      companylogo: require("./assets/images/indoqubixLogo.png"),
      date: "May 2023 – Feb 2025",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed an EHR system for streamlined access to patient demographics, efficient provider communication, and optimized data management.",
        "Spearheaded the development of RESTful APIs, adhering to industry best practices, and enhancing API performance, reduced response time by 30% and minimized bugs by 50% through rigorous optimization.",
        "Resolved critical bugs within 4 hours, unblocking users and demonstrating effective under-pressure performance.",
      ]
    },
    {
      role: "IT",
      company: "Nordstrom",
      companylogo: require("./assets/images/nordstromLogo.png"),
      date: "Jan 2023 – Apr 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Refined databases with SSMS, improving data handling and storage operations and refining inventory tracking systems, resulting in enhanced reporting capabilities by 40%.",
        "Developed Python automation scripts using Selenium and other libraries to streamline repetitive team tasks.",
        "Documented major system changes on Confluence, thoroughly detailed Jira subtasks and stories for better project tracking, and enhanced ServiceNow functionality to automate repetitive tasks and streamline workflows.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/rhaiLogo.png"),
      projectName: "ResonantHealthAI",
      projectDesc: "rhai securely turns unstructured, fragmented documentation into comprehensive notes for intuitive patient care and education",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://secure.resonanthealth.ai/"
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Developer – Associate",
      subtitle:
        "Earners of this certification have a comprehensive understanding of application life-cycle management.",
      image: require("./assets/images/aws-certified-developer-associate.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/febef8f3-c5b9-495f-a52a-9887b71056aa"
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
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@gaurav.beniwal9233/a4f85a6e3f67",
      title: "🧑‍💻 How to Use Multiple GitHub Accounts on the Same Laptop (The Easy Way)",
      description:
        "This guide will walk you through the exact steps to keep your GitHub accounts separated and working smoothly on a single laptop, using SSH and Git configuration tricks."
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+1 (909) 521-5782",
  email_address: "gaurav.beniwal9233@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
