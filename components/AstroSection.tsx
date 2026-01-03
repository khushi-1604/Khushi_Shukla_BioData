import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Lock, ChevronDown, Sparkles, Star } from 'lucide-react';

interface AstroSectionProps {
  isPrivate: boolean;
}

const AstroSection: React.FC<AstroSectionProps> = ({ isPrivate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/40 backdrop-blur-sm border-2 border-red-900 border-dashed rounded-[3rem] p-4 transition-all hover:bg-white/60">
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full flex items-center justify-between p-8 group transition-all"
      >
        <div className="flex items-center gap-6">
          <motion.div 
            animate={{ rotate: isOpen ? 90 : 0 }}
            className="p-4 bg-white rounded-[1.5rem] shadow-lg text-red-900 border border-red-900"
          >
            <Compass size={28} />
          </motion.div>
          <div className="text-left">
            <h4 className="font-royal text-2xl text-red-900">Astro & Kundli Profile</h4>
            <p className="text-xs text-red-900 font-bold uppercase tracking-[0.2em] mt-1">Celestial Alignment & Heritage</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
          className="text-red-900 group-hover:text-red-600 transition-colors"
          style={{ color: 'brown' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex justify-between items-center py-4 border-b border-red-900 group"
                >
                  <span className="text-xs font-bold text-red-900 uppercase tracking-widest">Birth Date</span>
                  <span className="text-lg font-bold text-red-900">{isPrivate ? "Access Restricted" : "16 March 2004"}</span>
                </motion.div>
                <div className="p-6 bg-red-100/50 rounded-3xl border border-red-900 italic text-sm text-red-900/90">
                  "Alignment of stars that bestows grace, intelligence, and traditional wisdom upon the persona."
                </div>
              </div>
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="p-8 bg-white rounded-[2rem] border border-red-900 shadow-xl shadow-red-900/20 relative group overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 p-8 opacity-[0.05] group-hover:rotate-45 transition-transform duration-1000">
                  <Star size={100} fill="currentColor" />
                </div>
                <Sparkles className="absolute top-6 right-6 text-amber-200 animate-pulse" size={24} />
                <h5 className="font-royal text-xl text-red-900 mb-6 flex items-center gap-2">
                  Spiritual Attributes
                </h5>
                <ul className="space-y-4">
                  {[
                    { label: "Gotra", val: "Kaundinya" },
                    { label: "Caste", val: "Audichya Sada Charso" },
                    { label: "Varna", val: "Brahmin" }
                  ].map((attr, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="font-bold text-xs uppercase tracking-widest text-gray-400 w-16">{attr.label}</span>
                      <span className="font-semibold text-red-900">{attr.val}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-3 p-3 bg-amber-50/50 rounded-2xl text-[10px] text-amber-800 font-bold uppercase tracking-wider border border-amber-100">
                  <Lock size={14} /> 
                  Detailed Astro Report available for families
                </div>
              </motion.div>
              {/* WhatsApp Button for Kundali */}
              <div className="mt-8 flex justify-end">
                <a
                  href="https://wa.me/919664708733?text=Hello%2C%20I%20am%20Interested%20in%20this%20profile.%20Kindly%20share%20the%20full%20kundali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow transition-colors text-sm"
                  style={{ textDecoration: 'none' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.14.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                  Request Full Kundali on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AstroSection;
