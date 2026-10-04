import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Card from './Card';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  metric: string;
  gradient: string;
  link: string;
}

export const WorkSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const projects: Project[] = [
    {
      title: 'Grand Diva International',
      tagline: 'Global Pageant & Talent Management Platform',
      description: 'An international digital portal for contestant registries, global auditions, and high-traffic live broadcast events.',
      tags: ['React', 'Edge Delivery', 'Cloud Architecture', 'Media Engine'],
      metric: '100% Zero-Downtime Live Auditions',
      gradient: 'from-[#FAF2ED] via-[#FCEAE1] to-[#F5E6DC]',
      link: 'https://granddivainternational.com/',
    },
    {
      title: 'Sri Sai Ambulance',
      tagline: 'Real-Time Emergency Triage Dispatch System',
      description: 'Mission-critical dispatch dashboard linking emergency callers with nearest response vehicles with geo-tracking.',
      tags: ['PWA', 'WebSockets', 'Geo-Routing', 'Offline First'],
      metric: '<90ms Triage Dispatch Latency',
      link: 'https://srisaideekshithaambulance.in/',
      gradient: 'from-[#EDF6F3] via-[#E1F3EC] to-[#D5EFE5]',
    },
    {
      title: 'CareerOS',
      tagline: 'AI-Powered Career Intelligence & Matching',
      description: 'An autonomous resume triage and career pathway engine that parses competencies and matches candidates.',
      tags: ['LLM Orchestration', 'Vector DB', 'FastAPI', 'Next.js'],
      metric: '4.8x Candidate Pass-Rate Increase',
      link: 'https://snt-ignite-web.onrender.com/',
      gradient: 'from-[#F3EDFA] via-[#ECE1FA] to-[#E3D6F6]',
    },
    {
      title: 'CALEVENT',
      tagline: 'High-Scale Scheduling & Conference Platform',
      description: 'Multi-tenant event scheduling software with automated calendar sync, ticket workflows, and attendee analytics.',
      tags: ['SaaS', 'PostgreSQL', 'Stripe', 'Node.js'],
      metric: '99.98% Sync Reliability Across Timezones',
      link: 'https://cafemanage.ignivance.in/',
      gradient: 'from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA]',
    },
  ];

  return (
    <section
      id="work"
      className="w-full bg-[#FAF8F5] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="Selected Work"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <SectionLabel label="SELECTED PROJECTS" />
          <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.02em] leading-tight">
            Selected <span className="font-italic italic font-normal text-[#FF4D1C]">work</span>
          </h2>
          <p className="mt-4 text-[#6B6B6B] font-sans text-base sm:text-lg">
            Real software systems engineered for startups and businesses with measurable outcomes.
          </p>
        </div>

        {/* 2-Column Grid of Large Clean Cards */}
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
              <Card className="h-full flex flex-col justify-between overflow-hidden p-0">
                {/* CSS Gradient Visual representation */}
                <div
                  className={`w-full h-48 sm:h-56 bg-gradient-to-br ${project.gradient} border-b border-[#E8E4DE] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#111111]/60 font-semibold bg-white/70 px-2.5 py-1 rounded-full border border-black/[0.04]">
                      PRODUCTION LIVE
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white text-[#111111] hover:text-[#FF4D1C] flex items-center justify-center transition-colors shadow-sm"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-[#111111]/50 uppercase tracking-wider block mb-1">
                      IMPACT METRIC
                    </span>
                    <div className="font-headline font-semibold text-lg sm:text-xl text-[#111111]">
                      {project.metric}
                    </div>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-headline font-semibold text-2xl text-[#111111] tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#FF4D1C] mb-3">
                      {project.tagline}
                    </p>
                    <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-[11px] font-medium text-[#6B6B6B] bg-[#FAF8F5] border border-[#E8E4DE] px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[#111111] hover:text-[#FF4D1C] transition-colors"
                    >
                      <span>View case study</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
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
