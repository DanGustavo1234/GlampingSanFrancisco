import type { Experience } from '../types/experience';
import { publicUrl } from '../lib/public-url';

export const experiences: Experience[] = [
  {
    id: 'exp-romantica',
    slug: 'experiencia-romantica',
    name: 'Experiencia Romántica',
    icon: 'heart',
    emoji: '❤️',
    category: 'parejas',
    description:
      'Pétalos, globos, chocolates, velas y una tarjeta para sorprender a tu pareja.',
    longDescription:
      'Preparamos el ambiente antes de su llegada. Si quieres ir más allá, suma fresas, flores u otro detalle.',
    price: 35,
    image: publicUrl('img/experiences/experiencia-romantica.jpg'),
    includedItems: [
      'Pétalos decorativos',
      'Globos',
      'Chocolates',
      'Velas LED',
      'Tarjeta personalizada',
    ],
    addons: [
      { id: 'fresas', name: 'Fresas con chocolate', price: 8, icon: 'gift', emoji: '🍓' },
      { id: 'oso', name: 'Oso pequeño', price: 7, icon: 'gift', emoji: '🧸' },
      { id: 'flores', name: 'Ramo de flores', price: 15, icon: 'flowers', emoji: '💐' },
      { id: 'decoracion-extra', name: 'Decoración adicional', price: 10, icon: 'sparkles', emoji: '✨' },
    ],
    customizationFields: [
      {
        id: 'nombre',
        label: 'Nombre de la persona homenajeada',
        placeholder: 'Ej: María',
      },
      {
        id: 'mensaje',
        label: 'Mensaje para la tarjeta',
        placeholder: 'Feliz aniversario, mi amor ❤️',
        multiline: true,
      },
    ],
    showSurpriseTarget: true,
    available: true,
    featured: true,
  },
  {
    id: 'exp-cumpleanos',
    slug: 'cumpleanos',
    name: 'Cumpleaños',
    icon: 'cake',
    emoji: '🎂',
    category: 'celebrar',
    description:
      'Globos, dulces y una tarjeta para celebrar en la entrada del glamping.',
    longDescription:
      'Dejamos la sorpresa lista antes de que lleguen. Tú solo disfrutas el momento.',
    price: 30,
    image: publicUrl('img/experiences/cumpleanos.jpg'),
    includedItems: [
      'Globos',
      'Dulces',
      'Detalle sorpresa',
      'Tarjeta personalizada',
    ],
    addons: [
      { id: 'pastel-mini', name: 'Pastel mini', price: 12, icon: 'cake', emoji: '🎂' },
      { id: 'globos-extra', name: 'Globos adicionales', price: 8, icon: 'balloon', emoji: '🎈' },
    ],
    customizationFields: [
      {
        id: 'nombre',
        label: 'Nombre del cumpleañero/a',
        placeholder: 'Ej: Daniel',
      },
      {
        id: 'mensaje',
        label: 'Mensaje para la tarjeta',
        placeholder: '¡Feliz cumpleaños! 🎉',
        multiline: true,
      },
    ],
    showSurpriseTarget: true,
    available: true,
  },
  {
    id: 'exp-caja-compartir',
    slug: 'caja-para-compartir',
    name: 'Caja para compartir',
    icon: 'users',
    emoji: '🎁',
    category: 'familias',
    description:
      'Palomitas, snacks, bebidas y cartas para la familia, una película o un rato tranquilo.',
    longDescription:
      'Una sola caja cubre la bienvenida en familia, la noche de película y el momento para desconectarse.',
    price: 30,
    image: publicUrl('img/experiences/cajita-familiar.jpg'),
    includedItems: [
      'Popcorn',
      'Chocolates',
      'Galletas',
      'Dulces',
      'Bebidas',
      'Juego de cartas',
      'Tarjeta de bienvenida',
    ],
    addons: [
      { id: 'extra-snacks', name: 'Snacks adicionales', price: 8, icon: 'popcorn', emoji: '🍿' },
      { id: 'bebidas-extra', name: 'Bebidas extra', price: 6, icon: 'cup', emoji: '🥤' },
      { id: 'juego-extra', name: 'Juego de mesa extra', price: 10, icon: 'dice', emoji: '🎲' },
    ],
    customizationFields: [
      {
        id: 'mensaje-bienvenida',
        label: 'Mensaje de bienvenida',
        placeholder: '¡Bienvenidos!',
        multiline: true,
      },
    ],
    showSurpriseTarget: false,
    available: true,
  },
  {
    id: 'exp-personalizada',
    slug: 'experiencia-personalizada',
    name: 'Experiencia Personalizada',
    icon: 'sparkles',
    emoji: '✨',
    category: 'personalizada',
    description:
      'Cuéntanos tu idea y armamos un detalle único antes de tu llegada.',
    longDescription:
      'Si no encaja en las otras tres, la coordinamos por WhatsApp y la dejamos lista.',
    price: 45,
    priceLabel: 'Desde $45',
    image: publicUrl('img/experiences/experiencia-personalizada.jpg'),
    includedItems: [
      'Consulta personalizada',
      'Diseño a medida',
      'Coordinación por WhatsApp',
      'Preparación antes de tu llegada',
    ],
    addons: [
      { id: 'decoracion-premium', name: 'Decoración premium', price: 15, icon: 'sparkles', emoji: '✨' },
      { id: 'detalle-gourmet', name: 'Detalle gourmet', price: 12, icon: 'chocolate', emoji: '🍫' },
    ],
    customizationFields: [
      {
        id: 'descripcion',
        label: 'Describe el detalle que deseas',
        placeholder: 'Cuéntanos tu idea: ocasión, colores, elementos especiales...',
        multiline: true,
      },
    ],
    showSurpriseTarget: true,
    available: true,
    featured: true,
  },
];

export const gridExperiences = experiences.filter(
  (e) => e.category !== 'personalizada' && e.available
);

export const personalizedExperience = experiences.find(
  (e) => e.category === 'personalizada'
)!;

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((e) => e.id === id);
}
