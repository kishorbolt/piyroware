import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIYROWARE — Software & AI Technology Company",
  description:
    "PIYROWARE creates modern software and AI solutions designed to solve complex problems, simplify experiences, and help ideas become reality.",
  keywords: [
    "PIYROWARE",
    "Software Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Web Application Development",
    "Cloud Architecture",
    "Backend Engineering",
  ],
  authors: [{ name: "PIYROWARE" }],
  creator: "PIYROWARE",
  publisher: "PIYROWARE",
  metadataBase: new URL("https://www.piyroware.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/piyroware-logo-optimized.png",
    apple: "/piyroware-logo-optimized.png",
  },
  openGraph: {
    title: "PIYROWARE — Software & AI Technology Company",
    description:
      "We Build Software. We Engineer Intelligence. PIYROWARE creates modern software and AI solutions designed to solve complex problems.",
    url: "https://www.piyroware.com",
    siteName: "PIYROWARE",
    images: [
      {
        url: "/piyroware-logo-optimized.png",
        width: 512,
        height: 512,
        alt: "PIYROWARE Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIYROWARE — Software & AI Technology Company",
    description:
      "PIYROWARE creates modern software and AI solutions designed to solve complex problems, simplify experiences, and help ideas become reality.",
    images: ["/piyroware-logo-optimized.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06080F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/piyroware-logo.png" />
      </head>
      <body className="bg-[#06080F] text-[#F8FAFC] antialiased min-h-screen selection:bg-blue-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
