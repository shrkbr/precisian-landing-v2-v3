/**
 * CorePage - Precisian Core service page
 * Data reconciliation and integration layer
 */

import { Layers } from 'lucide-react';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

export default function CorePage() {
  return (
    <ServicePageTemplate
      moduleCode="MOD_03"
      title="Precisian Core"
      tagline="The reconciliation layer that makes all your data speak the same language"
      dvqLayers={['Integration', 'Governance', 'Attribution']}
      icon={Layers}
      problemHeadline="GA4 says one thing. ERP says another."
      problemBullets={[
        'ROAS calculated using captured vs invoiced revenue',
        'Missing visibility on real returns and cancellations',
        'Discrepancies > 50% between analytics and backend',
        'No single source of truth for revenue',
        'Attribution decisions based on incomplete data',
      ]}
      solutionHeadline="Reconciliation Layer"
      solutionBullets={[
        'Multi-platform integration with unique IDs',
        'Real-time revenue reconciliation',
        'GDPR & LGPD compliant encryption by design',
        'Automatic discrepancy detection and alerts',
        'Single source of truth for all systems',
      ]}
      caseStudy={{
        client: 'Nuvio Foods',
        challenge: 'Over 50% discrepancy between VTEX ecommerce data and GA4 analytics. Marketing decisions were being made on fundamentally incorrect data.',
        results: [
          '100% data consistency achieved',
          'Complete sales funnel visibility',
          'Real-time reconciliation implemented',
        ],
      }}
      relatedModules={[
        { id: 'journey', title: 'Precisian Journey', href: '/services/journey' },
        { id: 'catalog', title: 'Precisian Catalog', href: '/services/catalog' },
      ]}
    />
  );
}
