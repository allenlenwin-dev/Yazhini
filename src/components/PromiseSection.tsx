import { useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX, Heart } from "lucide-react";

// Import selected videos for the promises
import calmVideo from "@/VID_20260518_105054_160.mp4"; // Sunny Walks
import celebrateVideo from "@/VID_20260529_211449_910.mp4"; // Pure Joy
import listenVideo from "@/VID_20260518_105033_559.mp4"; // Sweet Giggles

const promisesData = [
  {
    title: "I will be your calm",
    description: "Whenever things get too heavy, I promise to be a safe place where you can drop your worries and just breathe, my sweet cupcake.",
    video: calmVideo
  },
  {
    title: "I will celebrate you",
    description: "Not just on birthdays, but every single tiny win, every new poem you love, and every milestone you cross, my laddu.",
    video: celebrateVideo
  },
  {
    title: "I will always listen",
    description: "To your rants, your stories, the songs you discover, and everything your heart wants to share, papaa.",
    video: listenVideo
  }
];

export function PromiseSection() {
  const [mutedStates, setMutedStates] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    2: true
  });

  const toggleMute = (idx: number) => {
    setMutedStates((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10 w-full">
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-3.5 bg-rose-100 rounded-full text-rose-500 mb-6 shadow-md shadow-rose-100/50"
        >
          <Heart className="w-7 h-7 fill-rose-500/10 text-rose-500" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-serif text-slate-800 mb-6 drop-shadow-sm font-bold"
        >
          My Promises To You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 font-sans max-w-2xl mx-auto"
        >
          Because love is an everyday choice, and I choose you.
        </motion.p>
      </div>

      {/* Grid List */}
      <div className="space-y-28">
        {promisesData.map((promise, index) => {
          const isMuted = mutedStates[index] ?? true;

          return (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12 lg:gap-20`}
            >
              
              {/* Left/Right Interactive Polaroid Video Player */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 w-full relative group"
              >
                {/* Paper Polaroid Frame background */}
                <div className={`absolute inset-0 bg-rose-200/50 rounded-[2.5rem] ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} z-0 shadow-lg`} />
                
                <div className="relative z-10 w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-950 flex items-center justify-center">
                  
                  {/* The Promise Video */}
                  <video 
                    src={promise.video} 
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />

                  {/* Absolute controls for unmuting */}
                  <button
                    onClick={() => toggleMute(index)}
                    className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-slate-900/80 text-white flex items-center justify-center border border-white/25 backdrop-blur-sm cursor-pointer transition-all shadow-md active:scale-95"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-rose-400 animate-pulse" />
                    )}
                  </button>

                  {/* Dark gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-15 pointer-events-none" />

                </div>
              </motion.div>

              {/* Right/Left Content block */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 w-full space-y-4"
              >
                <h3 className="text-3xl sm:text-4xl font-serif text-rose-500 font-bold">
                  {promise.title}
                </h3>
                
                <div className="w-12 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full" />
                
                <p className="text-xl text-slate-700 leading-relaxed font-sans pt-2">
                  {promise.description}
                </p>
              </motion.div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
