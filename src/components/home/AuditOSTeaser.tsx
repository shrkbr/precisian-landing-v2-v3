/**
 * AuditOSTeaser - Teaser section for AuditOS product
 * Shows workflow/features preview with CTA
 */

import { motion } from 'framer-motion';
import { Plug, ClipboardCheck, Gauge, Brain, ArrowRight } from 'lucide-react';
import { v0Content } from '@/content/v0';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  plug: Plug,
  'clipboard-check': ClipboardCheck,
  gauge: Gauge,
  brain: Brain,
};

export function AuditOSTeaser() {
  const { auditos } = v0Content;

  return (
    <section id="auditos" className="py-24 bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 bg-[#FD68B3]/10 border border-[#FD68B3]/30 rounded-full text-[#FD68B3] text-xs font-mono uppercase tracking-widest">
            {auditos.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {auditos.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {auditos.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {auditos.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Plug;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 h-full transition-all duration-300 hover:border-[#FD68B3]/30 hover:bg-[#0a0a0a]/80">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#FD68B3]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FD68B3]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#FD68B3]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Connection line (except last) */}
                {index < auditos.features.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#FD68B3]/30 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-mono">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-400">Connect</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#FD68B3]/50 rotate-90 md:rotate-0" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-gray-400">Audit</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#FD68B3]/50 rotate-90 md:rotate-0" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-gray-400">Score</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#FD68B3]/50 rotate-90 md:rotate-0" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#FD68B3] animate-pulse" />
              <span className="text-gray-400">Insights</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://auditos.precisian.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-colors group"
          >
            {auditos.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
