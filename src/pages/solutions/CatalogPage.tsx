/**
 * CatalogPage - Precisian Catalog solution page
 * Catalog Intelligence solution
 */

import { Database } from 'lucide-react';
import { SolutionPageTemplate } from '@/components/solutions';
import { v0Content } from '@/content/v0';

const solution = v0Content.solutions.catalog;

export default function CatalogPage() {
  return (
    <SolutionPageTemplate
      solutionId="catalog"
      title={solution.title}
      tagline={solution.tagline}
      hero={solution.hero}
      deploy={solution.deploy}
      spec={solution.spec}
      caseStudy={solution.caseStudy}
      relatedSolutions={[
        { id: 'journey', title: 'Precisian Journey', href: '/solutions/journey' },
        { id: 'core', title: 'Precisian Core', href: '/solutions/core' },
      ]}
      icon={Database}
    />
  );
}
