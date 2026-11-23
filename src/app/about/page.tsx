import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About PIYROWARE | Our Vision & Mission",
  description:
    "We are a technology-driven company focused on building modern software, intelligent digital solutions and innovative technology experiences.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About PIYROWARE | Our Vision & Mission",
    description:
      "We are a technology-driven company focused on building modern software, intelligent digital solutions and innovative technology experiences.",
    url: "https://www.piyroware.com/about",
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
    title: "About PIYROWARE | Our Vision & Mission",
    description:
      "We are a technology-driven company focused on building modern software, intelligent digital solutions and innovative technology experiences.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
