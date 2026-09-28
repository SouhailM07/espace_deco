import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import { Button } from "@/components/ui/Button";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-warm-ivory min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full mt-20">
        <Image
          src={project.coverImage}
          alt={project.title}
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
                <span>{project.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
                <span>{project.location}</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl text-deep-brown mb-8">{project.title}</h1>
              <p className="text-xl text-warm-brown leading-relaxed font-light">
                {project.description}
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
                  alt={`${project.title} image ${index + 1}`}
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
            Vous avez un projet similaire ?
          </h2>
          <Button asChild size="lg">
            <Link href="/contact">Parlons de votre projet</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
