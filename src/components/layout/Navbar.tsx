"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import { cn } from "@/lib/utils";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
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

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBackground)}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-wide relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
            {siteData.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {siteData.navigation.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-champagne",
                  pathname === item.href && "text-champagne"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

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
            className="fixed inset-0 z-40 bg-warm-ivory text-deep-brown pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-8 mt-10">
              {siteData.navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-serif text-4xl hover:text-champagne transition-colors",
                      pathname === item.href && "text-champagne"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
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
