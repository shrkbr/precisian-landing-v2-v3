/**
 * DVQHexDiagram - Interactive hexagonal diagram
 * Works with click + keyboard (tab/enter) - NO hover dependency
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v0Content, type DVQPillar } from '@/content/v0';
import { trackDVQPillarSelect, trackDVQView } from '@/lib/track';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = v0Content.dvq.pillars;

// Hexagonal positions for 5 pillars (pentagon layout)
const PILLAR_POSITIONS = [
  { x: 200, y: 40, angle: -90 },   // top (journey)
  { x: 350, y: 130, angle: -18 },  // top-right (integration)
  { x: 300, y: 280, angle: 54 },   // bottom-right (governance)
  { x: 100, y: 280, angle: 126 },  // bottom-left (attribution)
  { x: 50, y: 130, angle: 198 },   // top-left (insights)
];

interface DVQHexDiagramProps {
  className?: string;
}

export function DVQHexDiagram({ className = '' }: DVQHexDiagramProps) {
  const [selectedPillar, setSelectedPillar] = useState<DVQPillar | null>(null);
  const [hasTrackedView, setHasTrackedView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track DVQ view on first render
  useEffect(() => {
    if (!hasTrackedView) {
      trackDVQView('home_dvq_section');
      setHasTrackedView(true);
    }
  }, [hasTrackedView]);

  const handlePillarClick = useCallback((pillar: DVQPillar) => {
    setSelectedPillar(pillar);
    trackDVQPillarSelect(
      pillar.id as 'journey' | 'integration' | 'governance' | 'attribution' | 'insights',
      pillar.title,
      'home_dvq_section'
    );
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, pillar: DVQPillar) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePillarClick(pillar);
    }
  }, [handlePillarClick]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
        {/* SVG Diagram */}
        <div className="relative">
          <svg
            viewBox="0 0 400 340"
            className="w-full max-w-[400px] mx-auto"
            role="img"
            aria-label="DVQ Framework Diagram - Clique em cada pilar para ver detalhes"
          >
            {/* Background glow */}
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FD68B3" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FD68B3" stopOpacity="0" />
              </radialGradient>
              <filter id="pillarGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Center glow */}
            <circle cx="200" cy="170" r="100" fill="url(#centerGlow)" />

            {/* Connection lines */}
            <g stroke="#FD68B3" strokeOpacity="0.2" strokeWidth="1">
              {PILLAR_POSITIONS.map((pos, i) => {
                const nextPos = PILLAR_POSITIONS[(i + 1) % PILLAR_POSITIONS.length];
                return (
                  <line
                    key={`line-${i}`}
                    x1={pos.x}
                    y1={pos.y}
                    x2={nextPos.x}
                    y2={nextPos.y}
                  />
                );
              })}
              {/* Lines to center */}
              {PILLAR_POSITIONS.map((pos, i) => (
                <line
                  key={`center-line-${i}`}
                  x1={pos.x}
                  y1={pos.y}
                  x2="200"
                  y2="170"
                  strokeDasharray="4 4"
                />
              ))}
            </g>

            {/* Center DVQ badge */}
            <g>
              <rect
                x="155"
                y="145"
                width="90"
                height="50"
                rx="4"
                fill="#0a0a0a"
                stroke="#FD68B3"
                strokeWidth="2"
              />
              <text
                x="200"
                y="178"
                textAnchor="middle"
                fill="#FD68B3"
                fontSize="20"
                fontFamily="monospace"
                fontWeight="bold"
              >
                DVQ
              </text>
            </g>

            {/* Pillar nodes */}
            {pillars.map((pillar, i) => {
              const pos = PILLAR_POSITIONS[i];
              const isSelected = selectedPillar?.id === pillar.id;

              return (
                <g
                  key={pillar.id}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`${pillar.title}: ${pillar.shortDesc}`}
                  onClick={() => handlePillarClick(pillar)}
                  onKeyDown={(e) => handleKeyDown(e, pillar)}
                  style={{ cursor: 'pointer', outline: 'none' }}
                  className="focus:outline-none"
                >
                  {/* Node circle */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isSelected ? 35 : 30}
                    fill={isSelected ? '#FD68B320' : '#0a0a0a'}
                    stroke="#FD68B3"
                    strokeWidth={isSelected ? 3 : 1.5}
                    filter={isSelected ? 'url(#pillarGlow)' : undefined}
                    className="transition-all duration-200"
                  />

                  {/* Node number */}
                  <text
                    x={pos.x}
                    y={pos.y + 5}
                    textAnchor="middle"
                    fill={isSelected ? '#FD68B3' : '#fff'}
                    fontSize="14"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </text>

                  {/* Label below node */}
                  <text
                    x={pos.x}
                    y={pos.y + 50}
                    textAnchor="middle"
                    fill={isSelected ? '#FD68B3' : '#9CA3AF'}
                    fontSize="10"
                    fontFamily="monospace"
                    className="transition-colors duration-200"
                  >
                    {pillar.subtitle}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Instruction */}
          <p className="text-center text-xs font-mono text-gray-600 mt-4">
            Clique em um pilar para ver detalhes
          </p>
        </div>

        {/* DVQ Dimension Panel */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {selectedPillar ? (
              <motion.div
                key={selectedPillar.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0a0a0a] border border-[#FD68B3]/30 rounded-lg p-6"
              >
                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-2">
                  {selectedPillar.title}
                </h4>

                {/* Problem line */}
                <p className="text-[#FD68B3] font-mono text-sm mb-4">
                  {selectedPillar.problem}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {selectedPillar.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-[#FD68B3] mt-0.5">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={selectedPillar.solutionLink}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
                >
                  Ver solução
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex items-center justify-center text-gray-600 font-mono text-sm"
              >
                ← Selecione um pilar para ver detalhes
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Layout - Accordion */}
      <div className="md:hidden space-y-3">
        {pillars.map((pillar, i) => {
          const isSelected = selectedPillar?.id === pillar.id;

          return (
            <div key={pillar.id} className="border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedPillar(isSelected ? null : pillar)}
                className={`
                  w-full flex items-center gap-4 p-4 text-left transition-colors
                  ${isSelected ? 'bg-[#FD68B3]/10' : 'bg-[#0a0a0a]'}
                `}
                aria-expanded={isSelected}
              >
                <span className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm
                  ${isSelected ? 'bg-[#FD68B3] text-black' : 'bg-[#FD68B3]/20 text-[#FD68B3]'}
                `}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-white">{pillar.title}</p>
                  <p className="text-xs text-gray-500 font-mono">{pillar.subtitle}</p>
                </div>
                <span className={`text-[#FD68B3] transition-transform ${isSelected ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 space-y-4">
                      <p className="text-[#FD68B3] font-mono text-sm">
                        {pillar.problem}
                      </p>
                      <ul className="space-y-2">
                        {pillar.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="text-[#FD68B3] mt-0.5">✓</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={pillar.solutionLink}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-wider"
                      >
                        Ver solução
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
