"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Layers,
  FileCode2,
  BarChart3,
  Cpu,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface SeoCardItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const SEO_SERVICES: SeoCardItem[] = [
  {
    number: "01",
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve website search visibility through technical SEO, on-page optimization and keyword research.",
    icon: Search,
    badge: "Organic Search",
  },
  {
    number: "02",
    title: "Google Search Indexing",
    description:
      "Help search engines discover and crawl your website pages through Google Search Console and indexing best practices.",
    icon: Layers,
    badge: "Crawl & Index",
  },
  {
    number: "03",
    title: "Sitemap & Robots.txt Configuration",
    description:
      "Configure XML sitemaps and robots.txt to support efficient search engine crawling.",
    icon: FileCode2,
    badge: "Architecture",
  },
  {
    number: "04",
    title: "Google Search Console Integration",
    description:
      "Set up website ownership verification, monitor indexing status and identify search performance issues.",
    icon: BarChart3,
    badge: "Webmaster Tools",
  },
  {
    number: "05",
    title: "Technical SEO Optimization",
    description:
      "Improve canonical URLs, metadata, structured data, website accessibility and crawlability.",
    icon: Cpu,
    badge: "Core Vitals",
  },
  {
    number: "06",
    title: "Google Business Visibility",
    description:
      "Help eligible businesses establish and optimize their Google Business Profile and local search presence.",
    icon: Compass,
    badge: "Local Presence",
  },
];

export default function SeoServices() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("contact");
    if (el) {
      e.preventDefault();
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
      id="seo-visibility"
      className="py-24 sm:py-32 relative bg-[#06080F] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Subtle Radial Lighting */}
      <div
        className="absolute top-1/3 left-1/3 w-[600px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-500" />
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
              SEO & GOOGLE SEARCH VISIBILITY
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Get Your Business Discovered on Google.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            We help businesses strengthen their online presence through professional SEO strategies,
            Google Search Console integration, website indexing, sitemap configuration and search visibility
            optimization.
          </motion.p>
        </div>

        {/* 6 Professional Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SEO_SERVICES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 shadow-sm hover:shadow-[0_4px_30px_-4px_rgba(59,130,246,0.18)] transition-all duration-300"
              >
                {/* Top specular highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-blue-400/40 transition-all duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-600/20 group-hover:border-blue-400/40 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-blue-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Optimization Service</span>
                  </div>
                  <span>Service 0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">
              Ready to Strengthen Your Search Presence?
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              Connect with PIYROWARE to discuss technical SEO, indexing assistance, and structured search visibility for your website.
            </p>
          </div>

          <Link
            href="/contact"
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-200 border border-blue-400/30 overflow-hidden cursor-pointer shrink-0"
          >
            <span className="relative z-10">Improve Your Google Visibility</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
