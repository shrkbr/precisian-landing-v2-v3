import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTypingEffect, useAnimationConfig } from '@/hooks/tech';

interface NeonTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  glow?: 'none' | 'subtle' | 'medium' | 'intense';
  typing?: boolean;
  typeSpeed?: number;
  className?: string;
  animate?: boolean;
}

/**
 * Componente de texto com efeitos neon cyberpunk
 * Suporta typing effect e diferentes intensidades de glow
 */
export const NeonText: React.FC<NeonTextProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  glow = 'medium',
  typing = false,
  typeSpeed = 50,
  className,
  animate = true
}) => {
  const { shouldAnimate, getMotionProps } = useAnimationConfig();
  const text = typeof children === 'string' ? children : '';

  const { displayText, isComplete } = useTypingEffect(text, {
    enabled: typing && shouldAnimate,
    speed: typeSpeed,
    startDelay: 300
  });

  const variantClasses = {
    primary: 'text-tech-primary',
    secondary: 'text-tech-secondary',
    success: 'text-tech-success',
    warning: 'text-tech-warning',
    error: 'text-tech-error'
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const glowClasses = {
    none: '',
    subtle: 'tech-glow-subtle',
    medium: 'tech-glow-primary',
    intense: 'tech-glow-intense'
  };

  const baseClasses = cn(
    'font-mono font-medium transition-all duration-300',
    'relative inline-block',
    variantClasses[variant],
    sizeClasses[size],
    glowClasses[glow],
    {
      'tech-text-neon': glow !== 'none',
      'animate-tech-pulse-neon': animate && shouldAnimate && glow !== 'none'
    },
    className
  );

  const motionProps = getMotionProps(
    {
      initial: animate ? { opacity: 0, scale: 0.95 } : {},
      animate: animate ? { opacity: 1, scale: 1 } : {},
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    { opacity: 1, scale: 1 }
  );

  const displayContent = typing ? displayText : children;

  if (animate && shouldAnimate) {
    return (
      <motion.span
        className={baseClasses}
        {...motionProps}
      >
        {displayContent}
        {typing && !isComplete && shouldAnimate && (
          <span className="animate-tech-blink ml-1 text-tech-primary">|</span>
        )}
      </motion.span>
    );
  }

  return (
    <span className={baseClasses}>
      {displayContent}
      {typing && !isComplete && shouldAnimate && (
        <span className="animate-tech-blink ml-1 text-tech-primary">|</span>
      )}
    </span>
  );
};

/**
 * Variantes pré-configuradas
 */
export const NeonHeading: React.FC<Omit<NeonTextProps, 'variant' | 'size'> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}> = ({ level = 1, className, ...props }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const levelSizes = {
    1: '2xl',
    2: 'xl',
    3: 'lg',
    4: 'md',
    5: 'sm',
    6: 'sm'
  } as const;

  return (
    <Tag className={cn('font-bold', className)}>
      <NeonText
        variant="primary"
        size={levelSizes[level]}
        glow="medium"
        {...props}
      />
    </Tag>
  );
};

/**
 * Texto de código/terminal
 */
export const TerminalText: React.FC<Omit<NeonTextProps, 'variant' | 'glow'>> = (props) => (
  <NeonText
    variant="secondary"
    glow="subtle"
    className="font-mono text-xs tracking-wider bg-tech-surface/30 px-2 py-1 rounded border border-tech-secondary/20"
    {...props}
  />
);

/**
 * Badge de status com neon
 */
export const StatusBadge: React.FC<{
  status: 'online' | 'offline' | 'processing' | 'error';
  children: React.ReactNode;
  className?: string;
}> = ({ status, children, className }) => {
  const statusVariants = {
    online: 'success',
    offline: 'error',
    processing: 'warning',
    error: 'error'
  } as const;

  const statusIcons = {
    online: '●',
    offline: '●',
    processing: '◉',
    error: '●'
  };

  return (
    <div className={cn(
      'inline-flex items-center gap-2 px-3 py-1 rounded-full',
      'bg-tech-surface/80 border',
      'border-tech-primary/20',
      className
    )}>
      <NeonText
        variant={statusVariants[status]}
        size="sm"
        glow="subtle"
        animate={status === 'processing'}
      >
        {statusIcons[status]}
      </NeonText>
      <span className="text-xs font-mono text-muted-foreground">
        {children}
      </span>
    </div>
  );
};

export default NeonText;