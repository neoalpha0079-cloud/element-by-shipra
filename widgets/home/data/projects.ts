export type Project = {
  name: string;
  type: string;
  location: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "The Ivory Residence",
    type: "Apartment Interior",
    location: "Bilaspur",
    description:
      "A serene three-bedroom apartment grounded in ivory tones, soft linen and warm oak — designed for slow, considered living.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Casa Taureana",
    type: "Villa Interior",
    location: "Raipur",
    description:
      "A villa reimagined with architectural curves, natural stone and layered lighting across two luminous levels.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "The Bronze House",
    type: "Independent Residence",
    location: "Korba",
    description:
      "Charcoal, bronze and champagne gold compose an understated residence with a sculptural double-height living space.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Forest Court",
    type: "Duplex Interior",
    location: "Bilaspur",
    description:
      "A grounded duplex where warm wood, deep greens and tactile fabrics bring a sense of calm to every corner.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Sunlit Loft",
    type: "Penthouse Interior",
    location: "Raipur",
    description:
      "A penthouse defined by light — open sightlines, polished concrete and furniture curated around the sunset view.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "The Atelier",
    type: "Commercial Studio",
    location: "Bilaspur",
    description:
      "A creative studio designed for clients — a calm, gallery-like shell that lets the work and the people shine.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  },
];
