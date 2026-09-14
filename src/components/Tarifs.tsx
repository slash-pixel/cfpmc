import React from 'react';
import { Clock, Tag } from 'lucide-react';

export const TarifsSection: React.FC = () => {
  return (
    <section id="tarifs" className="py-16 container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-10">
        <div className="inline-block bg-[#D6282F]/15 text-[#D6282F] px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wider">
          Transparence & Accessibilité
        </div>
        <h2 className="text-2xl font-black text-[#1B2450] uppercase">Grille Tarifaire des Langues</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-[#1B2450] text-white text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Niveau d'Apprentissage</th>
                <th className="p-4 font-semibold flex items-center"><Clock size={14} className="mr-1.5 text-[#F5C518]" /> Durée</th>
                <th className="p-4 font-semibold"><Tag size={14} className="inline mr-1 text-[#F5C518]" /> Tarif Officiel</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm text-slate-700">
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-bold text-[#1B2450]">Débutant (A1 - A2)</td>
                <td className="p-4 text-slate-500">60 heures</td>
                <td className="p-4 font-black text-[#D6282F]">75,000 FCFA</td>
              </tr>
              <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50">
                <td className="p-4 font-bold text-[#1B2450]">Intermédiaire (B1 - B2)</td>
                <td className="p-4 text-slate-500">90 heures</td>
                <td className="p-4 font-black text-[#D6282F]">115,000 FCFA</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#1B2450]">Avancé / Pro (C1 - C2)</td>
                <td className="p-4 text-slate-500">120 heures</td>
                <td className="p-4 font-black text-[#D6282F]">150,000 FCFA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};