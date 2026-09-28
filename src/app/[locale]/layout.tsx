import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.espacedeco.dz'),
  title: {
    template: '%s',
    default: "Espace Deco | Design intérieur & aménagement à Alger",
  },
  description: "Espace Deco accompagne vos projets d'aménagement intérieur, rénovation, décoration et mobilier sur mesure à Alger.",
  openGraph: {
    type: "website",
    siteName: "Espace Deco",
    locale: "fr_DZ",
    images: [{
      url: "/images/og-image.jpg", // You should ensure this image exists in public/images
      width: 1200,
      height: 630,
      alt: "Espace Deco - Aménagement intérieur à Alger",
    }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  if (!routing.locales.includes(resolvedParams.locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // Set dir to rtl for Arabic
  const dir = resolvedParams.locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={resolvedParams.locale} dir={dir} className={`${outfit.variable} ${lora.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-warm-ivory text-deep-brown selection:bg-champagne selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
