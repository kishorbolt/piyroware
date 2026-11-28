import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import SeoServices from "@/components/SeoServices";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "PIYROWARE — Official Website | Software Development, Artificial Intelligence & Digital Solutions",
  description:
    "PIYROWARE (PIYROWARE Technologies) is a premier technology company engineering modern software development, applied artificial intelligence systems, digital solutions, and SEO search visibility optimization.",
  alternates: {
    canonical: "https://www.piyroware.com/",
  },
  openGraph: {
    title: "PIYROWARE — Official Website | Software Development & Artificial Intelligence",
    description:
      "PIYROWARE creates modern software, applied artificial intelligence solutions, and digital technology platforms engineered to solve complex problems.",
    url: "https://www.piyroware.com/",
    siteName: "PIYROWARE",
    type: "website",
    images: [
      {
        url: "/piyroware-logo-optimized.png",
        width: 512,
        height: 512,
        alt: "PIYROWARE Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIYROWARE — Official Website | Software Development & Artificial Intelligence",
    description:
      "PIYROWARE creates modern software, applied artificial intelligence solutions, and digital technology platforms engineered to solve complex problems.",
    images: ["/piyroware-logo-optimized.png"],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#06080F] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white">
      {/* Subtle cursor follower */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About PIYROWARE */}
        <About />

        {/* Core Services */}
        <Services />

        {/* AI & Software Expertise */}
        <Expertise />

        {/* SEO & Google Search Visibility Services */}
        <SeoServices />

        {/* Development Process */}
        <Process />

        {/* Why PIYROWARE */}
        <WhyUs />

        {/* Contact CTA */}
        <CtaSection />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
