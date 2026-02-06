import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Entrance = ({ onEnter }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
        >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onEnter}
                className="group relative flex flex-col items-center justify-center p-12 rounded-full cursor-pointer"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="bg-white/10 p-6 rounded-full border border-white/20 backdrop-blur-sm relative z-10"
                    >
                        <Mail size={48} className="text-white drop-shadow-lg" />
                        <div className="absolute -top-1 -right-1">
                            <span className="flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                            </span>
                        </div>
                    </motion.div>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-2xl font-light text-white tracking-widest uppercase"
                >
                    Click to Open
                </motion.h2>
                <p className="text-white/60 text-sm mt-2 font-light italic">A surprise awaits...</p>
            </motion.button>
        </motion.div>
    );
};

export default Entrance;
