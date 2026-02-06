import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = forwardRef((props, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')); // Placeholder, should be replaced with better romantic music

    useImperativeHandle(ref, () => ({
        play: () => {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(e => console.log("Audio play failed", e));
        }
    }));

    useEffect(() => {
        audioRef.current.loop = true;
        return () => {
            audioRef.current.pause();
        };
    }, []);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed usually due to user interaction policy", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMusic}
            className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 ${isPlaying ? 'bg-white/20 text-white' : 'bg-white/10 text-white/70'
                }`}
        >
            {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
        </motion.button>
    );
});

export default MusicPlayer;
