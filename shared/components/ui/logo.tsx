import Link from "next/link";

import { cn } from "@/shared/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "border-bronze/50 relative inline-flex size-9 items-center justify-center border",
        className
      )}
    >
      <span className="bg-bronze/70 absolute size-4" />
    </span>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <LogoMark className="group-hover:bg-bronze/10 transition-colors duration-300" />
      <span className="flex flex-col leading-none">
        <span className="text-foreground text-lg font-medium tracking-[0.18em]">
          SHIPRA
        </span>
        <span className="text-bronze mt-1 text-[0.6rem] font-medium tracking-[0.42em] uppercase">
          Designs
        </span>
      </span>
    </Link>
  );
}
