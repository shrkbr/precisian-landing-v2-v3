import { useState } from 'react';
import {
  TechNav,
  TechHero,
  VideoSection,
  DVQSection,
  ClientLogos,
  PainCards,
  ModuleSection,
  PartnerSection,
  CTAForm,
  TechFooter,
  DiagnosticConsole,
} from '@/components/tech';
import '@/styles/tech.css';

/**
 * TechPage - Main landing page for Precisian
 *
 * Section order (V1 spec):
 * 1. Hero + CTA
 * 2. Manifesto video
 * 3. DVQ Framework + Diagram
 * 4. Client logos
 * 5. Pain Cards (Problem Library)
 * 6. Modules (detailed breakdown)
 * 7. Partners
 * 8. Final CTA
 */
export default function TechPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const openDiagnostic = () => setIsDiagnosticOpen(true);
  const closeDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="tech-page min-h-screen bg-black text-white">
      <TechNav onDiagnosticClick={openDiagnostic} />

      <main>
        {/* 1. Hero + Primary CTA */}
        <TechHero onDiagnosticClick={openDiagnostic} />

        {/* 2. Manifesto Video */}
        <VideoSection
          title="Why decision integrity matters"
          subtitle="A 2-minute introduction to the DVQ framework"
        />

        {/* 3. DVQ Framework + Diagram */}
        <DVQSection />

        {/* 4. Client Logos */}
        <ClientLogos title="Trusted by data-driven companies" />

        {/* 5. Pain Cards - Problem Library */}
        <PainCards />

        {/* 6. Operating Modules (detailed) */}
        <ModuleSection />

        {/* 7. Partners / Platforms */}
        <PartnerSection />

        {/* 8. Final CTA */}
        <CTAForm />
      </main>

      <TechFooter />

      {/* Diagnostic Console Modal */}
      <DiagnosticConsole
        isOpen={isDiagnosticOpen}
        onClose={closeDiagnostic}
      />
    </div>
  );
}
