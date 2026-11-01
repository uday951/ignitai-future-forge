import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Card from './Card';

export const SocialProof: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const testimonials = [
    {
      quote:
        'Ignivance re-engineered our global registration portal from scratch. For the first time in four seasons, our platform did not flinch during live international broadcast surges. Truly bespoke engineering.',
      author: 'Advisory Council',
      company: 'Grand Diva International Pageant',
      role: 'Global Pageantry & Media',
      rating: 5,
    },
    {
      quote:
        'In emergency medical logistics, every millisecond counts. The mobile dialer triggers in under 0.8 seconds on 4G networks. Direct telephone and WhatsApp dispatch calls surged over 320% across our corridor.',
      author: 'Operations Director',
      company: 'Sri Sai Deekshitha Ambulance Logistics',
      role: 'Emergency Healthcare Transit',
      rating: 5,
    },
    {
      quote:
        'Ignivance streamlined our commercial sound and lighting catalog with automated quote calculations. Our inbound WhatsApp quotation conversions more than tripled within weeks of launch.',
      author: 'Managing Director',
      company: 'Pooja Sounds & Event Solutions',
      role: 'Corporate Audiovisuals',
      rating: 5,
    },
  ];

  return (
    <section
      className="w-full bg-[#FAF8F5] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="Client Testimonials & Outcomes"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <SectionLabel label="VERIFIED TESTIMONIALS" />
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.025em] leading-tight">
            Trusted by founders with <span className="font-italic italic font-normal text-[#FF4D1C]">standards</span>
          </h2>
          <p className="mt-4 text-[#55565A] font-sans text-base sm:text-lg">
            Hear directly from the business leaders who trust Ignivance to engineer their digital flagships.
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
              <Card className="h-full flex flex-col justify-between p-8 bg-white border border-[#E8E4DE] rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-6 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#111111] leading-relaxed mb-8">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E8E4DE]/60">
                  <h4 className="font-headline font-bold text-base text-[#111111]">
                    {item.author}
                  </h4>
                  <p className="font-mono text-xs text-[#FF4D1C] font-semibold mt-0.5">
                    {item.company}
                  </p>
                  <p className="font-sans text-xs text-[#707175] mt-0.5">
                    {item.role}
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
