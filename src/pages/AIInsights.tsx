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
        subtitle="Inteligência Artificial para Análises Preditivas"
        description="O futuro da análise de dados é preditivo, não apenas descritivo. Nosso serviço de AI Insights aplica machine learning aos seus dados, descobrindo padrões que humanos poderiam não perceber e prevendo resultados futuros."
      >
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Modelos de IA customizados treinados com os dados do seu negócio para prever comportamento do cliente, 
              projetar receita, identificar risco de churn e otimizar performance de marketing.
            </p>
            <p>
              Implementamos detecção automatizada de anomalias que alerta você sobre mudanças significativas em tempo real.
            </p>
          </ContentSection>

          <ContentSection title="Aplicações de IA">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Users}
                title="Customer Lifetime Value"
                description="Previsão de CLV para focar recursos nos segmentos de clientes de maior valor."
              />
              <FeatureCard
                icon={AlertTriangle}
                title="Previsão de Churn"
                description="Pontuação de probabilidade de churn e estratégias de prevenção."
              />
              <FeatureCard
                icon={Gift}
                title="Recomendação de Produtos"
                description="Motores de recomendação alimentados por IA para personalização."
              />
              <FeatureCard
                icon={DollarSign}
                title="Otimização de Preços"
                description="Modelos de precificação dinâmica baseados em padrões de demanda."
              />
              <FeatureCard
                icon={BarChart3}
                title="Previsão de Demanda"
                description="Previsão precisa de demanda para estoque e planejamento."
              />
              <FeatureCard
                icon={MessageSquare}
                title="Insights em Linguagem Natural"
                description="Geração automatizada de insights com explicações em linguagem natural."
              />
            </div>
          </ContentSection>

          <ContentSection title="Nossa Stack de Tecnologia">
            <p>
              Utilizamos Google Cloud AI, BigQuery ML, TensorFlow e modelos Python customizados de acordo com suas necessidades. 
              Todos os modelos são explicáveis — não entregamos caixas-pretas.
            </p>
            <p>
              Você entenderá o porquê de cada previsão feita pela IA.
            </p>
          </ContentSection>

          <ContentSection title="Abordagem de Implementação">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Fase de descoberta para identificar casos de uso de alto impacto</li>
              <li>Preparação de dados e engenharia de features</li>
              <li>Desenvolvimento e validação de modelos</li>
              <li>Integração com seus workflows existentes</li>
              <li>Monitoramento contínuo e refinamento</li>
            </ul>
          </ContentSection>

          <ContentSection title="Ideal Para">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Organizações com volume de dados suficiente para treinamento de modelos</li>
              <li>Empresas buscando diferenciação competitiva através de analytics</li>
              <li>Times prontos para agir com base em insights preditivos</li>
              <li>Empresas comprometidas com cultura data-driven</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default AIInsights;
