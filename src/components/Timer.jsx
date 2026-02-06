import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Timer = () => {
    const [timeElapsed, setTimeElapsed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const startDate = new Date('2025-04-16T00:00:00');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = now - startDate;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeElapsed({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-white/90 text-center"
        >
            <p className="text-sm uppercase tracking-widest mb-2 font-light">Together Since 16 April 2025</p>
            <div className="flex justify-center flex-wrap gap-4 text-center font-sans font-light">
                {[
                    { label: 'Days', value: timeElapsed.days },
                    { label: 'Hours', value: timeElapsed.hours },
                    { label: 'Minutes', value: timeElapsed.minutes },
                    { label: 'Seconds', value: timeElapsed.seconds }
                ].map((item) => (
                    <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
                        <span className="block text-2xl font-bold">{item.value}</span>
                        <span className="text-xs opacity-80">{item.label}</span>
                    </div>
                ))}
            </div>
            <p className="mt-2 text-xs italic opacity-75">Every second is lovely with you</p>
        </motion.div>
    );
};

export default Timer;
