import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Zap } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 800; // Show after scrolling 800px
      
      if (scrolled > threshold && !isDismissed) {
        setIsVisible(true);
      } else if (scrolled <= threshold) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleEnrollClick = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
    setIsDismissed(true);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 shadow-2xl border border-orange-400/30 max-w-sm">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-gray-800 text-gray-400 hover:text-white rounded-full p-1 transition-colors"
        >
          <X size={16} />
        </button>
        
        <div className="text-white">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={20} className="text-yellow-300" />
            <span className="font-bold text-sm">EARLY BIRD!</span>
          </div>
          <h3 className="font-bold text-lg mb-1">75% OFF Courses</h3>
          <p className="text-sm text-orange-100 mb-3">
            Join our growing community
          </p>
          <Button 
            className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-2 transition-all duration-300"
            onClick={handleEnrollClick}
          >
            🌱 Join Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;