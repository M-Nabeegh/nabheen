import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="mt-8 px-6 py-3 rounded-full bg-[#fce4ec] text-[#880e4f] font-serif italic shadow-md hover:bg-[#f8bbd0] transition-colors z-10 relative cursor-pointer"
      >
        Open the secret letter 💌
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#fffcf9] max-w-lg w-full p-8 md:p-12 rounded-2xl shadow-2xl relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#f8bbd0] text-[#880e4f] hover:bg-[#f48fb1] transition-colors cursor-pointer"
              >
                ✕
              </button>
              
              <h3 className="font-serif text-3xl text-[#c2185b] mb-6 text-center italic">My Dearest...</h3>
              <p className="text-gray-700 leading-relaxed font-serif text-lg whitespace-pre-wrap">
                {"These past 365 days have been the most beautiful journey of my life. Every smile, every laugh, and every quiet moment we've shared has woven a beautiful tapestry of us.\n\nI never knew love could feel this soft, this warm, and this deeply profound until you came along. Thank you for choosing me, for loving me, and for being the magic in my everyday life.\n\nHere’s to this year, to the next, and to entirely forever. I love you more than words could ever say."}
              </p>
              <p className="mt-8 text-right font-serif text-[#c2185b] italic text-xl">
                Forever yours ❤️
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
