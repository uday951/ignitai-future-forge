import { Award, Users, Target, Zap } from 'lucide-react';
import PremiumCard from './premium/PremiumCard';

const PremiumAbout = () => {

  const features = [
    { icon: Users, title: 'Expert Mentors', desc: 'Learn from industry professionals with real-world experience' },
    { icon: Target, title: 'Hands-on Projects', desc: 'Build real applications and strengthen your portfolio' },
    { icon: Zap, title: 'Career Support', desc: 'Job placement assistance and interview preparation' },
    { icon: Award, title: 'MSME Certified', desc: 'Receive industry-recognized certificates' }
  ];

  return (
    <section className="relative py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose Ignivance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A transparent, honest learning platform focused on practical skills
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <PremiumCard
              key={i}
              className="text-center"
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
        <div className="mt-20">
          <PremiumCard hover={false} className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '20+', label: 'Graduates' },
                { number: '100%', label: 'Success Rate' },
                { number: '4+', label: 'Live Projects' },
                { number: 'MSME', label: 'Registered' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
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
