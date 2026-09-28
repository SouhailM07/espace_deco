import Script from 'next/script';

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Espace Deco",
    "image": "https://www.espacedeco.dz/images/og-image.jpg",
    "@id": "https://www.espacedeco.dz",
    "url": "https://www.espacedeco.dz",
    "telephone": "+213 770 14 44 22",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alger",
      "addressCountry": "DZ"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Alger"
      },
      {
        "@type": "City",
        "name": "Alger Centre"
      },
      {
        "@type": "Country",
        "name": "Algeria"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <Script
      id="local-business-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
