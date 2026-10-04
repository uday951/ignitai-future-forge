import React from 'react';
import { Sparkles, Layout, MousePointerClick, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Cognitive Ergonomics',
      desc: 'Interfaces designed to conserve user attention. We eliminate redundant decisions, clarify hierarchy, and build micro-copy that guides action instinctively.',
      icon: Layout,
    },
    {
      num: '02',
      title: 'Atomic Design Tokens',
      desc: 'Color primitives, typography scales, spacing grids, and component states mapped directly from Figma into Tailwind/CSS variables for zero design-debt.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Purposeful Micro-Interactions',
      desc: 'Motion should communicate state changes, confirm operations, and reward progress — not perform decorative gymnastics that slow down power users.',
      icon: MousePointerClick,
    },
    {
      num: '04',
      title: 'Conversion-Engineered Flows',
      desc: 'Form fields optimized for completion rates, mobile touch-targets calibrated to thumb ergonomics, and zero-distraction checkout flows.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F8F5] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                PRODUCT EXPERIENCE & DESIGN SYSTEMS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0D0E11] tracking-tight uppercase leading-[0.95]">
              FORM FOLLOWS<br />
              <span className="font-serif italic font-normal text-ignis-500 lowercase">human</span> COGNITION.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#55565A] leading-relaxed">
              Design at Ignivance is not visual decoration painted over broken logic. It is the architectural discipline of making complex tools feel obvious, responsive, and effortless.
            </p>
          </div>
        </div>

        {/* 4 Architectural Design Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((p) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.num}
                className="bg-white border border-black/[0.08] p-7 rounded-2xl flex flex-col justify-between hover:border-black/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-ignis-500">
                      // {p.num}
                    </span>
                    <div className="p-2 rounded-lg bg-black/[0.03] text-[#0D0E11]">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0D0E11] mb-2.5">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#55565A] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/[0.04] font-mono text-[10px] text-[#707175] uppercase tracking-wider">
                  DISCIPLINE SPECIFICATION
                </div>
              </div>
            );
          })}
        </div>

        {/* Design System Manifesto Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0D0E11] text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-ignis-400 block mb-2">
              THE FIGMA-TO-CODE PIPELINE
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
              Designers who understand DOM semantics. Engineers who respect typography.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              We eliminate the traditional agency handoff chasm. Every interface built in our studio matches the intended Figma prototype with sub-pixel fidelity.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-ignis-500 hover:bg-ignis-600 text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Review Design Scope</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DesignSection;
