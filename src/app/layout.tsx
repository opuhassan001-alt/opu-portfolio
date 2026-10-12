import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Estakball Hossain | BBA Graduate — Marketing & Business Portfolio",
  description:
    "Executive portfolio of Estakball Hossain (Opu), a fresh BBA graduate in Marketing skilled in business analysis, MS Excel, foundational SQL, and cross-functional operations across Marketing, Supply Chain, Finance, and HR.",
  keywords: [
    "Estakball Hossain",
    "Opu",
    "BBA Graduate Marketing",
    "Marketing Portfolio Bangladesh",
    "Business Administration Graduate Dhaka",
    "Supply Chain Entry Level",
    "SQL Excel Business Analyst",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

