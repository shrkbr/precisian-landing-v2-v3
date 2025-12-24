import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

// GlowCard Types
export interface GlowCardProps {
  children: ReactNode;
  glowIntensity?: 'low' | 'medium' | 'high';
  glowColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  animated?: boolean;
  scanningLine?: boolean;
  cornerBorders?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

// NeonText Types
export interface NeonTextProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  glow?: 'none' | 'subtle' | 'medium' | 'intense';
  typing?: boolean;
  typeSpeed?: number;
  className?: string;
  animate?: boolean;
}

export interface NeonHeadingProps extends Omit<NeonTextProps, 'variant' | 'size'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TerminalTextProps extends Omit<NeonTextProps, 'variant' | 'glow'> {}

// GridPattern Types
export interface GridPatternProps {
  variant?: 'dots' | 'lines' | 'circuit' | 'hexagon';
  intensity?: 'subtle' | 'medium' | 'strong';
  animated?: boolean;
  color?: 'primary' | 'secondary' | 'neutral';
  className?: string;
  overlay?: boolean;
}

export interface RadarGridProps {
  className?: string;
  scanSpeed?: 'slow' | 'medium' | 'fast';
}

export interface MatrixRainProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

export interface HologramEffectProps {
  className?: string;
  children: ReactNode;
}

// TechButton Types
export interface TechButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'variant'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'link';
  techVariant?: 'neon' | 'hologram' | 'matrix' | 'glitch' | 'pulse';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glowIntensity?: 'none' | 'subtle' | 'medium' | 'intense';
  scanEffect?: boolean;
  cornerBorders?: boolean;
  animated?: boolean;
  children: ReactNode;
}

export interface TerminalButtonProps extends Omit<TechButtonProps, 'techVariant'> {}

export interface ActionButtonProps extends Omit<TechButtonProps, 'techVariant' | 'glowIntensity'> {}

export interface GhostButtonProps extends Omit<TechButtonProps, 'techVariant'> {}

export interface DangerButtonProps extends Omit<TechButtonProps, 'techVariant' | 'variant'> {}

// ProgressIndicator Types
export interface ProgressIndicatorProps {
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

export interface TechSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
}

export interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
}

// StatusBadge Types
export interface StatusBadgeProps {
  status: 'online' | 'offline' | 'processing' | 'error' | 'warning' | 'success';
  variant?: 'default' | 'outline' | 'minimal' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  showDot?: boolean;
  showPulse?: boolean;
  children: ReactNode;
  className?: string;
}

export interface ServerStatusBadgeProps {
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  className?: string;
}

export interface ConnectionStatusBadgeProps {
  connected: boolean;
  latency?: number;
  className?: string;
}

export interface ProgressStatusBadgeProps {
  progress: number; // 0-100
  label?: string;
  className?: string;
}

export interface SecurityStatusBadgeProps {
  level: 'secure' | 'warning' | 'threat' | 'breach';
  className?: string;
}

export interface APIStatusBadgeProps {
  endpoint: string;
  status: 200 | 400 | 401 | 403 | 404 | 500 | 503;
  responseTime?: number;
  className?: string;
}

export interface RealtimeStatusGridProps {
  services: Array<{
    name: string;
    status: 'online' | 'offline' | 'processing' | 'error';
    uptime?: string;
    lastCheck?: string;
  }>;
  className?: string;
}

// Utility Types
export type TechVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export type TechSize = 'sm' | 'md' | 'lg' | 'xl';
export type GlowIntensity = 'none' | 'subtle' | 'medium' | 'intense';
export type StatusType = 'online' | 'offline' | 'processing' | 'error' | 'warning' | 'success';

// Animation Types
export interface AnimationConfig {
  shouldAnimate: boolean;
  getAnimationClass: (className: string) => string;
  getMotionProps: (motionProps: any, fallback?: any) => any;
}

// Typing Effect Types
export interface TypingEffectOptions {
  enabled?: boolean;
  speed?: number; // ms per character
  startDelay?: number;
  cursor?: boolean;
  loop?: boolean;
  loopDelay?: number;
}

export interface TypingEffectResult {
  displayText: string;
  isComplete: boolean;
  isTyping: boolean;
  reset: () => void;
}