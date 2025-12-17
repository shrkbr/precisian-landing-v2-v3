import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import ContentSection from "@/components/services/ContentSection";
import FeatureCard from "@/components/services/FeatureCard";
import { Database, ArrowLeftRight, CheckCircle, Shield, RefreshCw, Building2, Target, TrendingUp, CheckCircle2 } from "lucide-react";
const PrecisianCore = () => {
  return <Layout>
      <ServicePageLayout icon={Database} title="Precisian Core" subtitle="Envio de Dados de Vendas e Conciliação com Mídia" description="Centralize seus dados de vendas e conecte-os diretamente aos canais de mídia para uma visão completa do seu funil de conversão.">
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

          {/* Cases de Sucesso */}
          <section className="mt-16 pt-16 border-t border-border">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-center">
              Cases de <span className="gradient-text">Sucesso</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Veja como transformamos a conciliação de dados em resultados concretos para nossos clientes.
            </p>

            <div className="grid gap-8">
              {/* Case Nuvio Foods */}
              <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div className="bg-secondary/30 px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Nuvio Foods
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        E-commerce | VTEX | Assinaturas
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
                        No e-commerce da Nuvio Foods, o usuário pode realizar assinatura de produtos, recebendo automaticamente o mesmo item em casa todos os meses com cobranças recorrentes. A VTEX gera uma nova transação (com ID único) a cada mês para os usuários de assinaturas, como se fosse uma compra nova. Porém, o GTM registrava apenas a primeira transação no GA4, criando uma lacuna mensal de <strong>mais de 50% de pedidos e receita</strong> não registrados.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">Nossa Solução</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        O time de Web Analytics desenvolveu uma <strong>API customizada</strong> que envia todas as assinaturas registradas mensalmente na VTEX diretamente para o GA4, eliminando a dependência do GTM e garantindo cobertura completa dos dados de vendas recorrentes.
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
                        <strong>100% dos pedidos</strong> registrados corretamente no GA4 em novembro
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Antes: média de apenas <strong>46% a 50%</strong> dos pedidos capturados
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Eliminação da dependência do GTM para assinaturas
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Visibilidade completa da receita recorrente
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ServicePageLayout>
    </Layout>;
};
export default PrecisianCore;