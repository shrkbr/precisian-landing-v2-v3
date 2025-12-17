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
        title="MMM Implementação & Otimização" 
        subtitle="Modelagem de Mix de Marketing de Nova Geração com IA" 
        description="Nosso serviço ajuda você a entender a verdadeira contribuição do marketing em todos os canais, online e offline."
      >
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Implementação completa, incluindo preparação de dados, configuração do modelo e calibração. Integramos seus dados de investimento em marketing, dados de conversão e fatores externos para construir modelos preditivos precisos.
            </p>
            <p>
              Nossa análise revela incrementalidade, alocação ideal de orçamento e desempenho projetado.
            </p>
          </ContentSection>

          <ContentSection title="Insights Estratégicos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard icon={TrendingUp} title="Contribuição Incremental" description="Contribuição incremental real de cada canal de marketing revelada através de modelagem avançada." />
              <FeatureCard icon={PieChart} title="Alocação de Orçamento" description="Recomendações de alocação ideal de orçamento baseadas em análise estatística." />
              <FeatureCard icon={LineChart} title="ROI Cross-Channel" description="Medição de ROI em canais online e offline em uma visão unificada." />
              <FeatureCard icon={Target} title="Planejamento de Cenários" description="Planejamento de cenários e análise what-if para tomada de decisões estratégicas." />
              <FeatureCard icon={Lightbulb} title="Retornos Decrescentes" description="Identificação de retornos decrescentes para cada canal para otimizar investimentos." />
            </div>
          </ContentSection>

          <ContentSection title="Nosso Processo">
            <p>
              Coleta e preparação de dados de todas as plataformas de marketing, sistemas de vendas e fontes de dados externas. 
              Treinamento do modelo com métodos de inferência Bayesiana. Calibração usando experimentos e testes de holdout.
            </p>
            <p>
              Refinamento contínuo conforme novos dados ficam disponíveis garante que seu modelo permaneça preciso ao longo do tempo.
            </p>
          </ContentSection>

          <ContentSection title="Ideal Para">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Marcas com investimento significativo em mídia em múltiplos canais</li>
              <li>Organizações buscando provar ROI de marketing para stakeholders</li>
              <li>Empresas prontas para ir além dos modelos de atribuição</li>
              <li>Companhias planejando orçamentos anuais de mídia com confiança</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default GoogleMeridian;
