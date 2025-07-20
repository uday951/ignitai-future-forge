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
          {/* <p className="text-xl md:text-2xl text-gray-300">
            MSME-registered
          </p> */}
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
          <a
            href="https://forms.gle/3vFn1MaHd9A9G9iN6" // TODO: Replace with actual Google Form URL
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg transition-all duration-300"
            >
              <Zap className="mr-2" size={20} />
              Start Internship
            </Button>
          </a>
        </div>
        {/* Caution Banner */}
        {/* <div className="flex justify-center mt-4">
          <span className="flex items-center gap-2 bg-yellow-500/20 text-yellow-700 border border-yellow-400 px-4 py-2 rounded-lg font-semibold shadow-md animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8.257 3.099c.764-1.36 2.722-1.36 3.486 0l6.518 11.614c.75 1.338-.213 3.037-1.742 3.037H3.48c-1.53 0-2.492-1.7-1.742-3.037L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V8a1 1 0 112 0v2a1 1 0 01-1 1z" clipRule="evenodd" /></svg>
            <span>DON'T APPLY INTERNSHIPS NOW &mdash; SERVER IS UNDER MAINTENANCE. WE WILL INFORM.</span>
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
