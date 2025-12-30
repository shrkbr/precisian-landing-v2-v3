/**
 * PlatformsGrid - Technology Partners Section
 * Grid of platform/technology logos
 */

import { motion } from 'framer-motion';
import { v0Content } from '@/content/v0';

export function PlatformsGrid() {
  const { platforms } = v0Content;

  return (
    <section id="platforms" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {platforms.title}
          </h2>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {platforms.logos.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-[#030303] border border-white/10 rounded-lg p-6 h-24 flex items-center justify-center transition-all duration-300 hover:border-[#FD68B3]/30 hover:bg-[#030303]/80 group-hover:scale-105">
                {/* Placeholder for logo - using text until images are available */}
                <span className="text-gray-500 group-hover:text-white font-semibold text-sm text-center transition-colors">
                  {platform.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
