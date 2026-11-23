import type { Metadata } from "next";
import WhyUsContent from "./WhyUsContent";

export const metadata: Metadata = {
  title: "Why Choose PIYROWARE | Technology & Innovation",
  description:
    "Technology with purpose. Solutions with impact. Discover why organizations partner with PIYROWARE for modern software development and intelligent AI solutions.",
  openGraph: {
    title: "Why Choose PIYROWARE | Technology & Innovation",
    description:
      "Technology with purpose. Solutions with impact. Discover why organizations partner with PIYROWARE for modern software development and intelligent AI solutions.",
    url: "https://piyroware.com/why-us",
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
    title: "Why Choose PIYROWARE | Technology & Innovation",
    description:
      "Technology with purpose. Solutions with impact. Discover why organizations partner with PIYROWARE for modern software development and intelligent AI solutions.",
  },
};

export default function WhyUsPage() {
  return <WhyUsContent />;
}
