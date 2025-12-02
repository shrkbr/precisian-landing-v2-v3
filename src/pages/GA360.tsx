import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { LineChart, Database, Shield, GitBranch, Building, Layers } from "lucide-react";

const GA360 = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={LineChart}
        title="GA360 (Google Analytics 360)"
        subtitle="Enterprise-Level Analytics for High-Volume Businesses"
        description="GA360 offers unsampled data, advanced features, and enterprise support that standard GA4 cannot match. Our specialized service ensures you leverage every advantage of this premium platform."
      >
        <div className="max-w-4xl">
          <ContentSection title="What We Deliver">
            <p>
              Complete GA360 implementation and configuration tailored to enterprise needs. 
              We handle data import integration, BigQuery connectivity for advanced analysis, 
              and roll-up property setup for multi-brand organizations.
            </p>
            <p>
              Our service includes custom funnel analysis, advanced segmentation, and attribution modeling.
            </p>
          </ContentSection>

          <ContentSection title="Strategic Advantages">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Database}
                title="Unsampled Reports"
                description="Unsampled reports regardless of traffic volume for accurate decision making."
              />
              <FeatureCard
                icon={Shield}
                title="SLA-Backed Support"
                description="SLA-backed support and guaranteed uptime for mission-critical analytics."
              />
              <FeatureCard
                icon={GitBranch}
                title="BigQuery Integration"
                description="BigQuery integration for unlimited data exploration and custom analysis."
              />
              <FeatureCard
                icon={Layers}
                title="Advanced Attribution"
                description="Advanced attribution models and data-driven insights."
              />
              <FeatureCard
                icon={Building}
                title="Multi-Property Setup"
                description="Subproperties and roll-up reporting for complex organizations."
              />
            </div>
          </ContentSection>

          <ContentSection title="Our Methodology">
            <p>
              We design your GA360 architecture from the ground up, considering your organizational structure, 
              data governance requirements, and analytical needs.
            </p>
            <p>
              Implementation includes custom channel groupings, enhanced e-commerce tracking, 
              and integration with your CRM and marketing automation platforms.
            </p>
          </ContentSection>

          <ContentSection title="Ideal For">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Large enterprises with millions of monthly sessions</li>
              <li>Multi-brand corporations requiring consolidated reporting</li>
              <li>Organizations with complex attribution needs</li>
              <li>Businesses requiring guaranteed data accuracy for critical decisions</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default GA360;
