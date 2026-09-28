"use client";

import { useTransition, useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { Check, LanguagesIcon } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
] as const;

export function TranslationBtn({ variant = 'dropdown' }: { variant?: 'dropdown' | 'inline' }) {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function changeLocale(targetLocale: string) {
    if (targetLocale === locale) {
      setIsOpen(false);
      return;
    }
    
    document.cookie = `NEXT_LOCALE=${targetLocale};path=/;max-age=31536000;SameSite=Lax`;
    startTransition(() => {
      // Using next-intl router to replace path
      router.replace(pathname as any, { locale: targetLocale });
      setIsOpen(false);
    });
  }

  if (variant === 'inline') {
    return (
      <div className="flex w-full gap-2">
        {LOCALES.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => changeLocale(code)}
            disabled={isPending}
            className={cn(
              "flex-1 py-2.5 rounded-md text-sm font-medium transition-colors border flex items-center justify-center",
              locale === code 
                ? "bg-champagne border-champagne text-white" 
                : "bg-transparent border-walnut/20 text-deep-brown hover:border-champagne hover:text-champagne"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="p-2.5 rounded-xl hover:bg-black/10 transition-colors text-current outline-none focus-visible:ring-2 focus-visible:ring-champagne/50 flex items-center justify-center relative"
        aria-label="Select language"
      >
        <div className="relative inline-flex items-center justify-center">
          <LanguagesIcon className="w-5 h-5" />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-tighter leading-none select-none pointer-events-none">
            {locale}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-40 origin-top-right bg-white rounded-md shadow-lg border border-black/10 z-50 overflow-hidden"
          >
            <div className="py-1">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Language
              </div>
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => changeLocale(code)}
                  className="w-full text-left px-4 py-2 text-sm text-deep-brown hover:bg-warm-ivory transition-colors flex items-center justify-between"
                >
                  <span>{label}</span>
                  {locale === code && <Check className="w-4 h-4 text-champagne" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
