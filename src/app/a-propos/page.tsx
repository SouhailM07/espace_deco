"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-warm-ivory min-h-screen">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.2em] text-sm text-taupe mb-6 font-medium"
          >
            À PROPOS DE NOUS
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-deep-brown mb-8 leading-tight"
          >
            Donner une nouvelle dimension à vos espaces.
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Espace Deco intérieur"
              fill
              className="object-cover rounded-sm"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-deep-brown mb-8">Notre Philosophie</h2>
            <div className="space-y-6 text-lg text-warm-brown font-light leading-relaxed">
              <p>
                Espace Deco accompagne ses clients dans la conception, la rénovation et l&apos;aménagement d&apos;espaces résidentiels et professionnels, avec une attention particulière portée aux proportions, aux matériaux, à la lumière et aux finitions.
              </p>
              <p>
                Nous croyons que l&apos;architecture d&apos;intérieur ne consiste pas seulement à décorer une pièce, mais à penser son usage, fluidifier la circulation et créer une atmosphère qui correspond à ses occupants.
              </p>
              <p>
                Basé à {siteData.contact.location}, notre studio s&apos;investit dans chaque projet avec exigence et passion, de la première esquisse jusqu&apos;à la livraison finale.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-soft-cream rounded-sm p-12 md:p-20 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-deep-brown">Confiez-nous votre intérieur.</h2>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Parler de votre projet</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
