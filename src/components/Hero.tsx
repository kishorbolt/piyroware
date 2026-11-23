"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TechCanvas from "./TechCanvas";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
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
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#06080F]"
    >
      {/* Background Image Container with Subtle Cinematic Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/bg-image.png"
            alt="PIYROWARE Corporate Technology Center"
            fill
            priority
            quality={90}
            className="object-cover object-center brightness-[0.45] contrast-[1.1] transform"
          />
        </motion.div>

        {/* Cinematic Multi-Layer Gradient Overlays for Peak Readability */}
        {/* Left directional dark gradient to contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080F] via-[#06080F]/90 sm:via-[#06080F]/80 to-[#06080F]/40 z-10" />

        {/* Bottom vertical fade to seamlessly merge into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06080F] via-[#06080F]/80 to-transparent z-10" />

        {/* Top subtle vignette for navbar transparency */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#06080F]/90 to-transparent z-10" />

        {/* Atmospheric Electric Blue & Subtle Violet Glow Accents */}
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-10"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Subtle Tech Grid Texture */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none z-10" />
      </div>

      {/* Gentle Floating Particle Nodes */}
      <TechCanvas />

      {/* Hero Editorial Content (Left-Aligned, Generous Visual Space) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="max-w-3xl text-left">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)] tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono uppercase tracking-widest text-[11px]">
              SOFTWARE DEVELOPMENT • ARTIFICIAL INTELLIGENCE
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            We Build Software.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              We Engineer Intelligence.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed"
          >
            PIYROWARE creates modern software and AI solutions designed to solve complex problems,
            simplify experiences, and turn ideas into meaningful digital experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-300 border border-blue-400/40 text-base cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-transform duration-300" />
            </button>

            <button
              onClick={() => scrollTo("services")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 hover:border-slate-600 backdrop-blur-md transition-all duration-300 text-base cursor-pointer"
            >
              <span>Explore Services</span>
              <span className="text-slate-400 group-hover:text-blue-400 transition-colors">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
