import { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: "Réalisations de design intérieur à Alger | Espace Deco",
    description: "Découvrez les réalisations Espace Deco : appartements, maisons, commerces et projets de rénovation à Alger.",
    alternates: {
      canonical: `/${resolvedParams.locale}/realisations`,
    }
  };
}

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: "Accueil", url: "https://www.espacedeco.dz" },
          { name: "Réalisations", url: "https://www.espacedeco.dz/realisations" }
        ]} 
      />
      {children}
    </>
  );
}
