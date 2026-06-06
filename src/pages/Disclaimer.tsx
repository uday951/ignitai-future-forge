import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ShieldAlert, Info, AlertTriangle, Link } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title="Disclaimer | Ignivance Jobs"
        description="Official disclaimer and terms regarding job information, application links, and career guidance provided on Ignivance."
        canonical="https://ignivance.in/disclaimer"
      />
      <Navbar />

      <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-[2rem] p-8 md:p-12">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6 mb-8">
              <div className="bg-amber-50 text-amber-600 p-3 rounded-2xl">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Disclaimer</h1>
                <p className="text-slate-500 text-sm mt-1">Effective Date: June 1, 2026</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
              
              <section className="bg-amber-50/50 border border-amber-100 rounded-xl p-5 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-bold text-slate-900 mb-1">Important Security Notice</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Ignivance is an independent career news, recruitment notification, and training organization. We do NOT act as recruiters, charge candidates for training/jobs, or promise guaranteed placements. Beware of fraudulent emails or individuals requesting payments under our name.
                  </p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  1. Accuracy of Job Listings
                </h2>
                <p>
                  All job opportunities published on the Ignivance Job Portal (/jobs, /internships, /off-campus-drives, /government-jobs) are sourced from official company careers portals, public job boards, or trusted recruitment advertisements. While we perform rigorous manual checks to verify that every opening is active and legitimate at the time of posting, we make no guarantees about the completeness, reliability, or accuracy of this information.
                </p>
                <p>
                  Hiring requirements, qualifications, salaries, and deadlines can change without notice. Candidates are strongly advised to check the official career handles of the respective organization before taking action.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Link className="w-5 h-5 text-blue-600" />
                  2. Third-Party Link Policy
                </h2>
                <p>
                  Our job descriptions contain external links pointing directly to the official recruitment portals (e.g. Google Careers, Microsoft Careers, TCS NextStep, Government recruitment portals). These links are provided for candidates' convenience and reference only.
                </p>
                <p>
                  Ignivance has no control over the content, privacy policies, practices, or availability of these external websites. The inclusion of a link does not imply endorsement of the platform or the company's internal recruitment policies. We are not liable for any issues, security compromises, or interactions that occur after leaving the Ignivance website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>💡</span> 3. Career Guidance & Educational Resources
                </h2>
                <p>
                  The interview tips, roadmap tutorials, syllabus reviews, and preparation resources provided on our site are based on historical candidate feedback and industry standards. They are designed to aid preparation and should be taken as guidance rather than guarantee. Every hiring program is unique, and actual selection depends on individual merit and performance during the official evaluations.
                </p>
              </section>

              <section className="space-y-3 border-t border-slate-100 pt-6">
                <h2 className="text-xl font-bold text-slate-900">4. Contact Information</h2>
                <p>
                  If you find a job listing that has expired, contains incorrect information, or points to an unofficial site, please let us know so we can update it immediately:
                </p>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm font-semibold">
                  <p>Email: <a href="mailto:support@ignivance.in" className="text-blue-600 hover:underline">support@ignivance.in</a></p>
                  <p className="mt-1">Corporate Office: Hyderabad, India</p>
                </div>
              </section>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
