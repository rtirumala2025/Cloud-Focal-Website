import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeTestPage = () => {
  const { state: themeState, actions: themeActions } = useTheme();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-text-primary">
          Dark Mode Test Page
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Theme Status Card */}
          <div className="bg-bg-elevated border border-border-primary rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">Theme Status</h2>
            <div className="space-y-2">
              <p className="text-text-secondary">
                <span className="font-medium">Current Theme:</span> {themeState.theme}
              </p>
              <p className="text-text-secondary">
                <span className="font-medium">Is Dark Mode:</span> {themeState.isDarkMode ? 'Yes' : 'No'}
              </p>
              <p className="text-text-secondary">
                <span className="font-medium">System Preference:</span> {themeState.systemPreference}
              </p>
            </div>
          </div>

          {/* Theme Controls Card */}
          <div className="bg-bg-elevated border border-border-primary rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">Theme Controls</h2>
            <div className="space-y-3">
              <button
                onClick={themeActions.toggleTheme}
                className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-text-inverse rounded-md font-medium transition-colors"
              >
                Toggle Theme
              </button>
              <button
                onClick={() => themeActions.setTheme('light')}
                className="w-full px-4 py-2 bg-bg-secondary hover:bg-bg-tertiary text-text-primary border border-border-primary rounded-md font-medium transition-colors"
              >
                Force Light Mode
              </button>
              <button
                onClick={() => themeActions.setTheme('dark')}
                className="w-full px-4 py-2 bg-secondary-800 hover:bg-secondary-900 text-text-inverse rounded-md font-medium transition-colors"
              >
                Force Dark Mode
              </button>
            </div>
          </div>
        </div>

        {/* Color Palette Test */}
        <div className="bg-bg-elevated border border-border-primary rounded-lg p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-text-primary">Color Palette Test</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-primary border border-border-primary rounded p-4 text-center">
              <div className="text-sm text-text-secondary mb-2">Primary Background</div>
              <div className="text-text-primary font-medium">bg-bg-primary</div>
            </div>
            <div className="bg-bg-secondary border border-border-primary rounded p-4 text-center">
              <div className="text-sm text-text-secondary mb-2">Secondary Background</div>
              <div className="text-text-primary font-medium">bg-bg-secondary</div>
            </div>
            <div className="bg-bg-tertiary border border-border-primary rounded p-4 text-center">
              <div className="text-sm text-text-secondary mb-2">Tertiary Background</div>
              <div className="text-text-primary font-medium">bg-bg-tertiary</div>
            </div>
            <div className="bg-bg-elevated border border-border-primary rounded p-4 text-center">
              <div className="text-sm text-text-secondary mb-2">Elevated Background</div>
              <div className="text-text-primary font-medium">bg-bg-elevated</div>
            </div>
          </div>
        </div>

        {/* Text Color Test */}
        <div className="bg-bg-elevated border border-border-primary rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-text-primary">Text Color Test</h2>
          <div className="space-y-4">
            <p className="text-text-primary text-lg">
              Primary Text Color - This should be the main text color
            </p>
            <p className="text-text-secondary text-lg">
              Secondary Text Color - This should be a slightly muted text color
            </p>
            <p className="text-text-tertiary text-lg">
              Tertiary Text Color - This should be an even more muted text color
            </p>
            <p className="text-text-muted text-lg">
              Muted Text Color - This should be the most muted text color
            </p>
            <div className="bg-primary-600 p-4 rounded">
              <p className="text-text-inverse text-lg">
                Inverse Text Color - This should be white/light text on dark backgrounds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeTestPage;
