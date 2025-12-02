import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Brain, TrendingUp, PieChart, LineChart, Target, Lightbulb } from "lucide-react";

const GoogleMeridian = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={Brain}
        title="Google Meridian MMM Implementation & Optimization"
        subtitle="Next-Generation Marketing Mix Modeling with AI"
        description="Google Meridian brings marketing mix modeling into the privacy-first era. Our service helps you understand true marketing contribution across all channels, online and offline."
      >
        <div className="max-w-4xl">
          <ContentSection title="What We Deliver">
            <p>
              End-to-end Meridian implementation including data preparation, model configuration, and calibration. 
              We integrate your marketing spend data, conversion data, and external factors to build accurate predictive models.
            </p>
            <p>
              Our analysis reveals incrementality, optimal budget allocation, and forecasted performance.
            </p>
          </ContentSection>

          <ContentSection title="Strategic Insights">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={TrendingUp}
                title="Incremental Contribution"
                description="True incremental contribution of each marketing channel revealed through advanced modeling."
              />
              <FeatureCard
                icon={PieChart}
                title="Budget Allocation"
                description="Optimal budget allocation recommendations based on statistical analysis."
              />
              <FeatureCard
                icon={LineChart}
                title="Cross-Channel ROI"
                description="ROI measurement across online and offline channels in a unified view."
              />
              <FeatureCard
                icon={Target}
                title="Scenario Planning"
                description="Scenario planning and what-if analysis for strategic decision making."
              />
              <FeatureCard
                icon={Lightbulb}
                title="Diminishing Returns"
                description="Identification of diminishing returns for each channel to optimize spend."
              />
            </div>
          </ContentSection>

          <ContentSection title="Our Process">
            <p>
              Data collection and preparation from all marketing platforms, sales systems, and external data sources. 
              Model training with Bayesian inference methods. Calibration using experiments and holdout tests.
            </p>
            <p>
              Ongoing refinement as new data becomes available ensures your model stays accurate over time.
            </p>
          </ContentSection>

          <ContentSection title="Perfect For">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Brands with significant media investment across multiple channels</li>
              <li>Organizations seeking to prove marketing ROI to stakeholders</li>
              <li>Businesses ready to move beyond attribution models</li>
              <li>Companies planning annual media budgets with confidence</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default GoogleMeridian;
