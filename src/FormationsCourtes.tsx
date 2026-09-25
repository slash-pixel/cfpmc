import { Link } from 'react-router-dom';
import { 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

interface Course {
  id: string;
  title: string;
  categoryLabel: string;
  duration: string;
  description: string;
  highlights: string[];
}

const COURSES: Course[] = [
  {
    id: 'ia-generative',
    title: 'Intelligence Artificielle',
    categoryLabel: 'IA & Innovation',
    duration: '3 SEMAINES',
    description: 'Exploitez ChatGPT, Claude et Midjourney pour automatiser vos tâches et décupler votre productivité.',
    highlights: [
      'Prompt Engineering',
      'Génération de contenus',
      'Automatisations métier'
    ]
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    categoryLabel: 'Marketing & Digital',
    duration: '1 MOIS',
    description: 'Pilotez des campagnes publicitaires rentables sur Facebook & Instagram Ads et animez vos réseaux.',
    highlights: [
      'Meta Ads (Facebook/IG)',
      'Stratégie de contenu',
      'Analyse ROI & CTR'
    ]
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce',
    categoryLabel: 'Business & Vente',
    duration: '3 SEMAINES',
    description: 'Créez votre boutique en ligne, intégrez le paiement mobile et optimisez vos ventes.',
    highlights: [
      'Shopify / WooCommerce',
      'Paiement Mobile Money',
      'Tunnels de vente'
    ]
  },
  {
    id: 'graphisme-design',
    title: 'Graphisme & Design',
    categoryLabel: 'Design & Création',
    duration: '1 MOIS',
    description: 'Concevez des visuels professionnels, logos et affiches avec Photoshop, Illustrator et Canva.',
    highlights: [
      'Photoshop & Illustrator',
      'Canva Pro rapide',
      'Identité visuelle & Export'
    ]
  },
  {
    id: 'developpement-web',
    title: 'Développement Web',
    categoryLabel: 'Informatique & Web',
    duration: '6 SEMAINES',
    description: 'Apprenez à concevoir des sites web modernes, réactifs et administrables de A à Z.',
    highlights: [
      'HTML5, CSS3 & Tailwind',
      'JavaScript basique',
      'WordPress & Hébergement'
    ]
  },
  {
    id: 'communication',
    title: 'Communication Pro',
    categoryLabel: 'Communication',
    duration: '3 SEMAINES',
    description: 'Maîtrisez la prise de parole, la communication stratégique d’entreprise et les relations médias.',
    highlights: [
      'Prise de parole & Pitch',
      'Plan de communication',
      'Gestion de crise & RP'
    ]
  }
];

export const FormationsCourtes = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#fcc019] selection:text-slate-950">
      
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENU PRINCIPAL */}
      <main className="grow pt-20">
        
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. NOS MODULES PRATIQUES */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Nos Modules Pratiques
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Des sessions courtes et axées à 100% sur la pratique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(1,153,233,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* En-tête : Catégorie & Durée */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold text-[#0199e9] uppercase tracking-wider bg-[#0199e9]/10 px-2.5 py-0.5 rounded-full group-hover:bg-[#0199e9] group-hover:text-white transition-colors duration-300">
                      {course.categoryLabel}
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                      {course.duration}
                    </span>
                  </div>

                  {/* Titre avec effet de couleur au survol */}
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#0199e9] transition-colors duration-300 mb-2 leading-tight">
                    {course.title}
                  </h3>

                  {/* Description courte */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Tags compacts */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.highlights.map((point, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg group-hover:bg-sky-50 transition-colors"
                      >
                        <CheckCircle2 size={12} className="text-[#0199e9] shrink-0" />
                        <span>{point}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bas de carte */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">Attestation AQP</span>
                  <Link
                    to="/#inscription"
                    className="bg-[#0199e9] hover:bg-[#0188d0] text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-md shadow-[#0199e9]/20 hover:shadow-lg hover:shadow-[#0199e9]/30 hover:scale-105 flex items-center gap-1.5"
                  >
                    <span>S'inscrire</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 3. CALENDRIER ET BANNIÈRE INFO (SANS DÉGRADÉ AVEC SÉPARATION NETTE) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-[#0199e9] text-white p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-xl">
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Côté Gauche : Rentrée Continue & Contact */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fcc019] text-slate-950 text-xs font-black uppercase tracking-wide shadow-sm">
                  <Calendar size={13} />
                  <span>Rentrée Continue 2026</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
                  Une nouvelle session chaque premier Lundi du mois
                </h2>
                <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-medium">
                  Classes réduites à 15 apprenants pour un suivi personnalisé sur poste informatique individuel.
                </p>
                
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/237693324149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <MessageSquare size={16} />
                    <span>Réserver via WhatsApp</span>
                  </a>
                  
                  <Link
                    to="/#contact"
                    className="bg-white/15 hover:bg-white/25 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <PhoneCall size={16} />
                    <span>Nous contacter</span>
                  </Link>
                </div>
              </div>

              {/* Côté Droit : Inclus dans la formation (Séparation très nette) */}
              <div className="lg:col-span-5 border-t border-white/20 pt-6 lg:border-t-0 lg:border-l lg:border-white/25 lg:pt-0 lg:pl-10 space-y-4">
                <h3 className="font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-white/20">
                  <ShieldCheck size={18} className="text-[#fcc019]" />
                  <span>Inclus dans chaque formation :</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-sky-50 font-medium">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#fcc019] shrink-0" />
                    <span>Accès gratuit aux salles TP équipées</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#fcc019] shrink-0" />
                    <span>Attestation de Qualification Professionnelle (AQP)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#fcc019] shrink-0" />
                    <span>Réseau d’anciens apprenants & opportunités</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 4. BANNIÈRE D'INSCRIPTION RAPIDE */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <div className="bg-[#0199e9] rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-lg">
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-black text-white mb-2">
                Prêt à booster votre carrière ?
              </h2>
              <p className="text-xs sm:text-sm text-sky-100 mb-6 font-medium">
                Inscrivez-vous dès aujourd’hui pour réserver votre place.
              </p>
              <Link
                to="/#inscription"
                className="inline-flex items-center gap-2 bg-[#fcc019] hover:bg-amber-400 text-slate-950 font-black text-xs px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105"
              >
                <span>Remplir le formulaire d'inscription</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default FormationsCourtes;