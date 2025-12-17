import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Settings, Folder, Code, Bug, GitBranch, ShoppingCart, BookCheck } from "lucide-react";

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
            <p>
              Toda implementação passa por testes rigorosos no modo Preview do GTM. 
              Validamos a precisão dos dados, verificamos conflitos de tags e garantimos conformidade com a LGPD.
            </p>
            <p>
              Nosso processo de rollout inclui testes em ambiente de staging antes do deploy em produção.
            </p>
          </ContentSection>

          <ContentSection title="Por Que o GTM é Importante">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Reduz o tempo de lançamento de campanhas de marketing</li>
              <li>Elimina dependência de equipes de desenvolvimento para atualizações de tags</li>
              <li>Mantém uma única fonte de verdade para todos os códigos de rastreamento</li>
              <li>Oferece flexibilidade para testar e iterar rapidamente</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default GTMSetup;
