"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function DesignPhilosophy() {
  return (
    <section className="py-24 md:py-32 bg-deep-brown text-warm-ivory overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative h-[600px] md:h-[800px] w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09c15faa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Design philosophy"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 max-w-xl lg:pl-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Créer plus qu&apos;un intérieur.
            </h2>
            <p className="text-lg text-taupe leading-relaxed mb-10">
              Chaque projet commence par une compréhension de l&apos;espace, de la lumière et des besoins de ses occupants. L&apos;objectif est de créer un environnement cohérent, élégant et durable.
            </p>
            <p className="text-lg text-taupe leading-relaxed">
              Nous privilégions les matières authentiques, l&apos;équilibre des volumes et l&apos;éclairage soigné pour concevoir des intérieurs qui traversent le temps.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
