import { MetadataRoute } from 'next';
import { getAllProjects } from '../data/projects';
import { routing } from '../i18n/routing';

const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.espacedeco.dz';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;
  
  const getAlternates = (path: string) => {
    const alternates: Record<string, string> = {};
    locales.forEach((locale) => {
      alternates[locale] = `${DOMAIN}/${locale}${path}`;
    });
    return alternates;
  };

  const staticPages = [
    '',
    '/services',
    '/realisations',
    '/a-propos',
    '/contact',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${DOMAIN}/${defaultLocale}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
    alternates: {
      languages: getAlternates(route),
    },
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${DOMAIN}/${defaultLocale}/realisations/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: {
      languages: getAlternates(`/realisations/${project.slug}`),
    },
  }));

  return [...staticRoutes, ...projectRoutes];
}
