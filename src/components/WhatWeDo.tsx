import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Smartphone, Cpu, Palette, Cloud, Layers, ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Card from './Card';

export const WhatWeDo: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const capabilities = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'High-performance web apps built with modern React, Next.js, and clean engineering principles.',
      linkText: 'Explore Web',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications crafted for iOS & Android with native fluidity and speed.',
      linkText: 'Explore Mobile',
    },
    {
      icon: Cpu,
      title: 'AI & Automation',
      description: 'Custom AI agents, intelligent LLM workflows, and data pipelines integrated seamlessly into products.',
      linkText: 'Explore AI',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Thoughtful product design systems, user journey mapping, and conversion-focused visual interfaces.',
      linkText: 'Explore Design',
    },
    {
      icon: Layers,
      title: 'SaaS Products',
      description: 'Full-cycle SaaS architecture from MVP prototype to high-scale multi-tenant enterprise platforms.',
      linkText: 'Explore SaaS',
    },
    {
      icon: Cloud,
      title: 'Cloud & Deployment',
      description: 'Robust cloud infrastructure, automated CI/CD pipelines, security hardening, and global edge delivery.',
      linkText: 'Explore Cloud',
    },
  ];

  return (
    <section
      id="capabilities"
      className="w-full bg-[#FFFFFF] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="Capabilities"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <SectionLabel label="CAPABILITIES" />
          <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.02em] leading-tight">
            What we <span className="font-italic italic font-normal text-[#FF4D1C]">build</span>
          </h2>
          <p className="mt-4 text-[#6B6B6B] font-sans text-base sm:text-lg">
            End-to-end digital capabilities designed to turn complex business needs into elegant software.
          </p>
        </div>

        {/* 2x3 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="h-full flex flex-col justify-between group">
                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] flex items-center justify-center text-[#111111] group-hover:text-[#FF4D1C] group-hover:border-[#FF4D1C]/30 transition-colors duration-200 mb-6">
                      <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    </div>

                    <h3 className="font-headline font-semibold text-xl text-[#111111] tracking-tight mb-2.5">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-6 mt-6 border-t border-[#E8E4DE]/60 flex items-center justify-between">
                    <span className="font-sans text-xs font-semibold text-[#111111] group-hover:text-[#FF4D1C] transition-colors">
                      {item.linkText}
                    </span>
                    <span className="text-[#111111] group-hover:text-[#FF4D1C] group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
