import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import EventsFlowchart from "@/components/services/EventsFlowchart";
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
              Implementação completa de arquitetura de eventos personalizada para o seu negócio. 
              Realizamos o mapeamento detalhado de todas as interações críticas do usuário, 
              desde o primeiro contato até a conversão e além.
            </p>
            <p>
              Criamos e configuramos eventos customizados no GA4, integramos com todas as plataformas que geram conversões.  
            </p>
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