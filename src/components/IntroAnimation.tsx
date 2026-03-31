import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

const IntroAnimation = ({ children }: { children: React.ReactNode }) => {
  const [stage, setStage] = useState<'initial' | 'doors-opening' | 'done'>('initial');

  useEffect(() => {
    // Check if the user has already seen the intro this session
    const hasSeenIntro = sessionStorage.getItem('ignivance_intro_seen');
    
    if (!hasSeenIntro) {
      setStage('doors-opening');
      sessionStorage.setItem('ignivance_intro_seen', 'true');
    } else {
      setStage('done');
    }
  }, []);

  useEffect(() => {
    if (stage === 'doors-opening') {
      // Trigger the transition after the cinematic door reveal and logo scale
      const timer = setTimeout(() => {
        setStage('done');
      }, 2300); // Ensures total animation including navbar transition is under 3s limit
      return () => clearTimeout(timer);
    }
  }, [stage]);

  if (stage === 'initial') return null;

  const customEase = [0.22, 1, 0.36, 1] as const;
  const slowEase = [0.16, 1, 0.3, 1] as const;

  return (
    <>
      <AnimatePresence>
        {stage === 'doors-opening' && (
          <motion.div
            key="intro-doors"
            className="fixed inset-0 z-[9999] overflow-hidden bg-slate-50 flex items-center justify-center pointer-events-none"
            exit={{ 
              opacity: 0, 
              transition: { duration: 0.5, ease: customEase } 
            }}
          >
            {/* Left Door */}
            <motion.div 
              className="absolute top-0 left-0 w-1/2 h-full bg-[#050914] z-20 shadow-[20px_0_50px_rgba(0,0,0,0.8)]"
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.4, delay: 0.4, ease: slowEase }}
            />
            
            {/* Right Door */}
            <motion.div 
              className="absolute top-0 right-0 w-1/2 h-full bg-[#050914] z-20 shadow-[-20px_0_50px_rgba(0,0,0,0.8)]"
              initial={{ x: "0%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.4, delay: 0.4, ease: slowEase }}
            />

            {/* Center Light Crack/Glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[100%] bg-white blur-[4px] z-30 pointer-events-none"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 1], scaleX: [1, 2, 50] }}
              transition={{ duration: 1.2, delay: 0.1, times: [0, 0.4, 1], ease: customEase }}
            />
            
            {/* Expanding White Light Overload Behind Doors */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white shadow-[0_0_120px_80px_rgba(255,255,255,1)] rounded-full z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 15] }}
              transition={{ duration: 1.6, delay: 0.3, times: [0, 0.4, 1], ease: slowEase }}
            />

            {/* Premium Logo Reveal Sequence - Uses layoutId to connect with Navbar */}
            {/* Premium Logo Reveal Sequence - Uses layoutId to connect with Navbar */}
            <motion.div
              layoutId="brand-logo"
              className="relative z-10 flex items-center gap-2 origin-center drop-shadow-xl"
              initial={{ scale: 0.85, opacity: 0, filter: 'blur(10px)' }}
              animate={{ 
                scale: 1.8, 
                opacity: 1, 
                filter: 'blur(0px)',
              }}
              transition={{ 
                duration: 1.2, 
                delay: 0.6, 
                ease: customEase 
              }}
            >
              <div className="bg-blue-50 text-blue-600 p-2 rounded-xl shadow-lg">
                <Flame className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
              </div>
              <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                Ignivance
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content - Only mounts when stage is 'done', triggering layoutId transition to Navbar */}
      {stage === 'done' && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: customEase }}
          className="w-full min-h-screen relative flex flex-col isolate"
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default IntroAnimation;
