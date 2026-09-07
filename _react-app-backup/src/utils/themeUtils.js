// Simple theme utilities for dual-page approach

const THEME_STORAGE_KEY = 'cloudfocal-theme-preference';

/**
 * Get the current theme preference from localStorage
 * @returns {string} 'light' or 'dark'
 */
export const getThemePreference = () => {
  // Dark mode removed: always return 'light'
  return 'light';
};

/**
 * Save theme preference to localStorage
 * @param {string} theme - 'light' or 'dark'
 */
export const saveThemePreference = (theme) => {
  // Dark mode removed: no-op to avoid persisting
  try { localStorage.removeItem(THEME_STORAGE_KEY); } catch (e) {}
};

/**
 * Check if current page matches the saved theme preference
 * If not, redirect to the correct theme version
 * This function is used for initial page load theme synchronization
 */
export const checkAndRedirectTheme = () => {
  // Dark mode removed: no-op
  return;
};

/**
 * Get the correct theme-aware path for navigation
 * @param {string} path - The base path
 * @returns {string} Theme-aware path
 */
export const getThemeAwarePath = (path) => {
  // Dark mode removed: always use canonical light paths
  if (path === '/dark') return '/';
  if (path && path.includes('-dark')) return path.replace('-dark', '');
  return path || '/';
};

/**
 * Get the current theme from localStorage
 * @returns {string} 'light' or 'dark'
 */
export const getCurrentTheme = () => {
  return 'light';
};

/**
 * Check if the current theme is dark mode
 * @returns {boolean} true if dark mode, false if light mode
 */
export const isDarkMode = () => {
  return false;
};

