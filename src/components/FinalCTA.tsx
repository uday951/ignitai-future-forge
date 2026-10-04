import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react';
import SectionLabel from './SectionLabel';

export const FinalCTA: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Contact Form State with Inline Validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    budget: '$5k - $15k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide brief details.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#FFFFFF] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E8E4DE]"
      aria-label="Contact and Start a Project"
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Big Centered Headline & Email Link */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <SectionLabel label="START A CONVERSATION" />
          <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.02em] leading-tight mb-4">
            Have an idea? Let's <span className="font-italic italic font-normal text-[#FF4D1C]">build</span> it.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-base sm:text-lg mb-6">
            Tell us about your product goals, timeline, or architecture requirements.
          </p>
          <a
            href="mailto:ignivance@zohoemail.in"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#111111] hover:text-[#FF4D1C] transition-colors pb-1 border-b border-[#E8E4DE] hover:border-[#FF4D1C]"
          >
            <span>ignivance@zohoemail.in</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Clean Contact Form Container */}
        <div className="max-w-xl mx-auto bg-[#FAF8F5] border border-[#E8E4DE] rounded-2xl p-7 sm:p-10 shadow-sm">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-12 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-headline font-semibold text-2xl text-[#111111] mb-2">
                Message Received
              </h3>
              <p className="font-sans text-sm text-[#6B6B6B] max-w-sm mb-6">
                Thank you, {formData.name}. Our principal team will review your project requirements and reply within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    projectType: 'Web Development',
                    budget: '$5k - $15k',
                    message: '',
                  });
                }}
                className="font-sans text-xs font-semibold text-[#111111] hover:text-[#FF4D1C] transition-colors"
              >
                Send another message →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block font-sans text-xs font-semibold text-[#111111] mb-1.5">
                  Your Name <span className="text-[#FF4D1C]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Chen"
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.name ? 'border-rose-500' : 'border-[#E8E4DE]'
                  } text-sm text-[#111111] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#111111] transition-colors`}
                />
                {errors.name && (
                  <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-sans text-xs font-semibold text-[#111111] mb-1.5">
                  Work Email <span className="text-[#FF4D1C]">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.email ? 'border-rose-500' : 'border-[#E8E4DE]'
                  } text-sm text-[#111111] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#111111] transition-colors`}
                />
                {errors.email && (
                  <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Grid: Project Type + Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Type */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-[#111111] mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E4DE] text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors cursor-pointer"
                  >
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>AI & Automation</option>
                    <option>UI/UX Design</option>
                    <option>Full-Cycle SaaS</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-[#111111] mb-1.5">
                    Budget Scope
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E4DE] text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors cursor-pointer"
                  >
                    <option>&lt; $5k (Sprint / MVP)</option>
                    <option>$5k - $15k</option>
                    <option>$15k - $30k</option>
                    <option>$30k+ (Enterprise / Retainer)</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-sans text-xs font-semibold text-[#111111] mb-1.5">
                  Project Details <span className="text-[#FF4D1C]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're building, target timeline, or specific challenges..."
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.message ? 'border-rose-500' : 'border-[#E8E4DE]'
                  } text-sm text-[#111111] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#111111] transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#FF4D1C] text-white py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending Request...' : 'Send Project Inquiry'}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
