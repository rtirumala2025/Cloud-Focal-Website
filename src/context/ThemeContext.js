import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  theme: 'light',
  systemPreference: 'light',
  isDarkMode: false,
};

// Action types
const ThemeActionTypes = {
  SET_THEME: 'SET_THEME',
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_SYSTEM_PREFERENCE: 'SET_SYSTEM_PREFERENCE',
};

// Reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
        isDarkMode: action.payload === 'dark',
      };

    case ThemeActionTypes.TOGGLE_THEME:
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      return {
        ...state,
        theme: newTheme,
        isDarkMode: newTheme === 'dark',
      };

    case ThemeActionTypes.SET_SYSTEM_PREFERENCE:
      return {
        ...state,
        systemPreference: action.payload,
      };

    default:
      return state;
  }
};

// Create context
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Initialize theme on mount
  useEffect(() => {
    const initializeTheme = () => {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('sourcecloud-theme');
      
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemPreference = systemPrefersDark ? 'dark' : 'light';
      
      dispatch({ type: ThemeActionTypes.SET_SYSTEM_PREFERENCE, payload: systemPreference });
      
      // Use saved theme or system preference
      const theme = savedTheme || 'light';
      dispatch({ type: ThemeActionTypes.SET_THEME, payload: theme });
      
      // Apply theme to document
      applyTheme(theme);
    };

    initializeTheme();
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      const systemPreference = e.matches ? 'dark' : 'light';
      dispatch({ type: ThemeActionTypes.SET_SYSTEM_PREFERENCE, payload: systemPreference });
      
      // Only auto-switch if user hasn't set a preference
      const savedTheme = localStorage.getItem('sourcecloud-theme');
      if (!savedTheme) {
        dispatch({ type: ThemeActionTypes.SET_THEME, payload: systemPreference });
        applyTheme(systemPreference);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme to document
  const applyTheme = (theme) => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  };

  // Actions
  const actions = {
    setTheme: (theme) => {
      dispatch({ type: ThemeActionTypes.SET_THEME, payload: theme });
      localStorage.setItem('sourcecloud-theme', theme);
      applyTheme(theme);
    },

    toggleTheme: () => {
      dispatch({ type: ThemeActionTypes.TOGGLE_THEME });
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('sourcecloud-theme', newTheme);
      applyTheme(newTheme);
    },

    setSystemPreference: (preference) => {
      dispatch({ type: ThemeActionTypes.SET_SYSTEM_PREFERENCE, payload: preference });
    },

    // Utility functions
    isDarkMode: () => {
      return state.isDarkMode;
    },

    getTheme: () => {
      return state.theme;
    },

    getSystemPreference: () => {
      return state.systemPreference;
    },
  };

  const value = {
    state,
    actions,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Export action types for use in other files
export { ThemeActionTypes };

// Theme utilities
export const themeUtils = {
  // Get CSS variables for current theme
  getThemeColors: (isDark = false) => {
    if (isDark) {
      return {
        primary: {
          50: '#1e3a8a',
          100: '#1e40af',
          200: '#1d4ed8',
          300: '#2563eb',
          400: '#3b82f6',
          500: '#60a5fa',
          600: '#93c5fd',
          700: '#bfdbfe',
          800: '#dbeafe',
          900: '#eff6ff',
        },
        secondary: {
          50: '#0f172a',
          100: '#1e293b',
          200: '#334155',
          300: '#475569',
          400: '#64748b',
          500: '#94a3b8',
          600: '#cbd5e1',
          700: '#e2e8f0',
          800: '#f1f5f9',
          900: '#f8fafc',
        },
        background: '#0f172a',
        surface: '#1e293b',
        text: '#f8fafc',
        textSecondary: '#cbd5e1',
        border: '#334155',
      };
    } else {
      return {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        background: '#ffffff',
        surface: '#f8fafc',
        text: '#0f172a',
        textSecondary: '#475569',
        border: '#e2e8f0',
      };
    }
  },

  // Get theme-aware color
  getColor: (colorName, shade = 500, isDark = false) => {
    const colors = themeUtils.getThemeColors(isDark);
    return colors[colorName]?.[shade] || colors.primary[500];
  },

  // Get theme-aware CSS custom properties
  getCSSVariables: (isDark = false) => {
    const colors = themeUtils.getThemeColors(isDark);
    return {
      '--color-primary': colors.primary[600],
      '--color-primary-light': colors.primary[400],
      '--color-primary-dark': colors.primary[800],
      '--color-secondary': colors.secondary[600],
      '--color-background': colors.background,
      '--color-surface': colors.surface,
      '--color-text': colors.text,
      '--color-text-secondary': colors.textSecondary,
      '--color-border': colors.border,
    };
  },
};
