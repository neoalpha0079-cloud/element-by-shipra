"use client";

import { ArrowLeft, ArrowRight, Armchair, Compass, Layers } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { urlFor } from "@/sanity/lib/image";

interface ProjectsSectionProps {
  data?: Array<{
    number?: string;
    name?: string;
    tagline?: string;
    description?: string;
    image?: unknown;
    tags?: Array<{ label: string }>;
  }>;
}

const fallbackProjects = [
  { number: "01", name: "Urban Harmony Residence", tagline: "FEATURED PROJECT", description: "A seamless blend of modern aesthetics and natural warmth, crafted for contemporary living.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80", tags: [{ label: "Interior Design" }, { label: "Vastu Compliant" }, { label: "Custom Furniture" }] },
  { number: "02", name: "Modern Luxe Villa", tagline: "FEATURED PROJECT", description: "Expansive luxury villa balancing grand open-plan layouts with bespoke ambient finishes.", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80", tags: [{ label: "Exterior Elevation" }, { label: "Vastu Compliant" }, { label: "Custom Lighting" }] },
  { number: "03", name: "Serene Retreat Home", tagline: "FEATURED PROJECT", description: "Calm, earthy tones and minimalist spatial planning promoting peace and holistic balance.", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80", tags: [{ label: "Interior Architecture" }, { label: "Vastu Compliant" }, { label: "Modular Woodwork" }] },
  { number: "04", name: "Timeless Penthouse", tagline: "FEATURED PROJECT", description: "Sophisticated high-rise residence crafted with marble accents, custom joinery, and panoramic views.", image: "https://images.unsplash.com/photo-1502005229762-ee152da915ba?auto=format&fit=crop&w=1400&q=80", tags: [{ label: "Penthouse Design" }, { label: "Vastu Compliant" }, { label: "Custom Furniture" }] },
  { number: "05", name: "Elegant Workspace", tagline: "FEATURED PROJECT", description: "Inspiring boutique executive office environment pairing functional minimalism with timeless luxury.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80", tags: [{ label: "Commercial Interiors" }, { label: "Ergonomic Setup" }, { label: "Bespoke Partitions" }] },
  { number: "06", name: "Minimal Residence", tagline: "FEATURED PROJECT", description: "A celebration of subtle texture, hidden storage solutions, and serene natural lighting.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80", tags: [{ label: "Interior Styling" }, { label: "Vastu Compliant" }, { label: "Smart Living" }] },
];

export function ProjectsSection({ data }: ProjectsSectionProps) {
  const projects = data?.length ? data.map((p, i) => ({
    number: p.number ?? fallbackProjects[i]?.number ?? String(i + 1).padStart(2, "0"),
    name: p.name ?? fallbackProjects[i]?.name ?? "",
    tagline: p.tagline ?? fallbackProjects[i]?.tagline ?? "FEATURED PROJECT",
    description: p.description ?? fallbackProjects[i]?.description ?? "",
    image: p.image ? urlFor(p.image).width(1400).quality(80).url() : fallbackProjects[i]?.image ?? "",
    tags: p.tags?.length ? p.tags : fallbackProjects[i]?.tags ?? [],
  })) : fallbackProjects;

  const [index, setIndex] = useState(0);
  const total = projects.length;
  const project = projects[index];

  const goNext = () => setIndex((curr) => (curr + 1) % total);
  const goPrev = () => setIndex((curr) => (curr - 1 + total) % total);

  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] py-14 md:py-20 font-sans selection:bg-[#c59a58]/20">
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="curvedProjectMask" clipPathUnits="objectBoundingBox">
            <path d="M 0.28,0.38 C 0.48,0.12 0.72,0.02 0.94,0.03 C 0.98,0.03 1,0.08 1,0.15 L 1,0.85 C 1,0.95 0.95,1 0.88,1 C 0.65,1 0.45,0.92 0.25,0.72 C 0.08,0.55 0.12,0.5 0.28,0.38 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-center gap-3">
            <span className="h-px w-6 bg-[#C59A58]" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B58544]">Our Selected Projects</span>
            <span className="h-px w-6 bg-[#C59A58]" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="font-serif text-[42px] font-normal leading-tight tracking-tight text-[#1A1816] md:text-[54px]">Built to Inspire.</h2>
            <p className="font-serif italic text-[38px] leading-tight text-[#B58544] md:text-[50px] -mt-1">Designed to Last.</p>
            <div className="mx-auto mt-4 h-px w-10 bg-[#C59A58]/80 md:hidden" />
            <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-[#6E675E] sm:text-[14px]">
              Every project is a reflection of our passion for detail, balance and timeless design.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Mobile Only: Big Curved Image Preview */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] max-w-[420px]">
              <div className="absolute inset-0 -m-1.5 rounded-[42px] rounded-tl-[120px] rounded-br-[100px] border border-[#D9C4A1]/60 -rotate-1 pointer-events-none" />
              <div className="relative w-full h-full overflow-hidden rounded-[38px] rounded-tl-[110px] rounded-br-[90px] border border-[#C59A58]/40 shadow-[0_12px_36px_rgba(40,25,10,0.08)]">
                <Image src={project.image} alt={project.name} fill priority className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="absolute bottom-3 right-4 flex items-center gap-2">
                <div className="flex h-9 items-center justify-center rounded-full bg-white/95 px-4 shadow-md backdrop-blur">
                  <span className="font-serif text-[14px] font-medium text-[#1A1816]">{project.number}</span>
                  <span className="mx-1 text-[11px] text-[#A29788]">/ {String(total).padStart(2, "0")}</span>
                </div>
                <button type="button" onClick={goPrev} className="flex size-9 items-center justify-center rounded-full bg-[#322F2C] text-white shadow hover:bg-black transition-colors" aria-label="Previous">
                  <ArrowLeft size={13} />
                </button>
                <button type="button" onClick={goNext} className="flex size-9 items-center justify-center rounded-full bg-[#B58544] text-white shadow hover:bg-[#9E7134] transition-colors" aria-label="Next">
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Left Project Details */}
          <div className="lg:col-span-4 z-10">
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#B58544]">{project.tagline}</span>
            <h3 className="mt-3 font-serif text-[28px] font-normal leading-snug text-[#1A1816] md:text-[34px]">{project.name}</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-[#6E675E] max-w-sm">{project.description}</p>
            <div className="mt-6 space-y-3">
              {project.tags.map((tag) => (
                <div key={tag.label} className="flex items-center gap-3 text-[#B58544]">
                  <div className="flex size-6 items-center justify-center">
                    <Armchair size={18} strokeWidth={1.3} />
                  </div>
                  <span className="text-[13px] font-normal text-[#4A453E]">{tag.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <span className="text-[13px] font-medium text-[#1A1816]">View Project</span>
              <button type="button" className="flex size-8 items-center justify-center rounded-full bg-[#B58544] text-white transition-transform duration-300 hover:scale-105 hover:bg-[#9E7134]" aria-label="View project details">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Desktop Right: Grand Organic Curved Hero Image */}
          <div className="hidden lg:col-span-8 lg:block relative pl-6">
            <div className="relative w-full h-[540px] flex items-center justify-center">
              <div className="absolute inset-0 -left-4 -top-2 rounded-[50px] rounded-tl-[240px] rounded-br-[180px] border border-[#D9C4A1]/70 pointer-events-none -rotate-1" />
              <div className="absolute inset-0 left-2 top-2 rounded-[50px] rounded-tl-[240px] rounded-br-[180px] bg-gradient-to-tr from-[#D7B789]/20 to-transparent pointer-events-none" />
              <div className="relative w-full h-full overflow-hidden rounded-[46px] rounded-tl-[230px] rounded-br-[160px] border border-[#C59A58]/50 shadow-[0_20px_50px_rgba(40,25,10,0.07)]">
                <Image src={project.image} alt={project.name} fill priority className="object-cover transition-transform duration-1000 ease-out hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute bottom-6 right-10 flex items-center gap-2.5 z-20">
                <div className="flex h-11 items-center justify-center rounded-full bg-white/95 px-6 shadow-lg backdrop-blur">
                  <span className="font-serif text-[17px] font-normal text-[#1A1816]">{project.number}</span>
                  <span className="mx-1 text-[13px] text-[#A29788]">/ {String(total).padStart(2, "0")}</span>
                </div>
                <button type="button" onClick={goPrev} className="flex size-11 items-center justify-center rounded-full bg-[#322F2C] text-white shadow-lg transition-all duration-300 hover:bg-black active:scale-95" aria-label="Previous Project">
                  <ArrowLeft size={16} strokeWidth={1.75} />
                </button>
                <button type="button" onClick={goNext} className="flex size-11 items-center justify-center rounded-full bg-[#B58544] text-white shadow-lg transition-all duration-300 hover:bg-[#9E7134] active:scale-95" aria-label="Next Project">
                  <ArrowRight size={16} strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TIMELINE PAGINATION - Desktop */}
        <div className="mt-16 hidden lg:block">
          <div className="grid grid-cols-6 gap-4">
            {projects.map((item, i) => {
              const isActive = i === index;
              return (
                <button type="button" key={item.number} onClick={() => setIndex(i)} className="text-left group transition-all">
                  <span className={`font-serif text-[24px] transition-colors ${isActive ? "text-[#B58544]" : "text-[#1A1816]/70 group-hover:text-[#1A1816]"}`}>{item.number}</span>
                  <h4 className="mt-1 text-[12px] font-medium leading-tight text-[#1A1816]">{item.name}</h4>
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button type="button" onClick={goPrev} className="flex size-8 items-center justify-center rounded-full border border-[#D5C8B4] text-[#7C7368] hover:border-[#B58544] hover:text-[#B58544] transition-colors">
              <ArrowLeft size={13} />
            </button>
            <div className="relative flex-1 h-[1.5px] bg-[#E5DCD0]">
              <div className="absolute top-0 h-full bg-[#B58544] transition-all duration-500" style={{ width: `${((index + 1) / total) * 100}%` }} />
              <div className="absolute inset-0 flex justify-between items-center -top-[3px]">
                {projects.map((_, i) => (
                  <span key={i} className={`size-2 rounded-full transition-colors ${i <= index ? "bg-[#B58544]" : "bg-[#D5C8B4]"}`} />
                ))}
              </div>
            </div>
            <button type="button" onClick={goNext} className="flex size-8 items-center justify-center rounded-full border border-[#D5C8B4] text-[#7C7368] hover:border-[#B58544] hover:text-[#B58544] transition-colors">
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Mobile View Timeline */}
        <div className="mt-12 lg:hidden">
          <div className="flex justify-between items-center px-2">
            {projects.map((item, i) => (
              <button type="button" key={item.number} onClick={() => setIndex(i)} className={`font-serif text-[17px] ${i === index ? "text-[#B58544] font-semibold" : "text-[#1A1816]/60"}`}>
                {item.number}
              </button>
            ))}
          </div>
          <div className="relative mt-3 h-[1.5px] bg-[#E5DCD0] mx-2">
            <div className="absolute top-0 h-full bg-[#B58544] transition-all duration-500" style={{ width: `${((index + 1) / total) * 100}%` }} />
            <div className="absolute inset-0 flex justify-between items-center -top-[3px]">
              {projects.map((_, i) => (
                <span key={i} className={`size-2 rounded-full transition-colors ${i <= index ? "bg-[#B58544]" : "bg-[#D5C8B4]"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
