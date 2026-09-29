import type { Category } from '../types/experience';

export const categories: Category[] = [
  { id: 'parejas', label: 'Romántica', icon: 'heart' },
  { id: 'celebrar', label: 'Cumpleaños', icon: 'cake' },
  { id: 'familias', label: 'Caja para compartir', icon: 'users' },
];

export const personalizedCategory: Category = {
  id: 'personalizada',
  label: 'Personalizada',
  icon: 'sparkles',
};
