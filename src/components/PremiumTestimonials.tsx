import { useEffect, useRef, useState } from 'react';
import { Quote, Linkedin, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import PremiumCard from './premium/PremiumCard';
import PremiumButton from './premium/PremiumButton';

type Feedback = {
  name: string;
  role: string;
  quote: string;
  badges: string[];
  rating: number;
  linkedin: string;
  image: string;
  company?: string;
};

const PremiumTestimonials = () => {
  const [inView, setInView] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://ignitaibackend.onrender.com';
      const res = await fetch(`${apiUrl}/api/feedback`);
      if (res.ok) {
        const data = await res.json();
        setFeedbacks(data);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setFeedbacks([]);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
    const interval = setInterval(fetchFeedbacks, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (feedbacks.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [feedbacks.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  return (
    <section ref={ref} className="relative py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Real experiences from our growing community
          </p>
        </div>

        {feedbacks.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <PremiumCard className={`${inView ? 'animate-scale-in' : 'opacity-0'} mb-8`}>
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {feedbacks[currentSlide]?.image ? (
                    <img
                      src={feedbacks[currentSlide].image?.startsWith('/uploads/') ? `${import.meta.env.VITE_API_URL}${feedbacks[currentSlide].image}` : feedbacks[currentSlide].image}
                      alt={feedbacks[currentSlide].name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">👤</span>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{feedbacks[currentSlide]?.name}</h3>
                    {feedbacks[currentSlide]?.linkedin && (
                      <a href={feedbacks[currentSlide].linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">{feedbacks[currentSlide]?.role}</p>
                  {feedbacks[currentSlide]?.company && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{feedbacks[currentSlide].company}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(feedbacks[currentSlide]?.rating || 5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 text-purple-500/20" size={32} />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg pl-8 italic">
                  "{feedbacks[currentSlide]?.quote}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(feedbacks[currentSlide]?.badges || []).map((badge, idx) => (
                  <span key={idx} className="bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </PremiumCard>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                disabled={feedbacks.length <= 1}
                className="w-12 h-12 rounded-full bg-white dark:bg-premium-950 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:border-purple-500 hover:scale-110 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>

              <div className="flex gap-2">
                {feedbacks.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'bg-purple-500 w-8' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={feedbacks.length <= 1}
                className="w-12 h-12 rounded-full bg-white dark:bg-premium-950 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:border-purple-500 hover:scale-110 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <PremiumCard>
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Be the First!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Share your success story with our community</p>
              <PremiumButton onClick={() => document.getElementById('share-story')?.scrollIntoView({ behavior: 'smooth' })}>
                Share Your Story
              </PremiumButton>
            </PremiumCard>
          </div>
        )}

        {/* Stats */}
        <div className={`mt-20 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <PremiumCard hover={false} className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our Growing Journey</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-8">
              {[
                { number: "20+", label: "Students" },
                { number: "4+", label: "Projects" },
                { number: "New", label: "Startup" },
                { number: "100%", label: "Success" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="text-center border-t border-purple-200 dark:border-purple-800 pt-6">
              <PremiumButton onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
                Join Our Community
              </PremiumButton>
            </div>
          </PremiumCard>
        </div>
      </div>

    </section>
  );
};

export default PremiumTestimonials;
