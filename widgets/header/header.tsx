"use client";

import { clsx } from "clsx";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { DesktopNav } from "@/widgets/header/desktop-nav";
import { MobileNav } from "@/widgets/header/mobile-nav";

interface HeaderProps {
  siteSettings?: {
    name?: string;
    phone?: string;
  };
}

export default function Header({ siteSettings }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const phone = siteSettings?.phone ?? siteConfig.phone;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-[#0b0b0a]/95 backdrop-blur-md" : "bg-transparent",
        ].join(" ")}
      >
        <div className="px-6 md:px-8 lg:px-12 xl:px-[50px]">
          <div className="flex h-[88px] items-center lg:h-[105px]">
            {/* Logo */}
            <Link
              href="/"
              className="group relative z-10 w-[190px] shrink-0 text-white"
            >
              <div className="font-serif text-[25px] leading-none tracking-[0.02em]">
                ELEMENTS
              </div>

              <div className="hero-header-script mt-[3px] text-[20px] leading-none text-[#c99655]">
                by Shipra
              </div>

              <div className="mt-[9px] text-[7px] font-medium tracking-[0.28em] text-white/80 uppercase">
                Interior Design Studio
              </div>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Right Side Controls */}
            <div className="ml-auto flex items-center gap-3 md:gap-4">
              {/* Consultation - Desktop Only */}
              <Link
                href="#contact"
                className="hidden h-[42px] items-center gap-3 rounded-[8px] bg-[#ead8bd] px-5 text-[11px] font-medium text-[#171411] transition-colors hover:bg-[#f2e5d1] lg:flex"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="size-[16px]" strokeWidth={1.5} />
              </Link>

              {/* Phone Icon - Always Visible (Desktop & Mobile) */}
              <a
                href={`tel:${String(phone).replace(/\s/g, "")}`}
                aria-label="Call Us"
                className="flex size-[40px] lg:size-[42px] items-center justify-center rounded-full border border-[#b8874c]/80 text-[#c99655] transition-all duration-300 hover:bg-[#b8874c] hover:text-[#0b0b0a]"
              >
                <Phone className="size-[17px] lg:size-[18px]" strokeWidth={1.5} />
              </a>

              {/* Mobile Hamburger / Cross Toggle Button - Visible ONLY on Small Devices (lg:hidden) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className={clsx(
                  "relative z-[60] flex size-[40px] items-center justify-center rounded-full border border-[#b8874c]/80 text-white transition-all duration-300 hover:bg-[#b8874c] hover:text-[#0b0b0a] lg:hidden"
                )}
              >
                {mobileMenuOpen ? (
                  <X className="size-[20px]" strokeWidth={1.3} />
                ) : (
                  <Menu className="size-[20px]" strokeWidth={1.3} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-in Navigation */}
        <MobileNav
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          phone={phone}
        />
      </header>

      <style jsx>{`
        .hero-header-script {
          font-family:
            "Brittany Signature",
            "Allura",
            "Brush Script MT",
            cursive;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}
