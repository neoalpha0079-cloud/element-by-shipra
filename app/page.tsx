import { sanityFetch } from "@/sanity/lib";
import {
  heroQuery,
  servicesQuery,
  projectsQuery,
  promisesQuery,
  aboutSectionQuery,
  transformationQuery,
  turnkeyProcessQuery,
  testimonialsQuery,
  testimonialStatsQuery,
} from "@/sanity/lib/queries";
import { AboutSection } from "@/widgets/home/components/sections/about-section";
import { ConsultationSection } from "@/widgets/home/components/sections/consultation-section";
import { HeroSection } from "@/widgets/home/components/sections/hero-section";
import { ProjectsSection } from "@/widgets/home/components/sections/projects-section";
import { PromisesSection } from "@/widgets/home/components/sections/promises-section";
import { ServicesSection } from "@/widgets/home/components/sections/services-section";
import { TestimonialsSection } from "@/widgets/home/components/sections/testimonials-section";
import { TransformationSection } from "@/widgets/home/components/sections/transformation-section";
import { TurnkeySection } from "@/widgets/home/components/sections/turnkey-section";

export default async function Home() {
  const [hero, services, projects, promises, about, transformation, turnkey, testimonials, testimonialStats] =
    await Promise.all([
      sanityFetch<Record<string, unknown>>(heroQuery),
      sanityFetch<Array<Record<string, unknown>>>(servicesQuery),
      sanityFetch<Array<Record<string, unknown>>>(projectsQuery),
      sanityFetch<Array<Record<string, unknown>>>(promisesQuery),
      sanityFetch<Record<string, unknown>>(aboutSectionQuery),
      sanityFetch<Record<string, unknown>>(transformationQuery),
      sanityFetch<Record<string, unknown>>(turnkeyProcessQuery),
      sanityFetch<Array<Record<string, unknown>>>(testimonialsQuery),
      sanityFetch<Record<string, unknown>>(testimonialStatsQuery),
    ]);

  return (
    <main>
      <HeroSection data={hero ?? undefined} />
      <TransformationSection data={transformation ?? undefined} />
      <TurnkeySection data={turnkey ?? undefined} />
      <ServicesSection data={services ?? undefined} />
      <ProjectsSection data={projects ?? undefined} />
      <PromisesSection data={promises ?? undefined} />
      <AboutSection data={about ?? undefined} />
      <TestimonialsSection
        testimonials={testimonials ?? undefined}
        stats={
          (testimonialStats?.stats as
            | Array<{ value: string; label: string }>
            | undefined) ?? undefined
        }
      />
      <ConsultationSection />
    </main>
  );
}
