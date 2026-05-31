import { motion } from "motion/react";
import { MailOpen, Heart, Gift } from "lucide-react";
import { useState } from "react";

const notes = [
  {
    id: 1,
    icon: <Gift className="w-8 h-8" />,
    title: "To my sweet cupcake",
    message: "May your day be filled with cake, laughter, and everything you absolutely love! You deserve the universe, and I'll always be here to cheer you on."
  },
  {
    id: 2,
    icon: <Heart className="w-8 h-8" />,
    title: "A simple wish for my laddu",
    message: "I hope you never stop smiling. Your happiness is contagious and makes my world a beautifully vibrant place."
  },
  {
    id: 3,
    icon: <MailOpen className="w-8 h-8" />,
    title: "Forever forward, papaa",
    message: "I can't wait to see all the incredible things you'll achieve. I am so ridiculously proud to be a part of your life, Yazhini."
  }
];

export function InteractiveNotes() {
  const [openNotes, setOpenNotes] = useState<number[]>([]);

  const toggleNote = (id: number) => {
    if (openNotes.includes(id)) {
      setOpenNotes(openNotes.filter(n => n !== id));
    } else {
      setOpenNotes([...openNotes, id]);
    }
  };

  return (
    <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto relative z-10 w-full mb-20">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-serif text-slate-800 mb-4"
        >
          Little Surprises
        </motion.h2>
        <p className="text-lg text-slate-600 font-sans max-w-xl mx-auto">
          Tap the cards to open some extra wishes from me to you! 💌
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {notes.map((note, index) => {
          const isOpen = openNotes.includes(note.id);
          return (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => toggleNote(note.id)}
              className="relative aspect-square cursor-pointer perspective-1000"
            >
              <motion.div 
                animate={{ rotateY: isOpen ? 180 : 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                className="w-full h-full relative preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <div 
                  className="absolute inset-0 backface-hidden bg-rose-200 rounded-3xl p-8 flex flex-col items-center justify-center text-rose-600 shadow-sm border border-rose-300 hover:shadow-lg transition-shadow"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="mb-4"
                  >
                    {note.icon}
                  </motion.div>
                  <h3 className="text-xl font-medium tracking-wide uppercase text-center">Tap to Open</h3>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg border border-rose-100"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <h4 className="text-xl font-handwriting text-rose-500 mb-4 text-center">{note.title}</h4>
                  <p className="text-slate-600 text-center leading-relaxed">
                    {note.message}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
