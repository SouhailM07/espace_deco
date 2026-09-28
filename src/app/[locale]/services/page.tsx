"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-warm-ivory min-h-screen">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.2em] text-sm text-taupe mb-6 font-medium"
          >
            NOTRE EXPERTISE
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-brown mb-8"
          >
            Notre savoir-faire
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-warm-brown max-w-2xl leading-relaxed"
          >
            Des solutions pensées pour donner une nouvelle dimension à vos espaces. Nous vous accompagnons de la conception à la réalisation de votre projet.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="mb-6 w-16 h-16 rounded-full bg-soft-cream flex items-center justify-center text-taupe group-hover:bg-champagne group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="font-serif text-3xl text-deep-brown mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-warm-brown leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-walnut text-warm-ivory rounded-sm p-6 sm:p-8 md:p-12 lg:p-20 text-center mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-balance hyphens-auto">Besoin d&apos;un accompagnement sur mesure ?</h2>
          <p className="text-taupe max-w-2xl mx-auto mb-10 text-lg">
            Chaque projet est unique. Discutons ensemble de vos envies et des possibilités offertes par votre espace.
          </p>
          <Button asChild size="lg" className="bg-champagne text-white hover:bg-champagne/90 border-0">
            <Link href="/contact">Demander une consultation</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
