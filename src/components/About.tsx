import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Cross, Plane, Globe, ShieldCheck } from 'lucide-react';

export const AboutAudience: React.FC = () => {
  const audiences = [
    { title: "Étudiants", desc: "Concours & Universités", icon: <GraduationCap size={20} /> },
    { title: "Professionnels", desc: "Évolution de carrière", icon: <Briefcase size={20} /> },
    { title: "Religieux", desc: "Missions pastorales", icon: <Cross size={20} /> },
    { title: "Voyageurs", desc: "Mobilité internationale", icon: <Plane size={20} /> },
    { title: "Expatriés", desc: "Intégration locale", icon: <Globe size={20} /> }
  ];

  return (
    <section id="apropos" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* À propos & Institution */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-16">
          <div className="inline-block bg-amber-100 text-[#1B2450] px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
            Institution d'Excellence
          </div>
          <h2 className="text-2xl font-black text-[#1B2450] uppercase mb-4">À Propos du CFPMC</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Placé sous la tutelle de l'<strong>Archidiocèse de Douala</strong>, le Centre de Formation Professionnelle aux Métiers de la Communication (CFPMC) s'engage à offrir une formation holistique, alliant rigueur morale, excellence académique et technicité professionnelle.
          </p>
          <div className="flex items-center space-x-2 text-xs font-bold text-[#D6282F]">
            <ShieldCheck size={16} />
            <span>Diplômes et attestations officiellement reconnus sur le marché de l'emploi.</span>
          </div>
        </div>

        {/* Grille Pour qui ? */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-black text-[#1B2450] uppercase mb-2">À qui s'adressent nos formations ?</h3>
          <p className="text-slate-500 text-xs">Un accompagnement sur-mesure adapté à votre profil et vos ambitions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {audiences.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -4 }}
              className="bg-white p-5 rounded-xl shadow-xs border border-slate-200 text-center flex flex-col items-center justify-center"
            >
              <div className="w-10 h-10 bg-blue-50 text-[#1B2450] rounded-full flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="font-bold text-xs text-[#1B2450] mb-1">{item.title}</h4>
              <p className="text-[10px] text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};