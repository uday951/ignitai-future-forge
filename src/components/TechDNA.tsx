import React from 'react';
import { Terminal, Cpu, Database, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';

const TechDNA: React.FC = () => {
  const stack = [
    {
      category: 'FRONTEND ARCHITECTURE',
      tag: 'CLIENT LAYER',
      icon: Terminal,
      philosophy: 'Sub-second paint, type-safe state, zero bundle bloat.',
      technologies: [
        { name: 'React 18+', role: 'Component lifecycle & concurrent mode' },
        { name: 'TypeScript', role: 'End-to-end type safety & compiler contracts' },
        { name: 'Vite', role: 'Instant HMR & optimized production bundling' },
        { name: 'Tailwind CSS', role: 'Deterministic utility-first design tokens' },
        { name: 'Framer Motion', role: 'Hardware-accelerated physics-based transitions' },
      ],
    },
    {
      category: 'BACKEND SERVICES',
      tag: 'RUNTIME LAYER',
      icon: Cpu,
      philosophy: 'Resilient APIs, clean decoupling, structured error telemetry.',
      technologies: [
        { name: 'Node.js & Express', role: 'High-throughput async event loops' },
        { name: 'Python', role: 'Machine learning pipelines & data processing' },
        { name: 'REST & GraphQL', role: 'Predictable contracts with strict payload schemas' },
        { name: 'Webhooks & Queues', role: 'Reliable background worker processing' },
      ],
    },
    {
      category: 'DATA & STORAGE',
      tag: 'PERSISTENCE LAYER',
      icon: Database,
      philosophy: 'ACID guarantees where required, vector indexing for cognition.',
      technologies: [
        { name: 'PostgreSQL', role: 'Relational data integrity & complex joins' },
        { name: 'MongoDB', role: 'Flexible document schemas for high-velocity apps' },
        { name: 'Redis', role: 'In-memory caching, rate limiting & session keys' },
        { name: 'Pinecone / pgvector', role: 'High-dimensional vector embeddings' },
      ],
    },
    {
      category: 'INFRASTRUCTURE & CLOUD',
      tag: 'EDGE & HOSTING',
      icon: Cloud,
      philosophy: 'Zero-touch CI/CD, SSL encryption, global CDN replication.',
      technologies: [
        { name: 'AWS & Cloudflare', role: 'Edge routing, DDoS defense & S3 assets' },
        { name: 'Docker', role: 'Reproducible containerized environments' },
        { name: 'Vercel & Render', role: 'Global edge deployments with instant rollback' },
        { name: 'GitHub Actions', role: 'Automated test suites & deployment pipelines' },
      ],
    },
    {
      category: 'APPLIED AI & AGENTS',
      tag: 'INTELLIGENCE LAYER',
      icon: Sparkles,
      philosophy: 'Deterministic tool calls, strict schema parsing, cost controls.',
      technologies: [
        { name: 'Google Gemini API', role: 'Multimodal reasoning & structured JSON output' },
        { name: 'Anthropic Claude & OpenAI', role: 'Complex code generation & text synthesis' },
        { name: 'LangChain & Custom Loops', role: 'Agent tool execution & state persistence' },
        { name: 'RAG Architectures', role: 'Grounded document parsing & vector recall' },
      ],
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F8F5] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                ENGINEERING MANIFESTO // TECH DNA
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0D0E11] tracking-tight uppercase leading-[0.95]">
              BUILT FOR<br />
              <span className="text-[#0D0E11]/40 font-serif italic lowercase font-normal">what comes</span> NEXT.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#55565A] leading-relaxed">
              We choose tools based on maintainability, latency, and community resilience — never because something trended on social media last week.
            </p>
          </div>
        </div>

        {/* Categorized Engineering DNA Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12 border border-black/[0.08] rounded-2xl bg-white divide-y divide-black/[0.06] overflow-hidden shadow-sm">
            {stack.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 md:p-10 hover:bg-[#F8F8F5]/50 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Category Title & Philosophy */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-black/[0.04] text-[#0D0E11]">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-black/[0.04] text-[#707175]">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#0D0E11] mb-2 tracking-tight">
                        {item.category}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#707175] leading-relaxed">
                        {item.philosophy}
                      </p>
                    </div>

                    {/* Categorized Technologies List */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl border border-black/[0.04] bg-[#F8F8F5]/60 hover:bg-white hover:border-black/15 transition-all"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-xs font-bold text-[#0D0E11]">
                              {tech.name}
                            </span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          </div>
                          <p className="text-[11px] text-[#707175] leading-tight">
                            {tech.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Principles Footer Bar */}
        <div className="mt-8 p-5 rounded-xl border border-black/[0.06] bg-white flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs text-[#707175] gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[#0D0E11] font-bold">CORE RULE:</span>
            <span>NO UNTYPED CODE IN PRODUCTION</span>
          </div>
          <div>
            <span>100% AUDITABLE SOURCE CODE TRANSFERRED TO CLIENT REPOSITORIES</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechDNA;
