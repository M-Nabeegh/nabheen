import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Buttons from './components/Buttons';
import Success from './components/Success';
import Timer from './components/Timer';
import MusicPlayer from './components/MusicPlayer';
import Background from './components/Background';
import Entrance from './components/Entrance';

function App() {
  const [isValentine, setIsValentine] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const musicRef = useRef(null);

  const handleEnter = () => {
    setHasEntered(true);
    // Attempt to play music via the ref
    if (musicRef.current) {
      musicRef.current.play();
    }
  };

  const handleYes = () => {
    setIsValentine(true);
  };

  const handleReset = () => {
    setIsValentine(false);
    setHasEntered(false); // Go back to entrance screen
    if (musicRef.current) {
      // Optional: stop music or keep playing? User said "Relive", implies restart.
      // But maybe nice to keep music playing.
      // Let's stop to get the full "Click to Open" effect again if that's what "Relive" means.
      // Or just reset the question. 
      // "Relive it again" usually means the whole thing.
      // I'll keep music playing to avoid abrupt cuts, but show entrance again?
      // Actually, if we show entrance, user has to click to open.
      setHasEntered(false);
    }
  };

  return (
    <div className={`min-h-screen relative flex flex-col items-center justify-center overflow-hidden selection:bg-pink-300 selection:text-red-900 transition-colors duration-1000 ${isValentine ? 'bg-gradient-deep cursor-heart' : 'bg-gradient-default'}`}>
      <Background />
      <MusicPlayer ref={musicRef} />

      <AnimatePresence>
        {!hasEntered && (
          <Entrance onEnter={handleEnter} />
        )}
      </AnimatePresence>

      <main className="relative z-10 flex flex-col items-center justify-center w-full flex-grow p-4">
        <AnimatePresence mode="wait">
          {hasEntered && !isValentine ? (
            <motion.div
              key="question"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <Hero />
              <Buttons onYes={handleYes} />
            </motion.div>
          ) : hasEntered && isValentine ? (
            <Success key="success" onReset={handleReset} />
          ) : null}
        </AnimatePresence>

        {hasEntered && <Timer />}
      </main>

      <footer className="relative z-10 py-4 text-white/60 text-sm font-light">
        From your love Nabeegh 💌
      </footer>
    </div>
  );
}

export default App;
