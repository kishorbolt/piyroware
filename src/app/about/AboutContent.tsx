"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  BrainCircuit,
  Cpu,
  Radio,
  Layers,
  Lightbulb,
  ShieldCheck,
  CheckCircle2,
  Palette,
  BookOpen,
  HeartHandshake,
  Target,
  Compass,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const PRACTICE_AREAS = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom, resilient software architectures built for mission-critical operations, reliability, and scale.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/40",
    iconColor: "text-blue-400",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance, modern full-stack web platforms with intuitive interfaces and responsive performance.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Intelligent systems integrating automated reasoning, neural models, computer vision, and cognitive workflows.",
    gradient: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/40",
    iconColor: "text-purple-400",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    desc: "Predictive modeling, deep learning architectures, and data-driven algorithmic decision engines.",
    gradient: "from-indigo-500/20 to-blue-500/20",
    border: "group-hover:border-indigo-500/40",
    iconColor: "text-indigo-400",
  },
  {
    icon: Radio,
    title: "IoT Solutions",
    desc: "Seamless connectivity linking edge hardware, real-time sensor streams, and centralized data layers.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
  },
  {
    icon: Layers,
    title: "Digital Transformation",
    desc: "Modernizing operational workflows, automating legacy processes, and engineering scalable cloud solutions.",
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/40",
    iconColor: "text-blue-400",
  },
];

const CORE_VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Pioneering new ways to solve real problems with forward-thinking methodologies and advanced technology.",
    tag: "Value 01",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    desc: "Pursuing engineering excellence with rigorous standards, strict type safety, and clean maintainable code.",
    tag: "Value 02",
  },
  {
    icon: CheckCircle2,
    title: "Integrity",
    desc: "Building dependable partnerships through transparency, accountability, and ethical technology practices.",
    tag: "Value 03",
  },
  {
    icon: Palette,
    title: "Creativity",
    desc: "Blending structured engineering logic with expressive design to deliver elegant digital experiences.",
    tag: "Value 04",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Constantly expanding our expertise across emerging technology frontiers, frameworks, and modern research.",
    tag: "Value 05",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    desc: "Listening attentively to user requirements and architecting digital products centered around real human needs.",
    tag: "Value 06",
  },
];

export default function AboutContent() {
  return (
    <div className="relative min-h-screen bg-[#06080F] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <main className="flex-1 relative z-10">
        {/* Ambient Radial Lights */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-[650px] right-0 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"
          aria-hidden="true"
        />

        {/* 1. Hero Section */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Eyebrow Label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 mb-3"
              >
                <span className="w-6 h-[2px] bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  Corporate Profile
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                About PIYROWARE
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent"
              >
                Innovate. Build. Transform.
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed"
              >
                We are a technology-driven company focused on building modern software, intelligent digital
                solutions and innovative technology experiences.
              </motion.p>
            </div>
          </div>
        </section>

        {/* 2. Company Overview */}
        <section className="py-16 sm:py-24 relative border-t border-white/[0.06] bg-[#070B14]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  Capabilities & Domains
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Company Overview
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                PIYROWARE operates at the intersection of robust systems engineering and cutting-edge
                artificial intelligence. Our engineering disciplines span end-to-end digital technologies
                engineered to solve complex problems and deliver lasting value.
              </p>
            </div>

            {/* 6 Core Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRACTICE_AREAS.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.07 }}
                    className={`group relative p-7 rounded-2xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] ${area.border} transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20`}
                  >
                    {/* Top specular highlight */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-blue-400/30 transition-all" />

                    <div>
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.gradient} border border-white/10 flex items-center justify-center ${area.iconColor} mb-5 group-hover:scale-105 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Domain 0{idx + 1}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Vision & Mission */}
        <section className="py-20 sm:py-28 relative border-t border-white/[0.06] overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  Guiding Philosophy
                </span>
                <span className="w-6 h-[2px] bg-blue-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Vision & Mission
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-8 sm:p-10 rounded-2xl bg-[#090E1B]/90 border border-blue-500/20 shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-mono text-blue-400 font-semibold">
                    The Destination
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2 mb-4">
                    Our Vision
                  </h3>
                  <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic border-l-2 border-blue-500 pl-4 my-4">
                    &ldquo;To create meaningful technology that empowers people, businesses and communities.&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    We envision a world where technology simplifies complexity, bridges human potential, and
                    provides transparent, accessible intelligence to accelerate progress across every industry.
                  </p>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-8 sm:p-10 rounded-2xl bg-[#090E1B]/90 border border-purple-500/20 shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-mono text-purple-400 font-semibold">
                    The Execution
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2 mb-4">
                    Our Mission
                  </h3>
                  <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic border-l-2 border-purple-500 pl-4 my-4">
                    &ldquo;To transform innovative ideas into practical, reliable and intelligent digital solutions.&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    We combine technical rigor, clean architectures, and modern engineering practices to build
                    dependable digital solutions that transform bold ideas into operational reality.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Core Values */}
        <section className="py-20 sm:py-28 relative border-t border-white/[0.06] bg-[#070B14]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  Culture & Standards
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Core Values
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Six foundational principles that define how we build software, collaborate with clients,
                and maintain engineering excellence every single day.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="group relative p-7 rounded-2xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-[0_4px_24px_-4px_rgba(59,130,246,0.18)]"
                  >
                    {/* Top specular highlight */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-blue-400/40 transition-all" />

                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-600/20 group-hover:border-blue-400/40 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                          {val.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                        {val.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                      <span>PIYROWARE Principle</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. CTA Section to Why Us or Contact */}
        <section className="py-20 relative border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#090E1B] via-[#0E172E] to-[#090E1B] border border-white/[0.1] p-8 sm:p-12 overflow-hidden shadow-2xl">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  Next Step
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-2">
                  Discover Why Clients Work With PIYROWARE
                </h3>
                <p className="mt-3.5 text-base text-slate-300 leading-relaxed">
                  Learn about our engineering discipline, end-to-end capabilities, and future-ready technology mindset.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/why-us"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    <span>Why Choose PIYROWARE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/10 font-medium transition-all"
                  >
                    <span>Get in Touch</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
