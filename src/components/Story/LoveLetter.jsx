import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    q: "Where did I first notice you?",
    options: ["Cafeteria", "Classroom", "Library", "Sports ground"],
    answer: 2
  },
  {
    q: "What made me fall for you first?",
    options: ["Your looks", "Your humor", "Your discipline & calm nature", "Your friends"],
    answer: 2
  },
  {
    q: "Which moment changed everything for me?",
    options: ["Film Fest", "Proposal day", "Sehri night (19th March)", "NSC trip"],
    answer: 2
  },
  {
    q: "What small thing about you do I love a lot?",
    options: ["Your dressing", "Your voice", "How you care & remember small things", "Your social circle"],
    answer: 2
  },
  {
    q: "What are you to me?",
    options: ["Just my girlfriend", "My best friend", "My peace", "All of the above"],
    answer: 3
  }
];

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState('quiz'); // 'quiz', 'suspense', 'result', 'letter'
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Reset state when overlay is closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setPhase('quiz');
        setCurrentQ(0);
        setScore(0);
        setShowContent(false);
        setSelectedOption(null);
      }, 500); // Wait for close animation
      return () => clearTimeout(timer);
    } else if (phase === 'letter') {
      const timer = setTimeout(() => setShowContent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, phase]);

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return; // Prevent double click
    setSelectedOption(index);
    if (index === questions[currentQ].answer) {
      setScore(s => s + 1);
    }
    
    setTimeout(() => {
      setSelectedOption(null);
      if (currentQ < 4) {
        setCurrentQ(c => c + 1);
      } else {
        setPhase('suspense');
        setTimeout(() => setPhase('result'), 3000);
      }
    }, 700);
  };

  // The majestic letter content
  const content = [
    "I don’t say all of this enough… so I’m writing it here, just for you.",
    "",
    "Jani, before you, I didn’t even know I could feel like this about someone.",
    "You came into my life so quietly… but you changed everything.",
    "",
    "From that first moment in the library, to now 1 year later,",
    "you’ve become my peace, my comfort, my safe place.",
    "",
    "What I love the most about you isn’t just the big things.",
    "It’s the small ones.",
    "",
    "The way you care.",
    "The way you remember little details like red Cheetos.",
    "The way you support me more than I support myself.",
    "The way you smile and suddenly everything feels okay.",
    "",
    "You’ve seen me in my good moments and my worst ones too.",
    "And still, you stayed.",
    "That means more to me than anything.",
    "",
    "There were times when things got hard, when distance hit, when we couldn’t even talk properly…",
    "but we still chose each other again and again.",
    "",
    "And that’s what makes us real.",
    "",
    "I don’t promise a perfect relationship,",
    "but I promise effort, loyalty, and that I will always choose you no matter what.",
    "",
    "You’re not just my girlfriend.",
    "You’re my best friend, my partner, my biggest blessing.",
    "",
    "And honestly…",
    "if I had to go back and live everything again,",
    "I would still find you, still choose you, every single time.",
    "",
    "Happy 1 year, my love ❤️",
    "And this is just the beginning.",
    "",
    "Forever yours,",
    "Nabeegh"
  ];

  return (
    <>
      <div className="flex justify-center mt-12 pb-10 relative z-20">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(true)}
          className="group relative px-8 py-3 text-[#5d4037] font-serif text-lg tracking-widest uppercase transition-all duration-300"
        >
          <span className="relative z-10">Open Secret Letter ❤️</span>
          <span className="absolute inset-0 bg-[#fce4ec] rounded-full scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 origin-center blur-sm"></span>
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#880e4f] group-hover:w-3/4 transition-all duration-500"></span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
            
            {/* Click outside to close */}
            {phase !== 'suspense' && (
              <div className="absolute inset-0 cursor-pointer" onClick={() => setIsOpen(false)} />
            )}

            {/* Sparkles Overlay (Shared across all phases) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               {Array.from({ length: 12 }).map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: [0, 0.8, 0], y: -100 }}
                   transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                   style={{ left: `${Math.random() * 100}%`, top: `${60 + Math.random() * 40}%` }}
                   className="absolute text-[#ffb74d] text-xs blur-[1px]"
                 >
                   ✨
                 </motion.div>
               ))}
            </div>

            {/* Content Switcher based on Phase */}
            {phase !== 'letter' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="relative bg-[#fffdfa] w-[92vw] max-w-lg sm:w-full p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col items-center justify-center min-h-[350px] border border-[#fce4ec] text-center pointer-events-auto"
              >
                  <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#fff0f5] text-[#880e4f] flex items-center justify-center hover:bg-[#f8bbd0] transition-colors">✕</button>
                  
                  <AnimatePresence mode="wait">
                  {phase === 'quiz' && (
                    <motion.div
                       key={currentQ}
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: -20 }}
                       transition={{ duration: 0.3 }}
                       className="w-full flex flex-col"
                    >
                      <p className="text-[#f48fb1] mb-2 font-serif italic text-sm">Question {currentQ + 1} of 5</p>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#880e4f] mb-8 min-h-[64px] flex items-center justify-center">{questions[currentQ].q}</h3>
                      
                      <div className="flex flex-col gap-2 sm:gap-3 w-full">
                         {questions[currentQ].options.map((opt, i) => (
                           <button
                             key={i}
                             onClick={() => handleOptionClick(i)}
                             className={`w-full p-3 min-h-[50px] sm:p-4 rounded-xl font-serif text-sm sm:text-lg transition-all duration-300 outline-none
                               ${selectedOption === i 
                                  ? 'bg-[#f48fb1] text-white shadow-inner scale-[0.98]' 
                                  : 'bg-[#fff0f5] text-[#c2185b] hover:bg-[#fce4ec] hover:shadow-md hover:-translate-y-[2px]'
                               }
                             `}
                           >
                             {opt}
                           </button>
                         ))}
                      </div>
                    </motion.div>
                  )}

                  {phase === 'suspense' && (
                    <motion.div
                      key="suspense"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-[250px]"
                    >
                      <motion.p
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="font-serif text-2xl sm:text-3xl text-[#880e4f] italic whitespace-pre-wrap leading-relaxed"
                      >
                        {"Ohhhh… let’s check 👀\nAre youuu righttttttttt…"}
                      </motion.p>
                    </motion.div>
                  )}

                  {phase === 'result' && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center w-full min-h-[250px]"
                    >
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#880e4f] mb-4">
                        {score === 5 ? "5 out of 5… you know me a lot 🙄❤️" : "Not perfect… but still mine ❤️"}
                      </h3>
                      <p className="text-lg sm:text-xl text-[#c2185b] font-light italic mb-10">
                        {score === 5 ? "Of course you do… you’re my everything." : "You don’t need full marks to know my heart."}
                      </p>
                      
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => setPhase('letter')}
                        className="px-8 py-4 bg-[#880e4f] text-white rounded-full font-serif text-lg tracking-wide hover:bg-[#c2185b] hover:shadow-lg transition-all duration-300"
                        style={{ boxShadow: "0 4px 15px rgba(136,14,79,0.3)" }}
                      >
                        Here comes your letter 💌
                      </motion.button>
                    </motion.div>
                  )}
                  </AnimatePresence>
              </motion.div>
            )}

            {/* The Vintage Letter Paper Phase */}
            {phase === 'letter' && (
              <motion.div
                 animate={{ y: [0, -6, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="relative w-[92vw] max-w-2xl sm:w-full h-[85vh] sm:h-[80vh] flex flex-col pointer-events-none"
              >
                <motion.div
                  initial={{ rotateX: 90, scale: 0.8, opacity: 0 }}
                  animate={{ rotateX: 0, scale: 1, opacity: 1 }}
                  exit={{ rotateX: 90, scale: 0.8, opacity: 0, transition: { duration: 0.4 } }}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                  style={{ transformOrigin: "bottom center" }}
                  className="relative w-full h-full bg-[#fdfaf3] shadow-2xl rounded-sm pointer-events-auto flex flex-col overflow-hidden"
                >
                  
                  {/* Vintage Texture/Burnt Edges Layer */}
                  <div className="absolute inset-0 pointer-events-none" 
                       style={{ 
                         boxShadow: "inset 0 0 80px rgba(139, 69, 19, 0.15), inset 0 0 20px rgba(139, 69, 19, 0.1)",
                         backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E")'
                       }} 
                  />

                  {/* Crease / Fold Lines simulating folded paper */}
                  <div className="absolute top-1/3 left-0 w-full h-[1px] bg-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] pointer-events-none"></div>
                  <div className="absolute top-2/3 left-0 w-full h-[1px] bg-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] pointer-events-none"></div>
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/5 shadow-[1px_0_2px_rgba(0,0,0,0.03)] pointer-events-none"></div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-[60] text-[#5d4037] hover:text-[#3e2723] hover:rotate-90 transition-all duration-300 w-8 h-8 flex items-center justify-center font-sans text-xl bg-white/30 backdrop-blur-sm rounded-full"
                  >
                    ✕
                  </button>

                  {/* Scrollable Text Area */}
                  <div className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden p-6 pb-16 sm:p-12 scrollbar-hide"
                       style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    <AnimatePresence>
                      {showContent && (
                        <motion.div
                          initial={{ opacity: 0, filter: "blur(4px)" }}
                          animate={{ opacity: 1, filter: "blur(0px)" }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                          {content.map((line, index) => (
                             <p key={index} className={`font-serif text-[#3e2723] ${line === "" ? "h-4" : "min-h-[1.5rem]"} ${index > 37 ? "text-right italic font-semibold" : "text-left font-normal"} leading-relaxed text-base sm:text-lg mb-2`} style={{ textShadow: "0px 0px 1px rgba(62,39,35,0.1)" }}>
                               {line}
                             </p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                </motion.div>
              </motion.div>
            )}

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
