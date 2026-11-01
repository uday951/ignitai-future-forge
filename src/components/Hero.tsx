import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const proofMetrics = [
    { value: '24+', label: 'Shipped Flagships', helper: 'Production web apps & platforms' },
    { value: '0.8s', label: 'Average Mobile Paint', helper: 'Tested on Indian 4G/5G' },
    { value: '98/100', label: 'Lighthouse Score', helper: 'Strict Core Web Vitals' },
    { value: '100%', label: 'Code Ownership', helper: 'Zero vendor lock-in' },
  ];

  return (
    <section
      className="relative w-full bg-[#FAF8F5] text-[#111111] pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden flex flex-col justify-center items-center text-center border-b border-[#E8E4DE]"
      aria-label="Ignivance Hero"
    >
      {/* ── Soft Radial Amber/Copper Glow behind headline ── */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] lg:w-[840px] h-[300px] sm:h-[450px] rounded-full blur-[100px] sm:blur-[150px]"
        style={{ backgroundColor: 'rgba(255, 77, 28, 0.09)' }}
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1240px] mx-auto flex flex-col items-center"
      >
        {/* ── 1. Status Pill Badge ── */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E8E4DE] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D1C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D1C]"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold">
              Bespoke Business Solutions & Digital Engineering
            </span>
          </div>
        </motion.div>

        {/* ── 2. Editorial Headline (Fraunces & Instrument Serif Italic) ── */}
        <motion.h1
          variants={itemVariants}
          className="font-headline font-bold text-[#111111] tracking-[-0.025em] leading-[1.04] text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.85rem] max-w-4xl mb-6 sm:mb-8 select-none"
        >
          We engineer digital flagships & growth engines that{' '}
          <span className="font-italic italic font-normal text-[#FF4D1C]">
            command
          </span>{' '}
          your industry.
        </motion.h1>

        {/* ── 3. Subtext ── */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base sm:text-xl text-[#55565A] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 text-center"
        >
          Headquartered in Hitech City, Hyderabad. We craft hand-coded Next.js web applications, full-stack digital products, and technical SEO pipelines that convert traffic into verified revenue.
        </motion.p>

        {/* ── 4. Action Buttons ── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-16 sm:mb-20"
        >
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#111111] text-white font-sans text-sm font-semibold tracking-normal transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF4D1C] shadow-lg hover:shadow-[#FF4D1C]/25"
          >
            <span>Request Detailed Proposal</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/90 hover:bg-white text-[#111111] border border-[#E8E4DE] hover:border-[#111111] font-sans text-sm font-semibold tracking-normal transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            Explore Case Studies
          </a>
        </motion.div>

        {/* ── 5. Hero Visual: Obsidian 3D Asset with Floating Glass Badges ── */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-5xl rounded-3xl overflow-hidden p-2 sm:p-3 bg-gradient-to-b from-black/[0.08] to-transparent border border-black/[0.08] shadow-2xl"
        >
          <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0C] aspect-[16/9] max-h-[540px] flex items-center justify-center">
            <img
              src="/images/hero-tech-3d.png"
              alt="Ignivance 3D Cloud Architecture Visual"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 opacity-90"
            />
            {/* Dark glass gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />

            {/* Floating Badge Left: 0.8s Mobile Paint */}
            <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#121216]/90 backdrop-blur-md border border-white/10 shadow-xl text-left">
              <div className="p-2 rounded-xl bg-[#FF4D1C]/20 text-[#FF4D1C]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#FF4D1C] font-bold block">0.8s Mobile Paint</span>
                <span className="text-[11px] text-white/70 font-sans">Tested on real 4G corridors</span>
              </div>
            </div>

            {/* Floating Badge Right: 98/100 Lighthouse */}
            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#121216]/90 backdrop-blur-md border border-white/10 shadow-xl text-left">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-emerald-400 font-bold block">98/100 Lighthouse</span>
                <span className="text-[11px] text-white/70 font-sans">Performance, SEO, & A11y</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 6. Live Metrics Strip ── */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-5xl mt-12 pt-8 border-t border-[#E8E4DE]/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left"
        >
          {proofMetrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start p-3 rounded-2xl bg-white/60 border border-[#E8E4DE]/60">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                {metric.value}
              </span>
              <span className="font-mono text-xs text-[#111111] font-semibold uppercase tracking-wider mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-[#707175] font-sans mt-0.5">
                {metric.helper}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
