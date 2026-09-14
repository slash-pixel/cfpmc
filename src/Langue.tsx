import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, BookOpen, Award, Clock, CheckCircle } from 'lucide-react';

export interface LanguageTrainingPageProps {
  lang: 'FR' | 'EN';
}

export const LanguageTrainingPage: React.FC<LanguageTrainingPageProps> = ({ lang }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION LANGUES */}
      <section className="relative py-20 bg-blue-950 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 opacity-10"
        >
          <Globe size={400} className="text-blue-400" />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-block bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
              {lang === 'FR' ? 'Programme Linguistique Intensif' : 'Intensive Language Program'}
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight uppercase">
              {lang === 'FR' ? (
                <>Maîtrisez les Langues, <br className="hidden md:block" /> Préparez votre Avenir.</>
              ) : (
                <>Master Languages, <br className="hidden md:block" /> Prepare Your Future.</>
              )}
            </motion.h1>
            
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-blue-900 px-3 py-1.5 rounded-full shadow-sm text-sm border border-blue-800">
                <span>🇫🇷</span><span className="font-bold text-white">Français</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-amber-300">
                {lang === 'FR' ? 'OBJECTIFS SPÉCIFIQUES & INTERNATIONAL' : 'SPECIFIC OBJECTIVES & INTERNATIONAL'}
              </h3>
              <div className="flex items-center space-x-2 bg-blue-900 px-3 py-1.5 rounded-full shadow-sm text-sm border border-blue-800">
                <span>🇬🇧</span><span className="font-bold text-white">Anglais</span>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="italic text-base text-blue-200 mb-8 max-w-xl mx-auto">
              {lang === 'FR' 
                ? '"Apprendre une langue, c\'est ouvrir la porte au monde. Rejoignez le centre d\'excellence de Douala."'
                : '"Learning a language is opening the door to the world. Join the Douala center of excellence."'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. DÉTAILS DU PROGRAMME & TARIFS */}
      <section className="py-16 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                <h3 className="font-bold text-sm text-blue-900 flex items-center mb-2">
                  <BookOpen className="mr-2 text-amber-500" size={18} /> {lang === 'FR' ? 'Contenu Pédagogique' : 'Educational Content'}
                </h3>
                <ul className="text-blue-950/80 space-y-1.5 ml-6 list-disc text-xs">
                  <li>{lang === 'FR' ? 'Français sur Objectifs Spécifiques (FOS)' : 'French for Specific Purposes (FOS)'}</li>
                  <li>{lang === 'FR' ? 'Anglais sur Objectifs Spécifiques (ESP)' : 'English for Specific Purposes (ESP)'}</li>
                  <li>{lang === 'FR' ? 'Communication professionnelle & académique' : 'Professional & academic communication'}</li>
                </ul>
              </div>
              
              <div className="bg-blue-50/30 p-4 rounded-xl border border-blue-100">
                <h3 className="font-bold text-sm text-blue-900 flex items-center mb-2">
                  <Award className="mr-2 text-blue-600" size={18} /> {lang === 'FR' ? 'Préparation Tests' : 'Test Preparation'}
                </h3>
                <p className="text-blue-950/80 text-xs font-semibold mb-2 flex items-center">
                  <CheckCircle className="mr-1 text-amber-500" size={14} /> TCF • TEF • TOEFL • IELTS
                </p>
                <p className="text-blue-950/60 text-[11px]">
                  {lang === 'FR' ? 'Entraînement rigoureux aux examens internationaux et certifications.' : 'Rigorous training for international exams and certifications.'}
                </p>
              </div>
            </div>

            <h3 className="font-bold text-sm text-blue-900 uppercase mb-4 flex items-center">
              <Clock className="mr-2 text-blue-800" size={18} /> {lang === 'FR' ? 'Grille des Niveaux & Tarifs' : 'Level & Pricing Grid'}
            </h3>

            <div className="overflow-x-auto rounded-xl border border-blue-100">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-blue-900 text-white text-xs uppercase tracking-wider">
                    <th className="p-3.5 font-semibold">{lang === 'FR' ? 'Niveau' : 'Level'}</th>
                    <th className="p-3.5 font-semibold">{lang === 'FR' ? 'Durée' : 'Duration'}</th>
                    <th className="p-3.5 font-semibold">{lang === 'FR' ? 'Tarif' : 'Price'}</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm">
                  <tr className="border-b border-blue-50 bg-white">
                    <td className="p-3.5 font-medium text-blue-950">{lang === 'FR' ? 'Débutant' : 'Beginner'}</td>
                    <td className="p-3.5 text-blue-950/60">{lang === 'FR' ? '60 heures' : '60 hours'}</td>
                    <td className="p-3.5 font-bold text-blue-800">75,000 FCFA</td>
                  </tr>
                  <tr className="border-b border-blue-50 bg-blue-50/20">
                    <td className="p-3.5 font-medium text-blue-950">{lang === 'FR' ? 'Intermédiaire' : 'Intermediate'}</td>
                    <td className="p-3.5 text-blue-950/60">{lang === 'FR' ? '90 heures' : '90 hours'}</td>
                    <td className="p-3.5 font-bold text-blue-800">115,000 FCFA</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3.5 font-medium text-blue-950">{lang === 'FR' ? 'Avancé' : 'Advanced'}</td>
                    <td className="p-3.5 text-blue-950/60">{lang === 'FR' ? '120 heures' : '120 hours'}</td>
                    <td className="p-3.5 font-bold text-blue-800">150,000 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-900 rounded-2xl p-6 flex flex-col justify-between text-center shadow-lg relative overflow-hidden border border-blue-800 text-white">
            <div className="relative z-10">
              <div className="inline-block bg-amber-400 text-blue-950 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                {lang === 'FR' ? 'Inscriptions Ouvertes' : 'Admissions Open'}
              </div>
              <h3 className="text-white text-2xl font-black uppercase leading-tight mb-2">
                {lang === 'FR' ? 'Session de Septembre' : 'September Session'}
              </h3>
              <p className="text-blue-200 text-xs font-semibold mb-6">
                {lang === 'FR' 
                  ? "Bénéficiez d'un encadrement par des formateurs certifiés."
                  : "Benefit from certified trainers."}
              </p>
            </div>

            <div className="relative z-10 space-y-3">
              <div className="bg-blue-950/80 p-3 rounded-xl text-left border border-blue-800">
                <p className="text-[10px] uppercase font-bold text-amber-400">{lang === 'FR' ? 'Contacts Directs' : 'Direct Contacts'}</p>
                <p className="text-xs font-bold text-white">+237 693 32 41 49</p>
              </div>
              
              <button className="bg-amber-400 text-blue-950 font-bold py-3 px-6 rounded-xl hover:bg-amber-300 transition-colors w-full text-xs uppercase tracking-wider flex items-center justify-center space-x-2">
                <span>{lang === 'FR' ? "S'inscrire maintenant" : "Register Now"}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};