"use client";

import { Mail, MapPin, Phone, Clock, Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";
import ConsultationForm from "@/features/consultation/components/consultation-form";


export function ConsultationSection() {
  const phone = siteConfig?.phone || "+91 99999 99999";
  const email = siteConfig?.email || "contact@shipradesigns.com";
  const address = siteConfig?.address || "Bilaspur, Chhattisgarh, India";

  const contactDetails = [
    {
      icon: Phone,
      label: "DIRECT INQUIRIES",
      value: phone,
      href: `tel:${String(phone).replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "STUDIO EMAIL",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: MapPin,
      label: "STUDIO ADDRESS",
      value: address,
      href: null,
    },
    {
      icon: Clock,
      label: "WORKING HOURS",
      value: "Mon – Sat: 10:00 AM – 7:00 PM",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FBF9F5] py-16 md:py-24 font-sans selection:bg-[#C59A58]/20 scroll-mt-20"
    >
      {/* Decorative Gold Geometric Rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-28 size-[34rem] rounded-full border border-[#C59A58]/20 opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-[26rem] rounded-full border border-[#D5C6B0]/40 opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -bottom-32 size-[30rem] rounded-full border border-[#C59A58]/15 opacity-50"
      />

      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* ================= LEFT COLUMN: STUDIO BIO & CONTACT ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-[#C59A58]" />
              <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B58544]">
                Book a Consultation
              </span>
              <span className="h-px w-6 bg-[#C59A58]" />
            </div>

            <h2 className="mt-4 font-serif text-[38px] font-normal leading-[1.1] text-[#1A1816] md:text-[50px]">
              Let&apos;s create something{" "}
              <span className="italic text-[#B58544] block">beautiful together.</span>
            </h2>

            <p className="mt-5 max-w-md text-[13.5px] leading-relaxed text-[#6E675E]">
              Every timeless space begins with a thoughtful conversation. Tell us about your vision, schedule, and lifestyle—our team will take care of every detail from blueprint to final styling.
            </p>

            {/* Quick Contact Cards */}
            <div className="mt-9 space-y-3.5">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={detail.label}
                    className="group flex items-center gap-4 rounded-[18px] border border-[#E8DFC8] bg-white/70 backdrop-blur-sm p-3.5 shadow-[0_4px_16px_rgba(40,25,10,0.02)] transition-all hover:border-[#C59A58]/60 hover:bg-white"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#D5C6B0] bg-[#FAF6F0] text-[#B58544] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={17} strokeWidth={1.4} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[9px] font-bold tracking-[0.2em] text-[#A0988E] uppercase block">
                        {detail.label}
                      </span>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="font-sans text-[13.5px] font-medium text-[#1A1816] transition-colors hover:text-[#B58544] truncate block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-sans text-[13.5px] font-medium text-[#1A1816] truncate">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Footnote */}
            <div className="mt-8 flex items-center gap-2.5 text-[11.5px] text-[#7A7268]">
              <Sparkles size={14} className="text-[#B58544] shrink-0" />
              <span>Complimentary 45-minute spatial consultation & estimate.</span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONSULTATION FORM ================= */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationSection;