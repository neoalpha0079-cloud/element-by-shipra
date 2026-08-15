import * as React from "react";

import { cn } from "@/shared/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input text-foreground placeholder:text-muted-foreground/70 h-12 w-full bg-transparent px-4 text-sm font-light transition-colors focus:outline-none",
        "focus:border-bronze border-b",
        className
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input text-foreground placeholder:text-muted-foreground/70 w-full resize-none bg-transparent px-4 py-3 text-sm font-light transition-colors focus:outline-none",
        "focus:border-bronze border-b",
        className
      )}
      {...props}
    />
  );
}

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      data-slot="select"
      className={cn(
        "border-input text-foreground h-12 w-full cursor-pointer appearance-none bg-transparent px-4 text-sm font-light transition-colors focus:outline-none",
        "focus:border-bronze border-b",
        "[&>option]:bg-ivory [&>option]:text-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Input, Select, Textarea };
