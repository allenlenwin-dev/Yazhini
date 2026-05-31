import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Volume2, X, Sparkles, Heart } from "lucide-react";

// Import all 6 video files from the root of the project
import vid1 from "@/VID_20260518_105033_559.mp4";
import vid2 from "@/VID_20260518_105036_512.mp4";
import vid3 from "@/VID_20260518_105054_160.mp4";
import vid4 from "@/VID_20260527_060529_940.mp4";
import vid5 from "@/VID_20260529_211449_910.mp4";
import vid6 from "@/VID_20260530_091639_810.mp4";

interface VideoReel {
  id: number;
  src: string;
  title: string;
  caption: string;
}

const reelsData: VideoReel[] = [
  {
    id: 1,
    src: vid1,
    title: "Sweet Giggles",
    caption: "The slow-motion cuteness of my little laddu! 🥰"
  },
  {
    id: 2,
    src: vid2,
    title: "Silly Moments",
    caption: "You being the adorable, hyperactive kid that you are! 🍍"
  },
  {
    id: 3,
    src: vid3,
    title: "Sunny Walks",
    caption: "Stealing my heart while glowing under the warm sunlight. ☀️"
  },
  {
    id: 4,
    src: vid4,
    title: "Prickly Pineapple",
    caption: "Cuteness mixed with a tiny bit of sweet drama! 🧁"
  },
  {
    id: 5,
    src: vid5,
    title: "Pure Joy",
    caption: "Your beautiful laugh is my absolute favorite sound in the world. 💖"
  },
  {
    id: 6,
    src: vid6,
    title: "Cherished Vibes",
    caption: "Our tiny memory capsule that I carry with me forever and always. 💫"
  }
];

export function MemoryReels() {
  const [activeReel, setActiveReel] = useState<VideoReel | null>(null);
  const hoverRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (id: number) => {
    const video = hoverRefs.current[id];
    if (video) {
      video.play().catch((err) => console.log("Hover autoplay blocked:", err));
    }
  };

  const handleMouseLeave = (id: number) => {
    const video = hoverRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset to first frame
    }
  };

  return (
    <section className="py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 bg-rose-100 rounded-full text-rose-500 font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 mb-4"
        >
          <Sparkles className="w-4 h-4 text-rose-500 animate-spin-slow" /> Memories in Motion <Sparkles className="w-4 h-4 text-rose-500 animate-spin-slow" />
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-serif text-slate-800 font-bold mb-4"
        >
          Our Little Vlog Reels 🎬
        </motion.h2>

        <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base font-sans">
          Hover over the phone frames to preview our little loops, and click to watch them in fullscreen with sound! 💖
        </p>
      </div>

      {/* Grid of Video Reels styled like TikTok/Insta Reels */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center py-4">
        {reelsData.map((reel, idx) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 60, damping: 13, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -8 }}
            onMouseEnter={() => handleMouseEnter(reel.id)}
            onMouseLeave={() => handleMouseLeave(reel.id)}
            onClick={() => setActiveReel(reel)}
            className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 cursor-pointer select-none group transition-all duration-300"
          >
            {/* Hover Pulsing Glow */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-rose-400 rounded-3xl z-20 pointer-events-none transition-colors duration-300" />
            
            {/* The Video Layer */}
            <video
              ref={(el) => { hoverRefs.current[reel.id] = el; }}
              src={reel.src}
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-100 transition-opacity"
            />

            {/* Dark Overlay (Fades out on hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent z-10 group-hover:from-slate-950/40 transition-colors duration-300" />

            {/* Small Overlay Info (Capsule Title) */}
            <div className="absolute bottom-4 inset-x-3 z-20 text-white flex flex-col gap-1 pointer-events-none">
              <span className="text-xs font-semibold px-2 py-0.5 bg-rose-500/90 rounded-full w-max text-center">
                {reel.title}
              </span>
              <p className="text-[10px] text-rose-100 font-sans line-clamp-1 opacity-90">
                {reel.caption}
              </p>
            </div>

            {/* Pulsing Play Button overlay (visible when not playing) */}
            <div className="absolute inset-0 flex items-center justify-center z-15 group-hover:opacity-0 transition-opacity">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40"
              >
                <Play className="w-5 h-5 fill-white text-white ml-0.5" />
              </motion.div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Fullscreen Video Overlay Lightbox Modal */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveReel(null)}
          >
            
            {/* Close Button */}
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer z-50 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 80, damping: 14 }}
              className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-[2rem] overflow-hidden border-[6px] border-white/15 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Stop click from closing
            >
              
              {/* Full active Video */}
              <video
                src={activeReel.src}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Heart Pop in the corner */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-rose-500/90 text-white rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-md pointer-events-none">
                <Volume2 className="w-3.5 h-3.5 animate-pulse" /> Playing with Sound
              </div>

              {/* Floating Caption details at bottom of Overlay */}
              <div className="absolute bottom-16 inset-x-5 z-20 pointer-events-none bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent p-5 rounded-2xl border border-white/5 flex flex-col gap-2">
                <h4 className="text-white text-lg font-bold flex items-center gap-1.5">
                  {activeReel.title} <Heart className="w-4.5 h-4.5 fill-rose-500 text-rose-500 animate-bounce" />
                </h4>
                <p className="text-sm text-slate-200 font-sans leading-relaxed">
                  {activeReel.caption}
                </p>
                <div className="w-8 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mt-1" />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
