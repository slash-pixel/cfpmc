import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  color: 'red' | 'yellow' | 'blue';
}

export interface FormationCategory {
  id: string;
  title: string;
  description: string;
  color: 'red' | 'yellow' | 'blue';
  icon: LucideIcon;
}