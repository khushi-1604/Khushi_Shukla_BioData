
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';

interface PrivacyToggleProps {
  isPrivate: boolean;
  onToggle: () => void;
}

const PrivacyToggle: React.FC<PrivacyToggleProps> = ({ isPrivate, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl backdrop-blur-md border transition-all ${
        isPrivate 
          ? 'bg-rose-900/80 text-white border-rose-700' 
          : 'bg-white/80 text-rose-900 border-rose-200'
      }`}
    >
      <div className="relative">
        <motion.div
          animate={{ scale: isPrivate ? [1, 1.2, 1] : 1 }}
          transition={{ repeat: isPrivate ? Infinity : 0, duration: 2 }}
        >
          {isPrivate ? <Lock size={18} /> : <Unlock size={18} />}
        </motion.div>
      </div>
      <div className="text-left leading-none">
        <p className="text-[10px] uppercase tracking-widest font-black opacity-60">Privacy Mode</p>
        <p className="text-xs font-bold uppercase tracking-tight">
          {isPrivate ? "Enabled (Private)" : "Disabled (Public)"}
        </p>
      </div>
    </motion.button>
  );
};

export default PrivacyToggle;
