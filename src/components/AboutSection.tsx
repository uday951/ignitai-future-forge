import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import Card from './Card';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    { value: '20+', label: 'Products Shipped' },
    { value: '3+', label: 'Years of Experience' },
    { value: '100%', label: 'Happy Clients' },
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#FAF8F5] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="About Ignivance"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Story */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <SectionLabel label="ABOUT THE STUDIO" />
            
            <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.02em] leading-tight mb-6">
              A small studio with <span className="font-italic italic font-normal text-[#FF4D1C]">big</span> standards.
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-sans text-[#6B6B6B] leading-relaxed mb-8">
              <p>
                Ignivance is an independent digital product studio based in Hyderabad, India.
                We partner with founders, growing teams, and established enterprises to turn
                high-stakes ideas into resilient digital platforms.
              </p>
              <p>
                We do not believe in bloated agency overhead, layers of account managers, or
                generic templates. Every project is built by senior hands who care deeply
                about software craft, design aesthetics, and measurable business impact.
              </p>
            </div>

            {/* Founder Note */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E4DE] shadow-sm">
              <p className="font-sans text-sm sm:text-base text-[#111111] italic leading-relaxed mb-4">
                "Too many software projects fail not because the idea was flawed, but because
                the execution was sloppy. We founded Ignivance to bridge that gap with direct
                ownership and uncompromising craft."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E8E4DE] flex items-center justify-center font-headline font-semibold text-xs text-[#111111]">
                  UK
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#111111]">Uday Kiran</h4>
                  <p className="font-sans text-xs text-[#6B6B6B]">Founder &amp; Principal Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Stat Blocks */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {stats.map((stat) => (
              <Card key={stat.label} className="p-8">
                <div className="font-headline font-semibold text-4xl sm:text-5xl text-[#111111] tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-sm font-medium text-[#6B6B6B]">
                  {stat.label}
                </div>
              </Card>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
