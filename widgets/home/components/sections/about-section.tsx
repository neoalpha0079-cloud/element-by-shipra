"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

interface AboutSectionProps {
  data?: {
    eyebrow?: string;
    title?: string;
    founderBio?: string;
    founderName?: string;
    founderTitle?: string;
    founderImage?: unknown;
    stats?: Array<{ value: string; label: string }>;
    pillars?: Array<{
      title: string;
      mobileTitle: string;
      description: string;
    }>;
  };
}

const fallbackStats = [
  { value: "10+", label: "YEARS OF EXPERIENCE" },
  { value: "500+", label: "PROJECTS COMPLETED" },
  { value: "100%", label: "CLIENT SATISFACTION" },
];

const fallbackPillars = [
  { title: "Creative\nDesigns", mobileTitle: "Creative Designs", description: "Thoughtful ideas that bring your vision to life." },
  { title: "Client\nFocused", mobileTitle: "Client Focused", description: "Your needs, lifestyle and aspirations are our priority." },
  { title: "Quality\nFirst", mobileTitle: "Quality First", description: "We use the best materials and ensure flawless execution." },
  { title: "Timely\nDelivery", mobileTitle: "Timely Delivery", description: "On-time completion without compromising on quality." },
  { title: "End-to-End\nSupport", mobileTitle: "End-to-End Support", description: "From concept to completion, we're with you at every step." },
];

const statIcons = [
  <svg key="s1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="size-6">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
  </svg>,
  <svg key="s2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="size-6">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M8 6h2m4 0h2M8 10h2m4 0h2M8 14h2m4 0h2M8 18h8" />
  </svg>,
  <svg key="s3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="size-6">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>,
];

const pillarIcons = [
  <svg key="pi1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-5">
    <path d="M9 18h6m-4 4h2M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z" />
  </svg>,
  <svg key="pi2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-5">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
  </svg>,
  <svg key="pi3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-5">
    <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
    <path d="M2 9h20M10 3l-4 6 6 12 6-12-4-6" />
  </svg>,
  <svg key="pi4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>,
  <svg key="pi5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
];

export function AboutSection({ data }: AboutSectionProps) {
  const stats = data?.stats?.length ? data.stats : fallbackStats;
  const pillars = data?.pillars?.length ? data.pillars : fallbackPillars;
  const founderImageSrc = data?.founderImage
    ? urlFor(data.founderImage).width(1200).quality(80).url()
    : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80";
  const founderImageMobileSrc = data?.founderImage
    ? urlFor(data.founderImage).width(1000).quality(80).url()
    : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80";

  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] pt-14 pb-20 font-sans selection:bg-[#c59a58]/20">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 min-h-[580px]">
          {/* Left Column: Typography & Bio */}
          <div className="lg:col-span-6 pt-4 lg:pt-8 z-10">
            <div className="inline-flex flex-col items-start">
              <span className="text-[11px] font-semibold tracking-[0.26em] uppercase text-[#B58544]">
                {data?.eyebrow ?? "About Shipra"}
              </span>
              <div className="mt-2 h-[1.5px] w-8 bg-[#C59A58]" />
            </div>

            <h2 className="mt-6 font-serif text-[42px] sm:text-[50px] lg:text-[54px] font-normal leading-[1.08] text-[#1A1816]">
              {(data?.title ?? "The Vision Behind Every Beautiful Space.").includes("Every Beautiful Space") ? (
                <>The Vision Behind <br /><span className="italic text-[#B58544]">Every Beautiful Space.</span></>
              ) : (
                data?.title ?? "The Vision Behind Every Beautiful Space."
              )}
            </h2>

            <p className="mt-6 text-[13.5px] leading-relaxed text-[#6E675E] max-w-lg">
              {data?.founderBio ?? "I'm Shipra, the founder and lead designer at Shipra Designs. With over 10 years of experience, I believe that great design goes beyond aesthetics—it's about creating spaces that truly feel like you."}
            </p>

            <div className="mt-7 flex flex-col items-start">
              <span className="font-serif italic text-[44px] text-[#B58544] leading-none select-none" style={{ fontFamily: "cursive, 'Playfair Display', serif" }}>
                {data?.founderName ?? "Shipra"}
              </span>
              <span className="mt-2 text-[9.5px] font-bold tracking-[0.24em] uppercase text-[#1A1816]">
                {data?.founderTitle ?? "Founder & Lead Designer"}
              </span>
            </div>

            {/* Stats Ribbon (Desktop) */}
            <div className="mt-12 hidden lg:flex items-center gap-6 border-t border-[#E8DFC8]/70 pt-6">
              {stats.map((stat, idx) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full border border-[#D5C6B0] bg-[#FAF6F0] text-[#B58544]">
                    {statIcons[idx]}
                  </div>
                  <div>
                    <span className="font-serif text-[22px] font-medium leading-none text-[#1A1816]">{stat.value}</span>
                    <p className="mt-0.5 text-[8px] font-bold tracking-[0.14em] text-[#7A7268] uppercase whitespace-nowrap">{stat.label}</p>
                  </div>
                  {idx !== stats.length - 1 && <div className="ml-4 h-7 w-px bg-[#E8DFC8]" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Arched Hero Frame (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 relative h-[560px] w-full">
            <div className="absolute top-0 right-0 h-full w-[540px] rounded-tl-[280px] rounded-bl-[280px] border-[1.5px] border-[#C59A58]/70 pointer-events-none" />
            <div className="absolute top-3 right-0 h-[calc(100%-24px)] w-[528px] rounded-tl-[268px] rounded-bl-[268px] border border-[#D9C4A1]/50 pointer-events-none" />
            <div className="absolute top-6 right-0 h-[calc(100%-48px)] w-[510px] overflow-hidden rounded-tl-[255px] rounded-bl-[255px] shadow-[0_20px_50px_rgba(40,25,10,0.08)]">
              <Image src={founderImageSrc} alt="Shipra - Founder & Lead Designer" fill priority className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden mt-6 space-y-6">
          <div className="grid grid-cols-3 divide-x divide-[#E8DFC8] border-y border-[#E8DFC8] py-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-1">
                <div className="text-[#B58544] mb-1.5">{statIcons[stats.indexOf(stat)]}</div>
                <span className="font-serif text-[19px] font-normal leading-none text-[#1A1816]">{stat.value}</span>
                <span className="mt-1 text-[7.5px] font-bold tracking-[0.1em] text-[#7A7268] uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[26px] border border-[#C59A58]/50 shadow-md">
            <Image src={founderImageMobileSrc} alt="Shipra - Founder & Lead Designer" fill priority className="object-cover object-top" />
          </div>
        </div>

        {/* BOTTOM 5-PILLAR CARD - Desktop */}
        <div className="mt-20 hidden lg:block relative">
          <div className="pointer-events-none absolute -bottom-4 -left-6 z-20 opacity-30 select-none">
            <svg width="100" height="150" viewBox="0 0 100 150" fill="none" stroke="#7A684D" strokeWidth="1.2">
              <path d="M10 145 C20 100 40 60 90 20" />
              <path d="M30 110 C15 95 18 80 40 85 C45 100 35 110 30 110 Z" />
              <path d="M50 75 C35 60 38 45 60 50 C65 65 55 75 50 75 Z" />
            </svg>
          </div>
          <div className="relative z-10 rounded-[28px] border border-[#E8DFC8] bg-[#FAF8F5]/90 backdrop-blur-md p-9 shadow-[0_20px_50px_rgba(40,25,10,0.04)]">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C59A58]/60 to-transparent" />
            <div className="grid grid-cols-5 divide-x divide-[#E8DFC8]/80">
              {pillars.map((pillar, idx) => (
                <div key={pillar.title} className="flex flex-col items-center px-6 text-center group">
                  <div className="flex size-14 items-center justify-center rounded-full border border-[#D5C6B0] bg-[#FAF6F0] text-[#B58544] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {pillarIcons[idx]}
                  </div>
                  <h3 className="mt-6 font-sans text-[15px] font-bold leading-snug text-[#1A1816] whitespace-pre-line min-h-[42px]">{pillar.title}</h3>
                  <div className="mt-2.5 h-[1.5px] w-5 bg-[#C59A58]" />
                  <p className="mt-3.5 text-[12px] leading-relaxed text-[#6E675E]">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto h-3 w-[92%] rounded-b-[20px] bg-[#E5DCD0]/70 border-x border-b border-[#D8C7B0]/60" />
        </div>

        {/* Mobile Stacked List */}
        <div className="mt-6 space-y-3 lg:hidden">
          {pillars.map((pillar, idx) => (
            <div key={pillar.title} className="flex items-center justify-between rounded-[16px] border border-[#E9E2D5] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.99]">
              <div className="flex items-center gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#D5C6B0] bg-[#FAF6F0] text-[#B58544]">
                  {pillarIcons[idx]}
                </div>
                <div>
                  <h4 className="font-sans text-[14px] font-bold text-[#1A1816]">{pillar.mobileTitle}</h4>
                  <p className="text-[11px] leading-tight text-[#6E675E] mt-0.5">{pillar.description}</p>
                </div>
              </div>
              <ChevronRight size={16} strokeWidth={1.5} className="text-[#B58544] shrink-0 ml-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
