import { BookOpen, Award, Clock } from 'lucide-react';
import type { Stat, FormationCategory, NavItem } from '../types';

export const navLinks: NavItem[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Formations', href: '/Formations' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { value: '15+', label: 'Années d\'expérience', color: 'blue' },
  { value: '2500+', label: 'Apprenants formés', color: 'red' },
  { value: '85%', label: 'Taux d\'insertion', color: 'yellow' },
];

export const formationCategories: FormationCategory[] = [
  {
    id: 'langues',
    title: 'Formations en Langues',
    description: 'Maîtrisez de nouvelles langues pour ouvrir vos horizons professionnels et personnels.',
    color: 'blue',
    icon: BookOpen
  },
  {
    id: 'certifiantes',
    title: 'Formations Certifiantes',
    description: 'Obtenez des diplômes reconnus pour propulser votre carrière dans la communication.',
    color: 'red',
    icon: Award
  },
  {
    id: 'court-terme',
    title: 'Formations Court Terme',
    description: 'Des modules intensifs pour acquérir rapidement de nouvelles compétences pratiques.',
    color: 'yellow',
    icon: Clock
  }
];