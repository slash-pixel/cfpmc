import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Languages, 
  GraduationCap, 
  Zap, 
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Structure des données du Mega-Menu avec URLs dédiées
const MEGA_MENU_CATEGORIES = [
  {
    id: 'langues',
    label: 'Formations en Langues',
    subtitle: 'Français, Anglais & Certifications',
    icon: Languages,
    badgeText: 'International',
    href: '/formations/langues',
    description: 'Perfectionnez votre maîtrise linguistique et préparez vos examens officiels (TCF, TEF, TOEFL, IELTS).',
    courses: [
      {
        title: 'Français & Anglais Spécifique (FOS / ESP)',
        desc: 'Renforcez votre communication professionnelle pour le monde des affaires, la santé et l académie.',
        duration: '80 HEURES',
        badgeColor: 'bg-[#0199e9] text-white border-white/20',
        href: '/formations/langues',
      },
      {
        title: 'Préparation TCF / TEF / TOEFL / IELTS',
        desc: 'Entraînement intensif avec épreuves blanches réelles pour maximiser vos scores d immigration ou d étude.',
        duration: '60 HEURES',
        badgeColor: 'bg-[#0199e9] text-white border-white/20',
        href: '/formations/langues',
      },
    ],
  },
  {
    id: 'professionnelles',
    label: 'Formations Professionnelles',
    subtitle: 'Parcours certifiants & Diplômes',
    icon: GraduationCap,
    badgeText: '80% Pratique',
    href: '/formations',
    description: 'Programmes certifiants de longue durée axés sur la pratique pour maîtriser un métier d avenir.',
    courses: [
      {
        title: 'Développement Web Fullstack & Mobile',
        desc: 'Créez des applications web et mobiles modernes avec React, Node.js, Express et bases de données.',
        duration: '6 MOIS',
        badgeColor: 'bg-[#0199e9] text-white border-white/20',
        href: '/formations',
      },
      {
        title: 'Maintenance Informatique & Réseaux',
        desc: 'Diagnostic matériel, réparation et administration complète des réseaux informatiques d enterprise.',
        duration: '4 MOIS',
        badgeColor: 'bg-[#0199e9] text-white border-white/20',
        href: '/formations',
      },
    ],
  },
  {
    id: 'courtes',
    label: 'Formations Court Terme',
    subtitle: 'Séminaires & Ateliers intensifs',
    icon: Zap,
    badgeText: 'Accéléré',
    href: '/formations/courtes',
    description: 'Montée en compétences rapide pour professionnels et étudiants en quête d expertise immédiate.',
    courses: [
      {
        title: 'Marketing Digital & Community Management',
        desc: 'Maîtrisez la publicité Facebook/Instagram Ads, la création de visuels et la gestion de réseaux sociaux.',
        duration: '3 SEMAINES',
        badgeColor: 'bg-[#0199e9] text-white border-white/20',
        href: '/formations/courtes',
      },
      {
        title: 'Bureautique Avancée & Sage SAARI',
        desc: 'Perfectionnement Excel, rédaction administrative et comptabilité informatisée sur Sage.',
        duration: '1 MOIS',
        badgeColor: 'bg-[#0199e9] text-white border-white/20',
        href: '/formations/courtes',
      },
    ],
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('langues');
  const [mobileFormationsOpen, setMobileFormationsOpen] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const currentCategory = MEGA_MENU_CATEGORIES.find((cat) => cat.id === activeTab) || MEGA_MENU_CATEGORIES[0];

  return (
    <>
      {/* Navbar Principale : Blur 3XL sombre */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/40 backdrop-blur-3xl border-b border-white/20 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <img 
                  src="/logo.png" 
                  alt="CFPMC Logo" 
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow" 
                />
              </Link>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link 
                to="/" 
                className="text-white hover:text-white font-bold transition-colors text-sm lg:text-base drop-shadow-md"
              >
                Accueil
              </Link>

              {/* Menu Survol : Formations */}
              <div 
                className="static"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className="flex items-center gap-1.5 font-bold text-white hover:text-white transition-colors py-7 text-sm lg:text-base drop-shadow-md cursor-pointer focus:outline-none"
                >
                  <span>Formations</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 text-white ${isMegaMenuOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {/* MEGA MENU FULL WIDTH */}
                <AnimatePresence>
                  {isMegaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 w-full bg-slate-950/40 backdrop-blur-3xl text-white border-b border-white/20 shadow-2xl overflow-hidden z-50 py-8 px-4 sm:px-6 lg:px-8"
                    >
                      {/* Conteneur interne centré */}
                      <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-12 gap-8">
                          
                          {/* Colonne Gauche : Catégories */}
                          <div className="col-span-4 border-r border-white/10 pr-6 space-y-2">
                            <div className="text-[11px] font-extrabold text-white tracking-wider uppercase mb-3 px-3 flex items-center gap-1.5">
                              <BookOpen size={13} className="text-[#0199e9]" />
                              <span>CHOISIR PAR CATÉGORIE</span>
                            </div>

                            {MEGA_MENU_CATEGORIES.map((cat) => {
                              const Icon = cat.icon;
                              const isActive = activeTab === cat.id;
                              return (
                                <Link
                                  key={cat.id}
                                  to={cat.href}
                                  onMouseEnter={() => setActiveTab(cat.id)}
                                  onClick={() => setIsMegaMenuOpen(false)}
                                  className={`group w-full text-left p-3.5 rounded-xl transition-colors duration-200 flex flex-col gap-1 border ${
                                    isActive
                                      ? 'bg-[#0199e9] text-white border-[#0199e9] shadow-lg font-bold'
                                      : 'bg-transparent hover:bg-[#0199e9] text-white border-transparent hover:border-[#0199e9] font-semibold'
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5 text-sm text-white">
                                    <Icon 
                                      size={18} 
                                      className="text-white" 
                                    />
                                    <span className="text-white font-bold">
                                      {cat.label}
                                    </span>
                                  </div>
                                  <span className="text-xs text-white/90">
                                    {cat.subtitle}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Colonne Droite : Cartes de Formations */}
                          <div className="col-span-8 flex flex-col justify-between pl-2">
                            <div>
                              <div className="mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-extrabold text-[#0199e9] uppercase tracking-wide">
                                    {currentCategory.label}
                                  </span>
                                  <span className="bg-[#fcc019] text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                                    {currentCategory.badgeText}
                                  </span>
                                </div>
                                <p className="text-xs text-white font-medium leading-relaxed">
                                  {currentCategory.description}
                                </p>
                              </div>

                              {/* Cartes de cours translucides */}
                              <div className="grid grid-cols-2 gap-5">
                                {currentCategory.courses.map((course, idx) => (
                                  <Link
                                    key={idx}
                                    to={course.href}
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className="group/card bg-white/10 hover:bg-white/20 p-5 rounded-xl border border-white/20 hover:border-white/30 shadow-sm transition-all duration-200 flex flex-col justify-between backdrop-blur-md"
                                  >
                                    <div>
                                      <h4 className="font-extrabold text-sm text-white mb-1.5 leading-snug">
                                        {course.title}
                                      </h4>
                                      <p className="text-white text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
                                        {course.desc}
                                      </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-2.5 border-t border-white/15">
                                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded border ${course.badgeColor}`}>
                                        {course.duration}
                                      </span>
                                      <span className="text-xs font-bold text-white group-hover/card:text-[#fcc019] flex items-center gap-1 group-hover/card:translate-x-1 transition-all">
                                        En savoir plus
                                        <ArrowRight size={13} />
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/#about" 
                className="text-white hover:text-white font-bold transition-colors text-sm lg:text-base drop-shadow-md"
              >
                À propos
              </Link>
              
              <Link 
                to="/#contact" 
                className="text-white hover:text-white font-bold transition-colors text-sm lg:text-base drop-shadow-md"
              >
                Contact
              </Link>

              {/* Bouton S'inscrire */}
              <Link 
                to="/#inscription" 
                className="bg-[#fcc019] hover:bg-[#e0a716] text-slate-950 px-6 py-2.5 rounded-full font-extrabold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                S'inscrire
              </Link>
            </div>

            {/* Bouton Menu Mobile */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(true)} 
                className="text-white focus:outline-none p-2"
                aria-label="Ouvrir le menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay Mobile Translucide Blur 3XL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-60 bg-slate-950/80 backdrop-blur-3xl flex flex-col items-center justify-between p-6 overflow-y-auto text-white"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-white p-2"
              aria-label="Fermer le menu"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center w-full max-w-sm mt-12 space-y-6 text-center">
              <img src="/logo.png" alt="CFPMC Logo" className="h-16 w-auto mb-2" />
              
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-white hover:text-white/80 transition-colors"
              >
                Accueil
              </Link>

              {/* Accordéon Formations Mobile */}
              <div className="w-full">
                <button
                  onClick={() => setMobileFormationsOpen(!mobileFormationsOpen)}
                  className="flex items-center justify-center gap-2 text-xl font-bold text-white w-full py-2"
                >
                  <span>Formations</span>
                  <ChevronDown size={20} className={`transition-transform ${mobileFormationsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileFormationsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-3 pt-2"
                    >
                      {MEGA_MENU_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          to={cat.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm font-semibold text-white hover:text-[#fcc019] bg-white/10 py-2.5 px-4 rounded-xl border border-white/15"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/#about" 
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-white hover:text-white/80 transition-colors"
              >
                À propos
              </Link>

              <Link 
                to="/#contact" 
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-white hover:text-white/80 transition-colors"
              >
                Contact
              </Link>

              <Link 
                to="/#inscription" 
                onClick={() => setIsOpen(false)}
                className="bg-[#fcc019] text-slate-950 px-8 py-3.5 rounded-full text-lg font-extrabold w-full shadow-lg mt-4"
              >
                S'inscrire
              </Link>
            </div>

            <p className="text-xs text-white/80 mt-8 text-center">
              © 2026 CFPMC - Archidiocèse de Douala
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 

export default Navbar;