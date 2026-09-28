"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-warm-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-deep-brown mb-6"
          >
            Notre savoir-faire
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-warm-brown"
          >
            Des solutions pensées pour donner une nouvelle dimension à vos espaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-t border-walnut/20 pt-8"
              >
                <div className="mb-6 text-taupe group-hover:text-champagne transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="font-serif text-2xl text-deep-brown mb-4">
                  {service.title}
                </h3>
                <p className="text-warm-brown text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/services">Découvrir nos services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
