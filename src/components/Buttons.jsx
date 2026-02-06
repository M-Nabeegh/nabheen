import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Buttons = ({ onYes }) => {
    const [noBtnState, setNoBtnState] = useState({
        x: 0,
        y: 0,
        isMoved: false
    });
    const buttonRef = useRef(null);

    const moveNoButton = () => {
        if (!buttonRef.current) return;

        const btnWidth = buttonRef.current.offsetWidth;
        const btnHeight = buttonRef.current.offsetHeight;

        // Safety padding
        const padding = 20;

        // Viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate valid range for top-left corner
        // min = padding
        // max = viewport - btnSize - padding
        const maxX = viewportWidth - btnWidth - padding;
        const maxY = viewportHeight - btnHeight - padding;

        const x = Math.max(padding, Math.random() * maxX);
        const y = Math.max(padding, Math.random() * maxY);

        setNoBtnState({ x, y, isMoved: true });
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-8 relative z-50">
            <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(255, 255, 255, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    scale: [1, 1.05, 1],
                    transition: { repeat: Infinity, duration: 2 }
                }}
                className="px-10 py-4 bg-white text-red-500 font-bold text-xl rounded-full shadow-xl transition-all border-4 border-transparent hover:border-pink-200"
                onClick={onYes}
            >
                YES 💖
            </motion.button>

            <motion.button
                ref={buttonRef}
                animate={noBtnState.isMoved ? {
                    top: noBtnState.y,
                    left: noBtnState.x,
                    position: "fixed",
                    x: 0, // Reset transform x/y to avoid conflict with top/left
                    y: 0
                } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                className="px-10 py-4 bg-red-800/80 text-white font-bold text-xl rounded-full shadow-xl cursor-default"
                // When not moved, it's relative in the flow. When moved, it becomes fixed.
                style={noBtnState.isMoved ? { position: 'fixed', top: 0, left: 0 } : { position: 'relative' }}
            >
                NO 🙃
            </motion.button>
        </div>
    );
};

export default Buttons;
