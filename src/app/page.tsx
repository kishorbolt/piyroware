import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Technology from "@/components/Technology";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

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

        {/* Technology */}
        <Technology />

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
