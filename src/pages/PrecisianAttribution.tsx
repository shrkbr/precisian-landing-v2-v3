import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { GitBranch, Share2, Brain, Link, Server, Layers } from "lucide-react";

const PrecisianAttribution = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={GitBranch}
        title="Precisian Attribution"
        subtitle="Atribuição Avançada Além do Last Click"
        description="Descubra o Verdadeiro Valor de Cada Canal de Marketing. Nem sempre o problema está na mídia—muitas vezes o problema são os dados!"
        cases={["Adcos", "Pague Menos"]}
      >
        <div className="max-w-4xl">
          <ContentSection title="O Problema">
            <p>
              A atribuição Last Click distorce a realidade, super-valorizando canais de conversão 
              final e sub-valorizando canais de descoberta e consideração. O Precisian Attribution 
              revela a contribuição real de cada investimento de marketing.
            </p>
          </ContentSection>

          <ContentSection title="O Que Entregamos">
            <p>
              Implementação completa de modelos de atribuição avançados que vão muito além do last click. 
              Construímos modelos MMM (Marketing Mix Modeling) customizados usando dados multi-canal, 
              unindo investimentos online e offline com conversões reais.
            </p>
            <p>
              Desenvolvemos metodologia server-side para superar limitações de tracking e cookies, 
              além de integração nativa com GA4 e plataformas de e-commerce.
            </p>
          </ContentSection>

          <ContentSection title="Modelos de Atribuição">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Share2}
                title="Atribuição Multi-Touch"
                description="Implementamos modelos Data-Driven, Linear, Time Decay, Position-Based, e customizados baseados no seu ciclo de venda específico."
              />
              <FeatureCard
                icon={Brain}
                title="Marketing Mix Modeling (MMM)"
                description="Construímos modelos estatísticos avançados que correlacionam investimentos com resultados, controlando sazonalidade e fatores externos."
              />
              <FeatureCard
                icon={Link}
                title="Integração Multi-Canal"
                description="Unimos dados de Google Ads, Meta Ads, TikTok, programática, TV, rádio, OOH, CRM e vendas em uma única camada analítica."
              />
              <FeatureCard
                icon={Server}
                title="Tracking Server-Side"
                description="Implementamos rastreamento via servidor que contorna bloqueios de browser, ad blockers e restrições de cookies."
              />
              <FeatureCard
                icon={Layers}
                title="Eliminação de Conflitos"
                description="Resolvemos problemas de canais 'canibalizando' crédito uns dos outros através de metodologia robusta de deduplicação."
              />
            </div>
          </ContentSection>

          <ContentSection title="Exemplos Práticos">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>E-commerce descobrindo que Facebook tem 3x mais impacto na fase de consideração do que last click sugeria</li>
              <li>B2B identificando que webinars influenciam 40% das conversões atribuídas erroneamente a Search</li>
              <li>Varejista revelando que investimento em branding tem ROI de 280% quando calculado corretamente, não apenas 60% no last click</li>
            </ul>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default PrecisianAttribution;
