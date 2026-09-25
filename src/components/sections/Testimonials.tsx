import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  GraduationCap, 
  MessageSquareQuote,
  Sparkles
} from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carine Mbida",
      role: "Diplômée en Audiovisuel",
      promotion: "Promotion 2023",
      rating: 5,
      comment: "La promesse des 70% de pratique n'est pas un vain mot ! Dès le 3ème mois, nous étions déjà sur le terrain avec des équipements professionnels. Aujourd'hui, je travaille en tant que cadreuse pour une chaîne locale.",
      highlight: "En poste 2 mois après le diplôme",
      avatarBg: "bg-[#0199e9]/10 text-[#0199e9]"
    },
    {
      id: 2,
      name: "Paul Nsangou",
      role: "Graphisme & Design",
      promotion: "Promotion 2024",
      rating: 5,
      comment: "L'encadrement humain et la rigueur des formateurs m'ont énormément marqué. En plus des compétences techniques en Web & Design, j'y ai appris l'éthique professionnelle qui fait la différence en entreprise.",
      highlight: "Designer Freelance actif",
      avatarBg: "bg-[#fcc019]/20 text-[#d9a007]"
    },
    {
      id: 3,
      name: "Sandrine Tchoua",
      role: "Formation en Langues (Anglais)",
      promotion: "Certifiée 2023",
      rating: 5,
      comment: "Le cadre bilingue du CFPMC m'a permis de surmonter mon blocage en anglais. Les modules intensifs axés sur le vocabulaire professionnel m'ont ouvert les portes d'une ONG internationale à Douala.",
      highlight: "Promotion professionnelle obtenue",
      avatarBg: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 4,
      name: "Eric Kamga",
      role: "Marketing Digital (Module Court)",
      promotion: "Session 2024",
      rating: 5,
      comment: "Une formation courte mais extrêmement dense et concrète. On manipule directement les outils récents, ce qui m'a permis de booster immédiatement la visibilité de mon entreprise sur le web.",
      highlight: "Entrepreneur & Marketer",
      avatarBg: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="temoignages" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Éléments de fond décoratifs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 w-72 h-72 bg-[#0199e9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-10 w-80 h-80 bg-[#fcc019]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0199e9]/10 text-[#0199e9] text-xs font-extrabold uppercase tracking-wider border border-[#0199e9]/20">
              <MessageSquareQuote className="w-4 h-4" />
              <span>Témoignages & Réussites</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Découvrez pourquoi ils ont choisi le CFPMC
            </h2>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-2 leading-relaxed">
              Découvrez les retours d'expérience de nos apprenants et anciens étudiants qui ont propulsé leur carrière grâce à nos formations pratiques.
            </p>
          </motion.div>
        </div>

        {/* BANDEAU RECAPITULATIF / STATISTIQUES D'AVIS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#fcc019]/20 text-[#d9a007] flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fcc019] text-[#fcc019]" />
                ))}
                <span className="ml-2 font-extrabold text-slate-900 text-lg">4.9 / 5</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Satisfaction globale basée sur le suivi de nos diplômés
              </p>
            </div>
          </div>

          <div className="h-10 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-[#0199e9]" />
            <div className="text-left">
              <span className="block font-extrabold text-slate-900 text-lg sm:text-xl">
                +2 500 Apprenants
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                Formés et accompagnés vers l'emploi
              </span>
            </div>
          </div>
        </motion.div>

        {/* GRILLE DE TÉMOIGNAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Icône de citation en arrière-plan */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none" />

              <div>
                {/* Note par étoiles & Badge Highlight */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fcc019] text-[#fcc019]" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0199e9]" />
                    {item.highlight}
                  </span>
                </div>

                {/* Contenu du commentaire */}
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic mb-8 relative z-10 text-left">
                  "{item.comment}"
                </p>
              </div>

              {/* Auteur du témoignage */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${item.avatarBg} shrink-0`}>
                  {item.name.charAt(0)}
                </div>

                <div className="text-left">
                  <h4 className="font-extrabold text-slate-900 text-base leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs font-bold text-[#0199e9]">
                    {item.role}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-400">
                    {item.promotion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;