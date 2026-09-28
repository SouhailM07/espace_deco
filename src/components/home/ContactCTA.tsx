"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export function ContactCTA() {
  const t = useTranslations("contact_cta");

  return (
    <section className="py-24 md:py-32 bg-walnut text-warm-ivory">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.2em] text-sm text-champagne mb-6 font-medium"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight text-balance"
        >
          {t("title")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button asChild size="lg" className="bg-champagne text-white hover:bg-champagne/90 border-0">
            <Link href="/contact">{t("cta")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
