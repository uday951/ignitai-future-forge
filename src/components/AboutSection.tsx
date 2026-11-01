import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Card from './Card';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    { value: '24+', label: 'Commercial Flagships Shipped', helper: 'Zero templates, bespoke engineering' },
    { value: '0.8s', label: 'Average Mobile First Paint', helper: 'Real-world 4G/5G stress tested' },
    { value: '92%', label: 'Client Retainer Rate', helper: 'Long-term maintenance & growth' },
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#FAF8F5] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="About Ignivance"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Story */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <SectionLabel label="DIRECTORATE & PHILOSOPHY" />
            
            <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.025em] leading-tight mb-6">
              A bespoke engineering studio with <span className="font-italic italic font-normal text-[#FF4D1C]">uncompromising</span> standards.
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-sans text-[#55565A] leading-relaxed mb-8">
              <p>
                <strong>Ignivance Technology</strong> was founded in Hyderabad, India on a singular premise: modern businesses deserve digital flagships that render instantaneously, convert with authority, and belong completely to the client.
              </p>
              <p>
                We reject the bloated agency model of commissioned account executives and $29 WordPress drag-and-drop templates. When you partner with Ignivance, you collaborate directly with senior product designers and full-stack software engineers who write clean, maintainable code from the DOM up.
              </p>
            </div>

            {/* Founders Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Uday Kiran */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E4DE] shadow-sm flex items-center gap-4">
                <img
                  src="/founder.jpg"
                  alt="Uday Kiran - Founder & CEO"
                  className="w-14 h-14 rounded-full object-cover border border-[#FF4D1C]/30 shadow-sm"
                  onError={(e) => {
                    // Fallback to initial if image path differs
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <h4 className="font-headline font-bold text-base text-[#111111]">Uday Kiran</h4>
                  <p className="font-mono text-xs text-[#FF4D1C] font-semibold">Founder &amp; CEO</p>
                  <p className="font-sans text-[11px] text-[#707175]">Full-Stack Systems Architect</p>
                </div>
              </div>

              {/* Mahathi Godala */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E4DE] shadow-sm flex items-center gap-4">
                <img
                  src="/co-founder.jpeg"
                  alt="Mahathi Godala - Co-Founder"
                  className="w-14 h-14 rounded-full object-cover border border-[#FF4D1C]/30 shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <h4 className="font-headline font-bold text-base text-[#111111]">Mahathi Godala</h4>
                  <p className="font-mono text-xs text-[#FF4D1C] font-semibold">Co-Founder</p>
                  <p className="font-sans text-[11px] text-[#707175]">Product &amp; Design Strategy</p>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-[#55565A]">
              <MapPin className="w-4 h-4 text-[#FF4D1C]" />
              <span>Headquarters: Hitech City, Madhapur, Hyderabad, Telangana 500081</span>
            </div>
          </motion.div>

          {/* Right Column: 3 Stat Blocks */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {stats.map((stat) => (
              <Card key={stat.label} className="p-8 bg-white border border-[#E8E4DE] rounded-3xl shadow-sm">
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#111111] tracking-tight mb-1.5">
                  {stat.value}
                </div>
                <div className="font-mono text-xs font-bold text-[#FF4D1C] uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="font-sans text-xs text-[#707175]">
                  {stat.helper}
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
