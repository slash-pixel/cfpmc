import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';

interface HeroProps {
  lang: 'FR' | 'EN';
  setActiveView: (view: 'langues') => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, setActiveView }) => {
  return (
    <section className="relative py-20 bg-[#1B2450] text-white overflow-hidden">
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
        <Globe size={500} className="text-[#F5C518]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="inline-block bg-[#F5C518] text-[#1B2450] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
          {lang === 'FR' ? 'Nouveau au CFPMC ! Inscriptions Septembre Ouvertes' : 'New at CFPMC! September Admissions Open'}
        </div>

        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">
          {lang === 'FR' ? (
            <>Cours Intensifs de <span className="text-[#F5C518]">Français & Anglais</span></>
          ) : (
            <>Intensive <span className="text-[#F5C518]">French & English</span> Courses</>
          )}
        </h1>

        <div className="flex flex-wrap gap-3 mb-6">
          <span className="bg-white/10 backdrop-blur-xs px-3 py-1 rounded-md text-xs font-bold border border-white/20 flex items-center space-x-1.5">
            <span>🇫🇷</span> <span>Français sur Objectifs Spécifiques (FOS)</span>
          </span>
          <span className="bg-white/10 backdrop-blur-xs px-3 py-1 rounded-md text-xs font-bold border border-white/20 flex items-center space-x-1.5">
            <span>🇬🇧</span> <span>English for Specific Purposes (ESP)</span>
          </span>
        </div>

        <p className="text-slate-300 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
          {lang === 'FR' 
            ? "Maîtrisez les langues et préparez vos certifications internationales (TCF, TEF, TOEFL, IELTS) au cœur de Douala avec l'Archidiocèse."
            : "Master languages and prepare for international certifications (TCF, TEF, TOEFL, IELTS) in the heart of Douala with the Archdiocese."}
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.button 
            onClick={() => setActiveView('langues')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#F5C518] text-[#1B2450] font-black px-6 py-3 rounded-xl shadow-lg hover:bg-amber-400 transition-colors text-xs uppercase tracking-wider flex items-center space-x-2"
          >
            <span>{lang === 'FR' ? 'Découvrir le programme langues' : 'Explore language program'}</span>
            <ArrowRight size={16} />
          </motion.button>

          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#D6282F] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-red-700 transition-colors text-xs uppercase tracking-wider flex items-center space-x-2"
          >
            <span>{lang === 'FR' ? 'Pré-inscription en ligne' : 'Online Pre-registration'}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};