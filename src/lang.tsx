import { 
  Church, 
  GraduationCap, 
  Plane, 
  Briefcase, 
  Globe, 
  CheckCircle, 
  Phone
} from 'lucide-react';

// Importation de vos composants réutilisables
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';

// Données des cours & préparations
const PREPARATIONS = [
  {
    code: 'FOS',
    title: 'Français sur Objectifs Spécifiques (FOS)',
    description: 'Programme ciblé sur le vocabulaire technique, professionnel et sectoriel (affaires, diplomatie, administration) pour une intégration professionnelle réussie.',
    badgeBg: 'bg-[#fcc019]/25 group-hover:bg-[#fcc019]/50',
    textColor: 'text-[#161c23]',
  },
  {
    code: 'ESP',
    title: 'Anglais sur Objectifs Spécifiques (ESP)',
    description: 'English for Specific Purposes : perfectionnement de l\'anglais orienté vers les métiers, les affaires et les échanges internationaux de haut niveau.',
    badgeBg: 'bg-[#007abf]/15 group-hover:bg-[#007abf]/35',
    textColor: 'text-[#007abf]',
  },
  {
    code: 'TCF',
    title: 'TCF (Test de Connaissance du Français)',
    description: 'Préparation officielle exigée pour valider son niveau de français dans le cadre de procédures d\'immigration, de naturalisation ou d\'études universitaires.',
    badgeBg: 'bg-[#fcc019]/25 group-hover:bg-[#fcc019]/50',
    textColor: 'text-[#161c23]',
  },
  {
    code: 'TEF',
    title: 'TEF (Test d\'Évaluation de Français)',
    description: 'Examen de référence internationalement reconnu, indispensable pour certifier vos aptitudes en français pour le travail ou l\'expatriation (notamment au Canada).',
    badgeBg: 'bg-[#007abf]/15 group-hover:bg-[#007abf]/35',
    textColor: 'text-[#007abf]',
  },
  {
    code: 'TOEFL',
    title: 'TOEFL (Test of English as a Foreign Language)',
    description: 'Certification de la maîtrise de l\'anglais académique, requise par la grande majorité des universités internationales et programmes anglophones.',
    badgeBg: 'bg-[#fcc019]/25 group-hover:bg-[#fcc019]/50',
    textColor: 'text-[#161c23]',
  },
  {
    code: 'IELTS',
    title: 'IELTS (International English Language Testing System)',
    description: 'Test d\'évaluation d\'anglais mondialement plébiscité pour l\'immigration professionnelle, l\'obtention de visas et la poursuite d\'études supérieures.',
    badgeBg: 'bg-[#007abf]/15 group-hover:bg-[#007abf]/35',
    textColor: 'text-[#007abf]',
  },
];

// Contacts téléphoniques officiels
const PHONE_CONTACTS = [
  { raw: '+237 693 32 41 49', clean: '237693324149' },
  { raw: '+237 654 09 74 81', clean: '237654097481' },
  { raw: '+237 670 36 14 90', clean: '237670361490' },
];

// Composant icône WhatsApp réutilisable
function WhatsAppIcon({ className = 'w-4 h-4 fill-current' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function Lang() {
  return (
    <div className="bg-white font-sans text-[#161c23] antialiased">
      {/* 1. NAVBAR */}
      <Navbar />

      <main className="w-full pt-20 pb-16">
        {/* 2. HERO SECTION */}
        <Hero />

        {/* 3. À PROPOS DU CFPMC & NOS DOMAINES */}
        <section id="a-propos" className="w-full pt-20 pb-16 bg-white">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fcc019]/20 text-[#161c23] rounded-full w-max text-xs font-bold uppercase tracking-wider border border-[#fcc019]/30">
                À Propos de nous
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#161c23] tracking-tight leading-tight">
                Un centre d'excellence dédié aux langues et à la médiation culturelle
              </h2>
              
              <div className="flex flex-col gap-5 text-gray-600 leading-relaxed text-base md:text-lg text-justify mt-2">
                <p>
                  Créé sous l'égide de l'<strong>Archidiocèse de Douala</strong>, le <strong>CFPMC</strong> (Centre de Formation Pastorale et de Médiation Culturelle) est né pour répondre aux exigences croissantes de mobilité internationale et d'intégration interculturelle au Cameroun. Notre institution s'inscrit dans une démarche d'accompagnement global, alliant rigueur académique et valeurs éthiques.
                </p>

                <p>
                  Notre objectif principal est d'offrir un cadre pédagogique d'excellence permettant aux étudiants, aux professionnels, ainsi qu'aux membres des communautés religieuses de maîtriser les compétences linguistiques et méthodologiques indispensables. Nous vous préparons à réussir vos concours, vos certifications officielles, et à mener à bien vos projets d'expatriation ou d'évolution de carrière.
                </p>
              </div>

              {/* Section Nos Domaines */}
              <div className="mt-10 p-6 md:p-8 rounded-3xl bg-[#007abf] text-white shadow-xl">
                <div className="text-center mb-6">
                  <span className="px-4 py-1.5 bg-[#fcc019] text-[#161c23] text-xs font-extrabold rounded-full uppercase tracking-widest shadow-sm">
                    Nos Domaines
                  </span>
                  <h3 className="text-2xl font-extrabold mt-2 text-white">Les axes clés de notre accompagnement</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 text-center pt-2 pb-2 items-center justify-items-center">
                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-[#161c23] hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md rotate-2 w-full max-w-[125px] aspect-square">
                    <Church className="w-6 h-6 text-[#161c23]" />
                    <span className="text-[11px] font-extrabold tracking-wide">Évangélisation</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-[#161c23] hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md -rotate-3 w-full max-w-[125px] aspect-square">
                    <GraduationCap className="w-6 h-6 text-[#161c23]" />
                    <span className="text-[11px] font-extrabold tracking-wide">Études</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-[#161c23] hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md rotate-3 w-full max-w-[125px] aspect-square">
                    <Plane className="w-6 h-6 text-[#161c23]" />
                    <span className="text-[11px] font-extrabold tracking-wide">Voyages</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-[#161c23] hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md -rotate-2 w-full max-w-[125px] aspect-square">
                    <Briefcase className="w-6 h-6 text-[#161c23]" />
                    <span className="text-[11px] font-extrabold tracking-wide">Profession</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-[#161c23] hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md rotate-1 col-span-2 md:col-span-1 w-full max-w-[125px] aspect-square">
                    <Globe className="w-6 h-6 text-[#161c23]" />
                    <span className="text-[11px] font-extrabold tracking-wide">International</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. NOS PRÉPARATIONS */}
        <section className="w-full bg-[#f8fafc] py-20 border-t border-gray-100" id="nos-preparations">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
              <span className="px-3 py-1 bg-[#fcc019] text-[#161c23] text-xs font-bold rounded-full shadow-sm">
                Nos Programmes & Certifications
              </span>
              <h2 className="text-4xl font-extrabold text-[#161c23] tracking-tight">
                Toutes nos préparations
              </h2>
              <p className="text-lg text-gray-600">
                Découvrez nos modules spécialisés et certifications officielles pour valider vos compétences linguistiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PREPARATIONS.map((prep) => (
                <div 
                  key={prep.code}
                  className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#fcc019]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="mb-6 relative inline-flex items-center justify-center h-10">
                    <div className={`absolute w-8 h-8 rounded-lg ${prep.badgeBg} transition-all duration-300 group-hover:scale-125 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`} />
                    <span className={`relative z-10 text-lg font-extrabold ${prep.textColor}`}>
                      {prep.code}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#161c23] mb-3">{prep.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">
                    {prep.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SECTION INSCRIPTION & CONTACT */}
        <section className="w-full py-20 bg-white" id="contact">
          <div className="max-w-[800px] mx-auto px-6 lg:px-12">
            <div className="bg-[#f8fafc] p-8 md:p-12 rounded-3xl border border-gray-200/80 flex flex-col items-center text-center gap-8 shadow-sm">
              <span className="px-4 py-1.5 bg-[#fcc019] text-[#161c23] text-xs font-bold rounded-full shadow-sm">
                Inscriptions & Contacts Directs
              </span>
              
              <div className="flex flex-col gap-3 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#161c23] tracking-tight">
                  Contactez-nous directement
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Nos cohortes sont limitées à 15 apprenants par classe. Joignez-nous par appel ou directement sur WhatsApp pour réserver votre place et passer votre test de niveau (5 000 FCFA).
                </p>
              </div>

              {/* Bloc Numéros & WhatsApp */}
              <div className="w-full bg-[#fcc019] p-6 md:p-8 rounded-2xl shadow-md flex flex-col gap-5 text-left">
                <div className="flex items-center gap-3 border-b border-[#161c23]/10 pb-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-5 h-5 text-[#007abf]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#161c23]/80">Lignes officielles</span>
                    <span className="text-sm font-extrabold text-[#161c23]">Cliquez pour appeler ou ouvrir WhatsApp</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {PHONE_CONTACTS.map((item) => (
                    <div 
                      key={item.clean} 
                      className="flex items-center justify-between bg-white/80 hover:bg-white px-4 py-3 rounded-xl transition-all shadow-sm"
                    >
                      <a 
                        href={`tel:+${item.clean}`} 
                        className="text-sm md:text-base font-extrabold text-[#161c23] hover:text-[#007abf] transition-colors"
                      >
                        {item.raw}
                      </a>
                      <a 
                        href={`https://wa.me/${item.clean}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all shadow-sm"
                      >
                        <WhatsAppIcon />
                        WhatsApp
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2 text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#fcc019] shrink-0" />
                  <span>Test de niveau : 5 000 FCFA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#fcc019] shrink-0" />
                  <span>Matériel pédagogique inclus</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}