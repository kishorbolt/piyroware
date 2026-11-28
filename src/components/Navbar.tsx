"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronRight, ShieldCheck } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  sectionId?: string;
  isStandaloneRoute?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/", sectionId: "hero" },
  { name: "About", href: "/about", isStandaloneRoute: true },
  { name: "Services", href: "/#services", sectionId: "services" },
  { name: "Expertise", href: "/#expertise", sectionId: "expertise" },
  { name: "Process", href: "/#process", sectionId: "process" },
  { name: "Why Us", href: "/why-us", isStandaloneRoute: true },
  { name: "Team", href: "/team", isStandaloneRoute: true },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionItems = NAV_ITEMS.filter((item) => item.sectionId);
      const sections = sectionItems.map((item) => item.sectionId as string);
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setMobileMenuOpen(false);

    if (item.isStandaloneRoute) {
      return;
    }

    if (isHome) {
      if (item.href === "/" || item.sectionId === "hero") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (item.sectionId) {
        e.preventDefault();
        const element = document.getElementById(item.sectionId);
        if (element) {
          const navOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) {
        const navOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-[#06080F]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Perfectly Circular Logo & Brand */}
            <Link
              href={isHome ? "#hero" : "/"}
              onClick={handleLogoClick}
              className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white border border-white/20 shadow-md shadow-blue-500/10 p-1 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] shrink-0">
                <Image
                  src="/piyroware-logo-optimized.png"
                  alt="PIYROWARE Logo"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full transform transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg sm:text-xl font-bold tracking-wider text-white flex items-center leading-none">
                  PIYRO<span className="text-blue-500 font-extrabold">WARE</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-slate-400 uppercase font-medium mt-1 leading-none font-mono">
                  Software & Artificial Intelligence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-[#090E1B]/80 border border-white/[0.07] px-4 py-1.5 rounded-full backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                let isActive = false;
                if (item.isStandaloneRoute) {
                  isActive = pathname === item.href;
                } else if (isHome) {
                  if (item.href === "/" && activeSection === "hero") {
                    isActive = true;
                  } else if (item.sectionId && activeSection === item.sectionId) {
                    isActive = true;
                  }
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 rounded-full ${
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-blue-600/20 border border-blue-500/40 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={isHome ? "#contact" : "/#contact"}
                onClick={handleCtaClick}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-200 border border-blue-400/30 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#06080F]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 lg:hidden shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => {
                let isActive = false;
                if (item.isStandaloneRoute) {
                  isActive = pathname === item.href;
                } else if (isHome) {
                  if (item.href === "/" && activeSection === "hero") {
                    isActive = true;
                  } else if (item.sectionId && activeSection === item.sectionId) {
                    isActive = true;
                  }
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? "text-white bg-blue-600/20 border border-blue-500/30"
                        : "text-slate-200 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href={isHome ? "#contact" : "/#contact"}
                  onClick={handleCtaClick}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 py-1 font-mono">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Software Development & AI</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
