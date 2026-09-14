import React from 'react';
import { Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-amber-500 text-blue-900 pt-10 pb-4">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-black mb-6 text-center uppercase tracking-wide">Nous Contacter</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          {[
            "+237 693 32 41 49",
            "+237 654 09 74 81",
            "+237 670 36 14 90"
          ].map((phone, i) => (
            <a 
              key={i} 
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex items-center font-bold text-sm bg-white px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition-transform text-blue-800 cursor-pointer hover:shadow"
            >
              <Phone size={16} className="mr-2 text-red-500" />
              {phone}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center border-t border-amber-600 pt-4">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-[10px]">
              CF
            </div>
            <span className="font-bold text-sm">CFPMC L’Excellence au service de l'Art</span>
          </div>
          <p className="text-xs opacity-80 font-medium">© {new Date().getFullYear()} CFPMC Douala. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
