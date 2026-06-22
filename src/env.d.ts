/// <reference types="astro/client" />

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  ym?: (...args: unknown[]) => void;
  __YANDEX_METRICA_ID__?: number;
  trackSiteEvent?: (name: string, params?: Record<string, unknown>) => void;
}
