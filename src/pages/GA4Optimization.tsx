import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { BarChart3, CheckCircle, Target, Users, Shield, LineChart, Search, Settings, Database, BadgeCheck } from "lucide-react";

const diagnosticSteps = [
  {
    icon: Settings,
    title: "Configuração da Propriedade",
    description: "Verificação completa das configurações da propriedade GA4, incluindo fluxos de dados e parâmetros.",
  },
  {
    icon: Database,
    title: "Coleta de Dados",
    description: "Análise de como os dados são enviados, validação de eventos e parâmetros customizados.",
  },
  {
    icon: Search,
    title: "Auditoria Técnica",
    description: "Revisão do GTM, tags, triggers e variáveis que impactam a qualidade dos dados.",
  },
  {
    icon: BadgeCheck,
    title: "Certificação de Qualidade",
    description: "Garantia de que tudo está configurado e otimizado, gerando assertividade nos dados.",
  },
];

const GA4Optimization = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={BarChart3}
        title="GA4 Optimization"
        subtitle="Maximize o Potencial do Seu Google Analytics 4"
        description="Nosso serviço de otimização GA4 garante que seu negócio extraia o máximo valor dessa poderosa plataforma."
      >
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Realizamos uma auditoria completa da sua implementação atual do GA4, identificando lacunas e oportunidades. 
              Nossa equipe configura eventos avançados, conversões personalizadas e audiências alinhadas com seus objetivos de negócio. 
              Criamos relatórios customizados e explorações que transformam dados brutos em insights acionáveis.
            </p>
          </ContentSection>

          <ContentSection title="Diagnóstico de Confiabilidade">
            <p className="mb-8">
              Desenvolvemos um método exclusivo de verificação do Google Analytics que analisa diversos fatores, 
              desde a configuração da propriedade até como os dados são enviados, garantindo total assertividade.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {diagnosticSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative card-gradient p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-primary/60">0{index + 1}</span>
                    </div>
                    <h4 className="font-display font-semibold text-foreground mb-2 text-sm">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </ContentSection>

          <ContentSection title="Principais Benefícios">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={CheckCircle}
                title="Precisão de Dados Aprimorada"
                description="Maior precisão e confiabilidade dos dados em todos os pontos de contato."
              />
              <FeatureCard
                icon={Target}
                title="Rastreamento de Eventos Personalizado"
                description="Rastreamento de eventos customizado para seu modelo de negócio específico."
              />
              <FeatureCard
                icon={LineChart}
                title="Métricas Preditivas"
                description="Métricas preditivas e recursos avançados de segmentação de audiências."
              />
              <FeatureCard
                icon={Users}
                title="Análise Cross-Platform"
                description="Análise da jornada do usuário entre plataformas para visibilidade completa."
              />
              <FeatureCard
                icon={Shield}
                title="Conformidade LGPD"
                description="Total conformidade com LGPD e regulamentações de privacidade de dados."
              />
            </div>
          </ContentSection>

          <ContentSection title="Nossa Abordagem">
            <p>
              Começamos entendendo seus KPIs e objetivos de negócio. Em seguida, mapeamos interações críticas dos usuários, 
              configuramos medição aprimorada e implementamos dimensões customizadas relevantes para seu processo de tomada de decisão.
            </p>
            <p>
              Nossa otimização inclui configuração de fluxos de dados, refinamento do rastreamento de conversões 
              e integração com Google Ads e outras plataformas de marketing.
            </p>
          </ContentSection>

          <ContentSection title="Para Quem é Indicado">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>E-commerces que buscam entender a jornada completa do cliente</li>
              <li>Empresas SaaS rastreando engajamento de produto</li>
              <li>Sites de geração de leads otimizando funis de conversão</li>
              <li>Qualquer organização séria sobre tomada de decisão baseada em dados</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default GA4Optimization;
