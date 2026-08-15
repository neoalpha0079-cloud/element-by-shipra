"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const serviceOptions = [
  "Interior Design",
  "External Elevation",
  "Vastu Consultation",
  "Commercial Interiors",
  "Modular Furniture",
  "Complete Turnkey",
];

const budgetRanges = [
  "₹10L – ₹25L",
  "₹25L – ₹50L",
  "₹50L – ₹1Cr",
  "₹1Cr+",
];

export function ConsultationForm() {
  const [selectedService, setSelectedService] = useState<string>("Interior Design");
  const [selectedBudget, setSelectedBudget] = useState<string>("₹25L – ₹50L");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[460px] flex-col items-center justify-center rounded-[32px] border border-[#E8DFC8] bg-white p-8 text-center shadow-[0_20px_50px_rgba(40,25,10,0.05)]">
        <div className="flex size-16 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#B58544]/40 text-[#B58544]">
          <CheckCircle2 size={32} strokeWidth={1.5} />
        </div>
        <h3 className="mt-5 font-serif text-[28px] font-normal text-[#1A1816]">
          Inquiry Received
        </h3>
        <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-[#6E675E]">
          Thank you for reaching out. Our principal designer will review your requirements and connect with you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#B58544] underline underline-offset-4 hover:text-[#9E7134]"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-[32px] border border-[#E8DFC8] bg-white/90 backdrop-blur-md p-7 sm:p-10 shadow-[0_20px_50px_rgba(40,25,10,0.04)]"
    >
      {/* Top Subtle Cove Glow */}
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C59A58]/60 to-transparent" />

      {/* Header */}
      <div className="mb-8">
        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#B58544]">
          STEP INTO YOUR VISION
        </span>
        <h3 className="mt-1 font-serif text-[26px] font-normal text-[#1A1816] sm:text-[30px]">
          Share Your Project Details
        </h3>
      </div>

      {/* 1. Service Selection Chips */}
      <div className="mb-6">
        <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A453E] mb-3">
          Select Service Required
        </label>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => {
            const isSelected = selectedService === service;
            return (
              <button
                type="button"
                key={service}
                onClick={() => setSelectedService(service)}
                className={`rounded-full px-4 py-2 text-[12px] font-medium transition-all ${
                  isSelected
                    ? "bg-[#1A1816] text-[#EAD8BD] shadow-sm border border-[#1A1816]"
                    : "bg-[#FAF8F5] text-[#5A544D] border border-[#E8DFC8] hover:border-[#C59A58]/60 hover:text-[#1A1816]"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Text Input Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A453E] mb-2">
            Your Full Name *
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Vikram Verma"
            className="w-full rounded-[14px] border border-[#E8DFC8] bg-[#FAF8F5] px-4 py-3.5 text-[13.5px] text-[#1A1816] placeholder:text-[#A29A90] focus:border-[#B58544] focus:bg-white focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A453E] mb-2">
            Contact Number *
          </label>
          <input
            required
            type="tel"
            placeholder="e.g. +91 98765 43210"
            className="w-full rounded-[14px] border border-[#E8DFC8] bg-[#FAF8F5] px-4 py-3.5 text-[13.5px] text-[#1A1816] placeholder:text-[#A29A90] focus:border-[#B58544] focus:bg-white focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A453E] mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="e.g. vikram@example.com"
            className="w-full rounded-[14px] border border-[#E8DFC8] bg-[#FAF8F5] px-4 py-3.5 text-[13.5px] text-[#1A1816] placeholder:text-[#A29A90] focus:border-[#B58544] focus:bg-white focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A453E] mb-2">
            Project City / Location *
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Bilaspur / Raipur"
            className="w-full rounded-[14px] border border-[#E8DFC8] bg-[#FAF8F5] px-4 py-3.5 text-[13.5px] text-[#1A1816] placeholder:text-[#A29A90] focus:border-[#B58544] focus:bg-white focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* 3. Budget Range Selector */}
      <div className="mt-5">
        <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A453E] mb-2.5">
          Estimated Budget
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {budgetRanges.map((range) => {
            const isSelected = selectedBudget === range;
            return (
              <button
                type="button"
                key={range}
                onClick={() => setSelectedBudget(range)}
                className={`rounded-[12px] py-2.5 px-3 text-center text-[12px] font-medium transition-all ${
                  isSelected
                    ? "bg-[#FAF6F0] border-[1.5px] border-[#B58544] text-[#B58544] font-semibold shadow-xs"
                    : "bg-[#FAF8F5] border border-[#E8DFC8] text-[#6E675E] hover:border-[#C59A58]/50"
                }`}
              >
                {range}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Message Field */}
      <div className="mt-5">
        <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A453E] mb-2">
          Tell Us About Your Space (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="e.g. 3BHK Apartment in Bilaspur, looking for minimalist warm luxury aesthetic..."
          className="w-full rounded-[14px] border border-[#E8DFC8] bg-[#FAF8F5] px-4 py-3.5 text-[13.5px] text-[#1A1816] placeholder:text-[#A29A90] focus:border-[#B58544] focus:bg-white focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* 5. Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="group relative flex h-13 w-full items-center justify-center gap-3 rounded-full bg-[#1A1816] px-8 text-[13px] font-medium tracking-[0.14em] uppercase text-[#EAD8BD] shadow-lg transition-all duration-300 hover:bg-black active:scale-[0.99] disabled:opacity-75"
        >
          {loading ? (
            <span>Sending Inquiry...</span>
          ) : (
            <>
              <span>Schedule My Consultation</span>
              <ArrowRight
                size={16}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
