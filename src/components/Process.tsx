"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STAGES } from "../data/siteData";

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 relative bg-[#06080F] border-t border-white/[0.06] overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-500" />
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
              Execution Methodology
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Development Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            A disciplined, iterative path that takes projects from initial analysis to reliable deployment.
          </motion.p>
        </div>

        {/* 6 Process Stages (01 Understand, 02 Plan, 03 Design, 04 Build, 05 Launch, 06 Improve) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    STAGE {stage.number}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">0{idx + 1} / 06</span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Phase {stage.number}</span>
                <span className="text-blue-400/80">PIYROWARE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
