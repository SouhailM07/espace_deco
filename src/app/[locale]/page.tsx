import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { DesignPhilosophy } from "@/components/home/DesignPhilosophy";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { ContactCTA } from "@/components/home/ContactCTA";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    alternates: {
      canonical: `/${resolvedParams.locale}`,
    }
  };
}

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <Intro />
      <FeaturedProjects />
      <ServicesPreview />
      <DesignPhilosophy />
      <BeforeAfter />
      <ContactCTA />
    </>
  );
}
