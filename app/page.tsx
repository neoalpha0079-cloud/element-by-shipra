import { AboutSection } from "@/widgets/home/components/sections/about-section";
import { ConsultationSection } from "@/widgets/home/components/sections/consultation-section";
import { HeroSection } from "@/widgets/home/components/sections/hero-section";
import { ProjectsSection } from "@/widgets/home/components/sections/projects-section";
import { PromisesSection } from "@/widgets/home/components/sections/promises-section";
import { ServicesSection } from "@/widgets/home/components/sections/services-section";
import { TestimonialsSection } from "@/widgets/home/components/sections/testimonials-section";
import { TransformationSection } from "@/widgets/home/components/sections/transformation-section";
import { TurnkeySection } from "@/widgets/home/components/sections/turnkey-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TransformationSection />
      <TurnkeySection />
      <ServicesSection />
      <ProjectsSection />
      <PromisesSection />
      <AboutSection />
      <TestimonialsSection />
      <ConsultationSection />
    </main>
  );
}
