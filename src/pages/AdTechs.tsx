import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone, Server, Target, Zap, Shield, RefreshCw, BarChart3, Settings, ShoppingBag, ArrowRight } from "lucide-react";

const AdTechs = () => {
  return (
    <Layout>
      <ServicePageLayout
        icon={Megaphone}
        title="AdTechs"
        subtitle="Configuração Completa de Ferramentas de Mídia Paga"
        description="Implementação profissional de todas as ferramentas de mídia paga incluindo Server-Side para eventos mais precisos e resilientes."
        cases={["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads"]}
      >
        <div className="max-w-4xl">
          <ContentSection title="O Que Entregamos">
            <p>
              Configuração completa e otimizada das ferramentas de mídia paga, desde pixels básicos 
              até implementações avançadas de Server-Side Tracking. Garantimos que seus dados de 
              conversão sejam precisos, completos e resilientes a bloqueadores.
            </p>
            <p>
              Cobrimos todo o ecossistema de AdTech: Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, 
              Pinterest, Twitter/X, e plataformas programáticas.
            </p>
          </ContentSection>

          <ContentSection title="Server-Side Tracking">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Server}
                title="GTM Server-Side"
                description="Implementação completa do Google Tag Manager Server-Side para maior controle, precisão e performance no tracking."
              />
              <FeatureCard
                icon={Shield}
                title="Bypass de Bloqueadores"
                description="Configuração first-party que contorna bloqueadores de anúncios e restrições de navegadores como ITP Safari."
              />
              <FeatureCard
                icon={Zap}
                title="Performance Otimizada"
                description="Reduza o peso de scripts no navegador movendo processamento para o servidor, melhorando Core Web Vitals."
              />
              <FeatureCard
                icon={RefreshCw}
                title="Dados Mais Completos"
                description="Capture conversões que seriam perdidas com tracking client-side tradicional, aumentando volume de dados."
              />
            </div>
          </ContentSection>

          <ContentSection title="Catálogo de Produtos">
            <p className="mb-6">
              Garantimos que todos os produtos cadastrados na sua plataforma de e-commerce sejam enviados 
              corretamente para as ferramentas de mídia paga, principalmente Google Merchant Center e 
              Catálogo de Produtos da Meta.
            </p>
            <p className="mb-6">
              Podemos utilizar soluções nativas como XML e integrações de aplicativos, ou desenvolver 
              soluções personalizadas de acordo com suas necessidades específicas.
            </p>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-foreground mb-2">Precisian SKU</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Nossa solução especializada em gestão de feeds de produtos. Criamos APIs personalizadas 
                    para extrair, manipular e enviar dados de produtos para qualquer plataforma, com 
                    atualização em tempo real de preços, estoque e informações, além de rótulos personalizados 
                    que não existem em integrações nativas.
                  </p>
                  <Button asChild>
                    <Link to="/precisian-sku" className="inline-flex items-center gap-2">
                      Conheça o Precisian SKU
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Plataformas Suportadas">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Google:</strong> Google Ads, Google Analytics 4, Search Ads 360, DV360</li>
              <li><strong>Meta:</strong> Facebook Pixel, Conversions API, Meta Business Suite</li>
              <li><strong>TikTok:</strong> TikTok Pixel, Events API, TikTok Ads Manager</li>
              <li><strong>Microsoft:</strong> Microsoft Ads, Bing UET Tag</li>
              <li><strong>Outros:</strong> LinkedIn Insight Tag, Pinterest Tag, Twitter Pixel, Criteo, RTB House</li>
            </ul>
          </ContentSection>

          <ContentSection title="Serviços Inclusos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={Target}
                title="Configuração de Pixels"
                description="Instalação e configuração completa de todos os pixels de conversão com eventos customizados e parâmetros avançados."
              />
              <FeatureCard
                icon={BarChart3}
                title="Audiences & Remarketing"
                description="Criação de públicos personalizados, lookalikes e listas de remarketing otimizadas para cada plataforma."
              />
              <FeatureCard
                icon={Settings}
                title="Conversions API"
                description="Implementação das APIs de conversão (CAPI) de todas as plataformas para dados server-side confiáveis."
              />
            </div>
          </ContentSection>
        </div>
      </ServicePageLayout>
    </Layout>
  );
};

export default AdTechs;