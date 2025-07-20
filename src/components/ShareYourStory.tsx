import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ShareYourStory = () => {
  const [form, setForm] = useState({ name: '', role: '', quote: '', badges: '', rating: 5, linkedin: '', image: null as File | null });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, files } = e.target as HTMLInputElement;
    if (type === 'file') {
      setForm({ ...form, image: files && files[0] ? files[0] : null });
    } else {
      setForm({ ...form, [id]: id === 'rating' ? Number(value) : value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess('');
    setError('');
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('role', form.role);
      formData.append('quote', form.quote);
      formData.append('badges', form.badges);
      formData.append('rating', String(form.rating));
      formData.append('linkedin', form.linkedin);
      if (form.image) formData.append('image', form.image);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback`, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSuccess('Thank you for your feedback!');
        setForm({ name: '', role: '', quote: '', badges: '', rating: 5, linkedin: '', image: null });
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to submit feedback.');
      }
    } catch {
      setError('Failed to submit feedback.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Share Your Story</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800/50 p-8 rounded-lg border border-slate-700" encType="multipart/form-data">
          <div>
            <Label htmlFor="name" className="text-white">Your Name</Label>
            <Input id="name" className="bg-slate-700 border-slate-600 text-white" placeholder="Enter your name" value={form.name} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="role" className="text-white">Your Role/Job Title</Label>
            <Input id="role" className="bg-slate-700 border-slate-600 text-white" placeholder="e.g. Full Stack Developer" value={form.role} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="quote" className="text-white">Your Success Story</Label>
            <Textarea id="quote" className="bg-slate-700 border-slate-600 text-white" placeholder="Share your experience..." rows={4} value={form.quote} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="badges" className="text-white">Badges/Skills (comma separated)</Label>
            <Input id="badges" className="bg-slate-700 border-slate-600 text-white" placeholder="e.g. React, Node.js, AI" value={form.badges} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="rating" className="text-white">Rating (1-5)</Label>
            <Input id="rating" type="number" min={1} max={5} className="bg-slate-700 border-slate-600 text-white" value={form.rating} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="linkedin" className="text-white">LinkedIn URL (optional)</Label>
            <Input id="linkedin" className="bg-slate-700 border-slate-600 text-white" placeholder="https://linkedin.com/in/yourprofile" value={form.linkedin} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="image" className="text-white">Profile Image (JPG/PNG, optional)</Label>
            <Input id="image" type="file" accept="image/*" className="bg-slate-700 border-slate-600 text-white" onChange={handleChange} />
            {form.image && <span className="text-gray-300 ml-2">{(form.image as File).name}</span>}
          </div>
          <div>
            <Label className="text-white">Company</Label>
            <Input value="Ignivance" className="bg-slate-700 border-slate-600 text-white" readOnly disabled />
          </div>
          <Button className="w-full flame-gradient hover-glow text-white font-semibold py-3" type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Feedback'}</Button>
          {success && <div className="text-green-400 text-center">{success}</div>}
          {error && <div className="text-red-400 text-center">{error}</div>}
        </form>
      </div>
    </section>
  );
};

export default ShareYourStory; 