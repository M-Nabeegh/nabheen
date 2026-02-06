import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="text-center px-4 relative z-10 max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <h1 className="font-cursive text-6xl md:text-8xl mb-6 text-white drop-shadow-md leading-tight">
                    Farheen,<br /> will you be my Valentine? <span className="text-red-200">❤️</span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-white/90 text-lg md:text-xl font-light mb-12"
            >
                No matter what, you’ll always have my heart.
            </motion.p>
        </div>
    );
};

export default Hero;
