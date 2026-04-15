import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reasons = [
  "your smile", "the way you care", "your innocence", "your laugh", 
  "how you remember little things", "your hugs", "your voice", "your efforts", 
  "your loyalty", "your calm nature", "your presence", "my peace", 
  "my safe place", "my happiness", "the way you support me", 
  "the way you look at me", "our memories", "your love for family", 
  "everything about you", "how you comfort me", "your beautiful eyes",
  "the way you listen", "your warm heart", "our endless talks", "our future"
];

// Pre-compute stable random values for floating reasons
const floatingElements = reasons.map((text, i) => {
  // Use math based on index to keep SSR/Client stable, or just random since this doesn't re-render often
  const xStart = (Math.sin(i * 123) * 50) + 50; // 0 to 100%
  const delay = Math.cos(i * 321) * 5 + 5; // positive delay
  const duration = (Math.sin(i * 456) * 10) + 20; // 10 to 30s
  const size = (Math.cos(i * 789) * 0.5) + 1; // 0.5 to 1.5 rem scaling roughly
  const zIndex = i % 3; // For depth/blur
  
  return { text, xStart, delay, duration, size, zIndex };
});

const stars = Array.from({ length: 150 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  opacity: Math.random() * 0.7 + 0.3,
  delay: `${Math.random() * 4}s`
}));

export default function FinalEnding() {
  const [stage, setStage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Trigger when at least 50% of the ending is visible
      if (entry.isIntersecting && stage === 0) {
        setStage(1);
      }
    }, { threshold: 0.5 });
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [stage]);

  useEffect(() => {
    if (stage === 1) {
      const timer = setTimeout(() => setStage(2), 6000);
      return () => clearTimeout(timer);
    }
    if (stage === 2) {
      const timer = setTimeout(() => setStage(3), 5000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100vh] sm:h-[120vh] overflow-hidden flex flex-col items-center justify-center transition-colors duration-1000"
      style={{
         background: stage >= 3 
            ? 'linear-gradient(to bottom, #11081a, #05020a)' 
            : 'linear-gradient(to bottom, transparent, #200f2e, #0a050f)',
         backgroundColor: stage >= 3 ? '#05020a' : '#1a0b26'
      }}
    >
      
      {/* Dynamic Starry Sky Layer */}
      <AnimatePresence>
        {stage >= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="absolute inset-0 pointer-events-none"
          >
            {stars.map(star => (
              <motion.div
                key={star.id}
                animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: parseFloat(star.delay) }}
                className="absolute bg-white rounded-full"
                style={{
                  left: star.left,
                  top: star.top,
                  width: star.size,
                  height: star.size,
                  boxShadow: `0 0 ${parseFloat(star.size) * 2}px rgba(255,255,255,0.8)`
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Reasons Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {stage >= 1 && stage < 3 && floatingElements.map((el, i) => {
            const isBlurry = el.zIndex === 0;
            const isMedium = el.zIndex === 1;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: '100vh' }}
                animate={{ 
                  opacity: [0, 0.4, 0.8, 0.4, 0], 
                  y: '-20vh',
                  x: [`${el.xStart}%`, `${el.xStart + (i % 2 === 0 ? 5 : -5)}%`]
                }}
                transition={{ 
                  duration: el.duration, 
                  ease: "linear", 
                  repeat: Infinity,
                  delay: el.delay 
                }}
                className={`absolute font-serif text-white/70 whitespace-nowrap
                   ${isBlurry ? 'blur-[2px] text-sm' : isMedium ? 'blur-[0.5px] text-base' : 'text-lg drop-shadow-md'}
                `}
                style={{ 
                  left: `${el.xStart}%`, 
                  transform: `scale(${el.size})`
                }}
              >
                {el.text}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Center Cinematic Typography Sequence */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full">
        <AnimatePresence mode="wait">
          
          {stage === 1 && (
            <motion.div
              key="phase1"
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#fce4ec] tracking-wide leading-relaxed drop-shadow-[0_0_15px_rgba(252,228,236,0.3)]">
                I love you for a million reasons…
              </h2>
              <p className="mt-6 font-serif text-xl sm:text-3xl text-[#f48fb1] italic font-light">
                and I’m still discovering more.
              </p>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] tracking-wider">
                Happy 1 Year ❤️
              </h1>
            </motion.div>
          )}

          {stage >= 3 && (
            <motion.div
              key="phase3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, delay: 1 }}
              className="absolute bottom-20 sm:bottom-32 flex flex-col items-center justify-center"
            >
              <p className="font-serif text-2xl sm:text-4xl text-white/90 italic tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                under this sky forever.
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Gentle Scroll Hint for those who reach early but wait */}
      {stage === 0 && (
        <div className="absolute inset-x-0 top-1/4 flex justify-center text-[#fce4ec]/40 font-serif italic">
          <p className="animate-pulse">Scroll to the end...</p>
        </div>
      )}

    </section>
  );
}
