import { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: "Services de design intérieur & rénovation | Espace Deco",
    description: "Découvrez les services Espace Deco à Alger : aménagement intérieur, rénovation, faux plafonds, décoration, mobilier sur mesure et espaces commerciaux.",
    alternates: {
      canonical: `/${resolvedParams.locale}/services`,
    }
  };
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: "Accueil", url: "https://www.espacedeco.dz" },
          { name: "Services", url: "https://www.espacedeco.dz/services" }
        ]} 
      />
      {children}
    </>
  );
}
