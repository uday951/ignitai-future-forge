import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Flame, Zap, Code, Play, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedHero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const phrases = [
    "Ignite Your Future with AI + Full Stack",
    "Transform Ideas into Reality",
    "Build Tomorrow's Solutions Today"
  ];

  // Typing animation
  useEffect(() => {
    const currentPhraseText = phrases[currentPhrase];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < currentPhraseText.length) {
        setTypedText(currentPhraseText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
            setTypedText('');
            setIsTyping(true);
          }, 1000);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentPhrase]);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black"
    >
      {/* Mobile App-like Background */}
      <div className="absolute inset-0">
        {/* Desktop: Floating particles */}
        <div className="hidden md:block">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Mobile: Clean gradient */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-purple-500/10"></div>
        
        {/* Desktop: Interactive gradient orbs */}
        <div className="hidden md:block">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-transform duration-1000"
            style={{
              transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`
            }}
          />
          <div 
            className="absolute w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl transition-transform duration-1000"
            style={{
              right: 0,
              bottom: 0,
              transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
            }}
          />
        </div>
      </div>

      {/* Mobile App-like Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        {/* Mobile: App-like Header Card */}
        <div className="md:hidden mb-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Flame size={40} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">IgnitAI</h1>
              <p className="text-white/80 text-sm mb-4">AI & Full Stack Training</p>
              <div className="flex justify-center gap-2 mb-4">
                {["🚀", "💻", "🤖"].map((emoji, i) => (
                  <span key={i} className="text-lg">{emoji}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Original Animated Logo */}
        <div className="hidden md:flex mb-8 justify-center">
          <div className="relative">
            <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl animate-pulse">
              <Flame size={64} className="text-white" />
            </div>
            <div className="absolute inset-0 border-4 border-orange-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute inset-2 border-2 border-red-500/20 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          </div>
        </div>

        {/* Mobile: Simplified Headline */}
        <div className="md:hidden text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Transform Your Future
            </span>
          </h2>
          <p className="text-white/80 text-lg mb-6">Learn AI & Full Stack Development</p>
        </div>

        {/* Desktop: Typing Animation */}
        <div className="hidden md:block mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white min-h-[200px] flex items-center justify-center">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              {typedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </h1>
        </div>

        {/* Mobile: Feature Cards */}
        <div className="md:hidden space-y-4 mb-8">
          {[
            { icon: "🤖", title: "AI Integration", desc: "Learn cutting-edge AI" },
            { icon: "💻", title: "Full Stack", desc: "Complete web development" },
            { icon: "🚀", title: "Live Projects", desc: "Build real applications" }
          ].map((feature, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 active:scale-95 transition-transform duration-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Interactive Badges */}
        <div className="hidden md:block mb-8 space-y-4">
          <div className="flex justify-center gap-4 text-sm flex-wrap">
            {[
              { icon: <Sparkles size={16} />, text: "AI & Full Stack Training", color: "from-emerald-500 to-teal-500" },
              { icon: <Code size={16} />, text: "Live Projects", color: "from-blue-500 to-cyan-500" },
              { icon: <Zap size={16} />, text: "Growing Community", color: "from-purple-500 to-pink-500" }
            ].map((badge, i) => (
              <div 
                key={i}
                className={`bg-gradient-to-r ${badge.color} bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center gap-2`}
              >
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: App-like CTA Buttons */}
        <div className="md:hidden space-y-4 mb-8">
          <button 
            onClick={scrollToCourses}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-3"
          >
            <Play size={20} />
            <span>Explore Courses</span>
            <ArrowRight size={20} />
          </button>
          
          <a
            href="https://forms.gle/3vFn1MaHd9A9G9iN6"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <button className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold py-4 px-6 rounded-2xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-3">
              <Zap size={20} />
              <span>Join Community</span>
            </button>
          </a>
        </div>

        {/* Desktop: Original CTA Buttons */}
        <div className="hidden md:flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={scrollToCourses}
          >
            <Play className="mr-2 group-hover:animate-pulse" size={20} />
            Explore Interactive Courses
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          
          <a
            href="https://forms.gle/3vFn1MaHd9A9G9iN6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Zap className="mr-2 group-hover:animate-bounce" size={20} />
              Join Community
            </Button>
          </a>
        </div>

        {/* Mobile: Swipe Indicator */}
        <div className="md:hidden text-center">
          <div className="inline-flex items-center gap-2 text-white/60 text-sm">
            <ChevronDown size={20} className="animate-bounce" />
            <span>Swipe up to explore</span>
          </div>
        </div>

        {/* Desktop: Scroll Indicator */}
        <div className="hidden md:block animate-bounce text-center">
          <ChevronDown 
            size={32} 
            className="text-orange-500 mx-auto cursor-pointer hover:text-orange-400 transition-colors"
            onClick={scrollToCourses}
          />
        </div>
      </div>

      {/* Desktop: Animated Grid Background */}
      <div className="hidden md:block absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div 
              key={i}
              className="border border-orange-500/20 hover:bg-orange-500/10 transition-colors duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;