import { useEffect, useRef, useState } from 'react';
import { Quote, Linkedin, Star, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Feedback = {
  name: string;
  role: string;
  quote: string;
  badges: string[];
  rating: number;
  linkedin: string;
  image: string;
  company?: string;
  createdAt?: string;
};

const InteractiveTestimonials = () => {
  const [inView, setInView] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://ignitaibackend.onrender.com';
      console.log('Fetching from:', `${apiUrl}/api/feedback`);
      
      const res = await fetch(`${apiUrl}/api/feedback`);
      console.log('Response status:', res.status);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      console.log('Fetched data:', data);
      setFeedbacks(data);
    } catch (error) {
      console.error('Fetch error:', error);
      // No fallback - only show real testimonials
      setFeedbacks([]);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
    // Refresh testimonials every 30 seconds to show new submissions
    const interval = setInterval(fetchFeedbacks, 30000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying && feedbacks.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, feedbacks.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Student <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Real experiences from our growing community of learners
          </p>
        </div>

        {/* Mobile: Single Testimonial Slider */}
        <div className="md:hidden px-2 mb-16">
          {feedbacks.length > 0 ? (
            <div className="relative">
              {/* Single Testimonial Card */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {feedbacks.map((feedback, idx) => (
                    <div
                      key={idx}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className={`bg-white rounded-3xl shadow-xl p-6 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
                        {/* Profile Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center overflow-hidden text-2xl shadow-lg">
                            {feedback.image ? (
                              <img
                                src={feedback.image?.startsWith('/uploads/') ? `${import.meta.env.VITE_API_URL}${feedback.image}` : feedback.image}
                                alt={feedback.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span>👤</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-gray-900">{feedback.name}</h3>
                              {feedback.linkedin && (
                                <a href={feedback.linkedin} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                                  <Linkedin size={16} />
                                </a>
                              )}
                            </div>
                            <p className="text-orange-600 font-semibold text-sm">{feedback.role}</p>
                            {feedback.company && <p className="text-gray-500 text-xs">{feedback.company}</p>}
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(feedback.rating || 5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Quote */}
                        <div className="mb-4">
                          <p className="text-gray-700 leading-relaxed text-sm italic">
                            "{feedback.quote}"
                          </p>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {(feedback.badges || []).map((badge, badgeIdx) => (
                            <span key={badgeIdx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {feedbacks.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentSlide 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {/* Mobile Share Story Button */}
              <div className="mt-6">
                <button 
                  onClick={() => document.getElementById('share-story')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-3xl shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  ✨ Share Your Success Story
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-6xl mb-4">🌱</div>
              <p className="text-gray-600 font-semibold mb-4">Be the first to share your success story!</p>
              <button 
                onClick={() => document.getElementById('share-story')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-3xl shadow-xl active:scale-95 transition-all duration-200"
              >
                ✨ Share Your Story
              </button>
            </div>
          )}
        </div>

        {/* Desktop: Original Carousel */}
        <div className="hidden md:block">
          {feedbacks.length > 0 ? (
            <div className="relative max-w-4xl mx-auto mb-16">
              <Card className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-600 hover:border-orange-500/50 transition-all duration-500 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
                <CardContent className="p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center overflow-hidden text-4xl shadow-xl">
                      {feedbacks[currentSlide]?.image ? (
                        <img
                          src={feedbacks[currentSlide].image?.startsWith('/uploads/') ? `${import.meta.env.VITE_API_URL}${feedbacks[currentSlide].image}` : feedbacks[currentSlide].image}
                          alt={feedbacks[currentSlide].name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span role="img" aria-label="avatar">👤</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{feedbacks[currentSlide]?.name}</h3>
                        {feedbacks[currentSlide]?.linkedin && (
                          <a href={feedbacks[currentSlide].linkedin} className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} />
                          </a>
                        )}
                      </div>
                      <p className="text-orange-400 font-semibold text-lg">{feedbacks[currentSlide]?.role}</p>
                      {feedbacks[currentSlide]?.company && <p className="text-gray-400">{feedbacks[currentSlide].company}</p>}
                    </div>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(feedbacks[currentSlide]?.rating || 5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-4 text-orange-500/30" size={32} />
                    <p className="text-gray-300 leading-relaxed text-lg pl-8 italic">
                      "{feedbacks[currentSlide]?.quote}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {(feedbacks[currentSlide]?.badges || []).map((badge, idx) => (
                      <span key={idx} className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                        {badge}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  disabled={feedbacks.length <= 1}
                >
                  <ChevronLeft size={20} />
                </Button>

                <div className="flex gap-2">
                  {feedbacks.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentSlide 
                          ? 'bg-orange-500 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  disabled={feedbacks.length <= 1}
                >
                  <ChevronRight size={20} />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleAutoPlay}
                  className="border-blue-500/50 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ml-4"
                >
                  {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 mb-16">
              <p className="text-lg">🌱 Be the first to share your success story!</p>
            </div>
          )}
        </div>

        {/* Interactive Stats */}
        <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">🌱 Our Honest Journey</h3>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {[
                { number: "20", label: "Students Completed", desc: "First batch success", color: "from-blue-500 to-cyan-500" },
                { number: "4+", label: "Projects Built", desc: "Real applications", color: "from-green-500 to-emerald-500" },
                { number: "New", label: "Startup", desc: "Growing together", color: "from-purple-500 to-pink-500" },
                { number: "100%", label: "Completion Rate", desc: "First batch", color: "from-orange-500 to-red-500" }
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-pointer">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>
            
            {/* Growth CTA */}
            <div className="text-center border-t border-slate-600 pt-8">
              <h4 className="text-xl font-bold text-white mb-3">Ready to Grow With Us?</h4>
              <p className="text-gray-300 mb-6">Join our journey as we build something amazing together!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🌱 Join Our Growing Community
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm w-full"
                  onClick={() => document.getElementById('share-story')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ✨ Share Your Story
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                🌱 Early bird pricing • 💰 75% discount • 🚀 Growing together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTestimonials;