/**
 * ServicePageTemplate - Reusable template for service pages
 * Used by Journey, Catalog, and Core pages
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import { TechNav, TechFooter, GlowCard, DiagnosticConsole } from '@/components/tech';
import { useState } from 'react';
import { trackCTAClick } from '@/services/analytics';

interface CaseStudy {
  client: string;
  challenge: string;
  results: string[];
}

interface ServicePageProps {
  // Meta
  moduleCode: string;
  title: string;
  tagline: string;
  dvqLayers: string[];

  // Problem
  problemHeadline: string;
  problemBullets: string[];

  // Solution
  solutionHeadline: string;
  solutionBullets: string[];

  // Case study
  caseStudy?: CaseStudy;

  // Related modules
  relatedModules?: Array<{
    id: string;
    title: string;
    href: string;
  }>;

  // Icon
  icon: React.ElementType;
}

export function ServicePageTemplate({
  moduleCode,
  title,
  tagline,
  dvqLayers,
  problemHeadline,
  problemBullets,
  solutionHeadline,
  solutionBullets,
  caseStudy,
  relatedModules = [],
  icon: Icon,
}: ServicePageProps) {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const handleCTAClick = () => {
    trackCTAClick('service_page_diagnostic', 'Run Diagnostic', `service_${moduleCode}`);
    setIsDiagnosticOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TechNav onDiagnosticClick={() => setIsDiagnosticOpen(true)} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-[#030303] relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

          <div className="max-w-[1200px] mx-auto relative z-10">
            {/* Back link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-sm">Back to home</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Module badge */}
                <div className="inline-flex items-center gap-2 border border-[#FD68B3]/20 bg-[#FD68B3]/5 px-3 py-1.5 rounded-sm mb-6">
                  <span className="text-[#FD68B3] font-mono text-xs uppercase tracking-wider">
                    {moduleCode}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 leading-tight">
                  {title}
                </h1>

                <p className="text-xl text-gray-400 mb-6">{tagline}</p>

                {/* DVQ Layers */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-xs font-mono text-gray-600 uppercase">DVQ Layers:</span>
                  {dvqLayers.map((layer, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-mono bg-[#FD68B3]/10 text-[#FD68B3] rounded">
                      {layer}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={handleCTAClick}
                  className="group relative flex items-center justify-center px-8 py-4 bg-[#FD68B3] text-black text-sm font-bold uppercase tracking-widest overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Run Diagnostic
                  </span>
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
                  <div className="absolute inset-0 bg-gradient-radial from-[#FD68B3]/20 via-transparent to-transparent" />
                  <Icon className="w-32 h-32 text-[#FD68B3]/50" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem / Solution Section */}
        <section className="py-20 px-6 bg-[#0a0a0a]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlowCard glowColor="error" glowIntensity="low" className="h-full p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="font-mono text-xs text-red-400 uppercase tracking-wider">
                      The Problem
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium text-white mb-4">
                    {problemHeadline}
                  </h3>

                  <ul className="space-y-3">
                    {problemBullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className="text-red-500 mt-0.5">×</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <GlowCard glowColor="success" glowIntensity="low" className="h-full p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="font-mono text-xs text-green-400 uppercase tracking-wider">
                      The Solution
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium text-white mb-4">
                    {solutionHeadline}
                  </h3>

                  <ul className="space-y-3">
                    {solutionBullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        {caseStudy && (
          <section className="py-20 px-6 bg-[#030303]">
            <div className="max-w-[800px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlowCard glowColor="primary" glowIntensity="medium" cornerBorders className="p-8">
                  <span className="font-mono text-xs text-[#FD68B3] uppercase tracking-wider mb-2 block">
                    Case Study
                  </span>
                  <h3 className="text-3xl font-medium text-white mb-4">
                    {caseStudy.client}
                  </h3>
                  <p className="text-gray-400 mb-6">{caseStudy.challenge}</p>

                  <div className="border-t border-white/10 pt-6">
                    <span className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-4 block">
                      Results
                    </span>
                    <div className="space-y-3">
                      {caseStudy.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-3 text-green-400">
                          <span>→</span>
                          <span className="text-lg font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </div>
          </section>
        )}

        {/* Related Modules */}
        {relatedModules.length > 0 && (
          <section className="py-20 px-6 bg-[#0a0a0a]">
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-2xl font-medium text-white mb-8 text-center">
                Related Modules
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedModules.map((module) => (
                  <Link
                    key={module.id}
                    to={module.href}
                    className="group block p-6 bg-[#030303] border border-white/10 rounded-lg hover:border-[#FD68B3]/30 transition-colors"
                  >
                    <h4 className="text-lg font-medium text-white group-hover:text-[#FD68B3] transition-colors mb-2">
                      {module.title}
                    </h4>
                    <span className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-white transition-colors">
                      Learn more
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="py-20 px-6 bg-[#030303]">
          <div className="max-w-[600px] mx-auto text-center">
            <h3 className="text-3xl font-medium text-white mb-4">
              Ready to solve this?
            </h3>
            <p className="text-gray-400 mb-8">
              Run a diagnostic to see how {title} can transform your data infrastructure.
            </p>
            <button
              onClick={handleCTAClick}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#FD68B3] text-black text-sm font-bold uppercase tracking-widest overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Run Diagnostic
              </span>
            </button>
          </div>
        </section>
      </main>

      <TechFooter />

      {/* Diagnostic Console Modal */}
      <DiagnosticConsole
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />
    </div>
  );
}
