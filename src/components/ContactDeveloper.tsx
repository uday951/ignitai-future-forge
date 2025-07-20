import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send } from 'lucide-react';

const ContactDeveloper = () => {
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
        setSuccess('Your message has been sent to the developer team!');
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      <div className="max-w-2xl mx-auto px-4 rounded-2xl shadow-xl border border-slate-800 bg-slate-900/80">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg">
              <Mail size={32} className="text-white" />
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Contact Developer Team</h2>
          <p className="text-gray-300">Have a technical question, feedback, or want to collaborate? Reach out to our developer team directly using the form below.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-white">Name</Label>
              <Input id="name" className="bg-slate-800 border-slate-700 text-white" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" type="email" className="bg-slate-800 border-slate-700 text-white" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div>
            <Label htmlFor="subject" className="text-white">Subject</Label>
            <Input id="subject" className="bg-slate-800 border-slate-700 text-white" placeholder="How can we help?" value={form.subject} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="message" className="text-white">Message</Label>
            <Textarea 
              id="message" 
              className="bg-slate-800 border-slate-700 text-white" 
              placeholder="Describe your request or feedback..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button className="w-full flame-gradient hover-glow text-white font-semibold py-3 flex items-center justify-center gap-2" type="submit" disabled={submitting}>
            <Send className="mr-2" size={18} />
            {submitting ? 'Sending...' : 'Send Message'}
          </Button>
          {success && <div className="text-green-400 text-center">{success}</div>}
          {error && <div className="text-red-400 text-center">{error}</div>}
        </form>
      </div>
    </section>
  );
};

export default ContactDeveloper; 

