import type { IconName } from '../data/icons';

export type CategoryId =
  | 'parejas'
  | 'familias'
  | 'relajarse'
  | 'celebrar'
  | 'personalizada';

export type SurpriseTargetOption =
  | 'mi-pareja'
  | 'mi-esposo-a'
  | 'mi-familia'
  | 'mi-hijo-a'
  | 'un-amigo-a'
  | 'otra-persona';

export interface ExperienceAddon {
  id: string;
  name: string;
  price: number;
  icon?: IconName;
  emoji?: string;
}

export interface CustomizationField {
  id: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
}

export interface Experience {
  id: string;
  slug: string;
  name: string;
  icon: IconName;
  emoji: string;
  category: CategoryId;
  description: string;
  longDescription?: string;
  price: number;
  priceLabel?: string;
  image: string;
  includedItems: string[];
  addons?: ExperienceAddon[];
  customizationFields?: CustomizationField[];
  showSurpriseTarget?: boolean;
  available: boolean;
  featured?: boolean;
}

export interface Category {
  id: CategoryId;
  label: string;
  icon: IconName;
}

export interface CartItem {
  cartItemId: string;
  experienceId: string;
  name: string;
  icon: IconName;
  emoji: string;
  basePrice: number;
  selectedAddons: ExperienceAddon[];
  customization: Record<string, string>;
  surpriseTarget?: SurpriseTargetOption;
  totalPrice: number;
}

export interface StayCartState {
  items: CartItem[];
  stayDate?: string;
}

export type ReservationStatus = 'yes' | 'no';

export const SURPRISE_TARGET_LABELS: Record<SurpriseTargetOption, string> = {
  'mi-pareja': 'Mi pareja',
  'mi-esposo-a': 'Mi esposa/o',
  'mi-familia': 'Mi familia',
  'mi-hijo-a': 'Mi hijo/a',
  'un-amigo-a': 'Un amigo/a',
  'otra-persona': 'Otra persona',
};
