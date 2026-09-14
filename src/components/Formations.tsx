import React from 'react';
import { motion } from 'framer-motion';
import { Mic, PenTool, Monitor, Megaphone, Users, Briefcase, Cross, Plane, Globe } from 'lucide-react';

export const Formations: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <>
      <section id="formations" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-blue-800 uppercase mb-2">Nos Filières Métiers</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Formations pratiques aux métiers des médias et des nouvelles technologies.
            </p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: <Mic size={24} />, title: "Journalisme & Audio", desc: "Animation radio, TV, reportage et montage.", color: "border-red-500", bg: "bg-red-50", text: "text-red-500" },
              { icon: <PenTool size={24} />, title: "Infographie", desc: "Suite Adobe, logos, affiches et design.", color: "border-amber-500", bg: "bg-amber-50", text: "text-amber-600" },
              { icon: <Monitor size={24} />, title: "Maintenance", desc: "Réseaux, systèmes et assemblage PC.", color: "border-blue-800", bg: "bg-blue-50", text: "text-blue-800" },
              { icon: <Megaphone size={24} />, title: "Marketing Digital", desc: "Community management, web & SEO.", color: "border-red-500", bg: "bg-red-50", text: "text-red-500" }
            ].map((formation, index) => (
              <motion.div 
                key={index} variants={fadeUp} whileHover={{ y: -4 }}
                className={`bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border-t-4 ${formation.color} flex flex-col h-full`}
              >
                <div className={`w-12 h-12 ${formation.bg} ${formation.text} rounded-full flex items-center justify-center mb-4`}>
                  {formation.icon}
                </div>
                <h3 className="text-base font-bold text-blue-800 mb-2">{formation.title}</h3>
                <p className="text-gray-500 grow text-xs leading-relaxed">{formation.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-10 uppercase">Public Cible</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { title: "Étudiants", desc: "Concours & Fac", icon: <Users size={20}/> },
              { title: "Pros", desc: "Carrière", icon: <Briefcase size={20}/> },
              { title: "Religieux", desc: "Missions", icon: <Cross size={20}/> },
              { title: "Voyageurs", desc: "Échanges", icon: <Plane size={20}/> },
              { title: "Expatriés", desc: "Intégration", icon: <Globe size={20}/> }
            ].map((target, index) => (
              <motion.div 
                key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-slate-50 p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  {target.icon}
                </div>
                <h3 className="font-bold text-sm text-blue-800 mb-1">{target.title}</h3>
                <p className="text-xs text-gray-500">{target.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};