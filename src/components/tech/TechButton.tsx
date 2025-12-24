import React, { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnimationConfig } from '@/hooks/tech';
import { Button, type ButtonProps } from '@/components/ui/button';

interface TechButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'link';
  techVariant?: 'neon' | 'hologram' | 'matrix' | 'glitch' | 'pulse';
  glowIntensity?: 'none' | 'subtle' | 'medium' | 'intense';
  scanEffect?: boolean;
  cornerBorders?: boolean;
  animated?: boolean;
}

/**
 * Botão com estética cyberpunk
 * Diferentes variantes: neon, hologram, matrix, glitch, pulse
 */
export const TechButton = forwardRef<HTMLButtonElement, TechButtonProps>(
  ({
    className,
    variant = 'primary',
    techVariant = 'neon',
    size = 'default',
    glowIntensity = 'medium',
    scanEffect = false,
    cornerBorders = false,
    animated = true,
    children,
    disabled,
    ...props
  }, ref) => {
    const { shouldAnimate, getMotionProps } = useAnimationConfig();

    const baseClasses = cn(
      'relative overflow-hidden font-mono font-medium tracking-wide',
      'transition-all duration-300 ease-out',
      'border',
      // Tech variants
      {
        // Neon variant
        'bg-transparent border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-black':
          techVariant === 'neon' && variant === 'primary',
        'bg-transparent border-tech-secondary text-tech-secondary hover:bg-tech-secondary hover:text-black':
          techVariant === 'neon' && variant === 'secondary',

        // Hologram variant
        'bg-tech-surface/30 border-tech-primary/50 text-tech-primary backdrop-blur-xl hover:bg-tech-primary/10':
          techVariant === 'hologram',

        // Matrix variant
        'bg-black/90 border-tech-success text-tech-success hover:bg-tech-success/10':
          techVariant === 'matrix',

        // Glitch variant
        'bg-tech-surface border-tech-error text-tech-error hover:bg-tech-error/10':
          techVariant === 'glitch',

        // Pulse variant
        'bg-gradient-to-r from-tech-primary/20 to-tech-secondary/20 border-tech-primary text-tech-primary hover:from-tech-primary/30 hover:to-tech-secondary/30':
          techVariant === 'pulse'
      },
      // Glow effects
      {
        'tech-glow-subtle': glowIntensity === 'subtle',
        'tech-glow-primary': glowIntensity === 'medium',
        'tech-glow-intense': glowIntensity === 'intense'
      },
      // Corner borders
      {
        'tech-corner-borders': cornerBorders
      },
      // Disabled state
      {
        'opacity-50 cursor-not-allowed': disabled
      },
      className
    );

    const motionProps = getMotionProps(
      {
        whileHover: !disabled ? {
          scale: 1.02,
          boxShadow: glowIntensity !== 'none'
            ? '0 0 20px rgba(253, 104, 179, 0.4)'
            : 'none'
        } : {},
        whileTap: !disabled ? { scale: 0.98 } : {},
        initial: animated ? { opacity: 0, y: 20 } : {},
        animate: animated ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.3, ease: 'easeOut' }
      },
      { scale: 1, boxShadow: 'none' }
    );

    const buttonContent = (
      <>
        {children}

        {/* Scan effect */}
        {scanEffect && shouldAnimate && (
          <div className="tech-scanning-line absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" />
        )}

        {/* Glitch effect overlay */}
        {techVariant === 'glitch' && shouldAnimate && (
          <motion.div
            className="absolute inset-0 bg-tech-error/20 mix-blend-multiply"
            animate={{
              x: [0, -2, 2, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 2
            }}
          />
        )}

        {/* Pulse effect */}
        {techVariant === 'pulse' && shouldAnimate && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-tech-primary/30 to-tech-secondary/30 rounded"
            animate={{
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        )}

        {/* Matrix rain effect */}
        {techVariant === 'matrix' && shouldAnimate && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded">
            {Array.from({ length: 3 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute text-xs text-tech-success/30 font-mono"
                style={{
                  left: `${20 + i * 30}%`,
                  top: '-100%'
                }}
                animate={{
                  y: ['0%', '200%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'linear'
                }}
              >
                {'01'.split('').join('\n')}
              </motion.div>
            ))}
          </div>
        )}

        {/* Hologram scanning lines */}
        {techVariant === 'hologram' && shouldAnimate && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(253, 104, 179, 0.1) 2px, rgba(253, 104, 179, 0.1) 4px)'
            }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        )}
      </>
    );

    if (animated && shouldAnimate) {
      return (
        <motion.button
          ref={ref}
          className={baseClasses}
          disabled={disabled}
          {...motionProps}
          {...props}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

TechButton.displayName = 'TechButton';

/**
 * Terminal Command Button
 */
export const TerminalButton = forwardRef<HTMLButtonElement, Omit<TechButtonProps, 'techVariant'>>(
  ({ className, children, ...props }, ref) => (
    <TechButton
      ref={ref}
      techVariant="matrix"
      variant="secondary"
      size="sm"
      cornerBorders
      className={cn('font-mono text-xs', className)}
      {...props}
    >
      <span className="text-tech-success mr-2">$</span>
      {children}
    </TechButton>
  )
);

TerminalButton.displayName = 'TerminalButton';

/**
 * Action Button - Primary CTA with intense glow
 */
export const ActionButton = forwardRef<HTMLButtonElement, Omit<TechButtonProps, 'techVariant' | 'glowIntensity'>>(
  ({ className, children, ...props }, ref) => (
    <TechButton
      ref={ref}
      techVariant="neon"
      glowIntensity="intense"
      scanEffect
      cornerBorders
      className={cn('px-8 py-3 text-lg', className)}
      {...props}
    >
      {children}
    </TechButton>
  )
);

ActionButton.displayName = 'ActionButton';

/**
 * Ghost Button - Minimal tech style
 */
export const GhostButton = forwardRef<HTMLButtonElement, Omit<TechButtonProps, 'techVariant'>>(
  ({ className, children, ...props }, ref) => (
    <TechButton
      ref={ref}
      techVariant="hologram"
      glowIntensity="subtle"
      variant="ghost"
      className={cn('border-tech-primary/20 hover:border-tech-primary/50', className)}
      {...props}
    >
      {children}
    </TechButton>
  )
);

GhostButton.displayName = 'GhostButton';

/**
 * Danger Button - Error/destructive actions
 */
export const DangerButton = forwardRef<HTMLButtonElement, Omit<TechButtonProps, 'techVariant' | 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <TechButton
      ref={ref}
      techVariant="glitch"
      variant="destructive"
      glowIntensity="medium"
      className={cn('border-tech-error hover:bg-tech-error/20', className)}
      {...props}
    >
      {children}
    </TechButton>
  )
);

DangerButton.displayName = 'DangerButton';

export default TechButton;