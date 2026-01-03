
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, Variants } from 'framer-motion';
import { 
  Heart, 
  Star, 
  Users, 
  Phone, 
  MapPin, 
  Sparkles,
  Calendar,
  Compass,
  Briefcase,
  Eye,
  Flower
} from 'lucide-react';
import DetailsCard from './components/DetailsCard';
import FamilyTree from './components/FamilyTree';
import Lifestyle from './components/Lifestyle';
import Achievements from './components/Achievements';
import PartnerStatement from './components/PartnerStatement';
import AstroSection from './components/AstroSection';
import PrivacyToggle from './components/PrivacyToggle';

const App: React.FC = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fix: Explicitly type variants as Variants to ensure proper easing type inference for cubic-bezier arrays
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0.1
          }}
          animate={{
            y: [null, "-20%", "20%", "-20%"],
            x: [null, "10%", "-10%", "10%"],
            rotate: [0, 360],
            scale: [1, 1.3, 0.8, 1]
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
        >
          {i % 4 === 0 ? (
            <Heart className="text-rose-200/40" size={10 + Math.random() * 30} />
          ) : i % 4 === 1 ? (
            <Star className="text-amber-200/40" size={8 + Math.random() * 20} />
          ) : i % 4 === 2 ? (
            <Flower className="text-rose-100/30" size={15 + Math.random() * 25} />
          ) : (
            <div className="w-1 h-1 bg-amber-300/30 rounded-full blur-[1px]" />
          )}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fffcf9] text-gray-800 overflow-x-hidden selection:bg-rose-100 selection:text-rose-900 font-inter">
      <FloatingElements />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-rose-400 to-amber-200 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Spiritual Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="pt-12 text-center relative z-20"
      >
        <motion.div
          animate={{ 
            opacity: [0.4, 1, 0.4],
            letterSpacing: ["0.3em", "0.5em", "0.3em"]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="font-royal text-2xl md:text-4xl text-rose-800 font-semibold drop-shadow-sm"
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.div>
        <div className="mt-4 flex justify-center items-center gap-6">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent to-rose-300" 
          />
          <Flower className="text-rose-400/60 animate-spin-slow" size={20} />
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-px bg-gradient-to-l from-transparent to-rose-300" 
          />
        </div>
      </motion.div>

      {/* Hero Header */}
      <header className="relative pt-16 pb-12 md:pt-24 md:pb-20 px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-rose-200 blur-2xl opacity-20" />
              <div className="relative p-6 rounded-full bg-white/40 backdrop-blur-sm border border-rose-100 shadow-xl">
                <Sparkles className="text-rose-500" size={32} />
              </div>
            </motion.div>
          </div>
          
          <motion.h1 
            initial={{ letterSpacing: "-0.05em", opacity: 0 }}
            animate={{ letterSpacing: "0.02em", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="font-royal text-7xl md:text-[10rem] font-bold text-[#3a1515] tracking-tight mb-6 leading-[0.9]"
          >
            Khushi Shukla
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="text-xl md:text-3xl text-rose-800/60 font-medium uppercase tracking-[0.4em] italic mb-12"
          >
            Grace in Tradition • Excellence in Modernity
          </motion.p>
          
          <div className="flex items-center justify-center gap-10">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5 }} className="h-px w-24 bg-rose-100" />
            <div className="flex gap-6 items-center">
              <Star size={20} className="fill-amber-300 text-amber-300 animate-pulse" />
              <Heart size={24} className="fill-rose-500 text-rose-500 drop-shadow-lg" />
              <Star size={20} className="fill-amber-300 text-amber-300 animate-pulse" />
            </div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5 }} className="h-px w-24 bg-rose-100" />
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-32 space-y-40">
        
        {/* Section 1: Quick Stats & Details */}
        <motion.section 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <QuickStat icon={<Calendar size={22}/>} label="Age" value="22 Years" delay={0.1} />
            <QuickStat icon={<Compass size={22}/>} label="Height" value="5 ft 6 in" delay={0.2} />
            <QuickStat icon={<Briefcase size={22}/>} label="Education" value="B.Tech CSE" delay={0.3} />
            <QuickStat icon={<Heart size={22}/>} label="Blood Group" value="B Positive" delay={0.4} />
            <QuickStat icon={<Star size={22}/>} label="Caste" value="Brahmin" delay={0.5} />
            <QuickStat icon={<MapPin size={22}/>} label="Location" value="Gujarat" delay={0.6} />
          </div>

          <DetailsCard isPrivate={isPrivate} />
        </motion.section>

        {/* Section 2: Family & Values */}
        <motion.section 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16"
        >
          <FamilyTree isPrivate={isPrivate} />
          <Lifestyle />
        </motion.section>

        {/* Section 3: Achievements */}
        <motion.section 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
        >
          <Achievements />
        </motion.section>

        {/* Section 4: Partner Statement */}
        <motion.section 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <PartnerStatement />
        </motion.section>

        {/* Section 5: Astro & Kundli */}
        <motion.section 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <AstroSection isPrivate={isPrivate} />
        </motion.section>

        {/* Section 6: Royal Reveal (The Portrait) */}
        <motion.section 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl mx-auto py-24"
        >
          <motion.div
            whileHover={{ y: -15, scale: 1.02 }}
            onClick={() => setActiveImage("https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000&h=1300")}
            className="group relative cursor-pointer"
          >
            <div className="absolute -inset-8 border border-rose-100 rounded-[4rem] pointer-events-none group-hover:border-rose-300 transition-all duration-700" />
            <div className="absolute -inset-4 border-2 border-amber-100 rounded-[3.5rem] pointer-events-none opacity-40 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden aspect-[4/5.5] flex flex-col items-center justify-center p-14 text-center border border-rose-50 transition-all duration-1000 relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-rose-50/80 via-white to-amber-50/80"
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                  className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center mb-10 text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all duration-700"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Eye size={48} strokeWidth={1} />
                </motion.div>
                <h3 className="font-royal text-5xl text-rose-900 mb-4 tracking-tight leading-tight">The Royal Portrait</h3>
                <p className="text-rose-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-10 italic">Behold the confluence of tradition & vision</p>
                <div className="flex justify-center gap-4">
                  <Star size={18} className="text-amber-400 fill-amber-300/20" />
                  <div className="relative">
                    <Heart size={20} className="text-rose-500 fill-rose-500 animate-ping absolute opacity-30" />
                    <Heart size={20} className="text-rose-500 fill-rose-500 relative" />
                  </div>
                  <Star size={18} className="text-amber-400 fill-amber-300/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 7: Final Contact */}
        <motion.section 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="text-center pt-20 pb-20"
        >
          <div className="sticky top-8 flex justify-center z-50 pointer-events-none mb-16">
            <PrivacyToggle isPrivate={isPrivate} onToggle={() => setIsPrivate(!isPrivate)} />
          </div>
          
          <div className="inline-block p-1.5 bg-gradient-to-br from-amber-100 via-rose-200 to-amber-100 rounded-[4rem] shadow-2xl overflow-hidden relative group">
            <motion.div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="bg-white px-10 py-16 md:px-24 md:py-24 rounded-[3.8rem] border border-white relative z-10">
              <h2 className="font-royal text-5xl md:text-6xl text-rose-950 mb-14 tracking-tight">Initiate a Sacred Bond</h2>
              <div className="grid md:grid-cols-2 gap-10 mb-16">
                
                {/* Father Contact Card */}
                <motion.a 
                  href={isPrivate ? "#" : "tel:+919825510034"}
                  whileHover={{ y: -10 }}
                  className={`flex flex-col items-center p-10 bg-rose-50/40 rounded-[2.5rem] border border-rose-100 group/card no-underline transition-all duration-500 ${isPrivate ? 'cursor-not-allowed grayscale' : 'cursor-pointer hover:bg-rose-100/50 shadow-xl'}`}
                >
                  <div className="p-4 bg-white rounded-2xl text-rose-500 mb-6 shadow-xl group-hover/card:bg-rose-500 group-hover/card:text-white transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-rose-300 mb-3 font-black">Father's Presence</span>
                  <p className="text-3xl font-bold text-rose-900 mb-2 font-inter tracking-tight">
                    {isPrivate ? "Locked" : "98255 10034"}
                  </p>
                  <p className="text-sm text-rose-700/50 font-medium tracking-wide mb-4">Dr. Yagnesh Shukla</p>
                  {!isPrivate && (
                    <span className="text-[9px] font-bold text-rose-400/60 uppercase tracking-widest animate-pulse">Click to Call Directly</span>
                  )}
                </motion.a>

                {/* Mother Contact Card */}
                <motion.a 
                  href={isPrivate ? "#" : "tel:+919664708733"}
                  whileHover={{ y: -10 }}
                  className={`flex flex-col items-center p-10 bg-rose-50/40 rounded-[2.5rem] border border-rose-100 group/card no-underline transition-all duration-500 ${isPrivate ? 'cursor-not-allowed grayscale' : 'cursor-pointer hover:bg-rose-100/50 shadow-xl'}`}
                >
                  <div className="p-4 bg-white rounded-2xl text-rose-500 mb-6 shadow-xl group-hover/card:bg-rose-500 group-hover/card:text-white transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-rose-300 mb-3 font-black">Mother's Presence</span>
                  <p className="text-3xl font-bold text-rose-900 mb-2 font-inter tracking-tight">
                    {isPrivate ? "Locked" : "96647 08733"}
                  </p>
                  <p className="text-sm text-rose-700/50 font-medium tracking-wide mb-4">Bhavini Shukla</p>
                  {!isPrivate && (
                    <span className="text-[9px] font-bold text-rose-400/60 uppercase tracking-widest animate-pulse">Click to Call Directly</span>
                  )}
                </motion.a>

              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-4"
              >
                <p className="font-royal italic text-rose-900/80 text-3xl">
                  "A journey of two souls, one beautiful future."
                </p>
                <div className="flex justify-center gap-1 opacity-30">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] bg-[#1a0b0b]/98 backdrop-blur-2xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-amber-200 via-rose-400 to-amber-200 rounded-[2.2rem] blur opacity-30" />
              <img
                src={activeImage}
                alt="Portrait"
                className="relative w-full h-auto rounded-[2rem] shadow-2xl border-2 border-white/10"
              />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveImage(null)}
                className="absolute -top-16 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-[0.4em] text-[10px] font-bold"
              >
                Close View
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="text-center pb-16 text-rose-300 text-[10px] tracking-[0.6em] uppercase opacity-40">
        Authentic • Cultured • Eternal
      </footer>
    </div>
  );
};

const QuickStat = ({ icon, label, value, delay = 0 }: { icon: React.ReactNode, label: string, value: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.05 }}
    className="bg-white p-6 rounded-[2.5rem] border border-rose-50 shadow-sm hover:shadow-2xl hover:shadow-rose-100/40 transition-all flex flex-col items-center text-center group cursor-default"
  >
    <div className="text-rose-400 mb-4 group-hover:scale-125 transition-all duration-500 p-3 bg-rose-50/50 rounded-2xl">
      {icon}
    </div>
    <span className="text-[10px] uppercase tracking-[0.2em] text-rose-200 font-black mb-1 group-hover:text-rose-400 transition-colors">
      {label}
    </span>
    <span className="text-sm font-bold text-rose-900 tracking-tight leading-tight">
      {value}
    </span>
  </motion.div>
);

export default App;
