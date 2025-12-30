/**
 * CorePage - Precisian Core solution page
 * Data reconciliation solution
 */

import { Layers } from 'lucide-react';
import { SolutionPageTemplate } from '@/components/solutions';
import { v0Content } from '@/content/v0';

const solution = v0Content.solutions.core;

export default function CorePage() {
  return (
    <SolutionPageTemplate
      solutionId="core"
      title={solution.title}
      tagline={solution.tagline}
      hero={solution.hero}
      deploy={solution.deploy}
      spec={solution.spec}
      caseStudy={solution.caseStudy}
      relatedSolutions={[
        { id: 'journey', title: 'Precisian Journey', href: '/solutions/journey' },
        { id: 'catalog', title: 'Precisian Catalog', href: '/solutions/catalog' },
      ]}
      icon={Layers}
    />
  );
}
