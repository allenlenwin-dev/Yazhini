import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

// Import media assets
import bgVideo from "@/VID_20260530_091639_810.mp4"; // Background video loop
import heroPhoto from "@/IMG_20260527_183439_383.jpg"; // Central polaroid photo

export function Hero() {
  const fireConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ffe4e6', '#fecdd3', '#fda4af', '#f43f5e']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ffe4e6', '#fecdd3', '#fda4af', '#f43f5e']
      });
    }, 250);
  };

  useEffect(() => {
    fireConfetti();
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 sm:px-8 overflow-hidden w-full z-10 pt-28 pb-16">
      
      {/* Background Loop Video */}
      <div className="absolute inset-0 -z-20">
        <video 
          src={bgVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Low-Opacity Premium Overlay: Keeps the background video sharp and vivid */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-rose-50/80 via-transparent to-black/35 -z-10" />
      
      {/* A single, proper centered Polaroid (Tilted elegantly at -3 degrees) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15, y: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: -3 }}
        transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.1 }}
        whileHover={{ 
          scale: 1.05, 
          rotate: 1, 
          y: -6,
          boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.25)"
        }}
        onClick={fireConfetti}
        className="relative w-full max-w-[210px] sm:max-w-[250px] bg-white p-3.5 pb-5 rounded-xl shadow-2xl border border-white/40 cursor-pointer mb-10 select-none z-10 group"
      >
        {/* Adhesive Polaroid Tape */}
        <div className="polaroid-tape" style={{ transform: "translateX(-50%) rotate(-2deg)" }} />

        {/* Polaroid Inner photo box */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 border border-slate-100">
          <img 
            src={heroPhoto} 
            alt="Yazhini Birthday" 
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 pointer-events-none"
          />
          {/* Pulsing heart label */}
          <div className="absolute bottom-2 right-2 bg-rose-500/90 text-white rounded-full p-1.5 shadow-md">
            <Heart className="w-3.5 h-3.5 fill-white text-white animate-pulse" />
          </div>
        </div>

        {/* Cursive Handwriting Caption at bottom */}
        <div className="pt-4 text-center">
          <p className="font-handwriting text-2xl text-rose-500 tracking-wide">
            My sweet laddu ✨
          </p>
        </div>
      </motion.div>
      
      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center max-w-4xl z-10"
      >
        <h2 className="text-xl sm:text-2xl text-white font-bold tracking-[0.25em] uppercase mb-4 drop-shadow-md flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-rose-300 animate-pulse" /> Celebrating You <Sparkles className="w-5 h-5 text-rose-300 animate-pulse" />
        </h2>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-6 leading-tight drop-shadow-md">
          Happy Birthday <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-400">Cupcake!</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-rose-100 font-handwriting mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Welcome to your next beautiful chapter, my sweet pineapple! May this year be as radiant and absolutely wonderful as you are. 🌸
        </p>
      </motion.div>
    </section>
  );
}
