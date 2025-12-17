import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Settings, Folder, Code, Bug, GitBranch, ShoppingCart, BookCheck, CheckCircle2, Shield, Eye, Zap, Clock, Target, Layers } from "lucide-react";

const qualitySteps = [
  {
    icon: Eye,
    title: "Modo Preview",
    description: "Testes rigorosos no modo Preview do GTM para validar cada disparo.",
  },
  {
    icon: CheckCircle2,
    title: "Validação de Dados",
    description: "Verificação da precisão dos dados e identificação de inconsistências.",
  },
  {
    icon: Shield,
    title: "Conformidade LGPD",
    description: "Garantia de conformidade com regulamentações de privacidade.",
  },
  {
    icon: Zap,
    title: "Deploy Seguro",
    description: "Testes em staging antes do deploy em produção.",
  },
];

const gtmBenefits = [
  {
    icon: Clock,
    title: "Agilidade no Lançamento",
    description: "Reduz o tempo de lançamento de campanhas de marketing.",
  },
  {
    icon: Target,
    title: "Independência Técnica",
    description: "Elimina dependência de equipes de desenvolvimento para atualizações.",
  },
  {
    icon: Layers,
    title: "Centralização",
    description: "Mantém uma única fonte de verdade para todos os códigos de rastreamento.",
  },
  {
    icon: GitBranch,
    title: "Flexibilidade",
    description: "Oferece flexibilidade para testar e iterar rapidamente.",
  },
];

const GTMSetup = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={Settings}
        title="Google Tag Manager Setup & Otimização"
        subtitle="Gestão Ágil de Tags Sem Dependência de Desenvolvedores"
        description="O Google Tag Manager transforma a forma como você implementa e gerencia tags de marketing. Nosso serviço elimina gargalos, reduz o tempo de implementação e garante qualidade dos dados."
      >
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Arquitetura completa de container GTM projetada para escalabilidade e manutenibilidade. 
              Implementamos rastreamento de eventos, pixels de conversão, tags de remarketing e integrações com terceiros.
            </p>
            <p>
              Nossa documentação garante que sua equipe possa gerenciar tags de forma independente, mantendo os padrões de qualidade dos dados.
            </p>
          </ContentSection>

          <ContentSection title="Serviços Principais">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Folder}
                title="Estrutura de Container Organizada"
                description="Estrutura de container organizada com convenções de nomenclatura para fácil manutenção."
              />
              <FeatureCard
                icon={Code}
                title="Revisão de Data Layer"
                description="Análise e otimização da estrutura de Data Layer existente para garantir rastreamento preciso."
              />
              <FeatureCard
                icon={BookCheck}
                title="Governança e Boas Práticas"
                description="Método desenvolvido pelo time de nomenclatura e organização para garantir otimização do container."
              />
              <FeatureCard
                icon={Bug}
                title="Validação de Tags"
                description="Validação de disparo de tags e debugging abrangente."
              />
              <FeatureCard
                icon={GitBranch}
                title="Controle de Versão"
                description="Controle de versão e gerenciamento de workspaces para colaboração em equipe."
              />
              <FeatureCard
                icon={ShoppingCart}
                title="E-commerce Aprimorado"
                description="Configuração de rastreamento de e-commerce aprimorado para visibilidade completa do funil de compra."
              />
            </div>
          </ContentSection>

          <ContentSection title="Garantia de Qualidade">
            <p className="mb-8">
              Toda implementação passa por um processo rigoroso de validação para garantir precisão e confiabilidade dos dados.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {qualitySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
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

          <ContentSection title="Por Que o GTM é Importante">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {gtmBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-5 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default GTMSetup;
