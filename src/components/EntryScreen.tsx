import { motion, AnimatePresence } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

interface EntryScreenProps {
  onEnter: () => void;
}

export function EntryScreen({ onEnter }: EntryScreenProps) {
  const [opened, setOpened] = useState(false);

  const handleOpenEnvelope = () => {
    setOpened(true);
    
    // Heart shape confetti blast when opened!
    const defaults = { spread: 360, ticks: 50, gravity: 0.5, decay: 0.94, startVelocity: 30, colors: ["#fb7185", "#f43f5e", "#ffe4e6", "#fda4af"] };
    
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["heart" as any],
      });
      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 0.75,
      });
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100, scale: 0.9, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-radial from-rose-50 via-rose-100 to-rose-200 px-4 overflow-hidden"
    >
      {/* Background glowing sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-pink-300/40 rounded-full blur-[100px] animate-blob-slow" />
        <div className="absolute bottom-[10%] right-[15%] w-80 h-80 bg-rose-300/30 rounded-full blur-[120px] animate-blob-slower" />
      </div>

      <div className="text-center mb-8 relative z-10 max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg uppercase tracking-[0.25em] text-rose-500 font-semibold mb-2 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 animate-spin-slow" /> A Sweet Surprise For You <Sparkles className="w-4 h-4 animate-spin-slow" />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 font-sans text-sm sm:text-base"
        >
          {opened ? "Open the letter to read your invitation..." : "You received a sealed letter, my little laddu! Tap the seal to open it..."}
        </motion.p>
      </div>

      {/* 3D Envelope container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] perspective-1000 mb-12 z-20">
        <motion.div
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 80, delay: 0.1 }}
          className="w-full h-full relative preserve-3d"
        >
          {/* Back of Envelope */}
          <div className="absolute inset-0 bg-rose-200/90 rounded-2xl shadow-2xl border border-rose-300/50 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-300/20 to-transparent" />
          </div>

          {/* Letter Card (slides up) */}
          <motion.div
            animate={
              opened
                ? { y: "-50%", scale: 1.05, zIndex: 40 }
                : { y: 0, scale: 0.96, zIndex: 10 }
            }
            transition={{
              y: { type: "spring", stiffness: 60, damping: 15, delay: 0.5 },
              scale: { duration: 0.4, delay: 0.9 },
            }}
            className="absolute inset-x-[4%] top-[6%] bottom-[6%] bg-white rounded-xl p-5 sm:p-8 flex flex-col items-center justify-between border border-rose-100 shadow-md"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Letter Content */}
            <div className="w-full text-center flex-1 flex flex-col justify-center items-center">
              <span className="text-rose-500 font-handwriting text-3xl mb-1 block">Dear Yazhini,</span>
              <h1 className="text-2xl sm:text-3xl font-serif text-slate-800 font-bold mb-4 tracking-wide">
                En Anbu Papaa... ❤️
              </h1>
              
              <div className="w-12 h-1 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mb-4" />
              
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-[280px] sm:max-w-[320px]">
                I made a little birthday world filled with sweetness, promises, and reasons why you are the absolute center of my universe.
              </p>
              
              <p className="text-rose-500 font-handwriting text-xl sm:text-2xl mt-4">
                "Happy 20th, my sweet cupcake!"
              </p>
            </div>

            {/* Enter Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(244, 63, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnter}
              className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-xl font-medium tracking-wider shadow-lg shadow-rose-200 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <span>Step Inside</span>
              <Heart className="w-4 h-4 fill-white" />
            </motion.button>
          </motion.div>

          {/* Envelope Bottom Flap */}
          <div 
            className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-rose-100 to-rose-50 rounded-b-2xl border-t border-rose-200/50 z-20"
            style={{ 
              clipPath: "polygon(0 100%, 50% 35%, 100% 100%)",
              boxShadow: "0 -5px 15px -5px rgba(0,0,0,0.05)"
            }} 
          />

          {/* Envelope Left & Right Flaps */}
          <div 
            className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-rose-150 to-rose-100 rounded-l-2xl border-r border-rose-200/30 z-20"
            style={{ clipPath: "polygon(0 0, 90% 50%, 0 100%)" }}
          />
          <div 
            className="absolute inset-y-0 right-0 w-[55%] bg-gradient-to-l from-rose-150 to-rose-100 rounded-r-2xl border-l border-rose-200/30 z-20"
            style={{ clipPath: "polygon(100% 0, 10% 50%, 100% 100%)" }}
          />

          {/* Envelope Top Flap (Animated Fold) */}
          <motion.div
            animate={opened ? { rotateX: -180, zIndex: 5 } : { rotateX: 0, zIndex: 30 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-rose-200 to-rose-150 rounded-t-2xl origin-top"
            style={{ 
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              backfaceVisibility: "visible",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Inner side of top flap (visible when open) */}
            <div className="absolute inset-0 bg-rose-200" style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }} />
          </motion.div>

          {/* Pulsing Heart Wax Seal */}
          <AnimatePresence>
            {!opened && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.4, filter: "blur(5px)" }}
                transition={{
                  scale: { type: "spring", stiffness: 100, damping: 10 },
                  opacity: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                onClick={handleOpenEnvelope}
                className="absolute top-[42%] left-[42%] w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-rose-300 border-2 border-white/60 z-35 cursor-pointer"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <Heart className="w-7 h-7 fill-white" />
                </motion.div>
                {/* Micro heart seal details */}
                <div className="absolute inset-1 border border-dashed border-white/30 rounded-full pointer-events-none" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Sweet Quote */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-rose-400 font-handwriting text-2xl relative z-10 max-w-xs text-center"
      >
        "I promise, it's sweeter than a box of chocolates..."
      </motion.p>
    </motion.div>
  );
}
