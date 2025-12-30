/**
 * VideoSection - Video Manifesto Section
 * Placeholder for embedded video
 */

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { v0Content } from '@/content/v0';

export function VideoSection() {
  const { video } = v0Content;

  return (
    <section id="video" className="py-24 bg-[#030303]">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {video.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {video.subtitle}
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video bg-[#0a0a0a] rounded-lg border border-white/10 overflow-hidden group cursor-pointer">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD68B3]/10 to-purple-500/10" />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(253, 104, 179, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(253, 104, 179, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#FD68B3]/20 border-2 border-[#FD68B3] flex items-center justify-center group-hover:bg-[#FD68B3]/30 group-hover:scale-110 transition-all">
                <Play className="w-8 h-8 text-[#FD68B3] ml-1" />
              </div>
            </div>

            {/* Placeholder text */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                {video.placeholder}
              </span>
              <span className="text-xs font-mono text-gray-500">
                02:30
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
