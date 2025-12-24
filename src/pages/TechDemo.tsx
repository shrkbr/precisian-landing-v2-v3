import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TerminalHero,
  DVQStepperTech,
  CaseStudiesGridTech,
  TrustSignalsTech,
  GlowCard,
  NeonText,
  NeonHeading,
  TechButton,
  ActionButton,
  GhostButton,
  TerminalButton,
  GridPattern,
  StatusBadge,
  ProgressIndicator,
  TechSpinner,
  useAnimationConfig
} from '@/components/tech';
import { ArrowRight, Zap, Code, Palette, Sparkles } from 'lucide-react';

const TechDemo = () => {
  const { shouldAnimate } = useAnimationConfig();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <TerminalHero showMatrix showStats />

      {/* DVQ Stepper Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <DVQStepperTech />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-tech-surface/30 relative">
        <div className="container mx-auto px-4">
          <CaseStudiesGridTech showFilters />
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <TrustSignalsTech variant="full" showTitle />
        </div>
      </section>

      {/* Components Showcase */}
      <section className="py-20 bg-tech-surface/30 relative">
        <GridPattern variant="circuit" intensity="subtle" color="primary" className="absolute inset-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-secondary/10 border border-tech-secondary/30 mb-6"
            >
              <Code className="h-4 w-4 text-tech-secondary" />
              <span className="text-sm font-mono text-tech-secondary uppercase tracking-wider">
                Component Library
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <NeonText variant="secondary" glow="medium">
                Tech Components Showcase
              </NeonText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Biblioteca de componentes cyberpunk para interfaces data-driven.
            </p>
          </div>

          {/* Buttons */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">
              <NeonText variant="primary" glow="subtle">Buttons</NeonText>
            </h3>
            <GlowCard glowColor="primary" glowIntensity="low" className="p-6">
              <div className="flex flex-wrap gap-4">
                <TechButton techVariant="neon" variant="primary">
                  Neon Primary
                </TechButton>
                <TechButton techVariant="hologram" variant="secondary">
                  Hologram
                </TechButton>
                <TechButton techVariant="matrix" variant="secondary">
                  Matrix
                </TechButton>
                <TechButton techVariant="glitch" variant="secondary">
                  Glitch
                </TechButton>
                <TechButton techVariant="pulse" variant="primary">
                  Pulse
                </TechButton>
                <ActionButton>
                  Action CTA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ActionButton>
                <GhostButton>Ghost Button</GhostButton>
                <TerminalButton>execute</TerminalButton>
              </div>
            </GlowCard>
          </div>

          {/* Cards */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">
              <NeonText variant="primary" glow="subtle">Cards & Containers</NeonText>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlowCard glowColor="primary" glowIntensity="medium" cornerBorders className="p-6">
                <h4 className="font-bold mb-2">Primary Glow</h4>
                <p className="text-sm text-muted-foreground">
                  Card com glow rosa Precisian e bordas angulares.
                </p>
              </GlowCard>
              <GlowCard glowColor="secondary" glowIntensity="medium" scanningLine className="p-6">
                <h4 className="font-bold mb-2">Secondary + Scan</h4>
                <p className="text-sm text-muted-foreground">
                  Com linha de scanning animada.
                </p>
              </GlowCard>
              <GlowCard glowColor="success" glowIntensity="high" className="p-6">
                <h4 className="font-bold mb-2">Success Intense</h4>
                <p className="text-sm text-muted-foreground">
                  Glow intenso para destaque.
                </p>
              </GlowCard>
            </div>
          </div>

          {/* Status Badges */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">
              <NeonText variant="primary" glow="subtle">Status Badges</NeonText>
            </h3>
            <GlowCard glowColor="primary" glowIntensity="low" className="p-6">
              <div className="flex flex-wrap gap-4">
                <StatusBadge status="online" variant="default">Online</StatusBadge>
                <StatusBadge status="offline" variant="default">Offline</StatusBadge>
                <StatusBadge status="processing" variant="glow" showPulse>Processing</StatusBadge>
                <StatusBadge status="success" variant="outline">Success</StatusBadge>
                <StatusBadge status="warning" variant="glow">Warning</StatusBadge>
                <StatusBadge status="error" variant="default">Error</StatusBadge>
              </div>
            </GlowCard>
          </div>

          {/* Progress Indicators */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">
              <NeonText variant="primary" glow="subtle">Progress Indicators</NeonText>
            </h3>
            <GlowCard glowColor="primary" glowIntensity="low" className="p-6">
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-mono text-muted-foreground mb-2">Linear Progress</p>
                  <ProgressIndicator value={75} variant="linear" color="primary" showValue label="DVQ Score" showLabel />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground mb-2">Terminal Progress</p>
                  <ProgressIndicator value={60} variant="terminal" color="success" showValue label="Data Integration" showLabel />
                </div>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-sm font-mono text-muted-foreground mb-2">Circular</p>
                    <ProgressIndicator value={85} variant="circular" color="primary" size="lg" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground mb-2">Spinners</p>
                    <div className="flex gap-4">
                      <TechSpinner size="sm" color="primary" />
                      <TechSpinner size="md" color="secondary" />
                      <TechSpinner size="lg" color="success" />
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Typography */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">
              <NeonText variant="primary" glow="subtle">Typography</NeonText>
            </h3>
            <GlowCard glowColor="primary" glowIntensity="low" className="p-6">
              <div className="space-y-4">
                <NeonHeading level={1}>Heading 1 - Neon</NeonHeading>
                <NeonHeading level={2}>Heading 2 - Neon</NeonHeading>
                <NeonHeading level={3}>Heading 3 - Neon</NeonHeading>
                <div className="flex flex-wrap gap-4">
                  <NeonText variant="primary" glow="intense">Primary Intense</NeonText>
                  <NeonText variant="secondary" glow="medium">Secondary Medium</NeonText>
                  <NeonText variant="success" glow="subtle">Success Subtle</NeonText>
                  <NeonText variant="warning" glow="medium">Warning</NeonText>
                  <NeonText variant="error" glow="medium">Error</NeonText>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative">
        <GridPattern variant="hexagon" intensity="subtle" color="primary" className="absolute inset-0" />

        <div className="container mx-auto px-4 relative z-10">
          <GlowCard
            glowColor="primary"
            glowIntensity="high"
            cornerBorders
            scanningLine
            className="p-12 text-center"
          >
            <motion.div
              initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : {}}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="h-12 w-12 text-tech-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <NeonText variant="primary" glow="intense">
                  Pronto para descobrir seu DVQ Score?
                </NeonText>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Não é uma proposta comercial. É um diagnóstico gratuito baseado em dados reais
                para descobrir quanto você está perdendo por não ter visibilidade completa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <ActionButton>
                    Descobrir meu DVQ Score
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ActionButton>
                </Link>
                <Link to="/dvq">
                  <GhostButton>
                    <Zap className="mr-2 h-4 w-4" />
                    Ver metodologia DVQ
                  </GhostButton>
                </Link>
              </div>
            </motion.div>
          </GlowCard>
        </div>
      </section>
    </div>
  );
};

export default TechDemo;