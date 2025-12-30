/**
 * FinalCTA - Final Call-to-Action Section
 * Bottom section with DVQ modal trigger
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { v0Content } from '@/content/v0';
import { DVQModal } from '@/components/dvq';
import { trackCTAClick } from '@/lib/track';

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { finalCta } = v0Content;

  const handleOpenModal = () => {
    trackCTAClick('final_cta', 'footer');
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#030303] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(253, 104, 179, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(253, 104, 179, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          {/* Gradient orb */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FD68B3]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Terminal-style title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-4xl font-mono text-[#FD68B3]">
              <span className="text-gray-500">&gt;</span> {finalCta.title}
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            {finalCta.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleOpenModal}
              className="px-10 py-5 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-colors group"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black group-hover:animate-pulse" />
                {finalCta.cta}
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <DVQModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourceCta="final_cta"
        sourceLocation="footer"
      />
    </>
  );
}
