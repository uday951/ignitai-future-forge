import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import PremiumButton from './premium/PremiumButton';
import Quiz from './Quiz';

const PremiumHero = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      {/* Spline 3D Model - Right Side */}
      <div className="absolute -right-20 top-[45%] -translate-y-1/2 w-full md:w-3/5 h-full opacity-60 dark:opacity-40">
        <div className="w-full h-full scale-150 origin-center">
          <Spline scene="https://prod.spline.design/16Y330PfL6UaHpiV/scene.splinecode" />
        </div>
      </div>

      {/* Content - Left Side */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-premium-950/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full px-5 py-2.5 mb-8 shadow-lg animate-fade-in">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">AI-Powered Learning</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
              Ignite Your Future
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Master AI & Full Stack Development with hands-on projects and expert mentorship
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <PremiumButton size="lg" onClick={scrollToCourses}>
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </PremiumButton>
            
            <PremiumButton variant="secondary" size="lg" onClick={() => setShowQuiz(true)}>
              Take AI Quiz
            </PremiumButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { value: '20+', label: 'Students' },
              { value: '100%', label: 'Success' },
              { value: '4+', label: 'Projects' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 dark:bg-premium-950/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-gray-800 shadow-lg">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
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
