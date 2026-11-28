import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowUpRight, ShieldCheck, Building2, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Mr. Mohammed Afhaan N — Director | PIYROWARE",
  description:
    "Official profile of Mr. Mohammed Afhaan N, Director of PIYROWARE. Directing corporate strategy, software development initiatives, and technology management.",
  alternates: {
    canonical: "/team/mohammed-afhaan-n",
  },
  openGraph: {
    title: "Mr. Mohammed Afhaan N — Director | PIYROWARE",
    description:
      "Official profile of Mr. Mohammed Afhaan N, Director of PIYROWARE. Directing corporate strategy, software development initiatives, and technology management.",
    url: "https://www.piyroware.com/team/mohammed-afhaan-n",
    siteName: "PIYROWARE",
    type: "profile",
    images: [
      {
        url: "/piyroware-logo-optimized.png",
        width: 512,
        height: 512,
        alt: "Mr. Mohammed Afhaan N, Director of PIYROWARE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Mohammed Afhaan N — Director | PIYROWARE",
    description:
      "Official profile of Mr. Mohammed Afhaan N, Director of PIYROWARE.",
    images: ["/piyroware-logo-optimized.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.piyroware.com/team/mohammed-afhaan-n#person",
  "name": "Mr. Mohammed Afhaan N",
  "jobTitle": "Director",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://www.piyroware.com/#organization",
    "name": "PIYROWARE",
    "url": "https://www.piyroware.com/",
    "logo": "https://www.piyroware.com/piyroware-logo-optimized.png",
  },
  "url": "https://www.piyroware.com/team/mohammed-afhaan-n",
  "sameAs": ["https://www.piyroware.com/"],
};

export default function MohammedAfhaanProfilePage() {
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
            <span className="text-slate-200">Mr. Mohammed Afhaan N</span>
          </nav>

          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#090E1B]/90 border border-white/[0.08] shadow-2xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <div
              className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-white/[0.08]">
              {/* Monogram Box / Photograph Area */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-indigo-600/25 to-blue-600/25 border border-blue-400/40 flex items-center justify-center text-blue-300 shadow-xl shadow-blue-600/10 shrink-0">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-wider">
                  MN
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-500/10 border border-blue-500/30 text-blue-300">
                    DIRECTOR
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Executive Leadership</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Mr. Mohammed Afhaan N
                </h1>
                <p className="text-sm sm:text-base font-mono text-blue-400 font-semibold mt-1">
                  Director, PIYROWARE.
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
                  Mr. Mohammed Afhaan N serves as Director at PIYROWARE, directing corporate governance, technology
                  operations, and strategic growth. He collaborates on organizational leadership, high-reliability software
                  delivery frameworks, and client engagement strategies.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Technology Management",
                    "Software Strategy",
                    "Operational Architecture",
                    "Digital Transformation",
                    "Corporate Governance",
                    "Strategic Planning",
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
