import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Calendar, Target, Code, Link, Database, Eye } from "lucide-react";

const PrecisianEvents = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={Calendar}
        title="Precisian Events"
        subtitle="Gestão Completa de Eventos para Analytics"
        description="Entenda a Jornada Completa do Seu Cliente com Rastreamento Avançado de Eventos. A qualidade das suas decisões depende da qualidade dos seus dados."
        cases={["BCMED", "Irrah", "A. DIAS", "Pague Menos", "Angeloni", "Tecnospeed"]}
      >
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Implementação completa de arquitetura de eventos personalizada para o seu negócio. 
              Realizamos o mapeamento detalhado de todas as interações críticas do usuário, 
              desde o primeiro contato até a conversão e além.
            </p>
            <p>
              Criamos e configuramos eventos customizados no GA4, integramos com todas as 
              plataformas que geram conversões, e estabelecemos uma camada de dados (Data Layer) 
              robusta e escalável.
            </p>
          </ContentSection>

          <ContentSection title="Arquitetura de Eventos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Target}
                title="Mapeamento Estratégico"
                description="Identificamos todos os eventos relevantes baseados nos seus objetivos de negócio—não apenas cliques genéricos, mas ações significativas que revelam intenção e comportamento."
              />
              <FeatureCard
                icon={Code}
                title="Criação e Configuração"
                description="Implementamos eventos customizados com parâmetros enriquecidos que capturam contexto completo (categoria de produto, valor, origem, etapa do funil, etc.)"
              />
              <FeatureCard
                icon={Link}
                title="Integração Multi-Plataforma"
                description="Conectamos todas as fontes de conversão—site, app, CRM, e-commerce, chatbots, telefonia—em uma visão unificada."
              />
              <FeatureCard
                icon={Database}
                title="Unificação de Dados"
                description="Consolidamos eventos de diferentes plataformas usando identificadores consistentes, permitindo análise cross-device e cross-platform."
              />
              <FeatureCard
                icon={Eye}
                title="Visão 360° do Cliente"
                description="Construímos a jornada completa do usuário, do primeiro touchpoint ao pós-venda, revelando padrões ocultos de comportamento."
              />
            </div>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default PrecisianEvents;
