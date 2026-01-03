
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, User, Star, Calendar, Sparkles, ShieldCheck } from 'lucide-react';

interface DetailsCardProps {
  isPrivate: boolean;
}

const DetailsCard: React.FC<DetailsCardProps> = ({ isPrivate }) => {
  const details = [
    { label: "Date of Birth", value: "16 March 2004", icon: <Calendar size={18}/>, sensitive: true },
    { label: "Education", value: "B.Tech – Computer Science Engineering", icon: <GraduationCap size={18}/> },
    { label: "Profession", value: "AI Intern & Tech Project Developer", icon: <User size={18}/> },
    { label: "Gotra", value: "Kaundinya", icon: <Star size={18}/> },
    { label: "Caste", value: "Audichya Sada Charso Brahmin", icon: <User size={18}/> },
    { label: "Heritage", value: "Brahmin Traditions", icon: <ShieldCheck size={18}/> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white p-12 md:p-16 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(30,41,59,0.15)] border border-slate-200 relative overflow-hidden"
    >
      {/* Background Decorative Sparkles */}
      <div className="absolute -top-20 -right-20 p-20 opacity-[0.03] rotate-45 select-none pointer-events-none">
        <Sparkles size={400} />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-300 pb-10">
        <div>
          <h3 className="font-royal text-5xl text-slate-900 mb-2">The Personal Profile</h3>
          <p className="text-slate-500 uppercase tracking-[0.4em] text-[10px] font-black">Individual Excellence & Lineage</p>
        </div>
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-40" />
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
        {details.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="flex items-start gap-8 group"
          >
            <div className="mt-1 p-4 rounded-[1.25rem] bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-300/50">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2 group-hover:text-slate-800 transition-colors">
                {item.label}
              </p>
              <p className="text-2xl font-semibold text-gray-800 tracking-tight group-hover:text-slate-900 transition-colors">
                {item.sensitive && isPrivate ? "Content Encrypted" : item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center gap-6 justify-between opacity-60">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-slate-500" />
          <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">Residing in Gujarat, India</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-slate-500 uppercase italic">
          Modern Education • Traditional Wisdom
        </div>
      </div>
    </motion.div>
  );
};

export default DetailsCard;
