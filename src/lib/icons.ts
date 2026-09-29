import { ICONS, ICON_BOX_CLASSES, type IconName, type IconSize } from '../data/icons';

interface RenderIconOptions {
  size?: IconSize;
  className?: string;
  strokeWidth?: string;
}

export function renderIconSvg(
  name: IconName,
  { size = 'sm', className = '', strokeWidth = '1.5' }: RenderIconOptions = {}
): string {
  const iconClass = ICON_BOX_CLASSES[size].icon;
  const path = ICONS[name];

  return `<svg class="${iconClass} text-neutral-600 dark:text-neutral-400 ${className}" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="${path}" /></svg>`;
}

export function renderIconBoxHtml(
  name: IconName,
  size: IconSize = 'md',
  { hover = false, inline = false, className = '' }: { hover?: boolean; inline?: boolean; className?: string } = {}
): string {
  const { box, icon } = ICON_BOX_CLASSES[size];
  const path = ICONS[name];
  const hoverIconClass = hover
    ? ' group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors duration-300'
    : '';
  const displayClass = inline ? 'inline-flex align-middle' : 'flex';

  return `<span class="${displayClass} items-center justify-center ${box} bg-transparent shrink-0 ${className}"><svg class="${icon} text-neutral-600 dark:text-neutral-400${hoverIconClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${path}" /></svg></span>`;
}

export function renderInlineIconHtml(name: IconName, className = 'w-4 h-4'): string {
  const path = ICONS[name];
  return `<svg class="${className} text-neutral-600 dark:text-neutral-400 inline-block shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${path}" /></svg>`;
}
