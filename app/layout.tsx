import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smitbhamwala.vercel.app"),
  title: {
    default: "Smit Bhamwala | Full Stack Developer Portfolio",
    template: "%s | Smit Bhamwala"
  },
  description:
    "Experienced Full Stack Developer from Gujarat, India. Specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords: [
    // Core identity
    "Smit Bhamwala",
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",

    // Location-based (important for local SEO)
    "Bharuch Developer",
    "Ahmedabad Developer",
    "Gujarat Developer",
    "India Developer",

    // Technical skills (high-value keywords)
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",

    // Technologies
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "TypeScript",
    "Tailwind CSS",
    "REST API",
    "GraphQL",
    "PostgreSQL",
    "MySQL",

    // Services
    "Web Application Development",
    "E-commerce Development",
    "API Development",
    "Responsive Web Design",
    "UI/UX Design",
    "Database Design",

    // Professional terms
    "Freelance Developer",
    "Remote Developer",
    "Portfolio",
    "Projects",
    "Full Time Developer",
    "Contract Developer"
  ],
  authors: [{ name: "Smit Bhamwala", url: "https://smitbhamwala.vercel.app" }],
  creator: "Smit Bhamwala",
  publisher: "Smit Bhamwala",

  // Open Graph for social media
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smitbhamwala.vercel.app",
    siteName: "Smit Bhamwala Portfolio",
    title: "Smit Bhamwala | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer specializing in modern web technologies. View my projects and get in touch for your next development needs.",
    images: [
      {
        url: "/og-image.png", // You'll need to create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Smit Bhamwala - Full Stack Developer Portfolio"
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Smit Bhamwala | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer specializing in modern web technologies. View my projects and get in touch!",
    images: ["/og-image.png"], // Same image as Open Graph
    creator: "@smitbhamwala" // Replace with your actual Twitter handle
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  // Verification
  verification: {
    google: "Ko9LxTYV9-KxCx0Rh82oVtryvBAAfEboWroQyzysoPo"
  },

  // Additional tags
  category: "Technology",
  classification: "Portfolio Website",

  // Alternate languages and canonical URL
  alternates: {
    canonical: "https://smitbhamwala.vercel.app",
    languages: {
      en: "https://smitbhamwala.vercel.app"
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" }
  ]
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;

  return (
    <html
      lang="en"
      className={`scroll-smooth ${theme === "dark" ? "dark" : ""}`}>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://vercel.live" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        {/* <link rel="icon" href="/icon.svg" type="image/svg+xml" /> */}
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#111827"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Smit Bhamwala",
              jobTitle: "Full Stack Developer",
              url: "https://smitbhamwala.vercel.app",
              sameAs: [
                "https://linkedin.com/in/smitbhamwala",
                "https://github.com/smitbhamwala"
              ],
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  addressCountry: "India"
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Bharuch",
                  addressRegion: "Gujarat",
                  addressCountry: "India"
                }
              ],
              knowsAbout: [
                "Full Stack Development",
                "React.js",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "Web Development"
              ],
              description:
                "Experienced Full Stack Developer specializing in modern web technologies and creating robust web applications."
            })
          }}
        />
      </head>
      <body
        className={`${poppins.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 antialiased`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="bottom-center" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
