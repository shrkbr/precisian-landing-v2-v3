/**
 * V0Hero - DVQ-first Hero Section
 * Tech/cyberpunk aesthetic with modal CTA
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { v0Content } from '@/content/v0';
import { DVQModal } from '@/components/dvq';
import { trackCTAClick } from '@/lib/track';

export function V0Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { hero } = v0Content;

  const handleOpenModal = () => {
    trackCTAClick('hero_cta_primary', 'hero');
    setIsModalOpen(true);
  };

  const handleExplore = () => {
    trackCTAClick('hero_cta_secondary', 'hero');
    document.getElementById('dvq')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(253, 104, 179, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(253, 104, 179, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FD68B3]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-[#FD68B3]/10 border border-[#FD68B3]/30 rounded-full text-[#FD68B3] text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#FD68B3] mr-2 animate-pulse" />
              {hero.badge}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 max-w-5xl mx-auto"
          >
            {hero.h1}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleOpenModal}
              className="px-8 py-4 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-colors"
            >
              {hero.cta1}
            </button>
            <button
              onClick={handleExplore}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-white/10 hover:border-white/40 transition-colors"
            >
              {hero.cta2}
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <DVQModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourceCta="hero_cta"
        sourceLocation="hero"
      />
    </>
  );
}
