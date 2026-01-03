
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const PartnerStatement: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-rose-100 border border-rose-50 text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-200 via-rose-300 to-amber-200" />
      
      <div className="inline-flex items-center justify-center gap-4 mb-10">
        <div className="h-px w-8 bg-rose-200" />
        <Heart className="text-rose-500 fill-rose-500" size={32} />
        <div className="h-px w-8 bg-rose-200" />
      </div>

      <h2 className="font-royal text-4xl text-rose-900 mb-8 tracking-tight">
        A Vision for Partnership
      </h2>

      <div className="space-y-6 max-w-2xl mx-auto">
        <p className="text-xl text-rose-950 font-light leading-relaxed italic">
          "I believe marriage is a sacred partnership built on trust, respect, emotional understanding, and shared growth."
        </p>
        <p className="text-gray-600 leading-relaxed">
          I bring loyalty, grace, maturity, and warmth into a relationship. While deeply valuing family bonds, I also cherish individuality and the courage to pursue one's dreams together. My goal is to create a home that is a sanctuary of peace, laughter, and mutual elevation.
        </p>
      </div>

      <div className="mt-12 flex justify-center gap-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 mb-2">
            <Star size={20} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Loyalty</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 mb-2">
            <Heart size={20} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Warmth</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 mb-2">
            <Star size={20} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Grace</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerStatement;
