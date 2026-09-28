"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
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
          src="https://images.unsplash.com/photo-1616486028423-aa0e405a3964?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Intérieur élégant Espace Deco"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle overlay to preserve text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-deep-brown/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 text-center text-warm-ivory flex flex-col items-center justify-center h-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.2em] text-sm md:text-base mb-6 text-champagne"
        >
          ESPACE DECO
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-5xl mb-8 leading-tight text-balance"
        >
          L&apos;art de transformer vos espaces.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mb-12 text-soft-cream/90 text-balance font-light"
        >
          Aménagement, rénovation et design intérieur pensés pour créer des espaces élégants, fonctionnels et uniques.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-champagne text-white hover:bg-champagne/90 border-0">
            <Link href="/realisations">Découvrir nos réalisations</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-warm-ivory border-warm-ivory/50 hover:bg-warm-ivory hover:text-deep-brown">
            <Link href="/contact">Parler de votre projet</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
