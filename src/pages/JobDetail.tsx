import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getJobBySlug, jobsData } from '@/data/jobs';
import { MapPin, Briefcase, Calendar, ChevronRight, GraduationCap, DollarSign, Award, CheckCircle, HelpCircle, ArrowLeft, ExternalLink } from 'lucide-react';
import { trackApplyClick, trackExternalLink } from '@/lib/analytics';

const renderExplanation = (text: string) => {
  return text.split('\n\n').map((paragraph, index) => {
    const trimmed = paragraph.trim();
    if (!trimmed) return null;

    // Headings
    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={index} className="text-lg font-bold text-slate-900 mt-6 mb-3 tracking-tight">
          {trimmed.substring(4)}
        </h3>
      );
    }
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={index} className="text-xl font-extrabold text-slate-900 mt-8 mb-4 tracking-tight border-b border-slate-100 pb-2">
          {trimmed.substring(3)}
        </h2>
      );
    }
    if (trimmed.startsWith('# ')) {
      return (
        <h1 key={index} className="text-2xl font-black text-slate-900 mt-10 mb-6 tracking-tight">
          {trimmed.substring(2)}
        </h1>
      );
    }

    // Lists (multi-line lists starting with * or -)
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').map(li => li.replace(/^[*-\s]+/, '').trim()).filter(Boolean);
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 my-4 text-slate-700">
          {items.map((item, idx) => {
            const parts = item.split(/(\*\*.*?\*\*)/g);
            return (
              <li key={idx}>
                {parts.map((part, pIdx) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={pIdx} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </li>
            );
          })}
        </ul>
      );
    }

    // Paragraph with inline bold parsing (**bold**)
    const parts = trimmed.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={index} className="text-slate-600 leading-relaxed mb-4">
        {parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={pIdx} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
};

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const job = getJobBySlug(slug || '');

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center pt-24 md:pt-32">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Job Listing Not Found</h2>
          <p className="text-slate-600 mb-8 max-w-md">The job opportunity you are searching for might have expired, been deactivated, or moved.</p>
          <Link to="/jobs" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-md transition-all">
            Back to Careers Portal
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get Breadcrumb Category Label
  const getCategoryLabel = () => {
    switch (job.category) {
      case 'jobs': return 'Full-Time Jobs';
      case 'internships': return 'Internships';
      case 'off-campus-drives': return 'Off-Campus Drives';
      case 'government-jobs': return 'Government Jobs';
      default: return 'Careers';
    }
  };

  const getCategoryLink = () => {
    switch (job.category) {
      case 'jobs': return '/jobs';
      case 'internships': return '/internships';
      case 'off-campus-drives': return '/off-campus-drives';
      case 'government-jobs': return '/government-jobs';
      default: return '/jobs';
    }
  };

  // Build Structured Schemas for Google SEO Index
  const jobPostingSchema = {
    "@type": "JobPosting",
    "title": job.title,
    "description": `
      <p><strong>About the Role:</strong> ${job.title} at ${job.company}.</p>
      <p><strong>Eligibility:</strong> ${job.eligibility}</p>
      <p><strong>Education:</strong> ${job.education}</p>
      <p><strong>Skills:</strong> ${job.skills.join(', ')}</p>
      <p><strong>Salary Range:</strong> ${job.salary}</p>
      <p><strong>Selection Process:</strong> ${job.selectionProcess.join(', ')}</p>
      <p><strong>About Company:</strong> ${job.aboutCompany}</p>
      <p><strong>Expert Analysis:</strong> ${job.uniqueExplanation}</p>
    `,
    "datePosted": job.datePosted,
    "validThrough": job.validThrough,
    "employmentType": job.jobType === 'Internship' ? 'INTERN' : 'FULL_TIME',
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": job.sourceLink
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location,
        "addressCountry": "IN"
      }
    }
  };

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": job.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [jobPostingSchema, faqSchema]
  };

  // Find 3 Related Jobs for Internal Linking
  const relatedJobs = jobsData
    .filter(item => item.id !== job.id && (item.category === job.category || item.company === job.company))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title={job.metaTitle}
        description={job.metaDescription}
        canonical={`https://ignivance.in/jobs/${job.slug}`}
        schema={combinedSchema}
      />
      <Navbar />

      <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500 bg-white border border-slate-100 px-4 py-2.5 rounded-xl w-fit">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to={getCategoryLink()} className="hover:text-blue-600">{getCategoryLabel()}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-none">{job.title}</span>
          </nav>

          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 mb-6 bg-white border border-slate-150 px-4 py-2 rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Listings
          </button>

          {/* Main Job Detail Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left/Middle: Core Job Information (Col-Span-2) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Header Box */}
              <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-extrabold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {job.company}
                    </span>
                    <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
                      {job.jobType}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Posted: {job.datePosted}</span>
                </div>

                <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  {job.title}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">Location</p>
                      <p className="font-semibold text-slate-800">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-slate-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">Salary Range</p>
                      <p className="font-semibold text-slate-800">{job.salary}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unique Explanation Segment (Required: 300+ words) */}
              <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  Ignivance Career Review & Role Analysis
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                  {renderExplanation(job.uniqueExplanation)}
                </div>
              </div>

              {/* Requirements & Qualification Card */}
              <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  Eligibility & Technical Requirements
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Academic Qualification:</h3>
                    <p className="text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm md:text-base leading-relaxed">
                      {job.education}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Detailed Eligibility Criteria:</h3>
                    <p className="text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm md:text-base leading-relaxed">
                      {job.eligibility}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-3">Required Technical & Soft Skills:</h3>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-lg text-sm font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Selection Process */}
              <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  Hiring & Selection Stages
                </h2>
                <div className="space-y-4">
                  {job.selectionProcess.map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                      <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 text-sm md:text-base leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation & Interview Tips */}
              <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Guidance, Preparation & Interview Success Tips
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Preparation Tips */}
                  <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-200 pb-2">
                      <span className="text-blue-600">📚</span> Preparation Roadmap
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                      {job.prepTips.map((tip, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-blue-600 font-bold shrink-0">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interview Tips */}
                  <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-200 pb-2">
                      <span className="text-blue-600">💡</span> Interview Strategies
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                      {job.interviewTips.map((tip, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-blue-600 font-bold shrink-0">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-6">
                  {job.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="font-bold text-slate-800 text-base md:text-lg mb-2 flex gap-2">
                        <span className="text-blue-600 shrink-0">Q:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-slate-600 pl-6 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Source Attribution */}
              <p className="text-xs text-slate-400 text-right italic mt-4 px-2">
                Source: Official Google Careers Website
              </p>

            </div>

            {/* Right: Sidebar Meta Info & Verification (Col-Span-1) */}
            <div className="space-y-8">
              
              {/* Application Call-to-action */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-900 rounded-2xl p-6 shadow-xl sticky top-24">
                <h3 className="font-extrabold text-xl mb-4 tracking-tight">Application Portal</h3>
                
                {/* Important Dates List */}
                <div className="space-y-4 mb-6 text-sm border-b border-slate-750 pb-6">
                  {Object.entries(job.importantDates).map(([label, value]) => (
                    <div key={label}>
                      <span className="text-slate-400 block text-xs uppercase font-bold">{label}</span>
                      <span className="font-semibold block mt-0.5 text-slate-200">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <a 
                    href={job.applyLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => trackApplyClick(job.title, job.company, job.applyLink)}
                    className="w-full bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 shadow-md transition-all text-center"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={job.sourceLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => trackExternalLink(job.sourceLink, 'Verify official posting source')}
                    className="w-full bg-slate-800 text-slate-300 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:text-white hover:bg-slate-700 transition-all text-xs text-center border border-slate-700"
                  >
                    Verify official posting source
                  </a>
                </div>

                <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed">
                  Ignivance provides career news, updates and preparation guidance. We do NOT run tests or charge candidates. Always verify links before submitting personal details.
                </p>
              </div>

              {/* Internal Linking: Career Resources */}
              <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">Career Resources</h3>
                <div className="space-y-3">
                  <Link 
                    to="/jobs/listings" 
                    className="flex items-center justify-between text-sm font-medium text-slate-700 hover:text-blue-600 hover:translate-x-0.5 transition-all py-1.5"
                  >
                    <span>🔍 More Google Jobs</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link 
                    to="/internships" 
                    className="flex items-center justify-between text-sm font-medium text-slate-700 hover:text-blue-600 hover:translate-x-0.5 transition-all py-1.5"
                  >
                    <span>🎓 Latest Internships</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link 
                    to="/off-campus-drives" 
                    className="flex items-center justify-between text-sm font-medium text-slate-700 hover:text-blue-600 hover:translate-x-0.5 transition-all py-1.5"
                  >
                    <span>🚀 Off Campus Drives</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link 
                    to="/jobs" 
                    className="flex items-center justify-between text-sm font-medium text-slate-700 hover:text-blue-600 hover:translate-x-0.5 transition-all py-1.5"
                  >
                    <span>📄 Resume Templates</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link 
                    to="/jobs" 
                    className="flex items-center justify-between text-sm font-medium text-slate-700 hover:text-blue-600 hover:translate-x-0.5 transition-all py-1.5"
                  >
                    <span>💡 Interview Questions</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Internal Linking: Related Career Openings */}
              <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">Related Career Openings</h3>
                <div className="space-y-4">
                  {relatedJobs.map(item => (
                    <Link 
                      key={item.id} 
                      to={`/jobs/${item.slug}`} 
                      className="block p-3 rounded-xl border border-slate-100 hover:border-blue-500 bg-slate-50/50 hover:bg-white transition-all group"
                    >
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">{item.company}</span>
                      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-sm line-clamp-1">{item.title}</h4>
                      <span className="text-[11px] text-slate-400 block mt-1">{item.location}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* AdSense Sidebar Placeholder */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center text-xs text-slate-400 font-mono">
                [Google AdSense Display Banner]
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetail;
