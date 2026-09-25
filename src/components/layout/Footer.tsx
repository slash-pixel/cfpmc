import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

// ----------------------------------------------------------------------
// TYPES & INTERFACES (Les interfaces/types peuvent être exportés)
// ----------------------------------------------------------------------
export interface NavLink {
  label: string;
  href: string;
}

export interface PhoneContact {
  raw: string;
  clean: string;
}

export interface FooterProps {
  navLinks?: NavLink[];
  phoneContacts?: PhoneContact[];
}

// ----------------------------------------------------------------------
// CONSTANTES INTERNES (Non exportées pour préserver React Fast Refresh)
// ----------------------------------------------------------------------
const DEFAULT_PHONE_CONTACTS: PhoneContact[] = [
  { raw: '+237 693 32 41 49', clean: '237693324149' },
  { raw: '+237 654 09 74 81', clean: '237654097481' },
  { raw: '+237 670 36 14 90', clean: '237670361490' },
];

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Formations', href: '/formations' },
  { label: 'À propos', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

// ----------------------------------------------------------------------
// ICÔNES SVG RÉUTILISABLES
// ----------------------------------------------------------------------
const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.001 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ----------------------------------------------------------------------
// VARIANTS FRAMER MOTION
// ----------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ----------------------------------------------------------------------
// COMPOSANT FOOTER
// ----------------------------------------------------------------------
export const Footer: React.FC<FooterProps> = ({
  navLinks = DEFAULT_NAV_LINKS,
  phoneContacts = DEFAULT_PHONE_CONTACTS,
}) => {
  return (
    <footer className="bg-[#007abf] text-white pt-20 pb-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Colonne 1 : Logo & Réseaux sociaux */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-10 h-10 bg-[#fcc019] rounded flex items-center justify-center text-[#161c23] font-extrabold text-xl shadow-xs"
              >
                CF
              </motion.div>
              <span className="font-bold text-2xl tracking-tight">CFPMC</span>
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Centre de Formation Pastorale et de Médiation Culturelle de l'Archidiocèse de Douala.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3 pt-2">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#fcc019] hover:text-[#161c23] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Notre page Facebook"
              >
                <FacebookIcon />
              </motion.a>

              <motion.a
                href={`https://wa.me/${phoneContacts[0]?.clean || '237693324149'}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Nous contacter sur WhatsApp"
              >
                <WhatsAppIcon />
              </motion.a>
            </div>
          </motion.div>

          {/* Colonne 2 : Nos Préparations */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
          >
            <h4 className="text-lg font-bold text-[#fcc019]">Nos Préparations</h4>
            <ul className="flex flex-col items-center md:items-start gap-3 text-sm text-white/80">
              <li>
                <a href="#nos-preparations" className="hover:text-[#fcc019] transition-colors">
                  Français (FOS)
                </a>
              </li>
              <li>
                <a href="#nos-preparations" className="hover:text-[#fcc019] transition-colors">
                  Anglais (ESP)
                </a>
              </li>
              <li>
                <a href="#nos-preparations" className="hover:text-[#fcc019] transition-colors">
                  Préparation TCF / TEF
                </a>
              </li>
              <li>
                <a href="#nos-preparations" className="hover:text-[#fcc019] transition-colors">
                  Préparation TOEFL / IELTS
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Colonne 3 : Liens Rapides */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
          >
            <h4 className="text-lg font-bold text-[#fcc019]">Liens Rapides</h4>
            <ul className="flex flex-col items-center md:items-start gap-3 text-sm text-white/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#fcc019] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 4 : Contact */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
          >
            <h4 className="text-lg font-bold text-[#fcc019]">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/80 w-full">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-[#fcc019] shrink-0 mt-0.5" />
                <span className="text-center md:text-left">
                  Cathédrale Saints-Pierre-et-Paul,
                  <br />
                  Douala, Cameroun
                </span>
              </li>
              {phoneContacts.map((item) => (
                <li key={item.clean} className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-[#fcc019] shrink-0" />
                  <a href={`tel:+${item.clean}`} className="hover:text-[#fcc019] transition-colors">
                    {item.raw}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Barre de Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-8 border-t border-white/20 flex flex-col items-center justify-center text-center gap-4 text-sm text-white/75"
        >
          <p>© 2026 CFPMC - Archidiocèse de Douala. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;