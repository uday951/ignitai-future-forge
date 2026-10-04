import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import Card from './Card';

export const SocialProof: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const testimonials = [
    {
      quote:
        'Ignivance delivered our global platform on an aggressive timeline without cutting corners on design or performance. They think like product founders.',
      author: 'Global Director',
      company: 'Grand Diva International',
      role: 'Fashion & Media',
    },
    {
      quote:
        'The emergency triage dispatch latency dropped beneath 90ms. In our industry, speed saves lives, and their engineering discipline made it possible.',
      author: 'Operations Head',
      company: 'Sri Sai Ambulance Logistics',
      role: 'Emergency Healthcare',
    },
    {
      quote:
        'They did not just build what was asked; they simplified our feature bloat and designed a workflow our users actually enjoy using every day.',
      author: 'Product Lead',
      company: 'CareerOS Platform',
      role: 'Talent Technology',
    },
  ];

  return (
    <section
      className="w-full bg-[#FAF8F5] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="Testimonials"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <SectionLabel label="CLIENT VOICES" />
          <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.02em] leading-tight">
            Trusted by teams with <span className="font-italic italic font-normal text-[#FF4D1C]">ambition</span>
          </h2>
          <p className="mt-4 text-[#6B6B6B] font-sans text-base sm:text-lg">
            Hear directly from the teams who rely on Ignivance to build and ship their software.
          </p>
        </div>

        {/* 3 Clean Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card className="h-full flex flex-col justify-between p-8">
                <div>
                  {/* Large serif quote mark in orange */}
                  <span className="font-italic italic text-5xl sm:text-6xl text-[#FF4D1C] leading-none block mb-4 select-none">
                    “
                  </span>

                  <p className="font-sans text-sm sm:text-base text-[#111111] leading-relaxed mb-6">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E8E4DE]/60">
                  <h4 className="font-headline font-semibold text-base text-[#111111]">
                    {item.author}
                  </h4>
                  <p className="font-sans text-xs text-[#6B6B6B] mt-0.5">
                    {item.company} · {item.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
