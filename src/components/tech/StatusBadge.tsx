import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnimationConfig } from '@/hooks/tech';

interface StatusBadgeProps {
  status: 'online' | 'offline' | 'processing' | 'error' | 'warning' | 'success';
  variant?: 'default' | 'outline' | 'minimal' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  showDot?: boolean;
  showPulse?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Badge de status com estética cyberpunk
 * Diferentes estados: online, offline, processing, error, warning, success
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  variant = 'default',
  size = 'md',
  animated = true,
  showDot = true,
  showPulse = false,
  children,
  className
}) => {
  const { shouldAnimate, getMotionProps } = useAnimationConfig();

  const statusConfig = {
    online: {
      color: 'text-tech-success',
      bg: 'bg-tech-success/10',
      border: 'border-tech-success/30',
      dot: '●',
      glow: 'shadow-tech-success/30'
    },
    offline: {
      color: 'text-tech-error',
      bg: 'bg-tech-error/10',
      border: 'border-tech-error/30',
      dot: '●',
      glow: 'shadow-tech-error/30'
    },
    processing: {
      color: 'text-tech-warning',
      bg: 'bg-tech-warning/10',
      border: 'border-tech-warning/30',
      dot: '◉',
      glow: 'shadow-tech-warning/30'
    },
    error: {
      color: 'text-tech-error',
      bg: 'bg-tech-error/10',
      border: 'border-tech-error/30',
      dot: '✕',
      glow: 'shadow-tech-error/30'
    },
    warning: {
      color: 'text-tech-warning',
      bg: 'bg-tech-warning/10',
      border: 'border-tech-warning/30',
      dot: '⚠',
      glow: 'shadow-tech-warning/30'
    },
    success: {
      color: 'text-tech-success',
      bg: 'bg-tech-success/10',
      border: 'border-tech-success/30',
      dot: '✓',
      glow: 'shadow-tech-success/30'
    }
  };

  const config = statusConfig[status];

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const baseClasses = cn(
    'inline-flex items-center gap-2 rounded-full font-mono font-medium tracking-wider uppercase',
    'transition-all duration-300',
    sizeClasses[size],
    // Variant styles
    {
      // Default variant
      [config.bg]: variant === 'default',
      [config.border]: variant === 'default' || variant === 'outline',
      'border': variant === 'default' || variant === 'outline',

      // Outline variant
      'bg-transparent': variant === 'outline',

      // Glow variant
      'tech-glow-subtle': variant === 'glow',
      [`shadow-lg ${config.glow}`]: variant === 'glow',

      // Minimal variant
      'bg-transparent border-0': variant === 'minimal'
    },
    config.color,
    className
  );

  const motionProps = getMotionProps(
    {
      initial: animated ? { opacity: 0, scale: 0.8 } : {},
      animate: animated ? { opacity: 1, scale: 1 } : {},
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    { opacity: 1, scale: 1 }
  );

  const content = (
    <>
      {showDot && (
        <motion.span
          className={cn(
            'text-current',
            {
              'animate-tech-pulse-neon': showPulse && shouldAnimate,
              'animate-spin': status === 'processing' && shouldAnimate
            }
          )}
          animate={
            status === 'processing' && shouldAnimate
              ? { opacity: [1, 0.5, 1] }
              : {}
          }
          transition={
            status === 'processing'
              ? { duration: 1, repeat: Infinity }
              : {}
          }
        >
          {config.dot}
        </motion.span>
      )}
      <span>{children}</span>
    </>
  );

  if (animated && shouldAnimate) {
    return (
      <motion.div
        className={baseClasses}
        {...motionProps}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses}>
      {content}
    </div>
  );
};

/**
 * Server Status Badge
 */
export const ServerStatusBadge: React.FC<{
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  className?: string;
}> = ({ status, className }) => {
  const statusMap = {
    operational: { badgeStatus: 'online' as const, label: 'Operational' },
    degraded: { badgeStatus: 'warning' as const, label: 'Degraded Performance' },
    outage: { badgeStatus: 'error' as const, label: 'Service Outage' },
    maintenance: { badgeStatus: 'processing' as const, label: 'Maintenance Mode' }
  };

  const { badgeStatus, label } = statusMap[status];

  return (
    <StatusBadge
      status={badgeStatus}
      variant="glow"
      showPulse={status === 'maintenance'}
      className={className}
    >
      {label}
    </StatusBadge>
  );
};

/**
 * Connection Status Badge
 */
export const ConnectionStatusBadge: React.FC<{
  connected: boolean;
  latency?: number;
  className?: string;
}> = ({ connected, latency, className }) => (
  <StatusBadge
    status={connected ? 'online' : 'offline'}
    variant="default"
    showPulse={connected}
    className={className}
  >
    {connected ? 'Connected' : 'Disconnected'}
    {connected && latency && (
      <span className="text-xs opacity-75">
        ({latency}ms)
      </span>
    )}
  </StatusBadge>
);

/**
 * Progress Status Badge
 */
export const ProgressStatusBadge: React.FC<{
  progress: number; // 0-100
  label?: string;
  className?: string;
}> = ({ progress, label = 'Progress', className }) => {
  const getStatus = (prog: number) => {
    if (prog === 0) return 'offline';
    if (prog === 100) return 'success';
    return 'processing';
  };

  return (
    <StatusBadge
      status={getStatus(progress)}
      variant="outline"
      showPulse={progress > 0 && progress < 100}
      className={className}
    >
      {label}: {progress}%
    </StatusBadge>
  );
};

/**
 * Security Status Badge
 */
export const SecurityStatusBadge: React.FC<{
  level: 'secure' | 'warning' | 'threat' | 'breach';
  className?: string;
}> = ({ level, className }) => {
  const securityMap = {
    secure: { status: 'success' as const, label: 'Secure', icon: '🛡️' },
    warning: { status: 'warning' as const, label: 'Warning', icon: '⚠️' },
    threat: { status: 'error' as const, label: 'Threat Detected', icon: '⚡' },
    breach: { status: 'error' as const, label: 'Security Breach', icon: '🔴' }
  };

  const { status, label, icon } = securityMap[level];

  return (
    <StatusBadge
      status={status}
      variant="glow"
      size="lg"
      showPulse={level === 'threat' || level === 'breach'}
      className={className}
    >
      <span className="mr-1">{icon}</span>
      {label}
    </StatusBadge>
  );
};

/**
 * API Status Badge
 */
export const APIStatusBadge: React.FC<{
  endpoint: string;
  status: 200 | 400 | 401 | 403 | 404 | 500 | 503;
  responseTime?: number;
  className?: string;
}> = ({ endpoint, status, responseTime, className }) => {
  const getStatusType = (code: number) => {
    if (code >= 200 && code < 300) return 'success';
    if (code >= 400 && code < 500) return 'warning';
    return 'error';
  };

  const getStatusText = (code: number) => {
    const statusTexts: Record<number, string> = {
      200: 'OK',
      400: 'Bad Request',
      401: 'Unauthorized',
      403: 'Forbidden',
      404: 'Not Found',
      500: 'Server Error',
      503: 'Service Unavailable'
    };
    return statusTexts[code] || 'Unknown';
  };

  return (
    <div className="flex flex-col gap-1">
      <StatusBadge
        status={getStatusType(status)}
        variant="outline"
        size="sm"
        className={className}
      >
        {endpoint} - {status} {getStatusText(status)}
      </StatusBadge>
      {responseTime && (
        <span className="text-xs text-muted-foreground font-mono">
          Response: {responseTime}ms
        </span>
      )}
    </div>
  );
};

/**
 * Real-time Status Display
 */
export const RealtimeStatusGrid: React.FC<{
  services: Array<{
    name: string;
    status: 'online' | 'offline' | 'processing' | 'error';
    uptime?: string;
    lastCheck?: string;
  }>;
  className?: string;
}> = ({ services, className }) => (
  <div className={cn('grid gap-2', className)}>
    {services.map((service, index) => (
      <div
        key={index}
        className="flex items-center justify-between p-3 bg-tech-surface/30 rounded border border-tech-primary/20"
      >
        <div className="flex items-center gap-3">
          <StatusBadge status={service.status} variant="minimal" size="sm">
            {service.name}
          </StatusBadge>
        </div>
        <div className="text-right">
          {service.uptime && (
            <p className="text-xs text-muted-foreground font-mono">
              Uptime: {service.uptime}
            </p>
          )}
          {service.lastCheck && (
            <p className="text-xs text-muted-foreground font-mono">
              Last check: {service.lastCheck}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default StatusBadge;