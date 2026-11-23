import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { User, Mail, ArrowLeft, ArrowUpRight, ShieldCheck, Code2, BrainCircuit } from "lucide-react";

export const metadata: Metadata = {
  title: "Kishor | Technical Profile | PIYROWARE",
  description: "Technical profile and engineering focus of Kishor at PIYROWARE.",
};

export default function KishorProfilePage() {
  return (
    <div className="relative min-h-screen bg-[#06080F] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <main className="flex-1 relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Team Directory</span>
          </Link>

          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#090E1B]/90 border border-white/[0.08] shadow-2xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <div
              className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-white/[0.08]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  K
                </span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                  PIYROWARE Engineering
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  Kishor
                </h1>
                <p className="text-sm font-mono text-slate-400 mt-1">
                  Software Engineering & Artificial Intelligence
                </p>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight mb-2">
                  Technical Focus
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Leading technical architecture, full-stack software development, and applied artificial
                  intelligence implementations at PIYROWARE. Committed to clean code, modular architecture,
                  and purposeful technological innovation.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Architecture",
                    "Full-Stack Development",
                    "Artificial Intelligence",
                    "Machine Learning",
                    "TypeScript / Next.js",
                    "Python / Backend Systems",
                    "Cloud Infrastructure",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919488793023?text=Hi%20Kishor%2C%20I%20would%20like%20to%20connect%20regarding%20a%20project%20at%20PIYROWARE."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold shadow-lg shadow-[#25D366]/30 transition-all cursor-pointer"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:+919488793023"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all"
                >
                  <span>+91 94887 93023</span>
                </a>

                <a
                  href="mailto:piyroware@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>piyroware@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
