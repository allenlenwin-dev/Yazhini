import { Heart, Sparkles, MailOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import personalPhoto from "@/IMG_20260527_183439_383.jpg";

export function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto relative z-10 w-full">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-3 sm:p-4 bg-rose-100/80 rounded-full text-rose-500 mb-6 shadow-md shadow-rose-100"
        >
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-rose-500/10 text-rose-500" />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-serif text-slate-800 mb-4"
        >
          A Special Note For You...
        </motion.h2>
        <p className="text-rose-500 font-handwriting text-xl">
          Written directly from my heart
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Realistic Polaroid Frame with Tape & 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          whileHover={{ scale: 1.04, rotate: 2, y: -8 }}
          className="relative w-full max-w-sm mx-auto lg:max-w-full cursor-pointer z-20 select-none"
        >
          {/* Adhesive Polaroid Tape on top */}
          <div className="polaroid-tape" />

          {/* Polaroid Outer shadow and tilt background */}
          <div className="absolute inset-0 bg-rose-200/40 rounded-[1.5rem] rotate-3 -z-10 shadow-lg blur-[2px]" />
          
          {/* Polaroid Body */}
          <div className="relative rounded-[1rem] overflow-hidden border-[12px] border-white pb-6 shadow-2xl bg-white flex flex-col">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[0.25rem]">
              <img 
                src={personalPhoto} 
                alt="Beautiful memory" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-rose-500/5 mix-blend-color" />
            </div>
            
            {/* Handwritten Title at the bottom of polaroid */}
            <div className="pt-5 text-center px-4">
              <p className="font-handwriting text-3xl text-rose-500 tracking-wide">
                My favorite smile... ✨
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Unfolding Letter Card */}
        <div className="relative z-10 w-full">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              // Folded Letter Box State
              <motion.div
                key="folded"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsOpen(true)}
                className="bg-gradient-to-tr from-rose-100/90 via-white to-pink-50/90 backdrop-blur-md p-10 rounded-3xl shadow-xl shadow-rose-200/20 border border-rose-200/60 text-center flex flex-col items-center justify-center min-h-[340px] cursor-pointer group"
              >
                {/* Envelope Wax Seal Emblem */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-20 h-20 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-rose-200 border-2 border-white/60 mb-6 group-hover:rotate-6 transition-transform"
                >
                  <MailOpen className="w-8 h-8" />
                </motion.div>

                <h3 className="text-2xl font-serif text-slate-800 font-bold mb-2">
                  You received a love letter!
                </h3>
                
                <p className="text-slate-600 font-sans text-sm max-w-xs mb-6">
                  Click the letter seal below to break the gold seal and unfold your handwritten letter, my laddu.
                </p>

                <span className="px-5 py-2.5 bg-rose-500 text-white rounded-full text-xs font-semibold uppercase tracking-widest shadow-md shadow-rose-200 group-hover:bg-rose-600 transition-colors">
                  Tap to Unfold 💌
                </span>
              </motion.div>
            ) : (
              // Unfolded Letter Paper State
              <motion.div
                key="unfolded"
                initial={{ opacity: 0, height: 100 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 100 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="bg-white/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border border-rose-100 space-y-6 relative overflow-hidden"
              >
                {/* Background decorative soft ring */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-rose-200 blur-[80px] rounded-full opacity-50 -z-10" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-pink-200 blur-[90px] rounded-full opacity-40 -z-10" />

                {/* Letter Content */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.25 } }
                  }}
                  className="font-sans text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed"
                >
                  <motion.p 
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="text-2xl sm:text-3xl text-rose-500 font-handwriting leading-relaxed mb-6"
                  >
                    Dearest Yazhini, my sweet cupcake,
                  </motion.p>
                  
                  <motion.p 
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="indent-8"
                  >
                    Seeing you grow and glow brings so much pure joy to my heart. You are entering such a beautiful phase of your life! It’s a time for dreaming bigger, exploring, and embracing all the wonderful things life has to offer, my sweet laddu.
                  </motion.p>
                  
                  <motion.p 
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="indent-8"
                  >
                    Your smile can instantly light up my darkest days, and your heart is pure gold. Whatever you set your mind to, you achieve with so much grace. From the little giggles to the grand milestones, being a part of your journey is my greatest blessing, papaa.
                  </motion.p>
                  
                  <motion.p 
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="indent-8"
                  >
                    I just wanted to remind you how deeply cherished and absolutely adored you are, not just today, but every single day. I am so proud of you, and I promise to always be by your side cheering you on.
                  </motion.p>

                  <motion.div 
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    className="text-right pt-6 border-t border-rose-100 flex flex-col items-end"
                  >
                    <p className="text-xl font-handwriting text-rose-500 flex items-center gap-1">
                      Endless love, <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse inline" />
                    </p>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Your Sweetheart</p>
                  </motion.div>
                </motion.div>

                {/* Close/Fold Letter Button */}
                <div className="pt-2 text-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-500 text-xs font-semibold rounded-full border border-rose-200/50 transition-colors shadow-sm cursor-pointer"
                  >
                    Refold Letter 💌
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
