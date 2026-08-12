export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  icon?: string;
  tapeRotation?: string;
  cardRotation?: string;
}

export interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  company: string;
  description: string;
  stack: string[];
  note?: string;
}

export const PORTFOLIO_CONFIG = {
  name: "Aman.dev",
  tagline: "code. build. ship.",
  title: "Hi, I'm Aman",
  role: "< Full Stack Developer />",
  greeting: "// hello, world!",
  bio: "I build clean, modern and user-friendly websites & web apps. I love turning ideas into real products that solve problems.",
  statusText: "// open to work :)",

  codeWindow: {
    arrowLabel: "// a bit about how I think",
    notes: ["clean code", "better solutions", "real impact"],
    snippet: `const developer = {
  name: "Aman",
  passion: ["code", "design", "problem solving"],
  stack: ["React", "Next.js", "TypeScript"],
  mindset: "always learning",
};

while (building) {
  getBetter();
  ship();
}`
  },

  aboutMe: {
    header: "// about me",
    checklist: [
      "> Computer Science Student",
      "> Self learner",
      "> Problem solver",
      "> Tech enthusiast",
      "> Clean code lover",
      "> Always curious :)"
    ],
    paragraph: "I enjoy building things for the web. From simple ideas to full-fledged applications, I love the entire journey of bringing products to life.",
    highlightText: "Always learning. Always building.",
    currently: {
      header: "// currently",
      items: [
        { label: "Building projects", checked: true },
        { label: "Learning Next.js", checked: true },
        { label: "Exploring System Design", checked: true },
        { label: "Improving DSA", checked: true },
        { label: "One step at a time.", checked: true }
      ]
    }
  },

  skills: {
    header: "// skills",
    subtitle: "tools I use to turn ideas into things",
    tags: [
      { name: "HTML", rotation: "-rotate-1" },
      { name: "CSS", rotation: "rotate-2" },
      { name: "JavaScript", rotation: "-rotate-2" },
      { name: "TypeScript", rotation: "rotate-1" },
      { name: "React", rotation: "-rotate-1" },
      { name: "Next.js", rotation: "rotate-2" },
      { name: "Node.js", rotation: "-rotate-2" },
      { name: "Express.js", rotation: "rotate-1" },
      { name: "MongoDB", rotation: "-rotate-1" },
      { name: "PostgreSQL", rotation: "rotate-2" },
      { name: "Tailwind CSS", rotation: "-rotate-2" },
      { name: "Git", rotation: "rotate-1" },
      { name: "Docker", rotation: "-rotate-1" },
      { name: "Zod", rotation: "rotate-2" },
      { name: "tRPC", rotation: "-rotate-1" },
      { name: "Drizzle", rotation: "rotate-1" },
      { name: "GitHub", rotation: "-rotate-2" }
    ]
  },

  experience: {
    header: "// experience",
    items: [
      {
        id: "exp-1",
        date: "2024 — Present",
        role: "Full Stack Developer",
        company: "Personal Projects & Open Source",
        description: "Designing and engineering full stack web applications using modern React, Next.js, Node.js, and TypeScript. Focus on clean architecture, performance, and intuitive UX.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "tRPC"],
        note: "// shipping real software"
      },
      {
        id: "exp-2",
        date: "2023 — 2024",
        role: "Frontend Developer & CS Student",
        company: "Independent Client Work",
        description: "Built responsive user interfaces, custom design systems, and real-time interactive dashboards for clients and capstone projects.",
        stack: ["React", "JavaScript", "HTML/CSS", "Node.js", "MongoDB"],
        note: "// deep diving into system design"
      }
    ] as ExperienceItem[]
  },

  projects: {
    header: "// selected projects",
    viewAllText: "view all projects →",
    items: [
      {
        id: "savorly",
        title: "Savorly",
        description: "A full stack food ordering application built with the MERN stack featuring real-time order tracking and menu management.",
        stack: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "#",
        sourceUrl: "https://github.com/amnk11",
        icon: "⭐️",
        tapeRotation: "-rotate-3",
        cardRotation: "rotate-0.5"
      },
      {
        id: "chat-app",
        title: "Chat App",
        description: "Real-time messaging platform using WebSockets, instant message notifications, room authentication, and media sharing.",
        stack: ["React", "Socket.io", "Express", "Node.js", "Tailwind"],
        liveUrl: "#",
        sourceUrl: "https://github.com/amnk11",
        icon: "💬",
        tapeRotation: "rotate-2",
        cardRotation: "-rotate-0.5"
      },
      {
        id: "auth-system",
        title: "Auth System",
        description: "Robust authentication & authorization system with JWT, refresh tokens, role-based access control, and password hashing.",
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
        liveUrl: "#",
        sourceUrl: "https://github.com/amnk11",
        icon: "🔒",
        tapeRotation: "-rotate-1",
        cardRotation: "rotate-1"
      },
      {
        id: "oidc-service",
        title: "OIDC Authentication Service",
        description: "OAuth2 & OpenID Connect identity provider service supporting client credentials grant, single sign-on (SSO), and key rotation.",
        stack: ["TypeScript", "Next.js", "tRPC", "Zod", "PostgreSQL"],
        liveUrl: "#",
        sourceUrl: "https://github.com/amnk11",
        icon: "🗝️",
        tapeRotation: "rotate-3",
        cardRotation: "-rotate-1"
      }
    ] as Project[]
  },

  contact: {
    header: "// get in touch",
    envelopeText: "Have a project in mind or just want to say hi? Feel free to reach out!",
    email: "hello@aman.dev",
    statement: "Let's build something awesome together!",
    underlineWord: "something awesome."
  },

  footer: "// made with ♡ and lots of coffee ☕ //",
  socials: {
    github: "https://github.com/amnk11",
    linkedin: "https://www.linkedin.com/in/kumaraman17/",
    email: "mailto:hello@aman.dev"
  },

  navLinks: [
    { name: "_home", href: "#home" },
    { name: "_about", href: "#about" },
    { name: "_skills", href: "#skills" },
    { name: "_experience", href: "#experience" },
    { name: "_projects", href: "#projects" },
    { name: "_contact", href: "#contact" }
  ]
};
