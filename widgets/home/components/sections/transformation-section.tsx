"use client";

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { urlFor } from "@/sanity/lib/image";

interface TransformationSectionProps {
  data?: {
    beforeImage?: unknown;
    afterImage?: unknown;
    beforeLabel?: string;
    afterLabel?: string;
    caption?: string;
  };
}

const defaultTransformation = {
  beforeImage: "/before.png",
  afterImage: "/after.png",
};

export function TransformationSection({ data }: TransformationSectionProps) {
  const [position, setPosition] = useState(42);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const beforeSrc = data?.beforeImage
    ? urlFor(data.beforeImage).width(1600).quality(85).url()
    : defaultTransformation.beforeImage;
  const afterSrc = data?.afterImage
    ? urlFor(data.afterImage).width(1600).quality(85).url()
    : defaultTransformation.afterImage;
  const beforeLabel = data?.beforeLabel ?? "Before";
  const afterLabel = data?.afterLabel ?? "After";

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, percentage)));
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#141210] py-4 sm:py-6 font-sans">
      <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <div className="relative bg-[#ECE5DB] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 clip-pointer-events">
          {/* Header Row */}
          <div className="flex items-start justify-between gap-4 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B58544]">
                  Transforming ideas into reality
                </span>
                <div className="h-px w-10 bg-[#C59A58]" />
              </div>
              <h2 className="mt-2 font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-tight text-[#1A1816]">
                See the Transformation
              </h2>
            </div>
            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setPosition((prev) => Math.max(10, prev - 15))}
                className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-[#B58544]/50 text-[#8C6430] transition-colors duration-200 hover:border-[#8C6430] hover:bg-[#8C6430] hover:text-white"
                aria-label="Previous"
              >
                <ArrowLeft className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => setPosition((prev) => Math.min(90, prev + 15))}
                className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-[#B58544]/50 text-[#8C6430] transition-colors duration-200 hover:border-[#8C6430] hover:bg-[#8C6430] hover:text-white"
                aria-label="Next"
              >
                <ArrowRight className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* BEFORE / AFTER INTERACTIVE VIEWER */}
          <div className="relative w-full">
            <div
              ref={containerRef}
              onPointerDown={(e) => {
                dragging.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                updateFromClientX(e.clientX);
              }}
              onPointerMove={(e) => {
                if (dragging.current) {
                  updateFromClientX(e.clientX);
                }
              }}
              onPointerUp={() => {
                dragging.current = false;
              }}
              onPointerCancel={() => {
                dragging.current = false;
              }}
              className="relative aspect-[4/3] md:aspect-[21/9] w-full touch-none overflow-hidden rounded-[20px] md:rounded-[26px] bg-[#222] select-none cursor-ew-resize shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            >
              {/* AFTER IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={afterSrc}
                  alt="Transformed Luxury Space (After)"
                  fill
                  priority
                  draggable={false}
                  className="object-cover object-center"
                />
              </div>

              {/* BEFORE IMAGE */}
              <div
                className="absolute inset-0 grayscale contrast-[1.05]"
                style={{
                  clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
              >
                <Image
                  src={beforeSrc}
                  alt="Raw Construction (Before)"
                  fill
                  priority
                  draggable={false}
                  className="object-cover object-center"
                />
              </div>

              {/* BEFORE LABEL */}
              <div className="absolute top-4 left-4 z-30 rounded-[6px] bg-[#161412]/80 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white backdrop-blur-md">
                {beforeLabel}
              </div>

              {/* AFTER LABEL */}
              <div className="absolute top-4 right-4 z-30 rounded-[6px] bg-[#7D5225]/85 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white backdrop-blur-md">
                {afterLabel}
              </div>

              {/* SLIDER DIVIDER LINE */}
              <div
                className="absolute inset-y-0 z-40 w-[2px] bg-white pointer-events-none"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 left-1/2 flex size-9 sm:size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D5C6B0] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center text-[#2A2723] -space-x-0.5">
                    <ChevronLeft className="size-3.5" strokeWidth={2.5} />
                    <ChevronRight className="size-3.5" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
