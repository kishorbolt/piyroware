import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { Mail, ArrowLeft, ShieldCheck, Building2, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Mr. Kishor G — CEO & Founder | PIYROWARE",
  description:
    "Official profile of Mr. Kishor G, Chief Executive Officer and Founder of PIYROWARE. Leading software development, artificial intelligence engineering, and digital solutions.",
  alternates: {
    canonical: "/team/kishor",
  },
  openGraph: {
    title: "Mr. Kishor G — CEO & Founder | PIYROWARE",
    description:
      "Official profile of Mr. Kishor G, Chief Executive Officer and Founder of PIYROWARE. Leading software development, artificial intelligence engineering, and digital solutions.",
    url: "https://www.piyroware.com/team/kishor",
    siteName: "PIYROWARE",
    type: "profile",
    images: [
      {
        url: "https://www.piyroware.com/staff/kishor-g.webp",
        width: 600,
        height: 600,
        alt: "Mr. Kishor G, CEO and Founder of PIYROWARE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Kishor G — CEO & Founder | PIYROWARE",
    description:
      "Official profile of Mr. Kishor G, Chief Executive Officer and Founder of PIYROWARE.",
    images: ["https://www.piyroware.com/staff/kishor-g.webp"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.piyroware.com/team/kishor#person",
  "name": "Mr. Kishor G",
  "jobTitle": "CEO & Founder",
  "image": "https://www.piyroware.com/staff/kishor-g.webp",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://www.piyroware.com/#organization",
    "name": "PIYROWARE",
    "url": "https://www.piyroware.com/",
    "logo": "https://www.piyroware.com/piyroware-logo-optimized.png",
  },
  "url": "https://www.piyroware.com/team/kishor",
  "sameAs": ["https://www.piyroware.com/"],
};

export default function KishorProfilePage() {
  return (
    <div className="relative min-h-screen bg-[#06080F] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <main className="flex-1 relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
            <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>PIYROWARE Home</span>
            </Link>
            <span>/</span>
            <Link href="/team" className="hover:text-blue-400 transition-colors">
              Leadership
            </Link>
            <span>/</span>
            <span className="text-slate-200">Mr. Kishor G</span>
          </nav>

          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#090E1B]/90 border border-white/[0.08] shadow-2xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <div
              className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-white/[0.08]">
              {/* Professional Profile Photograph (Priority loaded for SEO) */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl shadow-blue-600/20 bg-slate-900 shrink-0">
                <Image
                  src="/staff/kishor-g.webp"
                  alt="Mr. Kishor G, CEO and Founder of PIYROWARE"
                  fill
                  priority
                  loading="eager"
                  fetchPriority="high"
                  sizes="112px"
                  className="object-cover object-center"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-500/10 border border-blue-500/30 text-blue-300">
                    CEO & FOUNDER
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Executive Leadership</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Mr. Kishor G
                </h1>
                <p className="text-sm sm:text-base font-mono text-blue-400 font-semibold mt-1">
                  Chief Executive Officer & Founder, PIYROWARE.
                </p>

                {/* Organization Association Link */}
                <div className="mt-2 flex items-center gap-1.5 text-xs font-mono text-slate-300">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Organization:</span>
                  <Link href="/" className="text-white hover:text-blue-300 underline font-medium">
                    PIYROWARE
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight mb-2">
                  Executive Biography
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Mr. Kishor G is the Chief Executive Officer and Founder of PIYROWARE. Leading strategic direction,
                  technological architecture, and engineering management, he guides the organization&apos;s mission to
                  deliver modern software systems, applied artificial intelligence solutions, and scalable digital architectures.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Development",
                    "Artificial Intelligence",
                    "Machine Learning",
                    "System Architecture",
                    "Cloud Engineering",
                    "Technical Leadership",
                  ].map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all"
                >
                  <Home className="w-4 h-4" />
                  <span>PIYROWARE Official Homepage</span>
                </Link>

                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>View All Leadership</span>
                </Link>

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
