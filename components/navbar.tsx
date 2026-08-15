"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROCESS", href: "#process" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 220;

      sections.forEach((section, index) => {
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(NAV_ITEMS[index].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-full">
      <nav
        className={`rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f0f14]/90 backdrop-blur-xl border border-white/15 shadow-[0_10px_38px_rgba(0,0,0,0.8)]"
            : "bg-[#121218]/75 backdrop-blur-md border border-white/10 shadow-lg"
        }`}
      >
        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-2.5 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-wider transition-colors duration-200 whitespace-nowrap rounded-full ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-white/15 border border-white/20 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

