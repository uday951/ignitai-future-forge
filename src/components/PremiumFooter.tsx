import { Mail, Phone, MapPin, Linkedin, Github, Youtube } from 'lucide-react';
import { useState } from 'react';

const PremiumFooter = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setError('Failed to send message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-transparent border-t border-gray-200/50 dark:border-gray-800/50">
      {/* Contact Section */}
      <div className="py-20 bg-purple-50 dark:bg-purple-950/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Ready to start your journey? We'd love to hear from you!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-2xl bg-white dark:bg-premium-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-2xl bg-white dark:bg-premium-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-premium-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  id="message"
                  placeholder="Your message..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-premium-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium hover:scale-105 transition-transform duration-300"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                {success && <div className="text-green-500 text-sm">{success}</div>}
                {error && <div className="text-red-500 text-sm">{error}</div>}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <p className="font-medium text-gray-900 dark:text-white">ignivance@zohoemail.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                      <p className="font-medium text-gray-900 dark:text-white">+91 7989442841</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-medium text-gray-900 dark:text-white">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/udaykiran-koshika-a51142283/' },
                    { icon: Github, href: 'https://github.com/uday951' },
                    { icon: Youtube, href: '#' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl bg-white dark:bg-premium-950 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:border-purple-500 hover:scale-110 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
                I
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Ignivance</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/terms-and-conditions" className="hover:text-purple-500 transition-colors">Terms</a>
              <a href="/privacy-policy" className="hover:text-purple-500 transition-colors">Privacy</a>
              <a href="/cookies-policy" className="hover:text-purple-500 transition-colors">Cookies</a>
            </div>
            
            <div>© 2025 Ignivance. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
