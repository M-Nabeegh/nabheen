import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    // Generate random hearts
    const hearts = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 30 + 10,
        left: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
    }));

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-pink-300 opacity-20"
                    initial={{ y: "110vh", x: `${heart.left}vw` }}
                    animate={{ y: "-10vh" }}
                    transition={{
                        duration: heart.duration,
                        ease: "linear",
                        repeat: Infinity,
                        delay: heart.delay
                    }}
                    style={{ fontSize: heart.size }}
                >
                    ❤️
                </motion.div>
            ))}
            <div className="absolute inset-0 bg-black/10"></div> {/* Very subtle overlay for contrast */}
        </div>
    );
};

export default Background;
