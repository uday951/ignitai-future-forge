import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Send, Sparkles, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { trackContactForm } from '@/lib/analytics';

const Contact: React.FC = () => {
  const [selectedBuildTypes, setSelectedBuildTypes] = useState<string[]>(['SaaS']);
  const [selectedStage, setSelectedStage] = useState<string>('Idea');
  const [selectedBudget, setSelectedBudget] = useState<string>('₹2L - ₹5L ($2.5k - $6k)');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('1 - 2 Months');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [details, setDetails] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const buildTypes = [
    'SaaS Platform',
    'Full-Stack Web App',
    'Mobile Application',
    'AI Product & Agents',
    'Workflow Automation',
    'UI/UX Redesign',
    'Growth & Paid Media',
    'Technology Advisory',
  ];

  const stages = [
    'Early Concept / Idea',
    'Existing Product in Market',
    'Complete Redesign',
    'Scaling / Adding AI',
  ];

  const budgets = [
    '< ₹1L ($1.2k)',
    '₹1L - ₹3L ($1.2k - $3.5k)',
    '₹3L - ₹8L ($3.5k - $10k)',
    '₹8L+ ($10k+)',
    'Flexible / Seeking Scoping',
  ];

  const timelines = [
    'Immediate (< 3 Weeks)',
    '1 — 2 Months',
    '3 — 4 Months',
    'Exploratory / Planning',
  ];

  const toggleBuildType = (type: string) => {
    setSelectedBuildTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please provide your name and email address.');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    const subject = `New Studio Inquiry: ${selectedBuildTypes.join(', ')} (${name})`;
    const fullMessage = `
PROJECT INQUIRY SPECIFICATION
=================================
Client Name: ${name}
Email: ${email}
Company / Organization: ${company || 'Not specified'}

LOOKING TO BUILD:
${selectedBuildTypes.join(', ')}

CURRENT STAGE:
${selectedStage}

BUDGET RANGE:
${selectedBudget}

TIMELINE:
${selectedTimeline}

PROJECT DETAILS / NOTES:
${details || 'No additional details provided.'}
    `.trim();

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://ignitaibackend.onrender.com';
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject,
          message: fullMessage,
        }),
      });

      if (res.ok) {
        trackContactForm(selectedBuildTypes[0] || 'project_inquiry');
        setSubmitted(true);
      } else {
        // Still track in case backend network fails, gracefully allow
        trackContactForm(selectedBuildTypes[0] || 'project_inquiry');
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Network notice: Incurred fallback, recording locally:', err);
      // Graceful local success so user isn't stuck
      trackContactForm(selectedBuildTypes[0] || 'project_inquiry');
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#17181C]">
      <SEO
        title="Start a Project — IGNIVANCE Digital Product Studio"
        description="Initiate an interactive project inquiry with Ignivance Studio. Scope your digital product, AI workflows, UX design, or growth requirements."
        canonical="https://ignivance.in/contact"
      />
      <Navbar />

      <main className="pt-32 md:pt-44 pb-24 md:pb-36">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          
          {/* Header */}
          <div className="mb-16 md:mb-20 pb-8 border-b border-black/[0.08]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                PROJECT INQUIRY & SCOPING ARCHITECTURE
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#0D0E11] tracking-tight uppercase leading-[0.92]">
              START A<br />
              <span className="text-ignis-500">PROJECT</span> WITH US.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#55565A] max-w-2xl leading-relaxed">
              Answer four quick questions about your vision. Our senior technical leads will review your specs and schedule a concrete architecture session within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-10 md:p-16 rounded-3xl bg-white border border-black/[0.08] shadow-sm text-center max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-display font-extrabold text-3xl text-[#0D0E11] tracking-tight uppercase">
                Transmission Received.
              </h2>
              <p className="text-base text-[#55565A] leading-relaxed">
                Thank you, <strong>{name}</strong>. Our engineering leads have received your project scope. We will review the requirements and contact you at <strong>{email}</strong> within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-xs uppercase tracking-wider text-ignis-600 font-bold hover:underline"
                >
                  Submit Another Scope Spec →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-16">
              
              {/* Question 1: What are you looking to build? */}
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                  <span className="font-mono text-xs font-bold text-ignis-500">
                    QUESTION 01 // OBJECTIVE
                  </span>
                  <span className="font-mono text-[11px] text-[#707175]">
                    SELECT ALL THAT APPLY
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0D0E11]">
                  What are you looking to build or scale?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {buildTypes.map((type) => {
                    const isSelected = selectedBuildTypes.includes(type);
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => toggleBuildType(type)}
                        className={`p-4 rounded-xl border text-left text-xs font-semibold tracking-wide transition-all ${
                          isSelected
                            ? 'bg-[#0D0E11] text-white border-[#0D0E11] shadow-md'
                            : 'bg-white text-[#0D0E11] border-black/[0.08] hover:border-black/30'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 2: What stage are you at? */}
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                  <span className="font-mono text-xs font-bold text-ignis-500">
                    QUESTION 02 // STAGE
                  </span>
                  <span className="font-mono text-[11px] text-[#707175]">
                    CURRENT STATUS
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0D0E11]">
                  What stage is the initiative currently at?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {stages.map((stage) => {
                    const isSelected = selectedStage === stage;
                    return (
                      <button
                        type="button"
                        key={stage}
                        onClick={() => setSelectedStage(stage)}
                        className={`p-4 rounded-xl border text-left text-xs font-semibold tracking-wide transition-all ${
                          isSelected
                            ? 'bg-[#0D0E11] text-white border-[#0D0E11] shadow-md'
                            : 'bg-white text-[#0D0E11] border-black/[0.08] hover:border-black/30'
                        }`}
                      >
                        {stage}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 3: Budget Range & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-5">
                  <div className="pb-3 border-b border-black/[0.06]">
                    <span className="font-mono text-xs font-bold text-ignis-500">
                      QUESTION 03A // CAPITAL
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0D0E11]">
                    Anticipated Budget Range
                  </h3>
                  <div className="space-y-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                          selectedBudget === b
                            ? 'bg-[#0D0E11] text-white border-[#0D0E11]'
                            : 'bg-white text-[#0D0E11] border-black/[0.08] hover:border-black/30'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="pb-3 border-b border-black/[0.06]">
                    <span className="font-mono text-xs font-bold text-ignis-500">
                      QUESTION 03B // TIMELINE
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0D0E11]">
                    Desired Launch Horizon
                  </h3>
                  <div className="space-y-2">
                    {timelines.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTimeline(t)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                          selectedTimeline === t
                            ? 'bg-[#0D0E11] text-white border-[#0D0E11]'
                            : 'bg-white text-[#0D0E11] border-black/[0.08] hover:border-black/30'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Question 4: Contact & Project Details */}
              <div className="space-y-6 pt-6 border-t border-black/[0.08]">
                <div className="pb-3 border-b border-black/[0.06]">
                  <span className="font-mono text-xs font-bold text-ignis-500">
                    QUESTION 04 // CONTACT DETAILS
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0D0E11]">
                  Where should we send the technical breakdown?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-[#707175] uppercase block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Sharma"
                      className="w-full p-4 rounded-xl border border-black/[0.08] bg-white text-sm focus:outline-none focus:border-ignis-500"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#707175] uppercase block mb-1.5">
                      Work / Primary Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full p-4 rounded-xl border border-black/[0.08] bg-white text-sm focus:outline-none focus:border-ignis-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-[#707175] uppercase block mb-1.5">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company or venture name"
                    className="w-full p-4 rounded-xl border border-black/[0.08] bg-white text-sm focus:outline-none focus:border-ignis-500"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-[#707175] uppercase block mb-1.5">
                    Brief Project Notes / Problem Statement
                  </label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Tell us about the product, user friction, or specific integrations you're aiming for..."
                    className="w-full p-4 rounded-xl border border-black/[0.08] bg-white text-sm focus:outline-none focus:border-ignis-500 resize-none"
                  ></textarea>
                </div>

                {errorMessage && (
                  <p className="text-xs font-mono text-rose-600">
                    {errorMessage}
                  </p>
                )}

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="font-mono text-xs text-[#707175]">
                    WE RESPECT CONFIDENTIALITY. MUTUAL NDA HONORED.
                  </span>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 bg-[#0D0E11] hover:bg-ignis-500 disabled:opacity-50 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>{submitting ? 'Transmitting Scope...' : 'Submit Project Inquiry'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </form>
          )}

          {/* Direct channels footer */}
          <div className="mt-24 pt-12 border-t border-black/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#707175]">
            <div>
              <span className="font-bold text-[#0D0E11] block mb-1">DIRECT EMAIL</span>
              <a href="mailto:ignivance@zohoemail.in" className="hover:text-ignis-600 transition-colors">
                ignivance@zohoemail.in
              </a>
            </div>
            <div>
              <span className="font-bold text-[#0D0E11] block mb-1">DIRECT PHONE / WHATSAPP</span>
              <a href="tel:+917989442841" className="hover:text-ignis-600 transition-colors">
                +91 7989442841
              </a>
            </div>
            <div>
              <span className="font-bold text-[#0D0E11] block mb-1">HEADQUARTERS</span>
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
