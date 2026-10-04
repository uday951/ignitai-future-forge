import React, { useState } from 'react';
import { ArrowRight, Bot, Database, Sparkles, Cpu, Check, Terminal, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const AISection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const capabilities = [
    { title: 'Autonomous Workflow Agents', desc: 'Self-correcting task agents that execute complex multi-step backend work, verify outcomes, and trigger APIs.' },
    { title: 'Intelligent Semantic Search & RAG', desc: 'Vector-indexed retrieval over proprietary databases and documentation with strict factual grounding.' },
    { title: 'Document & Data Intelligence', desc: 'Automated extraction, classification, and structuring of raw invoices, PDFs, legal text, and sensor telemetry.' },
    { title: 'Custom Operational Internal Tools', desc: 'Secure company portals connecting staff directly to specialized LLMs and internal data schemas.' },
    { title: 'Recommendation & Matching Systems', desc: 'Algorithmic matching engines that personalize user feeds, match candidates, or rank relevant inventory.' },
    { title: 'Deterministic Guardrails & Fallbacks', desc: 'Production validation layers preventing hallucinations, throttling runaway tokens, and handling API outages.' },
  ];

  const systemFlow = [
    {
      step: '01',
      stage: 'INPUT',
      title: 'Raw Ingestion',
      detail: 'Customer queries, multi-format PDFs, webhook payloads, CRM events & database streams.',
      tag: 'STREAMING / REALTIME',
    },
    {
      step: '02',
      stage: 'INTELLIGENCE',
      title: 'Reasoning Engine',
      detail: 'Hybrid vector embeddings, Gemini / Claude / OpenAI orchestration, RAG grounding & contextual memory.',
      tag: 'VECTOR SEARCH + LLM',
    },
    {
      step: '03',
      stage: 'ACTION',
      title: 'Deterministic Execution',
      detail: 'Validated tool calls, database mutations, third-party API triggers, and automated notification dispatches.',
      tag: 'TOOL CALLS & APIS',
    },
    {
      step: '04',
      stage: 'RESULT',
      title: 'Business Outcome',
      detail: 'Verified response, solved ticket, completed transaction, and automated record sync with telemetry.',
      tag: 'ZERO HUMAN FRICTION',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F8F5] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
              APPLIED MACHINE INTELLIGENCE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0D0E11] tracking-tight uppercase leading-[0.95]">
            AI SHOULD DO<br />
            <span className="text-[#0D0E11]/40 font-serif italic lowercase font-normal">more than</span> CHAT.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#55565A] max-w-2xl font-normal leading-relaxed">
            The world doesn't need another generic wrapper around a conversational bot. We embed intelligence directly into your core business engine to eliminate operational drag and unlock new product surfaces.
          </p>
        </div>

        {/* Technical System Architecture Map (INPUT -> INTELLIGENCE -> ACTION -> RESULT) */}
        <div className="border border-black/[0.08] rounded-2xl bg-white p-6 sm:p-8 md:p-10 mb-16 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-black/[0.06] gap-2 font-mono text-xs text-[#707175]">
            <span className="font-bold text-[#0D0E11] uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-ignis-500" />
              SYSTEM MAP // PRODUCTION PIPELINE TOPOLOGY
            </span>
            <span>END-TO-END EXECUTION LATENCY: SUB-SECOND</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {systemFlow.map((flow, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={flow.step}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-6 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0D0E11] text-white border-[#0D0E11] shadow-md -translate-y-1'
                      : 'bg-[#F8F8F5] text-[#0D0E11] border-black/[0.06] hover:bg-black/[0.02]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-ignis-500">
                        STAGE {flow.step}
                      </span>
                      <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/10 text-white/80' : 'bg-black/[0.04] text-[#707175]'
                      }`}>
                        {flow.stage}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg mb-2">
                      {flow.title}
                    </h3>

                    <p className={`text-xs leading-relaxed ${
                      isSelected ? 'text-white/70' : 'text-[#55565A]'
                    }`}>
                      {flow.detail}
                    </p>
                  </div>

                  <div className={`mt-6 pt-3 border-t font-mono text-[10px] uppercase tracking-wider ${
                    isSelected ? 'border-white/10 text-ignis-400' : 'border-black/[0.04] text-[#707175]'
                  }`}>
                    {flow.tag}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-5 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#707175]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>STATE: DETERMINISTIC AGENT LOOP OPERATIONAL</span>
            </div>
            <div>
              <Link
                to="/contact"
                className="text-[#0D0E11] font-bold hover:text-ignis-600 transition-colors uppercase tracking-wider inline-flex items-center gap-1"
              >
                <span>Architect your AI workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-black/[0.06] hover:border-black/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-black/[0.03] text-ignis-500 flex items-center justify-center font-mono text-xs font-bold mb-4">
                  0{i + 1}
                </div>
                <h4 className="font-display font-bold text-lg text-[#0D0E11] mb-2">
                  {cap.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#55565A] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-black/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>PRODUCTION HARDENED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AISection;
