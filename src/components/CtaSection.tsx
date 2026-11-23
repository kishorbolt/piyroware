"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CtaSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#06080F] border-t border-white/[0.08]">
      {/* Atmospheric Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-violet-600/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDuration: "6s" }}
        aria-hidden="true"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Software & AI Solutions</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
        >
          Have an idea?{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
            Let&apos;s build it.
          </span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Tell us what you&apos;re trying to solve. We&apos;ll explore how software and AI can turn the
          idea into reality.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center"
        >
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-2 px-9 py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.45)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all duration-300 border border-blue-400/40 text-base cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
