/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  readonly PUBLIC_CLARITY_PROJECT_ID?: string;
  readonly PUBLIC_YANDEX_METRICA_ID?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_BING_SITE_VERIFICATION?: string;
  readonly PUBLIC_YANDEX_SITE_VERIFICATION?: string;
}

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  ym?: (...args: unknown[]) => void;
  __YANDEX_METRICA_ID__?: number;
  trackSiteEvent?: (name: string, params?: Record<string, unknown>) => void;
}
