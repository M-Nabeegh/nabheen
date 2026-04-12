import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Note() {
  useEffect(() => {
    document.title = "Just something I wanted to say.";
  }, []);
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="min-h-screen bg-white text-[#1a1a1a] flex items-center justify-center p-8 font-sans"
    >
      <div className="max-w-[650px] w-full py-8 text-left leading-[1.8]">
        <h1 className="text-[1.1rem] font-bold mb-12 opacity-80">Just something I wanted to say.</h1>

        <p className="my-[1.2rem] text-base">I have unblocked you from everywhere.</p>

        <p className="my-[1.2rem] text-base">I just wanted you to know that despite everything that happened, I still care about you and somewhere in my heart I still want us to work. But I don’t expect anything from you anymore no explanations, no apologies, not even a conversation about what happened.</p>

        <p className="my-[1.2rem] text-base">You were actually unblocked hourssss agooo, you just never noticed. It’s okay, that’s life.</p>

        <p className="my-[1.2rem] text-base">Whatever happened has already happened, and I’ve accepted it. I’m letting things be the way they are.</p>

        <p className="my-[1.2rem] text-base">When you come back to GIKI, if you ever feel like meeting or talking, just let me know. I’ll be completely normal.</p>

        <p className="my-[1.2rem] text-base">I won’t ask you to explain anything or sort things out. I’m not waiting for that.</p>

        <p className="my-[1.2rem] text-base">I just wanted to stay true to my own heart and the promises I made to myself. My love was genuine, and I don’t regret it and never will.</p>

        <p className="my-[1.2rem] text-base">Take care of yourself.</p>

        <p className="my-[1.2rem] text-base">- Nabeegh</p>

        <p className="mt-16 text-[0.85rem] opacity-50 italic">Some things in life stay with us.</p>
      </div>
    </motion.div>
  );
}
