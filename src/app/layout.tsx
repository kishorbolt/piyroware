import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIYROWARE — Official Website | Software Development, Artificial Intelligence & Digital Solutions",
  description:
    "PIYROWARE (PIYROWARE Technologies) is a premier technology company engineering modern software development, applied artificial intelligence systems, digital solutions, and SEO search visibility optimization.",
  keywords: [
    "PIYROWARE",
    "PIYROWARE Technologies",
    "PIYROWARE Software Development",
    "PIYROWARE AI Solutions",
    "Software Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Application Development",
    "Cloud Architecture",
    "Backend Engineering",
    "SEO & Google Search Visibility",
    "Google Search Console",
    "Technical SEO Optimization",
  ],
  authors: [{ name: "PIYROWARE", url: "https://www.piyroware.com/" }],
  creator: "PIYROWARE",
  publisher: "PIYROWARE",
  metadataBase: new URL("https://www.piyroware.com"),
  alternates: {
    canonical: "https://www.piyroware.com/",
  },
  icons: {
    icon: "/piyroware-logo-optimized.png",
    apple: "/piyroware-logo-optimized.png",
  },
  openGraph: {
    title: "PIYROWARE — Official Website | Software Development & Artificial Intelligence",
    description:
      "PIYROWARE creates modern software, applied artificial intelligence solutions, and digital technology platforms engineered to solve complex problems.",
    url: "https://www.piyroware.com/",
    siteName: "PIYROWARE",
    images: [
      {
        url: "/piyroware-logo-optimized.png",
        width: 512,
        height: 512,
        alt: "PIYROWARE Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIYROWARE — Official Website | Software Development & Artificial Intelligence",
    description:
      "PIYROWARE creates modern software, applied artificial intelligence solutions, and digital technology platforms engineered to solve complex problems.",
    images: ["/piyroware-logo-optimized.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#06080F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Structured Data (JSON-LD) for WebSite and Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.piyroware.com/#website",
      "url": "https://www.piyroware.com/",
      "name": "PIYROWARE",
      "alternateName": [
        "PIYROWARE Technologies",
        "PIYROWARE Software Development",
        "PIYROWARE AI Solutions",
      ],
      "description":
        "Official website of PIYROWARE — Software development, artificial intelligence, and digital solutions company.",
      "publisher": {
        "@id": "https://www.piyroware.com/#organization",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://www.piyroware.com/#organization",
      "name": "PIYROWARE",
      "alternateName": [
        "PIYROWARE Technologies",
        "PIYROWARE Software Development",
        "PIYROWARE AI Solutions",
      ],
      "url": "https://www.piyroware.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.piyroware.com/#logo",
        "url": "https://www.piyroware.com/piyroware-logo-optimized.png",
        "caption": "PIYROWARE Official Logo",
        "width": 512,
        "height": 512,
      },
      "image": "https://www.piyroware.com/piyroware-logo-optimized.png",
      "description":
        "PIYROWARE is a software development and artificial intelligence company building modern digital solutions, intelligent systems, and scalable technology platforms.",
      "email": "piyroware@gmail.com",
      "telephone": "+91 94887 93023",
      "founder": {
        "@type": "Person",
        "@id": "https://www.piyroware.com/team/kishor#person",
        "name": "Mr. Kishor G",
        "jobTitle": "CEO & Founder",
        "url": "https://www.piyroware.com/team/kishor",
        "image": "https://www.piyroware.com/staff/kishor-g.webp",
      },
      "employee": [
        {
          "@type": "Person",
          "@id": "https://www.piyroware.com/team/kishor#person",
          "name": "Mr. Kishor G",
          "jobTitle": "CEO & Founder",
          "url": "https://www.piyroware.com/team/kishor",
          "image": "https://www.piyroware.com/staff/kishor-g.webp",
        },
        {
          "@type": "Person",
          "@id": "https://www.piyroware.com/team/mohammed-afhaan-n#person",
          "name": "Mr. Mohammed Afhaan N",
          "jobTitle": "Director",
          "url": "https://www.piyroware.com/team/mohammed-afhaan-n",
        },
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 94887 93023",
          "contactType": "customer service",
          "email": "piyroware@gmail.com",
          "availableLanguage": ["English", "Tamil"],
        },
      ],
      "knowsAbout": [
        "Software Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Web Application Development",
        "Cloud Architecture",
        "Search Engine Optimization (SEO)",
        "Google Search Console Integration",
        "Google Search Indexing",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/piyroware-logo-optimized.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#06080F] text-[#F8FAFC] antialiased min-h-screen selection:bg-blue-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
