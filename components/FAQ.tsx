"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="faq" className="py-20 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Section Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 sm:mb-24"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>TRANSPARENCY & DETAILS</span>
        </div>
        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-3">
          Frequently asked inquiries<span className="text-emerald-400 font-serif-italic">.</span>
        </h2>
        <p className="text-lg sm:text-2xl text-zinc-300 font-light">
          Clear answers. <span className="font-serif-italic font-normal text-white">Zero surprises.</span>
        </p>
      </motion.div>

      {/* Accordion Rows */}
      <div className="border-t border-white/10 divide-y divide-white/10">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="py-5 sm:py-6 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left focus:outline-none group py-1"
                aria-expanded={isOpen}
              >
                <span className={`text-base sm:text-xl font-medium transition-colors pr-4 ${isOpen ? "text-emerald-400" : "text-white group-hover:text-zinc-200"}`}>
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
                  isOpen ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 rotate-180" : "bg-[#14141a] border-white/10 text-zinc-400 group-hover:text-white"
                }`}>
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >

                    <div className="pt-3 sm:pt-4 pr-6 sm:pr-12 text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

