import React from 'react';
import { TrendingUp, Target, MousePointer, ShieldCheck, RefreshCw, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GrowSection: React.FC = () => {
  const flywheel = [
    {
      stage: '01. ATTENTION',
      title: 'High-Intent Hook',
      desc: 'Thumb-stopping Meta ad creative and precision Google keyword capture that targets actual buyers rather than passive browsers.',
      icon: Target,
    },
    {
      stage: '02. CLICK',
      title: 'Frictionless Bridge',
      desc: 'Zero discrepancy between ad promise and message. Sub-second page load times with CDN edge assets.',
      icon: MousePointer,
    },
    {
      stage: '03. EXPERIENCE',
      title: 'Scannable Landing Page',
      desc: 'Modular narrative sections, clear pricing tiers, prominent proof points, and mobile-calibrated readability.',
      icon: ShieldCheck,
    },
    {
      stage: '04. CONVERSION',
      title: 'Action Trigger',
      desc: 'Streamlined form inputs, clear micro-commitments, validated payment gates, and automated CRM webhooks.',
      icon: TrendingUp,
    },
    {
      stage: '05. RETENTION',
      title: 'Lifetime Flywheel',
      desc: 'Onboarding email sequences, product satisfaction triggers, and automated re-engagement retargeting loops.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#0D0E11] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24 pb-12 border-b border-white/10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                PERFORMANCE ENGINE & CUSTOMER ACQUISITION
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              BUILD IT.<br />
              <span className="text-ignis-500 font-serif italic lowercase font-normal">then make</span> PEOPLE FIND IT.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
              A world-class product without distribution is a dead asset. We treat growth as an engineering problem: measurable funnels, disciplined creative iteration, and telemetry-verified conversion.
            </p>
          </div>
        </div>

        {/* Growth Flywheel System Flow: ATTENTION -> CLICK -> EXPERIENCE -> CONVERSION -> RETENTION */}
        <div className="mb-16">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs text-white/40">
            <span>THE REVENUE PIPELINE // SYSTEMIC FLYWHEEL</span>
            <span>MEASURED AT EVERY STEP</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {flywheel.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-ignis-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-white/[0.06] text-ignis-400">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                        STAGE 0{idx + 1}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold text-ignis-400 block mb-1">
                      {item.stage}
                    </span>

                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/[0.06] font-mono text-[10px] text-white/40 uppercase">
                    SYSTEM PROTOCOL
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Channels & Discipline Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <span className="font-mono text-[11px] text-ignis-400 uppercase tracking-widest block mb-2">
              01 // META ADVERTISING
            </span>
            <h4 className="font-display font-bold text-xl text-white mb-2">
              Iterative Creative Testing
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Video hooks, carousels, and landing page angles deployed in tight weekly cycles to discover breakthrough customer acquisition cost (CAC).
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <span className="font-mono text-[11px] text-ignis-400 uppercase tracking-widest block mb-2">
              02 // GOOGLE SEARCH & PMAX
            </span>
            <h4 className="font-display font-bold text-xl text-white mb-2">
              High-Intent Capture
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Dominating exact-match intent queries. Negative keyword hygiene and bid automation that protects ad capital from wasteful clicks.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <span className="font-mono text-[11px] text-ignis-400 uppercase tracking-widest block mb-2">
              03 // CONVERSION TELEMETRY
            </span>
            <h4 className="font-display font-bold text-xl text-white mb-2">
              Full-Stack Tracking
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Meta Pixel, Google Analytics 4, server-side Conversion APIs (CAPI), and custom event instrumentation with zero signal drop.
            </p>
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-white/60">
          <span>ALL AD SPEND DIRECTED AGAINST MEASURABLE ROI TARGETS</span>
          <Link
            to="/contact"
            className="text-white hover:text-ignis-400 font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Initiate Growth Strategy</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GrowSection;
