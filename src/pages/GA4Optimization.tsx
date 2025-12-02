import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { BarChart3, CheckCircle, Target, Users, Shield, LineChart } from "lucide-react";

const GA4Optimization = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={BarChart3}
        title="GA4 Optimization"
        subtitle="Maximize the Potential of Your Google Analytics 4"
        description="The migration to GA4 represents a paradigm shift in how we understand user behavior. Our GA4 optimization service ensures your business extracts maximum value from this powerful platform."
      >
        <div className="max-w-4xl">
          <ContentSection title="What We Deliver">
            <p>
              We perform a complete audit of your current GA4 implementation, identifying gaps and opportunities. 
              Our team configures advanced events, custom conversions, and audiences aligned with your business objectives. 
              We create custom reports and explorations that transform raw data into actionable insights.
            </p>
          </ContentSection>

          <ContentSection title="Key Benefits">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={CheckCircle}
                title="Enhanced Data Accuracy"
                description="Improved data accuracy and reliability across all touchpoints."
              />
              <FeatureCard
                icon={Target}
                title="Custom Event Tracking"
                description="Custom event tracking tailored for your specific business model."
              />
              <FeatureCard
                icon={LineChart}
                title="Predictive Metrics"
                description="Predictive metrics and advanced audience segmentation capabilities."
              />
              <FeatureCard
                icon={Users}
                title="Cross-Platform Analysis"
                description="Cross-platform user journey analysis for complete visibility."
              />
              <FeatureCard
                icon={Shield}
                title="LGPD Compliance"
                description="Full compliance with LGPD and data privacy regulations."
              />
            </div>
          </ContentSection>

          <ContentSection title="Our Approach">
            <p>
              We begin by understanding your KPIs and business goals. Then we map critical user interactions, 
              configure enhanced measurement, and implement custom dimensions that matter to your decision-making process.
            </p>
            <p>
              Our optimization includes data stream configuration, conversion tracking refinement, 
              and integration with Google Ads and other marketing platforms.
            </p>
          </ContentSection>

          <ContentSection title="Who This Is For">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>E-commerce businesses seeking to understand the complete customer journey</li>
              <li>SaaS companies tracking product engagement</li>
              <li>Lead generation sites optimizing conversion funnels</li>
              <li>Any organization serious about data-driven decision making</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default GA4Optimization;
