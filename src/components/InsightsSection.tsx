import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import Card from './Card';

export const InsightsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const articles = [
    {
      category: 'PRODUCT STRATEGY',
      title: 'Why Most Software Projects Fail at Execution, Not Vision',
      date: 'OCT 2025',
      readTime: '5 MIN READ',
      summary: 'How over-engineering and premature abstractions drain development velocity for early-stage products.',
      link: '/insights',
    },
    {
      category: 'AI & AUTOMATION',
      title: 'Practical AI Agents vs. Gimmicky Chatbots: What Businesses Actually Need',
      date: 'SEP 2025',
      readTime: '6 MIN READ',
      summary: 'Cutting through the LLM hype to build autonomous workflows that measurably reduce operational overhead.',
      link: '/insights',
    },
    {
      category: 'DESIGN SYSTEMS',
      title: 'The Silent ROI of Restrained UI/UX in Modern SaaS',
      date: 'AUG 2025',
      readTime: '4 MIN READ',
      summary: 'Why clean typography, reduced cognitive load, and subtle interaction details drive long-term retention.',
      link: '/insights',
    },
  ];

  return (
    <section
      id="insights"
      className="w-full bg-[#FFFFFF] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="Latest Insights"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <SectionLabel label="INSIGHTS & THINKING" />
          <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.02em] leading-tight">
            Latest <span className="font-italic italic font-normal text-[#FF4D1C]">insights</span>
          </h2>
          <p className="mt-4 text-[#6B6B6B] font-sans text-base sm:text-lg">
            Thoughts, technical retrospectives, and engineering perspectives from our studio floor.
          </p>
        </div>

        {/* 3 Text-First Clean Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
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
            >
              <Card className="h-full flex flex-col justify-between group">
                <div>
                  {/* Category Tag & Metadata */}
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-wider text-[#6B6B6B] uppercase mb-4 pb-3 border-b border-[#E8E4DE]/60">
                    <span className="text-[#FF4D1C] font-semibold">{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="font-headline font-semibold text-xl text-[#111111] group-hover:text-[#FF4D1C] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E4DE]/60 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#6B6B6B]">{item.date}</span>
                  <a
                    href={item.link}
                    className="group-hover:translate-x-1 font-sans text-xs font-semibold text-[#111111] group-hover:text-[#FF4D1C] transition-all flex items-center gap-1"
                  >
                    <span>Read</span>
                    <span>→</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
