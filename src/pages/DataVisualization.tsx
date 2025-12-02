import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { PieChart, BarChart3, Activity, Smartphone, Zap, Users } from "lucide-react";

const DataVisualization = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={PieChart}
        title="Data Visualization"
        subtitle="Transform Data into Decisions with Powerful Visualizations"
        description="Raw data tells incomplete stories. Our data visualization service creates intuitive dashboards and reports that drive action across your organization."
      >
        <div className="max-w-4xl">
          <ContentSection title="What We Deliver">
            <p>
              Custom dashboards in Looker Studio (Data Studio), Power BI, or Tableau tailored to different stakeholders. 
              We connect multiple data sources—GA4, Google Ads, Meta Ads, CRM systems, and more—into unified views.
            </p>
            <p>
              Our designs prioritize clarity, enabling quick comprehension of complex data.
            </p>
          </ContentSection>

          <ContentSection title="Dashboard Solutions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={BarChart3}
                title="Executive Dashboards"
                description="High-level KPIs and trends for leadership decision making."
              />
              <FeatureCard
                icon={Activity}
                title="Marketing Performance"
                description="Campaign-level detail with real-time performance metrics."
              />
              <FeatureCard
                icon={PieChart}
                title="E-commerce Analytics"
                description="Revenue, conversion, AOV, and customer behavior tracking."
              />
              <FeatureCard
                icon={Zap}
                title="Real-time Monitoring"
                description="Critical metrics dashboards with instant updates."
              />
            </div>
          </ContentSection>

          <ContentSection title="Design Principles">
            <p>
              We follow data visualization best practices: clear hierarchy, appropriate chart types, 
              contextual comparisons, and mobile-responsive designs.
            </p>
            <p>
              Every dashboard tells a story, guiding users from overview to detail.
            </p>
          </ContentSection>

          <ContentSection title="Technical Excellence">
            <p>
              Advanced features include calculated fields, date range comparisons, drill-down capabilities, 
              and interactive filters. We optimize dashboard performance for fast loading even with large datasets.
            </p>
          </ContentSection>

          <ContentSection title="Business Impact">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Democratize data access across your organization</li>
              <li>Enable self-service analytics that reduce reporting requests</li>
              <li>Align teams around shared metrics</li>
              <li>Accelerate decision-making with always-available insights</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default DataVisualization;
