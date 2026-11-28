import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StaffCard from "@/components/StaffCard";
import { STAFF_MEMBERS } from "@/data/staff";
import Link from "next/link";
import { Users2, ArrowUpRight, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership & Management | PIYROWARE — Software & Artificial Intelligence",
  description:
    "Meet the executive leadership of PIYROWARE: Mr. Kishor G (Chief Executive Officer & Founder) and Mr. Mohammed Afhaan N (Director). Driving software engineering and AI innovation.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Leadership & Management | PIYROWARE — Software & Artificial Intelligence",
    description:
      "Meet the executive leadership of PIYROWARE: Mr. Kishor G (Chief Executive Officer & Founder) and Mr. Mohammed Afhaan N (Director). Driving software engineering and AI innovation.",
    url: "https://www.piyroware.com/team",
    siteName: "PIYROWARE",
    type: "website",
    images: [
      {
        url: "/piyroware-logo-optimized.png",
        width: 512,
        height: 512,
        alt: "PIYROWARE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership & Management | PIYROWARE — Software & Artificial Intelligence",
    description:
      "Meet the executive leadership of PIYROWARE: Mr. Kishor G (Chief Executive Officer & Founder) and Mr. Mohammed Afhaan N (Director).",
  },
};

export default function TeamPage() {
  const hasStaff = STAFF_MEMBERS.length > 0;

  return (
    <div className="relative min-h-screen bg-[#06080F] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <CustomCursor />
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
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  Leadership & Management
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Our Leadership & Team
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Meet the executive leadership of PIYROWARE — directing software engineering,
                artificial intelligence innovation, and digital technology solutions with purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Directory Section */}
        <section className="pb-24 sm:pb-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {hasStaff ? (
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {STAFF_MEMBERS.map((member, idx) => (
                  <StaffCard key={member.id} member={member} index={idx} />
                ))}
              </div>
            ) : (
              <div className="relative max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl bg-[#090E1B]/90 border border-white/[0.08] text-center overflow-hidden shadow-2xl backdrop-blur-md">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <Users2 className="w-7 h-7 text-blue-400" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Our team profiles are being updated.
                  </h2>

                  <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                    We are currently compiling profiles for our software engineers,
                    AI specialists, and digital architects. Verified credentials,
                    specializations, and direct channels will be published here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
