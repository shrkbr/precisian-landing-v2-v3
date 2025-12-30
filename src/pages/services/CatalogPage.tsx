/**
 * CatalogPage - Precisian Catalog service page
 * Catalog intelligence and feed management
 */

import { Database } from 'lucide-react';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

export default function CatalogPage() {
  return (
    <ServicePageTemplate
      moduleCode="MOD_02"
      title="Precisian Catalog"
      tagline="Intelligent catalog management for maximum ad platform performance"
      dvqLayers={['Integration', 'Governance']}
      icon={Database}
      problemHeadline="Media depends on catalog data you don't control."
      problemBullets={[
        'Feed disapprovals and account suspensions',
        'Price and stock drift between systems',
        'Difficult to segment 1P vs 3P products',
        'Missing or incorrect product attributes',
        'No automation for custom labels',
      ]}
      solutionHeadline="Catalog Intelligence System"
      solutionBullets={[
        'Universal integration (Google Merchant, Meta, TikTok)',
        'Compliance guaranteed with automatic fixes',
        'Real-time sync for price, stock, and shipping',
        'Advanced rules and custom label automation',
        '1P/3P segmentation with smart categorization',
      ]}
      caseStudy={{
        client: 'Pague Menos',
        challenge: 'Managing real-time catalogs across 1P and 3P products with thousands of daily changes. Feed disapprovals were causing significant lost revenue.',
        results: [
          'Approval rate significantly increased',
          'CPC reduced through Quality Score improvements',
          'Automated catalog governance implemented',
        ],
      }}
      relatedModules={[
        { id: 'journey', title: 'Precisian Journey', href: '/services/journey' },
        { id: 'core', title: 'Precisian Core', href: '/services/core' },
      ]}
    />
  );
}
