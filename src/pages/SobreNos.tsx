import Layout from "@/components/layout/Layout";
import { Users, Award, Building2, Globe, Zap, TrendingUp, CheckCircle } from "lucide-react";
import nacaoDigitalLogo from "@/assets/nacao-digital-logo.png";

const SobreNos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Sobre Nós
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Uma solução completa de{" "}
              <span className="text-primary">Data Analytics</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Criada pelo time de Web Analytics da Nação Digital, o Precisian nasce da 
              compilação de todo conhecimento e prática em soluções que atendem de forma 
              completa as necessidades de data analytics para marketing digital.
            </p>
          </div>
        </div>
      </section>

      {/* Nação Digital Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img 
                  src={nacaoDigitalLogo} 
                  alt="Nação Digital" 
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A Nação Digital é uma agência de marketing digital focada em performance 
                para digital commerce e geração de demandas para empresas B2B.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">+13 anos</span> de experiência no mercado digital
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">3x eleita</span> a melhor agência para e-commerces segundo a ABCOMM
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">+200 clientes</span> atendidos com excelência
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-background border border-border/50 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">Parceiro Meta</p>
              </div>
              <div className="p-6 rounded-2xl bg-background border border-border/50 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">Parceiro Salesforce</p>
              </div>
              <div className="p-6 rounded-2xl bg-background border border-border/50 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">Parceiro RD Station</p>
              </div>
              <div className="p-6 rounded-2xl bg-background border border-border/50 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">Parceiro Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FCamara Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50">
                  <Globe className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-display text-2xl font-bold text-foreground mb-2">+16 anos</h4>
                  <p className="text-muted-foreground text-sm">de mercado</p>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-border/50">
                  <Building2 className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-display text-2xl font-bold text-foreground mb-2">+100</h4>
                  <p className="text-muted-foreground text-sm">empresas atendidas</p>
                </div>
                <div className="col-span-2 p-8 rounded-2xl bg-card border border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-foreground">Multinacional Brasileira</h4>
                      <p className="text-muted-foreground text-sm">Operação na Europa e Reino Unido</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  FCamara
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Fazemos parte de um dos maiores grupos de tecnologia e inovação do Brasil. 
                A FCamara é um ecossistema de tecnologia e inovação que potencializa o futuro 
                de negócios, integrando visão estratégica com execução inteligente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhamos lado a lado com nossos clientes para proporcionar experiências 
                transformadoras, combinando expertise técnica com visão de negócios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precisian Origin */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                A Origem do Precisian
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O time de Web Analytics da Nação Digital foi responsável pelo onboarding e 
              configuração de data analytics de mais de <span className="text-foreground font-semibold">200 projetos</span>, 
              desde e-commerces até aplicativos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Ferramentas de Mídia Paga
              </h3>
              <p className="text-muted-foreground text-sm">
                Expertise completa em plataformas de anúncios e performance
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Plataformas de Commerce
              </h3>
              <p className="text-muted-foreground text-sm">
                Integração com as principais plataformas de e-commerce do mercado
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Ferramentas Google
              </h3>
              <p className="text-muted-foreground text-sm">
                Domínio completo do ecossistema Google Analytics e Tag Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conte com nosso time de especialistas
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              O Precisian nasce da compilação de todo o conhecimento e prática do time em 
              soluções que atendem de forma completa as necessidades de data analytics 
              para marketing digital.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
            >
              Fale com um especialista
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreNos;
