import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import ClarityFlowchart from "@/components/services/ClarityFlowchart";
import ImplementationModels from "@/components/services/ImplementationModels";
import ClarityCaseStudies from "@/components/services/ClarityCaseStudies";
import { PieChart, BarChart3, Activity, Zap, Layers, Target, Gauge, Smartphone } from "lucide-react";
import dashboard1 from "@/assets/dashboard1.png";
import dashboard2 from "@/assets/dashboard2.png";
import dashboard3 from "@/assets/dashboard3.png";
const capabilities = [
  {
    icon: BarChart3,
    title: "Dashboards Executivos",
    description: "KPIs e tendências de alto nível para tomada de decisão da liderança.",
  },
  {
    icon: Activity,
    title: "Performance de Marketing",
    description: "Detalhamento por campanha com métricas de performance em tempo real.",
  },
  {
    icon: PieChart,
    title: "Analytics de E-commerce",
    description: "Receita, conversão, ticket médio e comportamento do cliente.",
  },
  {
    icon: Zap,
    title: "Monitoramento em Tempo Real",
    description: "Dashboards de métricas críticas com atualizações instantâneas.",
  },
  {
    icon: Layers,
    title: "Hierarquia Visual Clara",
    description: "Cada dashboard conta uma história, guiando da visão geral aos detalhes.",
  },
  {
    icon: Target,
    title: "Comparações Contextuais",
    description: "Tipos de gráficos apropriados e comparações de período inteligentes.",
  },
  {
    icon: Gauge,
    title: "Alta Performance",
    description: "Carregamento rápido mesmo com grandes volumes de dados.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Dashboards otimizados para desktop, tablet e mobile.",
  },
];

const DataVisualization = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={PieChart}
        title="Precisian Clarity"
        subtitle="Transforme Dados em Decisões com Visualizações Poderosas"
        description="Dados brutos contam histórias incompletas. Nosso serviço de visualização de dados cria dashboards e relatórios intuitivos que impulsionam ações em toda a sua organização."
      >
        <div className="max-w-5xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Dashboards customizados em Looker Studio (Data Studio), Power BI ou Tableau adaptados para diferentes stakeholders. Conectamos múltiplas fontes de dados, GA4, Google Ads, Meta Ads, sistemas CRM e mais, em visões unificadas.
            </p>
            <p>
              Nossos designs priorizam clareza, permitindo compreensão rápida de dados complexos.
            </p>
          </ContentSection>

          <ContentSection title="Modelos de Dashboard">
            <p className="mb-8">
              Confira alguns exemplos de dashboards desenvolvidos pela nossa equipe para diferentes segmentos e necessidades.
            </p>
            <div className="grid gap-6">
              <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <img 
                  src={dashboard1} 
                  alt="Dashboard de Performance - Visão geral com métricas de sessões, cliques, conversões e ROAS" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Dashboard de Performance</h4>
                    <p className="text-muted-foreground text-sm">Visão consolidada de métricas de tráfego, conversões e receita com integração multi-plataforma.</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <img 
                    src={dashboard2} 
                    alt="Dashboard de Digital Trade - Análise de produtos, categorias e campanhas" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">Digital Trade & Strategy</h4>
                      <p className="text-muted-foreground text-sm">Análise de produtos, categorias e performance de campanhas por persona.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <img 
                    src={dashboard3} 
                    alt="Dashboard de Canais - Análise de funil e metas de performance" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">Análise de Canais & Metas</h4>
                      <p className="text-muted-foreground text-sm">Funil de conversão, sell-out por canal e acompanhamento de metas em tempo real.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Nossa Jornada de Implementação">
            <ClarityFlowchart />
          </ContentSection>

          <ContentSection title="Modelos de Implementação">
            <p className="mb-8">
              Escolha o modelo que melhor se adapta às necessidades e momento do seu negócio.
            </p>
            <ImplementationModels />
          </ContentSection>

          <ContentSection title="O Que Nos Diferencia">
            <p className="mb-8">
              Combinamos expertise técnica com design intuitivo para entregar dashboards que realmente impulsionam decisões.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={index}
                    className="group relative card-gradient p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-display font-semibold text-foreground mb-2 text-sm">
                      {cap.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </ContentSection>

          <ContentSection title="Impacto no Negócio">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Democratize o acesso a dados em toda a organização</li>
              <li>Habilite analytics self-service que reduzem solicitações de relatórios</li>
              <li>Alinhe equipes em torno de métricas compartilhadas</li>
              <li>Acelere a tomada de decisão com insights sempre disponíveis</li>
            </ul>
          </ContentSection>

          <ContentSection title="Cases de Sucesso">
            <p className="mb-8">
              Veja como transformamos dados complexos em dashboards que impulsionam decisões estratégicas.
            </p>
            <ClarityCaseStudies />
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default DataVisualization;