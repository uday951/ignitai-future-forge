
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
      features: ["IBM SkillsBuild", "Certificate Tracking", "Industry Mentorship", "Portfolio Building"],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Tech Stack Icons */}
        <div className={`mt-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
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
