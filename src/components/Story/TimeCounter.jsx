import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimeCounter = ({ startDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const start = new Date(startDate).getTime();

    const updateCounter = () => {
      const now = new Date().getTime();
      const difference = now - start;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 sm:mb-16"
    >
      <div className="flex flex-col items-center p-3 sm:p-5 bg-white/50 backdrop-blur-md rounded-2xl border border-[#f8bbd0] shadow-sm min-w-[70px] sm:min-w-[100px]">
        <span className="text-3xl sm:text-5xl font-serif text-[#880e4f]">{timeLeft.days}</span>
        <span className="text-xs sm:text-sm text-[#c2185b] uppercase tracking-widest mt-1">Days</span>
      </div>
      <div className="flex flex-col items-center p-3 sm:p-5 bg-white/50 backdrop-blur-md rounded-2xl border border-[#f8bbd0] shadow-sm min-w-[70px] sm:min-w-[100px]">
        <span className="text-3xl sm:text-5xl font-serif text-[#880e4f]">{timeLeft.hours}</span>
        <span className="text-xs sm:text-sm text-[#c2185b] uppercase tracking-widest mt-1">Hours</span>
      </div>
      <div className="flex flex-col items-center p-3 sm:p-5 bg-white/50 backdrop-blur-md rounded-2xl border border-[#f8bbd0] shadow-sm min-w-[70px] sm:min-w-[100px]">
        <span className="text-3xl sm:text-5xl font-serif text-[#880e4f]">{timeLeft.minutes}</span>
        <span className="text-xs sm:text-sm text-[#c2185b] uppercase tracking-widest mt-1">Mins</span>
      </div>
      <div className="flex flex-col items-center p-3 sm:p-5 bg-white/50 backdrop-blur-md rounded-2xl border border-[#f8bbd0] shadow-sm min-w-[70px] sm:min-w-[100px]">
        <span className="text-3xl sm:text-5xl font-serif text-[#880e4f]">{timeLeft.seconds}</span>
        <span className="text-xs sm:text-sm text-[#c2185b] uppercase tracking-widest mt-1">Secs</span>
      </div>
    </motion.div>
  );
};

export default TimeCounter;
