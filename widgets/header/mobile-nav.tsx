"use client";

import { ArrowUpRight, Phone, X, Sparkles, Compass } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { mainNav } from "@/config/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  phone?: string;
}

export function MobileNav({ open, onClose, phone = "+91 99999 99999" }: MobileNavProps) {
  const pathname = usePathname();

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
        open ? "visible pointer-events-auto" : "invisible pointer-events-none"
      }`}
    >
      {/* Dark Ambient Glass Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-[#0B0A09]/75 backdrop-blur-md transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Floating Bottom Sheet Modal */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
        <div
          className={`relative mx-auto max-w-lg overflow-hidden rounded-[32px] border border-[#C59A58]/35 bg-[#141210]/95 backdrop-blur-2xl p-6 shadow-[0_-20px_60px_rgba(0,0,0,0.7)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-[0.96]"
          }`}
        >
          {/* Decorative Drag Notch / Top Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C59A58]/60 to-transparent" />
          <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-white/20" />

          {/* ================= MODAL HEADER ================= */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full border border-[#C59A58]/40 bg-[#C59A58]/10 text-[#C59A58]">
                <Compass size={16} strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-serif text-[18px] font-normal leading-tight text-white">
                  ELEMENTS
                </div>
                <div className="text-[12px] text-[#C59A58] font-serif italic -mt-0.5">
                  by Shipra Studio
                </div>
              </div>
            </div>

            {/* Circular Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all active:scale-95 active:bg-[#C59A58] active:text-black"
            >
              <X size={14} strokeWidth={1.75} />
            </button>
          </div>

          {/* ================= 2-COLUMN NAVIGATION GRID ================= */}
          <nav className="mt-5 grid grid-cols-2 gap-2.5">
            {mainNav.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`group relative flex items-center justify-between rounded-[16px] border p-3.5 transition-all duration-200 active:scale-[0.98] ${
                    isActive
                      ? "border-[#C59A58]/60 bg-[#C59A58]/15 text-[#C59A58]"
                      : "border-white/[0.06] bg-white/[0.03] text-white/85 hover:border-[#C59A58]/30 hover:bg-white/[0.06]"
                  }`}
                >
                  <div>
                    <span className="font-mono text-[9px] font-semibold text-[#C59A58]/80 block">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-[17px] font-normal tracking-wide">
                      {item.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="text-white/20 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C59A58]"
                  />
                </Link>
              );
            })}
          </nav>

          {/* ================= QUICK ACTIONS FOOTER ================= */}
          <div className="mt-5 pt-4 border-t border-white/[0.08] space-y-2.5">
            {/* Primary Consultation Pill Button */}
            <Link
              href="#contact"
              onClick={onClose}
              className="flex h-12 w-full items-center justify-between rounded-[16px] bg-[#EAD8BD] px-5 text-[12px] font-medium tracking-wide text-[#171411] transition-transform active:scale-[0.98] hover:bg-[#F2E5D1] shadow-md"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#9E7134]" />
                <span>Book a Consultation</span>
              </div>
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </Link>

            {/* Direct Studio Phone Call Button */}
            <a
              href={`tel:${String(phone).replace(/\s/g, "")}`}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-[16px] border border-[#C59A58]/35 bg-white/[0.02] text-[12px] font-medium text-[#C59A58] transition-colors active:bg-[#C59A58]/10"
            >
              <Phone size={14} strokeWidth={1.5} />
              <span>Call Studio ({phone})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}