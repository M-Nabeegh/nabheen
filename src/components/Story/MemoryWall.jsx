import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Generate 25 stable pseudo-random properties to maintain structure across renders
const photos = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  src: `/story/wall/${i + 1}.png`,
  rotation: (Math.sin(i * 456) * 8).toFixed(1), // -8 to 8 degrees
  mt: (Math.cos(i * 789) * 20).toFixed(1), // Margin top offset
  ml: (Math.sin(i * 123) * 15).toFixed(1), // Margin left offset
}));

// Fallback component when image doesn't exist
const PlaceholderImage = ({ id }) => (
  <div className="w-full aspect-square bg-[#ffe6f0] flex flex-col items-center justify-center text-[#c2185b]/40 rounded-sm">
    <span className="text-3xl mb-2">📸</span>
    <span className="text-sm font-serif italic text-center px-2">Place image {id}.png here</span>
  </div>
);

const PhotoCard = ({ photo, index, isMobile }) => {
  const [error, setError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 5) * 0.1, type: "spring" }}
      style={{
        rotate: isMobile ? '0deg' : `${photo.rotation}deg`,
        marginTop: isMobile ? '0px' : `${photo.mt}px`,
        marginLeft: isMobile ? '0px' : `${photo.ml}px`,
      }}
      whileHover={{ 
        scale: isMobile ? 1.02 : 1.15, 
        rotate: "0deg", 
        zIndex: 50,
        boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.15)",
        y: isMobile ? -3 : -10
      }}
      className="relative bg-[#fffdfa] p-2 pb-8 sm:p-4 sm:pb-16 shadow-md sm:shadow-lg rounded-sm border border-black/5 transform-gpu transition-shadow duration-300 w-[42vw] max-w-[165px] sm:max-w-none sm:w-[220px] aspect-[4/5] flex-shrink-0"
    >
      {/* Tape/Pin */}
      <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-8 sm:w-16 h-3 sm:h-6 bg-white/60 backdrop-blur-md shadow-sm transform -rotate-2 border border-white/40 z-10" />

      {/* Image Container */}
      <div className="w-full h-full overflow-hidden bg-[#fff0f5] border border-black/5 rounded-sm">
        {!error ? (
          <img
            src={photo.src}
            alt={`Memory ${photo.id}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          <PlaceholderImage id={photo.id} />
        )}
      </div>

      {/* Decorative text on polaroid removed per user request */}
    </motion.div>
  );
};

export default function MemoryWall() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden bg-gradient-to-b from-[#fff0f5]/50 via-[#fdf5f0] to-[#fff0f5]/50 border-t border-[#fce4ec]">
      
      {/* Subtle background grain/texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
      </div>

      {/* Floating Sparkles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            className="text-[#f48fb1]"
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Aesthetic Threading Lines Background (Connecting lines) */}
      <svg className="absolute inset-0 w-full h-[150%] pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 100 Q 200 50, 400 300 T 800 500 T 1300 300" stroke="#c2185b" strokeWidth="1" fill="none" strokeDasharray="10 5" />
        <path d="M 0 500 Q 300 700, 600 400 T 1200 700 T 1600 500" stroke="#c2185b" strokeWidth="1" fill="none" strokeDasharray="8 4" />
        <path d="M -50 800 Q 200 900, 500 700 T 1000 1100 T 1500 800" stroke="#c2185b" strokeWidth="1" fill="none" strokeDasharray="12 6" />
        <path d="M 200 1200 Q 400 1000, 700 1300 T 1100 1000 T 1600 1200" stroke="#c2185b" strokeWidth="1" fill="none" strokeDasharray="5 5" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl sm:text-6xl text-[#880e4f] mb-4 drop-shadow-sm">Memory Wall</h2>
          <p className="text-[#c2185b] italic font-light text-lg sm:text-xl">Every picture holds a piece of us ❤️</p>
        </motion.div>

        {/* Scattered Photo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 max-w-6xl w-full">
          {photos.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} isMobile={isMobile} />
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.5 }}
           className="text-center mt-24 pb-12 relative"
        >
          <p className="font-serif text-3xl sm:text-5xl text-[#880e4f] drop-shadow-sm italic">
            Just the beginning of our scrapbook...
          </p>
        </motion.div>

      </div>
    </section>
  );
}
