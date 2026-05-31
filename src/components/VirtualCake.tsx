import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export function VirtualCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);
  const [smokeActive, setSmokeActive] = useState(false);

  const handleBlowCandle = () => {
    setCandlesBlown(true);
    setSmokeActive(true);

    // Smoke trail duration
    setTimeout(() => {
      setSmokeActive(false);
    }, 2000);

    // Sparkles / Confetti blast on blowing out candles
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0.35, y: 0.7 },
        colors: ["#ffe4e6", "#fecdd3", "#fda4af", "#f43f5e"]
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 0.65, y: 0.7 },
        colors: ["#ffe4e6", "#fecdd3", "#fda4af", "#f43f5e"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleCutCake = () => {
    setCakeCut(true);

    // Heart explosion when cutting!
    const defaults = { spread: 360, ticks: 60, gravity: 0.4, decay: 0.94, startVelocity: 25, colors: ["#fb7185", "#f43f5e", "#fda4af"] };
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 1.5,
      shapes: ["heart" as any]
    });
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 1.0
    });
  };

  const handleReset = () => {
    setCandlesBlown(false);
    setCakeCut(false);
    setSmokeActive(false);
  };

  return (
    <section className="py-24 px-6 sm:px-12 w-full max-w-4xl mx-auto relative z-10 text-center">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-200/30 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 bg-rose-100 rounded-full text-rose-500 font-semibold text-sm tracking-wider uppercase inline-flex items-center gap-1.5 mb-4"
        >
          <Sparkles className="w-4 h-4 text-rose-500 animate-spin-slow" /> Sweetest Milestone <Sparkles className="w-4 h-4 text-rose-500 animate-spin-slow" />
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-serif text-slate-800 font-bold mb-4"
        >
          Make A Wish, Cupcake! 🎂
        </motion.h2>

        <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base font-sans">
          {!candlesBlown 
            ? "Step 1: Close your eyes, make a sweet wish in your heart, then tap the candle flame to blow it out!"
            : !cakeCut 
              ? "Step 2: Yay! Your wish is on its way to the stars. Now, tap the cake to slice it!"
              : "Here is your sweet, virtual, zero-calorie birthday cake slice, made with infinite love! ❤️"
          }
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[360px] w-full max-w-sm mx-auto mb-8 select-none">
        
        {/* Interactive Virtual Cake Illustration */}
        <div className="relative flex flex-col items-center w-full">
          
          {/* Candle Section */}
          <div className="relative h-20 w-8 flex flex-col items-center z-30">
            <AnimatePresence>
              {!candlesBlown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.5, filter: "blur(5px)" }}
                  onClick={handleBlowCandle}
                  className="absolute -top-4 w-7 h-10 cursor-pointer flex justify-center items-end"
                >
                  {/* Glowing Pulse */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="absolute w-6 h-6 bg-amber-400/30 rounded-full blur-[8px] top-0"
                  />
                  
                  {/* Real Flame */}
                  <motion.div
                    animate={{ 
                      borderRadius: ["40% 40% 20% 20%", "45% 45% 15% 15%", "40% 40% 20% 20%"],
                      y: [0, -2, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="w-4 h-7 bg-gradient-to-t from-amber-400 via-orange-500 to-red-500 rounded-t-full shadow-lg shadow-orange-200"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Smoke Effect (Active right after blowing out candles) */}
            <AnimatePresence>
              {smokeActive && (
                <div className="absolute -top-8 flex flex-col items-center">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.8, y: 10, scale: 0.5, x: 0 }}
                      animate={{ 
                        opacity: 0, 
                        y: -40 - i * 10, 
                        scale: 1.5, 
                        x: Math.sin(i) * 12 
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                      className="absolute w-2 h-2 bg-slate-400/40 rounded-full blur-[2px]"
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* The Candle Stick */}
            <div className="w-2.5 h-14 bg-gradient-to-b from-amber-100 via-rose-200 to-amber-200 rounded-full border border-rose-300 shadow-sm mt-6" />
          </div>

          {/* Cake Tiers (Tapping triggers cut action when candles are blown) */}
          <div 
            onClick={candlesBlown && !cakeCut ? handleCutCake : undefined}
            className={`relative flex flex-col items-center mt-[-2px] transition-transform duration-500 cursor-pointer ${
              candlesBlown && !cakeCut ? "hover:scale-[1.03] active:scale-[0.98]" : ""
            }`}
          >
            {/* Top Tier */}
            <div className="w-28 h-10 bg-gradient-to-r from-rose-200 to-rose-300 rounded-t-xl relative border-b-2 border-rose-300/40 z-20 flex justify-center shadow-md">
              {/* Dripping Frosting Details */}
              <div className="absolute inset-x-0 bottom-0 h-3 flex justify-around">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3.5 h-3.5 bg-rose-200 rounded-full -mb-1 shadow-sm" />
                ))}
              </div>
            </div>

            {/* Middle Tier */}
            <div className="w-40 h-12 bg-gradient-to-r from-pink-300 to-pink-400 rounded-t-xl relative border-b-2 border-pink-400/40 z-10 flex justify-center shadow-md -mt-1">
              {/* Dripping Frosting Details */}
              <div className="absolute inset-x-0 bottom-0 h-4 flex justify-around">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-pink-300 rounded-full -mb-1 shadow-sm" />
                ))}
              </div>
            </div>

            {/* Bottom Tier (Separated/Splits on cakeCut) */}
            <div className="relative w-56 h-16 z-0 -mt-1 select-none">
              
              <AnimatePresence>
                {cakeCut ? (
                  // Sliced Cake Layer Animation
                  <div className="absolute inset-0 flex justify-center items-center">
                    
                    {/* Left Main Cake Layer */}
                    <motion.div 
                      initial={{ x: 0 }}
                      animate={{ x: -16, rotate: -2 }}
                      className="absolute left-0 w-[70%] h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-l-2xl border-b-4 border-rose-500/30 flex justify-end overflow-hidden"
                    >
                      <div className="absolute inset-x-0 bottom-0 h-5 flex justify-around">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-4.5 h-4.5 bg-rose-400 rounded-full -mb-1.5 shadow-sm" />
                        ))}
                      </div>
                      
                      {/* Cream Filling Inside the cut */}
                      <div className="w-2.5 h-full bg-white/95 border-r border-rose-100 flex flex-col justify-around py-2">
                        <div className="w-full h-1 bg-pink-300" />
                        <div className="w-full h-1 bg-pink-300" />
                      </div>
                    </motion.div>

                    {/* The Cut Slice popping out */}
                    <motion.div 
                      initial={{ x: 0, y: 0, opacity: 0, scale: 0.9 }}
                      animate={{ x: 30, y: -15, rotate: 6, opacity: 1, scale: 1.05 }}
                      className="absolute right-2 w-[26%] h-full bg-gradient-to-r from-rose-400 to-rose-300 rounded-r-2xl border-b-4 border-rose-500/30 overflow-hidden shadow-2xl flex"
                    >
                      {/* Cream Filling showing on the cut side */}
                      <div className="w-2.5 h-full bg-white/95 border-r border-rose-100 flex flex-col justify-around py-2">
                        <div className="w-full h-1 bg-pink-300" />
                        <div className="w-full h-1 bg-pink-300" />
                      </div>

                      <div className="flex-1 relative">
                        <div className="absolute inset-x-0 bottom-0 h-5 flex justify-around">
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-4.5 h-4.5 bg-rose-400 rounded-full -mb-1.5 shadow-sm" />
                          ))}
                        </div>
                        
                        {/* A tiny mini-heart visualizer on the slice */}
                        <Heart className="w-4 h-4 fill-rose-500 text-rose-500 absolute top-2 right-2 animate-bounce" />
                      </div>
                    </motion.div>

                  </div>
                ) : (
                  // Full Whole Cake Layer
                  <div className="w-full h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-t-2xl border-b-4 border-rose-500/30 flex justify-center shadow-lg">
                    {/* Dripping Frosting Details */}
                    <div className="absolute inset-x-0 bottom-0 h-5 flex justify-around">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-4.5 h-4.5 bg-rose-400 rounded-full -mb-1.5 shadow-sm" />
                      ))}
                    </div>
                  </div>
                )}
              </AnimatePresence>

            </div>

            {/* Cake Plate Stand */}
            <div className="w-64 h-3.5 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full shadow-lg border-b-2 border-slate-300 z-0 mt-0.5" />
            <div className="w-20 h-5 bg-gradient-to-b from-slate-300 to-slate-200 rounded-b-xl shadow-md z-0" />
          </div>

        </div>

        {/* Message Popovers */}
        <div className="absolute bottom-[-95px] inset-x-0 h-20 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!candlesBlown && (
              <motion.div
                key="blow"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 rounded-2xl border border-amber-200 text-amber-700 shadow-sm text-xs font-semibold uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-500" /> Tap the Flame to Blow out!
              </motion.div>
            )}

            {candlesBlown && !cakeCut && (
              <motion.div
                key="cut"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-500 text-white rounded-2xl shadow-lg shadow-rose-200 text-xs font-semibold uppercase tracking-wider animate-bounce cursor-pointer"
                onClick={handleCutCake}
              >
                🍰 Tap Cake to Cut!
              </motion.div>
            )}

            {cakeCut && (
              <motion.div
                key="reset"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center gap-3"
              >
                <p className="text-rose-500 font-handwriting text-2xl font-semibold">
                  "Happy Birthday Papaa! You are so loved!"
                </p>
                <button
                  onClick={handleReset}
                  className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full text-xs font-medium border border-slate-200 transition-colors shadow-sm cursor-pointer"
                >
                  Blow Candles Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
