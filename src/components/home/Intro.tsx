"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Intro() {
  return (
    <section className="py-24 md:py-32 bg-warm-ivory">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="uppercase tracking-[0.2em] text-sm text-taupe mb-6 font-medium">ESPACE DECO</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-brown leading-tight mb-8">
              Des espaces pensés dans chaque détail.
            </h2>
            <p className="text-lg text-warm-brown leading-relaxed mb-8">
              Espace Deco imagine et transforme des espaces résidentiels et professionnels en associant esthétique, fonctionnalité, matériaux et lumière. 
              Chaque projet est une réponse unique aux besoins de ceux qui y vivent ou y travaillent.
            </p>
            <div className="w-12 h-px bg-champagne"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] md:h-[700px] w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Détail architectural intérieur"
              fill
              className="object-cover rounded-sm shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
