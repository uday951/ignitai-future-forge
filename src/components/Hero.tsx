
import { useState, useEffect } from 'react';
import { ChevronDown, Flame, Zap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "Ignite Your Future with AI + Full Stack",
    "Transform Ideas into Reality",
    "Build Tomorrow's Solutions Today"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-navy via-slate-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-500 rounded-full animate-float"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-yellow-500 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full ember-glow">
            <Flame size={48} className="text-white" />
          </div>
        </div>

        {/* Main Headline with Typing Effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="flame-gradient bg-clip-text text-transparent typing-effect">
            {phrases[currentPhrase]}
          </span>
        </h1>

        {/* Subheadline */}
        <div className="mb-8 space-y-4">
          <p className="text-xl md:text-2xl text-gray-300">
            MSME-registered | IBM, Google, Microsoft Partner
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
              AI & Full Stack Training
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
              Certified Internships
            </span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
              Real Projects
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="flame-gradient hover-glow text-white font-semibold px-8 py-4 text-lg transition-all duration-300"
          >
            <Code className="mr-2" size={20} />
            Explore Courses
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg transition-all duration-300"
          >
            <Zap className="mr-2" size={20} />
            Start Internship
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-orange-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
