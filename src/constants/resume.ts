// src/constants/resume.ts

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  summary: string;
  skills: {
    languages: string[];
    tools: string[];
    security: string[];
    databases: string[];
  };
  experience: {
    title: string;
    company: string;
    duration: string;
    highlights: string[];
  }[];
  education: {
    degree: string;
    school: string;
    year: string;
  };
}

// src/constants/resume.ts

export const RESUME_DATA = {
  name: "Kevin Willoughby",
  title: "Software Delivery & Technical Solutions Architect",
  contact: {
    email: "kevin@kvnw.dev",
    phone: "754-282-0534",
    location: "Oviedo, FL (Hybrid)",
    github: "kvnwdev",
    linkedin: "linkedin.com/in/kevinwilloughbyiii",
  },
  summary:
    "Strategic technology leader with proven expertise in software delivery, system integration, and technical architecture. Specialized in modernizing legacy systems, implementing automation solutions, and driving technical innovation. Microsoft Azure certified professional with deep experience in full-stack development, cloud platforms, and enterprise software solutions. Known for rapidly mastering new technologies and delivering pragmatic solutions in complex environments.",
  skills: {
    languages: [
      "JavaScript/TypeScript",
      "Python",
      "UNIBASIC",
      "Java",
      "C/C++/C#",
      "SQL",
    ],
    platforms: [
      "Microsoft Azure",
      "AWS",
      "Google Cloud",
      "Vercel",
      "Heroku",
      "SupaBase",
    ],
    tools: ["Azure DevOps", "aha!", "Zendesk", "Git", "Docker", "AI/ML Tools"],
    expertise: [
      "Legacy System Modernization",
      "Process Automation",
      "Technical Architecture",
      "System Integration",
      "Cloud Solutions",
    ],
  },
  experience: [
    {
      title: "Software Delivery Manager",
      company: "Sentry Management Inc.",
      duration: "2024 - Present",
      highlights: [
        "Orchestrated major infrastructure security upgrade from CentOS 6 to RedHat 8, enhancing system-wide security and reliability",
        "Led comprehensive UI/UX modernization initiative across 90% of web platform, significantly improving user satisfaction and adoption",
        "Established robust product management framework using Azure DevOps and aha!, transforming team visibility and delivery predictability",
        "Developed automation solutions reducing manual data entry tasks by 40+ hours monthly while improving data accuracy",
        "Driving strategic modernization initiatives including payment systems integration projected to eliminate thousands of manual transactions",
        "Enhanced cross-platform integrations improving revenue processing capabilities and maintaining data integrity across systems",
      ],
    },
    {
      title: "IT Support & Automation Specialist",
      company: "Sentry Management Inc.",
      duration: "2022 - 2024",
      highlights: [
        "Revolutionized Zendesk help center serving 300,000+ customers, implementing automated workflows and improving service metrics",
        "Built and implemented internal health monitoring system with Azure integration for automated user profile management",
        "Created comprehensive system documentation and automation scripts, significantly reducing onboarding and deployment time",
        "Served as technical liaison between users and development team, improving feature request quality and bug reporting efficiency",
      ],
    },
    {
      title: "Co-Founder & Technical Lead",
      company: "Quantera",
      duration: "2018 - 2021",
      highlights: [
        "Co-founded and scaled software development business serving 150+ global clients with 4.9/5 average satisfaction rating",
        "Architected complex chat bot systems integrating multiple social platforms with web dashboards and real-time game server statistics",
        "Developed custom automation solutions including administrative tools, gamification systems, and multi-platform integrations",
        "Managed entire project lifecycle from client consultation to delivery, maintaining high customer satisfaction and repeat business",
      ],
    },
  ],
  education: {
    degree: "Associate of Arts",
    school: "Seminole State College",
    year: "2022",
    additionalEducation: [
      {
        institution: "CROOMS Academy of Information Technology",
        details: "High School Diploma (2022)",
        note: "Specialized IT and Computer Science curriculum",
      },
      {
        institution: "University of Central Florida",
        details: "Computer Science Studies (2022-2023)",
        note: "Transitioned to industry role to gain hands-on experience",
      },
      {
        certification: "Microsoft Azure Associate",
        year: "2023",
      },
    ],
  },
};