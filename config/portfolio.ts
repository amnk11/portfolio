export interface Project {
  id: string;
  title: string;
  number: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featuredNote?: string;
  cardVariant?: "paper" | "notebook" | "sticky";
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: string[];
  note?: string;
  badgeVariant?: "default" | "success" | "warning" | "error" | "info";
}

export const PORTFOLIO_CONFIG = {
  name: "Aman",
  role: "Full-Stack Developer",
  headline: "I build things for the web.",
  shortBio: "Full-stack developer focused on building useful, fast, and thoughtfully designed web experiences.",
  email: "kumar.aman.dev@gmail.com",
  
  socials: {
    github: "https://github.com/amnk11",
    linkedin: "https://www.linkedin.com/in/kumaraman17/",
  },

  contactFormUrl: "https://rivenforms.in/form/8477b9da-06e7-40bb-865c-cebb0be5f440?embed=true",

  projects: [
    {
      id: "sketchflow",
      number: "01",
      title: "SketchFlow",
      description: "Visual node-based workflow builder and architecture planning tool for engineering teams with real-time multiplayer editing.",
      stack: ["Next.js", "TypeScript", "React Flow", "Tailwind CSS", "WebSockets"],
      githubUrl: "https://github.com/amnk11",
      liveUrl: "https://github.com/amnk11",
      featuredNote: "one of my favorites ⭐",
      cardVariant: "notebook"
    },
    {
      id: "pulsedb",
      number: "02",
      title: "PulseDB Studio",
      description: "Lightweight PostgreSQL performance dashboard and query inspector with instant EXPLAIN ANALYZE visualizations.",
      stack: ["React", "Node.js", "Express", "PostgreSQL", "Drizzle ORM"],
      githubUrl: "https://github.com/amnk11",
      liveUrl: "https://github.com/amnk11",
      featuredNote: "high performance ⚡",
      cardVariant: "paper"
    },
    {
      id: "devshelf",
      number: "03",
      title: "DevShelf CLI",
      description: "Privacy-first snippet manager and terminal note vault built with TypeScript and local sqlite sync.",
      stack: ["Bun", "TypeScript", "tRPC", "SQLite", "Commander"],
      githubUrl: "https://github.com/amnk11",
      featuredNote: "open source 📦",
      cardVariant: "sticky"
    },
    {
      id: "typecraft",
      number: "04",
      title: "TypeCraft UI",
      description: "Accessible design token inspector and component workshop tailored for rapid full-stack prototyping.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Radix Primitives"],
      githubUrl: "https://github.com/amnk11",
      liveUrl: "https://github.com/amnk11",
      featuredNote: "handcrafted 🎨",
      cardVariant: "paper"
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Frontend",
      subtitle: "crafting responsive & intuitive UIs",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      note: "obsessed with micro-interactions",
      badgeVariant: "info"
    },
    {
      title: "Backend",
      subtitle: "scalable services & APIs",
      skills: ["Node.js", "Express", "tRPC", "REST APIs", "GraphQL"],
      note: "type-safe end to end",
      badgeVariant: "success"
    },
    {
      title: "Database",
      subtitle: "data modeling & storage",
      skills: ["PostgreSQL", "MongoDB", "Drizzle ORM", "Prisma", "Redis"],
      note: "clean schemas",
      badgeVariant: "warning"
    },
    {
      title: "Tools & DevOps",
      subtitle: "workflow & deployment",
      skills: ["Git", "GitHub", "Docker", "Bun", "pnpm", "Vercel", "Linux"],
      note: "fast developer feedback loops",
      badgeVariant: "default"
    }
  ] as SkillCategory[],

  about: {
    heading: "About Me",
    paragraph1: "I'm a full-stack developer who loves crafting web applications that feel fast, intuitive, and genuinely delightful to use.",
    paragraph2: "My approach combines clean architecture with obsessive attention to user experience. I care deeply about performance, clean code, and building useful products that solve real problems.",
    paragraph3: "When I'm not coding, you'll find me exploring new web APIs, sketching interface ideas, or refining my developer workflow tools.",
  }
};
