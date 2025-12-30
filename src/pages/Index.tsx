/**
 * Index Page - DVQ-first Homepage
 * Section order per PRD:
 * 1. Hero → 2. Video → 3. DVQ → 4. Client Logos
 * → 5. Problem Library → 6. Platforms → 7. AuditOS → 8. Final CTA
 */

import Layout from "@/components/layout/Layout";
import {
  V0Hero,
  VideoSection,
  DVQSection,
  ClientLogos,
  SolutionsGrid,
  PlatformsGrid,
  AuditOSTeaser,
  FinalCTA,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero */}
      <V0Hero />

      {/* 2. Video Manifesto */}
      <VideoSection />

      {/* 3. DVQ Framework */}
      <DVQSection />

      {/* 4. Client Logos */}
      <ClientLogos />

      {/* 5. Problem Library / Solutions */}
      <SolutionsGrid />

      {/* 6. Platforms */}
      <PlatformsGrid />

      {/* 7. AuditOS Teaser */}
      <AuditOSTeaser />

      {/* 8. Final CTA */}
      <FinalCTA />
    </Layout>
  );
};

export default Index;
