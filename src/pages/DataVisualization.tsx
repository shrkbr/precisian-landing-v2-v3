import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { PieChart, BarChart3, Activity, Zap } from "lucide-react";

const DataVisualization = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={PieChart}
        title="Visualização de Dados"
        subtitle="Transforme Dados em Decisões com Visualizações Poderosas"
        description="Dados brutos contam histórias incompletas. Nosso serviço de visualização de dados cria dashboards e relatórios intuitivos que impulsionam ações em toda sua organização."
      >
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Dashboards customizados em Looker Studio (Data Studio), Power BI ou Tableau adaptados para diferentes stakeholders. 
              Conectamos múltiplas fontes de dados—GA4, Google Ads, Meta Ads, sistemas CRM e mais—em visões unificadas.
            </p>
            <p>
              Nossos designs priorizam clareza, permitindo compreensão rápida de dados complexos.
            </p>
          </ContentSection>

          <ContentSection title="Soluções de Dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={BarChart3}
                title="Dashboards Executivos"
                description="KPIs de alto nível e tendências para tomada de decisão da liderança."
              />
              <FeatureCard
                icon={Activity}
                title="Performance de Marketing"
                description="Detalhes a nível de campanha com métricas de performance em tempo real."
              />
              <FeatureCard
                icon={PieChart}
                title="Analytics de E-commerce"
                description="Receita, conversão, ticket médio e rastreamento de comportamento do cliente."
              />
              <FeatureCard
                icon={Zap}
                title="Monitoramento em Tempo Real"
                description="Dashboards de métricas críticas com atualizações instantâneas."
              />
            </div>
          </ContentSection>

          <ContentSection title="Princípios de Design">
            <p>
              Seguimos as melhores práticas de visualização de dados: hierarquia clara, tipos de gráficos apropriados, 
              comparações contextuais e designs responsivos para mobile.
            </p>
            <p>
              Cada dashboard conta uma história, guiando usuários da visão geral aos detalhes.
            </p>
          </ContentSection>

          <ContentSection title="Excelência Técnica">
            <p>
              Recursos avançados incluem campos calculados, comparações de períodos, capacidades de drill-down 
              e filtros interativos. Otimizamos a performance dos dashboards para carregamento rápido mesmo com grandes volumes de dados.
            </p>
          </ContentSection>

          <ContentSection title="Impacto nos Negócios">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Democratize o acesso a dados em toda sua organização</li>
              <li>Habilite analytics self-service que reduzem solicitações de relatórios</li>
              <li>Alinhe equipes em torno de métricas compartilhadas</li>
              <li>Acelere a tomada de decisões com insights sempre disponíveis</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default DataVisualization;
