/**
 * ClarityPage - Precisian Clarity solution page
 * AI Data Analyst solution
 */

import { Brain } from 'lucide-react';
import { SolutionPageTemplate } from '@/components/solutions';
import { v0Content } from '@/content/v0';

const solution = v0Content.solutions.clarity;

export default function ClarityPage() {
  return (
    <SolutionPageTemplate
      solutionId="clarity"
      title={solution.title}
      tagline={solution.tagline}
      hero={solution.hero}
      deploy={solution.deploy}
      spec={solution.spec}
      caseStudy={solution.caseStudy}
      relatedSolutions={[
        { id: 'attribution', title: 'Precisian Attribution', href: '/solutions/attribution' },
        { id: 'core', title: 'Precisian Core', href: '/solutions/core' },
      ]}
      icon={Brain}
    />
  );
}
