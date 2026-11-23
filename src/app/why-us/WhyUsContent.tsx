"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Layers,
  ShieldCheck,
  Users2,
  TrendingUp,
  Code2,
  Cpu,
  Database,
  Globe,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const SECTIONS_DATA = [
  {
    number: "01",
    id: "innovation-first",
    icon: Lightbulb,
    title: "Innovation First",
    subtitle: "Modern Approaches to Real-World Challenges",
    desc: "We focus on modern technologies and innovative approaches to solving real-world problems. Rather than adopting tools for the sake of novelty, we evaluate where advanced algorithms and intelligent architectures genuinely create operational advantage.",
    highlights: [
      "Modern development frameworks and progressive toolchains",
      "Applied artificial intelligence and automation models",
      "Pragmatic problem solving tailored to real workflows",
    ],
    accent: "blue",
  },
  {
    number: "02",
    id: "end-to-end",
    icon: Layers,
    title: "End-to-End Development",
    subtitle: "Full-Stack Capabilities Under One Roof",
    desc: "We work across frontend, backend, software architecture and intelligent technology solutions. From initial architectural planning to production deployments and database management, we ensure seamless communication across every tier of your system.",
    highlights: [
      "Responsive client interfaces built with React & Next.js",
      "High-throughput backends with Node.js, Express & Python",
      "Robust data schemas across PostgreSQL, MySQL & MongoDB",
    ],
    accent: "purple",
  },
  {
    number: "03",
    id: "quality-reliability",
    icon: ShieldCheck,
    title: "Quality & Reliability",
    subtitle: "Clean Code & Disciplined Engineering",
    desc: "We emphasize clean code, thoughtful design, maintainability and reliable solutions. Our engineering methodology enforces strict typing, modular components, comprehensive testing, and strict security benchmarks to ensure longevity.",
    highlights: [
      "Strict TypeScript enforcement and modular separation of concerns",
      "Thoughtful UI/UX design prioritizing user flow and clarity",
      "Predictable release workflows and stable production environments",
    ],
    accent: "emerald",
  },
  {
    number: "04",
    id: "customer-centric",
    icon: Users2,
    title: "Customer-Centric Approach",
    subtitle: "Solutions Built Around Your Needs",
    desc: "We prioritize understanding customer requirements and building solutions around their needs. We treat engineering as a consultative partnership, diving deep into your operational objectives to deliver software that produces measurable outcomes.",
    highlights: [
      "Thorough discovery phase and requirement alignment",
      "Transparent engineering iterations and open communication",
      "Iterative feedback loops ensuring accurate project delivery",
    ],
    accent: "cyan",
  },
  {
    number: "05",
    id: "future-ready",
    icon: TrendingUp,
    title: "Future-Ready Technology",
    subtitle: "Scalable Architecture for Long-Term Growth",
    desc: "We use modern development practices and scalable architecture to prepare solutions for future growth. Every system is structured to accommodate evolving user demands, third-party integrations, and technological advancements without requiring costly rewrites.",
    highlights: [
      "Cloud-native, containerized infrastructure readiness",
      "Extensible RESTful APIs and event-driven architectures",
      "Modular design patterns allowing frictionless feature expansion",
    ],
    accent: "indigo",
  },
];

export default function WhyUsContent() {
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
          className="absolute top-[800px] left-0 w-[550px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 mb-3"
              >
                <span className="w-6 h-[2px] bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  Why Work With PIYROWARE
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                Why Choose PIYROWARE?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent"
              >
                Technology with purpose. Solutions with impact.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed"
              >
                Choosing a software development and artificial intelligence partner requires confidence in
                technical competence, engineering discipline, and shared vision. At PIYROWARE, we engineer
                reliable digital solutions tailored around actual operational needs.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Sections 1 to 5 Grid / Stack */}
        <section className="py-16 sm:py-20 relative border-t border-white/[0.06] bg-[#070B14]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 lg:space-y-12">
              {SECTIONS_DATA.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 1;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative rounded-3xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 p-8 sm:p-12 shadow-xl hover:shadow-[0_4px_30px_-4px_rgba(59,130,246,0.15)] transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-blue-400/40 transition-all" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Icon, Number, Main Info (7 cols) */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-md">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="font-mono text-sm tracking-wider text-blue-400 uppercase font-semibold">
                            Section {item.number}
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {item.title}
                        </h2>

                        <p className="text-sm sm:text-base font-semibold text-slate-200">
                          {item.subtitle}
                        </p>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
                          {item.desc}
                        </p>
                      </div>

                      {/* Right: Highlights Box (5 cols) */}
                      <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
                        <span className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold mb-4 block">
                          Key Pillars
                        </span>
                        <ul className="space-y-3.5">
                          {item.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-3 text-sm text-slate-200">
                              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6 – Dedicated Technical Team */}
        <section className="py-20 sm:py-28 relative border-t border-white/[0.06] overflow-hidden">
          <div
            className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl bg-gradient-to-br from-[#090E1B] via-[#0E172E] to-[#090E1B] border border-blue-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 shadow-md">
                      <Users2 className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm tracking-wider text-blue-400 uppercase font-semibold">
                      Section 06 – The People Behind The Technology
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Dedicated Technical Team
                  </h2>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                    Our team brings together software engineers, full-stack developers, and AI practitioners
                    committed to building solid software solutions. We emphasize direct collaboration,
                    intellectual curiosity, and disciplined engineering.
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                    Explore our staff directory to learn more about the engineers and specialists driving
                    PIYROWARE&apos;s technical initiatives.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                  <Link
                    href="/team"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 cursor-pointer"
                  >
                    <span>Visit Our Team Page</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <span className="mt-3 text-xs font-mono text-slate-400">
                    Profiles, specializations & contact
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 relative border-t border-white/[0.06] bg-[#070B14]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                Start Collaborating
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                Ready to Build Your Next Solution?
              </h3>
              <p className="mt-3.5 text-base text-slate-300 leading-relaxed">
                Connect with our team to discuss your project requirements, technical architecture, and timelines.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/10 font-medium transition-all"
                >
                  <span>About PIYROWARE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
