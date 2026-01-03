
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Music, Target, FileText } from 'lucide-react';

const Achievements: React.FC = () => {
  const items = [
    {
      title: "World Record in Kathak",
      year: "2020",
      icon: <Trophy className="text-amber-500" />,
      desc: "Recognized internationally for excellence in classical dance."
    },
    {
      title: "Royal Performance",
      year: "2021",
      icon: <Star className="text-rose-500" />,
      desc: "Performed in front of Hon. PM Narendra Modi."
    },
    {
      title: "Gold Medalist",
      year: "2022",
      icon: <Award className="text-amber-500" />,
      desc: "Indo-Bangla & Asian Championships (Tennis Volleyball)."
    },
    {
      title: "NCC National Ranker",
      year: "2023",
      icon: <Target className="text-emerald-500" />,
      desc: "OTA Chennai & RDC Delhi Top 5 National Honors."
    },
    {
      title: "Academic Excellence",
      year: "2024",
      icon: <FileText className="text-blue-500" />,
      desc: "Published International Research Paper & Patent Applicant."
    },
    {
      title: "Diploma in Kathak",
      year: "Graduated",
      icon: <Music className="text-purple-500" />,
      desc: "Specialization from MSU, Vadodara. In 2020 with Destinction."
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h2 className="font-royal text-4xl text-rose-900 mb-4">Achievements & Excellence</h2>
        <p className="text-rose-700/60 uppercase tracking-widest text-xs font-bold">A Journey of Discipline and Dedication</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-8 rounded-[2rem] shadow-lg shadow-rose-100/50 border border-rose-50 hover:border-rose-200 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-rose-50 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-[10px] font-black tracking-widest text-rose-300 uppercase">{item.year}</span>
            </div>
            <h4 className="text-xl font-bold text-rose-900 mb-2">{item.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-rose-900/40 text-sm font-medium">
          National & International Volleyball Captain (20+ Wins) • Yuva Sansad Speaker (Role of MP)
        </p>
      </div>
    </div>
  );
};

export default Achievements;
