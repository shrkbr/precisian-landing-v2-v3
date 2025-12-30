/**
 * DVQSection - DVQ Framework Section
 * Interactive hexagonal diagram with pillar details
 */

import { motion } from 'framer-motion';
import { v0Content } from '@/content/v0';
import { DVQHexDiagram } from '@/components/dvq';

export function DVQSection() {
  const { dvq } = v0Content;

  return (
    <section id="dvq" className="py-24 bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 bg-[#FD68B3]/10 border border-[#FD68B3]/30 rounded-full text-[#FD68B3] text-xs font-mono uppercase tracking-widest">
            {dvq.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {dvq.title}
          </h2>
        </motion.div>

        {/* Trademark */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center text-[#FD68B3] font-mono text-sm mb-8"
        >
          {dvq.trademark}
        </motion.p>

        {/* Definition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          {dvq.definition}
        </motion.p>

        {/* Interactive Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <DVQHexDiagram />
        </motion.div>
      </div>
    </section>
  );
}
