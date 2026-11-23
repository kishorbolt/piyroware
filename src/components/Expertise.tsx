"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERTISE_CAPABILITIES } from "../data/siteData";

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 sm:py-32 relative bg-[#06080F] border-t border-white/[0.06]">
      {/* Background Subtle Gradient */}
      <div
        className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-500" />
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
              Core Capabilities
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            AI & Software Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Disciplined technical proficiencies applied to build robust, modern digital solutions.
          </motion.p>
        </div>

        {/* Strong Typography-Based Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group p-7 rounded-2xl bg-[#080D1A]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-slate-400 group-hover:text-blue-400 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] font-mono text-slate-400 group-hover:text-slate-400 transition-colors">
                PIYROWARE Engineering
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
