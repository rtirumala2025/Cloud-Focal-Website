// Simple theme utilities for dual-page approach

const THEME_STORAGE_KEY = 'cloudfocal-theme-preference';

/**
 * Get the current theme preference from localStorage
 * @returns {string} 'light' or 'dark'
 */
export const getThemePreference = () => {
  return localStorage.getItem(THEME_STORAGE_KEY) || 'light';
};

/**
 * Save theme preference to localStorage
 * @param {string} theme - 'light' or 'dark'
 */
export const saveThemePreference = (theme) => {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

/**
 * Check if current page matches the saved theme preference
 * If not, redirect to the correct theme version
 * This function is used for initial page load theme synchronization
 */
export const checkAndRedirectTheme = () => {
  if (typeof window === 'undefined') return;
  
  const savedTheme = getThemePreference();
  const currentPath = window.location.pathname;
  
  // If saved theme is dark but we're on a light page, redirect to dark
  if (savedTheme === 'dark' && !currentPath.includes('-dark') && currentPath !== '/dark') {
    const newPath = currentPath === '/' ? '/dark' : currentPath + '-dark';
    window.location.href = newPath;
    return;
  }
  
  // If saved theme is light but we're on a dark page, redirect to light
  if (savedTheme === 'light' && (currentPath.includes('-dark') || currentPath === '/dark')) {
    const newPath = currentPath === '/dark' ? '/' : currentPath.replace('-dark', '');
    window.location.href = newPath;
    return;
  }
};

/**
 * Get the correct theme-aware path for navigation
 * @param {string} path - The base path
 * @returns {string} Theme-aware path
 */
export const getThemeAwarePath = (path) => {
  const savedTheme = getThemePreference();
  
  if (savedTheme === 'dark') {
    if (path === '/') return '/dark';
    if (!path.includes('-dark')) return path + '-dark';
  } else {
    if (path === '/dark') return '/';
    if (path.includes('-dark')) return path.replace('-dark', '');
  }
  
  return path;
};

/**
 * Get the current theme from localStorage
 * @returns {string} 'light' or 'dark'
 */
export const getCurrentTheme = () => {
  return getThemePreference();
};

/**
 * Check if the current theme is dark mode
 * @returns {boolean} true if dark mode, false if light mode
 */
export const isDarkMode = () => {
  return getThemePreference() === 'dark';
};
