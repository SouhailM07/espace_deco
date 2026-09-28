import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { DesignPhilosophy } from "@/components/home/DesignPhilosophy";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
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
