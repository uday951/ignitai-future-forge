import React from 'react';
import { ArrowUpRight, CheckCircle2, Terminal, Layers, Sparkles, TrendingUp, Cpu, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ServicesPage: React.FC = () => {
  const servicePillars = [
    {
      id: 'product-studio',
      num: '01',
      title: 'DIGITAL PRODUCT STUDIO & SAAS',
      statement: 'We engineer digital products from ground-up architecture to high-load production environments.',
      icon: Layers,
      overview:
        'Whether bringing a greenfield SaaS concept to market or rewriting legacy software, our engineering team builds multi-tenant architectures, cloud database schemas, robust APIs, and web/mobile client surfaces.',
      capabilities: [
        'Multi-Tenant SaaS Platform Architecture',
        'Full-Stack Web Applications (React, TypeScript, Node)',
        'Cross-Platform Mobile Apps (iOS & Android)',
        'REST, GraphQL & Webhook Microservices',
        'Stripe & Razorpay Billing Infrastructure',
        'Zero-Downtime Deployment & CI/CD Pipelines',
      ],
      deliverables: [
        'Complete Typed Production Repository',
        'Containerized Docker Configuration',
        'Comprehensive Architecture Blueprints',
        'Role-Based Authentication & Session Security',
      ],
      process: 'Scoping & User Stories → Schema & Entity Design → Rapid Sprint Cycles → Security & Load Audits → Production Release',
      technology: 'React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Redis, AWS, Docker',
    },
    {
      id: 'applied-ai',
      num: '02',
      title: 'APPLIED AI SYSTEMS & AGENTS',
      statement: 'We build AI systems that become part of the business — not just another chatbot.',
      icon: Terminal,
      overview:
        'We specialize in production-hardened machine intelligence: autonomous agents that execute multi-step backend work, hybrid vector search (RAG) over corporate knowledge bases, and custom operational intelligence tools.',
      capabilities: [
        'Autonomous Workflow & Task Agents',
        'Retrieval-Augmented Generation (RAG) Systems',
        'Semantic Search & Vector Embeddings',
        'Document & Invoice Parsing Intelligence',
        'Internal Operational AI Staff Portals',
        'Deterministic Hallucination Guardrails & Fallbacks',
      ],
      deliverables: [
        'Secured Vector Store & Indexing Pipelines',
        'Agent State Persistence & Execution Engine',
        'LLM Token Cost & Latency Monitoring Telemetry',
        'Strict JSON Schema Validation Layers',
      ],
      process: 'Pipeline Scoping → Grounding & Vector Setup → Agent Loop Prototyping → Benchmark Stress-Testing → Enterprise Guardrail Lockdown',
      technology: 'Google Gemini API, Anthropic Claude, OpenAI API, LangChain, Pinecone, pgvector, Python',
    },
    {
      id: 'product-design',
      num: '03',
      title: 'PRODUCT UI/UX & DESIGN SYSTEMS',
      statement: 'Where visual clarity meets cognitive efficiency to eliminate user friction.',
      icon: Sparkles,
      overview:
        'Interfaces should respect user attention. We create atomic Figma design systems, wireframe user journeys, and test high-fidelity prototypes that transition directly into clean CSS/Tailwind code without friction.',
      capabilities: [
        'Complete Atomic Design Systems & Tokens',
        'User Flow Mapping & Information Architecture',
        'Interactive Usability Prototypes in Figma',
        'Complex SaaS Dashboard & Analytics UX',
        'Mobile-First Responsive Layout Specifications',
        'Conversion Heuristic Optimization',
      ],
      deliverables: [
        'Complete Scalable Figma Design Library',
        'Exportable Developer-Ready Design Tokens',
        'Interactive Usability Demonstration Decks',
        'WCAG AA Accessibility Contrast Compliance',
      ],
      process: 'Information Architecture → Low-Fi Wireframing → Design Token Definition → High-Fi Prototype → Dev Handoff Matrix',
      technology: 'Figma, Tailwind CSS, Framer Motion, Radix UI, Storybook',
    },
    {
      id: 'growth-media',
      num: '04',
      title: 'GROWTH ENGINES & PERFORMANCE MEDIA',
      statement: 'Building the software is half the battle; ensuring customers find and convert is the other.',
      icon: TrendingUp,
      overview:
        'We design, test, and manage customer acquisition funnels across Meta Ads and Google Ads, backed by custom landing pages, pixel telemetry, and server-side conversion tracking.',
      capabilities: [
        'Meta Ads Creative Strategy & Campaign Scaling',
        'Google Ads Search & Performance Max Funnels',
        'High-Converting Bespoke Landing Page Sprints',
        'Server-Side Conversion API (CAPI) & Pixel Setup',
        'Google Analytics 4 & Product Event Telemetry',
        'Retention, Churn Reduction & Email Automation',
      ],
      deliverables: [
        'Ad Creative Angles & Copy Frameworks',
        'Conversion-Engineered Modular Landing Pages',
        'Live Attribution & Event Verification Setup',
        'Weekly CAC & ROAS Performance Reports',
      ],
      process: 'Audience & Offer Audit → Creative Matrix Sprint → Funnel Launch → Signal Verification → Scaling & Budget Optimization',
      technology: 'Meta Ads Manager, Google Ads, Meta Pixel, GA4, GTM, Server CAPI',
    },
    {
      id: 'tech-advisory',
      num: '05',
      title: 'TECHNOLOGY CONSULTING & ARCHITECTURE',
      statement: 'Senior technical direction and architectural clarity before capital is committed.',
      icon: Compass,
      overview:
        'We serve as fractional CTOs and technical advisors for founders, evaluating tech stacks, unblocking legacy technical bottlenecks, and stress-testing infrastructure for high-scale viability.',
      capabilities: [
        'Fractional CTO & Strategic Technical Direction',
        'MVP Scoping & Roadmap Acceleration Planning',
        'Architecture Feasibility & Scalability Audits',
        'Cloud Security, AWS Cost & Latency Optimization',
        'Third-Party Vendor & API Selection Matrices',
        'Technical Due Diligence for Investors & Founders',
      ],
      deliverables: [
        'Written System Architecture Evaluation Blueprint',
        'Prioritized Engineering Backlog & Timeline',
        'Vendor Cost & Infrastructure Sizing Matrix',
        'Risk Mitigation & Disaster Recovery Plan',
      ],
      process: 'Discovery Audit → Codebase & Schema Inspection → Bottleneck Identification → Executive Recommendation Blueprint',
      technology: 'Cloud Infrastructure, Microservices, Security Protocols, Distributed Systems',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#17181C]">
      <SEO
        title="Studio Capabilities & Services — IGNIVANCE"
        description="Comprehensive technical capabilities of Ignivance Digital Product Studio: Digital Product & SaaS Engineering, Applied AI Systems, UI/UX Design, Growth Media, and Architecture Consulting."
        canonical="https://ignivance.in/capabilities"
      />
      <Navbar />

      <main className="pt-32 md:pt-44 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Header */}
          <div className="mb-20 md:mb-28 pb-12 border-b border-black/[0.08]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                COMPREHENSIVE CAPABILITIES MANIFESTO
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0D0E11] tracking-tight uppercase leading-[0.92]">
              WHAT WE<br />
              <span className="text-ignis-500">ACTUALLY</span> BUILD.
            </h1>
            <p className="mt-8 text-base sm:text-xl text-[#55565A] max-w-3xl leading-relaxed">
              We do not sell generic hours or cookie-cutter templates. We deliver modular, production-grade product solutions with accountable engineering ownership.
            </p>
          </div>

          {/* Deep-dive pillars */}
          <div className="space-y-24 md:space-y-36">
            {servicePillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <section
                  key={pillar.id}
                  id={pillar.id}
                  className="scroll-mt-32 p-8 sm:p-12 md:p-16 rounded-3xl bg-white border border-black/[0.08] shadow-sm relative overflow-hidden"
                >
                  {/* Top Identifier */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-black/[0.06] gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-black/[0.04] text-[#0D0E11]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                        DISCIPLINE {pillar.num} // STUDIO SPEC
                      </span>
                    </div>

                    <div className="font-mono text-xs text-ignis-600 font-bold uppercase tracking-wider">
                      PRODUCTION READY
                    </div>
                  </div>

                  {/* Title & Statement */}
                  <div className="mb-10">
                    <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#0D0E11] tracking-tight uppercase mb-3">
                      {pillar.title}
                    </h2>
                    <p className="font-serif italic text-lg sm:text-2xl text-[#55565A]">
                      "{pillar.statement}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-[#17181C] leading-relaxed max-w-4xl mb-12">
                    {pillar.overview}
                  </p>

                  {/* Capabilities & Deliverables Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-black/[0.06] mb-12">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#707175] block mb-4">
                        Capabilities & Engineering Scope
                      </span>
                      <ul className="space-y-2.5">
                        {pillar.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-[#55565A]">
                            <span className="w-1.5 h-1.5 rounded-full bg-ignis-500 mt-2 shrink-0"></span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#707175] block mb-4">
                        Tangible Client Deliverables
                      </span>
                      <ul className="space-y-2.5 font-mono text-xs text-[#55565A]">
                        {pillar.deliverables.map((del, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Execution Process & Tech Stack Bar */}
                  <div className="p-6 rounded-2xl bg-[#F8F8F5] border border-black/[0.06] space-y-4 font-mono text-xs">
                    <div>
                      <span className="text-[#0D0E11] font-bold block mb-1">EXECUTION PROCESS:</span>
                      <span className="text-[#707175]">{pillar.process}</span>
                    </div>
                    <div>
                      <span className="text-[#0D0E11] font-bold block mb-1">CORE TECH STACK:</span>
                      <span className="text-[#707175]">{pillar.technology}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-10 pt-6 border-t border-black/[0.06] flex items-center justify-between">
                    <span className="font-mono text-xs text-[#707175]">
                      TYPICAL SPRINT CYCLE: 2 — 8 WEEKS
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#0D0E11] hover:bg-ignis-500 text-white px-6 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase transition-colors"
                    >
                      <span>Inquire About {pillar.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-28 p-10 md:p-16 rounded-3xl bg-[#0D0E11] text-white flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-ignis-400 block mb-3">
                CUSTOM ROADMAP CONSULTATION
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
                Unsure which capability combination your product needs?
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Book a 30-minute scoping call directly with our technical leads. We’ll audit your requirements and outline a concrete execution architecture.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ignis-500 hover:bg-ignis-600 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shrink-0"
            >
              <span>Schedule Scoping Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
