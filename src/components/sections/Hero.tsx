import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="accueil" className="relative w-full min-h-screen pt-20 flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Image de fond depuis le dossier public */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: 'url("/ac.jpg")' }}
      >
        {/* Overlay sombre avec dégradé pour garantir la lisibilité du texte */}
        <div className="absolute inset-0" />
      </div>

      {/* Contenu principal centré */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full z-10 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center gap-6">

          {/* Texte stylisé avec Leckerli One */}
          <span 
            className="font-leckerli text-2xl sm:text-3xl md:text-7xl text-[#0199e8] drop-shadow-lg tracking-wide"
            style={{ fontFamily: "'Dancing Script'," }}
          >
            excellence in the service of art
          </span>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            Préparez votre avenir, <br />
            <span className="text-[#fcc019]">ouvrez-vous au monde.</span>
          </h1>

          {/* Boutons d'action */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#nos-preparations" 
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#fcc019] text-gray-950 font-bold text-sm hover:bg-[#e0a716] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Découvrir nos formations</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="#inscription" 
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              S'inscrire
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;