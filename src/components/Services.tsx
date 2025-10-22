
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Award, Wrench, GraduationCap, MessageCircle, Code, Database, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
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

  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learn AI + Full Stack",
      description: "Master React, Node.js, MongoDB, Python, and cutting-edge AI technologies with hands-on projects.",
      features: ["React & Node.js", "Python & AI/ML", "MongoDB & Databases", "Cloud Deployment"],
      color: "bg-blue-500/20 border-blue-500/30 text-blue-400"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Internships",
      description: "IBM-supported internship programs with certificate and badge tracking for career advancement.",
      features: ["Certificate Tracking", "Industry Mentorship", "Portfolio Building"],
      color: "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Client Project Development",
      description: "Work on real projects for schools, hotels, and businesses while building your portfolio.",
      features: ["Real Client Work", "Team Collaboration", "Project Management", "Client Communication"],
      color: "bg-purple-500/20 border-purple-500/30 text-purple-400"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Certificate Issuance",
      description: "Receive MSME-registered certificates with tool usage notes and industry recognition.",
      features: ["MSME Registered", "Industry Recognized", "Skill Verification", "Digital Badges"],
      color: "bg-orange-500/20 border-orange-500/30 text-orange-400"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Mentorship & Community",
      description: "Join our vibrant community with 24/7 support, peer learning, and expert guidance.",
      features: ["24/7 Support", "Peer Learning", "Expert Mentors", "Community Events"],
      color: "bg-pink-500/20 border-pink-500/30 text-pink-400"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            What We <span className="flame-gradient bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Comprehensive programs designed to transform you into a skilled AI and full-stack developer
          </p>
        </div>

        {/* Mobile: App-like Service Cards */}
        <div className="md:hidden space-y-6 px-2">
          {services.map((service, index) => {
            const iconMap = {
              "Learn AI + Full Stack": "🤖",
              "Certified Internships": "🏆",
              "Client Project Development": "🛠️",
              "Certificate Issuance": "🎓",
              "Mentorship & Community": "🤝"
            };
            
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden ${inView ? 'animate-slide-up' : 'opacity-0'} active:scale-95 transition-transform duration-200`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
                      {iconMap[service.title as keyof typeof iconMap] || "💼"}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                      <p className="text-white/80 text-sm">Professional Service</p>
                    </div>
                  </div>
                </div>

                {/* Service Body */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">What's Included</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: Original Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover-glow group ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: Tech Stack */}
        <div className={`md:hidden mt-8 px-2 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Technologies We Teach</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "⚙️", name: "Frontend", color: "from-blue-500 to-cyan-500" },
                { icon: "💾", name: "Backend", color: "from-green-500 to-emerald-500" },
                { icon: "🤖", name: "AI/ML", color: "from-purple-500 to-pink-500" }
              ].map((tech, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="text-sm font-semibold text-gray-700">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Original Tech Stack */}
        <div className={`hidden md:block mt-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Technologies We Teach</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-orange-500/50 transition-colors">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-orange-500/50 transition-colors">
              <Database className="w-8 h-8 text-green-400" />
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-orange-500/50 transition-colors">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
