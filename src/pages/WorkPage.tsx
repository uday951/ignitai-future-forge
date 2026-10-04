import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const WorkPage: React.FC = () => {
  const collaborations = [
    {
      client: 'Grand Diva International',
      industry: 'GLOBAL MEDIA & ENTERTAINMENT',
      discipline: 'DIGITAL PRODUCT & WEB APPLICATION',
      scope: 'Beauty Pageant & Event Operations Platform',
      year: '2025',
      liveUrl: 'https://granddivainternational.com/',
      stack: 'React, Node.js, Express, MongoDB, Tailwind CSS',
      overview:
        'Engineered an international beauty pageant platform managing contestant registrations, media galleries, dynamic event schedules, and global voting access.',
      deliverables: [
        'Responsive contestant registry and media portal',
        'Real-time event scheduling and venue management',
        'Secure multi-tier role access for judges and candidates',
      ],
    },
    {
      client: 'Sri Sai Deekshitha Ambulance',
      industry: 'EMERGENCY MEDICAL LOGISTICS',
      discipline: 'CRITICAL INFRASTRUCTURE & DISPATCH',
      scope: 'Emergency Medical Transport Web System',
      year: '2025',
      liveUrl: 'https://srisaideekshithaambulance.in/',
      stack: 'React, Vite, Node.js, Maps API, Tailwind CSS',
      overview:
        'Engineered an ultra-fast, mobile-first emergency transport dispatch web application built for zero-latency contact, geolocation routing, and emergency triage access.',
      deliverables: [
        'Sub-second page load optimized for mobile networks',
        'Direct 1-tap emergency dispatch dialing integration',
        'Dynamic fleet and service coverage maps',
      ],
    },
    {
      client: 'Best Ambulance Services',
      industry: 'HEALTHCARE INFRASTRUCTURE',
      discipline: 'ACCESSIBLE WEB ENGINEERING',
      scope: 'High-Availability Emergency Healthcare Platform',
      year: '2024',
      liveUrl: 'https://bestambulance.in/',
      stack: 'React, Vite, Tailwind CSS, Cloudflare CDN',
      overview:
        'A resilient emergency transit service platform designed with accessible UI/UX, high-contrast readability, and immediate dispatch telemetry for patients and hospitals.',
      deliverables: [
        'Emergency triage classification interface',
        'High-availability hosting with 99.9% uptime architecture',
        'SEO-optimized local emergency service index',
      ],
    },
    {
      client: 'SNT Educational Institutions',
      industry: 'HIGHER EDUCATION & ACADEMICS',
      discipline: 'ENTERPRISE PORTAL & UX',
      scope: 'Comprehensive Student & Faculty Portal',
      year: '2025',
      liveUrl: 'https://snt-ignite-web.onrender.com/',
      stack: 'React, Node.js, Express, Cloud Storage',
      overview:
        'Created a unified institutional web portal showcasing academic programs, campus facilities, admissions processes, and seamless student resource downloads.',
      deliverables: [
        'Institutional admissions and program inquiry engine',
        'Faculty and department resource catalog',
        'Mobile-friendly student documentation viewer',
      ],
    },
    {
      client: 'CozyStay Booking Engine',
      industry: 'HOSPITALITY & PROPERTY TECH',
      discipline: 'SAAS BOOKING ARCHITECTURE',
      scope: 'PG & Hostel Real-Time Reservation Software',
      year: '2024',
      liveUrl: 'https://cozy-stay-showcase.onrender.com/',
      stack: 'React, TypeScript, Node.js, MongoDB',
      overview:
        'Built a streamlined booking management system featuring real-time room inventory availability, photo tour galleries, and structured inquiry workflows.',
      deliverables: [
        'Real-time bed and room inventory availability calendar',
        'Interactive amenities and location filters',
        'Lead qualification and resident reservation funnel',
      ],
    },
    {
      client: 'Ignite Athletic Club',
      industry: 'SPORTS & HEALTH MANAGEMENT',
      discipline: 'DYNAMIC WEB APPLICATION',
      scope: 'Gym Management & Class Booking Interface',
      year: '2024',
      liveUrl: 'https://gym-application-3dok.vercel.app/',
      stack: 'React, Vite, Framer Motion, Tailwind CSS',
      overview:
        'Crafted a high-energy, modern athletic web application supporting dynamic class schedules, trainer rosters, and tiered membership inquiries.',
      deliverables: [
        'Dynamic trainer roster and workout schedules',
        'Tiered membership comparison matrix',
        'Interactive class booking flow',
      ],
    },
    {
      client: 'Cafe Flow Digital',
      industry: 'FOOD TECH & COMMERCE',
      discipline: 'QR COMMERCE & DASHBOARD',
      scope: 'QR Contactless Menu & Order Management System',
      year: '2025',
      liveUrl: 'https://cafemanage.ignivance.in/',
      stack: 'React, Node.js, MongoDB, WebSockets',
      overview:
        'Engineered an end-to-end QR-based contactless ordering and restaurant management platform with live table tracking, dynamic menu pricing, and kitchen tickets.',
      deliverables: [
        'Instant mobile web QR menu interface (no app download required)',
        'Live kitchen display system (KDS) for incoming orders',
        'Real-time daily sales and category reporting dashboard',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#17181C]">
      <SEO
        title="Selected Clients & Collaborations — IGNIVANCE"
        description="Archive of verified client products, web platforms, and software architectures designed and engineered by Ignivance Digital Studio."
        canonical="https://ignivance.in/work"
      />
      <Navbar />

      <main className="pt-32 md:pt-44 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Page Header */}
          <div className="mb-20 md:mb-28 pb-12 border-b border-black/[0.08]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                VERIFIED COLLABORATIONS ARCHIVE
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0D0E11] tracking-tight uppercase leading-[0.92]">
              SELECTED<br />
              <span className="text-ignis-500">CLIENT</span> RECORDS.
            </h1>
            <p className="mt-8 text-base sm:text-xl text-[#55565A] max-w-3xl leading-relaxed">
              We present our work through our clients and engineering engagements rather than decorative mockup renders. Every platform listed below is an active, deployed codebase.
            </p>
          </div>

          {/* Collaborations Archive List */}
          <div className="space-y-12">
            {collaborations.map((collab, idx) => (
              <article
                key={idx}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.08] shadow-sm hover:border-black/30 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between pb-8 mb-8 border-b border-black/[0.06] gap-4">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs text-[#707175] mb-2">
                      <span className="text-ignis-500 font-bold">0{idx + 1}</span>
                      <span>// {collab.industry}</span>
                      <span>·</span>
                      <span>YEAR: {collab.year}</span>
                    </div>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0E11] tracking-tight uppercase">
                      {collab.client}
                    </h2>
                    <p className="font-mono text-xs text-ignis-600 font-semibold uppercase tracking-wider mt-1">
                      {collab.discipline} — {collab.scope}
                    </p>
                  </div>

                  {collab.liveUrl && (
                    <a
                      href={collab.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#0D0E11] hover:text-ignis-500 border border-black/10 hover:border-ignis-500 px-4 py-2 rounded-xl transition-colors shrink-0"
                    >
                      <span>Visit Live Platform</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#707175] block">
                      Scope Overview
                    </span>
                    <p className="text-base text-[#17181C] leading-relaxed">
                      {collab.overview}
                    </p>
                  </div>

                  <div className="lg:col-span-5 space-y-3 bg-[#F8F8F5] p-6 rounded-2xl border border-black/[0.04]">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#0D0E11] font-bold block mb-2">
                      Shipped Deliverables
                    </span>
                    <ul className="space-y-2">
                      {collab.deliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#55565A]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#707175]">
                  <div>
                    <span className="text-[#0D0E11] font-bold">TECH STACK: </span>
                    <span>{collab.stack}</span>
                  </div>
                  <span className="text-emerald-700 font-bold uppercase flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> VERIFIED PRODUCTION DEPLOYMENT
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 p-10 md:p-14 rounded-3xl bg-[#0D0E11] text-white flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-ignis-400 block mb-2">
                JOIN THE ARCHIVE
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Ready to ship your product with Ignivance?
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ignis-500 hover:bg-ignis-600 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0"
            >
              <span>Start an Engagement</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WorkPage;
