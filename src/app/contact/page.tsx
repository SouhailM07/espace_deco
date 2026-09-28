"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { RiWhatsappLine, RiPhoneLine, RiMapPinLine, RiMailLine } from "react-icons/ri";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    projectType: "Appartement",
    location: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fallback logic to WhatsApp since there's no backend
    const text = `Bonjour, je suis ${formData.name}. Je vous contacte concernant un projet de ${formData.projectType} à ${formData.location}. %0A%0A${formData.message}`;
    window.open(`https://wa.me/${siteData.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-warm-ivory min-h-screen">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.2em] text-sm text-taupe mb-6 font-medium"
          >
            CONTACT
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-deep-brown mb-8"
          >
            Parlons de votre projet.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-warm-brown max-w-2xl leading-relaxed"
          >
            Vous avez un appartement, une maison ou un espace commercial à transformer ? Échangeons autour de votre projet.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-soft-cream p-10 md:p-12 rounded-sm mb-10">
              <h3 className="font-serif text-2xl text-deep-brown mb-8">Coordonnées</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 text-warm-brown">
                  <RiPhoneLine size={24} className="text-champagne shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-deep-brown mb-1">Téléphone</p>
                    <a href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`} className="hover:text-champagne transition-colors">
                      {siteData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-warm-brown">
                  <RiWhatsappLine size={24} className="text-champagne shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-deep-brown mb-1">WhatsApp</p>
                    <a href={`https://wa.me/${siteData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">
                      Envoyer un message
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-warm-brown">
                  <RiMailLine size={24} className="text-champagne shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-deep-brown mb-1">Email</p>
                    <a href={`mailto:${siteData.contact.email}`} className="hover:text-champagne transition-colors">
                      {siteData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-warm-brown">
                  <RiMapPinLine size={24} className="text-champagne shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-deep-brown mb-1">Zone d&apos;intervention</p>
                    <p>{siteData.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-deep-brown">Nom & Prénom</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full h-12 px-4 bg-white/50 border border-walnut/20 rounded-sm focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-deep-brown">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full h-12 px-4 bg-white/50 border border-walnut/20 rounded-sm focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium text-deep-brown">Type de projet</label>
                  <select 
                    id="projectType" 
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full h-12 px-4 bg-white/50 border border-walnut/20 rounded-sm focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all"
                  >
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Commerce</option>
                    <option>Bureau</option>
                    <option>Rénovation</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-deep-brown">Lieu du projet</label>
                  <input 
                    type="text" 
                    id="location" 
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full h-12 px-4 bg-white/50 border border-walnut/20 rounded-sm focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-deep-brown">Détails du projet</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-4 bg-white/50 border border-walnut/20 rounded-sm focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all resize-none"
                  placeholder="Décrivez brièvement vos attentes..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full md:w-auto mt-4">
                Envoyer ma demande (via WhatsApp)
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
