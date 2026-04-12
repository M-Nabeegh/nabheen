import React from 'react';
import { motion } from 'framer-motion';

const elements = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  size: Math.random() * 15 + 10,
  x: Math.random() * 100,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 20,
}));

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: '110vh', x: `${el.x}vw`, opacity: 0 }}
          animate={{
            y: '-10vh',
            x: `${el.x + (Math.random() * 20 - 10)}vw`,
            opacity: [0, 0.4, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'linear',
          }}
          className="absolute"
          style={{ width: el.size, height: el.size, fontSize: el.size * 1.5 }}
        >
           {el.id % 3 === 0 ? '🌹' : el.id % 2 === 0 ? '✨' : '💖'}
        </motion.div>
      ))}
    </div>
  );
}
