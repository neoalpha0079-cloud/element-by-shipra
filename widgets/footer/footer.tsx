import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { FacebookIcon, InstagramIcon, PinterestIcon } from "@/assets/icons";
import { mainNav, siteConfig, socialLinks } from "@/config/site";
import { LogoMark } from "@/shared/components/ui/logo";

interface FooterProps {
  siteSettings?: {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
    brandStatement?: string;
    socialLinks?: {
      instagram?: string;
      facebook?: string;
      pinterest?: string;
    };
  };
}

const footerNav = (mainNav ?? []).filter((item) => item.href !== "/");
const footerServices = [
  "Interior Design",
  "External Elevation",
  "Vastu Consultation",
  "Commercial Design",
  "Modular Furniture",
];

export default function Footer({ siteSettings }: FooterProps) {
  const year = new Date().getFullYear();

  const phone = siteSettings?.phone ?? siteConfig.phone;
  const email = siteSettings?.email ?? siteConfig.email;
  const address = siteSettings?.address ?? siteConfig.address;
  const brandStatement =
    siteSettings?.brandStatement ?? siteConfig.brandStatement;
  const social = siteSettings?.socialLinks ?? socialLinks;

  return (
    <footer className="relative border-t border-[#3d342f] bg-[#1a1715] text-[#fcfaf7]">
      {/* Top Gold Accent Line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c99655]/60 to-transparent"
      />

      <div className="site-container pt-16 pb-8 md:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-8">
          {/* ================= COL 1: LOGO & ABOUT ================= */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <img src="/icon.png" className="size-10" />
                <span className="flex flex-col leading-none">
                  <span className="font-serif text-xl font-medium tracking-[0.18em] text-[#fcfaf7]">
                    SHIPRA
                  </span>
                  <span className="mt-1 text-[0.62rem] font-medium tracking-[0.42em] uppercase text-[#c99655]">
                    Designs
                  </span>
                </span>
              </Link>

              <p className="mt-5 text-sm leading-6 max-w-sm text-[#c5beba]">
                {brandStatement}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {social?.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full border border-[#4a3f38] text-[#c5beba] transition-colors hover:border-[#c99655] hover:text-[#c99655]"
                >
                  <InstagramIcon className="size-4" />
                </a>
              )}
              {social?.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex size-9 items-center justify-center rounded-full border border-[#4a3f38] text-[#c5beba] transition-colors hover:border-[#c99655] hover:text-[#c99655]"
                >
                  <FacebookIcon className="size-4" />
                </a>
              )}
              {social?.pinterest && (
                <a
                  href={social.pinterest}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest"
                  className="flex size-9 items-center justify-center rounded-full border border-[#4a3f38] text-[#c5beba] transition-colors hover:border-[#c99655] hover:text-[#c99655]"
                >
                  <PinterestIcon className="size-4" />
                </a>
              )}
            </div>
          </div>

          {/* ================= COL 2: EXPLORE ================= */}
          <FooterColumn title="Explore">
            <ul className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between text-sm text-[#c5beba] transition-colors hover:text-[#c99655]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#c99655]" />
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* ================= COL 3: SERVICES ================= */}
          <FooterColumn title="Services">
            <ul className="flex flex-col gap-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-[#c5beba] transition-colors hover:text-[#c99655]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* ================= COL 4: CONTACT & CTA ================= */}
          <FooterColumn title="Studio Inquiries">
            <ul className="flex flex-col gap-3.5 text-sm text-[#c5beba]">
              {phone && (
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 text-[#c99655] shrink-0" />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-[#c99655]"
                  >
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li className="flex items-center gap-2.5">
                  <Mail className="size-4 text-[#c99655] shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="transition-colors hover:text-[#c99655] truncate"
                  >
                    {email}
                  </a>
                </li>
              )}
              {address && (
                <li className="flex items-start gap-2.5">
                  <MapPin className="size-4 text-[#c99655] shrink-0 mt-0.5" />
                  <span className="text-[#c5beba]">{address}</span>
                </li>
              )}
            </ul>

            <Link
              href="#contact"
              className="mt-5 inline-flex h-10 w-full items-center justify-between border border-[#c99655]/40 px-5 text-xs font-medium tracking-[0.1em] uppercase text-[#c99655] transition-colors hover:border-[#c99655] hover:bg-[#c99655] hover:text-[#1a1715] rounded-sm"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </FooterColumn>
        </div>

        <div className="mt-14 h-px w-full bg-[#3d342f] md:mt-18" />

        {/* ================= BOTTOM COPYRIGHT BAR ================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#968d87]">
          <p>
            Copyright © {year} {siteSettings?.name ?? siteConfig.name} |{" "}
            {siteConfig.tagline} | All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#contact"
              className="transition-colors hover:text-[#c99655]"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="#contact"
              className="transition-colors hover:text-[#c99655]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h5 className="text-[0.7rem] font-medium tracking-[0.3em] uppercase text-[#fcfaf7]">
        {title}
      </h5>
      {children}
    </div>
  );
}
