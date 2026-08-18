"use client";

import { ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

interface ServicesSectionProps {
  data?: Array<{
    number?: string;
    title?: string;
    mobileTitle?: string;
    description?: string;
    image?: unknown;
  }>;
}

const serviceIcons = [
  <svg key="01" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
    <path d="M12 36V22a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v14" />
    <path d="M8 26h32v8a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-8Z" />
    <path d="M14 38v4m20-4v4M18 18V9m-3 0h6m15 0a3 3 0 0 0 3-3V5h-6v1a3 3 0 0 0 3 3Zm0 0v29" />
  </svg>,
  <svg key="02" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
    <path d="M10 40V18l14-10 14 10v22H10Z" />
    <path d="M20 40V28h8v12M18 20h2m8 0h2M18 24h2m8 0h2" />
  </svg>,
  <svg key="03" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
    <circle cx="24" cy="24" r="14" />
    <circle cx="24" cy="24" r="18" strokeDasharray="2 3" />
    <path d="M24 10v28M10 24h28M24 16l4 8-4 8-4-8 4-8Z" />
  </svg>,
  <svg key="04" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
    <rect x="8" y="24" width="32" height="4" rx="1" />
    <path d="M12 28v10m24-10v10M20 18a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v6h-8v-6ZM16 10l3-5h10l3 5H16Zm8-5V2" />
  </svg>,
  <svg key="05" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
    <rect x="10" y="8" width="28" height="32" rx="1" />
    <line x1="24" y1="8" x2="24" y2="40" />
    <line x1="10" y1="28" x2="38" y2="28" />
    <line x1="19" y1="18" x2="19" y2="22" />
    <line x1="29" y1="18" x2="29" y2="22" />
  </svg>,
];

const fallbackServices = [
  { number: "01", title: "INTERIOR DESIGN", mobileTitle: "Interior Design", description: "Beautiful interiors crafted around your lifestyle and personality.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80" },
  { number: "02", title: "EXTERNAL ELEVATION", mobileTitle: "External Elevation", description: "Striking exteriors that create a lasting impression and add true value.", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80" },
  { number: "03", title: "VASTU CONSULTATION", mobileTitle: "Vastu Consultation", description: "Balanced spaces that promote positivity, harmony and well-being.", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80" },
  { number: "04", title: "COMMERCIAL DESIGNING", mobileTitle: "Commercial Designing", description: "Functional and inspiring commercial spaces that elevate your brand.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80" },
  { number: "05", title: "MODULAR FURNITURE", mobileTitle: "Modular Furniture", description: "Custom modular solutions that combine style, smart storage and lasting quality.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80" },
];

export function ServicesSection({ data }: ServicesSectionProps) {
  const services = data?.length ? data.map((s, i) => ({
    number: s.number ?? fallbackServices[i]?.number ?? String(i + 1).padStart(2, "0"),
    title: s.title ?? fallbackServices[i]?.title ?? "",
    mobileTitle: s.mobileTitle ?? s.title ?? fallbackServices[i]?.mobileTitle ?? "",
    description: s.description ?? fallbackServices[i]?.description ?? "",
    image: s.image ? urlFor(s.image).width(900).quality(80).url() : fallbackServices[i]?.image ?? "",
  })) : fallbackServices;

  const heights = ["h-[330px]", "h-[395px]", "h-[480px]", "h-[395px]", "h-[330px]"];
  const clipPaths = [
    "polygon(0 32%, 100% 16%, 100% 100%, 0% 100%)",
    "polygon(0 16%, 100% 0%, 100% 100%, 0% 100%)",
    "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
    "polygon(0 0%, 100% 16%, 100% 100%, 0% 100%)",
    "polygon(0 16%, 100% 32%, 100% 100%, 0% 100%)",
  ];

  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] py-16 md:py-24 selection:bg-[#c59a58]/20 font-sans">
      <div className="pointer-events-none absolute -left-10 top-0 hidden lg:block opacity-40 select-none">
        <svg width="220" height="380" viewBox="0 0 220 380" fill="none" stroke="#C59A58" strokeWidth="1">
          <path d="M-40 280 C30 250 80 180 120 40" />
          <path d="M40 220 C20 190 25 160 55 150 C70 180 60 210 40 220 Z" />
          <path d="M75 165 C55 140 60 110 90 100 C105 130 95 155 75 165 Z" />
          <path d="M105 110 C85 90 95 65 125 60 C135 90 125 105 105 110 Z" />
          <path d="M120 40 C140 20 170 30 160 55 C140 60 130 50 120 40 Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-[#C59A58]" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B58544]">Our Services</span>
            <span className="h-px w-6 bg-[#C59A58]" />
          </div>
          <h2 className="mt-4 font-serif text-[42px] font-normal leading-tight tracking-tight text-[#1A1816] md:text-[54px]">
            Designing Spaces.
          </h2>
          <p className="font-serif italic text-[38px] leading-tight text-[#B58544] md:text-[50px] -mt-1">
            Elevating Experiences.
          </p>
          <div className="mx-auto mt-4 h-px w-10 bg-[#C59A58]/80" />
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-[#6E675E] sm:text-[14px]">
            End-to-end services that blend aesthetics, functionality and timeless elegance.
          </p>
        </div>

        {/* DESKTOP VIEW */}
        <div className="mt-20 hidden lg:grid lg:grid-cols-5 relative">
          <div className="absolute top-0 inset-x-0 h-0.5 z-20 pointer-events-none clip-service-contour" />
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group flex flex-col justify-between relative ${
                index !== services.length - 1 ? "border-r border-[#E8DFC8]/70" : ""
              }`}
            >
              <div className="px-6 pb-6 text-left flex flex-col">
                <span className="font-serif text-[28px] leading-none text-[#B58544]">{service.number}</span>
                <h3 className="mt-3 text-[12px] font-bold tracking-[0.14em] text-[#1E1B18] uppercase min-h-[32px] leading-snug">
                  {service.title}
                </h3>
                <div className="mt-2.5 h-[1.5px] w-6 bg-[#C59A58]" />
              </div>
              <div className="relative w-full flex items-end justify-center">
                <div className={`relative w-full overflow-hidden ${heights[index]}`} style={{ clipPath: clipPaths[index] }}>
                  <Image src={service.image} alt={service.title} fill sizes="20vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
              <div className="flex flex-col items-center px-6 pt-7 pb-4 text-center">
                <div className="text-[#B58544] mb-4 transition-transform duration-300 group-hover:-translate-y-0.5">
                  {serviceIcons[index]}
                </div>
                <p className="text-[12px] leading-relaxed text-[#6E675E] min-h-[50px] max-w-[190px]">
                  {service.description}
                </p>
                <div className="mt-4 h-[1.5px] w-6 bg-[#C59A58]" />
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="mt-10 lg:hidden space-y-3.5">
          {services.map((service) => (
            <div key={service.number} className="group relative flex h-[105px] items-stretch justify-between overflow-hidden rounded-[14px] border border-[#E9E2D5] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.99]">
              <div className="flex flex-1 flex-col justify-center pl-6 pr-2 z-10">
                <span className="font-serif text-[17px] leading-none text-[#B58544]">{service.number}</span>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="font-serif text-[16px] font-normal text-[#1E1B18]">{service.mobileTitle}</h3>
                  <ChevronRight size={16} strokeWidth={1.5} className="text-[#B58544] mr-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="relative w-[38%] min-w-[135px] h-full clip-service-mobile">
                <Image src={service.image} alt={service.title} fill sizes="40vw" className="object-cover" />
              </div>
            </div>
          ))}

          <div className="relative mt-4 flex items-center justify-between overflow-hidden rounded-[14px] bg-[#EFE8DC]/80 px-6 py-5 border border-[#E4D9C8]">
            <div className="pointer-events-none absolute -left-4 -bottom-4 opacity-25">
              <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="#B58544" strokeWidth="1.2">
                <path d="M0 100 C30 80 50 50 80 10" />
                <path d="M30 75 C15 65 20 50 35 45 C45 60 40 70 30 75 Z" />
                <path d="M50 55 C35 45 40 30 55 25 C65 40 60 50 50 55 Z" />
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-[12px] text-[#786E64]">Have a project in mind?</p>
              <h4 className="mt-0.5 font-serif text-[19px] text-[#B58544]">Let&apos;s Create Together</h4>
            </div>
            <div className="relative z-10 flex size-9 items-center justify-center rounded-full border border-[#B58544]/60 text-[#B58544]">
              <ArrowRight size={15} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
