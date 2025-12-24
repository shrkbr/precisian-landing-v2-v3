import {
  TechNav,
  TechHero,
  ProblemSection,
  DVQArchitecture,
  ModuleSection,
  PartnerSection,
  ImpactGrid,
  CTAForm,
  TechFooter,
} from '@/components/tech';
import '@/styles/tech.css';

export default function TechPage() {
  return (
    <div className="tech-page min-h-screen bg-black text-white">
      <TechNav />
      <main>
        <TechHero />
        <ProblemSection />
        <DVQArchitecture />
        <ModuleSection />
        <PartnerSection />
        <ImpactGrid />
        <CTAForm />
      </main>
      <TechFooter />
    </div>
  );
}
