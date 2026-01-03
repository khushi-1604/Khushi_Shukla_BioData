
import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, ShieldCheck } from 'lucide-react';

interface FamilyTreeProps {
  isPrivate: boolean;
}

const FamilyTree: React.FC<FamilyTreeProps> = ({ isPrivate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-rose-100 border border-rose-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <Users size={120} />
      </div>

      <h3 className="font-royal text-3xl text-rose-900 mb-8 flex items-center gap-4">
        Family Tree
        <div className="h-px flex-1 bg-rose-50" />
      </h3>

      <div className="space-y-8 relative">
        {/* Connector Line */}
        <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-rose-200 via-rose-100 to-transparent" />

        <FamilyMember 
          role="Father" 
          name="Dr. Yagnesh Shukla" 
          title="Dean, Atmiya University" 
          description="A visionary academician and leader."
        />
        <FamilyMember 
          role="Mother" 
          name="Bhavini Shukla" 
          title="CEO, RK Concepts" 
          description="A dedicated entrepreneur and strategist."
        />
        <FamilyMember 
          role="Brother" 
          name="Rudra Shukla" 
          title="Student, Modi School" 
          description="A bright young mind in academic pursuit."
        />
      </div>

      <div className="mt-10 p-4 bg-rose-50/50 rounded-2xl border border-rose-100 flex items-center gap-4">
        <ShieldCheck className="text-rose-400" size={24} />
        <p className="text-sm text-rose-900/70 font-medium">
          A respected, well-educated, and culturally rooted family that embraces modern global values.
        </p>
      </div>
    </motion.div>
  );
};

const FamilyMember = ({ role, name, title, description }: any) => (
  <div className="flex items-start gap-6 relative z-10 group">
    <div className="w-12 h-12 rounded-full bg-white border-2 border-rose-100 flex items-center justify-center text-rose-500 shadow-sm group-hover:border-rose-300 group-hover:scale-110 transition-all">
      <User size={20} />
    </div>
    <div>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-900">{role}</span>
      <h4 className="text-xl font-bold text-rose-900 mb-1">{name}</h4>
      <p className="text-sm font-semibold text-rose-700/80 mb-2">{title}</p>
      <p className="text-sm text-gray-500 italic">{description}</p>
    </div>
  </div>
);

export default FamilyTree;
