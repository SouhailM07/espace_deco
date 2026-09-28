export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "project-01",
    slug: "appartement-contemporain-alger",
    title: "Appartement contemporain",
    category: "residential",
    location: "Alger",
    description: "Un intérieur contemporain mêlant bois naturel, éclairage architectural, matières chaleureuses et mobilier sur mesure.",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "project-02",
    slug: "residence-moderne",
    title: "Résidence moderne",
    category: "residential",
    location: "Alger",
    description: "Une rénovation pensée autour de volumes lumineux, de lignes contemporaines et de finitions élégantes.",
    coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09c15faa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09c15faa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "project-03",
    slug: "espace-commercial",
    title: "Espace commercial",
    category: "commercial",
    location: "Alger",
    description: "Un espace professionnel conçu pour associer identité visuelle, fonctionnalité et expérience client.",
    coverImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "project-04",
    slug: "renovation-interieure",
    title: "Transformation intérieure",
    category: "renovation",
    location: "Alger",
    description: "Transformation complète d'un intérieur avec travail sur les volumes, les matériaux, la lumière et les finitions.",
    coverImage: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
  }
];

export const getFeaturedProjects = () => projects.slice(0, 4);
export const getAllProjects = () => projects;
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getProjectsByCategory = (category: string) => category === "all" ? projects : projects.filter((p) => p.category === category);
