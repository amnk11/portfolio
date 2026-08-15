"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "PROCESS", href: "#process" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 250;

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
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <nav
        aria-label="Main Navigation"
        className="bg-[#121218]/70 backdrop-blur-xl border-b border-x border-white/12 rounded-b-2xl sm:rounded-b-[24px] rounded-t-none shadow-[0_12px_32px_rgba(0,0,0,0.6)] px-7 sm:px-12 py-3 sm:py-3.5 flex items-center justify-center"
      >

        <div className="flex items-center justify-center space-x-6 sm:space-x-10">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative text-xs sm:text-sm font-sans tracking-widest uppercase font-semibold transition-all duration-200 focus-ring whitespace-nowrap ${
                  isActive
                    ? "text-white font-bold"
                    : "text-zinc-300 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}





