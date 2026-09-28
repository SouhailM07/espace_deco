"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const t = useTranslations('hero');
  
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Intérieur élégant Espace Deco"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle overlay to preserve text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 via-deep-brown/50 to-deep-brown/30" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 text-center text-warm-ivory flex flex-col items-center justify-center h-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.2em] text-sm md:text-base mb-6 text-champagne drop-shadow-md font-medium"
        >
          {t('eyebrow')}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl mb-6 leading-tight text-balance"
        >
          {t('title')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mb-12 text-soft-cream/90 text-balance font-light"
        >
          {t('description')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-champagne text-white hover:bg-champagne/90 border-0">
            <Link href="/realisations">{t('cta_primary')}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-warm-ivory border-warm-ivory/50 hover:bg-warm-ivory hover:text-deep-brown">
            <Link href="/contact">{t('cta_secondary')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
