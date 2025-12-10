import { useEffect, useRef, useState } from 'react';
import { BookOpen, Award, Wrench, GraduationCap, MessageCircle } from 'lucide-react';
import PremiumCard from './premium/PremiumCard';

const PremiumServices = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: BookOpen,
      title: 'AI + Full Stack Training',
      desc: 'Master React, Node.js, MongoDB, Python, and AI technologies',
      features: ['React & Node.js', 'Python & AI/ML', 'Cloud Deployment']
    },
    {
      icon: Award,
      title: 'Certified Internships',
      desc: 'IBM-supported programs with certificate tracking',
      features: ['Industry Mentorship', 'Portfolio Building', 'Career Growth']
    },
    {
      icon: Wrench,
      title: 'Real Client Projects',
      desc: 'Work on actual projects for businesses and organizations',
      features: ['Team Collaboration', 'Project Management', 'Client Work']
    },
    {
      icon: GraduationCap,
      title: 'MSME Certificates',
      desc: 'Industry-recognized certificates with skill verification',
      features: ['Digital Badges', 'Skill Verification', 'Recognition']
    },
    {
      icon: MessageCircle,
      title: 'Mentorship & Support',
      desc: 'Join our community with 24/7 support and guidance',
      features: ['24/7 Support', 'Peer Learning', 'Expert Mentors']
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-transparent">

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">
              What We Offer
            </span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Comprehensive programs to transform you into a skilled developer
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <PremiumCard
              key={i}
              className={`group ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{service.desc}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </PremiumCard>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PremiumServices;
