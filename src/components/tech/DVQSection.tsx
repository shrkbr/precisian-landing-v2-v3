/**
 * DVQSection - Data Value Quotient framework section
 * Contains title, explanation, and the responsive SVG diagram
 */

import { motion } from 'framer-motion';
import { Shield, Zap } from 'lucide-react';
import { DVQDiagram } from './DVQDiagram';
import { useAnimationConfig } from '@/hooks/tech';

interface DVQSectionProps {
  className?: string;
}

export function DVQSection({ className = '' }: DVQSectionProps) {
  const { shouldAnimate } = useAnimationConfig();

  return (
    <section id="protocol" className={`py-24 px-6 bg-[#030303] ${className}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: -30 } : {}}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#FD68B3]/20 bg-[#FD68B3]/5 px-3 py-1.5 rounded-sm mb-6">
              <Shield className="w-4 h-4 text-[#FD68B3]" />
              <span className="text-[#FD68B3] font-mono text-xs uppercase tracking-wider">
                Proprietary Framework
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">
              Data Value Quotient
              <span className="text-[#FD68B3]">.</span>
            </h2>

            {/* Trademark */}
            <p className="font-mono text-sm text-[#FD68B3] mb-6">
              DVQ<sup>TM</sup>
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              This is not a dashboard problem. It's a{' '}
              <span className="text-white font-medium">decision integrity</span> problem.
            </p>

            <p className="text-gray-500 mb-8">
              DVQ measures how much you can trust your data-driven decisions.
              Each layer in the framework validates and reinforces the next,
              creating a complete system for decision integrity.
            </p>

            {/* Key points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-[#FD68B3]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3 h-3 text-[#FD68B3]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Interdependent layers</p>
                  <p className="text-gray-500 text-sm">
                    Each layer builds on the previous, creating compound reliability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-[#FD68B3]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3 h-3 text-[#FD68B3]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Measurable output</p>
                  <p className="text-gray-500 text-sm">
                    DVQ score quantifies your decision reliability from 0-100
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-[#FD68B3]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3 h-3 text-[#FD68B3]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Not a methodology</p>
                  <p className="text-gray-500 text-sm">
                    It's an operational system, not coaching or consulting
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Diagram */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 30 } : {}}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-radial from-[#FD68B3]/5 via-transparent to-transparent opacity-50" />

            {/* Diagram */}
            <DVQDiagram variant="full" />

            {/* Caption */}
            <p className="text-center text-xs font-mono text-gray-600 mt-6">
              Click on any layer to explore
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
