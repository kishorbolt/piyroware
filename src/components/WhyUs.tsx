"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_PRINCIPLES } from "../data/siteData";
import { Code2, Layers, BrainCircuit, Users } from "lucide-react";

const PRINCIPLE_ICONS = [Code2, Layers, BrainCircuit, Users];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 relative bg-[#06080F] border-t border-white/[0.06] overflow-hidden">
      {/* Background Lighting */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-500" />
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
              Core Principles
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Why PIYROWARE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Four foundational values that shape every software application and artificial intelligence
            solution we engineer.
          </motion.p>
        </div>

        {/* 4 Exact Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_PRINCIPLES.map((principle, idx) => {
            const Icon = PRINCIPLE_ICONS[idx % PRINCIPLE_ICONS.length];
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group p-8 rounded-2xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 group-hover:bg-blue-600/20 group-hover:border-blue-400/40 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Principle 0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
