"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TECHNOLOGY_CATEGORIES,
  TechnologyCategoryGroup,
  TechnologyItem,
} from "../data/siteData";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

// Map each technology key to its official brand icon component
const ICON_MAP: Record<string, React.ElementType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  fastapi: SiFastapi,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  opencv: SiOpencv,
  scikitlearn: SiScikitlearn,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  restapi: TbApi,
  vercel: SiVercel,
};

interface TechCardProps {
  tech: TechnologyItem;
  index: number;
}

function TechCard({ tech, index }: TechCardProps) {
  const Icon = ICON_MAP[tech.iconKey] || SiReact;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35, delay: index * 0.035 }}
      whileHover={{ y: -3 }}
      className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 shadow-sm hover:shadow-[0_4px_24px_-4px_rgba(59,130,246,0.18)] transition-all duration-300 cursor-default select-none text-center"
    >
      {/* Subtle top edge specular highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:via-blue-400/40 transition-all duration-300" />

      {/* Subtle radial inner glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Technology Logo */}
      <div className="relative w-8 h-8 flex items-center justify-center mb-2.5 text-slate-400 group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
      </div>

      {/* Technology Name */}
      <span className="relative text-sm font-semibold text-slate-200 group-hover:text-white tracking-tight transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  );
}

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const totalCount = TECHNOLOGY_CATEGORIES.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );

  const displayedCategories: TechnologyCategoryGroup[] =
    activeCategory === "all"
      ? TECHNOLOGY_CATEGORIES
      : TECHNOLOGY_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section
      id="technology"
      className="py-24 sm:py-32 relative bg-[#06080F] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Radial Lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-500" />
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
              Modern Tooling
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Technology We Work With
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Modern tools, frameworks and technologies we use to engineer reliable
            software and intelligent digital solutions.
          </motion.p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-12 pb-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === "all"
                ? "bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]"
                : "bg-white/[0.03] text-slate-400 hover:text-slate-200 border border-white/[0.06] hover:border-white/[0.12]"
            }`}
          >
            All Stack <span className="opacity-60 ml-1 text-xs">({totalCount})</span>
          </button>

          {TECHNOLOGY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]"
                    : "bg-white/[0.03] text-slate-400 hover:text-slate-200 border border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                {cat.shortName}{" "}
                <span className="opacity-60 ml-1 text-xs">({cat.items.length})</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Stack Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-12 sm:space-y-14"
          >
            {displayedCategories.map((category) => (
              <div key={category.id} className="relative">
                {/* Category Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-5 border-b border-white/[0.07] gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-blue-400/90 tracking-widest bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      {category.number}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-normal sm:text-right hidden md:block">
                    {category.description}
                  </p>
                </div>

                {/* Technology Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {category.items.map((tech, idx) => (
                    <TechCard
                      key={`${category.id}-${tech.name}-${idx}`}
                      tech={tech}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
