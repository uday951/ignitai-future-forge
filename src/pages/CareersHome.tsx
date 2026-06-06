import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ArrowRight, Briefcase, Laptop, ShieldCheck, FileText, Video, Sparkles, BookOpen, ChevronRight, Award } from 'lucide-react';
import { jobsData } from '@/data/jobs';

const CareersHome = () => {
  const categories = [
    {
      icon: Briefcase,
      title: 'Full-Time Jobs',
      description: 'Explore early career, university graduate and junior software developer roles.',
      link: '/jobs/full-time',
      count: '5 Active Opportunities',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      icon: Laptop,
      title: 'Active Internships',
      description: 'Summer and winter software engineering internship opportunities for college students.',
      link: '/internships',
      count: '5 Active Opportunities',
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      icon: Sparkles,
      title: 'Off-Campus Drives',
      description: 'National qualifiers (TCS NQT, Wipro, Capgemini) and bulk off-campus hiring events.',
      link: '/off-campus-drives',
      count: '5 Active Opportunities',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      icon: ShieldCheck,
      title: 'Government Jobs',
      description: 'Elite scientist & technology officer openings at ISRO, DRDO, NIC, BARC, and SBI.',
      link: '/government-jobs',
      count: '5 Active Opportunities',
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-100'
    }
  ];

  const companies = ['Google', 'Microsoft', 'Amazon', 'Accenture', 'TCS', 'Wipro', 'Infosys', 'Capgemini', 'HCLTech', 'ISRO', 'DRDO'];

  const resources = [
    {
      icon: FileText,
      title: 'Resume & CV Alignment',
      description: 'Optimize your resume for applicant tracking systems (ATS). Highlight coding profiles and academic engineering projects.',
      iconColor: 'text-blue-600 bg-blue-50'
    },
    {
      icon: BookOpen,
      title: 'Interview Preparation',
      description: 'Master Data Structures & Algorithms (DSA), System Design fundamentals, and core computer science subjects (OS, DBMS, CN).',
      iconColor: 'text-purple-600 bg-purple-50'
    },
    {
      icon: Video,
      title: 'Career Guidance',
      description: 'Proven strategies for securing referrals, networking on LinkedIn, and passing automated cognitive/behavioral tests.',
      iconColor: 'text-emerald-600 bg-emerald-50'
    }
  ];

  // Get 3 recent additions for a preview section
  const recentJobs = jobsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title="Careers Portal | Ignivance Jobs, Internships & Tech Drives"
        description="Discover verified software engineering jobs, summer internships, national off-campus recruitment drives, and government technical opportunities."
        canonical="https://ignivance.in/jobs"
      />
      <Navbar />

      <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Hero Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
              Ignivance Careers Portal
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Accelerate Your Technical Career
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
              Skip the generic job boards. Discover verified, currently active software roles, internships, and prestigious public sector tech profiles with detailed roadmaps to help you clear the coding rounds.
            </p>
            <div className="mt-8 flex justify-center">
              <Link 
                to="/jobs/listings" 
                className="bg-blue-600 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-700 shadow-md shadow-blue-600/10 transition-all text-sm"
              >
                View All Opportunities
              </Link>
            </div>
          </div>

          {/* 4 Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {categories.map((sec, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-150 rounded-[2rem] p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                      <sec.icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-semibold px-4 py-1.5 rounded-full border ${sec.badgeColor}`}>
                      {sec.count}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition-colors tracking-tight">
                    {sec.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
                    {sec.description}
                  </p>
                </div>
                <Link 
                  to={sec.link} 
                  className="inline-flex items-center gap-1.5 text-base font-bold text-blue-600 hover:text-blue-700 group/link border-t border-slate-100 pt-4 mt-2"
                >
                  Explore Catalog
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          {/* AdSense Unit */}
          <div className="mb-20 bg-white border border-slate-200 rounded-2xl p-6 text-center text-xs text-slate-400 font-mono">
            [Google AdSense Responsive Banner]
          </div>

          {/* Recent Additions Preview */}
          <div className="bg-white border border-slate-150 rounded-[2rem] p-8 md:p-12 mb-20 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Recent Additions</h2>
                <p className="text-slate-500 text-sm mt-1">Lately published developer roles and recruitment events</p>
              </div>
              <Link 
                to="/jobs/listings" 
                className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View all openings
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentJobs.map(job => (
                <div key={job.id} className="border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-500 rounded-2xl p-5 transition-all group flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-blue-600 tracking-wider uppercase bg-blue-50 px-2.5 py-1 rounded-full inline-block mb-3">
                      {job.company}
                    </span>
                    <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-base line-clamp-2 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">{job.eligibility}</p>
                  </div>
                  <Link to={`/jobs/${job.slug}`} className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-0.5 mt-2">
                    Details <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Sourced Employers */}
          <div className="border-y border-slate-200 py-10 mb-20 text-center">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-6">Top Companies and Organizations Sourced</p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
              {companies.map((comp, idx) => (
                <span key={idx} className="text-slate-400 font-extrabold text-lg md:text-xl tracking-tight select-none hover:text-blue-600 transition-colors">
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Preparation Guides & Roadmap block */}
          <div className="bg-white border border-slate-150 rounded-[2rem] p-8 md:p-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Technical Preparation Resources</h2>
              <p className="text-slate-500 text-sm mt-2">Free roadmaps and strategies to clear algorithmic rounds, resume screening, and executive panel interviews.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((res, i) => (
                <div key={i} className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm ${res.iconColor}`}>
                    <res.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">{res.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{res.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareersHome;
