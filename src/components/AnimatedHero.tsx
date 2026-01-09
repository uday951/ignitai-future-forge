import { useState } from 'react';
import { Brain, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Quiz from './Quiz';

const AnimatedHero = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 -mb-20">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center">
        {/* Mobile */}
        <div className="md:hidden">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🔥</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Ignivance</h1>
          <p className="text-gray-300 text-lg mb-8">AI & Full Stack Training Platform</p>
          
          <div className="space-y-4 max-w-sm mx-auto">
            <Button 
              onClick={() => setShowQuiz(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl"
            >
              <Brain size={20} className="mr-2" />
              AI Quiz Challenge
            </Button>
            
            <Button 
              onClick={scrollToCourses}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-4 rounded-xl"
            >
              <Play size={20} className="mr-2" />
              Explore Courses
            </Button>
            
            <a href="https://chat.whatsapp.com/GsHEcQ9b73KGbJuTVevYrc" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="w-full border-2 border-white/20 text-white py-4 rounded-xl">
                <Zap size={20} className="mr-2" />
                Join Community
              </Button>
            </a>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl">🔥</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Ignite Your Future with <span className="text-orange-500">AI + Full Stack</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Master AI and Full Stack development with hands-on projects and expert guidance
          </p>
          
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowQuiz(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 text-lg rounded-xl"
            >
              <Brain size={20} className="mr-2" />
              AI Quiz Challenge
            </Button>
            
            <Button 
              size="lg"
              onClick={scrollToCourses}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold px-8 py-4 text-lg rounded-xl"
            >
              <Play size={20} className="mr-2" />
              Explore Courses
            </Button>
            
            <a href="https://chat.whatsapp.com/GsHEcQ9b73KGbJuTVevYrc" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white px-8 py-4 text-lg rounded-xl"
              >
                <Zap size={20} className="mr-2" />
                Join Community
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center border-t border-slate-700">
        <p className="text-gray-400 text-sm">
          🚀 Ready to Transform Your Future? Scroll down to discover opportunities
        </p>
      </div>
      
      <Quiz isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
    </section>
  );
};

export default AnimatedHero;