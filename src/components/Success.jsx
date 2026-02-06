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
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center w-full max-w-4xl px-6 relative z-10 flex flex-col items-center"
        >
            <h2 className="font-cursive text-5xl md:text-7xl mb-8 leading-tight">
                You’ll always be my Valentine, <br />Farheen.
            </h2>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xl md:text-2xl font-light space-y-4"
            >
                <p>Today, tomorrow, and always.</p>
                <p>I love you more than words can ever say ❤️</p>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                onClick={onReset}
                className="mt-12 flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/80 transition-colors backdrop-blur-sm"
            >
                <RotateCcw size={16} />
                Relive it again
            </motion.button>
        </motion.div>
    );
};

export default Success;
