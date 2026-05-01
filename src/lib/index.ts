/**
 * TheGent Landing Site Utilities
 * 
 * Path utilities for Astro site generation
 */

// Re-export all public functions and constants
export { BASE_PATH, sitePath } from './site';

/**
 * Get the full path for a given route
 * @param route - The route path (e.g., '/about', '/pricing')
 * @returns Full absolute path
 */
export function getFullPath(route: string): string {
  return `${BASE_PATH}${route}`;
}
