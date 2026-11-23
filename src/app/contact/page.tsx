import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact PIYROWARE | Connect via WhatsApp & Email",
  description:
    "Get in touch with PIYROWARE for software development and artificial intelligence solutions. Connect directly via WhatsApp (+91 94887 93023) or email.",
  openGraph: {
    title: "Contact PIYROWARE | Connect via WhatsApp & Email",
    description:
      "Get in touch with PIYROWARE for software development and artificial intelligence solutions. Connect directly via WhatsApp (+91 94887 93023) or email.",
    url: "https://piyroware.com/contact",
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
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#06080F] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <main className="flex-1 relative z-10 pt-20">
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
