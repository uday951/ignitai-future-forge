import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';

export const ProcessSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We unpack your product goals, map core user journeys, and define clear technical constraints before writing a line of code.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Interactive wireframes, high-fidelity prototypes, and cohesive design systems crafted for intuitive user conversion.',
    },
    {
      number: '03',
      title: 'Build',
      description: 'Production-ready full-stack engineering, AI integrations, test coverage, and transparent milestone sprint updates.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Zero-downtime deployment, automated analytics tracking, performance tuning, and post-launch iteration support.',
    },
  ];

  return (
    <section
      id="process"
      className="w-full bg-[#FFFFFF] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="Process"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <SectionLabel label="OUR PROCESS" />
          <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.02em] leading-tight">
            How we <span className="font-italic italic font-normal text-[#FF4D1C]">work</span>
          </h2>
          <p className="mt-4 text-[#6B6B6B] font-sans text-base sm:text-lg">
            A straightforward, milestone-driven approach that turns ideas into shipping software.
          </p>
        </div>

        {/* 4 Horizontal Steps Connected by a Thin Line */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-[#E8E4DE] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col bg-white sm:bg-transparent p-6 sm:p-0 rounded-2xl border sm:border-0 border-[#E8E4DE]"
              >
                {/* Step Number Circle */}
                <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border border-[#E8E4DE] flex items-center justify-center font-mono text-sm font-semibold text-[#111111] mb-6 shadow-sm">
                  {step.number}
                </div>

                <h3 className="font-headline font-semibold text-xl text-[#111111] tracking-tight mb-2.5">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
