import { IconType } from "react-icons";
import { 
  RiHome6Line, 
  RiHammerLine, 
  RiLayout5Line, 
  RiPaintBrushLine, 
  RiTableLine, 
  RiStoreLine 
} from "react-icons/ri";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

export const services: Service[] = [
  {
    id: "amenagement",
    title: "Aménagement intérieur",
    description: "Conception d'espaces harmonieux, élégants et fonctionnels.",
    icon: RiHome6Line,
  },
  {
    id: "renovation",
    title: "Rénovation",
    description: "Transformation complète de vos espaces avec une attention particulière portée aux finitions.",
    icon: RiHammerLine,
  },
  {
    id: "plafonds",
    title: "Faux plafonds & Placo",
    description: "Création de volumes, lignes architecturales et solutions d'éclairage contemporaines.",
    icon: RiLayout5Line,
  },
  {
    id: "peinture",
    title: "Peinture décorative",
    description: "Finitions décoratives et ambiances personnalisées adaptées à chaque intérieur.",
    icon: RiPaintBrushLine,
  },
  {
    id: "mobilier",
    title: "Mobilier sur mesure",
    description: "Des éléments conçus pour s'intégrer parfaitement aux dimensions et au style de votre espace.",
    icon: RiTableLine,
  },
  {
    id: "commercial",
    title: "Aménagement commercial",
    description: "Des espaces professionnels conçus pour valoriser votre activité et votre identité.",
    icon: RiStoreLine,
  }
];
