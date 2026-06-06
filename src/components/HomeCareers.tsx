import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Laptop, ShieldCheck, FileText, Video, Sparkles, BookOpen } from 'lucide-react';

const HomeCareers = () => {
  const sections = [
    {
      icon: Briefcase,
      title: 'Full-Time Jobs',
      description: 'Explore early career, university graduate and junior software developer roles.',
      link: '/jobs',
      count: '5 Active',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      icon: Laptop,
      title: 'Active Internships',
      description: 'Summer and winter software engineering internship opportunities for college students.',
      link: '/internships',
      count: '5 Active',
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      icon: Sparkles,
      title: 'Off-Campus Drives',
      description: 'National qualifiers (TCS NQT, Wipro, Capgemini) and bulk off-campus hiring events.',
      link: '/off-campus-drives',
      count: '5 Active',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      icon: ShieldCheck,
      title: 'Government Jobs',
      description: 'Elite scientist & technology officer openings at ISRO, DRDO, NIC, BARC, and SBI.',
      link: '/government-jobs',
      count: '5 Active',
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-100'
    }
  ];

  const companies = ['Google', 'Microsoft', 'Amazon', 'Accenture', 'TCS', 'Wipro', 'Infosys', 'Capgemini', 'HCLTech', 'ISRO', 'DRDO'];

  const resources = [
    {
      icon: FileText,
      title: 'Resume & CV Alignment',
      description: 'Optimize your resume for applicant tracking systems (ATS). Highlight coding profiles and projects.',
      iconColor: 'text-blue-600 bg-blue-50'
    },
    {
      icon: BookOpen,
      title: 'Interview Preparation',
      description: 'Master Data Structures & Algorithms (DSA), System Design fundamentals, and core computer science theory.',
      iconColor: 'text-purple-600 bg-purple-50'
    },
    {
      icon: Video,
      title: 'Career Guidance',
      description: 'Proven strategies for secure referrals, networking on LinkedIn, and passing cognitive/behavioral tests.',
      iconColor: 'text-emerald-600 bg-emerald-50'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Ignivance Careers
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Accelerate Your Technical Career
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Convert your ambitions into reality. Access verified active roles, national recruitment drives, and professional preparation guides designed for developers.
          </p>
        </div>

        {/* 4 Career Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sections.map((sec, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-150 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <sec.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${sec.badgeColor}`}>
                    {sec.count}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                  {sec.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {sec.description}
                </p>
              </div>
              <Link 
                to={sec.link} 
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-650 hover:text-blue-700 group/link"
              >
                Browse Catalog
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Top Hiring Companies */}
        <div className="border-y border-slate-200 py-10 mb-16 text-center bg-slate-50/50 rounded-2xl px-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-6">Top Tech & Public Sector Employers Sourced</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {companies.map((comp, idx) => (
              <span key={idx} className="text-slate-400 font-extrabold text-lg md:text-xl tracking-tight select-none hover:text-blue-600 transition-colors">
                {comp}
              </span>
            ))}
          </div>
        </div>

        {/* Resume & Guidance Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="bg-white border border-slate-100 hover:border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${res.iconColor}`}>
                <res.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-900">{res.title}</h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{res.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeCareers;
