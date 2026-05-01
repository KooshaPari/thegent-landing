/**
 * Site configuration for thegent-landing
 */

export const SITE_CONFIG = {
  name: 'thegent',
  displayName: 'TheGent',
  description: 'AI-powered development agent toolkit',
  primaryColor: '#F59E0B',
  accentColor: '#EF4444',
  baseUrl: import.meta.env.BASE_URL || '/',
} as const;

export type SiteConfig = typeof SITE_CONFIG;
