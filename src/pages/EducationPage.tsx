import React from 'react';
import { ArrowUpRight, Code2, Terminal, Users, CheckCircle2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const EducationPage: React.FC = () => {
  const programs = [
    {
      num: '01',
      title: 'Full-Stack Developer Apprenticeship',
      target: 'ASPIRING SOFTWARE ENGINEERS & STUDENTS',
      duration: '12 WEEKS // INTENSIVE',
      desc: 'Hands-on curriculum focused on building real web software with React, Node.js, Express, MongoDB, and TypeScript. No toy exercises — apprentices write code inside production Git repositories.',
      topics: [
        'Modern DOM manipulation & component lifecycle',
        'TypeScript contracts & strict interface typing',
        'State management & asynchronous React Query',
        'RESTful API architecture & JWT authentication',
        'Database modeling & aggregation pipelines',
      ],
      mode: 'Cohort-based with weekly code reviews',
    },
    {
      num: '02',
      title: 'AI-Powered Development & Agent Bootcamps',
      target: 'EXPERIENCED CODERS & PRODUCT TEAMS',
      duration: '4 WEEKS // ACCELERATED',
      desc: 'Master the next generation of software engineering: combining LLMs, automated agents, vector stores (RAG), and prompt engineering to multiply personal engineering output.',
      topics: [
        'LLM API orchestration (Gemini, Claude, OpenAI)',
        'Vector embeddings and semantic search (pgvector, Pinecone)',
        'Tool-calling autonomous agent loops',
        'Prompt engineering and zero-hallucination guardrails',
        'Building AI-driven internal tools and dashboards',
      ],
      mode: 'Hands-on live laboratory sessions',
    },
    {
      num: '03',
      title: 'Corporate Training & Tech Workshops',
      target: 'ENTERPRISE ENGINEERING & DESIGN TEAMS',
      duration: 'CUSTOM INTENSIVES',
      desc: 'Tailored training programs for organizations modernizing their technical stacks, adopting React/TypeScript design systems, or structuring internal AI workflows safely.',
      topics: [
        'Design systems & atomic Figma-to-Tailwind tokens',
        'Clean code architecture & scalable microservices',
        'Safe enterprise LLM adoption & data confidentiality',
        'CI/CD pipeline automation & cloud deployment',
      ],
      mode: 'On-site or remote interactive workshops',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#17181C]">
      <SEO
        title="Developer Education & Mentorship — IGNIVANCE"
        description="Developer education, technical bootcamps, and corporate AI training programs led by Ignivance Digital Studio."
        canonical="https://ignivance.in/education"
      />
      <Navbar />

      <main className="pt-32 md:pt-44 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Header */}
          <div className="mb-20 md:mb-28 pb-12 border-b border-black/[0.08]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                TALENT LAB & DEVELOPER MENTORSHIP
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0D0E11] tracking-tight uppercase leading-[0.92]">
              WE TEACH PEOPLE<br />
              <span className="font-serif italic font-normal text-ignis-500 lowercase">to</span> BUILD FOR REAL.
            </h1>
            <p className="mt-8 text-base sm:text-xl text-[#55565A] max-w-3xl leading-relaxed">
              While our primary business is product engineering for client companies, we believe senior engineers have a responsibility to train the next wave of technical builders.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="space-y-12 mb-24">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between pb-8 mb-8 border-b border-black/[0.06] gap-4">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs text-[#707175] mb-2">
                      <span className="text-ignis-500 font-bold">{prog.num}</span>
                      <span>// {prog.target}</span>
                      <span>·</span>
                      <span>{prog.duration}</span>
                    </div>
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0D0E11] tracking-tight uppercase">
                      {prog.title}
                    </h2>
                  </div>

                  <span className="px-3 py-1.5 rounded-full bg-black/[0.04] font-mono text-xs text-[#0D0E11] font-semibold self-start">
                    {prog.mode}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                  <div className="lg:col-span-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#707175] block mb-2">
                      Program Curriculum Overview
                    </span>
                    <p className="text-sm sm:text-base text-[#55565A] leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-6 bg-[#F8F8F5] p-6 rounded-2xl border border-black/[0.04]">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#0D0E11] font-bold block mb-3">
                      Core Syllabus Modules
                    </span>
                    <ul className="space-y-2 font-mono text-xs text-[#55565A]">
                      {prog.topics.map((t, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#707175]">
                    APPLICATION / SEATS CAPPED FOR QUALITY
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#0D0E11] hover:bg-ignis-500 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Inquire About Cohort</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EducationPage;
