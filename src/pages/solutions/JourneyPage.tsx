/**
 * JourneyPage - Precisian Journey solution page
 * Full Journey Mapping solution
 */

import { Map } from 'lucide-react';
import { SolutionPageTemplate } from '@/components/solutions';
import { v0Content } from '@/content/v0';

const solution = v0Content.solutions.journey;

export default function JourneyPage() {
  return (
    <SolutionPageTemplate
      solutionId="journey"
      title={solution.title}
      tagline={solution.tagline}
      hero={solution.hero}
      deploy={solution.deploy}
      spec={solution.spec}
      caseStudy={solution.caseStudy}
      relatedSolutions={[
        { id: 'catalog', title: 'Precisian Catalog', href: '/solutions/catalog' },
        { id: 'core', title: 'Precisian Core', href: '/solutions/core' },
      ]}
      icon={Map}
    />
  );
}
