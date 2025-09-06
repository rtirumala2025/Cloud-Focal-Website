import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const DarkModeTest = () => {
  const { state: themeState, actions: themeActions } = useTheme();

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-bg-elevated border border-border-primary rounded-lg p-4 shadow-lg">
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        Dark Mode Test
      </h3>
      <div className="space-y-2">
        <p className="text-sm text-text-secondary">
          Current Theme: <span className="font-medium">{themeState.theme}</span>
        </p>
        <p className="text-sm text-text-secondary">
          Is Dark Mode: <span className="font-medium">{themeState.isDarkMode ? 'Yes' : 'No'}</span>
        </p>
        <p className="text-sm text-text-secondary">
          System Preference: <span className="font-medium">{themeState.systemPreference}</span>
        </p>
        <button
          onClick={themeActions.toggleTheme}
          className="w-full px-3 py-2 bg-primary-600 hover:bg-primary-700 text-text-inverse rounded-md text-sm font-medium transition-colors"
        >
          Toggle Theme
        </button>
        <button
          onClick={() => themeActions.setTheme('light')}
          className="w-full px-3 py-2 bg-bg-secondary hover:bg-bg-tertiary text-text-primary rounded-md text-sm font-medium transition-colors"
        >
          Force Light
        </button>
        <button
          onClick={() => themeActions.setTheme('dark')}
          className="w-full px-3 py-2 bg-secondary-800 hover:bg-secondary-900 text-text-inverse rounded-md text-sm font-medium transition-colors"
        >
          Force Dark
        </button>
      </div>
    </div>
  );
};

export default DarkModeTest;
