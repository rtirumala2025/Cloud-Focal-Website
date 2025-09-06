import React, { useState, useEffect } from 'react';

const DebugControlPanel = () => {
  const [debugModes, setDebugModes] = useState({
    noBorders: false,
    noShadows: false,
    noBackgrounds: false,
    noPseudo: false,
    noPositioned: false,
    noThin: false,
    noDark: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Debug: Log when component renders
  console.log('DebugControlPanel rendered, isVisible:', isVisible);

  // Apply debug CSS classes to body
  useEffect(() => {
    const body = document.body;
    
    // Remove all debug classes first
    Object.keys(debugModes).forEach(mode => {
      body.classList.remove(`debug-${mode.replace(/([A-Z])/g, '-$1').toLowerCase()}`);
    });
    
    // Add active debug classes
    Object.entries(debugModes).forEach(([mode, isActive]) => {
      if (isActive) {
        const className = `debug-${mode.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        body.classList.add(className);
      }
    });
    
    // Add debug active indicator
    if (Object.values(debugModes).some(Boolean)) {
      body.classList.add('debug-active');
    } else {
      body.classList.remove('debug-active');
    }
  }, [debugModes]);

  const toggleDebugMode = (mode) => {
    setDebugModes(prev => ({
      ...prev,
      [mode]: !prev[mode]
    }));
  };

  const resetAll = () => {
    setDebugModes({
      noBorders: false,
      noShadows: false,
      noBackgrounds: false,
      noPseudo: false,
      noPositioned: false,
      noThin: false,
      noDark: false
    });
  };

  const testAll = () => {
    setDebugModes({
      noBorders: true,
      noShadows: true,
      noBackgrounds: true,
      noPseudo: true,
      noPositioned: true,
      noThin: true,
      noDark: true
    });
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => {
          console.log('Debug button clicked!');
          setIsVisible(true);
        }}
        className="fixed bottom-4 right-4 z-[99999] bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors"
        style={{ 
          position: 'fixed', 
          bottom: '16px', 
          right: '16px', 
          zIndex: 99999,
          backgroundColor: 'red',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        🐛 Debug
      </button>
    );
  }

  return (
    <div 
      className="fixed bottom-4 right-4 z-[99999] bg-white border-2 border-red-500 rounded-lg p-4 shadow-lg max-w-sm"
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 99999,
        backgroundColor: 'white',
        border: '2px solid red',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        maxWidth: '300px',
        minWidth: '250px'
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-red-600">🐛 Debug Control Panel</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2 mb-4">
        {Object.entries(debugModes).map(([mode, isActive]) => (
          <label key={mode} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => toggleDebugMode(mode)}
              className="rounded"
            />
            <span className="text-sm">
              {mode.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </span>
          </label>
        ))}
      </div>

      <div className="flex gap-2 mb-3">
        <button
          onClick={testAll}
          className="flex-1 px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          Test All
        </button>
        <button
          onClick={resetAll}
          className="flex-1 px-3 py-2 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

      <div className="text-xs text-gray-600">
        <p className="mb-1">Debug Routes:</p>
        <p>• <a href="/debug/minimal" className="text-blue-600 hover:underline">/debug/minimal</a></p>
        <p>• <a href="/debug/layout" className="text-blue-600 hover:underline">/debug/layout</a></p>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-600 mb-2">Console Commands:</p>
        <div className="text-xs font-mono bg-gray-100 p-2 rounded">
          <div>window.debugHelpers.findDarkElements()</div>
          <div>window.debugHelpers.testElementRemoval()</div>
          <div>window.debugHelpers.highlightProblematicElements()</div>
        </div>
      </div>
    </div>
  );
};

export default DebugControlPanel;
