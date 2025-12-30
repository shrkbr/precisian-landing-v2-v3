/**
 * PainCards - Problem Library
 * Cards representing key pain points that link to service pages
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, TrendingDown, Database, BarChart3 } from 'lucide-react';
import { useAnimationConfig } from '@/hooks/tech';
import { trackCTAClick } from '@/services/analytics';

interface PainCard {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  symptoms: string[];
  module: string;
  href: string;
  color: 'red' | 'yellow' | 'orange';
}

const PAIN_CARDS: PainCard[] = [
  {
    id: 'journey',
    icon: AlertTriangle,
    title: 'Missing journey visibility',
    description: 'Your user journey has blind spots. Critical interactions go untracked.',
    symptoms: [
      'Attribution decay across devices',
      'Missing micro-events',
      'Offline conversions invisible',
    ],
    module: 'Precisian Journey',
    href: '/services/journey',
    color: 'red',
  },
  {
    id: 'catalog',
    icon: Database,
    title: 'Catalog data fragmentation',
    description: 'Your product feed is causing ad disapprovals and wasted spend.',
    symptoms: [
      'Feed disapprovals & suspensions',
      'Price/stock sync delays',
      '1P vs 3P segmentation chaos',
    ],
    module: 'Precisian Catalog',
    href: '/services/catalog',
    color: 'yellow',
  },
  {
    id: 'core',
    icon: TrendingDown,
    title: 'Revenue discrepancy',
    description: 'GA4 shows different numbers than your ERP. Which one is lying?',
    symptoms: [
      'ROAS based on wrong revenue',
      'Return rates invisible',
      '>50% discrepancy between systems',
    ],
    module: 'Precisian Core',
    href: '/services/core',
    color: 'orange',
  },
];

const colorClasses = {
  red: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
    icon: 'text-red-500',
    hover: 'hover:border-red-500/50 hover:shadow-red-500/10',
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    icon: 'text-yellow-500',
    hover: 'hover:border-yellow-500/50 hover:shadow-yellow-500/10',
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    icon: 'text-orange-500',
    hover: 'hover:border-orange-500/50 hover:shadow-orange-500/10',
  },
};

interface PainCardsProps {
  className?: string;
}

export function PainCards({ className = '' }: PainCardsProps) {
  const { shouldAnimate } = useAnimationConfig();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleCardClick = (card: PainCard) => {
    trackCTAClick(`pain_card_${card.id}`, card.title, 'pain_cards_section');
  };

  return (
    <section className={`py-24 px-6 bg-[#030303] ${className}`}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-sm text-[#FD68B3] tracking-wider mb-4 block uppercase">
            // PROBLEM LIBRARY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
            Recognize your pain?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Each card represents a common failure mode we've seen across hundreds of implementations.
            Click to see how we solve it.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial={shouldAnimate ? 'hidden' : 'visible'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PAIN_CARDS.map((card) => {
            const colors = colorClasses[card.color];
            const IconComponent = card.icon;

            return (
              <motion.div key={card.id} variants={cardVariants}>
                <Link
                  to={card.href}
                  onClick={() => handleCardClick(card)}
                  className={`
                    group block h-full p-6 rounded-lg border bg-[#0a0a0a]
                    transition-all duration-300 hover:shadow-lg
                    ${colors.border} ${colors.hover}
                  `}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#FD68B3] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-4">
                    {card.description}
                  </p>

                  {/* Symptoms */}
                  <ul className="space-y-2 mb-6">
                    {card.symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className={colors.text}>×</span>
                        <span className="text-gray-400">{symptom}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="font-mono text-xs text-[#FD68B3]">
                      {card.module}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-white transition-colors">
                      Learn more
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
