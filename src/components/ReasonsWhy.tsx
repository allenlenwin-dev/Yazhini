import { Star, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import photo1 from "@/IMG_20260527_183540_004.jpg";
import photo2 from "@/IMG_20260527_183624_218.jpg";

const reasons = [
  "Your kindness makes my world so much softer.",
  "You always know exactly how to make me laugh, my sweet pineapple.",
  "Your courage to be yourself is deeply inspiring to me.",
  "The beautiful way your eyes light up when you talk about things you love.",
  "Your pure, unfiltered, and truly beautiful heart, my laddu.",
  "You never give up, no matter the challenge you face.",
  "Your amazing sense of style and unparalleled grace.",
  "The adorable way you scrunch your nose when you smile, and how you sing along to our favorite song, my sweet cupcake.",
  "Your sweet voice is like a comforting melody to me.",
  "Simply because you are my papaa, and you mean the absolute world to me."
];

export function ReasonsWhy() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10 w-full">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1 px-4 py-1.5 bg-rose-100 rounded-full text-rose-500 font-semibold text-xs tracking-wider uppercase mb-4"
        >
          <Sparkles className="w-4 h-4 animate-pulse" /> Millions of Details <Sparkles className="w-4 h-4 animate-pulse" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-800 mb-6 drop-shadow-sm"
        >
          10 Reasons I Love You
        </motion.h2>
        <p className="text-xl text-rose-500 font-handwriting">
          (Though there are a million more, my sweet laddu!)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Dynamic Polaroid Photo Stacks */}
        <div className="lg:col-span-5 hidden lg:block sticky top-12 space-y-16 py-4">
          
          {/* Polaroid 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 12 }}
            whileHover={{ scale: 1.05, rotate: 2, y: -10, zIndex: 30 }}
            className="relative group w-full max-w-[320px] cursor-pointer"
          >
            {/* Polaroid Tape */}
            <div className="polaroid-tape" />
            
            {/* Card Background Shadow */}
            <div className="absolute inset-0 bg-rose-200/50 rounded-2xl rotate-3 -z-10 shadow-lg blur-[1px]" />
            
            {/* Polaroid Frame */}
            <div className="relative rounded-2xl overflow-hidden border-[10px] border-white pb-5 shadow-2xl bg-white">
              <div className="aspect-[3/4] overflow-hidden rounded-t-[0.25rem]">
                <img 
                  src={photo1} 
                  alt="Lovely memory" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
              </div>
              <div className="pt-4 text-center px-2">
                <p className="font-handwriting text-2xl text-rose-500">Pure happiness... 🌸</p>
              </div>
            </div>
          </motion.div>
          
          {/* Polaroid 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: -2, y: -10, zIndex: 30 }}
            className="relative group w-5/6 ml-auto max-w-[300px] cursor-pointer"
          >
            {/* Polaroid Tape */}
            <div className="polaroid-tape" />

            {/* Card Background Shadow */}
            <div className="absolute inset-0 bg-pink-200/40 rounded-2xl -rotate-3 -z-10 shadow-lg blur-[1px]" />
            
            {/* Polaroid Frame */}
            <div className="relative rounded-2xl overflow-hidden border-[10px] border-white pb-5 shadow-2xl bg-white">
              <div className="aspect-[3/4] overflow-hidden rounded-t-[0.25rem]">
                <img 
                  src={photo2} 
                  alt="Sweet smile" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
              </div>
              <div className="pt-4 text-center px-2">
                <p className="font-handwriting text-2xl text-rose-500 font-medium">Sweetest soul... ✨</p>
              </div>
            </div>
          </motion.div>

        </div>


        {/* Right Side: Cascading Reason Cards */}
        <div className="lg:col-span-7 space-y-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 60, damping: 14, delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.02, 
                x: 8, 
                backgroundColor: "rgba(255, 255, 255, 1)",
                boxShadow: "0 10px 25px -5px rgba(244, 63, 94, 0.1)"
              }}
              className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-sm border border-rose-100/60 flex items-start gap-5 relative hover:border-rose-200 transition-all duration-300 group cursor-pointer"
            >
              {/* Number Circle */}
              <div className="min-w-10 h-10 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center text-rose-600 font-serif font-bold text-lg flex-shrink-0 group-hover:from-rose-500 group-hover:to-pink-500 group-hover:text-white transition-all shadow-inner">
                {index + 1}
              </div>
              
              {/* Reason Content */}
              <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed pt-1.5 flex-1 pr-6">
                {reason}
              </p>
              
              {/* Gold Star emblem */}
              <Star className="w-4 h-4 text-rose-300 absolute top-5 right-5 opacity-40 group-hover:opacity-100 group-hover:text-rose-500 group-hover:rotate-45 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
