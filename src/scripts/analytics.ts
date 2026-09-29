export type AnalyticsEvent =
  | 'experience_view'
  | 'experience_add'
  | 'addon_add'
  | 'whatsapp_click'
  | 'airbnb_click'
  | 'experience_category_filter';

declare global {
  interface Window {
    __gsfTrack?: (event: AnalyticsEvent, payload?: Record<string, unknown>) => void;
  }
}

export function track(
  event: AnalyticsEvent,
  payload?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;

  if (import.meta.env.DEV) {
    console.debug('[GSF Analytics]', event, payload);
  }

  window.__gsfTrack?.(event, payload);
}
