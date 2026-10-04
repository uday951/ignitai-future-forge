import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const BuildSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      phase: 'IDEA & DISCOVERY',
      title: 'De-risk the hypothesis',
      desc: 'We unpack the core problem statement, evaluate technical feasibility, map user friction, and isolate the single metric that matters most.',
      output: 'Requirements Spec & User Flow Maps',
    },
    {
      num: '02',
      phase: 'STRATEGY & ARCHITECTURE',
      title: 'Blueprint the system',
      desc: 'Database schemas, cloud infrastructure, third-party API dependencies, and security boundaries are defined before code is written.',
      output: 'System Architecture Diagram & Tech Stack Matrix',
    },
    {
      num: '03',
      phase: 'DESIGN & PROTOTYPING',
      title: 'Craft the experience',
      desc: 'Rapid prototyping of atomic components, high-fidelity responsive screens, and interaction mechanics designed to eliminate user cognitive load.',
      output: 'Complete Figma Design System & Clickable Prototype',
    },
    {
      num: '04',
      phase: 'PRODUCTION ENGINEERING',
      title: 'Build the engine',
      desc: 'Clean, typed TypeScript codebase, secure REST/GraphQL endpoints, fast queries, automated test suites, and strict code review gates.',
      output: 'Full-Stack Git Repository & Microservices',
    },
    {
      num: '05',
      phase: 'ZERO-DOWNTIME LAUNCH',
      title: 'Ship to users',
      desc: 'Containerized deployment, SSL encryption, CDN edge caching, performance lighthouse optimization, and end-to-end telemetry verification.',
      output: 'Live Cloud Deployment & Monitoring Dashboard',
    },
    {
      num: '06',
      phase: 'GROWTH & ITERATION',
      title: 'Scale the impact',
      desc: 'Real user session analytics, conversion rate refinement, automated workflow extensions, and continuous feature delivery.',
      output: 'Growth Loops & Maintenance Sprints',
    },
  ];

  const partners = [
    { title: 'Early Founders', desc: 'Pre-seed and seed teams needing an engineering partner to take them from sketch to live launch.' },
    { title: 'Scaling Startups', desc: 'Teams with product-market fit that require high-velocity full-stack features and AI automation.' },
    { title: 'Established Businesses', desc: 'Companies modernizing operational workflows, digital touchpoints, or custom client portals.' },
    { title: 'Institutions & Non-Profits', desc: 'Academic, medical, and public organizations requiring secure, accessible digital infrastructure.' },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#0D0E11] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 mb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                PRODUCT ENGINEERING LIFECYCLE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              FROM ROUGH IDEA<br />
              <span className="text-ignis-500 font-serif italic lowercase font-normal">to</span> REAL PRODUCT.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
              No endless committees or bloated deliverables. We treat your product like our own code equity: with speed, precision, and architectural longevity.
            </p>
          </div>
        </div>

        {/* Visual Product Journey Timeline */}
        <div className="mb-20">
          <div className="font-mono text-xs text-white/40 uppercase tracking-widest mb-6">
            // THE SIX PHASES OF EXECUTION
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-ignis-500/50 hover:bg-white/[0.05] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-white/40 mb-6">
                    <span className="text-ignis-400 font-bold">{step.num}</span>
                    <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-white/[0.06] text-white/70">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2.5 group-hover:text-ignis-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 font-mono text-[11px] text-white/50">
                  <span className="text-ignis-400">→</span>
                  <span>{step.output}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Build With */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-ignis-400 block mb-1">
                CO-BUILDERS & PARTNERS
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Who Ignivance Ships For
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs text-white/80 hover:text-ignis-400 uppercase tracking-wider transition-colors"
            >
              <span>Discuss your roadmap</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-white font-bold font-display text-base mb-2">
                  <CheckCircle2 className="w-4 h-4 text-ignis-400 shrink-0" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BuildSection;
