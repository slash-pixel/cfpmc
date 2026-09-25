import { motion } from 'framer-motion';
import { 
  Award, 
  Target, 
  Languages, 
  Laptop, 
  Clock, 
  Zap,
  Compass,
  BookOpen,
  RefreshCw,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';

// Composant de jauges circulaires avec option de point de départ décalé
interface CircularGaugeProps {
  percentage: number;
  color: string;
  label: string;
  subLabel: string;
  startPercentage?: number;
}

const CircularGauge = ({ 
  percentage, 
  color, 
  label, 
  subLabel,
  startPercentage = 0
}: CircularGaugeProps) => {
  const radius = 42;
  const strokeWidth = 8;
  const C = 2 * Math.PI * radius; // Circonférence ~263.89
  const dashOffset = C - (percentage / 100) * C;

  // Rotation SVG : -90deg place le départ à 12h, puis on ajoute l'angle de décalage
  const rotationAngle = -90 + (startPercentage / 100) * 360;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center shrink-0">
        <svg 
          className="w-full h-full" 
          style={{ transform: `rotate(${rotationAngle}deg)` }}
          viewBox="0 0 100 100"
        >
          {/* Cercle de fond */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-slate-100"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Arc de cercle animé */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            whileInView={{ strokeDashoffset: dashOffset }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Valeur au centre */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {percentage}%
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
            {subLabel}
          </span>
        </div>
      </div>

      <span className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};

export const About = () => {
  const objectives = [
    {
      id: "obj-1",
      title: "Maîtrise des Équipements",
      desc: "Formation pratique sur le fonctionnement et la prise en main des équipements de communication de pointe.",
      icon: Laptop
    },
    {
      id: "obj-2",
      title: "Orientation des Jeunes",
      desc: "Accompagnement personnalisé pour aider la jeunesse à trouver ses repères professionnels dans les TIC.",
      icon: Compass
    },
    {
      id: "obj-3",
      title: "Inclusion & Découverte",
      desc: "Initiation accessible à tout public (hommes et femmes) souhaitant découvrir le monde numérique.",
      icon: BookOpen
    },
    {
      id: "obj-4",
      title: "Reconversion Métier",
      desc: "Renforcement des compétences et mise à niveau pour les professionnels en reconversion.",
      icon: RefreshCw
    },
    {
      id: "obj-5",
      title: "Autonomie & Créativité",
      desc: "Développement de l'esprit d'initiative, de la créativité et de l'indépendance de chaque apprenant.",
      icon: Lightbulb
    },
    {
      id: "obj-6",
      title: "Éthique Professionnelle",
      desc: "Sensibilisation et promotion rigoureuse de la déontologie et des valeurs éthiques sur le terrain.",
      icon: ShieldCheck
    }
  ];

  const categories = [
    {
      title: "Langues",
      icon: Languages,
      color: "bg-blue-50 text-[#0199e9] border-blue-100",
      items: ["Français", "Anglais"]
    },
    {
      title: "Formation Professionnelle",
      icon: Laptop,
      color: "bg-amber-50 text-[#fcc019] border-amber-100",
      items: [
        "Informatique", 
        "Communication Audiovisuelle", 
        "Graphisme & Design", 
        "Marketing Digital", 
        "Administration"
      ]
    },
    {
      title: "Formations Courtes",
      icon: Clock,
      color: "bg-slate-100 text-slate-800 border-slate-200",
      items: [
        "Intelligence Artificielle", 
        "Marketing Digital", 
        "E-commerce", 
        "Graphisme", 
        "Développement Web", 
        "Communication"
      ]
    }
  ];

  return (
    <section id="a-propos" className="py-24 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE ET TITRE PRINCIPAL */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0199e9]/10 text-[#0199e9] text-xs font-extrabold uppercase tracking-wider border border-[#0199e9]/20">
              <Award className="w-4 h-4" />
              <span>Centre Agréé MINEFOP • Archidiocèse de Douala</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              L'excellence éducative et professionnelle au service de la jeunesse
            </h2>
          </motion.div>
        </div>

        {/* HISTORIQUE ET PARAGRAPHES */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm mb-16 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed text-left"
        >
          <p>
            Créé en <strong>2018</strong> sous la vision éclairée de l'Archevêque de l'Archidiocèse de Douala, <strong>Monseigneur Samuel Kleda</strong>, et sous la tutelle du <strong>Ministère de l'Emploi et de la Formation Professionnelle (MINEFOP)</strong>, le Centre de Formation Professionnelle aux Métiers de la Communication (CFPMC) est placé sous la supervision générale de l'<strong>Abbé Christopher Geh Kum</strong>, Aumônier de la Jeunesse et de l'Enfance de l'Archidiocèse de Douala.
          </p>
          
          <p>
            Le centre a ouvert officiellement ses portes en <strong>octobre 2018</strong> pour l'année académique 2018/2019, avant de franchir un cap important dès <strong>octobre 2019 en devenant un établissement bilingue</strong>. Poursuivant sa quête d'excellence et de reconnaissance institutionnelle, le CFPMC est devenu en <strong>2022 un Centre agréé par le MINEFOP</strong>, consacrant la qualité de ses installations, la pertinence de ses programmes et l'expertise reconnue de ses formateurs.
          </p>
          
          <p>
            Notre mission s'articule autour de l'apprentissage concret des technologies modernes et de l'encadrement humain. Que ce soit pour des jeunes en recherche de repères professionnels, des adultes désireux de découvrir le monde des TIC, ou des professionnels en quête de reconversion, le CFPMC offre un cadre rigoureux valorisant l'autonomie, la créativité et l'éthique professionnelle.
          </p>
        </motion.div>

        {/* POINT FORT PÉDAGOGIQUE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-20 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4 text-left max-w-md">
            <div className="p-3.5 bg-[#fcc019]/20 text-[#fcc019] rounded-2xl shrink-0">
              <Zap className="w-8 h-8 text-slate-900" />
            </div>
            <div>
              <span className="text-[#0199e9] font-bold text-xs uppercase tracking-widest block mb-1">
                Notre Point Fort Pédagogique
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                Une approche équilibrée axée sur le terrain
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 sm:gap-12 w-full lg:w-auto">
            <CircularGauge 
              percentage={70} 
              color="#0199e9" 
              label="Pratique" 
              subLabel="Terrain" 
              startPercentage={30}
            />

            <CircularGauge 
              percentage={30} 
              color="#fcc019" 
              label="Théorie" 
              subLabel="Bases" 
              startPercentage={0}
            />
          </div>
        </motion.div>

        {/* SECTION OBJECTIFS DE FORMATION */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fcc019]/20 rounded-xl text-slate-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Target className="w-4 h-4 text-slate-900" />
              <span>Orientations Pédagogiques</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Nos Objectifs de Formation
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <motion.div 
                  key={obj.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: idx * 0.08, duration: 0.7 }}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-transform transition-shadow duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* EN-TÊTE : ICÔNE + TITRE */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-[#0199e9] text-[#0199e9] group-hover:text-white flex items-center justify-center transition-colors duration-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 text-left leading-snug">
                          {obj.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-left">
                      {obj.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3 CATÉGORIES DE SPÉCIALITÉS */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <span className="text-xs font-extrabold tracking-widest text-[#0199e9] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Offre Académique
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Nos Spécialités en 3 Catégories
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.7 }}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${cat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 text-left">{cat.title}</h4>
                    <ul className="space-y-2.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600 font-medium text-left">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0199e9]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;