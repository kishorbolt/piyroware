import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers at PIYROWARE | Join Our Technical Team",
  description:
    "Explore career opportunities at PIYROWARE. Apply directly for software development and artificial intelligence engineering roles.",
  openGraph: {
    title: "Careers at PIYROWARE | Join Our Technical Team",
    description:
      "Explore career opportunities at PIYROWARE. Apply directly for software development and artificial intelligence engineering roles.",
    url: "https://piyroware.com/careers",
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
    title: "Careers at PIYROWARE | Join Our Technical Team",
    description:
      "Explore career opportunities at PIYROWARE. Apply directly for software development and artificial intelligence engineering roles.",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
