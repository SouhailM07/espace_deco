"use client";

import * as React from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import { cn } from "@/lib/utils";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { TranslationBtn } from "@/components/ui/TranslationBtn";

export function Navbar() {
  const t = useTranslations('navigation');
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  // Simple check for home page across locales
  const isHome = pathname === "/" || pathname === "/fr" || pathname === "/en" || pathname === "/ar";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navBackground = isHome
    ? isScrolled || isMobileMenuOpen ? "bg-warm-ivory shadow-sm text-deep-brown" : "bg-transparent text-white"
    : "bg-warm-ivory shadow-sm text-deep-brown";

  const navLinks = [
    { label: t('home'), href: "/" },
    { label: t('projects'), href: "/realisations" },
    { label: t('services'), href: "/services" },
    { label: t('about'), href: "/a-propos" },
    { label: t('contact'), href: "/contact" },
  ];

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBackground)}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          <Link href="/" className="relative z-50 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src="/images/logo-clean.jpg" alt={siteData.name} width={56} height={56} className="object-cover rounded-full shadow-md" />
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <Link 
                key={item.href} 
                href={item.href as any}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-champagne",
                  pathname.includes(item.href) && item.href !== "/" ? "text-champagne" : ""
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
            
          {/* Language Switcher - Right aligned */}
          <div className="hidden md:flex gap-4 items-center relative z-50 text-current">
            <TranslationBtn />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-warm-ivory text-deep-brown pt-24 px-6 flex flex-col overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-6">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.href as any}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-serif text-2xl sm:text-3xl hover:text-champagne transition-colors"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Mobile Lang Switch */}
            <div className="flex w-full mt-8 text-deep-brown">
              <TranslationBtn variant="inline" />
            </div>
            
            <div className="mt-auto mb-10 pb-10">
              <p className="text-sm text-taupe mb-2">Prendre contact</p>
              <a href={`https://wa.me/${siteData.contact.whatsapp}`} className="text-lg font-medium block mb-2">
                WhatsApp
              </a>
              <a href={`tel:${siteData.contact.phone}`} className="text-lg font-medium block">
                {siteData.contact.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
