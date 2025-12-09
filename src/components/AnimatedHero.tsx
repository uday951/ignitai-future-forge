import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Flame, Zap, Code, Play, Sparkles, ArrowRight, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Quiz from './Quiz';


const AnimatedHero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showQuiz, setShowQuiz] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  // Load Spline viewer
  useEffect(() => {
    if (!document.querySelector('script[src*="spline-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.12.6/build/spline-viewer.js';
      document.head.appendChild(script);
    }

    // Hide Spline watermark
    const style = document.createElement('style');
    style.textContent = `
      spline-viewer div[style*="position: absolute"][style*="bottom"],
      spline-viewer div[style*="position: fixed"][style*="bottom"],
      spline-viewer div[style*="right"],
      spline-viewer div[style*="bottom: 0"],
      spline-viewer div[style*="right: 0"],
      spline-viewer a[href*="spline"],
      spline-viewer a[target="_blank"],
      spline-viewer [class*="watermark"],
      spline-viewer [id*="watermark"],
      spline-viewer [class*="logo"],
      spline-viewer [class*="brand"],
      spline-viewer > div:last-child,
      spline-viewer canvas + div {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-800 w-full transition-colors duration-300 -mb-20 z-10"
    >
      {/* Spline 3D Background */}
      <div ref={splineRef} className="absolute inset-0 opacity-80 -z-10 overflow-hidden">
        <spline-viewer 
          url="https://prod.spline.design/N7z0IdtKV7L2Evqa/scene.splinecode"
          className="w-full h-[130%] -mb-[25%]"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Bottom Cover - Hide Logo */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 z-5 flex items-center justify-center border-t border-gray-200 dark:border-slate-700">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-2xl animate-bounce">🚀</span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-bold text-lg">
              Ready to Transform Your Future?
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm animate-pulse">
            Scroll down to discover amazing opportunities
          </p>
        </div>
      </div>

      {/* Mobile App-like Background - TEMPORARILY DISABLED */}
      <div className="absolute inset-0 hidden">
        {/* Desktop: Floating particles - TEMPORARILY DISABLED */}
        <div className="hidden">
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
        
        {/* Mobile: Clean gradient - TEMPORARILY DISABLED */}
        <div className="hidden absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-purple-500/10"></div>
        
        {/* Desktop: Interactive gradient orbs - TEMPORARILY DISABLED */}
        <div className="hidden">
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

      {/* Mobile: Premium App Experience */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pointer-events-none">
        <div className="md:hidden px-4 w-full max-w-sm mx-auto pointer-events-auto">


          {/* Interactive App Icon */}
          <div className="text-center mb-8 mt-8">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Flame size={48} className="text-white animate-pulse" />
                {/* App shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-3xl"></div>
              </div>
              {/* Notification badge */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
                !
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Ignivance</h1>
            <p className="text-gray-600 dark:text-white/70 text-sm mb-1">AI & Full Stack Training Platform</p>
            <div className="flex justify-center items-center gap-2 text-xs text-gray-500 dark:text-white/50">
              <span>⭐ 4.9</span>
              <span>•</span>
              <span>Education</span>
              <span>•</span>
              <span>Free</span>
            </div>
          </div>

          {/* Interactive Feature Showcase */}
          <div className="space-y-4 mb-8 w-full">
            {[
              { 
                icon: "🤖", 
                title: "AI Integration", 
                desc: "Learn cutting-edge AI technologies",
                color: "from-purple-500 to-pink-500",
                badge: "NEW"
              },
              { 
                icon: "💻", 
                title: "Full Stack Development", 
                desc: "Complete web development mastery",
                color: "from-blue-500 to-cyan-500",
                badge: "POPULAR"
              },
              { 
                icon: "🚀", 
                title: "Live Projects", 
                desc: "Build real-world applications",
                color: "from-green-500 to-emerald-500",
                badge: "HANDS-ON"
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-gray-200 dark:border-white/20 shadow-xl active:scale-95 transition-all duration-300"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-gray-900 dark:text-white font-bold text-lg">{feature.title}</h3>
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-white/70 text-sm">{feature.desc}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-yellow-400 text-xs">⭐</span>
                      ))}
                      <span className="text-gray-500 dark:text-white/50 text-xs ml-1">(4.9)</span>
                    </div>
                  </div>
                  <ChevronDown className="text-gray-400 dark:text-white/40 transform -rotate-90" size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* App Store Style Buttons */}
          <div className="space-y-4 mb-8 w-full">
            <button 
              onClick={() => setShowQuiz(true)}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 relative overflow-hidden mb-3"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
              <Brain size={20} />
              <div className="text-center">
                <div className="text-base font-bold">🧠 AI QUIZ CHALLENGE</div>
                <div className="text-xs opacity-90">Test HTML/CSS Skills • 2 Rounds</div>
              </div>
            </button>
            
            <button 
              onClick={scrollToCourses}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
              <Play size={20} />
              <div className="text-center">
                <div className="text-base font-bold">EXPLORE COURSES</div>
                <div className="text-xs opacity-90">Browse All Programs • Free Trial</div>
              </div>
            </button>
            
            <a
              href="https://chat.whatsapp.com/GsHEcQ9b73KGbJuTVevYrc"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="w-full bg-white/20 dark:bg-white/15 backdrop-blur-xl border-2 border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-semibold py-4 px-6 rounded-2xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-3">
                <Zap size={20} />
                <div className="text-center">
                  <div className="font-bold">JOIN COMMUNITY</div>
                  <div className="text-xs opacity-80">Connect with 20+ learners</div>
                </div>
              </button>
            </a>
          </div>

          {/* Stats Carousel */}
          <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 dark:border-white/20 mb-8 w-full">
            <div className="text-center mb-4">
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">🌱 Growing Together</h3>
              <p className="text-gray-600 dark:text-white/70 text-sm">Join our honest startup journey</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "20+", label: "Students", sublabel: "Completed" },
                { number: "100%", label: "Success", sublabel: "Rate" },
                { number: "4+", label: "Projects", sublabel: "Built" },
                { number: "24/7", label: "Support", sublabel: "Available" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 bg-gray-100 dark:bg-white/10 rounded-2xl">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                  <div className="text-gray-700 dark:text-white/80 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 dark:text-white/50 text-xs">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Swipe Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-gray-600 dark:text-white/60 text-sm bg-white/80 dark:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-200 dark:border-white/20">
              <ChevronDown size={16} className="animate-bounce" />
              <span>Swipe up to explore courses</span>
            </div>
          </div>
        </div>

        {/* Desktop: Original Content */}
        <div className="hidden md:block px-4 pointer-events-auto">
          {/* Desktop: Original Animated Logo */}
          <div className="flex mb-8 justify-center">
            <div className="relative">
              <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl animate-pulse">
                <Flame size={64} className="text-white" />
              </div>
              <div className="absolute inset-0 border-4 border-orange-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-2 border-2 border-red-500/20 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
            </div>
          </div>

          {/* Desktop: Typing Animation */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white min-h-[200px] flex items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                {typedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </h1>
          </div>

          {/* Desktop: Interactive Badges */}
          <div className="mb-8 space-y-4">
            <div className="flex justify-center gap-4 text-sm flex-wrap">
              {[
                { icon: <Sparkles size={16} />, text: "AI & Full Stack Training", color: "from-emerald-500 to-teal-500" },
                { icon: <Code size={16} />, text: "Live Projects", color: "from-blue-500 to-cyan-500" },
                { icon: <Zap size={16} />, text: "Growing Community", color: "from-purple-500 to-pink-500" }
              ].map((badge, i) => (
                <div 
                  key={i}
                  className={`bg-gradient-to-r ${badge.color} bg-opacity-20 backdrop-blur-sm text-gray-700 dark:text-white px-4 py-2 rounded-full border border-gray-200 dark:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center gap-2`}
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Original CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setShowQuiz(true)}
            >
              <Brain className="mr-2 group-hover:animate-pulse" size={20} />
              🧠 AI Quiz Challenge
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={scrollToCourses}
            >
              <Play className="mr-2 group-hover:animate-pulse" size={20} />
              Explore Courses
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <a
              href="https://chat.whatsapp.com/GsHEcQ9b73KGbJuTVevYrc"
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

          {/* Desktop: Scroll Indicator */}
          <div className="animate-bounce text-center">
            <ChevronDown 
              size={32} 
              className="text-orange-500 mx-auto cursor-pointer hover:text-orange-400 transition-colors"
              onClick={scrollToCourses}
            />
          </div>
        </div>
      </div>

      {/* Desktop: Animated Grid Background - TEMPORARILY DISABLED */}
      <div className="hidden absolute inset-0 opacity-10">
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
      
      {/* AI Quiz Modal */}
      <Quiz
        isOpen={showQuiz}
        onClose={() => setShowQuiz(false)}
      />
    </section>
  );
};

export default AnimatedHero;