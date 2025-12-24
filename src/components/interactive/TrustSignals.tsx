import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { TrendingUp, CheckCircle, Building2, Award, Shield, Users } from 'lucide-react';

// Métricas reais dos cases Precisian
const TRUST_METRICS = [
  {
    id: 'bcmed',
    company: 'BCMed',
    metric: 'R$ 1M+',
    description: 'Receita corretamente atribuída',
    icon: TrendingUp,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    id: 'paguemenos',
    company: 'Pague Menos',
    metric: '+85%',
    description: 'Taxa de aprovação',
    icon: CheckCircle,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'nuvio',
    company: 'Nuvio Foods',
    metric: '100%',
    description: 'Consistência cross-platform',
    icon: Shield,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'cpc',
    company: 'Pague Menos',
    metric: '-40%',
    description: 'Redução de CPC',
    icon: TrendingUp,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  }
];

const CLIENTS = [
  { name: 'BCMed', segment: 'Healthcare' },
  { name: 'Pague Menos', segment: 'Varejo Farma' },
  { name: 'Nuvio Foods', segment: 'Food Subscription' },
  { name: 'Intelligence Partner', segment: 'Google Partner' }
];

const CERTIFICATIONS = [
  { name: 'Google Partner', icon: Award },
  { name: 'LGPD Compliant', icon: Shield },
  { name: 'SOC 2 Type II', icon: Shield }
];

interface TrustSignalsProps {
  className?: string;
  variant?: 'full' | 'compact' | 'metrics-only' | 'clients-only';
  showTitle?: boolean;
}

const TrustSignals = ({
  className,
  variant = 'full',
  showTitle = true
}: TrustSignalsProps) => {
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
        className={cn("w-full", className)}
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
                <Card className="text-center h-full hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 pb-4">
                    <div className={cn("mx-auto w-10 h-10 rounded-full flex items-center justify-center mb-3", item.bgColor)}>
                      <IconComponent className={cn("h-5 w-5", item.color)} />
                    </div>
                    <p className={cn("text-2xl md:text-3xl font-bold mb-1", item.color)}>
                      {item.metric}
                    </p>
                    <p className="text-xs text-muted-foreground leading-tight">
                      {item.description}
                    </p>
                    <p className="text-xs font-medium mt-2">{item.company}</p>
                  </CardContent>
                </Card>
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
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Building2 className="h-5 w-5" />
              <div className="text-left">
                <p className="font-medium text-sm">{client.name}</p>
                <p className="text-xs opacity-70">{client.segment}</p>
              </div>
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
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {TRUST_METRICS.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className={cn("text-xl md:text-2xl font-bold", item.color)}>
                {item.metric}
              </span>
              <span className="text-xs text-muted-foreground max-w-[100px] leading-tight">
                {item.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Full variant (default)
  return (
    <motion.div
      className={cn("w-full", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Title */}
      {showTitle && (
        <motion.div variants={itemVariants} className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            <Users className="h-3 w-3 mr-1" />
            Resultados Reais
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Empresas que descobriram seu DVQ
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Esses não são números inventados. São resultados documentados de empresas
            que resolveram o problema de visibilidade de dados.
          </p>
        </motion.div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {TRUST_METRICS.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="text-center h-full hover:shadow-md transition-shadow border-2 hover:border-primary/30">
                <CardContent className="pt-6 pb-4">
                  <div className={cn("mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3", item.bgColor)}>
                    <IconComponent className={cn("h-6 w-6", item.color)} />
                  </div>
                  <p className={cn("text-3xl md:text-4xl font-bold mb-1", item.color)}>
                    {item.metric}
                  </p>
                  <p className="text-sm text-muted-foreground leading-tight mb-2">
                    {item.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {item.company}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Clients */}
      <motion.div variants={itemVariants} className="mb-8">
        <Card className="bg-muted/30">
          <CardContent className="py-6">
            <p className="text-center text-sm text-muted-foreground mb-4">
              Empresas que confiam na metodologia DVQ
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Building2 className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">{client.name}</p>
                    <p className="text-xs opacity-70">{client.segment}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Certifications */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {CERTIFICATIONS.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <Badge
                key={cert.name}
                variant="outline"
                className="py-2 px-4 text-sm"
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {cert.name}
              </Badge>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrustSignals;
