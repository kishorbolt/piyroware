"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  BrainCircuit,
  Sparkles,
  Server,
  Layers,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "../data/siteData";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "01": Code2,
  "02": Globe,
  "03": BrainCircuit,
  "04": Sparkles,
  "05": Server,
  "06": Layers,
};

export default function Services() {
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
    <section id="services" className="py-24 sm:py-32 relative bg-[#06080F] border-t border-white/[0.06]">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-500" />
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
              Services
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            What We Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Practical, scalable software and artificial intelligence solutions engineered with precision.
          </motion.p>
        </div>

        {/* 6 Exact Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.number] || Code2;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={scrollToContact}
                className="group relative rounded-2xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7),0_0_25px_rgba(59,130,246,0.15)] cursor-pointer overflow-hidden"
              >
                {/* Subtle Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-500" />

                <div>
                  {/* Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-600/20 group-hover:border-blue-400/40 transition-all duration-300 transform group-hover:scale-105">
                      <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-blue-400 transition-colors tracking-widest">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>Inquire Service</span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
