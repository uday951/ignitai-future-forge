import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
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

  return (
    <section
      className="relative w-full bg-[#FAF8F5] text-[#111111] pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 px-5 sm:px-8 overflow-hidden flex flex-col justify-center items-center text-center"
      aria-label="Ignivance Hero"
    >
      {/* ── Soft Radial Orange Glow behind the headline ── */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] lg:w-[680px] h-[280px] sm:h-[400px] rounded-full blur-[90px] sm:blur-[130px]"
        style={{ backgroundColor: 'rgba(255, 77, 28, 0.08)' }}
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center"
      >
        {/* ── 1. Pill badge above the headline ── */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E4DE] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C]" />
            <span className="font-sans text-xs sm:text-[13px] font-medium text-[#111111] tracking-tight">
              Digital Product Studio
            </span>
          </div>
        </motion.div>

        {/* ── 2. Headline with Fraunces & Instrument Serif Italic ── */}
        <motion.h1
          variants={itemVariants}
          className="font-headline font-semibold text-[#111111] tracking-[-0.02em] leading-[1.05] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] max-w-3xl mb-6 sm:mb-7 select-none"
          style={{
            fontSize: 'clamp(2.5rem, 6.5vw, 5.25rem)',
          }}
        >
          We design and build digital products that{' '}
          <span className="font-italic italic font-normal text-[#FF4D1C]">
            grow
          </span>{' '}
          your business.
        </motion.h1>

        {/* ── 3. Subtext (max-width 560px, muted) ── */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base sm:text-lg text-[#6B6B6B] font-normal leading-relaxed max-w-[560px] mb-8 sm:mb-10 text-center"
        >
          Ignivance is a product studio crafting web apps, mobile apps and AI systems for
          startups and businesses.
        </motion.p>

        {/* ── 4. Two Buttons (solid primary + outline secondary) ── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] text-white font-sans text-sm font-semibold tracking-normal transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF4D1C] shadow-sm hover:shadow-md"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="#work"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#111111] border border-[#E8E4DE] hover:border-[#111111] font-sans text-sm font-semibold tracking-normal transition-all duration-200 hover:-translate-y-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
