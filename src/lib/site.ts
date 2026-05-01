/**
 * Site path utilities for thegent-landing
 */

import { BASE_PATH, SITE_CONFIG } from './constants';

// Re-export BASE_PATH for convenience
export { BASE_PATH } from './constants';

/**
 * Constructs an absolute site path by prepending the base URL path.
 * @param path - The relative path to append
 * @returns The absolute path with base URL prefix
 */
export function sitePath(path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${SITE_CONFIG.baseUrl}${normalized}` || '/';
}

export type SitePathFunction = typeof sitePath;

/**
 * Creates a site path function configured with site-specific settings.
 * The returned function constructs absolute paths by prepending the base path.
 *
 * @returns A function that takes a relative path and returns an absolute site path
 *
 * @example
 * const getPath = createSitePath();
 * getPath('/docs'); // Returns '/thegent/docs'
 */
export const createSitePath = () => (path: string): string => sitePath(path);
