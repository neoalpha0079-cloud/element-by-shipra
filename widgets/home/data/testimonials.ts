export type Testimonial = {
  quote: string;
  name: string;
  projectType: string;
  location: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Shipra Designs turned our apartment into something we never imagined possible. Every corner feels considered — nothing was left to chance.",
    name: "Akanksha & Rohit Verma",
    projectType: "Apartment Interior",
    location: "Bilaspur",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
  },
  {
    quote:
      "The turnkey process meant we barely had to think. One team handled everything from the first sketch to the final painting — on budget and on time.",
    name: "Sandeep Agrawal",
    projectType: "Independent Residence",
    location: "Raipur",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    quote:
      "They understood our vastu requirements and still delivered a space that feels completely contemporary. A rare balance.",
    name: "Meera & Vikram Shukla",
    projectType: "Villa Interior",
    location: "Korba",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    quote:
      "Our clinic now feels calm, professional and welcoming. Clients comment on it constantly — the best compliment we could receive.",
    name: "Dr. Neha Tiwari",
    projectType: "Commercial Design",
    location: "Bilaspur",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
  },
  {
    quote:
      "From the mood boards to the final styling, the journey was effortless. The studio listened, then elevated our taste beyond what we asked for.",
    name: "Farhan & Zoya Qureshi",
    projectType: "Penthouse Interior",
    location: "Raipur",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
  },
];
