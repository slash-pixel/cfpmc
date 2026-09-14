
import React, { useState } from 'react';
import { 
  Church, 
  GraduationCap, 
  Plane, 
  Briefcase, 
  Globe, 
  CheckCircle, 
  MapPin, 
  Phone,
  Menu, 
  X     
} from 'lucide-react';

export default function CfpmcApp() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white font-sans text-[#161c23] antialiased">
      {/* 1. HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-20 border-b border-gray-100">
        <div className="h-full w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#007abf] rounded-lg flex items-center justify-center shadow-sm">
              <span className="font-extrabold text-white text-xl">CF</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-[#161c23] text-lg leading-none">CFPMC</span>
              <span className="text-[10px] font-bold tracking-widest text-[#fcc019] uppercase mt-1">Archidiocèse de Douala</span>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <a href="#accueil" className="text-[16px] font-semibold text-gray-700 hover:text-[#fcc019] transition-colors">Accueil</a>
            <a href="#a-propos" className="text-[16px] font-semibold text-gray-700 hover:text-[#fcc019] transition-colors">À propos</a>
            <a href="#nos-preparations" className="text-[16px] font-semibold text-gray-700 hover:text-[#fcc019] transition-colors">Nos préparations</a>
            <a href="#contact" className="text-[16px] font-semibold text-gray-700 hover:text-[#fcc019] transition-colors">Contact</a>
          </nav>

          {/* Bouton Menu Burger (Mobile uniquement) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#007abf] transition-colors focus:outline-none p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Menu Déroulant Mobile */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg flex flex-col md:hidden z-40 py-4 px-6 gap-4">
            <a 
              href="#accueil" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-gray-700 hover:text-[#fcc019] transition-colors block py-2"
            >
              Accueil
            </a>
            <a 
              href="#a-propos" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-gray-700 hover:text-[#fcc019] transition-colors block py-2"
            >
              À propos
            </a>
            <a 
              href="#nos-preparations" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-gray-700 hover:text-[#fcc019] transition-colors block py-2"
            >
              Nos préparations
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-gray-700 hover:text-[#fcc019] transition-colors block py-2"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      <main className="w-full pt-24 pb-16">
        {/* 2. ZONE D'ACCUEIL (HERO SECTION) */}
        <section id="accueil" className="px-4 lg:px-6 w-full max-w-[1140px] mx-auto">
          <div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[540px] flex items-center shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{ backgroundImage: `url('/soeur.png')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#007abf]/90 via-[#007abf]/65 to-transparent"></div>

            <div className="relative z-10 px-8 md:px-14 lg:px-16 max-w-2xl flex flex-col items-start gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-sm">
                Préparez votre avenir.<br />
                Ouvrez-vous au monde.
              </h1>
              
              <p className="text-base md:text-lg text-white font-medium max-w-lg drop-shadow-sm">
                Accélérez votre carrière et vos projets grâce à nos formations intensives en langues et préparations aux certifications officielles.
              </p>

              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#fcc019] text-white text-base font-extrabold hover:bg-[#e0a716] transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Choisir votre préparation
                </a>
              </div>
            </div>
          </div>
        </section>

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
                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-white hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md rotate-2 w-full max-w-[125px] aspect-square">
                    <Church className="w-6 h-6 text-white" />
                    <span className="text-[11px] font-bold tracking-wide text-white">Évangélisation</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-white hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md -rotate-3 w-full max-w-[125px] aspect-square">
                    <GraduationCap className="w-6 h-6 text-white" />
                    <span className="text-[11px] font-bold tracking-wide text-white">Études</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-white hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md rotate-3 w-full max-w-[125px] aspect-square">
                    <Plane className="w-6 h-6 text-white" />
                    <span className="text-[11px] font-bold tracking-wide text-white">Voyages</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-white hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md -rotate-2 w-full max-w-[125px] aspect-square">
                    <Briefcase className="w-6 h-6 text-white" />
                    <span className="text-[11px] font-bold tracking-wide text-white">Profession</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#fcc019] text-white hover:scale-105 hover:rotate-0 transition-all gap-1.5 shadow-md rotate-1 col-span-2 md:col-span-1 w-full max-w-[125px] aspect-square">
                    <Globe className="w-6 h-6 text-white" />
                    <span className="text-[11px] font-bold tracking-wide text-white">International</span>
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
              {/* Carte 1 - FOS */}
              <div className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#fcc019]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-6 relative inline-flex items-center justify-center h-10">
                  <div className="absolute w-8 h-8 rounded-lg bg-[#fcc019]/25 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#fcc019]/50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <span className="relative z-10 text-lg font-extrabold text-[#161c23]">FOS</span>
                </div>
                <h3 className="text-xl font-bold text-[#161c23] mb-3">Français sur Objectifs Spécifiques (FOS)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">
                  Programme ciblé sur le vocabulaire technique, professionnel et sectoriel (affaires, diplomatie, administration) pour une intégration professionnelle réussie.
                </p>
              </div>

              {/* Carte 2 - ESP */}
              <div className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#fcc019]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-6 relative inline-flex items-center justify-center h-10">
                  <div className="absolute w-8 h-8 rounded-lg bg-[#007abf]/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#007abf]/35 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <span className="relative z-10 text-lg font-extrabold text-[#007abf]">ESP</span>
                </div>
                <h3 className="text-xl font-bold text-[#161c23] mb-3">Anglais sur Objectifs Spécifiques (ESP)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">
                  *English for Specific Purposes* : perfectionnement de l'anglais orienté vers les métiers, les affaires et les échanges internationaux de haut niveau.
                </p>
              </div>

              {/* Carte 3 - TCF */}
              <div className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#fcc019]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-6 relative inline-flex items-center justify-center h-10">
                  <div className="absolute w-8 h-8 rounded-lg bg-[#fcc019]/25 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#fcc019]/50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <span className="relative z-10 text-lg font-extrabold text-[#161c23]">TCF</span>
                </div>
                <h3 className="text-xl font-bold text-[#161c23] mb-3">TCF (Test de Connaissance du Français)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">
                  Préparation officielle exigée pour valider son niveau de français dans le cadre de procédures d'immigration, de naturalisation ou d'études universitaires.
                </p>
              </div>

              {/* Carte 4 - TEF */}
              <div className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#fcc019]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-6 relative inline-flex items-center justify-center h-10">
                  <div className="absolute w-8 h-8 rounded-lg bg-[#007abf]/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#007abf]/35 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <span className="relative z-10 text-lg font-extrabold text-[#007abf]">TEF</span>
                </div>
                <h3 className="text-xl font-bold text-[#161c23] mb-3">TEF (Test d'Évaluation de Français)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">
                  Examen de référence internationalement reconnu, indispensable pour certifier vos aptitudes en français pour le travail ou l'expatriation (notamment au Canada).
                </p>
              </div>

              {/* Carte 5 - TOEFL */}
              <div className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#fcc019]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-6 relative inline-flex items-center justify-center h-10">
                  <div className="absolute w-9 h-9 rounded-lg bg-[#fcc019]/25 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#fcc019]/50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <span className="relative z-10 text-base font-extrabold text-[#161c23]">TOEFL</span>
                </div>
                <h3 className="text-xl font-bold text-[#161c23] mb-3">TOEFL (Test of English as a Foreign Language)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">
                  Certification de la maîtrise de l'anglais académique, requise par la grande majorité des universités internationales et programmes anglophones.
                </p>
              </div>

              {/* Carte 6 - IELTS */}
              <div className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-[#fcc019]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-6 relative inline-flex items-center justify-center h-10">
                  <div className="absolute w-9 h-9 rounded-lg bg-[#007abf]/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#007abf]/35 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <span className="relative z-10 text-base font-extrabold text-[#007abf]">IELTS</span>
                </div>
                <h3 className="text-xl font-bold text-[#161c23] mb-3">IELTS (International English Language Testing System)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">
                  Test d'évaluation d'anglais mondialement plébiscité pour l'immigration professionnelle, l'obtention de visas et la poursuite d'études supérieures.
                </p>
              </div>
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
                  <div className="flex items-center justify-between bg-white/80 hover:bg-white px-4 py-3 rounded-xl transition-all shadow-sm">
                    <a href="tel:+237693324149" className="text-sm md:text-base font-extrabold text-[#161c23] hover:text-[#007abf] transition-colors">
                      +237 693 32 41 49
                    </a>
                    <a 
                      href="https://wa.me/237693324149" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>

                  <div className="flex items-center justify-between bg-white/80 hover:bg-white px-4 py-3 rounded-xl transition-all shadow-sm">
                    <a href="tel:+237654097481" className="text-sm md:text-base font-extrabold text-[#161c23] hover:text-[#007abf] transition-colors">
                      +237 654 09 74 81
                    </a>
                    <a 
                      href="https://wa.me/237654097481" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>

                  <div className="flex items-center justify-between bg-white/80 hover:bg-white px-4 py-3 rounded-xl transition-all shadow-sm">
                    <a href="tel:+237670361490" className="text-sm md:text-base font-extrabold text-[#161c23] hover:text-[#007abf] transition-colors">
                      +237 670 36 14 90
                    </a>
                    <a 
                      href="https://wa.me/237670361490" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
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

      {/* 6. FOOTER (MIS A JOUR) */}
      <footer className="bg-[#007abf] text-white pt-20 pb-10 shadow-inner">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Colonne 1 : Logo - Centrée sur mobile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#fcc019] rounded flex items-center justify-center text-[#161c23] font-extrabold text-xl">
                  CF
                </div>
                <span className="font-bold text-2xl tracking-tight">CFPMC</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Centre de Formation Pastorale et de Médiation Culturelle de l'Archidiocèse de Douala.
              </p>
            </div>

            {/* Colonne 2 : Nos Préparations - Centrée sur mobile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <h4 className="text-lg font-bold text-[#fcc019]">Nos Préparations</h4>
              <ul className="flex flex-col items-center md:items-start gap-3 text-sm text-white/80">
                <li><a href="#nos-preparations" className="hover:text-[#fcc019] transition-colors">Français (FOS)</a></li>
                <li><a href="#nos-preparations" className="hover:text-[#fcc019] transition-colors">Anglais (ESP)</a></li>
                <li><a href="#nos-preparations" className="hover:text-[#fcc019] transition-colors">Préparation TCF / TEF</a></li>
                <li><a href="#nos-preparations" className="hover:text-[#fcc019] transition-colors">Préparation TOEFL / IELTS</a></li>
              </ul>
            </div>

            {/* Colonne 3 : Liens Rapides - Centrée sur mobile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <h4 className="text-lg font-bold text-[#fcc019]">Liens Rapides</h4>
              <ul className="flex flex-col items-center md:items-start gap-3 text-sm text-white/80">
                <li><a href="#accueil" className="hover:text-[#fcc019] transition-colors">Accueil</a></li>
                <li><a href="#a-propos" className="hover:text-[#fcc019] transition-colors">À propos</a></li>
                <li><a href="#nos-preparations" className="hover:text-[#fcc019] transition-colors">Toutes nos préparations</a></li>
                <li><a href="#contact" className="hover:text-[#fcc019] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Colonne 4 : Contact - Centrée sur mobile avec icônes bien alignées */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <h4 className="text-lg font-bold text-[#fcc019]">Contact</h4>
              <ul className="flex flex-col gap-3 text-sm text-white/80 w-full">
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <MapPin className="w-5 h-5 text-[#fcc019] shrink-0 mt-0.5" />
                  <span className="text-center md:text-left">Cathédrale Saints-Pierre-et-Paul,<br/>Douala, Cameroun</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-[#fcc019] shrink-0" />
                  <a href="tel:+237693324149" className="hover:text-[#fcc019] transition-colors">+237 693 32 41 49</a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-[#fcc019] shrink-0" />
                  <a href="tel:+237654097481" className="hover:text-[#fcc019] transition-colors">+237 654 09 74 81</a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-[#fcc019] shrink-0" />
                  <a href="tel:+237670361490" className="hover:text-[#fcc019] transition-colors">+237 670 36 14 90</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 flex flex-col items-center justify-center text-center gap-4 text-sm text-white/75">
            <p>© 2026 CFPMC - Archidiocèse de Douala. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}