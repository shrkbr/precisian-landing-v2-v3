import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Settings, Folder, Code, Bug, GitBranch, ShoppingCart } from "lucide-react";

const GTMSetup = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={Settings}
        title="Google Tag Manager Setup & Optimization"
        subtitle="Agile Tag Management Without Developer Dependencies"
        description="Google Tag Manager transforms how you deploy and manage marketing tags. Our service eliminates bottlenecks, reduces implementation time, and ensures data quality."
      >
        <div className="max-w-4xl">
          <ContentSection title="What We Deliver">
            <p>
              Complete GTM container architecture designed for scalability and maintainability. 
              We implement event tracking, conversion pixels, remarketing tags, and third-party integrations.
            </p>
            <p>
              Our documentation ensures your team can manage tags independently while maintaining data quality standards.
            </p>
          </ContentSection>

          <ContentSection title="Core Services">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Folder}
                title="Clean Container Structure"
                description="Organized container structure with naming conventions for easy maintenance."
              />
              <FeatureCard
                icon={Code}
                title="Data Layer Implementation"
                description="Custom event tracking via robust Data Layer implementation."
              />
              <FeatureCard
                icon={Bug}
                title="Tag Validation"
                description="Tag firing validation and comprehensive debugging."
              />
              <FeatureCard
                icon={GitBranch}
                title="Version Control"
                description="Version control and workspace management for team collaboration."
              />
              <FeatureCard
                icon={ShoppingCart}
                title="Enhanced E-commerce"
                description="Enhanced e-commerce tracking configuration for complete purchase funnel visibility."
              />
            </div>
          </ContentSection>

          <ContentSection title="Quality Assurance">
            <p>
              Every implementation undergoes rigorous testing in GTM Preview mode. 
              We validate data accuracy, check for tag conflicts, and ensure LGPD compliance.
            </p>
            <p>
              Our rollout process includes staging environment testing before production deployment.
            </p>
          </ContentSection>

          <ContentSection title="Why GTM Matters">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Reduce time-to-market for marketing campaigns</li>
              <li>Eliminate dependency on development teams for tag updates</li>
              <li>Maintain a single source of truth for all tracking codes</li>
              <li>Gain flexibility to test and iterate quickly</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default GTMSetup;
