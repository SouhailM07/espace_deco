import { MetadataRoute } from 'next';

const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.espacedeco.dz';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
