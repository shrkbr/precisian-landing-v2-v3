import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnimationConfig } from '@/hooks/tech';

interface GlowCardProps {
  children: React.ReactNode;
  glowIntensity?: 'low' | 'medium' | 'high';
  glowColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  animated?: boolean;
  scanningLine?: boolean;
  cornerBorders?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * Card com efeitos de glow e animações cyberpunk
 * Componente base para a aesthetic tech do Precisian
 */
export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  glowIntensity = 'medium',
  glowColor = 'primary',
  animated = true,
  scanningLine = false,
  cornerBorders = false,
  className,
  onClick,
  disabled = false
}) => {
  const { shouldAnimate, getMotionProps } = useAnimationConfig();

  const glowClasses = {
    low: 'tech-glow-subtle',
    medium: 'tech-glow-primary',
    high: 'tech-glow-intense'
  };

  const colorClasses = {
    primary: 'border-tech-primary shadow-tech-primary/20',
    secondary: 'border-tech-secondary shadow-tech-secondary/20',
    success: 'border-tech-success shadow-tech-success/20',
    warning: 'border-tech-warning shadow-tech-warning/20',
    error: 'border-tech-error shadow-tech-error/20'
  };

  const baseClasses = cn(
    'tech-card',
    'relative overflow-hidden',
    'bg-tech-surface/90 backdrop-blur-xl',
    'border rounded-lg',
    'transition-all duration-300 ease-out',
    colorClasses[glowColor],
    {
      'cursor-pointer hover:scale-[1.02] hover:shadow-2xl': onClick && !disabled,
      'opacity-50 cursor-not-allowed': disabled,
      'tech-corner-borders': cornerBorders,
      [glowClasses[glowIntensity]]: true
    },
    className
  );

  const motionProps = getMotionProps(
    {
      whileHover: onClick && !disabled ? {
        scale: 1.02,
        boxShadow: glowColor === 'primary'
          ? '0 0 30px rgba(253, 104, 179, 0.4)'
          : '0 0 30px rgba(112, 0, 255, 0.4)'
      } : {},
      whileTap: onClick && !disabled ? { scale: 0.98 } : {},
      initial: animated ? { opacity: 0, y: 20 } : {},
      animate: animated ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    { scale: 1, boxShadow: 'none' } // Reduced motion fallback
  );

  const cardContent = (
    <>
      {children}

      {/* Scanning Line Effect */}
      {scanningLine && shouldAnimate && (
        <div className="tech-scanning-line absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tech-primary to-transparent" />
      )}

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/5 via-transparent to-tech-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </>
  );

  if (animated && shouldAnimate) {
    return (
      <motion.div
        className={baseClasses}
        onClick={onClick && !disabled ? onClick : undefined}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            onClick();
          }
        } : undefined}
        {...motionProps}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <div
      className={baseClasses}
      onClick={onClick && !disabled ? onClick : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {cardContent}
    </div>
  );
};

/**
 * Variant pré-configurado para cards de métricas/stats
 */
export const StatsCard: React.FC<{
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}> = ({ title, value, description, icon, trend = 'neutral', className }) => {
  const trendColors = {
    up: 'success',
    down: 'error',
    neutral: 'primary'
  } as const;

  return (
    <GlowCard
      glowColor={trendColors[trend]}
      glowIntensity="low"
      animated
      className={cn('p-6', className)}
    >
      <div className="flex items-center justify-between mb-4">
        {icon && (
          <div className={cn(
            'p-2 rounded-lg',
            trend === 'up' && 'bg-tech-success/10 text-tech-success',
            trend === 'down' && 'bg-tech-error/10 text-tech-error',
            trend === 'neutral' && 'bg-tech-primary/10 text-tech-primary'
          )}>
            {icon}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
          {title}
        </p>
        <p className={cn(
          'text-2xl font-bold',
          trend === 'up' && 'text-tech-success',
          trend === 'down' && 'text-tech-error',
          trend === 'neutral' && 'text-tech-primary'
        )}>
          {value}
        </p>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </GlowCard>
  );
};

export default GlowCard;