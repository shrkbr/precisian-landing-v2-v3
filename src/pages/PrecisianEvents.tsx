import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import EventsFlowchart from "@/components/services/EventsFlowchart";
import EventMappingDemo from "@/components/services/EventMappingDemo";
import { Calendar } from "lucide-react";

const PrecisianEvents = () => {
  return (
    <Layout>
      <ServicePageLayout 
        icon={Calendar} 
        title="Precisian Events" 
        subtitle="Gestão Completa de Evento" 
        description="Entenda a Jornada Completa do Seu Cliente com Rastreamento Avançado de Eventos. A qualidade das suas decisões depende da qualidade dos seus dados." 
        cases={["BCMED", "Irrah", "A. DIAS", "Pague Menos", "Angeloni", "Tecnospeed"]}
      >
        <div className="max-w-5xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Mapeamento completo de todos os eventos relevantes do seu negócio, configurados e 
              enviados para <strong className="text-foreground">múltiplas plataformas simultaneamente</strong>. 
              Não nos limitamos ao Google Analytics—integramos com Meta Ads, Google Ads, Pinterest Ads, 
              TikTok Ads e ferramentas de CRM como HubSpot e RD Station.
            </p>
            <p>
              Cada interação do usuário é traduzida para o formato específico de cada plataforma, 
              garantindo que seus dados de conversão alimentem todas as suas ferramentas de marketing e vendas.
            </p>
            <EventMappingDemo />
          </ContentSection>

          <ContentSection title="Nossa Jornada de Implementação">
            <p className="mb-8">
              Um processo estruturado e transparente, do planejamento à entrega final.
            </p>
            <EventsFlowchart />
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default PrecisianEvents;