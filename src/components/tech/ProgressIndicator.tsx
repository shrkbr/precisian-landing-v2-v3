import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnimationConfig } from '@/hooks/tech';

interface ProgressIndicatorProps {
  value?: number; // 0-100
  variant?: 'linear' | 'circular' | 'radial' | 'terminal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  animated?: boolean;
  showValue?: boolean;
  showLabel?: boolean;
  label?: string;
  className?: string;
  glowEffect?: boolean;
}

/**
 * Indicador de progresso com estética cyberpunk
 * Suporta diferentes variantes: linear, circular, radial, terminal
 */
export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  value = 0,
  variant = 'linear',
  size = 'md',
  color = 'primary',
  animated = true,
  showValue = true,
  showLabel = false,
  label,
  className,
  glowEffect = true
}) => {
  const { shouldAnimate } = useAnimationConfig();
  const clampedValue = Math.max(0, Math.min(100, value));

  const colorClasses = {
    primary: 'text-tech-primary',
    secondary: 'text-tech-secondary',
    success: 'text-tech-success',
    warning: 'text-tech-warning',
    error: 'text-tech-error'
  };

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4'
  };

  if (variant === 'linear') {
    return (
      <div className={cn('w-full space-y-2', className)}>
        {(showLabel && label) && (
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {label}
            </span>
            {showValue && (
              <span className={cn('text-xs font-mono font-bold', colorClasses[color])}>
                {clampedValue.toFixed(0)}%
              </span>
            )}
          </div>
        )}

        <div className={cn(
          'relative w-full bg-tech-surface/50 rounded-full border border-tech-primary/20 overflow-hidden',
          sizeClasses[size],
          {
            'tech-glow-subtle': glowEffect
          }
        )}>
          <motion.div
            className={cn(
              'absolute left-0 top-0 h-full rounded-full',
              'bg-gradient-to-r',
              {
                'from-tech-primary to-tech-primary/80': color === 'primary',
                'from-tech-secondary to-tech-secondary/80': color === 'secondary',
                'from-tech-success to-tech-success/80': color === 'success',
                'from-tech-warning to-tech-warning/80': color === 'warning',
                'from-tech-error to-tech-error/80': color === 'error'
              }
            )}
            initial={animated ? { width: 0 } : { width: `${clampedValue}%` }}
            animate={{ width: `${clampedValue}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Scanning line effect */}
          {shouldAnimate && animated && (
            <motion.div
              className="absolute top-0 h-full w-1 bg-white/60 shadow-lg shadow-white/30"
              animate={{
                x: ['-4px', '100%']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          )}
        </div>
      </div>
    );
  }

  if (variant === 'circular') {
    const radius = size === 'sm' ? 20 : size === 'md' ? 30 : size === 'lg' ? 40 : 50;
    const strokeWidth = size === 'sm' ? 2 : size === 'md' ? 3 : size === 'lg' ? 4 : 5;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (clampedValue / 100) * circumference;

    return (
      <div className={cn('relative flex items-center justify-center', className)}>
        <svg
          width={radius * 2 + strokeWidth * 2}
          height={radius * 2 + strokeWidth * 2}
          className={cn('transform -rotate-90', {
            'tech-glow-subtle': glowEffect
          })}
        >
          {/* Background circle */}
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill="none"
            stroke="rgba(253, 104, 179, 0.1)"
            strokeWidth={strokeWidth}
          />

          {/* Progress circle */}
          <motion.circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className={colorClasses[color]}
            style={{ strokeDasharray }}
            initial={animated ? { strokeDashoffset: circumference } : { strokeDashoffset }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </svg>

        {/* Center value */}
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn(
              'font-mono font-bold',
              colorClasses[color],
              size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-lg'
            )}>
              {clampedValue.toFixed(0)}%
            </span>
          </div>
        )}

        {/* Label */}
        {showLabel && label && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {label}
            </span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'radial') {
    return (
      <div className={cn('relative', className)}>
        <div className={cn(
          'relative bg-tech-surface/30 rounded-full border border-tech-primary/20 overflow-hidden',
          size === 'sm' ? 'w-16 h-16' : size === 'md' ? 'w-24 h-24' : size === 'lg' ? 'w-32 h-32' : 'w-40 h-40'
        )}>
          <motion.div
            className={cn(
              'absolute inset-0 rounded-full',
              'bg-gradient-conic',
              {
                'from-tech-primary via-tech-primary/50 to-transparent': color === 'primary',
                'from-tech-secondary via-tech-secondary/50 to-transparent': color === 'secondary',
                'from-tech-success via-tech-success/50 to-transparent': color === 'success',
                'from-tech-warning via-tech-warning/50 to-transparent': color === 'warning',
                'from-tech-error via-tech-error/50 to-transparent': color === 'error'
              }
            )}
            style={{
              background: `conic-gradient(from 0deg, currentColor ${clampedValue * 3.6}deg, transparent ${clampedValue * 3.6}deg)`
            }}
            initial={animated ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Center */}
          <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
            {showValue && (
              <span className={cn(
                'font-mono font-bold',
                colorClasses[color],
                size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-lg'
              )}>
                {clampedValue.toFixed(0)}%
              </span>
            )}
          </div>
        </div>

        {showLabel && label && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {label}
            </span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'terminal') {
    const blocks = 20;
    const filledBlocks = Math.floor((clampedValue / 100) * blocks);

    return (
      <div className={cn('space-y-2', className)}>
        {showLabel && label && (
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {label}
            </span>
            {showValue && (
              <span className={cn('text-xs font-mono font-bold', colorClasses[color])}>
                {clampedValue.toFixed(0)}%
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-1 font-mono text-xs">
          <span className="text-muted-foreground">[</span>
          {Array.from({ length: blocks }, (_, i) => (
            <motion.span
              key={i}
              className={cn(
                i < filledBlocks ? colorClasses[color] : 'text-muted-foreground/30'
              )}
              initial={animated ? { opacity: 0 } : { opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.02, duration: 0.2 }}
            >
              {i < filledBlocks ? '█' : '░'}
            </motion.span>
          ))}
          <span className="text-muted-foreground">]</span>
        </div>
      </div>
    );
  }

  return null;
};

/**
 * Loading Spinner Cyberpunk
 */
export const TechSpinner: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
}> = ({ size = 'md', color = 'primary', className }) => {
  const { shouldAnimate } = useAnimationConfig();

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-tech-primary',
    secondary: 'border-tech-secondary',
    success: 'border-tech-success',
    warning: 'border-tech-warning',
    error: 'border-tech-error'
  };

  if (!shouldAnimate) {
    return (
      <div className={cn(
        'rounded-full border-2 border-t-transparent',
        sizeClasses[size],
        colorClasses[color],
        className
      )} />
    );
  }

  return (
    <motion.div
      className={cn(
        'rounded-full border-2 border-t-transparent tech-glow-subtle',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }}
    />
  );
};

/**
 * Progress Bar Steps
 */
export const StepProgress: React.FC<{
  currentStep: number;
  totalSteps: number;
  labels?: string[];
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
}> = ({ currentStep, totalSteps, labels, color = 'primary', className }) => {
  const { shouldAnimate } = useAnimationConfig();

  const colorClasses = {
    primary: 'text-tech-primary border-tech-primary bg-tech-primary',
    secondary: 'text-tech-secondary border-tech-secondary bg-tech-secondary',
    success: 'text-tech-success border-tech-success bg-tech-success',
    warning: 'text-tech-warning border-tech-warning bg-tech-warning',
    error: 'text-tech-error border-tech-error bg-tech-error'
  };

  return (
    <div className={cn('flex items-center justify-between', className)}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNumber = i + 1;
        const isCompleted = stepNumber <= currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={i} className="flex flex-col items-center flex-1">
            {/* Step circle */}
            <motion.div
              className={cn(
                'w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold transition-all duration-300',
                isCompleted
                  ? `${colorClasses[color]} text-black shadow-lg`
                  : 'border-tech-primary/30 text-tech-primary/50'
              )}
              initial={shouldAnimate ? { scale: 0 } : { scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {isCompleted ? '✓' : stepNumber}
            </motion.div>

            {/* Label */}
            {labels && labels[i] && (
              <span className={cn(
                'mt-2 text-xs font-mono text-center',
                isCompleted ? 'text-tech-primary' : 'text-muted-foreground'
              )}>
                {labels[i]}
              </span>
            )}

            {/* Connector line */}
            {i < totalSteps - 1 && (
              <div
                className={cn(
                  'absolute h-0.5 bg-tech-primary/20 transition-all duration-500',
                  isCompleted ? 'bg-tech-primary' : 'bg-tech-primary/20'
                )}
                style={{
                  left: `${((i + 1) / totalSteps) * 100}%`,
                  right: `${((totalSteps - i - 2) / totalSteps) * 100}%`,
                  top: '16px'
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;