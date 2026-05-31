import { Heart } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { FloatingHearts } from "./components/FloatingHearts";
import { Hero } from "./components/Hero";
import { LoveLetter } from "./components/LoveLetter";
import { ReasonsWhy } from "./components/ReasonsWhy";
import { TamilPoem } from "./components/TamilPoem";
import { PromiseSection } from "./components/PromiseSection";
import { InteractiveNotes } from "./components/InteractiveNotes";
import { EntryScreen } from "./components/EntryScreen";
import { MusicWidget } from "./components/MusicWidget";
import { VirtualCake } from "./components/VirtualCake";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen relative flex flex-col items-center overflow-x-hidden bg-rose-50/50">
      
      {/* 3D Entry Screen Envelope */}
      <AnimatePresence>
        {!entered && <EntryScreen onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {/* Floating Lofi Romance Music Player & Visualizer (Rendered globally for perfect autoplay gesture sync) */}
      <MusicWidget autoPlay={true} entered={entered} />

      {entered && (
        <>
          {/* Falling Particles: Petals, Stars & Hearts */}
          <FloatingHearts />

          {/* Dreamy Ambient Background Glow Blobs */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[10%] left-[-5%] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-pink-200/30 rounded-full blur-[100px] sm:blur-[130px] animate-blob-slow" />
            <div className="absolute top-[40%] right-[-10%] w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] bg-rose-200/25 rounded-full blur-[120px] sm:blur-[150px] animate-blob-slower" />
            <div className="absolute bottom-[15%] left-[5%] w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] bg-amber-100/25 rounded-full blur-[110px] sm:blur-[140px] animate-blob-slowest" />
          </div>
          
          <main className="w-full relative z-10">
            {/* 1. Hero Welcome Header */}
            <Hero />
            
            <div className="w-full bg-white/40 backdrop-blur-3xl -skew-y-2 my-12 hidden md:block" style={{ height: '80px' }} />
            
            {/* 2. Interactive Love Letter */}
            <LoveLetter />
        
            <div className="w-full bg-rose-100/40 backdrop-blur-3xl skew-y-2 my-12 hidden md:block" style={{ height: '80px' }} />
            
            {/* 3. virtual Cake Cutting & Wish Making */}
            <VirtualCake />

            <div className="w-full bg-white/40 backdrop-blur-3xl -skew-y-2 my-12 hidden md:block" style={{ height: '80px' }} />

            {/* 4. 10 Reasons I Love You */}
            <ReasonsWhy />

            <div className="w-full bg-rose-100/40 backdrop-blur-3xl skew-y-2 my-12 hidden md:block" style={{ height: '80px' }} />

            {/* 5. Heartbeat Tamil Poem & Memories */}
            <TamilPoem />
            
            <div className="w-full bg-white/40 backdrop-blur-3xl skew-y-2 my-12 hidden md:block" style={{ height: '80px' }} />
            
            {/* 6. Special Love Promises */}
            <PromiseSection />

            <div className="w-full bg-rose-100/40 backdrop-blur-3xl -skew-y-2 my-12 hidden md:block" style={{ height: '80px' }} />

            {/* 7. Gift Box Surprise Cards */}
            <InteractiveNotes />
          </main>

          {/* Premium Footer */}
          <footer className="w-full py-16 text-center text-slate-500 relative z-10 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-rose-50/50 to-rose-100/80 border-t border-rose-100/80 mt-auto">
            <p className="flex items-center gap-2 text-lg font-sans">
              Made with <Heart className="w-6 h-6 fill-rose-500 text-rose-500 animate-pulse" /> for Yazhini
            </p>
            <p className="text-md font-medium text-slate-600 mt-2 font-handwriting text-2xl">Happy Birthday en chella kutty! 🎉 ✨</p>
          </footer>
        </>
      )}
    </div>
  );
}
