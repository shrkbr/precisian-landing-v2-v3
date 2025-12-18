import { Button } from "@/components/ui/button";
import { Shield, Zap, Brain, ChartBar, Link2 } from "lucide-react";
import auditosLogo from "@/assets/auditos-logo.png";

const features = [
  {
    icon: Link2,
    title: "Conexão Automática",
    description: "Vincule seu e-mail e conecte suas propriedades GA4 automaticamente"
  },
  {
    icon: Shield,
    title: "Auditoria Completa",
    description: "Regras de análise desenvolvidas pelo nosso time de especialistas"
  },
  {
    icon: ChartBar,
    title: "Score de Qualidade",
    description: "Avaliação completa da sua configuração com pontuação clara"
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Insights e sugestões inteligentes gerados por IA"
  }
];

const AuditOSSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Ferramenta Exclusiva
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 flex items-center justify-center gap-4 flex-wrap">
            Conheça o <img src={auditosLogo} alt="AuditOS" className="h-10 md:h-14 inline-block" />
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Sistema de inteligência desenvolvido pela Precisian que audita, valida e orquestra 
            suas propriedades do GA4 de forma prática e automatizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-gradient p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process visualization */}
        <div className="card-gradient rounded-3xl border border-border p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Zap className="h-4 w-4" />
                Simples & Rápido
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Como funciona?
              </h3>
              <p className="text-muted-foreground">
                Em poucos cliques, você terá uma avaliação completa da sua configuração GA4.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex items-center gap-3 bg-background/50 rounded-xl p-4 border border-border flex-1">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <span className="text-foreground font-medium">Vincule seu e-mail</span>
                </div>
                <div className="hidden md:block text-muted-foreground">→</div>
                <div className="flex items-center gap-3 bg-background/50 rounded-xl p-4 border border-border flex-1">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <span className="text-foreground font-medium">Conecta propriedades</span>
                </div>
                <div className="hidden md:block text-muted-foreground">→</div>
                <div className="flex items-center gap-3 bg-background/50 rounded-xl p-4 border border-border flex-1">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <span className="text-foreground font-medium">Receba o relatório</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="glow-primary">
            Faça uma análise gratuita agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuditOSSection;
