import { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: "Contact | Espace Deco Alger",
    description: "Contactez Espace Deco pour discuter de votre projet d'aménagement, rénovation ou design intérieur à Alger.",
    alternates: {
      canonical: `/${resolvedParams.locale}/contact`,
    }
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: "Accueil", url: "https://www.espacedeco.dz" },
          { name: "Contact", url: "https://www.espacedeco.dz/contact" }
        ]} 
      />
      {children}
    </>
  );
}
