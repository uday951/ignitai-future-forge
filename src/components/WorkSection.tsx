import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Zap, Globe, ShieldCheck } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Card from './Card';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  metric: string;
  image: string;
  link: string;
  badge: string;
}

export const WorkSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const projects: Project[] = [
    {
      title: 'Grand Diva International Pageant',
      tagline: 'Global Candidate Registration & Event Gateway',
      description: 'An international digital portal for contestant registries, global auditions, and high-traffic live broadcast events handling 15,000+ simultaneous entrants.',
      tags: ['Next.js', 'Vercel Edge Network', 'Client Image Compression', 'TypeScript'],
      metric: '+280% Application Surge & 98/100 Lighthouse',
      image: '/images/case-study-web.png',
      link: 'https://granddivainternational.com/',
      badge: 'GLOBAL FASHION & TALENT',
    },
    {
      title: 'Sri Sai Deekshitha Ambulance',
      tagline: 'Emergency Transit Dispatcher & Medical Routing',
      description: 'Mission-critical dispatch interface stripped of every kilobyte of bloat to achieve an instantaneous 0.8s mobile paint for patients across Telangana.',
      tags: ['Zero-Bloat Next.js', 'Geo-Corridor Routing', 'Single-Tap Dialing', 'Technical SEO'],
      metric: '0.8s Mobile Paint & #1 Hyderabad Corridor Rank',
      image: '/images/case-study-mobile.png',
      link: 'https://srisaideekshithaambulance.in/',
      badge: 'EMERGENCY HEALTHCARE',
    },
    {
      title: 'Search & Growth Telemetry Pipeline',
      tagline: 'B2B Client Acquisition & Technical SEO Engine',
      description: 'Full-funnel organic search dominance and performance advertising infrastructure that captures ready-to-buy commercial search intent with verifiable attribution.',
      tags: ['Google 3-Pack', 'Semantic Schema', 'ROAS Scaling', 'Server-Side CAPI'],
      metric: '3.4x Pipeline Conversion & Top 3 Positions',
      image: '/images/growth-telemetry.png',
      link: '/services/digital-marketing-growth',
      badge: 'GROWTH INFRASTRUCTURE',
    },
    {
      title: 'Pooja Sounds & Production Solutions',
      tagline: 'Audiovisual Equipment Quotation & Client Hub',
      description: 'A commercial event audio and lighting showcase with automated package tier calculators, gear configuration, and direct WhatsApp project intake.',
      tags: ['Interactive Catalog', 'Dynamic Inquiry Flow', 'Responsive UI', 'WhatsApp API'],
      metric: '3.4x Direct Inquiry Velocity',
      image: '/logos/pooja-sounds.jpg',
      link: 'https://poojasounds.in/',
      badge: 'COMMERCIAL ENTERPRISE',
    },
  ];

  return (
    <section
      id="case-studies"
      className="w-full bg-[#FAF8F5] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="Selected Production Work"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <SectionLabel label="VERIFIED PRODUCTION PROOF" />
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.025em] leading-tight">
            Selected client <span className="font-italic italic font-normal text-[#FF4D1C]">flagships</span>
          </h2>
          <p className="mt-4 text-[#55565A] font-sans text-base sm:text-lg">
            Real software systems engineered from the DOM up with verified revenue outcomes.
          </p>
        </div>

        {/* 2-Column Grid of High-Resolution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden p-0 border border-[#E8E4DE] bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                {/* Visual Header with Real Image */}
                <div className="relative w-full h-60 sm:h-72 bg-[#0A0A0C] overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Top Bar inside image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-wider uppercase text-white font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      {project.badge}
                    </span>
                    <a
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/90 text-[#111111] hover:bg-[#FF4D1C] hover:text-white flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Bottom Metric Pill inside image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 text-white flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-[#FF4D1C] shrink-0" />
                      <span className="font-mono text-xs font-bold text-white tracking-wide truncate">
                        {project.metric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-headline font-bold text-2xl text-[#111111] tracking-tight mb-1.5">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF4D1C] mb-3">
                      {project.tagline}
                    </p>
                    <p className="font-sans text-sm text-[#55565A] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] font-medium text-[#55565A] bg-[#FAF8F5] border border-[#E8E4DE] px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#FF4D1C] transition-colors"
                    >
                      <span>Explore Live Platform</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
