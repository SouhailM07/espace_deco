import { Link } from "@/i18n/routing";
import { siteData } from "@/data/site";
import { RiInstagramLine, RiFacebookCircleLine, RiWhatsappLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navigation");

  return (
    <footer className="bg-deep-brown text-warm-ivory py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="font-serif text-3xl mb-4 block">
            {siteData.name}
          </Link>
          <p className="text-taupe max-w-sm mt-4 text-balance">
            {siteData.description}
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">{t("navigation")}</h4>
          <ul className="flex flex-col gap-3 text-taupe">
            {siteData.navigation.map((item) => {
              // Extract the translation key from the href (e.g. /realisations -> projects)
              let translationKey = item.label.toLowerCase();
              if (item.href === '/realisations') translationKey = 'projects';
              else if (item.href === '/services') translationKey = 'services';
              else if (item.href === '/a-propos') translationKey = 'about';
              else if (item.href === '/contact') translationKey = 'contact';
              else if (item.href === '/') translationKey = 'home';
              return (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-champagne transition-colors">
                    {tNav(translationKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">{t("contact")}</h4>
          <ul className="flex flex-col gap-3 text-taupe">
            <li>
              <a href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`} className="hover:text-champagne transition-colors">
                {siteData.contact.phone}
              </a>
            </li>
            <li>{siteData.contact.location}</li>
            <li className="flex gap-4 mt-4">
              <a href={siteData.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-champagne transition-colors">
                <RiInstagramLine size={24} />
              </a>
              <a href={siteData.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-champagne transition-colors">
                <RiFacebookCircleLine size={24} />
              </a>
              <a href={`https://wa.me/${siteData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-champagne transition-colors">
                <RiWhatsappLine size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-walnut flex flex-col md:flex-row justify-between items-center text-sm text-taupe">
        <p>&copy; {new Date().getFullYear()} {siteData.name}. {t("rights")}</p>
        <p className="mt-2 md:mt-0">{t("tagline")}</p>
      </div>
    </footer>
  );
}
