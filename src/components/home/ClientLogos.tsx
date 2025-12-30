/**
 * ClientLogos - Trusted by companies section
 * Shows client logos in a grid/marquee
 */

import { motion } from 'framer-motion';
import { v0Content } from '@/content/v0';

export function ClientLogos() {
  const { clients } = v0Content;

  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest mb-10"
        >
          {clients.title}
        </motion.p>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.logos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder for logo - using text until images are available */}
              <div className="h-12 flex items-center justify-center px-6 py-2 border border-white/10 rounded bg-white/5">
                <span className="text-white font-bold text-lg tracking-wider">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
