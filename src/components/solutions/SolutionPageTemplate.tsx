/**
 * SolutionPageTemplate - Template for solution pages at /solutions/*
 * Integrates with DVQModal and uses consistent V0 styling
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { DVQModal } from '@/components/dvq';
import { trackCTAClick, trackSolutionView, trackSolutionCTAClick, type SolutionId } from '@/lib/track';
import { useEffect } from 'react';

interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  result: string;
}

interface SolutionPageProps {
  solutionId: SolutionId;
  title: string;
  tagline: string;
  hero: {
    problem: string;
    benefit: string;
  };
  deploy: string[];
  spec: string;
  caseStudy?: CaseStudy | null;
  relatedSolutions?: Array<{
    id: string;
    title: string;
    href: string;
  }>;
  icon: React.ElementType;
}

export function SolutionPageTemplate({
  solutionId,
  title,
  tagline,
  hero,
  deploy,
  spec,
  caseStudy,
  relatedSolutions = [],
  icon: Icon,
}: SolutionPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Track page view
  useEffect(() => {
    trackSolutionView(solutionId);
  }, [solutionId]);

  const handleCTAClick = () => {
    trackSolutionCTAClick(solutionId, 'diagnostic_cta');
    trackCTAClick('solution_diagnostic', `solution_${solutionId}`);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-[#030303] relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(253, 104, 179, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(253, 104, 179, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FD68B3]/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Voltar</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#FD68B3]/30 bg-[#FD68B3]/10 px-3 py-1.5 rounded-full mb-6">
                <span className="text-[#FD68B3] font-mono text-xs uppercase tracking-wider">
                  {solutionId}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {title}
              </h1>

              <p className="text-xl text-gray-400 mb-6">{tagline}</p>

              {/* Problem / Benefit */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <p className="text-yellow-400/80 font-mono text-sm">{hero.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-green-400/80 font-mono text-sm">{hero.benefit}</p>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleCTAClick}
                className="group flex items-center gap-2 px-8 py-4 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors"
              >
                <Zap className="w-5 h-5" />
                Descubra seu DVQ
              </button>
            </motion.div>

            {/* Right: Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#FD68B3]/10 rounded-full blur-[80px]" />
                <Icon className="w-32 h-32 text-[#FD68B3]/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deploy Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              O que entregamos
            </h2>

            <div className="bg-[#030303] border border-white/10 rounded-lg p-8">
              <ul className="space-y-4">
                {deploy.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#FD68B3] mt-0.5 font-mono">{String(i + 1).padStart(2, '0')}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Spec Section */}
      <section className="py-20 bg-[#030303]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Especificação Técnica
            </h2>

            <div className="bg-[#0a0a0a] border border-[#FD68B3]/20 rounded-lg p-8 font-mono text-sm">
              <div className="flex items-center gap-2 text-[#FD68B3] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FD68B3] animate-pulse" />
                <span>tech_spec.md</span>
              </div>
              <p className="text-gray-400 leading-relaxed">{spec}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      {caseStudy && (
        <section className="py-20 bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-[#030303] border border-[#FD68B3]/30 rounded-lg p-8">
                <span className="font-mono text-xs text-[#FD68B3] uppercase tracking-wider mb-2 block">
                  Case Study
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {caseStudy.client}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-gray-500 uppercase">Desafio</span>
                    <p className="text-gray-400">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-500 uppercase">Solução</span>
                    <p className="text-gray-400">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <span className="font-mono text-xs text-green-500 uppercase tracking-wider mb-2 block">
                    Resultado
                  </span>
                  <p className="text-green-400 text-lg font-medium">{caseStudy.result}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Solutions */}
      {relatedSolutions.length > 0 && (
        <section className="py-20 bg-[#030303]">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Soluções Relacionadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedSolutions.map((solution) => (
                <Link
                  key={solution.id}
                  to={solution.href}
                  className="group block p-6 bg-[#0a0a0a] border border-white/10 rounded-lg hover:border-[#FD68B3]/30 transition-colors"
                >
                  <h4 className="text-lg font-bold text-white group-hover:text-[#FD68B3] transition-colors mb-2">
                    {solution.title}
                  </h4>
                  <span className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-white transition-colors">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-t from-[#030303] to-[#0a0a0a]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para resolver isso?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Execute um diagnóstico e veja como {title} pode transformar sua infraestrutura de dados.
          </p>
          <button
            onClick={handleCTAClick}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors"
          >
            <Zap className="w-5 h-5" />
            Descubra seu DVQ
          </button>
        </div>
      </section>

      {/* DVQ Modal */}
      <DVQModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourceCta="solution_page"
        sourceLocation={`solution_${solutionId}`}
      />
    </Layout>
  );
}
