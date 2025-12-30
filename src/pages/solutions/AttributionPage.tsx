/**
 * AttributionPage - Precisian Attribution & MMM solution page
 * Smart Attribution Modeling solution
 */

import { BarChart3 } from 'lucide-react';
import { SolutionPageTemplate } from '@/components/solutions';
import { v0Content } from '@/content/v0';

const solution = v0Content.solutions.attribution;

export default function AttributionPage() {
  return (
    <SolutionPageTemplate
      solutionId="attribution"
      title={solution.title}
      tagline={solution.tagline}
      hero={solution.hero}
      deploy={solution.deploy}
      spec={solution.spec}
      caseStudy={solution.caseStudy}
      relatedSolutions={[
        { id: 'journey', title: 'Precisian Journey', href: '/solutions/journey' },
        { id: 'clarity', title: 'Precisian Clarity', href: '/solutions/clarity' },
      ]}
      icon={BarChart3}
    />
  );
}
