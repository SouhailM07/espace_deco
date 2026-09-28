import { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: "À propos d'Espace Deco | Design intérieur à Alger",
    description: "Découvrez Espace Deco, spécialiste de l'aménagement, de la rénovation et du design intérieur à Alger.",
    alternates: {
      canonical: `/${resolvedParams.locale}/a-propos`,
    }
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: "Accueil", url: "https://www.espacedeco.dz" },
          { name: "À propos", url: "https://www.espacedeco.dz/a-propos" }
        ]} 
      />
      {children}
    </>
  );
}
