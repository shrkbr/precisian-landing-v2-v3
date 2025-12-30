/**
 * ClientLogos - Client trust signals
 * Shows logos of companies using the platform
 */

import { motion } from 'framer-motion';
import { useAnimationConfig } from '@/hooks/tech';

interface Client {
  name: string;
  logo?: string;
  segment: string;
}

const CLIENTS: Client[] = [
  { name: 'BCMed', segment: 'Healthcare', logo: '/logos/bcmed.svg' },
  { name: 'Pague Menos', segment: 'Varejo Farma', logo: '/logos/paguemenos.svg' },
  { name: 'Nuvio Foods', segment: 'Food Subscription', logo: '/logos/nuvio.svg' },
  { name: 'Drogaria Venancio', segment: 'Varejo Farma', logo: '/logos/venancio.svg' },
];

interface ClientLogosProps {
  className?: string;
  title?: string;
  showSegments?: boolean;
}

export function ClientLogos({
  className = '',
  title = 'Trusted by data-driven companies',
  showSegments = true,
}: ClientLogosProps) {
  const { shouldAnimate } = useAnimationConfig();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={`py-16 px-6 bg-[#030303] ${className}`}>
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <p className="text-center text-sm font-mono text-gray-600 uppercase tracking-wider mb-10">
          {title}
        </p>

        {/* Logos Grid */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
          variants={containerVariants}
          initial={shouldAnimate ? 'hidden' : 'visible'}
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {CLIENTS.map((client) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              className="group flex flex-col items-center"
            >
              {/* Logo Container */}
              <div className="relative w-32 h-16 flex items-center justify-center border border-white/5 rounded-lg bg-[#0a0a0a]/30 px-4 transition-all duration-300 group-hover:border-[#FD68B3]/30 group-hover:bg-[#FD68B3]/5">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-8 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                ) : (
                  // Fallback: Text logo
                  <span className="font-mono text-sm text-gray-500 group-hover:text-[#FD68B3] transition-colors">
                    {client.name}
                  </span>
                )}

                {/* Online indicator */}
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Segment */}
              {showSegments && (
                <span className="mt-2 text-xs font-mono text-gray-700 group-hover:text-gray-500 transition-colors">
                  {client.segment}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom border accent */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#FD68B3]/20 to-transparent" />
      </div>
    </section>
  );
}
