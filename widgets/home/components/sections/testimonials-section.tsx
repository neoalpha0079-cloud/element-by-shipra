"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { urlFor } from "@/sanity/lib/image";

interface TestimonialsSectionProps {
  testimonials?: Array<{
    quote?: string;
    name?: string;
    role?: string;
    avatar?: unknown;
    projectImage?: unknown;
  }>;
  stats?: Array<{ value: string; label: string }>;
}

const fallbackTestimonials = [
  {
    quote: "Working with Shipra Designs was an absolute pleasure. They understood our vision perfectly and transformed our house into a home that reflects our personality and lifestyle. Every detail was thoughtfully planned and executed to perfection.",
    name: "Rohit & Neha Sharma",
    role: "RESIDENTIAL PROJECT",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    projectImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
  },
  {
    quote: "The dedication to timeline, immaculate material finishes, and flawless Vastu planning exceeded all our expectations. Our living spaces feel radiant, spacious, and truly elevated.",
    name: "Vikram & Ananya Patel",
    role: "LUXE VILLA PROJECT",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    projectImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    quote: "From turnkey execution to custom furniture selections, Shipra's team handled everything effortlessly. It was hands down the smoothest interior design journey we've ever had.",
    name: "Arjun & Priyanka Rao",
    role: "COMMERCIAL SUITE",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    projectImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
];

const fallbackStats = [
  { value: "200+", label: "Happy Clients" },
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Client Retention" },
  { value: "4.9/5", label: "Average Rating" },
];

export function TestimonialsSection({ testimonials: propTestimonials, stats: propStats }: TestimonialsSectionProps) {
  const testimonials = propTestimonials?.length
    ? propTestimonials.map((t, i) => ({
        quote: t.quote ?? fallbackTestimonials[i]?.quote ?? "",
        name: t.name ?? fallbackTestimonials[i]?.name ?? "",
        role: t.role ?? fallbackTestimonials[i]?.role ?? "",
        avatarSrc: t.avatar
          ? urlFor(t.avatar).width(200).quality(80).url()
          : fallbackTestimonials[i]?.avatar ?? "",
        projectImageSrc: t.projectImage
          ? urlFor(t.projectImage).width(900).quality(80).url()
          : fallbackTestimonials[i]?.projectImage ?? "",
      }))
    : fallbackTestimonials.map((t) => ({
        ...t,
        avatarSrc: t.avatar,
        projectImageSrc: t.projectImage,
      }));

  const stats = propStats?.length ? propStats : fallbackStats;

  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const goNext = () => setIndex((curr) => (curr + 1) % total);
  const goPrev = () => setIndex((curr) => (curr - 1 + total) % total);

  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] py-14 md:py-20 font-sans selection:bg-[#c59a58]/20">
      <div className="pointer-events-none absolute -bottom-6 -left-6 hidden lg:block opacity-60 select-none">
        <svg width="180" height="240" viewBox="0 0 180 240" fill="none">
          <path d="M10 230 C40 180 80 120 140 40" stroke="#7A684D" strokeWidth="1.5" />
          <path d="M50 170 C20 150 25 120 60 115 C75 140 65 165 50 170 Z" fill="#606E57" opacity="0.8" />
          <path d="M85 125 C60 100 68 75 100 70 C110 95 100 115 85 125 Z" fill="#75846B" opacity="0.8" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1420px] px-5 sm:px-8 lg:px-12 relative">
        {/* DESKTOP VERTICAL STRIP */}
        <div className="hidden xl:flex absolute left-4 top-24 -rotate-90 origin-top-left items-center gap-3 select-none">
          <span className="h-px w-8 bg-[#C59A58]" />
          <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#B58544]">REAL SPACES, REAL STORIES</span>
          <span className="size-1 rounded-full bg-[#B58544]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          <div className="lg:col-span-6 z-10 pt-2">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[11px] font-semibold tracking-[0.26em] uppercase text-[#B58544]">Testimonials</span>
              <div className="mt-2 h-[1.5px] w-8 bg-[#C59A58]" />
            </div>
            <h2 className="mt-5 font-serif text-[40px] sm:text-[48px] lg:text-[54px] font-normal leading-[1.08] text-[#1A1816] text-center md:text-left">
              Not Just Designed. <br />
              Deeply <span className="italic text-[#B58544]">Appreciated.</span>
            </h2>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#6E675E] text-center md:text-left max-w-md">
              Real stories from real clients who trusted us to turn their spaces into something extraordinary.
            </p>

            {/* Desktop 4-Column Stats */}
            <div className="mt-10 hidden lg:grid grid-cols-4 divide-x divide-[#E8DFC8]/80 max-w-lg">
              {stats.map((item) => (
                <div key={item.label} className="flex flex-col items-center px-3 text-center">
                  <div className="flex size-10 items-center justify-center rounded-full border border-[#D5C6B0] bg-[#FAF6F0] text-[#B58544] mb-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="size-5">
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
                    </svg>
                  </div>
                  <span className="font-serif text-[22px] font-normal leading-none text-[#1A1816]">{item.value}</span>
                  <span className="mt-1 text-[8.5px] font-medium tracking-[0.06em] text-[#7A7268] whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Arched Swoop Hero (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 relative h-[380px] w-full">
            <div className="absolute top-0 right-0 h-full w-[540px] rounded-tl-[240px] rounded-bl-[240px] border-[1.5px] border-[#C59A58]/70 pointer-events-none" />
            <div className="absolute top-2 right-0 h-[calc(100%-16px)] w-[528px] rounded-tl-[230px] rounded-bl-[230px] border border-[#D9C4A1]/50 pointer-events-none" />
            <div className="absolute top-4 right-0 h-[calc(100%-32px)] w-[515px] overflow-hidden rounded-tl-[220px] rounded-bl-[220px] shadow-lg">
              <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" alt="Luxury living room testimonial project" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* MOBILE STATS GRID */}
        <div className="lg:hidden mt-8 grid grid-cols-2 gap-3 p-4 rounded-[20px] border border-[#E8DFC8] bg-white/70">
          {stats.map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-2">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#D5C6B0] bg-[#FAF6F0] text-[#B58544]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="size-5">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-[18px] font-normal leading-none text-[#1A1816]">{item.value}</span>
                <p className="text-[8px] font-medium tracking-tight text-[#7A7268] uppercase">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TESTIMONIAL FEATURE CARD */}
        <div className="mt-14 relative">
          <div className="relative overflow-hidden rounded-[26px] border border-[#E8DFC8] bg-[#FAF8F5]/90 backdrop-blur-md p-8 md:p-12 shadow-[0_20px_50px_rgba(40,25,10,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <span className="font-serif text-[56px] text-[#B58544] leading-none select-none">&ldquo;</span>
                <blockquote className="mt-2 text-[14.5px] md:text-[15.5px] leading-relaxed text-[#4A453E] max-w-xl">
                  {current.quote}
                </blockquote>
                <div className="mt-8 flex flex-col">
                  <span className="font-sans text-[15px] font-bold text-[#1A1816]">{current.name}</span>
                  <span className="mt-1 text-[9px] font-bold tracking-[0.24em] uppercase text-[#B58544]">{current.role}</span>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <button type="button" onClick={goPrev} className="flex size-10 items-center justify-center rounded-full bg-[#322F2C] text-white shadow hover:bg-black transition-colors" aria-label="Previous">
                    <ArrowLeft size={15} />
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <span key={i} className={`size-2 rounded-full transition-all duration-300 ${i === index ? "bg-[#B58544] scale-125" : "bg-[#D5C8B4]"}`} />
                    ))}
                  </div>
                  <button type="button" onClick={goNext} className="flex size-10 items-center justify-center rounded-full bg-[#322F2C] text-white shadow hover:bg-black transition-colors" aria-label="Next">
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              <div className="hidden lg:flex lg:col-span-5 justify-end relative">
                <div className="absolute right-0 top-0 h-[290px] w-[220px] rounded-[18px] bg-[#E8DFC8]/50 border border-[#D5C6B0] rotate-2 pointer-events-none" />
                <div className="relative h-[310px] w-[260px] overflow-hidden rounded-[20px] border border-white/80 shadow-xl z-10">
                  <Image src={current.projectImageSrc} alt={current.name} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Author Row */}
        <div className="lg:hidden mt-4 flex items-center justify-between px-2">
          <button type="button" onClick={goPrev} className="flex size-9 items-center justify-center rounded-full border border-[#D5C8B4] bg-white text-[#7A7268] shadow-sm active:scale-95" aria-label="Previous">
            <ArrowLeft size={14} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <span key={i} className={`size-1.5 rounded-full ${i === index ? "bg-[#B58544]" : "bg-[#D5C8B4]"}`} />
            ))}
          </div>
          <button type="button" onClick={goNext} className="flex size-9 items-center justify-center rounded-full border border-[#D5C8B4] bg-white text-[#7A7268] shadow-sm active:scale-95" aria-label="Next">
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
