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
    default: "Estakball Hossain (Opu) | Growth Marketer & AI Systems Engineer",
    template: "%s | Estakball Hossain",
  },
  description:
    "Executive portfolio of Estakball Hossain (Opu) — BBA in Marketing graduate and Autonomous AI Systems Engineer in Dhaka, Bangladesh. Specializing in consumer psychology, brand strategy, zero-trust MCP gateways, and context engineering.",
  keywords: [
    "Estakball Hossain",
    "Estakball Hossain Opu",
    "Growth Marketer",
    "BBA Marketing Graduate",
    "AI Systems Engineer",
    "Agent Zero",
    "Prompt & Context Engineer",
    "Model Context Protocol",
    "Zero-Trust MCP",
    "Business Analytics",
    "MS Excel SQL Modeling",
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
    title: "Estakball Hossain (Opu) | Growth Marketer & AI Systems Engineer",
    description:
      "Explore empirical marketing research, retail analytics, and zero-trust autonomous AI systems by Estakball Hossain.",
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
    title: "Estakball Hossain (Opu) | Growth Marketer & AI Systems Engineer",
    description:
      "Explore empirical marketing research, retail analytics, and zero-trust autonomous AI systems by Estakball Hossain.",
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

import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";

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
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=boska@400,500,600,700,400i,500i,600i,700i&f[]=satoshi@300,400,500,700,400i,500i,700i&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-[#211e18] text-[#eee2ca] antialiased overflow-x-hidden selection:bg-[#c3a47b] selection:text-[#1d1a15]">
        <CustomCursor />
        {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#c3a47b] text-[#1d1a15] font-bold rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-white transition"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
