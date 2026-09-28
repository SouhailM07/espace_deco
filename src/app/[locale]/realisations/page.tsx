"use client";

import * as React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { getAllProjects } from "@/data/projects";
import { useTranslations } from "next-intl";

const categoryKeys = ["all", "residential", "commercial", "renovation", "layout"];

export default function Portfolio() {
  const t = useTranslations("projects_page");
  const td = useTranslations("projects_data");
  const [activeCategory, setActiveCategory] = React.useState("all");
  const allProjects = getAllProjects();
  
  const filteredProjects = activeCategory === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-warm-ivory min-h-screen">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.2em] text-sm text-taupe mb-6 font-medium"
          >
            {t("subtitle")}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-brown mb-8"
          >
            {t("title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-warm-brown max-w-2xl"
          >
            {t("description")}
          </motion.p>
        </header>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {categoryKeys.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? "bg-deep-brown text-warm-ivory" 
                  : "bg-soft-cream text-warm-brown hover:bg-taupe hover:text-white"
              }`}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </motion.div>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
              >
                <Link href={`/realisations/${project.slug}`} className="block">
                  <div className="overflow-hidden relative aspect-[3/4] mb-6">
                    <Image
                      src={project.coverImage}
                      alt={td(`${project.id}.title`)}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-deep-brown/0 group-hover:bg-deep-brown/20 transition-colors duration-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-taupe">
                        {t(`categories.${project.category}`)}
                      </p>
                      <span className="w-1 h-1 rounded-full bg-champagne"></span>
                      <p className="text-xs font-medium text-warm-brown">
                        {td(`${project.id}.location`)}
                      </p>
                    </div>
                    <h3 className="font-serif text-3xl text-deep-brown group-hover:text-champagne transition-colors">
                      {td(`${project.id}.title`)}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
