import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Search, MapPin, Briefcase, Calendar, ChevronRight, GraduationCap, DollarSign } from 'lucide-react';
import { jobsData } from '@/data/jobs';
import { JobOpportunity } from '@/data/jobTypes';
import { trackSearch } from '@/lib/analytics';

interface JobsListingProps {
  initialCategory?: 'all' | 'jobs' | 'internships' | 'off-campus-drives' | 'government-jobs';
}

const JobsListing = ({ initialCategory = 'all' }: JobsListingProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredJobs, setFilteredJobs] = useState<JobOpportunity[]>([]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    let result = jobsData;

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(job => job.category === selectedCategory);
    }

    // Filter by Search Term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.location.toLowerCase().includes(term) ||
        job.skills.some(skill => skill.toLowerCase().includes(term))
      );
    }

    setFilteredJobs(result);
  }, [searchTerm, selectedCategory]);

  // Debounced search tracking for GA4 to prevent event flooding
  useEffect(() => {
    if (!searchTerm.trim()) return;
    const delayDebounceFn = setTimeout(() => {
      trackSearch(searchTerm, filteredJobs.length);
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, filteredJobs.length]);

  const categories = [
    { id: 'all', label: 'All Careers' },
    { id: 'jobs', label: 'Full-Time Jobs' },
    { id: 'internships', label: 'Internships' },
    { id: 'off-campus-drives', label: 'Off-Campus Drives' },
    { id: 'government-jobs', label: 'Government Jobs' }
  ];

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case 'jobs': return 'Latest Full-Time Software Jobs';
      case 'internships': return 'Latest Software Engineering Internships';
      case 'off-campus-drives': return 'Upcoming Off-Campus Recruitment Drives';
      case 'government-jobs': return 'Govt Jobs & Public Sector Openings';
      default: return 'Explore Career Opportunities & Drives';
    }
  };

  const getCategoryDesc = () => {
    switch (selectedCategory) {
      case 'jobs': return 'Verified, active full-time roles at top tier technology corporations and high growth startups in India.';
      case 'internships': return 'Build real-world products with hands-on summer and winter software engineering internship opportunities.';
      case 'off-campus-drives': return 'Massive national qualifier tests and off-campus recruitment events for engineering graduates.';
      case 'government-jobs': return 'Elite research and technology officer openings at ISRO, DRDO, public banks, and national institutions.';
      default: return 'Your gateway to verified software roles, summer internships, mass drives, and prestigious public sector tech profiles.';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title={`${getCategoryTitle()} | Ignivance Jobs`}
        description={getCategoryDesc()}
        canonical={`https://ignivance.in/${selectedCategory === 'all' ? 'jobs' : selectedCategory}`}
      />
      <Navbar />

      <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              {getCategoryTitle()}
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {getCategoryDesc()}
            </p>
          </div>

          {/* Search and Tabs */}
          <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6 mb-10">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search title, company, skills, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50"
                />
              </div>

              {/* Category Filter Pills (Only visible when initialCategory is "all") */}
              {initialCategory === 'all' && (
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as any)}
                      className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Job Cards Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white border border-gray-100 hover:border-blue-500 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Company & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
                        {job.company}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {job.jobType}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                      {job.title}
                    </h3>

                    {/* Basic Meta Details */}
                    <div className="space-y-2 mb-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="truncate max-w-xs">{job.education}</span>
                      </div>
                      {job.salary && (
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                          <DollarSign className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{job.salary}</span>
                        </div>
                      )}
                    </div>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {job.skills.slice(0, 4).map((skill, index) => (
                        <span 
                          key={index} 
                          className="bg-slate-50 text-slate-600 px-2 py-0.5 rounded text-xs border border-slate-100"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 4 && (
                        <span className="text-xs text-slate-400 self-center">
                          +{job.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Posted: {job.datePosted}
                    </span>
                    <Link 
                      to={`/jobs/${job.slug}`} 
                      className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 group/link"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-gray-100 shadow-sm rounded-2xl">
              <p className="text-lg text-slate-500 mb-2">No career opportunities found matching your criteria.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory(initialCategory); }}
                className="text-blue-600 font-bold hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* AdSense Placement Placeholder */}
          <div className="mt-12 bg-white/40 border border-dashed border-slate-300 rounded-2xl p-6 text-center text-xs text-slate-400 font-mono">
            [Google AdSense Responsive Unit]
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobsListing;
