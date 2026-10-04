'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const beliefs = [
  {
    number: '01',
    statement:
      'Ideas without execution are just imagination. We turn the gap into product.',
  },
  {
    number: '02',
    statement:
      'Technology should serve business outcomes — not the other way around.',
  },
  {
    number: '03',
    statement:
      'Design is not decoration. It is the product strategy made visible.',
  },
  {
    number: '04',
    statement: 'We only take on work we believe in. That keeps us honest.',
  },
];

const audiences = [
  'STARTUPS',
  'FOUNDERS',
  'SMBs',
  'ENTERPRISES',
  'INSTITUTIONS',
];

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
  }),
};

/* ─────────────────────────────────────────────
   Sub-component: Belief Row
───────────────────────────────────────────── */
function BeliefRow({
  number,
  statement,
  index,
  inView,
}: {
  number: string;
  statement: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ backgroundColor: '#FAF9F6' }}
      transition={{ backgroundColor: { duration: 0.2 } }}
      className="group flex items-start gap-6 py-6 px-2 border-b border-black/[0.06] cursor-default rounded-sm"
    >
      {/* Number */}
      <span className="font-mono text-xs text-[#C0C0BC] pt-1 shrink-0 select-none w-6">
        {number}
      </span>

      {/* Statement */}
      <p className="font-sans text-lg md:text-xl font-medium text-[#17181C] leading-snug">
        {statement}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Sub-component: Audience Word
───────────────────────────────────────────── */
function AudienceWord({
  word,
  index,
  inView,
}: {
  word: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.span
      custom={index}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ color: '#17181C', opacity: 1 }}
      className="font-display font-bold tracking-[-0.04em] text-[#17181C]/[0.12] cursor-default select-none transition-colors duration-300"
      style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
    >
      {word}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function WhyIgnivance() {
  /* Section A ref */
  const sectionARef = useRef<HTMLDivElement>(null);
  const sectionAInView = useInView(sectionARef, { once: true, margin: '-80px' });

  /* Section B ref */
  const sectionBRef = useRef<HTMLDivElement>(null);
  const sectionBInView = useInView(sectionBRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">

        {/* ── SUB-SECTION A: POINT OF VIEW ── */}
        <div ref={sectionARef}>
          {/* Mono label */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={sectionAInView ? 'visible' : 'hidden'}
            className="font-mono text-xs tracking-widest text-[#C0C0BC] uppercase mb-6"
          >
            Our Beliefs
          </motion.p>

          {/* Heading */}
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={sectionAInView ? 'visible' : 'hidden'}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#17181C] leading-[1.05] tracking-tight mb-10"
          >
            What we believe.
          </motion.h2>

          {/* Belief rows */}
          <div className="border-t border-black/[0.06]">
            {beliefs.map((belief, i) => (
              <BeliefRow
                key={belief.number}
                number={belief.number}
                statement={belief.statement}
                index={i + 2}
                inView={sectionAInView}
              />
            ))}
          </div>
        </div>

        {/* ── GAP ── */}
        <div className="mt-20 md:mt-28" />

        {/* ── SUB-SECTION B: WHO WE WORK WITH ── */}
        <div ref={sectionBRef} className="text-center">
          {/* Mono label */}
          <motion.p
            custom={0}
            variants={fadeIn}
            initial="hidden"
            animate={sectionBInView ? 'visible' : 'hidden'}
            className="font-mono text-xs tracking-widest text-[#C0C0BC] uppercase mb-10"
          >
            Who We Build For
          </motion.p>

          {/* Oversized typographic words */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {audiences.map((word, i) => (
              <div key={word} className="flex items-center gap-x-3">
                <AudienceWord word={word} index={i + 1} inView={sectionBInView} />

                {/* Separator dot — not after the last word */}
                {i < audiences.length - 1 && (
                  <motion.span
                    custom={i + 1.5}
                    variants={fadeIn}
                    initial="hidden"
                    animate={sectionBInView ? 'visible' : 'hidden'}
                    className="text-[#FF3B00] select-none shrink-0"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
                    aria-hidden="true"
                  >
                    ·
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
