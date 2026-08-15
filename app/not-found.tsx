import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/shared/components/ui/button";

export default function NotFound() {
  return (
    <main className="site-container site-section-py flex flex-col items-center justify-center text-center">
      <p className="eyebrow text-bronze">404</p>
      <h1 className="text-foreground mt-6 text-5xl font-medium md:text-7xl">
        The space you are looking for does not exist.
      </h1>
      <p className="text-muted-foreground mt-6 max-w-md">
        Like every good design, let us take you back to the start of the
        journey.
      </p>
      <Button asChild className="mt-10">
        <Link href="/">Back to {siteConfig.name}</Link>
      </Button>
    </main>
  );
}
