"use client";

import * as React from "react";
import { siteData } from "@/data/site";
import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${siteData.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      aria-label="Contact us on WhatsApp"
    >
      <RiWhatsappFill size={32} />
    </motion.a>
  );
}
