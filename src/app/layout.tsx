import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Estakball Hossain (Opu) | BBA in Marketing — Executive Portfolio",
    template: "%s | Estakball Hossain",
  },
  description:
    "Executive portfolio of Estakball Hossain (Opu), a fresh BBA graduate in Marketing skilled in business analysis, MS Excel, foundational SQL, and cross-functional operations across Marketing, Supply Chain, Finance, and HR in Dhaka, Bangladesh.",
  keywords: [
    "Estakball Hossain",
    "Estakball Hossain Opu",
    "BBA Graduate Marketing",
    "Marketing Portfolio Bangladesh",
    "Business Administration Graduate Dhaka",
    "Supply Chain Entry Level",
    "SQL Excel Business Analyst",
    "Management Trainee Bangladesh",
  ],
  authors: [{ name: "Estakball Hossain", url: "https://estakball-hossain.vercel.app" }],
  creator: "Estakball Hossain",
  publisher: "Estakball Hossain",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://estakball-hossain.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Estakball Hossain (Opu) | BBA in Marketing — Executive Portfolio",
    description:
      "Explore academic case studies, data models in MS Excel & SQL, and operational frameworks by Estakball Hossain.",
    url: "https://estakball-hossain.vercel.app",
    siteName: "Estakball Hossain Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Estakball Hossain (Opu)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estakball Hossain (Opu) | BBA Graduate — Marketing & Business Portfolio",
    description:
      "Explore case studies, Excel analysis, and cross-functional business projects by Estakball Hossain.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { CookieConsentBanner } from "@/components/CookieConsentBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${playfair.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased overflow-x-hidden selection:bg-blue-700 selection:text-white">
        {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-white transition"
        >
          Skip to main content
        </a>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
