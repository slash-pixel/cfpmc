import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Briefcase,
  X,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Importation des composants principaux
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';

// Structure de données enrichie pour correspondre à la maquette
export interface Formation {
  id: string;
  category: string;
  duration: string;
  title: string;
  subtitle: string;
  level: string;
  certification: string;
  description: string;
  prerequisites: string[];
  modules: string[];
  outcomes: string[];
}

// Les 6 domaines/programmes avec les données mises à jour
const FORMATIONS_DATA: Formation[] = [
  {
    id: 'it-computer-science',
    category: 'IT & HIGH-TECH',
    duration: '3 MOIS',
    title: 'Informatique & Réseaux',
    subtitle: 'Développement Web, Réseaux & Maintenance',
    level: 'Niveau BAC / Bac+2',
    certification: 'Certificat CQP',
    description: "Formation complète aux métiers du numérique : développement d'applications, administration système et maintenance réseaux.",
    prerequisites: ["Utilisation courante d'un ordinateur", 'Notions de logique informatique'],
    modules: [
      'Développement Web',
      'Bases de données SQL',
      'Réseaux & Maintenance'
    ],
    outcomes: ['Développeur Software / Web', 'Administrateur Système & Réseau', 'Technicien Support IT']
  },
  {
    id: 'communication',
    category: 'COMMUNICATION',
    duration: '2 MOIS',
    title: 'Communication',
    subtitle: 'Communication d\'Entreprise & Relations Publiques',
    level: 'Tous niveaux',
    certification: 'Attestation AQP',
    description: "Maîtrisez les stratégies de communication interne et externe, les relations presse et la gestion d'image de marque.",
    prerequisites: ['Bonne aisance relationnelle', 'Bonne maîtrise du français'],
    modules: [
      'Communication globale',
      'Relations publiques',
      'Prise de parole'
    ],
    outcomes: ['Chargé de Communication', 'Attaché de Presse', 'Responsable RP']
  },
  {
    id: 'audiovisuel',
    category: 'AUDIOVISUEL',
    duration: '2 MOIS',
    title: 'Photo, Vidéo & Editing',
    subtitle: 'Prise de vue, Cadrage & Montage Vidéo Pro',
    level: 'Tous niveaux',
    certification: 'Attestation AQP',
    description: "Apprenez à capturer des images professionnelles et à maîtriser la chaîne de post-production vidéo complète.",
    prerequisites: ['Passion pour l\'image et le cinéma', 'Ordinateur performant conseillé'],
    modules: [
      'Photographie & Cadrage',
      'Montage Premiere Pro',
      'Motion Design'
    ],
    outcomes: ['Vidéaste / Photographe', 'Monteur Vidéo', 'Cadreur & Motion Designer']
  },
  {
    id: 'graphisme-design',
    category: 'DESIGN & CRÉATION',
    duration: '1 MOIS',
    title: 'Graphisme & Design',
    subtitle: 'Photoshop, Illustrator & Canva',
    level: 'Tous niveaux',
    certification: 'Attestation AQP',
    description: "Concevez des visuels professionnels, logos et affiches avec Photoshop, Illustrator et Canva.",
    prerequisites: ['Sens de l\'esthétique', 'Aise sur outil informatique'],
    modules: [
      'Photoshop & Illustrator',
      'Canva Pro rapide',
      'Identité visuelle & Export'
    ],
    outcomes: ['Designer Graphique / Infographiste', 'Maquettiste', 'Directeur Artistique Junior']
  },
  {
    id: 'marketing-digital',
    category: 'MARKETING',
    duration: '2 MOIS',
    title: 'Marketing Digital',
    subtitle: 'Social Media, SEO & Publicité en Ligne',
    level: 'Tous niveaux',
    certification: 'Attestation AQP',
    description: "Développez la visibilité des entreprises en ligne, gérez les réseaux sociaux et pilotez des campagnes publicitaires.",
    prerequisites: ['Affinité avec les réseaux sociaux', 'Esprit d\'analyse'],
    modules: [
      'Community Management',
      'Facebook & Google Ads',
      'SEO & Rédaction Web'
    ],
    outcomes: ['Community Manager', 'Spécialiste Marketing Digital', 'Consultant Social Ads']
  },
  {
    id: 'administration',
    category: 'GESTION & ADMIN',
    duration: '2 MOIS',
    title: 'Administration & Gestion',
    subtitle: 'Bureautique, Secrétariat & Assistanat',
    level: 'Niveau BEPC / BAC',
    certification: 'Attestation AQP',
    description: "Devenez un pilier administratif indispensable en maîtrisant la gestion documentaire et les outils bureautiques avancés.",
    prerequisites: ['Rigueur et sens de l\'organisation'],
    modules: [
      'Suite Office Avancée',
      'Rédaction administrative',
      'Accueil & Secrétariat'
    ],
    outcomes: ['Assistant(e) de Direction', 'Secrétaire Administratif(ve)', 'Gestionnaire d\'Accueil']
  }
];

export const CertifyingFormations = () => {
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Contenu principal */}
      <main className="flex-grow pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fcc019]/15 text-amber-900 text-sm font-bold mb-4 shadow-xs"
          >
            <Sparkles size={16} className="text-[#fcc019]" />
            <span>Formations Pratiques & Certifiantes</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Explorez nos domaines d'expertise <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0199e9] via-sky-600 to-[#fcc019] bg-clip-text text-transparent">
              professionnels & certifiants
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Développez des compétences directement opérationnelles grâce à nos programmes conçus par des experts du secteur.
          </motion.p>
        </div>

        {/* Grille des cartes (Style exactement identique à la maquette) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FORMATIONS_DATA.map((formation) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedFormation(formation)}
              className="group bg-white rounded-[32px] p-6 sm:p-8 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-[#0199e9]/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                {/* En-tête : Badges Catégorie (Bleu) & Durée (Gris) */}
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-[#0199e9]/10 text-[#0199e9] text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide">
                    {formation.category}
                  </span>
                  <span className="bg-slate-100 text-slate-500 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide">
                    {formation.duration}
                  </span>
                </div>

                {/* Titre & Description centrés */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#0199e9] transition-colors">
                    {formation.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto line-clamp-3">
                    {formation.description}
                  </p>
                </div>

                {/* Badges/Pills des modules */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {formation.modules.map((moduleItem, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-medium px-3.5 py-2 rounded-xl"
                    >
                      <CheckCircle2 size={16} className="text-[#0199e9] shrink-0" />
                      <span>{moduleItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pied de carte avec séparation discrète */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-2">
                <span className="text-xs font-medium text-slate-400">
                  {formation.certification}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFormation(formation);
                  }}
                  className="bg-[#0199e9] hover:bg-sky-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 shadow-xs hover:shadow-md"
                >
                  <span>S'inscrire</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal de détail du programme */}
      <AnimatePresence>
        {selectedFormation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Arrière-plan flouté */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFormation(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Fenêtre Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
            >
              {/* Header Modal */}
              <div className="p-6 sm:p-8 bg-slate-50/80 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#0199e9]/10 text-[#0199e9] text-xs font-semibold px-3 py-1 rounded-full">
                      {selectedFormation.category}
                    </span>
                    <span className="bg-slate-200/60 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {selectedFormation.duration}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {selectedFormation.title}
                  </h2>
                  <p className="text-sm text-[#0199e9] font-semibold mt-1">
                    {selectedFormation.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedFormation(null)}
                  className="p-2 text-slate-400 hover:text-slate-800 bg-slate-200/60 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Corps de la Modal */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                {/* Certification */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50">
                  <Award className="text-amber-500" size={26} />
                  <div>
                    <p className="text-xs text-slate-500">Certification délivrée</p>
                    <p className="font-semibold text-slate-900">{selectedFormation.certification}</p>
                  </div>
                </div>

                {/* Modules du cours */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Calendar size={20} className="text-[#0199e9]" />
                    <span>Programme détaillé des cours</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedFormation.modules.map((moduleItem, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80">
                        <CheckCircle2 size={18} className="text-[#0199e9] shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-800 font-medium">{moduleItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Débouchés Métiers */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-amber-500" />
                    <span>Débouchés professionnels</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFormation.outcomes.map((outcome, index) => (
                      <span key={index} className="bg-slate-100 text-slate-800 text-xs font-semibold px-3.5 py-2 rounded-xl">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pied de la Modal */}
              <div className="p-6 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">Intéressé(e) par cette spécialité ?</p>
                  <p className="text-sm font-bold text-slate-900">Inscriptions ouvertes dès maintenant</p>
                </div>
                <Link
                  to="/#inscription"
                  onClick={() => setSelectedFormation(null)}
                  className="w-full sm:w-auto bg-[#0199e9] hover:bg-sky-600 text-white font-extrabold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>S'inscrire à ce parcours</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CertifyingFormations;