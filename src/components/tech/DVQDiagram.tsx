/**
 * DVQDiagram - Responsive SVG showing the DVQ framework layers
 * Must be understandable in 3-5 seconds without hover
 */

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '@/hooks/tech';
import { trackDVQInteraction } from '@/services/analytics';

interface DVQLayer {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  color: string;
  y: number;
}

const LAYERS: DVQLayer[] = [
  {
    id: 'sources',
    label: 'Data Sources',
    shortLabel: 'Sources',
    description: 'GA4, CRM, ERP, Media Platforms',
    color: '#6B7280', // gray
    y: 0,
  },
  {
    id: 'journey',
    label: 'Journey Mapping',
    shortLabel: 'Journey',
    description: 'Complete touchpoint tracking',
    color: '#3B82F6', // blue
    y: 1,
  },
  {
    id: 'integration',
    label: 'Integration',
    shortLabel: 'Integrate',
    description: 'Unified data layer',
    color: '#8B5CF6', // purple
    y: 2,
  },
  {
    id: 'governance',
    label: 'Governance',
    shortLabel: 'Govern',
    description: 'Quality & compliance',
    color: '#EC4899', // pink
    y: 3,
  },
  {
    id: 'attribution',
    label: 'Attribution',
    shortLabel: 'Attribute',
    description: 'True value assignment',
    color: '#F59E0B', // amber
    y: 4,
  },
  {
    id: 'insights',
    label: 'Insights',
    shortLabel: 'Insights',
    description: 'AI-powered analysis',
    color: '#10B981', // emerald
    y: 5,
  },
];

interface DVQDiagramProps {
  className?: string;
  variant?: 'full' | 'compact';
}

export function DVQDiagram({ className = '', variant = 'full' }: DVQDiagramProps) {
  const { shouldAnimate } = useAnimationConfig();
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  const handleLayerHover = useCallback((layerId: string | null) => {
    setHoveredLayer(layerId);
    if (layerId) {
      const layer = LAYERS.find(l => l.id === layerId);
      if (layer) {
        trackDVQInteraction('hover', layerId, layer.label);
      }
    }
  }, []);

  const handleLayerClick = useCallback((layerId: string) => {
    const layer = LAYERS.find(l => l.id === layerId);
    if (layer) {
      trackDVQInteraction('click', layerId, layer.label);
    }
  }, []);

  // Desktop: Full pyramid visualization
  if (variant === 'full') {
    return (
      <div className={`relative ${className}`}>
        {/* Desktop Version */}
        <div className="hidden md:block">
          <svg
            viewBox="0 0 600 400"
            className="w-full max-w-[600px] mx-auto"
            role="img"
            aria-label="DVQ Framework Diagram showing 6 interdependent layers leading to Decision Integrity"
          >
            {/* Background gradient */}
            <defs>
              <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#030303" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting lines */}
            <g opacity="0.3">
              {LAYERS.map((layer, i) => {
                if (i === LAYERS.length - 1) return null;
                const y1 = 60 + i * 50 + 20;
                const y2 = 60 + (i + 1) * 50;
                return (
                  <line
                    key={`line-${layer.id}`}
                    x1="300"
                    y1={y1}
                    x2="300"
                    y2={y2}
                    stroke={layer.color}
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                );
              })}
              {/* Final arrow to DVQ */}
              <line x1="300" y1="330" x2="300" y2="360" stroke="#FD68B3" strokeWidth="3" />
              <polygon points="300,370 295,360 305,360" fill="#FD68B3" />
            </g>

            {/* Layers */}
            {LAYERS.map((layer, i) => {
              const width = 400 - i * 40;
              const x = (600 - width) / 2;
              const y = 50 + i * 50;
              const isHovered = hoveredLayer === layer.id;

              return (
                <motion.g
                  key={layer.id}
                  initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => handleLayerHover(layer.id)}
                  onMouseLeave={() => handleLayerHover(null)}
                  onClick={() => handleLayerClick(layer.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Layer box */}
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height="40"
                    rx="4"
                    fill={`${layer.color}20`}
                    stroke={layer.color}
                    strokeWidth={isHovered ? 2 : 1}
                    filter={isHovered ? 'url(#glow)' : undefined}
                    className="transition-all duration-200"
                  />

                  {/* Layer label */}
                  <text
                    x="300"
                    y={y + 25}
                    textAnchor="middle"
                    fill={layer.color}
                    fontSize="14"
                    fontFamily="monospace"
                    fontWeight="500"
                  >
                    {layer.label}
                  </text>

                  {/* Description on hover */}
                  {isHovered && (
                    <text
                      x="300"
                      y={y + 55}
                      textAnchor="middle"
                      fill="#9CA3AF"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      {layer.description}
                    </text>
                  )}
                </motion.g>
              );
            })}

            {/* DVQ Output Box */}
            <motion.g
              initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : {}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <rect
                x="200"
                y="360"
                width="200"
                height="35"
                rx="4"
                fill="#FD68B310"
                stroke="#FD68B3"
                strokeWidth="2"
              />
              <text
                x="300"
                y="383"
                textAnchor="middle"
                fill="#FD68B3"
                fontSize="14"
                fontFamily="monospace"
                fontWeight="bold"
              >
                DECISION INTEGRITY
              </text>
            </motion.g>

            {/* Side label */}
            <text
              x="30"
              y="200"
              fill="#4B5563"
              fontSize="10"
              fontFamily="monospace"
              transform="rotate(-90, 30, 200)"
            >
              DVQ Framework
            </text>
          </svg>
        </div>

        {/* Mobile Version - Simplified vertical stack */}
        <div className="md:hidden">
          <div className="space-y-3">
            {LAYERS.map((layer, i) => (
              <motion.div
                key={layer.id}
                initial={shouldAnimate ? { opacity: 0, x: -20 } : {}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ backgroundColor: layer.color }}
                />
                <div className="flex-1 py-2 px-3 rounded bg-white/5 border border-white/10">
                  <span
                    className="font-mono text-sm"
                    style={{ color: layer.color }}
                  >
                    {layer.shortLabel}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M10 5 L10 15 M6 11 L10 15 L14 11" stroke="#FD68B3" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* DVQ Output */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : {}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="py-3 px-4 rounded bg-[#FD68B3]/10 border border-[#FD68B3]/30 text-center"
            >
              <span className="font-mono text-sm text-[#FD68B3] font-bold">
                DECISION INTEGRITY
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Compact variant - inline horizontal
  return (
    <div className={`flex items-center gap-2 flex-wrap justify-center ${className}`}>
      {LAYERS.map((layer, i) => (
        <div key={layer.id} className="flex items-center gap-2">
          <span
            className="px-2 py-1 rounded text-xs font-mono"
            style={{
              backgroundColor: `${layer.color}20`,
              color: layer.color,
            }}
          >
            {layer.shortLabel}
          </span>
          {i < LAYERS.length - 1 && (
            <span className="text-gray-600">→</span>
          )}
        </div>
      ))}
      <span className="text-gray-600">→</span>
      <span className="px-2 py-1 rounded text-xs font-mono bg-[#FD68B3]/20 text-[#FD68B3] font-bold">
        DVQ
      </span>
    </div>
  );
}
