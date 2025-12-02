import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Sparkles, Users, AlertTriangle, Gift, DollarSign, BarChart3, Brain, MessageSquare } from "lucide-react";

const AIInsights = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={Sparkles}
        title="AI Insights"
        subtitle="Harness Artificial Intelligence for Predictive Analytics"
        description="The future of analytics is predictive, not just descriptive. Our AI Insights service applies machine learning to your data, uncovering patterns humans might miss and forecasting future outcomes."
      >
        <div className="max-w-4xl">
          <ContentSection title="What We Deliver">
            <p>
              Custom AI models trained on your business data to predict customer behavior, forecast revenue, 
              identify churn risk, and optimize marketing performance.
            </p>
            <p>
              We implement automated anomaly detection that alerts you to significant changes in real-time.
            </p>
          </ContentSection>

          <ContentSection title="AI Applications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Users}
                title="Customer Lifetime Value"
                description="Predict CLV to focus resources on highest-value customer segments."
              />
              <FeatureCard
                icon={AlertTriangle}
                title="Churn Prediction"
                description="Churn probability scoring and prevention strategies."
              />
              <FeatureCard
                icon={Gift}
                title="Product Recommendations"
                description="AI-powered recommendation engines for personalization."
              />
              <FeatureCard
                icon={DollarSign}
                title="Price Optimization"
                description="Dynamic pricing models based on demand patterns."
              />
              <FeatureCard
                icon={BarChart3}
                title="Demand Forecasting"
                description="Accurate demand forecasting for inventory and planning."
              />
              <FeatureCard
                icon={MessageSquare}
                title="Natural Language Insights"
                description="Automated insight generation with natural language explanations."
              />
            </div>
          </ContentSection>

          <ContentSection title="Our Technology Stack">
            <p>
              We leverage Google Cloud AI, BigQuery ML, TensorFlow, and custom Python models depending on your needs. 
              All models are explainable—we don't provide black boxes.
            </p>
            <p>
              You'll understand why the AI makes each prediction.
            </p>
          </ContentSection>

          <ContentSection title="Implementation Approach">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Discovery phase to identify high-impact use cases</li>
              <li>Data preparation and feature engineering</li>
              <li>Model development and validation</li>
              <li>Integration into your existing workflows</li>
              <li>Ongoing monitoring and refinement</li>
            </ul>
          </ContentSection>

          <ContentSection title="Ideal For">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Organizations with sufficient data volume for model training</li>
              <li>Businesses seeking competitive differentiation through analytics</li>
              <li>Teams ready to act on predictive insights</li>
              <li>Companies committed to data-driven culture</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default AIInsights;
