
import { useEffect, useRef, useState } from 'react';
import { Quote, Linkedin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "TechCorp India",
      image: "👩‍💻",
      quote: "IgnitAI transformed my career! The hands-on projects and mentorship helped me land my dream job. The IBM certification gave me the edge I needed.",
      badges: ["IBM Full Stack", "React Developer", "AI Fundamentals"],
      rating: 5,
      linkedin: "#"
    },
    {
      name: "Rahul Patel",
      role: "AI Engineer",
      company: "DataMinds Solutions",
      image: "👨‍💻",
      quote: "The real-world projects at IgnitAI gave me confidence to work with clients. I built 3 production apps during my internship!",
      badges: ["Python AI/ML", "Cloud Computing", "Project Management"],
      rating: 5,
      linkedin: "#"
    },
    {
      name: "Anita Krishnan",
      role: "Frontend Developer",
      company: "DesignHub",
      image: "👩‍🎨",
      quote: "Amazing community and support! The mentors are always available, and the learning path is perfectly structured for beginners.",
      badges: ["React Specialist", "UI/UX", "Mobile Dev"],
      rating: 5,
      linkedin: "#"
    },
    {
      name: "Dev Malhotra",
      role: "Backend Developer",
      company: "ServerTech",
      image: "👨‍🔧",
      quote: "From zero to hero! I had no coding experience before IgnitAI. Now I'm building scalable applications for enterprise clients.",
      badges: ["Node.js Expert", "Database Design", "API Development"],
      rating: 5,
      linkedin: "#"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Student <span className="flame-gradient bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Hear from our graduates who are now thriving in their tech careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover-glow ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                      <a href={testimonial.linkedin} className="text-blue-400 hover:text-blue-300">
                        <Linkedin size={16} />
                      </a>
                    </div>
                    <p className="text-orange-400 font-medium">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 text-orange-500/30" size={24} />
                  <p className="text-gray-300 leading-relaxed pl-6 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {testimonial.badges.map((badge, idx) => (
                    <span key={idx} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs">
                      {badge}
                    </span>
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
                <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-gray-400">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">₹5.2L</div>
                <div className="text-gray-400">Avg. Package</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">4.8★</div>
                <div className="text-gray-400">Student Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-400">Certificate Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
