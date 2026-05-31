import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface MusicWidgetProps {
  autoPlay?: boolean;
  entered?: boolean;
}

export function MusicWidget({ autoPlay = true, entered = false }: MusicWidgetProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const audioElRef = useRef<HTMLAudioElement | null>(null);

  // User's custom romantic Tamil song "Ennamo Yeadho" from the public directory
  const audioUrl = "/Ko - Ennamo Yeadho Video _ Jiiva, Karthika _ Harris - (256 Kbps) (1).mp3.mpeg";

  useEffect(() => {
    if (!audioElRef.current) return;
    audioElRef.current.volume = 0.15; // Set volume low as requested for a gentle romantic background

    // Autoplay precisely when the user clicks 'Step Inside' (gesture-synchronized loop)
    if (entered && !isPlaying) {
      audioElRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 4000);
        })
        .catch((err) => {
          console.log("Autoplay blocked or failed:", err);
        });
    }
  }, [entered, isPlaying]);

  const togglePlay = () => {
    if (!audioElRef.current) return;
    
    if (isPlaying) {
      audioElRef.current.pause();
      setIsPlaying(false);
    } else {
      audioElRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        })
        .catch(err => console.log(err));
    }
  };

  // Slow, gentle equalizer bars configs matching the slow tempo
  const bars = [
    { id: 1, duration: 2.4, delay: 0.2 },
    { id: 2, duration: 1.8, delay: 0.6 },
    { id: 3, duration: 3.0, delay: 0.0 },
    { id: 4, duration: 2.2, delay: 0.8 },
    { id: 5, duration: 2.6, delay: 0.4 },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Declarative HTML5 Audio Element for bulletproof browser playback */}
      <audio 
        ref={audioElRef} 
        src={audioUrl} 
        loop 
        preload="auto"
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="bg-white/90 backdrop-blur-md py-2.5 px-4 rounded-2xl border border-rose-100 shadow-xl shadow-rose-100/40 flex items-center gap-2.5 text-slate-700 pointer-events-auto"
          >
            <Music className="w-4 h-4 text-rose-500 animate-bounce" />
            <span className="text-xs font-medium tracking-wide">
              {isPlaying ? "Soft background melody playing..." : "Melody paused"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3 pointer-events-auto">
        
        {/* Equalizer Visualizer (only visible when playing or on hover) */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white/80 backdrop-blur-md px-3 py-2.5 rounded-full border border-rose-100/50 shadow-md flex items-end gap-[3px] h-9"
            >
              {bars.map((bar) => (
                <motion.div
                  key={bar.id}
                  animate={
                    isPlaying
                      ? { scaleY: [1, 2.4, 0.6, 1.8, 1] }
                      : { scaleY: 1 }
                  }
                  transition={{
                    duration: bar.duration,
                    delay: bar.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-[3px] bg-gradient-to-t from-rose-400 to-pink-500 rounded-full origin-bottom"
                  style={{ height: "12px" }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer ${
            isPlaying
              ? "bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 shadow-rose-200"
              : "bg-slate-700 hover:bg-slate-800 shadow-slate-200"
          } transition-all border-2 border-white/60`}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </motion.button>
      </div>

    </div>
  );
}
