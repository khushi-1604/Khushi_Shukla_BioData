
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BookOpen, Heart, Music, Sun, Sparkles, Map } from 'lucide-react';

const Lifestyle: React.FC = () => {
  const values = [
    { text: "Spiritual Grounding", icon: <Sun size={16}/> },
    { text: "Continuous Learning", icon: <BookOpen size={16}/> },
    { text: "Health & Discipline", icon: <Activity size={16}/> },
    { text: "Cultural Roots", icon: <Music size={16}/> },
    { text: "Emotional Intelligence", icon: <Heart size={16}/> },
    { text: "Elegant Simplicity", icon: <Sparkles size={16}/> },
  ];

  const hobbies = [
    "Classical Kathak", "Traveling", "Volleyball", "Karate", "AI Research", "Swimming", "Public Speaking"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#2d1111] via-[#3a1515] to-[#1a0b0b] p-12 rounded-[3.5rem] shadow-[0_30px_60px_-12px_rgba(58,21,21,0.4)] text-white overflow-hidden relative border border-white/5"
    >
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-500/5 rounded-full blur-[80px] -ml-30 -mb-30 pointer-events-none" />
      
      <h3 className="font-royal text-4xl text-rose-200 mb-10 flex items-center gap-6">
        Lifestyle & Ethos
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </h3>

      <div className="relative mb-12">
        <Sparkles className="absolute -top-4 -left-4 text-amber-300/20" size={32} />
        <p className="text-rose-100/90 leading-relaxed text-xl font-light italic pl-2">
          "I navigate life with a heart rooted in tradition and a mind focused on the future. I value integrity, respect, and the pursuit of purposeful living."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {values.map((v, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
            className="flex items-center gap-4 p-5 bg-white/5 rounded-[1.5rem] border border-white/10 transition-colors"
          >
            <div className="p-2 bg-rose-500/20 rounded-xl text-rose-300">
              {v.icon}
            </div>
            <span className="text-sm font-semibold tracking-wide text-rose-50">{v.text}</span>
          </motion.div>
        ))}
      </div>

      <div className="pt-10 border-t border-white/10 relative">
        <div className="flex items-center gap-3 mb-6">
          <Map className="text-amber-400" size={18} />
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 font-black">Hobbies & Interests</h4>
        </div>
        <div className="flex flex-wrap gap-3">
          {hobbies.map((h, i) => (
            <motion.span 
              key={i} 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(251, 113, 133, 0.3)" }}
              className="px-5 py-2 bg-rose-500/10 rounded-full text-[11px] font-bold border border-rose-500/30 text-rose-100 shadow-sm"
            >
              {h}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Lifestyle;
