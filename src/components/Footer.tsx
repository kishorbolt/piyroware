"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { COMPANY_INFO, SERVICES } from "../data/siteData";
import { WHATSAPP_CONFIG } from "../lib/whatsapp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="relative bg-[#04060B] border-t border-white/[0.08] text-slate-400 overflow-hidden pt-16 pb-12">
      {/* Subtle Gradient Accent Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer inline-flex"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white border border-white/20 shadow-md shadow-blue-500/10 p-1 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] shrink-0">
                <Image
                  src="/piyroware-logo-optimized.png"
                  alt="PIYROWARE Logo"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full transform transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold tracking-wider text-white leading-none">
                  PIYRO<span className="text-blue-500 font-extrabold">WARE</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium mt-1 leading-none font-mono">
                  Software & Artificial Intelligence
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              PIYROWARE creates modern software and artificial intelligence solutions designed to solve
              complex problems, simplify experiences, and help ideas become reality.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active</span>
              </div>
              <span>•</span>
              <span>Software & AI Solutions</span>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("expertise")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Process
                </button>
              </li>
              <li>
                <Link
                  href="/why-us"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors cursor-pointer text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>Careers</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.number}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection("seo-visibility")}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>SEO & Search Visibility</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
                    SEO
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contact & WhatsApp
            </h4>
            <div className="space-y-3.5 text-sm">
              {/* WhatsApp Button */}
              <div>
                <a
                  href={WHATSAPP_CONFIG.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/20 transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>

              {/* Phone */}
              <div>
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono">{COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Email */}
              <div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-xs font-mono">{COMPANY_INFO.email}</span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>

              <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                Connect directly for custom software architecture, AI development, and career inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {COMPANY_INFO.year} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-slate-400">
              Software Development & Artificial Intelligence
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
