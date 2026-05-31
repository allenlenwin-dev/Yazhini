import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface Particle {
  id: number;
  left: number;
  delay: number;
  size: number;
  type: "petal" | "star" | "heart";
  duration: number;
  sway: number;
}

export function FloatingHearts() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate a beautiful, scattered array of falling items
    const types: Array<"petal" | "star" | "heart"> = ["petal", "star", "heart"];
    const generated = Array.from({ length: 25 }).map((_, i) => {
      const type = types[Math.floor(Math.random() * types.length)];
      return {
        id: i,
        left: Math.random() * 100, // percentage
        delay: Math.random() * 15, // staggered start delays up to 15s
        size: type === "heart" 
          ? Math.random() * 10 + 12  // hearts 12px-22px
          : type === "star"
            ? Math.random() * 8 + 14   // stars 14px-22px
            : Math.random() * 12 + 16, // petals 16px-28px
        type,
        duration: 22 + Math.random() * 16, // slow, dreamy fall duration
        sway: Math.random() * 50 + 20, // sway amount side-to-side
      };
    });
    setParticles(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute -top-10"
          initial={{ y: -50, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, p.sway, -p.sway, p.sway / 2, 0],
            opacity: [0, 0.8, 0.8, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{ left: `${p.left}%` }}
        >
          {p.type === "heart" && (
            <Heart 
              size={p.size} 
              className="fill-rose-300/40 text-rose-300/60 drop-shadow-[0_2px_8px_rgba(244,63,94,0.15)]" 
            />
          )}

          {p.type === "star" && (
            <span 
              style={{ fontSize: `${p.size}px` }} 
              className="text-amber-300/60 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)] block leading-none select-none font-sans"
            >
              ✨
            </span>
          )}

          {p.type === "petal" && (
            <span 
              style={{ fontSize: `${p.size}px` }} 
              className="text-pink-300/50 drop-shadow-[0_2px_8px_rgba(244,143,177,0.2)] block leading-none select-none font-sans"
            >
              🌸
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
