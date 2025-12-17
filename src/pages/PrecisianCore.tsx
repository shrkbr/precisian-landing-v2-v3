import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Database, ArrowLeftRight, CheckCircle, Shield, RefreshCw } from "lucide-react";
const PrecisianCore = () => {
  return <Layout>
      <ServicePageLayout icon={Database} title="Precisian Core" subtitle="Envio de Dados de Vendas e Conciliação com Mídia" description="Centralize seus dados de vendas e conecte-os diretamente aos canais de mídia para uma visão completa do seu funil de conversão." cases={["E-commerce", "Varejo", "Marketplaces", "Indústria"]}>
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Solução completa para envio de dados de vendas entre plataformas e conciliação automática com canais de mídia. Conectamos sua Plataforma de e-commerce diretamente às ferramentas de marketing para atribuição precisa.
            </p>
            <p>
              Eliminamos a lacuna entre vendas reais e dados de mídia, garantindo que cada 
              conversão seja corretamente atribuída ao canal que a gerou.
            </p>
          </ContentSection>

          <ContentSection title="Funcionalidades Principais">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard icon={ArrowLeftRight} title="Integração Multi-Plataforma" description="Conectamos sua plataformas de e-commerce e sistemas de PDV às plataformas de mídia como Google, Meta, TikTok, CRM e mais." />
              <FeatureCard icon={CheckCircle} title="Conciliação de Atribuição" description="Cruzamento automático de dados de vendas com conversões reportadas, identificando discrepâncias e ajustando atribuições." />
              <FeatureCard icon={Shield} title="Dados Seguros" description="Transmissão criptografada e anonimização de dados sensíveis seguindo LGPD e melhores práticas de privacidade." />
              <FeatureCard icon={RefreshCw} title="Sincronização em Tempo Real" description="Dados de vendas enviados continuamente para otimização de campanhas com informações sempre atualizadas." />
            </div>
          </ContentSection>

          <ContentSection title="Benefícios para Seu Negócio">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Redução da diferença de receita</strong> entre a plataforma de e-commerce e as ferramentas de Marketing Digital</li>
              <li>Atribuição precisa do ROI de cada canal de mídia</li>
              <li>Otimização de campanhas baseada em vendas reais, não apenas conversões online</li>
              <li>Visibilidade completa do funil: do clique à venda final</li>
              <li>Identificação de vendas offline atribuídas a campanhas digitais</li>
              <li>Redução de custos com eliminação de duplicidades e erros de tracking</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>;
};
export default PrecisianCore;