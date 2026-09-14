import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Home, Info, BookOpen, Tag, Globe } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'langues';
  setActiveView: (view: 'home' | 'langues') => void;
  lang: 'FR' | 'EN';
  setLang: (lang: 'FR' | 'EN') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setActiveView, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formationsList = [
    { name: lang === 'FR' ? "Langues (Français & Anglais)" : "Languages (French & English)", action: () => setActiveView('langues'), shape: "border-l-4 border-[#F5C518]" },
    { name: lang === 'FR' ? "Journalisme & Audio" : "Journalism & Audio", href: "#apropos", shape: "border-l-4 border-[#D6282F]" },
    { name: lang === 'FR' ? "Infographie" : "Infographics", href: "#apropos", shape: "border-l-4 border-[#1B2450]" },
    { name: lang === 'FR' ? "Maintenance Informatique" : "IT Maintenance", href: "#apropos", shape: "border-l-4 border-[#F5C518]" },
    { name: lang === 'FR' ? "Marketing Digital" : "Digital Marketing", href: "#apropos", shape: "border-l-4 border-[#D6282F]" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo CFPMC */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveView('home')}>
          <div className="w-10 h-10 rounded-full bg-[#1B2450] flex items-center justify-center text-white font-black text-sm shadow-md border-2 border-[#F5C518]">
            CP
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-black tracking-widest leading-none">
              <span className="text-[#1B2450]">CF</span>
              <span className="text-[#D6282F]">PMC</span>
            </div>
            <span className="text-[8px] font-bold text-[#F5C518] uppercase tracking-wider mt-0.5">
              Archidiocèse de Douala
            </span>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-3 text-xs md:text-sm font-bold uppercase tracking-wider">
          
          <motion.button 
            onClick={() => setActiveView('home')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1.5 rounded-full border shadow-sm flex items-center space-x-1.5 transition-colors ${
              currentView === 'home' ? 'bg-[#1B2450] text-white border-[#1B2450]' : 'bg-slate-50 text-[#1B2450] border-slate-200'
            }`}
          >
            <Home size={13} className={currentView === 'home' ? 'text-[#F5C518]' : 'text-[#1B2450]'} />
            <span>{lang === 'FR' ? 'Accueil' : 'Home'}</span>
          </motion.button>

          <motion.a 
            href="#apropos" 
            onClick={() => setActiveView('home')}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 rounded-md bg-slate-50 text-[#1B2450] border border-slate-200 shadow-sm flex items-center space-x-1.5"
          >
            <Info size={13} className="text-[#D6282F]" />
            <span>{lang === 'FR' ? 'À Propos' : 'About'}</span>
          </motion.a>

          {/* Dropdown Formations */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1.5 rounded-xl border shadow-sm flex items-center space-x-1.5 focus:outline-none ${
                currentView === 'langues' ? 'bg-[#1B2450] text-white border-[#1B2450]' : 'bg-slate-50 text-[#1B2450] border-slate-200'
              }`}
            >
              <BookOpen size={13} className="text-[#F5C518]" />
              <span>{lang === 'FR' ? 'Formations' : 'Training'}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 5 }}
                  className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-50 space-y-1"
                >
                  <div className="px-3 py-1 text-[9px] font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-1">
                    {lang === 'FR' ? 'Programmes Officiels' : 'Official Programs'}
                  </div>
                  {formationsList.map((item, index) => (
                    item.action ? (
                      <button
                        key={index}
                        onClick={() => { item.action(); setIsOpen(false); }}
                        className={`w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-amber-50 transition-all rounded-md ${item.shape}`}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => { setActiveView('home'); setIsOpen(false); }}
                        className={`block px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-all rounded-md ${item.shape}`}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a 
            href="#tarifs" 
            onClick={() => setActiveView('home')}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 rounded-lg bg-slate-50 text-[#1B2450] border border-slate-200 shadow-sm flex items-center space-x-1.5"
          >
            <Tag size={13} className="text-[#D6282F]" />
            <span>{lang === 'FR' ? 'Tarifs' : 'Pricing'}</span>
          </motion.a>

        </nav>

        {/* Sélecteur de langue & CTA */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-[#1B2450] border border-slate-200 hover:bg-slate-200 transition-colors"
          >
            <Globe size={13} className="text-[#D6282F]" />
            <span>{lang}</span>
          </button>

          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D6282F] text-white px-4 py-2 rounded-full font-bold text-xs shadow-md hover:bg-red-700 transition-colors uppercase tracking-wider"
          >
            {lang === 'FR' ? "S'inscrire" : "Register"}
          </motion.a>
        </div>
      </div>
    </header>
  );
};