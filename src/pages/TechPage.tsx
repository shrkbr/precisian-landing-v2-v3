import { useState } from 'react';
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
  DiagnosticConsole,
} from '@/components/tech';
import '@/styles/tech.css';

export default function TechPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  return (
    <div className="tech-page min-h-screen bg-black text-white">
      <TechNav onDiagnosticClick={() => setIsDiagnosticOpen(true)} />
      <main>
        <TechHero onDiagnosticClick={() => setIsDiagnosticOpen(true)} />
        <ProblemSection />
        <DVQArchitecture />
        <ModuleSection />
        <PartnerSection />
        <ImpactGrid />
        <CTAForm />
      </main>
      <TechFooter />

      {/* Diagnostic Console Modal */}
      <DiagnosticConsole
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />
    </div>
  );
}
