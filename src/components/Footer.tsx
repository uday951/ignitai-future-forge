import { Mail, Phone, MapPin, Linkedin, Github, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id.replace('contact-', '')]: e.target.value });
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
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Contact Form Section */}
      <div className="py-16 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Ready to start your journey? Have questions? We'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-white">Name</Label>
                      <Input id="contact-name" className="bg-slate-800 border-slate-700 text-white" placeholder="Your Name" value={form.name} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="text-white">Email</Label>
                      <Input id="contact-email" type="email" className="bg-slate-800 border-slate-700 text-white" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-subject" className="text-white">Subject</Label>
                    <Input id="contact-subject" className="bg-slate-800 border-slate-700 text-white" placeholder="How can we help?" value={form.subject} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="text-white">Message</Label>
                    <Textarea 
                      id="contact-message" 
                      className="bg-slate-800 border-slate-700 text-white" 
                      placeholder="Tell us about your goals..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button className="w-full flame-gradient hover-glow text-white font-semibold py-3" type="submit" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {success && <div className="text-green-400 text-center">{success}</div>}
                  {error && <div className="text-red-400 text-center">{error}</div>}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-white">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-4 text-orange-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">ignivance@zohoemail.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-4 text-orange-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300">+91 7989442841</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-orange-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-300">hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-white">Follow Us</h4>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" className="border-slate-700 text-gray-400 hover:text-white hover:border-orange-500" asChild>
                    <a href="https://www.linkedin.com/in/udaykiran-koshika-a51142283/" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" className="border-slate-700 text-gray-400 hover:text-white hover:border-orange-500" asChild>
                    <a href="https://github.com/uday951" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" className="border-slate-700 text-gray-400 hover:text-white hover:border-orange-500">
                    <Youtube size={20} />
                  </Button>
                </div>
              </div>

              {/* MSME Info
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h4 className="text-lg font-bold mb-2 text-white">MSME Registered</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Udyam Registration No: UDYAM-XX-00-0000000
                </p>
                <p className="text-gray-400 text-xs">
                  Micro, Small and Medium Enterprises Registration
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🔥</span>
              </div>
              <span className="text-white font-bold text-xl">Ignivance</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
              <div className="flex gap-4">
                <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</a>
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/cookies-policy" className="hover:text-white transition-colors">Cookies Policy</a>
              </div>
              <div className="flex items-center gap-2">
                <span>© 2025 Ignivance. All rights reserved.</span>
              </div>
            </div>
          </div>
          
          {/* Partner Logos */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="text-center mb-4">
              <p className="text-gray-400 text-sm">Powered by</p>
            </div>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl">🔥Ignivance</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
