import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';
import LoveLetter from './LoveLetter';

const chapters = [
  {
    id: 1,
    title: "Chapter 1",
    subtitle: "The First Glance 💖",
    content: "It was in the library… you with your bun, focused on your laptop, probably watching Hashim Zia’s playlist.\nI don’t know why, but something felt different.\nWhen I saw you again in GIKI, I had this instinct… like there is somehting to then pitching you ICX…",
    images: 2
  },
  {
    id: 2,
    title: "Chapter 2",
    subtitle: "Finding Peace in You 💫",
    content: "The more I got to know you, the more I admired your discipline and your ethics.\nI loved your company… the way you were, so real and calm.\nIn our friendship, I found a strange kind of peace.\nAnd you were my first real female friend… which made everything even more special.",
    images: 1
  },
  {
    id: 3,
    title: "Chapter 3",
    subtitle: "That Sehri Night (19th March) 🌙",
    content: "That Sehri changed everything.\nI saw your raw side… the caring, the real you.\nAs we walked around GIKI, talking about life and families, it just felt right.\nYou could relate to me, and I could relate to you.\nThat day, I felt like I found the perfect mix… someone family-oriented and exactly my type.\nYar jani, I’ll never forget that night.",
    images: 1
  },
  {
    id: 4,
    title: "Chapter 4",
    subtitle: "The Proposal 💌",
    content: "Mid-break… and all I could think about was you.\nI spent hours talking to my friend planning how to propose.\nI even bought a book for you—my first and last gift to any girl.\nComing back to GIKI, your acknoledged Saeen message made my day.\nI tried for 2 days… nervous, overthinking everything.\nAnd then finally… 15th April.\nI still remember waiting for the perfect moment, hoping it wouldn’t get awkward.\nBut I did it… and it was the best decision ever.",
    images: 1
  },
  {
    id: 5,
    title: "Chapter 5",
    subtitle: "Our First Public Moment 🎥",
    content: "Our first proper appearance together… at Film Fest.\nZainab captured us holding hands.\nHayee… the warmth of your hand, the way we walked together, our heights matching perfectly…\nThat moment felt unreal.",
    images: 1
  },
  {
    id: 6,
    title: "Chapter 6",
    subtitle: "Our First Fight 🌧️",
    content: "Our first kalesh…\nI used to wonder why couples fight. That day, I got my answer—just misunderstandings.\nI said sorry, you smiled… and just like that, everything was okay again.\nMaybe that’s when I realized—we’ll always find our way back.",
    images: 1
  },
  {
    id: 7,
    title: "Chapter 7",
    subtitle: "NSC — Our First Trip Together 🏞️",
    content: "NSC… our first trip.\nThat qawali night… unforgettable.\nWhen you slept on me, I didn’t want that moment to end.\nI was happy… and a little shy too, especially with Tooba capturing everything.\nAnd that hug during hiking…\nThat was the most romantic moment for me.",
    images: 2
  },
  {
    id: 8,
    title: "Chapter 8",
    subtitle: "The Trust Moment (16th May) 🤍",
    content: "The day you opened up about your past…\nI had been waiting for that moment—not out of curiosity, but because it meant trust.\nIt was like a checklist in my mind:\n“The day she tells me everything… that’s when I’ll know.”\nAnd when you did… I knew.\nIt took you 30 days… and it meant everything.",
    images: 1
  },
  {
    id: 9,
    title: "Chapter 9",
    subtitle: "The Goodbye Before Summer 💔",
    content: "The last day before summer… I didn’t want to leave.\nThat goodbye kiss… the rush, the emotions…\nI felt so deeply connected to you in that moment.\nThat day, I promised myself:\nNo matter what happens, I’m never going back. We’re in this—and we’ll make it work, InshaAllah.",
    images: 1
  },
  {
    id: 10,
    title: "Chapter 10",
    subtitle: "Through Distance & The Surprise 🌆",
    content: "Hyderabad… one of the hardest phases.\nWe couldn’t talk properly, things were tough… but we held on.\nAfter all those hurdles, summer ended.\nAnd then… I came back to GIKI to surprise you.\nThe way you ran towards me… I can’t explain that feeling.\nI even hid gifts from my parents—almost got caught by mama.\nBut honestly… everything I do is just to see you smile.\nYour happiness is everything to me.",
    images: 2
  },
  {
    id: 11,
    title: "Chapter 11",
    subtitle: "My Leader, My Love 🌟",
    content: "You as Recruitment Head…\nYou believed in me, reassured me, and pushed me forward.\nYou were so proud… and I was even more proud of you.\nSeeing you lead people outside, and then being my soft, loving pookie with me…\nThat contrast? I love it.",
    images: 1
  },
  {
    id: 12,
    title: "Chapter 12",
    subtitle: "The Birthday I Felt Loved 🎂",
    content: "My birthday…\nDeep down, I was expecting something—but the inner child in me was just happy that someone cared enough to plan.\nAnd you… you aced it.\nThe people, the gifts, the perfume (which I still use slowly because I love it too much),\nthe handwritten card…\nYar, it was one of the most beautiful days of my life.",
    images: 1
  },
  {
    id: 13,
    title: "Chapter 13",
    subtitle: "Your Birthday, My Effort 👑",
    content: "Then came your birthday…\nI even asked my parents for your suit—mama and baba both helped pick it from Aobhan.\nI had been planning since summer, saving money just so I could do everything properly.\nAnd when I saw you happy… it was all worth it.\nThe necklace with “N”… you still wear it—hayee.\nThe handwritten letter, every little detail…\nI’ll always do everything I can, just to see you happy.",
    images: 2
  }
];

const TypewriterText = ({ text }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
             hidden: { opacity: 0, scale: 0.5 },
             visible: { opacity: 1, scale: 1 },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const getInitial = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -60, y: 20 };
      case "right": return { opacity: 0, x: 60, y: 20 };
      case "up": 
      default: return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

const ImagePlaceholder = ({ index, chapterId, subIndex }) => (
  <div className="w-full h-full min-h-[400px] bg-[#ffe6f0] border-2 border-dashed border-[#f8bbd0] rounded-3xl flex flex-col items-center justify-center text-[#c2185b]/50 p-6 shadow-sm hover:bg-[#fae8e8] transition-colors relative group">
    <span className="text-4xl mb-4">📸</span>
    <p className="font-serif italic text-center font-medium">Place your image here</p>
    <p className="text-sm mt-2 opacity-70">Image {chapterId}{subIndex ? `-${subIndex}` : ''}</p>
    
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fff0f5] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-3xl">
      <p className="bg-white/80 px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-[#880e4f]">Update src in codebase</p>
    </div>
  </div>
);

const ImageRender = ({ index, chapterId, subIndex }) => {
  const [error, setError] = useState(false);
  const imgSrc = `/story/chap${chapterId}_${subIndex || 1}.png`;

  if (error) {
    return <ImagePlaceholder index={index} chapterId={chapterId} subIndex={subIndex} />;
  }

  return (
    <img 
      src={imgSrc} 
      alt={`Chapter ${chapterId}`} 
      className="w-full h-full object-cover rounded-xl shadow-inner bg-[#fff0f5]"
      onError={() => setError(true)}
    />
  );
};

export default function Story() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-[#fff0f5] min-h-screen text-[#4a4a4a] overflow-x-hidden selection:bg-[#f8bbd0] selection:text-[#880e4f] font-sans relative">
      <FloatingElements />
      
      {/* Background Audio (Hidden) */}
      <audio ref={audioRef} loop>
        <source src="/story/dummy_music.mp3" type="audio/mpeg" />
      </audio>

      {/* Landing Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-4 z-10">
        <div className="relative z-10 text-center flex flex-col items-center mt-12 sm:mt-20">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl text-[#880e4f] mb-4 sm:mb-6 drop-shadow-sm flex flex-wrap justify-center gap-x-2">
            <TypewriterText text="Happy Anniversary my Fari" />
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-lg sm:text-2xl md:text-4xl text-[#c2185b] italic font-light mb-12 sm:mb-16 drop-shadow-sm text-center px-4"
          >
            1 year, countless memories
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button 
              onClick={() => {
                 window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                 if (!isPlaying && audioRef.current) toggleMusic();
              }}
              className="px-10 py-5 rounded-full bg-[#fce4ec]/90 backdrop-blur-sm text-[#880e4f] border border-[#f8bbd0] font-serif shadow-sm hover:bg-[#f8bbd0] transition-colors cursor-pointer text-xl"
            >
              Start Our Journey
            </button>
            <button
               onClick={toggleMusic}
               className="px-10 py-5 rounded-full border border-[#f8bbd0] bg-white/50 backdrop-blur-sm text-[#c2185b] font-serif hover:bg-[#fce4ec] transition-colors cursor-pointer text-xl"
            >
              {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
          </motion.div>
        </div>
        
        {/* Soft decorative landing element */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-[#f48fb1]"
        >
          <span className="text-sm font-serif italic mb-2">Scroll Down</span>
          ▼
        </motion.div>
      </section>

      {/* Chapters Render */}
      <div className="relative z-10 py-20">
        {chapters.map((chapter, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <section key={chapter.id} className={`min-h-[80vh] flex items-center py-24 px-6 md:px-20 max-w-7xl mx-auto my-12 ${isEven ? '' : 'bg-[#fff5f8] rounded-3xl shadow-sm border border-[#fce4ec]'}`}>
              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 w-full`}>
                
                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col text-center md:text-left">
                  <FadeIn direction={isEven ? 'left' : 'right'}>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#880e4f] mb-2 sm:mb-4">{chapter.title}</h2>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#c2185b] italic mb-6 sm:mb-8">{chapter.subtitle}</h3>
                    
                    <div className="space-y-4 sm:space-y-6">
                      {chapter.content.split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </FadeIn>
                </div>

                {/* Images */}
                <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-6 justify-center">
                  {chapter.images === 1 ? (
                    <FadeIn direction={isEven ? 'right' : 'left'} delay={0.3}>
                      <motion.div 
                        whileHover={{ scale: 1.03 }}
                        className="w-[280px] sm:w-[400px] aspect-[4/5] rounded-2xl shadow-2xl bg-white p-2 pb-10 sm:p-3 sm:pb-14 transition-all duration-500 mx-auto"
                      >
                        <ImageRender index={index} chapterId={chapter.id} />
                      </motion.div>
                    </FadeIn>
                  ) : (
                    <div className="flex flex-col sm:flex-row items-center justify-center relative w-full pt-10 sm:pt-0">
                      <FadeIn direction={isEven ? 'right' : 'left'} delay={0.2}>
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: -2, zIndex: 30 }}
                          className="w-[240px] sm:w-[280px] aspect-[4/5] rounded-2xl shadow-xl transform -rotate-6 bg-white p-2 pb-10 sm:p-3 sm:pb-14 relative z-10 sm:mr-[-40px] mb-[-40px] sm:mb-0 mt-0 sm:mt-8 transition-transform duration-300 mx-auto"
                        >
                          <ImageRender index={index} chapterId={chapter.id} subIndex={1} />
                        </motion.div>
                      </FadeIn>
                      <FadeIn direction={isEven ? 'right' : 'left'} delay={0.4}>
                         <motion.div 
                           whileHover={{ scale: 1.1, rotate: 2, zIndex: 30 }}
                           className="w-[240px] sm:w-[280px] aspect-[4/5] rounded-2xl shadow-xl transform rotate-6 bg-white p-2 pb-10 sm:p-3 sm:pb-14 relative z-20 md:translate-y-16 transition-transform duration-300 mx-auto"
                        >
                          <ImageRender index={index} chapterId={chapter.id} subIndex={2} />
                        </motion.div>
                      </FadeIn>
                    </div>
                  )}
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Final Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 relative z-10 bg-gradient-to-b from-transparent to-[#fce4ec]/60 border-t border-[#fce4ec]">
        <FadeIn>
          <div className="text-center mt-10">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-[#880e4f] mb-6 md:mb-8 tracking-wider drop-shadow-sm">
              Happy 1 Year ❤️
            </h1>
            <p className="text-xl sm:text-2xl md:text-4xl text-[#c2185b] italic font-light mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
              Thank you for trusting me, for loving me, and for the most beautiful year. <br/>
              Here is to forever.
            </p>
            
            <LoveLetter />
          </div>
        </FadeIn>
        
        {/* Placeholder for the Final Celebration Image */}
        <div className="mt-24 w-[90%] max-w-4xl mx-auto h-[400px]">
           <FadeIn delay={0.3}>
             <ImagePlaceholder index="final" chapterId="Final Celebration" />
           </FadeIn>
        </div>
      </section>
      
    </div>
  );
}
