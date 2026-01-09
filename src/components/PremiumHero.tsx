import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import PremiumButton from './premium/PremiumButton';
import Quiz from './Quiz';

const PremiumHero = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Content - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-white">AI-Powered Learning</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">
              Ignite Your Future
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Master AI & Full Stack Development with hands-on projects and expert mentorship
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
            <PremiumButton size="lg" onClick={scrollToCourses}>
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </PremiumButton>
            
            <PremiumButton variant="secondary" size="lg" onClick={() => setShowQuiz(true)}>
              Take AI Quiz
            </PremiumButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: '20+', label: 'Students' },
              { value: '100%', label: 'Success' },
              { value: '4+', label: 'Projects' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Quiz isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
    </section>
  );
};

export default PremiumHero;
