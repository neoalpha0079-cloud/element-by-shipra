export type Service = {
  name: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    name: "Interior Design",
    description:
      "Complete spatial design for homes and offices — from concept and mood boards to furniture, fabric and final styling.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "External Elevation",
    description:
      "Architectural facades that balance proportion, material and light — a first impression designed to last.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Vastu Consultation",
    description:
      "Harmonious, vastu-aligned layouts that respect tradition without compromising on contemporary comfort.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Commercial Design",
    description:
      "Offices, retail and hospitality spaces that translate brand identity into immersive built environments.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Modular Furniture",
    description:
      "Bespoke modular kitchens, wardrobes and storage crafted to measure — precise, durable and quietly elegant.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
  },
];
