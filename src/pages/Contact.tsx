import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.project,   // Map 'project' to 'subject' as backend expects 'subject'
          message: form.message
        }),
      });
      
      if (res.ok) {
        setSuccess('Message sent! We\'ll respond within 24 hours.');
        setForm({ name: '', email: '', project: '', message: '' });
      } else {
        const errorData = await res.json();
        console.error('Server error:', errorData);
        alert(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Network Error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title="Contact Ignivance | Full Stack Development & AI Services"
        description="Get in touch with Ignivance for elite full stack development, web apps, and AI automation solutions. Let's scale your startup together."
        keywords="Contact Ignivance, hire AI developers, full stack development company, web development agency Hyderabad"
        canonical="https://ignivance.in/contact"
      />
      <Navbar />
      
      <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Let's Build Something Great
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to start your project? Get in touch and we'll respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white border border-gray-100 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl shadow-slate-200/50 order-2 md:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Type
                  </label>
                  <select
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
                  >
                    <option value="">Select project type</option>
                    <option value="new-website">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="web-app">Web Application</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex justify-center items-center bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all mt-6"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>

                {success && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3.5 rounded-xl text-sm font-medium flex items-center mt-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {success}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 order-1 md:order-2 flex flex-col justify-start">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="pt-1">
                      <div className="text-sm tracking-widest uppercase font-bold text-slate-400 mb-1">Email</div>
                      <a href="mailto:ignivance@zohoemail.in" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">ignivance@zohoemail.in</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="pt-1">
                      <div className="text-sm tracking-widest uppercase font-bold text-slate-400 mb-1">Phone</div>
                      <a href="tel:+917989442841" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">+91 7989442841</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="pt-1">
                      <div className="text-sm tracking-widest uppercase font-bold text-slate-400 mb-1">Location</div>
                      <div className="text-lg font-medium text-slate-900">Hyderabad, India</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="pt-1">
                      <div className="text-sm tracking-widest uppercase font-bold text-slate-400 mb-1">Response Time</div>
                      <div className="text-lg font-medium text-slate-900">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 rounded-[2rem] p-8 mt-4 shadow-xl shadow-blue-600/20 text-white hidden md:block border-none relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-700 w-full h-full transform origin-bottom-left -rotate-12 translate-y-10 scale-150 rounded-full opacity-50 z-0 mix-blend-multiply"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-extrabold mb-3">Prefer to talk?</h4>
                  <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                    Schedule a free consultation call to discuss your project.
                  </p>
                  <a
                    href="tel:+917989442841"
                    className="inline-flex justify-center items-center w-full bg-white text-blue-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all shadow-md"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
