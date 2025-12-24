import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTypingEffect, useMultiLineTyping, useAnimationConfig } from '@/hooks/tech';
import { TechButton, ActionButton } from './TechButton';
import { NeonText } from './NeonText';
import { GridPattern, MatrixRain } from './GridPattern';
import { GlowCard } from './GlowCard';
import { ArrowRight, Terminal, Zap, Eye, Shield, Database, BarChart3 } from 'lucide-react';

interface TerminalCommand {
  command: string;
  output: string[];
  delay?: number;
}

interface TerminalHeroProps {
  className?: string;
  variant?: 'full' | 'compact' | 'minimal';
  showMatrix?: boolean;
  showStats?: boolean;
}

// Commands that simulate a DVQ diagnostic
const TERMINAL_COMMANDS: TerminalCommand[] = [
  {
    command: 'precisian diagnose --marketing-data',
    output: [
      '⚠️  Analisando fontes de dados...',
      '❌ GA4 vs E-commerce: discrepância de 47%',
      '❌ Atribuição: apenas último clique considerado',
      '❌ Dados offline: não rastreados',
      '⚠️  DVQ Score estimado: 23/100'
    ],
    delay: 800
  },
  {
    command: 'precisian calculate --lost-revenue',
    output: [
      '💰 Calculando receita não atribuída...',
      '📊 Investimento mensal em mídia: R$ 500.000',
      '❌ Receita "invisível": ~R$ 175.000/mês',
      '🔴 Você está tomando decisões com 47% dos dados errados'
    ],
    delay: 600
  },
  {
    command: 'precisian recommend --solution',
    output: [
      '✅ Solução: Implementar DVQ Framework',
      '→ Mapeamento completo da jornada',
      '→ Integração e centralização de dados',
      '→ Modelo de atribuição inteligente',
      '🚀 DVQ Score projetado: 95/100'
    ],
    delay: 500
  }
];

// DVQ Stats for the hero
const DVQ_STATS = [
  { icon: Database, label: 'Fontes Integradas', value: '15+', color: 'primary' },
  { icon: Eye, label: 'Visibilidade', value: '100%', color: 'success' },
  { icon: Shield, label: 'Precisão', value: '99.7%', color: 'secondary' },
  { icon: BarChart3, label: 'ROI Médio', value: '+340%', color: 'warning' }
];

/**
 * Hero section com estética de terminal cyberpunk
 * Simula diagnóstico DVQ em tempo real
 */
export const TerminalHero: React.FC<TerminalHeroProps> = ({
  className,
  variant = 'full',
  showMatrix = true,
  showStats = true
}) => {
  const { shouldAnimate } = useAnimationConfig();
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [commandOutputs, setCommandOutputs] = useState<string[][]>([]);
  const [isTypingCommand, setIsTypingCommand] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const currentCommand = TERMINAL_COMMANDS[currentCommandIndex];

  // Typing effect for current command
  const { displayText: typedCommand, isComplete: commandComplete } = useTypingEffect(
    currentCommand?.command || '',
    {
      enabled: shouldAnimate && isTypingCommand,
      speed: 40,
      startDelay: 500
    }
  );

  // Handle command completion and output display
  useEffect(() => {
    if (commandComplete && currentCommand && isTypingCommand) {
      setIsTypingCommand(false);

      // Show output lines one by one
      const outputs = currentCommand.output;
      let outputIndex = 0;

      const outputInterval = setInterval(() => {
        if (outputIndex < outputs.length) {
          setCommandOutputs(prev => {
            const newOutputs = [...prev];
            if (!newOutputs[currentCommandIndex]) {
              newOutputs[currentCommandIndex] = [];
            }
            newOutputs[currentCommandIndex] = [...newOutputs[currentCommandIndex], outputs[outputIndex]];
            return newOutputs;
          });
          outputIndex++;
        } else {
          clearInterval(outputInterval);

          // Move to next command after delay
          if (currentCommandIndex < TERMINAL_COMMANDS.length - 1) {
            setTimeout(() => {
              setCurrentCommandIndex(prev => prev + 1);
              setIsTypingCommand(true);
            }, currentCommand.delay || 1000);
          }
        }
      }, 300);

      return () => clearInterval(outputInterval);
    }
  }, [commandComplete, currentCommandIndex, isTypingCommand, currentCommand]);

  // Cursor blink effect
  useEffect(() => {
    if (!shouldAnimate) return;
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [shouldAnimate]);

  // Reset animation for loop
  useEffect(() => {
    if (currentCommandIndex === TERMINAL_COMMANDS.length - 1 && !isTypingCommand) {
      const resetTimeout = setTimeout(() => {
        setCurrentCommandIndex(0);
        setCommandOutputs([]);
        setIsTypingCommand(true);
      }, 8000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentCommandIndex, isTypingCommand]);

  return (
    <section className={cn(
      'relative min-h-screen flex items-center justify-center overflow-hidden',
      'bg-gradient-to-b from-background via-tech-surface to-background',
      className
    )}>
      {/* Background Effects */}
      {showMatrix && shouldAnimate && (
        <div className="absolute inset-0 pointer-events-none">
          <MatrixRain density="low" className="opacity-20" />
          <GridPattern variant="circuit" intensity="subtle" color="primary" />
        </div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/5 via-transparent to-tech-secondary/5 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: -50 } : {}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-primary/10 border border-tech-primary/30"
            >
              <Zap className="h-4 w-4 text-tech-primary" />
              <span className="text-sm font-mono text-tech-primary">
                Data Value Quotient Framework
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Seus dados de marketing</span>
                <br />
                <NeonText variant="primary" size="2xl" glow="intense" className="text-4xl md:text-5xl lg:text-6xl">
                  estão mentindo para você
                </NeonText>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                <span className="text-tech-warning font-semibold">47% de discrepância</span> entre
                o que as plataformas reportam e a realidade do seu faturamento.
                Descubra o tamanho do problema.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <ActionButton>
                  Descobrir meu DVQ Score
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ActionButton>
              </Link>

              <Link to="/dvq">
                <TechButton
                  techVariant="hologram"
                  glowIntensity="subtle"
                  variant="secondary"
                >
                  <Terminal className="mr-2 h-4 w-4" />
                  Ver metodologia
                </TechButton>
              </Link>
            </div>

            {/* Stats Grid */}
            {showStats && variant === 'full' && (
              <motion.div
                initial={shouldAnimate ? { opacity: 0, y: 30 } : {}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-tech-primary/20"
              >
                {DVQ_STATS.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : {}}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <Icon className={cn(
                        'h-5 w-5 mx-auto mb-2',
                        stat.color === 'primary' && 'text-tech-primary',
                        stat.color === 'secondary' && 'text-tech-secondary',
                        stat.color === 'success' && 'text-tech-success',
                        stat.color === 'warning' && 'text-tech-warning'
                      )} />
                      <p className={cn(
                        'text-2xl font-bold font-mono',
                        stat.color === 'primary' && 'text-tech-primary',
                        stat.color === 'secondary' && 'text-tech-secondary',
                        stat.color === 'success' && 'text-tech-success',
                        stat.color === 'warning' && 'text-tech-warning'
                      )}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Terminal */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 50 } : {}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <GlowCard
              glowIntensity="high"
              glowColor="primary"
              cornerBorders
              scanningLine={shouldAnimate}
              className="p-0 overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-tech-elevated border-b border-tech-primary/20">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-tech-error" />
                    <div className="w-3 h-3 rounded-full bg-tech-warning" />
                    <div className="w-3 h-3 rounded-full bg-tech-success" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground ml-2">
                    precisian-dvq-diagnostic
                  </span>
                </div>
                <Terminal className="h-4 w-4 text-tech-primary" />
              </div>

              {/* Terminal Content */}
              <div className="p-4 bg-black/90 min-h-[400px] font-mono text-sm overflow-hidden">
                {/* Previous commands and outputs */}
                {TERMINAL_COMMANDS.slice(0, currentCommandIndex + 1).map((cmd, cmdIndex) => (
                  <div key={cmdIndex} className="mb-4">
                    {/* Command line */}
                    <div className="flex items-center gap-2 text-tech-success">
                      <span className="text-tech-primary">$</span>
                      <span>
                        {cmdIndex === currentCommandIndex
                          ? typedCommand
                          : cmd.command}
                        {cmdIndex === currentCommandIndex && isTypingCommand && showCursor && (
                          <span className="text-tech-primary">▋</span>
                        )}
                      </span>
                    </div>

                    {/* Output lines */}
                    <AnimatePresence>
                      {commandOutputs[cmdIndex]?.map((line, lineIndex) => (
                        <motion.div
                          key={lineIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className={cn(
                            'ml-4 mt-1',
                            line.startsWith('✅') && 'text-tech-success',
                            line.startsWith('❌') && 'text-tech-error',
                            line.startsWith('⚠️') && 'text-tech-warning',
                            line.startsWith('💰') && 'text-tech-warning',
                            line.startsWith('📊') && 'text-muted-foreground',
                            line.startsWith('🔴') && 'text-tech-error font-bold',
                            line.startsWith('🚀') && 'text-tech-primary font-bold',
                            line.startsWith('→') && 'text-tech-secondary'
                          )}
                        >
                          {line}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Blinking cursor when idle */}
                {currentCommandIndex === TERMINAL_COMMANDS.length - 1 && !isTypingCommand && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-tech-success mt-4"
                  >
                    <span className="text-tech-primary">$</span>
                    <span className={cn(
                      'text-tech-primary transition-opacity',
                      showCursor ? 'opacity-100' : 'opacity-0'
                    )}>▋</span>
                  </motion.div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-tech-elevated border-t border-tech-primary/20 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                  precisian@dvq-framework:~
                </span>
                <div className="flex items-center gap-2">
                  <div className={cn(
                    'w-2 h-2 rounded-full',
                    currentCommandIndex === TERMINAL_COMMANDS.length - 1 && !isTypingCommand
                      ? 'bg-tech-success animate-pulse'
                      : 'bg-tech-warning animate-pulse'
                  )} />
                  <span className="text-xs font-mono text-muted-foreground">
                    {currentCommandIndex === TERMINAL_COMMANDS.length - 1 && !isTypingCommand
                      ? 'diagnóstico completo'
                      : 'analisando...'}
                  </span>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {variant === 'full' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono uppercase tracking-wider">
              Scroll para descobrir
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-tech-primary/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-tech-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

/**
 * Compact variant for inner pages
 */
export const CompactTerminalHero: React.FC<{
  title: string;
  subtitle?: string;
  command?: string;
  className?: string;
}> = ({ title, subtitle, command, className }) => {
  const { shouldAnimate } = useAnimationConfig();

  const { displayText } = useTypingEffect(command || '', {
    enabled: shouldAnimate && !!command,
    speed: 50
  });

  return (
    <section className={cn(
      'relative py-20 overflow-hidden',
      'bg-gradient-to-b from-background to-tech-surface',
      className
    )}>
      <GridPattern variant="dots" intensity="subtle" color="primary" className="absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {command && (
            <div className="inline-block px-4 py-2 bg-black/80 rounded-lg border border-tech-primary/30 font-mono text-sm text-tech-success mb-4">
              <span className="text-tech-primary">$ </span>
              {displayText}
              <span className="text-tech-primary animate-tech-blink">▋</span>
            </div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <NeonText variant="primary" glow="medium">
              {title}
            </NeonText>
          </h1>

          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;