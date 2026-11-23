"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Practical Software Engineering",
      desc: "Developing applications architected around real workflows, clean code, and long-term maintainability.",
    },
    {
      icon: BrainCircuit,
      title: "Applied Artificial Intelligence",
      desc: "Deploying machine learning and computer vision to automate processes and generate actionable insights.",
    },
    {
      icon: Zap,
      title: "Modern Scalable Architecture",
      desc: "Building cloud-ready backends, resilient databases, and responsive web platforms designed to scale seamlessly.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Security Focused",
      desc: "Enforcing rigorous development practices, secure authentication, and robust data protection standards.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#06080F] border-t border-white/[0.06] overflow-hidden">
      {/* Background Subtle Glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[2px] bg-blue-500" />
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
            About PIYROWARE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Concise Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Technology With Purpose.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
            >
              <strong className="text-white font-semibold">PIYROWARE</strong> is a software development
              and artificial intelligence company focused on creating practical, modern, and scalable digital
              solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed"
            >
              We specialize in engineering robust web applications, intelligent automation systems, and
              cloud-ready backend architectures. By combining technical discipline with modern frameworks,
              we help businesses and founders transform complex ideas into reliable, high-performance software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Dedicated Software Development & Artificial Intelligence</span>
            </motion.div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                  className="p-6 rounded-2xl bg-[#090E1B]/80 border border-white/[0.07] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
