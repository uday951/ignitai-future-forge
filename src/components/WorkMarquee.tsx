import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

interface Brand {
  name: string;
  logo: string;
}

// Brand Logo Data Array (8 entries to guarantee continuous seamless looping)
const brands: Brand[] = [
  { name: 'Grand Diva International', logo: '/logos/granddiva.svg' },
  { name: 'Sri Sai Ambulance', logo: '/logos/srisai.svg' },
  { name: 'CareerOS', logo: '/logos/careeros.svg' },
  { name: 'CALEVENT', logo: '/logos/calevent.svg' },
  { name: 'SNT Institutions', logo: '/logos/snt.svg' },
  { name: 'CozyStay', logo: '/logos/cozystay.svg' },
  { name: 'Ignite Athletics', logo: '/logos/ignite.svg' },
  { name: 'Cafe Flow', logo: '/logos/cafeflow.svg' },
];

// Single Brand Pill Card Component with Image Error Fallback
const BrandCard: React.FC<{ brand: Brand }> = ({ brand }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="flex items-center justify-center bg-white border border-[#E8E4DE] rounded-2xl px-6 sm:px-8 h-[60px] sm:h-[72px] min-w-[140px] sm:min-w-[180px] shrink-0 transition-all duration-200 group cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#FF4D1C]/60 hover:shadow-sm"
    >
      {!imageError ? (
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          onError={() => setImageError(true)}
          className="max-h-7 sm:max-h-8 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200 select-none pointer-events-none"
          loading="lazy"
        />
      ) : (
        <span className="font-headline font-semibold text-xs sm:text-sm text-[#6B6B6B] group-hover:text-[#111111] transition-colors duration-200 tracking-tight text-center whitespace-nowrap select-none">
          {brand.name}
        </span>
      )}
    </div>
  );
};

export const WorkMarquee: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate brand list twice inside track for seamless 50% infinite translation
  const marqueeRow1 = [...brands, ...brands];
  // Reverse order for row 2 to give visual variety
  const reversedBrands = [...brands].reverse();
  const marqueeRow2 = [...reversedBrands, ...reversedBrands];

  return (
    <section
      id="work"
      className="w-full bg-[#FAF8F5] py-16 sm:py-24 border-b border-[#E8E4DE] overflow-hidden"
      aria-label="Brands We've Built For"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-12 sm:mb-16 text-center">
        {/* Section Header with Subtle Scroll Reveal (translateY 16px → 0, 600ms, once) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <SectionLabel label="TRUSTED BY" />

          <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.02em] leading-tight mb-4">
            Brands we've{' '}
            <span className="font-italic italic font-normal text-[#FF4D1C]">
              built
            </span>{' '}
            for
          </h2>

          <p className="text-[#6B6B6B] font-sans text-base sm:text-lg max-w-[480px]">
            From startups to growing businesses, we ship products people actually use.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee Tracks or Reduced-Motion Wrapped Grid ── */}
      {shouldReduceMotion ? (
        /* Reduced Motion Fallback: Accessible Clean Wrapped Grid */
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      ) : (
        /* Auto-Scrolling Marquee Container with Edge Fade Mask */
        <div className="relative w-full overflow-hidden mask-marquee py-2">
          
          {/* Row 1: Left to Right on Desktop / Default Direction */}
          <div className="flex gap-6 w-max animate-marquee-left pause-hover mb-5 sm:mb-6">
            {marqueeRow1.map((brand, idx) => (
              <BrandCard key={`row1-${brand.name}-${idx}`} brand={brand} />
            ))}
          </div>

          {/* Row 2: Right to Left on Desktop (Hidden on mobile for single row view) */}
          <div className="hidden sm:flex gap-6 w-max animate-marquee-right pause-hover">
            {marqueeRow2.map((brand, idx) => (
              <BrandCard key={`row2-${brand.name}-${idx}`} brand={brand} />
            ))}
          </div>

        </div>
      )}

      {/* ── Below Marquee: Quiet Link ── */}
      <div className="mt-12 sm:mt-16 text-center">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#FF4D1C] transition-colors"
        >
          <span>See all our work</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
};

export default WorkMarquee;
