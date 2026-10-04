import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const InsightsPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const essays = [
    {
      id: 'death-of-chatbot-gimmicks',
      num: '01',
      title: 'The Death of Chatbot Gimmicks: Why Real AI Value Lies in Invisible Workflow Agents',
      category: 'APPLIED AI & AGENTS',
      date: 'OCTOBER 2025',
      readTime: '6 MIN READ',
      summary:
        'Why floating conversational widgets are hitting usability fatigue, and how forward-looking companies are replacing them with deterministic background task agents that mutate databases and execute tool calls silently.',
      content: [
        'Over the last two years, the default corporate reaction to breakthroughs in Large Language Models was to attach a chat widget to the bottom-right corner of their web application. For 90% of end users, this resulted in friction: slow streaming answers, unpredictable hallucinations, and zero integration with actual business transactions.',
        'At Ignivance, we advise founders to pivot toward invisible agency. The highest-leverage AI applications do not converse with users — they automate background pipelines. When an invoice arrives, an agent classifies line items, validates tax calculations, and posts the ledger entry without a single human typing a prompt.',
        'To achieve this in production, engineers must wrap LLMs with strict JSON schema parsing, deterministic guardrails, and persistent state machines. The era of chat novelty has passed; the era of autonomous workflow execution is now here.',
      ],
    },
    {
      id: 'design-as-distribution-advantage',
      num: '02',
      title: 'Design as a Distribution Advantage: How Cognitive Simplicity Outperforms Feature Volume',
      category: 'PRODUCT & UX',
      date: 'SEPTEMBER 2025',
      readTime: '5 MIN READ',
      summary:
        'In an era where AI allows anyone to generate thousands of lines of boilerplate code, the scarce bottleneck is no longer code production — it is human attention and cognitive clarity.',
      content: [
        'When competing software products offer essentially identical feature checklists, software does not win by adding five more sub-menus. It wins because users understand what to do within four seconds of landing on the interface.',
        'Cognitive ergonomics is the science of removing decisions. Every extra button on an onboarding screen is an opportunity for churn; every unnecessary modal dialogue is friction.',
        'By investing in unified atomic design tokens, clear typographic hierarchy, and responsive micro-interactions, modern product studios give their software a massive unfair distribution advantage over clunky incumbent tools.',
      ],
    },
    {
      id: 'full-stack-velocity-mvp',
      num: '03',
      title: 'Full-Stack Velocity: How Typed Modern Tooling Reduces MVP Delivery Cycles by 60%',
      category: 'ENGINEERING',
      date: 'AUGUST 2025',
      readTime: '7 MIN READ',
      summary:
        'A technical deep-dive into how Vite, TypeScript contracts, Prisma/Mongoose schemas, and Tailwind utility tokens allow small senior teams to out-ship 30-person legacy engineering departments.',
      content: [
        'The historic belief that building an enterprise-grade MVP requires six months and twelve developers is obsolete. Modern developer tooling has collapsed the iteration loop from minutes to milliseconds.',
        'By enforcing strict TypeScript interfaces across the entire API boundary — from client mutations to database queries — runtime bugs are eliminated before code is ever committed.',
        'Pairing this type safety with rapid component primitives and automated CI/CD deployment pipelines enables our studio to ship fully functioning, investor-ready web applications in two to six weeks.',
      ],
    },
    {
      id: 'unit-economics-performance-media',
      num: '04',
      title: 'Unit Economics in Performance Media: Why Click-Through Rates Are Vanishing Metrics',
      category: 'GROWTH & MARKETING',
      date: 'JULY 2025',
      readTime: '4 MIN READ',
      summary:
        'Why vanity advertising metrics like Impressions and Cheap CTRs lead startups into bankruptcy, and how server-side Conversion APIs (CAPI) restore true financial ground truth.',
      content: [
        'Too many growth marketing agencies report victory based on high impressions and low cost-per-click, while the client’s Stripe dashboard remains stagnant.',
        'With modern iOS privacy protections and browser cookie depreciation, client-side pixel tracking often misses up to 30% of actual purchase events. The only sustainable approach is server-side telemetry directly syncing transactions with Meta and Google.',
        'When conversion telemetry is exact, marketing engines can accurately optimize for high-LTV customer cohorts instead of burning venture capital on low-intent bot traffic.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#17181C]">
      <SEO
        title="Insights & Dispatches — IGNIVANCE"
        description="Technical essays, architectural perspectives, and product dispatches from the engineering and design leads at Ignivance Digital Studio."
        canonical="https://ignivance.in/insights"
      />
      <Navbar />

      <main className="pt-32 md:pt-44 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Page Header */}
          <div className="mb-20 md:mb-28 pb-12 border-b border-black/[0.08]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                EDITORIAL DISPATCHES // ESSAYS & CODE STUDIES
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0D0E11] tracking-tight uppercase leading-[0.92]">
              THINKING<br />
              <span className="text-ignis-500 font-serif italic lowercase font-normal">out</span> LOUD.
            </h1>
            <p className="mt-8 text-base sm:text-xl text-[#55565A] max-w-3xl leading-relaxed">
              We write about real engineering decisions, artificial intelligence implementation without hype, product design heuristics, and sustainable customer acquisition.
            </p>
          </div>

          {/* Essay Reading Cards */}
          <div className="space-y-12">
            {essays.map((essay) => {
              const isExpanded = selectedArticle === essay.id;
              return (
                <article
                  key={essay.id}
                  id={essay.id}
                  className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.08] shadow-sm hover:border-black/30 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-black/[0.06] gap-2 font-mono text-xs text-[#707175]">
                    <div className="flex items-center gap-3">
                      <span className="text-ignis-500 font-bold">{essay.num}</span>
                      <span>// {essay.category}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>{essay.date}</span>
                      <span>·</span>
                      <span>{essay.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0D0E11] tracking-tight leading-snug mb-4">
                    {essay.title}
                  </h2>

                  <p className="text-base sm:text-lg text-[#55565A] leading-relaxed mb-8">
                    {essay.summary}
                  </p>

                  {/* Expanded Full Essay Body */}
                  {isExpanded && (
                    <div className="pt-8 border-t border-black/[0.06] space-y-6 text-base text-[#17181C] leading-relaxed max-w-4xl mb-8">
                      {essay.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 border-t border-black/[0.04] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(isExpanded ? null : essay.id)}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#0D0E11] hover:text-ignis-500 transition-colors"
                    >
                      <span>{isExpanded ? 'Collapse Essay' : 'Read Full Dispatch'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                    <span className="font-mono text-[11px] text-[#707175]">
                      IGNIVANCE ENGINEERING PAPERS
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InsightsPage;
