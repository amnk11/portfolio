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
  category?: string;
  imageSrc?: string;
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
}`,
  },

  aboutMe: {
    header: "// about me",
    checklist: [
      "> Electrical Engineering Student",
      "> Full Stack Developer",
      "> Self learner",
      "> Problem solver",
      "> Tech enthusiast",
      "> Clean code lover",
    ],
    paragraph:
      "I enjoy building things for the web. From simple ideas to full-fledged applications, I love the entire journey of bringing products to life.",
    highlightText: "Always learning. Always building.",
    currently: {
      header: "// currently",
      items: [
        { label: "Building projects", checked: true },
        { label: "Learning Next.js", checked: true },
        { label: "Exploring System Design", checked: true },
        { label: "Improving DSA", checked: true },
        { label: "Looking for opportunities", checked: true },
      ],
    },
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
      { name: "GitHub", rotation: "-rotate-2" },
    ],
  },

  experience: {
    header: "// experience",
    items: [
      {
        id: "exp-1",
        date: "Dec 2025 — Jan 2026",
        role: "Full Stack Developer Intern",
        company: "Bret Innovation",
        description:
          "Built responsive web applications and dashboards using React.js, developed RESTful APIs with Node.js and Express.js, and integrated frontend features with backend services. Implemented Brand and Retail dashboards with campaign filters, sales and growth charts, and customer insights.",
        stack: ["React.js", "Node.js", "Express.js", "REST APIs"],
        note: "// building for real-world use",
      },
    ] as ExperienceItem[],
  },

  projects: {
    header: "// selected projects",
    viewAllText: "view all projects →",
    items: [
      {
        id: "riven",
        title: "Riven",
        description:
          "A full stack form builder for creating customizable forms with authentication, dynamic fields, validation, and a modern dashboard experience.",
        stack: [
          "TypeScript",
          "Next.js 16",
          "React 19",
          "Tailwind CSS 4",
          "Radix UI",
          "dnd-kit",
          "React Flow",
          "React Hook Form",
          "Zod",
          "Express 5",
          "tRPC 11",
          "PostgreSQL",
          "Drizzle ORM",
          "Better Auth",
        ],
        liveUrl: "https://rivenforms.in",
        sourceUrl: "https://github.com/amnk11",
        icon: "✦",
        category: "Full Stack / Web App",
        imageSrc: "/riven_preview.jpg",
        tapeRotation: "-rotate-3",
        cardRotation: "rotate-0.5",
      },
      {
        id: "auth-system",
        title: "Auth System",
        description:
          "Robust authentication and authorization system with JWT, refresh tokens, role-based access control, password hashing, and secure session management.",
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
        liveUrl: "#",
        sourceUrl: "https://github.com/amnk11/authentication",
        icon: "🔒",
        category: "Authentication / Backend",
        imageSrc: "/oidc_preview.jpg",
        tapeRotation: "rotate-2",
        cardRotation: "-rotate-0.5",
      },
      {
        id: "savorly",
        title: "Savorly",
        description:
          "A full stack food ordering application built with the MERN stack featuring authentication, product management, and a responsive user interface.",
        stack: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://savorly-nu.vercel.app",
        sourceUrl: "https://github.com/amnk11/savorly",
        icon: "⭐️",
        category: "Product / E-commerce",
        imageSrc: "/savorly_preview.jpg",
        tapeRotation: "-rotate-1",
        cardRotation: "rotate-1",
      },
    ] as Project[],
  },

  contact: {
    header: "// get in touch",
    envelopeText:
      "Have a project in mind or just want to say hi? Feel free to reach out!",
    email: "amankrdev28@gmail.com",
    statement: "Let's build something awesome together!",
    underlineWord: "something awesome.",
  },

  footer: "// made with ♡ and lots of coffee ☕ //",

  socials: {
    github: "https://github.com/amnk11",
    linkedin: "https://www.linkedin.com/in/kumaraman17",
    email: "mailto:amankrdev28@gmail.com",
  },

  navLinks: [
    { name: "_home", href: "#home" },
    { name: "_about", href: "#about" },
    { name: "_skills", href: "#skills" },
    { name: "_experience", href: "#experience" },
    { name: "_projects", href: "#projects" },
    { name: "_contact", href: "#contact" },
  ],
};
