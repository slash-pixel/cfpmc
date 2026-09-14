import React, { useState } from 'react';
import { Phone, MapPin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#1B2450] text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <div>
            <span className="bg-[#F5C518] text-[#1B2450] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              Contact & Inscription
            </span>
            <h2 className="text-3xl font-black uppercase mt-4 mb-4">Rejoignez le CFPMC dès aujourd'hui</h2>
            <p className="text-slate-300 text-sm mb-8 leading-relaxed">
              Contactez-nous directement par téléphone ou remplissez le formulaire de pré-inscription pour réserver votre place dans notre prochaine session.
            </p>

            <div className="space-y-4">
              <a href="tel:+237693324149" className="flex items-center space-x-3 bg-white/10 p-3.5 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                <div className="w-10 h-10 bg-[#F5C518] text-[#1B2450] rounded-full flex items-center justify-center font-bold">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-300 uppercase font-bold">Téléphone principal</p>
                  <p className="text-sm font-bold">+237 693 32 41 49 / 654 09 74 81</p>
                </div>
              </a>

              <div className="flex items-center space-x-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-[#D6282F] text-white rounded-full flex items-center justify-center font-bold">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-300 uppercase font-bold">Localisation</p>
                  <p className="text-sm font-bold">Douala, Cameroun (Archidiocèse de Douala)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-lg font-black text-[#1B2450] uppercase mb-4">Formulaire de Pré-inscription</h3>
            
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
                <h4 className="font-bold mb-1">Pré-inscription enregistrée !</h4>
                <p className="text-xs">Notre équipe vous contactera dans les plus brefs délais pour finaliser votre dossier.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nom et Prénom</label>
                  <input type="text" required className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#1B2450]" placeholder="Ex: Jean Dupont" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Téléphone / WhatsApp</label>
                  <input type="tel" required className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#1B2450]" placeholder="+237 6..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Formation souhaitée</label>
                  <select className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#1B2450] bg-white">
                    <option>Langues (Français & Anglais)</option>
                    <option>Journalisme & Audio</option>
                    <option>Infographie</option>
                    <option>Maintenance Informatique</option>
                    <option>Marketing Digital</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#1B2450] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-slate-900 transition-colors flex items-center justify-center space-x-2">
                  <span>Envoyer ma demande</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};