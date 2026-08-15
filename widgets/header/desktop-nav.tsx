import Link from "next/link";

import { mainNav } from "@/config/site";

export function DesktopNav() {
  return (
    <nav
      aria-label="Main"
      className="hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-9"
    >
      {mainNav.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          className="group relative py-2 text-[16px] font-medium text-white/95 transition-colors duration-300 hover:text-[#c99655]"
        >
          {item.label}

          {/* Active underline */}
          {index === 0 && (
            <span
              aria-hidden
              className="absolute bottom-[-3px] left-0 h-[1px] w-full bg-[#c99655]"
            />
          )}

          {/* Hover underline */}
          {index !== 0 && (
            <span
              aria-hidden
              className="absolute bottom-[-3px] left-0 h-px w-0 bg-[#c99655] transition-all duration-300 group-hover:w-full"
            />
          )}
        </Link>
      ))}
    </nav>
  );
}