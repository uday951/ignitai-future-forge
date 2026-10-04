import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndustrySector {
  sector: string;
  count: string;
  focus: string;
  sampleBrands: string[];
}

const ClientEcosystem: React.FC = () => {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  const sectors: IndustrySector[] = [
    {
      sector: 'STARTUPS & SEED',
      count: '14+ BUILDS',
      focus: 'MVP speed to market, investor-ready UI/UX, lean architectures.',
      sampleBrands: ['Pre-Seed Founders', 'Stealth Ventures', 'Series-A Scaleups'],
    },
    {
      sector: 'SAAS PLATFORMS',
      count: '08+ PLATFORMS',
      focus: 'Multi-tenant schemas, billing webhooks, role-based access & dashboards.',
      sampleBrands: ['Internal Tooling', 'Workflow Automation', 'Client Portals'],
    },
    {
      sector: 'HEALTHCARE & LOGISTICS',
      count: '06+ DEPLOYMENTS',
      focus: 'Emergency dispatch, real-time geolocation, accessibility compliance.',
      sampleBrands: ['Sri Sai Deekshitha', 'Best Ambulance', 'Paramedic Triage'],
    },
    {
      sector: 'EDUCATION & EDTECH',
      count: '05+ PORTALS',
      focus: 'Institutional curricula, student lifecycle systems, dynamic learning.',
      sampleBrands: ['SNT Educational Group', 'School Portals', 'Code Learning Hubs'],
    },
    {
      sector: 'COMMERCE & FOOD TECH',
      count: '07+ STORES',
      focus: 'QR contactless dining, instant catalog synchronization, localized checkout.',
      sampleBrands: ['Cafe Flow', 'D2C Retailers', 'Local Commerce'],
    },
    {
      sector: 'HOSPITALITY & LIVING',
      count: '04+ ENGINES',
      focus: 'Real-time booking calendars, PG/Hostel inventory management.',
      sampleBrands: ['CozyStay Booking', 'Rental Networks', 'Living Platforms'],
    },
    {
      sector: 'MEDIA & EVENT PLATFORMS',
      count: '03+ NETWORKS',
      focus: 'High-traffic contest voting, pageant galleries, global broadcasts.',
      sampleBrands: ['Grand Diva International', 'Creative Portfolios', 'Talent Castings'],
    },
    {
      sector: 'ENTERPRISE WORKFLOWS',
      count: '09+ INTEGRATIONS',
      focus: 'Legacy migration, internal AI automation, data pipeline orchestrations.',
      sampleBrands: ['Custom CRM Wrappers', 'Executive Dashboards', 'API Glue'],
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F8F5] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
              CROSS-INDUSTRY FOOTPRINT
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0D0E11] tracking-tight uppercase leading-[0.95]">
            ECOSYSTEM BREADTH<span className="text-ignis-500">.</span>
          </h2>
          <p className="mt-4 text-base text-[#55565A] max-w-xl font-normal leading-relaxed">
            From high-stakes emergency dispatch systems to high-converting consumer brands, our architectural DNA adapts to the constraints of your domain.
          </p>
        </div>

        {/* Large Typography Industry Matrix */}
        <div className="border-t border-black/[0.08] divide-y divide-black/[0.08]">
          {sectors.map((s, idx) => {
            const isHovered = hoveredSector === s.sector;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSector(s.sector)}
                onMouseLeave={() => setHoveredSector(null)}
                className={`py-8 sm:py-10 transition-all duration-200 px-4 sm:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
                  isHovered ? 'bg-white shadow-sm -mx-2 sm:-mx-4 rounded-xl' : 'hover:bg-black/[0.01]'
                }`}
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="font-mono text-xs text-[#707175] font-semibold w-8">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0D0E11] tracking-tight uppercase">
                      {s.sector}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#707175] mt-1">
                      {s.focus}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#707175]">
                  <span className="px-3 py-1 rounded-full bg-black/[0.04] text-[#0D0E11] font-semibold">
                    {s.count}
                  </span>
                  <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#909195]">
                    {s.sampleBrands.map((b, i) => (
                      <span key={i} className="border-b border-black/10">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#707175]">
          <span>DOMAIN EXPERTISE IS PORTABLE. ENGINEERING FIRST-PRINCIPLES ARE CONSTANT.</span>
          <Link
            to="/contact"
            className="text-[#0D0E11] hover:text-ignis-600 font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Discuss your sector requirements</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ClientEcosystem;
