export const siteConfig = {
  name: "SHIPRA DESIGNS",
  shortName: "Shipra",
  tagline: "Interior Design Studio",
  description:
    "Thoughtful design. Flawless execution. Interiors that elevate everyday living.",
  phone: "+91 98765 43210",
  email: "elementsbyshipra@gmail.com",
  address: "Ambikapur, Chhattisgarh, India",
  heroStatement: "We don't just design spaces, we craft experiences.",
  heroSupport:
    "Thoughtful design. Flawless execution. Interiors that elevate everyday living.",
  brandStatement:
    "Thoughtful design. Timeless spaces. Made for the way you live.",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  pinterest: "https://pinterest.com",
} as const;
