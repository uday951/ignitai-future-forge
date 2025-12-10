import { useEffect, useRef, useState } from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';
import PremiumCard from './premium/PremiumCard';

const PremiumAbout = () => {
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

  const features = [
    { icon: Users, title: 'Expert Mentors', desc: 'Learn from industry professionals with real-world experience' },
    { icon: Target, title: 'Hands-on Projects', desc: 'Build real applications and strengthen your portfolio' },
    { icon: Zap, title: 'Career Support', desc: 'Job placement assistance and interview preparation' },
    { icon: Award, title: 'MSME Certified', desc: 'Receive industry-recognized certificates' }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">
              Why Choose Ignivance
            </span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            A transparent, honest learning platform focused on practical skills
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <PremiumCard
              key={i}
              className={`text-center ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </PremiumCard>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-20 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <PremiumCard hover={false} className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '20+', label: 'Graduates' },
                { number: '100%', label: 'Success Rate' },
                { number: '4+', label: 'Live Projects' },
                { number: 'MSME', label: 'Registered' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </PremiumCard>
        </div>
      </div>

    </section>
  );
};

export default PremiumAbout;
