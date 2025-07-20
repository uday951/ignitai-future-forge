import { useEffect, useRef, useState } from 'react';
import { Quote, Linkedin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type Feedback = {
  name: string;
  role: string;
  quote: string;
  badges: string[];
  rating: number;
  linkedin: string;
  image: string;
  company?: string;
  createdAt?: string;
  // Add or remove fields as needed to match your backend
};

const Testimonials = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [form, setForm] = useState({
    name: '',
    role: '',
    quote: '',
    badges: '',
    rating: 5,
    linkedin: '',
    image: null as File | null
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback`);
      const data = await res.json();
      setFeedbacks(data);
    } catch {
      setFeedbacks([]);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

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
        fetchFeedbacks();
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
    <>
      {/* Success Stories Section */}
      <section ref={ref} className="py-20 bg-gradient-to-b from-slate-800 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>Student <span className="flame-gradient bg-clip-text text-transparent">Success Stories</span></h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>Hear from our graduates who are now thriving in their tech careers</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {feedbacks.length === 0 && (
              <div className="text-gray-400 text-center col-span-2">No success stories yet. Be the first to share yours!</div>
            )}
            {feedbacks.map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover-glow ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden text-4xl">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image?.startsWith('/uploads/') ? `${import.meta.env.VITE_API_URL}${testimonial.image}` : testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span role="img" aria-label="avatar">👤</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        {testimonial.linkedin && (
                          <a href={testimonial.linkedin} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={16} />
                          </a>
                        )}
                      </div>
                      <p className="text-orange-400 font-medium">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">Ignivance</p>
                    </div>
                  </div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 text-orange-500/30" size={24} />
                    <p className="text-gray-300 leading-relaxed pl-6 italic">"{testimonial.quote}"</p>
                  </div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {(testimonial.badges || []).map((badge, idx) => (
                      <span key={idx} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs">{badge}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Stats Section */}
          <div className={`mt-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">Student Success Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">0%</div>
                  <div className="text-gray-400">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">-</div>
                  <div className="text-gray-400">Avg. Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">4.8★</div>
                  <div className="text-gray-400">Student Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">0%</div>
                  <div className="text-gray-400">Certificate Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;