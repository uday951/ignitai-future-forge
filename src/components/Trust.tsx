import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const Trust: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    'Web Apps',
    'Mobile Apps',
    'AI Systems',
    'Product Design',
  ];

  const clientLogos = [
    { name: 'Grand Diva International', location: 'UK / Global' },
    { name: 'Sri Sai Ambulance', location: 'Healthcare Dispatch' },
    { name: 'CareerOS', location: 'AI Triage Engine' },
    { name: 'CALEVENT', location: 'Platform SaaS' },
  ];

  return (
    <section
      className="w-full bg-[#FAF8F5] pb-24 sm:pb-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="Core Competencies and Trust"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Thin Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl py-6 px-4 rounded-2xl bg-white/60 border border-[#E8E4DE] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-sans font-medium text-[#6B6B6B]"
        >
          {services.map((service, index) => (
            <React.Fragment key={service}>
              <span className="hover:text-[#111111] transition-colors">{service}</span>
              {index < services.length - 1 && (
                <span className="text-[#E8E4DE] select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Small row of client name text logos in muted gray */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#6B6B6B]/70"
        >
          <span className="text-[#6B6B6B]/40 text-[10px]">TRUSTED BY:</span>
          {clientLogos.map((client) => (
            <span
              key={client.name}
              className="hover:text-[#111111] transition-colors duration-200"
            >
              {client.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
