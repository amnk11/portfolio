"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "I specialize in building full-stack web applications, SaaS MVPs, modern marketing platforms, API services, and custom digital products designed for high conversion, performance, and long-term scalability.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "My core stack includes React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS, REST & GraphQL APIs, and modern authentication protocols like OIDC/JWT.",
  },
  {
    question: "Can you build both frontend and backend?",
    answer:
      "Yes. As a full-stack developer, I design pixel-perfect user interfaces on the frontend while architecting robust, secure, and performant server systems and databases on the backend.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary depending on project scope. A targeted marketing site or landing experience takes 1–2 weeks, while a full MVP or complex web application usually spans 3–6 weeks.",
  },
  {
    question: "Do you work with startups and individual founders?",
    answer:
      "Absolutely. I collaborate directly with founders, early-stage startups, and scaling businesses that need a fast, dependable technical partner who takes total ownership from concept to launch.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. I offer post-launch maintenance, feature enhancements, system optimization, and technical advisory to ensure your product continues running smoothly as your user base grows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Section Editorial Header */}
      <div className="text-center mb-12 sm:mb-20">
        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-3">
          Frequently asked inquiries<span className="text-emerald-400 font-serif-italic">.</span>
        </h2>
        <p className="text-lg sm:text-2xl text-zinc-300 font-light">
          Clear answers. <span className="font-serif-italic font-normal text-white">Zero surprises.</span>
        </p>
      </div>

      {/* Accordion Rows */}
      <div className="border-t border-white/10 divide-y divide-white/10">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-5 sm:py-6 transition-colors">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left focus:outline-none group py-1"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-xl font-medium text-white group-hover:text-zinc-200 transition-colors pr-4">
                  {faq.question}
                </span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#141418] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all flex-shrink-0">
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              {isOpen && (
                <div className="mt-3.5 sm:mt-4 pr-6 sm:pr-12 text-xs sm:text-base text-zinc-400 leading-relaxed font-light animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
