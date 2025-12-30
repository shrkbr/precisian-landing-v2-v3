/**
 * JourneyPage - Precisian Journey service page
 * Full journey mapping module
 */

import { Map } from 'lucide-react';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

export default function JourneyPage() {
  return (
    <ServicePageTemplate
      moduleCode="MOD_01"
      title="Precisian Journey"
      tagline="Complete user journey mapping from first touch to post-purchase"
      dvqLayers={['Journey Mapping']}
      icon={Map}
      problemHeadline="You have events, but you don't have a journey."
      problemBullets={[
        'Micro-events missing from your tracking',
        'Offline & post-analytics interactions invisible',
        'Cross-device attribution decay losing conversions',
        'Server-side events not captured reliably',
        'No visibility into post-purchase behavior',
      ]}
      solutionHeadline="End-to-end journey mapping"
      solutionBullets={[
        'Micro-event mapping from discovery to advocacy',
        'Post-analytics events (CRM, operations, support)',
        'Server-side tracking for 100% reliability',
        'Cross-device identity resolution',
        'Offline conversion import and reconciliation',
      ]}
      caseStudy={{
        client: 'BCMed',
        challenge: 'Revenue attribution was fragmented across touchpoints. Marketing couldn\'t prove ROI, and significant revenue was being misattributed or lost entirely.',
        results: [
          '$250K+ revenue correctly attributed',
          '100% complete funnel visibility',
          'Cross-device tracking implemented',
        ],
      }}
      relatedModules={[
        { id: 'catalog', title: 'Precisian Catalog', href: '/services/catalog' },
        { id: 'core', title: 'Precisian Core', href: '/services/core' },
      ]}
    />
  );
}
