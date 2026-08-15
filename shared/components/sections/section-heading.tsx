import { cn } from "@/shared/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleClassName?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleClassName,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <p className="eyebrow text-bronze">
        <span className="bg-bronze/60 h-px w-8" aria-hidden />
        {eyebrow}
        {align === "center" && (
          <span className="bg-bronze/60 h-px w-8" aria-hidden />
        )}
      </p>
      <h2
        className={cn(
          "text-foreground text-4xl leading-[1.08] font-medium md:text-5xl lg:text-6xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-taupe max-w-xl text-sm leading-7 font-light md:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
