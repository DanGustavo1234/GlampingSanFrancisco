import { SITE } from '../config/site';
import type { CartItem, CustomizationField, ReservationStatus } from '../types/experience';
import { SURPRISE_TARGET_LABELS } from '../types/experience';

interface BuildMessageOptions {
  items: CartItem[];
  stayDate?: string;
  reservationStatus: ReservationStatus;
  customizationFieldsMap: Record<string, CustomizationField[]>;
}

export function buildWhatsAppMessage({
  items,
  stayDate,
  reservationStatus,
  customizationFieldsMap,
}: BuildMessageOptions): string {
  const lines: string[] = [
    `Hola, quiero agregar detalles especiales a mi estadía en ${SITE.name}.`,
    '',
  ];

  if (items.length === 0) {
    lines.push('Quiero coordinar los detalles de mi estadía.');
  } else {
    for (const item of items) {
      lines.push(`${item.emoji} ${item.name} — $${item.basePrice}`);

      for (const addon of item.selectedAddons) {
        const emoji = addon.emoji ? `${addon.emoji} ` : '';
        lines.push(`${emoji}${addon.name} — $${addon.price}`);
      }

      lines.push('');

      const fields = customizationFieldsMap[item.experienceId] ?? [];
      for (const field of fields) {
        const value = item.customization[field.id]?.trim();
        if (value) {
          const label = field.id === 'nombre' ? 'Para' : field.label;
          if (field.multiline) {
            lines.push(`${label}:`);
            lines.push(`"${value}"`);
          } else {
            lines.push(`${label}: ${value}`);
          }
        }
      }

      if (item.surpriseTarget) {
        lines.push(
          `Sorprender a: ${SURPRISE_TARGET_LABELS[item.surpriseTarget]}`
        );
      }

      if (
        fields.some((f) => item.customization[f.id]?.trim()) ||
        item.surpriseTarget
      ) {
        lines.push('');
      }
    }

    const total = items.reduce((sum, i) => sum + i.totalPrice, 0);
    lines.push(`Total de complementos: $${total}`);
  }

  if (stayDate?.trim()) {
    lines.push('');
    lines.push(`Fecha de estadía: ${stayDate.trim()}`);
  }

  lines.push('');
  lines.push(`¿Ya tengo reserva?: ${reservationStatus === 'yes' ? 'Sí' : 'No'}`);
  lines.push('');
  lines.push('Quiero coordinar los detalles de mi estadía.');
  lines.push('');
  lines.push(SITE.whatsappPaymentNote);

  return lines.join('\n');
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank');
}

export function openAirbnb(): void {
  window.open(SITE.airbnbUrl, '_blank');
}
