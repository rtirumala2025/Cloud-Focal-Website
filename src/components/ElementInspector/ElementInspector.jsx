import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Minimize2, Copy, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Trash2, Settings, Search, Sun, Moon } from 'lucide-react';

// Z-index constants for layering
const Z_INDEX = {
  OVERLAY: 999998,
  PANEL: 999999,
  BUTTON: 999999,
  TOOLTIP: 1000000
};

const ElementInspector = () => {
  const [isActive, setIsActive] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeTab, setActiveTab] = useState('info');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [settings, setSettings] = useState({
    overlayColor: 'rgba(59, 130, 246, 0.3)',
    borderColor: '#3b82f6',
    selectedColor: 'rgba(34, 197, 94, 0.3)',
    selectedBorderColor: '#22c55e',
    borderWidth: 3,
    showElementInfo: true,
    showDimensions: true,
    showAttributes: true,
  });

  const panelRef = useRef(null);

  // Toggle inspector mode
  const toggleInspector = useCallback((e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      setIsActive(prev => !prev);
    } else if (e.key === 'Escape') {
      setSelectedElement(null);
      setIsPanelOpen(false);
    } else if (e.key === 'Delete' && selectedElement) {
      handleDeleteElement();
    } else if (e.key.startsWith('Arrow')) {
      e.preventDefault();
      handleKeyNavigation(e.key);
    }
  }, [selectedElement]);

  // Handle keyboard navigation
  const handleKeyNavigation = (key) => {
    if (!selectedElement) return;

    let newElement = null;
    
    switch(key) {
      case 'ArrowUp':
        newElement = selectedElement.parentElement;
        break;
      case 'ArrowDown':
        newElement = selectedElement.firstElementChild;
        break;
      case 'ArrowLeft':
        newElement = selectedElement.previousElementSibling;
        break;
      case 'ArrowRight':
        newElement = selectedElement.nextElementSibling;
        break;
      default:
        return;
    }

    if (newElement) {
      setSelectedElement(newElement);
      scrollToElement(newElement);
    }
  };

  // Scroll element into view
  const scrollToElement = (element) => {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  // Handle element deletion
  const handleDeleteElement = () => {
    if (!selectedElement) return;
    
    const parent = selectedElement.parentElement;
    const nextSibling = selectedElement.nextElementSibling;
    const elementToRemove = selectedElement;
    
    // Remove the element
    parent.removeChild(selectedElement);
    
    // Select next sibling or parent if no sibling
    setSelectedElement(nextSibling || parent);
    
    // Store for undo functionality
    const undo = () => {
      if (nextSibling) {
        parent.insertBefore(elementToRemove, nextSibling);
      } else {
        parent.appendChild(elementToRemove);
      }
    };
    
    // Show undo notification (you can implement a toast system)
    showNotification('Element deleted', 'Undo', undo);
  };

  // Show notification (stub - implement your own notification system)
  const showNotification = (message, action, onAction) => {
    console.log(message);
    if (onAction) onAction();
  };

  // Store mouse position for accurate overlay placement
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle mouse move to detect hovered elements
  const handleMouseMove = useCallback((e) => {
    if (!isActive || selectedElement) return;
    
    // Store actual mouse position
    setMousePos({ x: e.clientX, y: e.clientY });
    
    // FIXED: Use document.elementFromPoint directly
    const element = document.elementFromPoint(e.clientX, e.clientY);
    
    // Skip if hovering over inspector elements
    if (element?.closest('[data-inspector]')) {
      setHoveredElement(null);
      return;
    }
    
    setHoveredElement(element);
  }, [isActive, selectedElement]);

  // Handle click to select element
  const handleElementClick = useCallback((e) => {
    if (!isActive) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const element = document.elementFromPoint(e.clientX, e.clientY);
    
    if (element && !element.closest('[data-inspector]')) {
      setSelectedElement(element);
      setIsPanelOpen(true);
    }
  }, [isActive]);

  // Set up event listeners - FIXED: Use window with capture
  useEffect(() => {
    if (isActive) {
      window.addEventListener('mousemove', handleMouseMove, { capture: true });
      window.addEventListener('click', handleElementClick, { capture: true });
      document.addEventListener('keydown', toggleInspector);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove, { capture: true });
        window.removeEventListener('click', handleElementClick, { capture: true });
        document.removeEventListener('keydown', toggleInspector);
      };
    }
  }, [isActive, handleMouseMove, handleElementClick, toggleInspector]);

  // Toggle dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Get element info for the inspector panel
  const getElementInfo = () => {
    if (!selectedElement) return null;
    
    const styles = window.getComputedStyle(selectedElement);
    const rect = selectedElement.getBoundingClientRect();
    
    return {
      tagName: selectedElement.tagName.toLowerCase(),
      id: selectedElement.id || '—',
      classes: Array.from(selectedElement.classList).filter(cls => !cls.startsWith('_')),
      dimensions: {
        width: `${Math.round(rect.width)}px`,
        height: `${Math.round(rect.height)}px`,
        top: `${Math.round(rect.top)}px`,
        left: `${Math.round(rect.left)}px`,
        bottom: `${Math.round(rect.bottom)}px`,
        right: `${Math.round(rect.right)}px`,
      },
      parent: selectedElement.parentElement?.tagName.toLowerCase() || '—',
      childrenCount: selectedElement.children.length,
      textContent: selectedElement.textContent?.trim().substring(0, 100) + (selectedElement.textContent?.length > 100 ? '...' : '') || '—',
      attributes: Array.from(selectedElement.attributes).map(attr => ({
        name: attr.name,
        value: attr.value,
        isData: attr.name.startsWith('data-'),
      })),
      computedStyles: Array.from(styles).reduce((acc, property) => {
        acc[property] = styles.getPropertyValue(property);
        return acc;
      }, {}),
    };
  };

  // Generate CSS selectors for the selected element
  const generateSelectors = () => {
    if (!selectedElement) return [];
    
    const selectors = [];
    
    // ID selector
    if (selectedElement.id) {
      selectors.push({
        type: 'ID',
        selector: `#${CSS.escape(selectedElement.id)}`,
        specificity: '1-0-0',
      });
    }
    
    // Class selector
    if (selectedElement.className) {
      const classSelector = `.${Array.from(selectedElement.classList).map(c => CSS.escape(c)).join('.')}`;
      selectors.push({
        type: 'Class',
        selector: classSelector,
        specificity: `0-${selectedElement.classList.length}-0`,
      });
    }
    
    // Tag selector
    selectors.push({
      type: 'Tag',
      selector: selectedElement.tagName.toLowerCase(),
      specificity: '0-0-1',
    });
    
    // Attribute selector
    if (selectedElement.hasAttributes()) {
      const attrs = Array.from(selectedElement.attributes).filter(attr => 
        !['id', 'class', 'style'].includes(attr.name)
      );
      
      attrs.forEach(attr => {
        selectors.push({
          type: 'Attribute',
          selector: `${selectedElement.tagName.toLowerCase()}[${attr.name}${attr.value ? `="${attr.value}"` : ''}]`,
          specificity: '0-1-0',
        });
      });
    }
    
    return selectors;
  };

  // Copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      showNotification('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  // FIXED: Render overlay with accurate positioning accounting for scrolling containers
  const renderOverlay = () => {
    if (!isActive) return null;
    
    const element = selectedElement || hoveredElement;
    if (!element) return null;
    
    // CRITICAL: Find if element is inside a scrolling container
    let scrollableParent = null;
    let currentElement = element.parentElement;
    
    while (currentElement && currentElement !== document.documentElement) {
      const style = window.getComputedStyle(currentElement);
      const hasScroll = currentElement.scrollHeight > currentElement.clientHeight ||
                       currentElement.scrollWidth > currentElement.clientWidth;
      
      if (hasScroll && (
        style.overflow === 'auto' || 
        style.overflow === 'scroll' ||
        style.overflowY === 'auto' || 
        style.overflowY === 'scroll'
      )) {
        scrollableParent = currentElement;
        console.log('Found scrolling parent:', currentElement.tagName, currentElement.className, 'scrollTop:', currentElement.scrollTop);
        break;
      }
      
      currentElement = currentElement.parentElement;
    }
    
    // Get element's position
    const rect = element.getBoundingClientRect();
    
    // If there's a scrolling parent, we need to adjust coordinates
    let adjustedTop = rect.top;
    let adjustedLeft = rect.left;
    
    if (scrollableParent) {
      const parentRect = scrollableParent.getBoundingClientRect();
      console.log('Parent rect:', parentRect);
      console.log('Element rect:', rect);
      console.log('Parent scrollTop:', scrollableParent.scrollTop);
      
      // The rect is already relative to viewport, but we need to account for
      // the parent's scroll if the element is inside a scrolling container
      // Actually, getBoundingClientRect already accounts for all scrolling
      // So we should just use rect values directly
    }
    
    const isSelected = !!selectedElement;
    const borderColor = isSelected ? settings.selectedBorderColor : settings.borderColor;
    const backgroundColor = isSelected ? settings.selectedColor : settings.overlayColor;
    
    console.log('Final overlay position:', {
      left: adjustedLeft,
      top: adjustedTop,
      width: rect.width,
      height: rect.height,
      element: element.tagName,
      hasScrollParent: !!scrollableParent
    });
    
    const overlayStyle = {
      position: 'fixed',
      left: `${adjustedLeft}px`,
      top: `${adjustedTop}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      border: `${settings.borderWidth}px solid ${borderColor}`,
      backgroundColor: backgroundColor,
      pointerEvents: 'none',
      zIndex: 2147483647,
      transition: 'none',
      boxSizing: 'border-box'
    };
    
    return (
      <>
        <div 
          style={overlayStyle}
          data-inspector="overlay"
        />
        
        {!isSelected && rect.top > 30 && (
          <div 
            style={{
              position: 'fixed',
              left: `${rect.left + rect.width / 2}px`,
              top: `${Math.max(30, rect.top - 10)}px`,
              transform: 'translate(-50%, -100%)',
              backgroundColor: '#1F2937',
              color: 'white',
              fontSize: '12px',
              fontFamily: 'monospace',
              padding: '4px 8px',
              borderRadius: '4px',
              pointerEvents: 'none',
              zIndex: 2147483647,
              whiteSpace: 'nowrap'
            }}
            data-inspector="tooltip"
          >
            {element.tagName.toLowerCase()}
          </div>
        )}
      </>
    );
  };

  // Render the inspector panel
  const renderPanel = () => {
    if (!isPanelOpen || !selectedElement) return null;
    
    const elementInfo = getElementInfo();
    const selectors = generateSelectors();
    
    return (
      <motion.div
        ref={panelRef}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '384px',
          height: '100vh',
          background: isDarkMode ? '#1F2937' : '#FFFFFF',
          boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.1)',
          zIndex: Z_INDEX.PANEL,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        data-inspector="panel"
        data-inspector-ui="true"
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <span className="text-sm font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {elementInfo.tagName}
              {elementInfo.id && `#${elementInfo.id}`}
              {elementInfo.classes.length > 0 && `.${elementInfo.classes.join('.')}`}
            </span>
          </div>
          <button 
            onClick={() => {
              setSelectedElement(null);
              setIsPanelOpen(false);
            }}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {['info', 'styles', 'selectors', 'attributes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium ${activeTab === tab 
                ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Panel Content */}
        <div className="flex-1 overflow-auto p-4">
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Element Info</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded p-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Tag:</span>
                    <span className="font-mono text-sm">{`<${elementInfo.tagName}>`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">ID:</span>
                    <span className="font-mono text-sm">{elementInfo.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Classes:</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {elementInfo.classes.map((cls, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                          {cls}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Dimensions</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded p-3 grid grid-cols-2 gap-2">
                  {Object.entries(elementInfo.dimensions).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{key}:</span>
                      <span className="font-mono text-xs">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Content</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                  <p className="text-sm text-gray-800 dark:text-gray-200 break-words">
                    {elementInfo.textContent}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'selectors' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">CSS Selectors</h3>
                <button 
                  onClick={() => copyToClipboard(selectors.map(s => s.selector).join('\n'))}
                  className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                >
                  <Copy size={12} className="mr-1" /> Copy All
                </button>
              </div>
              
              <div className="space-y-3">
                {selectors.map((selector, i) => (
                  <div key={i} className="group relative">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded p-3 font-mono text-sm overflow-x-auto">
                      <span className="text-purple-600 dark:text-purple-400">{selector.selector}</span>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Specificity: {selector.specificity}
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(selector.selector)}
                      className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Copy selector"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'attributes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Attributes</h3>
                <button 
                  onClick={() => copyToClipboard(JSON.stringify(
                    elementInfo.attributes.reduce((acc, attr) => {
                      acc[attr.name] = attr.value;
                      return acc;
                    }, {}), 
                    null, 2
                  ))}
                  className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                >
                  <Copy size={12} className="mr-1" /> Copy All
                </button>
              </div>
              
              <div className="space-y-2">
                {elementInfo.attributes.length > 0 ? (
                  elementInfo.attributes.map((attr, i) => (
                    <div key={i} className="group relative bg-gray-50 dark:bg-gray-700 rounded p-2">
                      <div className="flex items-start">
                        <span className={`text-xs font-mono ${attr.isData ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-blue-400'}`}>
                          {attr.name}
                        </span>
                        {attr.value && (
                          <span className="mx-2 text-gray-400">=</span>
                        )}
                        {attr.value && (
                          <span className="text-xs font-mono text-gray-800 dark:text-gray-200 break-all">
                            "{attr.value}"
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => copyToClipboard(attr.value || attr.name)}
                        className="absolute top-1 right-1 p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy attribute"
                      >
                        <Copy size={12} />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 text-center py-4">No attributes found</p>
                )}
              </div>
            </div>
          )}
          
          {activeTab === 'styles' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Computed Styles</h3>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search size={14} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Filter styles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-xs pl-8 pr-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-40"
                    />
                  </div>
                  <button 
                    onClick={() => copyToClipboard(JSON.stringify(elementInfo.computedStyles, null, 2))}
                    className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    <Copy size={12} className="mr-1" /> Copy All
                  </button>
                </div>
              </div>
              
              <div className="space-y-1 max-h-96 overflow-y-auto">
                {Object.entries(elementInfo.computedStyles)
                  .filter(([property]) => 
                    searchQuery === '' || 
                    property.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    elementInfo.computedStyles[property].toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map(([property, value]) => (
                    <div key={property} className="group relative">
                      <div className="flex items-start p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                        <span className="text-xs font-mono text-purple-600 dark:text-purple-400 flex-shrink-0 w-1/3 truncate">
                          {property}:
                        </span>
                        <span className="text-xs font-mono text-gray-800 dark:text-gray-200 ml-2 break-all">
                          {value}
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(`${property}: ${value};`)}
                        className="absolute top-1 right-1 p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy style"
                      >
                        <Copy size={12} />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Panel Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => {
                const parent = selectedElement.parentElement;
                if (parent) {
                  setSelectedElement(parent);
                  scrollToElement(parent);
                }
              }}
              className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Select parent element"
            >
              <ChevronUp size={16} />
            </button>
            
            <button 
              onClick={() => {
                const firstChild = selectedElement.firstElementChild;
                if (firstChild) {
                  setSelectedElement(firstChild);
                  scrollToElement(firstChild);
                }
              }}
              className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Select first child element"
            >
              <ChevronDown size={16} />
            </button>
            
            <button 
              onClick={() => {
                const prevSibling = selectedElement.previousElementSibling;
                if (prevSibling) {
                  setSelectedElement(prevSibling);
                  scrollToElement(prevSibling);
                }
              }}
              className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Select previous sibling"
            >
              <ChevronLeft size={16} />
            </button>
            
            <button 
              onClick={() => {
                const nextSibling = selectedElement.nextElementSibling;
                if (nextSibling) {
                  setSelectedElement(nextSibling);
                  scrollToElement(nextSibling);
                }
              }}
              className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Select next sibling"
            >
              <ChevronRight size={16} />
            </button>
            
            <button 
              onClick={handleDeleteElement}
              className="p-1.5 rounded hover:bg-red-50 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 ml-2"
              title="Delete element"
            >
              <Trash2 size={16} />
            </button>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={() => setSettings(prev => ({ ...prev, isDarkMode: !isDarkMode }))}
              className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <button 
              onClick={() => setSettings(prev => ({ ...prev, showSettings: !prev.showSettings }))}
              className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Settings"
            >
              <Settings size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  // Render the activation button
  const renderActivationButton = () => (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        setIsActive(!isActive);
        if (isActive) {
          setSelectedElement(null);
          setIsPanelOpen(false);
        }
      }}
      className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${
        isActive 
          ? 'bg-green-500 hover:bg-green-600' 
          : 'bg-blue-600 hover:bg-blue-700'
      } text-white transition-colors`}
      style={{ zIndex: Z_INDEX.BUTTON }}
      title={isActive ? 'Deactivate Inspector' : 'Activate Inspector (Ctrl+Shift+I)'}
      data-inspector="activation-button"
    >
      {isActive ? (
        <X size={24} />
      ) : (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
        </svg>
      )}
    </motion.button>
  );

  // Don't render anything during SSR or before component mounts
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  // Create portal content
  const portalContent = (
    <>
      {renderActivationButton()}
      {renderOverlay()}
      <AnimatePresence>
        {renderPanel()}
      </AnimatePresence>
    </>
  );

  // Render to document body using portal
  return createPortal(portalContent, document.body);
};

export default ElementInspector;