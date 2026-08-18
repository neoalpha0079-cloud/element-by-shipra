"use client";

import { useId } from "react";

interface TurnkeySectionProps {
  data?: {
    steps?: Array<{ number: string; title: string; description: string }>;
    guarantees?: Array<{ title: string; description: string }>;
  };
}

const stepIcons = [
  <svg key="s1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <circle cx="8" cy="11" r="0.8" fill="currentColor" />
    <circle cx="12" cy="11" r="0.8" fill="currentColor" />
    <circle cx="16" cy="11" r="0.8" fill="currentColor" />
  </svg>,
  <svg key="s2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <path d="m18 2 4 4-12 12-4-4L18 2Z" />
    <path d="m2 22 4-1-3-3-1 4Z" />
    <path d="M14 6l4 4" />
  </svg>,
  <svg key="s3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <rect x="4" y="4" width="16" height="17" rx="2" />
    <path d="M9 2h6v4H9z" />
    <path d="M8 10h.01M12 10h4M8 14h.01M12 14h4M8 18h.01M12 18h4" />
  </svg>,
  <svg key="s4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <rect x="3" y="14" width="8" height="4" rx="0.5" />
    <rect x="13" y="14" width="8" height="4" rx="0.5" />
    <rect x="7" y="9" width="10" height="4" rx="0.5" />
    <path d="m14 5 5-2 2 3-5 2z" />
    <path d="m14 5-3 4" />
  </svg>,
  <svg key="s5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <rect x="4" y="3" width="16" height="6" rx="1.5" />
    <path d="M12 9v4a2 2 0 0 0 2 2h1v5a1 1 0 0 1-1 1h-4" />
  </svg>,
  <svg key="s6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <path d="M3 10.5 12 3l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    <path d="m9 13 2 2 4-4" />
  </svg>,
];

const guaranteeIcons = [
  <svg key="g1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  <svg key="g2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,
  <svg key="g3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 14.1l-4.8 2.5.9-5.3L4.3 7.6l5.3-.8L12 2z" />
  </svg>,
  <svg key="g4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-6">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
];

const defaultSteps = [
  { number: "01", title: "Consultation", description: "Understanding your needs, style and budget." },
  { number: "02", title: "Design", description: "Creating thoughtful designs that reflect your vision." },
  { number: "03", title: "Planning", description: "Detailed planning, material selection and scheduling." },
  { number: "04", title: "Execution", description: "Civil, electrical, plumbing & carpentry work with precision." },
  { number: "05", title: "Finishing", description: "Flawless finishes, textures and detailing." },
  { number: "06", title: "Handover", description: "Final walkthrough and on-time delivery with complete care." },
];

const defaultGuarantees = [
  { title: "Single Point Responsibility", description: "We take complete ownership of your project." },
  { title: "On-Time Delivery", description: "Committed to timelines, every single time." },
  { title: "Quality Assurance", description: "Premium materials and quality you can trust." },
  { title: "Expert Team", description: "Skilled professionals with years of experience." },
];

export function TurnkeySection({ data }: TurnkeySectionProps) {
  const gradientId = useId();
  const steps = data?.steps?.length ? data.steps : defaultSteps;
  const guarantees = data?.guarantees?.length ? data.guarantees : defaultGuarantees;

  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] py-16 md:py-24 font-sans selection:bg-[#c59a58]/20">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-[#C59A58]" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B58544]">
              Turnkey Approach
            </span>
            <span className="h-px w-6 bg-[#C59A58]" />
          </div>
          <h2 className="mt-4 font-serif text-[40px] font-normal leading-tight tracking-tight text-[#1A1816] md:text-[54px]">
            From Concept to <span className="italic text-[#B58544]">Completion.</span>
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center">
            <div className="h-px w-10 bg-[#C59A58]/70" />
            <span className="mx-3 text-[11px] text-[#B58544]">✦</span>
            <div className="h-px w-10 bg-[#C59A58]/70" />
          </div>
          <p className="mx-auto mt-4 max-w-lg text-[13.5px] leading-relaxed text-[#6E675E] sm:text-[14px]">
            We manage every detail of your project with precision, delivering spaces that are beautiful, functional and built to last.
          </p>
        </div>

        {/* DESKTOP TRACK & NODES */}
        <div className="relative mt-20 hidden lg:block">
          <svg
            className="absolute inset-0 size-full pointer-events-none z-0"
            viewBox="0 0 1200 480"
            fill="none"
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C59A58" />
                <stop offset="50%" stopColor="#B58544" />
                <stop offset="100%" stopColor="#8C6430" />
              </linearGradient>
            </defs>
            <path
              d="M 200 48 L 1000 48 C 1140 48, 1140 205, 1000 205 L 200 205 C 60 205, 60 305, 200 305 L 1000 305 C 1030 305, 1050 325, 1070 325"
              stroke={`url(#${gradientId})`}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="1070" cy="325" r="5" fill="#B58544" />
            <circle cx="1070" cy="325" r="10" stroke="#C59A58" strokeWidth="1.2" opacity="0.6" />
          </svg>

          {/* Row 1: 01, 02, 03 */}
          <div className="grid grid-cols-3 gap-12 relative z-10 pb-28">
            {steps.slice(0, 3).map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                <div className="relative flex size-24 items-center justify-center rounded-full border-[1.5px] border-[#D8C7B0] bg-[#FAF8F5] shadow-md transition-all duration-300 group-hover:border-[#B58544] group-hover:shadow-lg">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[#D5C6B0] bg-white px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#B58544] shadow-sm">
                    {step.number}
                  </span>
                  <div className="text-[#B58544] transition-transform duration-300 group-hover:scale-110">
                    {stepIcons[i]}
                  </div>
                </div>
                <h3 className="mt-5 font-serif text-[20px] font-normal text-[#1A1816]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-[#6E675E] max-w-[240px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: 04, 05, 06 */}
          <div className="grid grid-cols-3 gap-12 relative z-10">
            {steps.slice(3, 6).map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                <div className="relative flex size-24 items-center justify-center rounded-full border-[1.5px] border-[#D8C7B0] bg-[#FAF8F5] shadow-md transition-all duration-300 group-hover:border-[#B58544] group-hover:shadow-lg">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[#D5C6B0] bg-white px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#B58544] shadow-sm">
                    {step.number}
                  </span>
                  <div className="text-[#B58544] transition-transform duration-300 group-hover:scale-110">
                    {stepIcons[i + 3]}
                  </div>
                </div>
                <h3 className="mt-5 font-serif text-[20px] font-normal text-[#1A1816]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-[#6E675E] max-w-[240px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="mt-12 space-y-6 lg:hidden relative">
          <div className="absolute left-[31px] top-6 bottom-6 w-[1.5px] bg-[#E0D5C3]" />
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex items-start gap-4 z-10">
              <div className="relative flex size-16 shrink-0 items-center justify-center rounded-full border border-[#D5C6B0] bg-[#FAF8F5] shadow-sm">
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-[#B58544] px-2 py-0.2 text-[8.5px] font-bold text-white shadow-xs">
                  {step.number}
                </span>
                <div className="text-[#B58544] scale-90">{stepIcons[i]}</div>
              </div>
              <div className="flex-1 pt-1 rounded-[16px] border border-[#E8DFC8] bg-white/80 p-4 shadow-sm">
                <h3 className="font-serif text-[17px] font-normal text-[#1A1816]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[#6E675E]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM 4-PILLAR TRUST BAR */}
        <div className="mt-20">
          <div className="rounded-[24px] border border-[#E8DFC8] bg-white/80 backdrop-blur-md p-6 lg:p-8 shadow-[0_15px_40px_rgba(40,25,10,0.03)]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#E8DFC8]/80">
              {guarantees.map((item, i) => (
                <div key={item.title} className="flex items-start gap-4 px-2 lg:px-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#D5C6B0] bg-[#FAF6F0] text-[#B58544] shadow-xs">
                    {guaranteeIcons[i]}
                  </div>
                  <div>
                    <h4 className="font-sans text-[14px] font-bold text-[#1A1816]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11.5px] leading-snug text-[#6E675E]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
