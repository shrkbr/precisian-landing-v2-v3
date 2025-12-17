import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Package, Sparkles, Filter, Plug, RefreshCw, Shield, TrendingUp, Settings } from "lucide-react";

const PrecisianSKU = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={Package}
        title="Precisian SKU"
        subtitle="Gestão Inteligente de Catálogo de Produtos"
        description="Disponibilize Seus Produtos em Todas as Plataformas com Dados Sempre Atualizados. Ter produtos excelentes não é suficiente, eles precisam estar visíveis, atualizados e otimizados em cada plataforma."
        cases={["Fabricante Online", "Pague Menos", "Adcos", "Angeloni"]}
      >
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Sistema completo de gestão de feed de produtos que mantém seu catálogo sincronizado 
              em tempo real através de todas as plataformas de mídia—Google Shopping, Meta Catalog, 
              TikTok Shop, marketplaces, e comparadores de preço.
            </p>
            <p>
              Implementamos otimizações avançadas que melhoram a performance de cada SKU em cada canal.
            </p>
          </ContentSection>

          <ContentSection title="Gestão de Feed de Produtos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Sparkles}
                title="Otimização Inteligente"
                description="Enriquecemos títulos, descrições e atributos de produtos seguindo as melhores práticas de cada plataforma, maximizando visibilidade e taxa de clique."
              />
              <FeatureCard
                icon={Filter}
                title="Estratégia de Segmentação"
                description="Criamos grupos de feed customizados (por categoria, margem, performance, estoque, sazonalidade) permitindo campanhas ultra-segmentadas."
              />
              <FeatureCard
                icon={Plug}
                title="Integração Universal"
                description="Conectamos diretamente com Google Merchant Center, Meta Commerce Manager, TikTok, Pinterest, e qualquer plataforma via API ou arquivo feed."
              />
              <FeatureCard
                icon={RefreshCw}
                title="Atualização em Tempo Real"
                description="Sincronizamos preços, estoque, frete, e todas as características do produto automaticamente—eliminando anúncios de produtos indisponíveis."
              />
              <FeatureCard
                icon={Shield}
                title="Conformidade Garantida"
                description="Asseguramos que seu feed atende todos os requisitos técnicos de cada plataforma, evitando reprovações e suspensões."
              />
            </div>
          </ContentSection>

          <ContentSection title="Impacto nos Resultados">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Aumente a taxa de aprovação de produtos nas plataformas</li>
              <li>Reduza CPC através de dados de produto otimizados e relevantes</li>
              <li>Elimine vendas perdidas por informações desatualizadas</li>
              <li>Expanda presença em novos canais sem trabalho manual repetitivo</li>
              <li>Melhore Quality Score e relevância dos anúncios de produto</li>
            </ul>
          </ContentSection>

          <ContentSection title="Diferenciais Técnicos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={TrendingUp}
                title="Catálogos Massivos"
                description="Suporte a catálogos com milhares de SKUs com performance otimizada."
              />
              <FeatureCard
                icon={Settings}
                title="Regras Avançadas"
                description="Regras condicionais (ex: 'se margem < 20%, não anunciar no Google'), campos calculados e transformações customizadas."
              />
            </div>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default PrecisianSKU;
