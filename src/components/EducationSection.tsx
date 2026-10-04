import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, BrainCircuit, Compass, ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export const EducationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const programs = [
    {
      icon: Terminal,
      title: 'Full-Stack Engineering',
      duration: '12 WEEKS',
      description: 'Production React, TypeScript, Node.js, and cloud systems architecture built through shipping real projects.',
    },
    {
      icon: BrainCircuit,
      title: 'AI & Data Systems',
      duration: '8 WEEKS',
      description: 'Hands-on practical LLM orchestration, embedding indexes, agentic pipelines, and production API deployments.',
    },
    {
      icon: Compass,
      title: 'Career & Tech Mentorship',
      duration: 'ONGOING',
      description: 'Direct 1-on-1 portfolio audits, system design interview prep, and guidance from engineers working on live platforms.',
    },
  ];

  return (
    <section
      id="education"
      className="w-full bg-[#0B0B0C] text-[#F4EFE8] py-24 sm:py-32 px-5 sm:px-8 border-b border-white/10"
      aria-label="Education & Talent Programs"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <SectionLabel label="STUDIO LABS & TALENT" dotColor="bg-[#FF4D1C]" className="text-white/50" />
          <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-0.02em] leading-tight">
            Learn with <span className="font-italic italic font-normal text-[#FF4D1C]">Ignivance</span>
          </h2>
          <p className="mt-4 text-[#F4EFE8]/70 font-sans text-base sm:text-lg">
            Practical tech mentorship, intensive internships, and production skill-building designed by practitioners, not theorists.
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF4D1C]/60 hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#FF4D1C]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-[#F4EFE8]/50 uppercase bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="font-headline font-semibold text-xl text-white tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#F4EFE8]/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="pt-6 border-t border-white/10 group inline-flex items-center justify-between text-xs font-sans font-semibold text-white hover:text-[#FF4D1C] transition-colors"
                >
                  <span>Enroll / Learn more</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
