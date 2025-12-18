import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import SKUFlowchart from "@/components/services/SKUFlowchart";
import { Package, TrendingUp, Settings, Building2, Target, TrendingUp as Solution, CheckCircle2 } from "lucide-react";

const PrecisianSKU = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={Package}
        title="Precisian Catalog"
        subtitle="Gestão Inteligente de Catálogo de Produtos"
        description="Disponibilize Seus Produtos em Todas as Plataformas com Dados Sempre Atualizados. Ter produtos excelentes não é suficiente, eles precisam estar visíveis, atualizados e otimizados em cada plataforma."
      >
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Sistema completo de gestão de feed de produtos que mantém seu catálogo sincronizado em tempo real através de todas as plataformas de mídia: Google Shopping, Meta Catalog, TikTok Shop, etc.
            </p>
            <p>
              Implementamos otimizações avançadas que melhoram a performance de cada SKU em cada canal.
            </p>
          </ContentSection>

          <ContentSection title="Nossa Jornada de Implementação">
            <SKUFlowchart />
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

          {/* Cases de Sucesso */}
          <section className="mt-16 pt-16 border-t border-border">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-center">
              Cases de <span className="gradient-text">Sucesso</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Veja como transformamos a gestão de catálogo em resultados concretos para nossos clientes.
            </p>

            <div className="grid gap-8">
              {/* Case Pague Menos */}
              <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div className="bg-secondary/30 px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Pague Menos
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        Varejo | VTEX
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-orange-500" />
                        <h4 className="font-semibold text-foreground">O Desafio</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        O cliente tem seu catálogo de produtos na VTEX dividido entre produtos 1P e 3P. Quando utilizadas estratégias como a integração nativa da plataforma ou o XML, apenas as informações básicas do produto eram enviadas, o que não permitia uma segmentação estratégica. O time de mídia gostaria de rodar campanhas específicas apenas para produtos 1P ou para determinados sellers, o que não era possível.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">Nossa Solução</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Com a nossa solução, além do envio massivo e em tempo real dos produtos, criamos rótulos personalizados que são utilizados para segmentar os públicos na hora de configurar as campanhas.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Resultados
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Segmentação estratégica de campanhas por tipo de produto (1P vs 3P)
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Campanhas específicas por seller habilitadas
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Rótulos personalizados para otimização de mídia
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Envio massivo e em tempo real de produtos
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Fabricante Online */}
              <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div className="bg-secondary/30 px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Fabricante Online
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        E-commerce | VTEX
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-orange-500" />
                        <h4 className="font-semibold text-foreground">O Desafio</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        A forma como o cliente cadastrava o preço do produto dentro da VTEX não permitia que, quando um produto entrava com um preço promocional, essa atualização fosse refletida para o Google Merchant. Isso fazia com que vários produtos promocionais ficassem com preço desatualizado nas campanhas.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">Nossa Solução</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Com nossa solução, a partir do momento que o preço do produto é atualizado na plataforma, a promoção já é aplicada para o produto cadastrado na campanha dentro do Google Ads.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Resultados
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Sincronização em tempo real de preços promocionais
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Eliminação de preços desatualizados nas campanhas
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Maior competitividade em produtos em promoção
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Redução de cliques perdidos por inconsistência de preço
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default PrecisianSKU;
