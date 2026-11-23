import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StaffCard from "@/components/StaffCard";
import { STAFF_MEMBERS } from "@/data/staff";
import Link from "next/link";
import { Users2, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | PIYROWARE — Software & Artificial Intelligence",
  description:
    "Meet the people behind PIYROWARE — building software and intelligent digital solutions with purpose.",
};

export default function StaffsPage() {
  const hasStaff = STAFF_MEMBERS.length > 0;

  return (
    <div className="relative min-h-screen bg-[#06080F] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Subtle cursor follower */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-1 relative z-10">
        {/* Ambient Radial Lights */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-[500px] right-10 w-[500px] h-[350px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="pt-32 pb-14 sm:pt-40 sm:pb-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  People of PIYROWARE
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Our Team
              </h1>

              {/* Supporting Text */}
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Meet the people behind PIYROWARE — building software and intelligent
                digital solutions with purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Staff Directory Section */}
        <section className="pb-24 sm:pb-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {hasStaff ? (
              /* Populated Directory Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {STAFF_MEMBERS.map((member, idx) => (
                  <StaffCard key={member.id} member={member} index={idx} />
                ))}
              </div>
            ) : (
              /* Professional Temporary State When Profiles Are Being Updated */
              <div className="relative max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl bg-[#090E1B]/90 border border-white/[0.08] text-center overflow-hidden shadow-2xl backdrop-blur-md">
                {/* Subtle top edge specular highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                {/* Inner ambient glow */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Status Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <Users2 className="w-7 h-7 text-blue-400" />
                  </div>

                  {/* Heading */}
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Our team profiles are being updated.
                  </h2>

                  {/* Supporting Description */}
                  <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                    We are currently compiling profiles for our software engineers,
                    AI specialists, and digital architects. Verified credentials,
                    specializations, and direct channels will be published here.
                  </p>

                  {/* Status Indicator */}
                  <div className="mt-6 flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span>Directory Status: Staging Updates</span>
                  </div>

                  {/* Contact / Inquiry Action */}
                  <div className="mt-8 pt-6 border-t border-white/[0.06] w-full flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/#contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200 cursor-pointer"
                    >
                      <span>Connect with Our Team</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="mailto:piyroware@gmail.com"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-sm font-medium transition-all duration-200"
                    >
                      <Mail className="w-4 h-4 text-blue-400" />
                      <span>piyroware@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
