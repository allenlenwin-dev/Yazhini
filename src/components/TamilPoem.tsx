import { motion } from "motion/react";
import { Quote } from "lucide-react";
import personalPhoto from "@/IMG_20260527_183439_383.jpg";

export function TamilPoem() {
  return (
    <section className="py-24 px-6 sm:px-12 w-full relative z-10 bg-rose-500/5 my-12 border-y border-rose-100/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 blur-[100px] rounded-full opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300 blur-[120px] rounded-full opacity-30 -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Quote className="w-12 h-12 text-rose-400 opacity-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-3xl sm:text-4xl font-serif text-slate-800 leading-relaxed font-bold mb-4">
            En Anbu Papaa...
          </h3>

          <div className="flex justify-center my-8">
            <div className="relative group rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 shadow-xl border-4 border-white">
              <img 
                src={personalPhoto} 
                alt="A beautiful memory" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-rose-500 font-handwriting leading-loose">
            "You are the sweetest laddu and the craziest pineapple of my life..."
          </p>

          <p className="text-xl sm:text-2xl text-slate-700 leading-loose">
            Un azhagana sirippai paarthale,<br/>
            En heart-beat thaaru maara danc-u aadume!<br/>
            Nee anba pesumpothu thean mathiri inikkum,<br/>
            Aana pasi vanthaa thaan, unakku Godzilla avatharam kidaikkum!<br/>
          </p>

          <p className="text-xl sm:text-2xl text-rose-500 font-handwriting leading-loose">
            "You're my little cupcake, my favorite treat,<br/>
            A prickly pineapple, but oh-so-sweet!<br/>
            You steal my hoodies and you steal my heart,<br/>
            My adorable laddu, a true piece of art!"
          </p>

          <p className="text-xl sm:text-2xl text-slate-700 leading-loose">
            Eppovum ipdiye sirichitte iru papaa,<br/>
            Un koodave ottikittu iruppen like a fevicol-aa!<br/>
            Intha puthiya varusham unakku semma mass-aaga maarattum,<br/>
            Un santhosham ellamey double-triple ah perugattum!<br/>
            Happy Birthday en chella kutty!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-rose-500 font-handwriting text-3xl mt-12">
            ~ Forever admiring your spirit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
