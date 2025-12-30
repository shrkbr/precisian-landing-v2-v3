/**
 * SolutionsGrid - Problem Library / Solutions Cards
 * Grid of solution cards with icons
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, Database, Layers, BarChart3, Code, Target, ArrowRight } from 'lucide-react';
import { v0Content } from '@/content/v0';
import { trackCTAClick } from '@/lib/track';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  map: Map,
  database: Database,
  layers: Layers,
  chart: BarChart3,
  code: Code,
  target: Target,
};

export function SolutionsGrid() {
  const { problems } = v0Content;

  const handleCardClick = (cardId: string) => {
    trackCTAClick(`solution_card_${cardId}`, 'solutions_grid');
  };

  return (
    <section id="solutions" className="py-24 bg-[#030303]">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {problems.title}
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.cards.map((card, index) => {
            const Icon = iconMap[card.icon] || Map;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={card.href}
                  onClick={() => handleCardClick(card.id)}
                  className="block h-full group"
                >
                  <div className="h-full bg-[#0a0a0a] border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-[#FD68B3]/30 hover:bg-[#0a0a0a]/80 group-hover:translate-y-[-4px]">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-[#FD68B3]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#FD68B3]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#FD68B3]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FD68B3] transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Link indicator */}
                    <div className="flex items-center gap-2 text-[#FD68B3] text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
