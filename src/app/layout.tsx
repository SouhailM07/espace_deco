import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Espace Deco | Aménagement & Design Intérieur à Alger",
  description: "Espace Deco — aménagement intérieur, rénovation, décoration et mobilier sur mesure à Alger.",
  keywords: [
    "Espace Deco",
    "design intérieur Alger",
    "aménagement intérieur Alger",
    "rénovation Alger",
    "décoration intérieure Alger",
    "faux plafond Alger",
    "mobilier sur mesure Alger",
    "aménagement commerce Alger",
    "architecte intérieur Alger"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-warm-ivory text-deep-brown selection:bg-champagne selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
