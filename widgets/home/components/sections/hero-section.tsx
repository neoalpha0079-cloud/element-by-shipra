"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

interface HeroSectionProps {
  data?: {
    eyebrow?: string;
    headline?: string;
    scriptText?: string;
    description?: string;
    ctaText?: string;
    image?: unknown;
  };
}

const fallback = {
  eyebrow: "SPACES THAT REFLECT YOU",
  headline: "We don't just\ndesign spaces,",
  scriptText: "we craft experiences.",
  description:
    "Thoughtful design. Flawless execution.\nInteriors that elevate everyday living.",
  ctaText: "Watch Studio Showreel",
  imageUrl:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90",
};

export function HeroSection({ data }: HeroSectionProps) {
  const eyebrow = data?.eyebrow ?? fallback.eyebrow;
  const headlineParts = (data?.headline ?? fallback.headline).split("\n");
  const scriptText = data?.scriptText ?? fallback.scriptText;
  const description = (data?.description ?? fallback.description).split("\n");
  const ctaText = data?.ctaText ?? fallback.ctaText;
  const imageSrc = data?.image
    ? urlFor(data.image).width(1800).quality(90).url()
    : fallback.imageUrl;

  return (
    <section className="overflow-hidden bg-[#0b0b0a]">
      <div className="relative h-[650px] lg:h-[650px] xl:h-[680px]">
        {/* Interior image */}
        <div className="absolute inset-y-0 right-0 w-[67%]">
          <Image
            src={imageSrc}
            alt="Luxury living room interior"
            fill
            priority
            sizes="67vw"
            className="object-cover object-center"
          />
        </div>

        {/* Dark curved mask */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 z-10 w-[67%] bg-[#0b0b0a] clip-hero-mask"
        />

        {/* Gold edge on curved mask */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-[11] w-[67%] clip-hero-mask-border"
        />

        {/* Image subtle overlay */}
        <div className="absolute inset-y-0 right-0 z-[2] w-[67%] bg-gradient-to-r from-black/10 via-transparent to-black/20" />

        {/* HERO CONTENT */}
        <div className="relative z-20 h-full px-12 xl:px-[51px]">
          <div className="pt-[175px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.04em] text-[#c99655]">
              <span>{eyebrow}</span>
              <span className="h-px w-9 bg-[#c99655]/70" />
            </div>

            {/* Heading */}
            <h1 className="mt-7 max-w-[450px] font-serif text-[48px] font-normal leading-[1.17] tracking-[-0.025em] xl:text-[50px]">
              {headlineParts.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlineParts.length - 1 && <br />}
                </span>
              ))}
              <br />
              <span className="hero-script inline-block text-[47px] leading-[1.05] text-[#c99655]">
                {scriptText}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[365px] text-[14px] font-light leading-[1.8] text-white/90">
              {description.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < description.length - 1 && <br />}
                </span>
              ))}
            </p>

            {/* Showreel */}
            <Link
              href="#transformation"
              className="group mt-7 inline-flex items-center gap-4"
            >
              <span className="flex size-[54px] items-center justify-center rounded-full border border-[#b8874c] text-[#d19a59] transition-colors group-hover:bg-[#b8874c] group-hover:text-black">
                <Play
                  className="ml-[2px] size-[17px] fill-current"
                  strokeWidth={1}
                />
              </span>

              <span className="text-[12px] font-medium text-white">
                {ctaText}
              </span>
            </Link>
          </div>
        </div>

        {/* SLIDE INDICATOR */}
        <div className="absolute bottom-[50px] left-[125px] z-20 flex items-center gap-4">
          <span className="text-[13px] text-white">01</span>
          <span className="relative h-px w-[70px] bg-[#b8874c]/50">
            <span className="absolute left-0 top-0 h-px w-[22px] bg-white" />
          </span>
          <span className="text-[11px] text-white/90">03</span>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-0 left-[37px] z-20 flex flex-col items-center gap-2">
          <span className="rotate-180 text-[7px] tracking-[0.15em] text-white [writing-mode:vertical-rl]">
            SCROLL
          </span>
          <span className="h-[48px] w-px bg-white/40" />
          <span className="flex size-[18px] items-center justify-center rounded-full border border-[#b8874c] text-[#b8874c]">
            <span className="text-[11px]">⌄</span>
          </span>
        </div>
      </div>

      <style jsx>{`
        .hero-script {
          font-family:
            "Brittany Signature",
            "Allura",
            "Brush Script MT",
            cursive;
          font-weight: 400;
        }
      `}</style>
    </section>
  );
}
