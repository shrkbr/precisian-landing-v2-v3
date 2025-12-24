import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnimationConfig } from '@/hooks/tech';

interface GridPatternProps {
  variant?: 'dots' | 'lines' | 'circuit' | 'hexagon';
  intensity?: 'subtle' | 'medium' | 'strong';
  animated?: boolean;
  color?: 'primary' | 'secondary' | 'neutral';
  className?: string;
  overlay?: boolean;
}

/**
 * Componente de padrão de grid cyberpunk para backgrounds
 * Diferentes variações: dots, lines, circuit, hexagon
 */
export const GridPattern: React.FC<GridPatternProps> = ({
  variant = 'dots',
  intensity = 'medium',
  animated = true,
  color = 'primary',
  className,
  overlay = false
}) => {
  const { shouldAnimate } = useAnimationConfig();

  const colorClasses = {
    primary: 'text-tech-primary/20',
    secondary: 'text-tech-secondary/20',
    neutral: 'text-muted-foreground/10'
  };

  const intensityOpacity = {
    subtle: 'opacity-30',
    medium: 'opacity-50',
    strong: 'opacity-70'
  };

  const baseClasses = cn(
    'absolute inset-0 pointer-events-none',
    'bg-repeat',
    colorClasses[color],
    intensityOpacity[intensity],
    {
      'animate-tech-pulse-neon': animated && shouldAnimate && variant !== 'circuit'
    },
    className
  );

  // SVG patterns para diferentes variantes
  const patterns = {
    dots: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="fill-current"
      >
        <circle cx="10" cy="10" r="1" />
      </svg>
    ),

    lines: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="stroke-current fill-none"
        strokeWidth="0.5"
      >
        <path d="M0 20h40M20 0v40" />
      </svg>
    ),

    hexagon: (
      <svg
        width="60"
        height="52"
        viewBox="0 0 60 52"
        className="stroke-current fill-none"
        strokeWidth="0.5"
      >
        <polygon points="30,2 45,14 45,38 30,50 15,38 15,14" />
      </svg>
    ),

    circuit: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="stroke-current fill-none"
        strokeWidth="0.3"
      >
        <path d="M0 40h20M60 40h20M40 0v20M40 60v20" />
        <circle cx="20" cy="40" r="2" className="fill-current" />
        <circle cx="60" cy="40" r="2" className="fill-current" />
        <circle cx="40" cy="20" r="2" className="fill-current" />
        <circle cx="40" cy="60" r="2" className="fill-current" />
        <rect x="35" y="35" width="10" height="10" rx="1" className="fill-current opacity-50" />
      </svg>
    )
  };

  if (overlay) {
    return (
      <div className={cn('absolute inset-0 pointer-events-none', className)}>
        <div
          className={baseClasses}
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns="http://www.w3.org/2000/svg">${patterns[variant]?.props.children || ''}</svg>`
            )}")`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      </div>
    );
  }

  return (
    <div className={baseClasses}>
      {patterns[variant]}
    </div>
  );
};

/**
 * Radar Grid - Grid com efeito de radar scanning
 */
export const RadarGrid: React.FC<{
  className?: string;
  scanSpeed?: 'slow' | 'medium' | 'fast';
}> = ({ className, scanSpeed = 'medium' }) => {
  const { shouldAnimate } = useAnimationConfig();

  const speeds = {
    slow: '6s',
    medium: '4s',
    fast: '2s'
  };

  return (
    <div className={cn('relative', className)}>
      {/* Circles */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={cn(
            'absolute top-1/2 left-1/2 border border-tech-primary/20 rounded-full',
            'transform -translate-x-1/2 -translate-y-1/2'
          )}
          style={{
            width: `${i * 25}%`,
            height: `${i * 25}%`
          }}
        />
      ))}

      {/* Scanning line */}
      {shouldAnimate && (
        <motion.div
          className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-tech-primary to-transparent transform -translate-y-1/2 origin-left"
          animate={{ rotate: 360 }}
          transition={{
            duration: parseFloat(speeds[scanSpeed]),
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      )}

      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-tech-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-tech-primary/50" />
    </div>
  );
};

/**
 * Matrix Rain Background
 */
export const MatrixRain: React.FC<{
  className?: string;
  density?: 'low' | 'medium' | 'high';
}> = ({ className, density = 'medium' }) => {
  const { shouldAnimate } = useAnimationConfig();

  const densities = {
    low: 8,
    medium: 12,
    high: 20
  };

  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

  if (!shouldAnimate) {
    return (
      <div className={cn('absolute inset-0 pointer-events-none opacity-10', className)}>
        <GridPattern variant="lines" intensity="subtle" animated={false} />
      </div>
    );
  }

  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden', className)}>
      {Array.from({ length: densities[density] }, (_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-tech-primary/40 text-xs whitespace-nowrap"
          style={{
            left: `${(i * 100) / densities[density]}%`,
          }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{
            y: 'calc(100vh + 100px)',
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'linear'
          }}
        >
          {Array.from({ length: 20 }, () =>
            chars[Math.floor(Math.random() * chars.length)]
          ).join('')}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * Hologram Effect Background
 */
export const HologramEffect: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  const { shouldAnimate } = useAnimationConfig();

  return (
    <div className={cn('relative', className)}>
      {children}

      {/* Hologram scanning lines */}
      {shouldAnimate && (
        <>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(253, 104, 179, 0.03) 2px, rgba(253, 104, 179, 0.03) 4px)'
            }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(253, 104, 179, 0.02) 4px, rgba(253, 104, 179, 0.02) 8px)'
            }}
            animate={{
              y: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </>
      )}
    </div>
  );
};

export default GridPattern;