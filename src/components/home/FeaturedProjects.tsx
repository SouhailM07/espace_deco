"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export function FeaturedProjects() {
  const t = useTranslations("featured_projects");
  const td = useTranslations("projects_data");
  const tp = useTranslations("projects_page");
  const projects = getFeaturedProjects();

  return (
    <section className="py-24 md:py-32 bg-soft-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-deep-brown mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-warm-brown">
              {t("description")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild variant="outline">
              <Link href="/realisations">{t("cta")}</Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <Link href={`/realisations/${project.slug}`} className="block overflow-hidden relative aspect-[4/5] mb-6">
                <Image
                  src={project.coverImage}
                  alt={td(`${project.id}.title`)}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-deep-brown/0 group-hover:bg-deep-brown/20 transition-colors duration-500" />
              </Link>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-taupe mb-2">
                  {tp(`categories.${project.category}`)}
                </p>
                <h3 className="font-serif text-2xl text-deep-brown group-hover:text-champagne transition-colors">
                  <Link href={`/realisations/${project.slug}`}>{td(`${project.id}.title`)}</Link>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
