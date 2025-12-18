import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Package, Database, Brain, PieChart, BarChart3, Settings, Megaphone, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Comportamento do usuário e Mapeamento de eventos",
    description: "Mapeamento completo de todas as interações críticas do usuário",
    solutions: [
      { name: "Precisian Journey", path: "/precisian-events", icon: Calendar },
      { name: "Precisian Core", path: "/precisian-core", icon: Database },
      { name: "GTM Setup", path: "/gtm-setup", icon: Settings },
      { name: "AdTechs", path: "/adtechs", icon: Megaphone },
    ],
  },
  {
    number: "02",
    title: "Integração e Centralização dos dados",
    description: "Conexão de todas as fontes de dados em uma visão unificada",
    solutions: [
      { name: "Precisian Journey", path: "/precisian-events", icon: Calendar },
      { name: "Precisian Catalog", path: "/precisian-sku", icon: Package },
    ],
  },
  {
    number: "03",
    title: "Governança e Disponibilidade dos dados",
    description: "Dados sempre acessíveis e prontos para análise",
    solutions: [
      { name: "GA4 Optimization", path: "/ga4-optimization", icon: BarChart3 },
      { name: "GTM Setup", path: "/gtm-setup", icon: Settings },
    ],
  },
  {
    number: "04",
    title: "Modelo de atribuição inteligente",
    description: "Atribuição precisa do valor de cada canal de marketing",
    solutions: [
      { name: "Precisian MMM", path: "/google-meridian", icon: Brain },
      { name: "GA4 Optimization", path: "/ga4-optimization", icon: BarChart3 },
    ],
  },
  {
    number: "05",
    title: "Insights visuais em tempo real e preditivos",
    description: "Dashboards intuitivos que transformam dados em decisões",
    solutions: [
      { name: "Precisian Clarity", path: "/data-visualization", icon: PieChart },
      { name: "AI Insights", path: "/ai-insights", icon: Sparkles },
    ],
  },
];

const MethodologySection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Desktop: Two Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Left: Title */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Nossa Metodologia
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
              Data Value Quotient{" "}
              <span className="gradient-text">(DVQ)</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Um framework completo para transformar dados brutos em vantagem competitiva
            </p>
            
            {/* CTA Button */}
            <button className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105">
              Descubra o seu Quociente de valor
            </button>
            <p className="text-muted-foreground text-sm mt-4">
              Clique nas etapas para explorar
            </p>
          </div>

          {/* Right: Circular Process Visualization */}
          <div className="relative">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center z-10">
              <span className="font-display font-bold text-xl gradient-text">DVQ</span>
            </div>

            {/* Connecting Circle Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-dashed border-primary/20" />
            
            {/* Animated Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px]">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 380 380">
                <circle
                  cx="190"
                  cy="190"
                  r="188"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="1182"
                  strokeDashoffset="0"
                  className="opacity-20"
                />
                <circle
                  cx="190"
                  cy="190"
                  r="188"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray="1182"
                  strokeDashoffset={activeStep !== null ? 1182 - ((activeStep + 1) / 5) * 1182 : 1182}
                  className="transition-all duration-700 ease-out"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(24, 100%, 60%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Step Nodes positioned in a circle */}
            {steps.map((step, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180); // 72 degrees apart, starting from top
              const radius = 190;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={step.number}
                  className="absolute top-1/2 left-1/2 z-20"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <button
                    onClick={() => setActiveStep(activeStep === index ? null : index)}
                    className={`group relative w-16 h-16 rounded-full transition-all duration-300 ${
                      activeStep === index
                        ? "bg-primary scale-110 shadow-lg shadow-primary/30"
                        : "bg-card border-2 border-primary/30 hover:border-primary hover:scale-105"
                    }`}
                  >
                    <span
                      className={`font-display font-bold text-lg transition-colors ${
                        activeStep === index ? "text-primary-foreground" : "text-primary"
                      }`}
                    >
                      {step.number}
                    </span>
                    
                    {/* Tooltip Card */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-72 p-4 rounded-xl bg-background border border-border shadow-xl transition-all duration-300 ${
                        activeStep === index
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      } ${index < 2 ? "top-20" : "bottom-20"}`}
                    >
                      <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-xs mb-3">
                        {step.description}
                      </p>
                      <div className="border-t border-border pt-3">
                        <span className="text-xs text-muted-foreground font-medium mb-2 block">Soluções relacionadas:</span>
                        <div className="grid grid-cols-2 gap-2">
                          {step.solutions.map((solution) => (
                            <Link
                              key={solution.path}
                              to={solution.path}
                              className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 hover:bg-primary/15 border border-primary/20 hover:border-primary/40 transition-all group/link"
                            >
                              <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center shrink-0">
                                <solution.icon className="w-3.5 h-3.5 text-primary" />
                              </div>
                              <span className="text-xs font-medium text-foreground group-hover/link:text-primary transition-colors truncate">{solution.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}

            {/* Connecting Lines */}
            {steps.map((_, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const nextAngle = ((index + 1) * 72 - 90) * (Math.PI / 180);
              const innerRadius = 80;
              const outerRadius = 150;
              
              const x1 = Math.cos(angle) * innerRadius + 190;
              const y1 = Math.sin(angle) * innerRadius + 190;
              const x2 = Math.cos(angle) * outerRadius + 190;
              const y2 = Math.sin(angle) * outerRadius + 190;
              
              return (
                <svg
                  key={`line-${index}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] pointer-events-none"
                  viewBox="0 0 380 380"
                >
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeOpacity={activeStep === index ? "0.6" : "0.2"}
                    className="transition-all duration-300"
                  />
                </svg>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Title + Vertical Timeline */}
        <div className="lg:hidden">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Nossa Metodologia
            </span>
            <h2 className="font-display text-3xl font-bold mt-4 mb-4">
              Data Value Quotient{" "}
              <span className="gradient-text">(DVQ)</span>
            </h2>
            <p className="text-muted-foreground">
              Um framework completo para transformar dados brutos em vantagem competitiva
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative pl-20">
                  {/* Node */}
                  <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="font-display font-bold text-xs text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[1.9rem] top-8 h-8 w-0.5 bg-primary/30" />
                  )}
                  
                  {/* Content Card */}
                  <div className="card-gradient p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {step.description}
                    </p>
                    <div className="border-t border-border pt-3">
                      <span className="text-xs text-muted-foreground font-medium mb-2 block">Soluções relacionadas:</span>
                      <div className="grid grid-cols-2 gap-2">
                        {step.solutions.map((solution) => (
                          <Link
                            key={solution.path}
                            to={solution.path}
                            className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 hover:bg-primary/15 border border-primary/20 hover:border-primary/40 transition-all group/link"
                          >
                            <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center shrink-0">
                              <solution.icon className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover/link:text-primary transition-colors">{solution.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button Mobile */}
          <div className="text-center mt-10">
            <button className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105">
              Descubra o seu Quociente de valor
            </button>
            <p className="text-muted-foreground text-sm mt-4">
              Dê o primeiro passo para descobrir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
