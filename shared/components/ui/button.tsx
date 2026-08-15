import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-300 focus-visible:ring-ring outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-bronze text-primary-foreground hover:bg-bronze-dark",
        outline:
          "border border-bronze/40 bg-transparent text-bronze hover:border-bronze hover:bg-bronze/5",
        champagne:
          "bg-champagne text-charcoal hover:bg-bronze hover:text-primary-foreground",
        ghost: "text-foreground hover:text-bronze",
        link: "text-bronze underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-9 px-5",
        lg: "h-14 px-10",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
