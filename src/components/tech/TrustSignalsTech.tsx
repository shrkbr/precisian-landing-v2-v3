import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TrendingUp, CheckCircle, Building2, Award, Shield, Users, Zap, Terminal } from 'lucide-react';
import { GlowCard, StatsCard } from './GlowCard';
import { NeonText } from './NeonText';
import { StatusBadge } from './StatusBadge';
import { ProgressIndicator } from './ProgressIndicator';
import { GridPattern, RadarGrid } from './GridPattern';
import { useAnimationConfig } from '@/hooks/tech';

// Métricas reais dos cases Precisian
const TRUST_METRICS = [
  {
    id: 'bcmed',
    company: 'BCMed',
    metric: 'R$ 1M+',
    description: 'Receita corretamente atribuída',
    icon: TrendingUp,
    color: 'success' as const,
    techColor: 'text-tech-success',
    bgColor: 'bg-tech-success/10',
    progress: 100
  },
  {
    id: 'paguemenos',
    company: 'Pague Menos',
    metric: '+85%',
    description: 'Taxa de aprovação',
    icon: CheckCircle,
    color: 'primary' as const,
    techColor: 'text-tech-primary',
    bgColor: 'bg-tech-primary/10',
    progress: 85
  },
  {
    id: 'nuvio',
    company: 'Nuvio Foods',
    metric: '100%',
    description: 'Consistência cross-platform',
    icon: Shield,
    color: 'secondary' as const,
    techColor: 'text-tech-secondary',
    bgColor: 'bg-tech-secondary/10',
    progress: 100
  },
  {
    id: 'cpc',
    company: 'Pague Menos',
    metric: '-40%',
    description: 'Redução de CPC',
    icon: TrendingUp,
    color: 'warning' as const,
    techColor: 'text-tech-warning',
    bgColor: 'bg-tech-warning/10',
    progress: 60
  }
];

const CLIENTS = [
  { name: 'BCMed', segment: 'Healthcare', status: 'online' as const },
  { name: 'Pague Menos', segment: 'Varejo Farma', status: 'online' as const },
  { name: 'Nuvio Foods', segment: 'Food Subscription', status: 'online' as const },
  { name: 'Intelligence Partner', segment: 'Google Partner', status: 'online' as const }
];

const CERTIFICATIONS = [
  { name: 'Google Partner', icon: Award, status: 'success' as const },
  { name: 'LGPD Compliant', icon: Shield, status: 'success' as const },
  { name: 'SOC 2 Type II', icon: Shield, status: 'processing' as const }
];

interface TrustSignalsTechProps {
  className?: string;
  variant?: 'full' | 'compact' | 'metrics-only' | 'clients-only';
  showTitle?: boolean;
}

const TrustSignalsTech = ({
  className,
  variant = 'full',
  showTitle = true
}: TrustSignalsTechProps) => {
  const { shouldAnimate, getMotionProps } = useAnimationConfig();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Metrics Only variant
  if (variant === 'metrics-only') {
    return (
      <motion.div
        className={cn("w-full relative", className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_METRICS.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={item.id} variants={itemVariants}>
                <GlowCard
                  glowColor={item.color}
                  glowIntensity="medium"
                  className="text-center p-6"
                >
                  <div className={cn(
                    "mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-3 border",
                    item.bgColor,
                    `border-tech-${item.color}/30`
                  )}>
                    <IconComponent className={cn("h-6 w-6", item.techColor)} />
                  </div>
                  <p className={cn("text-3xl md:text-4xl font-bold font-mono mb-1", item.techColor)}>
                    {item.metric}
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight mb-2">
                    {item.description}
                  </p>
                  <StatusBadge status="success" size="sm" variant="outline">
                    {item.company}
                  </StatusBadge>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  // Clients Only variant
  if (variant === 'clients-only') {
    return (
      <motion.div
        className={cn("w-full", className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {CLIENTS.map((client) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
            >
              <GlowCard
                glowColor="primary"
                glowIntensity="low"
                className="flex items-center gap-3 p-4"
              >
                <div className="p-2 bg-tech-primary/20 rounded-lg border border-tech-primary/30">
                  <Building2 className="h-5 w-5 text-tech-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">{client.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{client.segment}</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-tech-success animate-pulse ml-2" />
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <motion.div
        className={cn("w-full", className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {TRUST_METRICS.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className={cn("text-2xl md:text-3xl font-bold font-mono", item.techColor)}>
                {item.metric}
              </span>
              <div>
                <span className="text-xs text-muted-foreground block leading-tight max-w-[100px]">
                  {item.description}
                </span>
                <span className="text-xs font-mono text-tech-primary">{item.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Full variant (default)
  return (
    <motion.section
      className={cn("w-full relative", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Background */}
      <GridPattern
        variant="hexagon"
        intensity="subtle"
        color="primary"
        className="absolute inset-0 opacity-20"
      />

      <div className="relative z-10">
        {/* Title */}
        {showTitle && (
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-success/10 border border-tech-success/30 mb-6">
              <Zap className="h-4 w-4 text-tech-success" />
              <span className="text-sm font-mono text-tech-success uppercase tracking-wider">
                Resultados Verificados
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              <NeonText variant="primary" glow="medium">
                Empresas que descobriram seu DVQ
              </NeonText>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Esses não são números inventados. São resultados documentados de empresas
              que resolveram o problema de visibilidade de dados.
            </p>
          </motion.div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {TRUST_METRICS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard
                  glowColor={item.color}
                  glowIntensity="medium"
                  cornerBorders
                  className="text-center p-6 h-full"
                >
                  <div className={cn(
                    "mx-auto w-14 h-14 rounded-lg flex items-center justify-center mb-4 border",
                    item.bgColor,
                    `border-tech-${item.color}/30`
                  )}>
                    <IconComponent className={cn("h-7 w-7", item.techColor)} />
                  </div>

                  <p className={cn("text-3xl md:text-4xl font-bold font-mono mb-2", item.techColor)}>
                    {item.metric}
                  </p>

                  <p className="text-sm text-muted-foreground leading-tight mb-3">
                    {item.description}
                  </p>

                  <ProgressIndicator
                    value={item.progress}
                    variant="linear"
                    size="sm"
                    color={item.color}
                    showValue={false}
                    className="mb-3"
                  />

                  <StatusBadge status="success" size="sm" variant="glow">
                    {item.company}
                  </StatusBadge>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Clients Grid */}
        <motion.div variants={itemVariants} className="mb-10">
          <GlowCard
            glowColor="primary"
            glowIntensity="low"
            className="p-6"
          >
            <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
              Clientes Ativos no Sistema DVQ
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CLIENTS.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : {}}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-tech-surface/50 rounded-lg border border-tech-primary/20"
                >
                  <div className="p-2 bg-tech-primary/20 rounded-lg">
                    <Building2 className="h-4 w-4 text-tech-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{client.name}</p>
                    <p className="text-xs text-muted-foreground font-mono truncate">
                      {client.segment}
                    </p>
                  </div>
                  <StatusBadge status={client.status} size="sm" variant="minimal" showDot showPulse>
                    <span className="sr-only">Online</span>
                  </StatusBadge>
                </motion.div>
              ))}
            </div>

            {/* Terminal Status */}
            <div className="mt-6 p-3 bg-black/80 rounded-lg border border-tech-primary/20 font-mono text-xs">
              <div className="flex items-center gap-2 text-tech-success mb-1">
                <Terminal className="h-3 w-3" />
                <span>system_status</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-tech-success">✓</span> All {CLIENTS.length} clients operational |{' '}
                <span className="text-tech-primary">DVQ Framework v2.5</span> |{' '}
                <span className="text-tech-success">uptime: 99.97%</span>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {CERTIFICATIONS.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={shouldAnimate ? { opacity: 0, y: 10 } : {}}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <GlowCard
                    glowColor={cert.status === 'success' ? 'success' : 'warning'}
                    glowIntensity="subtle"
                    className="flex items-center gap-3 px-4 py-3"
                  >
                    <div className={cn(
                      "p-2 rounded-lg",
                      cert.status === 'success' ? 'bg-tech-success/20' : 'bg-tech-warning/20'
                    )}>
                      <IconComponent className={cn(
                        "h-4 w-4",
                        cert.status === 'success' ? 'text-tech-success' : 'text-tech-warning'
                      )} />
                    </div>
                    <span className="font-mono text-sm">{cert.name}</span>
                    <StatusBadge
                      status={cert.status}
                      size="sm"
                      variant="minimal"
                      showDot
                      showPulse={cert.status === 'processing'}
                    >
                      {cert.status === 'success' ? 'Verified' : 'Processing'}
                    </StatusBadge>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrustSignalsTech;