import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  
  if (!project) {
    return {};
  }
  
  const td = await getTranslations("projects_data");

  return {
    title: `${td(`${project.id}.title`)} | Réalisations Espace Deco`,
    description: td(`${project.id}.description`),
    alternates: {
      canonical: `/${resolvedParams.locale}/realisations/${project.slug}`,
    },
    openGraph: {
      images: [project.coverImage],
    }
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations("project_detail");
  const tp = await getTranslations("projects_page");
  const td = await getTranslations("projects_data");

  return (
    <div className="bg-warm-ivory min-h-screen">
      <BreadcrumbJsonLd 
        items={[
          { name: "Accueil", url: "https://www.espacedeco.dz" },
          { name: "Réalisations", url: "https://www.espacedeco.dz/realisations" },
          { name: td(`${project.id}.title`), url: `https://www.espacedeco.dz/realisations/${project.slug}` }
        ]} 
      />
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full mt-20">
        <Image
          src={project.coverImage}
          alt={td(`${project.id}.title`)}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep-brown/30" />
      </section>

      {/* Metadata & Description */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <header className="mb-16">
              <div className="flex items-center gap-4 mb-6 text-sm font-medium uppercase tracking-wider text-taupe">
                <span>{tp(`categories.${project.category}`)}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
                <span>{td(`${project.id}.location`)}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-brown mb-8">{td(`${project.id}.title`)}</h1>
              <p className="text-xl text-warm-brown leading-relaxed font-light">
                {td(`${project.id}.description`)}
              </p>
            </header>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {project.images.map((img, index) => (
              <div 
                key={index} 
                className={`relative aspect-[4/5] ${index === 0 ? 'md:col-span-2 aspect-[16/9]' : ''}`}
              >
                <Image
                  src={img}
                  alt={`${td(`${project.id}.title`)} image ${index + 1}`}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-soft-cream text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-brown mb-8">
            {t("cta_title")}
          </h2>
          <Button asChild size="lg">
            <Link href="/contact">{t("cta_button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
