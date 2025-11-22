import { useState, useEffect, useRef } from 'react';
import { Upload, Calendar, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ApplyNow = () => {
  const [inView, setInView] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    experience: '',
    motivation: '',
    resume: null as File | null,
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

  const timeline = [
    { icon: <Users className="w-6 h-6" />, title: "Application Review", duration: "1-2 days", description: "We review your application and portfolio" },
    { icon: <Calendar className="w-6 h-6" />, title: "Technical Interview", duration: "1 week", description: "Basic technical discussion and goal setting" },
    { icon: <Award className="w-6 h-6" />, title: "Onboarding", duration: "1 week", description: "Welcome session and learning path setup" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Start Learning", duration: "Ongoing", description: "Begin your AI + Full Stack journey" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.type === 'file') {
      setForm({ ...form, resume: (e.target as HTMLInputElement).files?.[0] || null });
    } else {
      setForm({ ...form, [e.target.id]: e.target.value });
    }
  };

  const handleSelect = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess('');
    setError('');
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === 'resume' && value) {
          formData.append('resume', value as File);
        } else if (key !== 'resume') {
          formData.append(key, value as string);
        }
      });
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/apply`, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSuccess('Application submitted successfully!');
        setForm({
          firstName: '', lastName: '', email: '', phone: '', program: '', experience: '', motivation: '', resume: null
        });
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to submit application.');
      }
    } catch (err) {
      setError('Failed to submit application.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Ready to <span className="flame-gradient bg-clip-text text-transparent">Transform</span> Your Career?
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Join our growing community of 20+ students who've completed their journey. Be part of our story!
          </p>
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <Button 
              size="lg" 
              className="flame-gradient hover-glow text-white font-bold px-12 py-4 text-xl transition-all duration-300 mb-4"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🌱 Join Our Growing Community - 75% OFF
            </Button>
            <p className="text-sm text-gray-400">
              🌱 Early bird pricing • 💳 EMI available • 🚀 Career guidance
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Alternative Options */}
          <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <Card className="bg-white dark:bg-slate-800/50 border-gray-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white text-2xl">Other Ways to Connect</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  For internships, partnerships, or general inquiries
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-900 dark:text-white">First Name</Label>
                      <Input id="firstName" className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white" placeholder="John" value={form.firstName} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-900 dark:text-white">Last Name</Label>
                      <Input id="lastName" className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white" placeholder="Doe" value={form.lastName} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-900 dark:text-white">Email Address</Label>
                    <Input id="email" type="email" className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white" placeholder="john@example.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 dark:text-white">Phone Number</Label>
                    <Input id="phone" className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="program" className="text-gray-900 dark:text-white">Inquiry Type</Label>
                    <Select value={form.program} onValueChange={v => handleSelect('program', v)}>
                      <SelectTrigger className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600">
                        <SelectItem value="internship">Internship Opportunity</SelectItem>
                        <SelectItem value="partnership">Business Partnership</SelectItem>
                        <SelectItem value="consultation">Course Consultation</SelectItem>
                        <SelectItem value="other">Other Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-gray-900 dark:text-white">Programming Experience</Label>
                    <Select value={form.experience} onValueChange={v => handleSelect('experience', v)}>
                      <SelectTrigger className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600">
                        <SelectItem value="beginner">Complete Beginner</SelectItem>
                        <SelectItem value="some">Some Experience</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="motivation" className="text-gray-900 dark:text-white">Message</Label>
                    <Textarea 
                      id="motivation" 
                      className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white" 
                      placeholder="Tell us about your inquiry or requirements..."
                      rows={4}
                      value={form.motivation}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Resume upload */}
                  <div>
                    <Label htmlFor="resume" className="text-gray-900 dark:text-white">Upload Resume (Optional)</Label>
                    <div className="mt-2">
                      <Input id="resume" type="file" accept=".pdf,.doc,.docx" className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white" onChange={handleChange} />
                      {form.resume && <span className="text-gray-600 dark:text-gray-300 ml-2">{(form.resume as File).name}</span>}
                    </div>
                  </div>
                  <Button className="w-full flame-gradient hover-glow text-white font-semibold py-3" type="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Send Message'}
                  </Button>
                  {success && <div className="text-green-400 text-center">{success}</div>}
                  {error && <div className="text-red-400 text-center">{error}</div>}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Application Process</h3>
            <div className="space-y-6">
              {timeline.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 border border-orange-500/30">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">{step.duration}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Benefits */}
            <div className="mt-12 bg-blue-50 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-green-500/10 p-6 rounded-xl border border-blue-200 dark:border-blue-500/30">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">🌱 Why Join Our Journey?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mr-3" />
                  Passionate mentors with real industry experience
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mr-3" />
                  Hands-on projects from day one
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mr-3" />
                  Career guidance and support
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mr-3" />
                  Growing community of learners
                </li>
              </ul>
              <div className="mt-6">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🌱 Join Our Community - 75% OFF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
