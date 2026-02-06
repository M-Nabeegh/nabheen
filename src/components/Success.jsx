import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RotateCcw } from 'lucide-react';

const Success = ({ onReset }) => {
    useEffect(() => {
        // Trigger confetti on mount
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1.5,
                delayChildren: 0.5
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center w-full max-w-4xl px-6 relative z-10 flex flex-col items-center"
        >
            <motion.p variants={item} className="font-cursive text-5xl md:text-7xl mb-6 text-pink-100 drop-shadow-lg leading-tight">
                Farheen,<br /> this was never a question.
            </motion.p>

            <motion.p variants={item} className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-wide">
                You were always the answer.
            </motion.p>

            <motion.p variants={item} className="font-cursive text-4xl md:text-6xl text-red-100 mt-4 drop-shadow-md">
                Happy Valentine’s Day ❤️
            </motion.p>

            <motion.button
                variants={item}
                onClick={onReset}
                className="mt-16 flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/60 transition-colors backdrop-blur-sm"
            >
                <RotateCcw size={16} />
                Relive it again
            </motion.button>
        </motion.div>
    );
};

export default Success;
