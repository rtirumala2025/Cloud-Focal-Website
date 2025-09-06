// Black Bar Debugger - Comprehensive tool to identify the source of black bars
// Run this in the browser console to debug the black bar issue

export const debugBlackBar = () => {
  console.log('🔍 BLACK BAR DEBUGGER - Starting comprehensive analysis...');
  
  // 1. Check for dark mode
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log(`🌙 Dark mode detected: ${isDarkMode}`);
  
  // 2. Find all elements with dark backgrounds
  const allElements = document.querySelectorAll('*');
  const darkElements = [];
  
  allElements.forEach((element, index) => {
    const computedStyle = window.getComputedStyle(element);
    const bgColor = computedStyle.backgroundColor;
    const bgImage = computedStyle.backgroundImage;
    const rect = element.getBoundingClientRect();
    
    // Check for dark colors
    if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
      const rgb = bgColor.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const r = parseInt(rgb[0]);
        const g = parseInt(rgb[1]);
        const b = parseInt(rgb[2]);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        
        if (brightness < 100) { // Dark color threshold
          darkElements.push({
            element,
            tagName: element.tagName,
            className: element.className,
            id: element.id,
            backgroundColor: bgColor,
            backgroundImage: bgImage,
            rect: {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            },
            zIndex: computedStyle.zIndex,
            position: computedStyle.position
          });
        }
      }
    }
  });
  
  console.log(`🎯 Found ${darkElements.length} elements with dark backgrounds:`);
  darkElements.forEach((item, index) => {
    console.log(`${index + 1}. ${item.tagName}${item.className ? '.' + item.className : ''}${item.id ? '#' + item.id : ''}`);
    console.log(`   Background: ${item.backgroundColor}`);
    console.log(`   Position: ${item.rect.top}px, ${item.rect.left}px`);
    console.log(`   Size: ${item.rect.width}px x ${item.rect.height}px`);
    console.log(`   Z-Index: ${item.zIndex}`);
    console.log(`   Position: ${item.position}`);
    console.log('   Element:', item.element);
    console.log('---');
  });
  
  // 3. Find elements positioned above the footer
  const footer = document.querySelector('footer');
  if (footer) {
    const footerRect = footer.getBoundingClientRect();
    console.log(`📍 Footer position: top=${footerRect.top}px, height=${footerRect.height}px`);
    
    const elementsAboveFooter = darkElements.filter(item => 
      item.rect.top < footerRect.top && 
      item.rect.top + item.rect.height > footerRect.top - 100 // Within 100px of footer
    );
    
    console.log(`🔍 Elements potentially above footer: ${elementsAboveFooter.length}`);
    elementsAboveFooter.forEach((item, index) => {
      console.log(`${index + 1}. ${item.tagName}${item.className ? '.' + item.className : ''}${item.id ? '#' + item.id : ''}`);
      console.log(`   Distance from footer: ${footerRect.top - (item.rect.top + item.rect.height)}px`);
    });
  }
  
  // 4. Check for pseudo-elements
  const pseudoElements = [];
  allElements.forEach(element => {
    const beforeStyle = window.getComputedStyle(element, '::before');
    const afterStyle = window.getComputedStyle(element, '::after');
    
    if (beforeStyle.backgroundColor && beforeStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
      pseudoElements.push({
        element,
        pseudo: '::before',
        backgroundColor: beforeStyle.backgroundColor,
        content: beforeStyle.content
      });
    }
    
    if (afterStyle.backgroundColor && afterStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
      pseudoElements.push({
        element,
        pseudo: '::after',
        backgroundColor: afterStyle.backgroundColor,
        content: afterStyle.content
      });
    }
  });
  
  console.log(`🎭 Found ${pseudoElements.length} pseudo-elements with backgrounds:`);
  pseudoElements.forEach((item, index) => {
    console.log(`${index + 1}. ${item.element.tagName}${item.pseudo}`);
    console.log(`   Background: ${item.backgroundColor}`);
    console.log(`   Content: ${item.content}`);
  });
  
  // 5. Check for inline styles
  const inlineStyledElements = [];
  allElements.forEach(element => {
    if (element.style && element.style.backgroundColor) {
      inlineStyledElements.push({
        element,
        tagName: element.tagName,
        className: element.className,
        id: element.id,
        backgroundColor: element.style.backgroundColor
      });
    }
  });
  
  console.log(`💅 Found ${inlineStyledElements.length} elements with inline background styles:`);
  inlineStyledElements.forEach((item, index) => {
    console.log(`${index + 1}. ${item.tagName}${item.className ? '.' + item.className : ''}${item.id ? '#' + item.id : ''}`);
    console.log(`   Inline Background: ${item.backgroundColor}`);
  });
  
  // 6. Highlight dark elements on page
  darkElements.forEach((item, index) => {
    item.element.style.outline = `3px solid red`;
    item.element.style.outlineOffset = '2px';
    item.element.setAttribute('data-debug-index', index);
  });
  
  console.log('🎨 Dark elements have been highlighted with red outlines');
  console.log('📋 Run clearHighlights() to remove the red outlines');
  
  return {
    darkMode: isDarkMode,
    darkElements,
    elementsAboveFooter: elementsAboveFooter || [],
    pseudoElements,
    inlineStyledElements
  };
};

export const clearHighlights = () => {
  const highlightedElements = document.querySelectorAll('[data-debug-index]');
  highlightedElements.forEach(element => {
    element.style.outline = '';
    element.style.outlineOffset = '';
    element.removeAttribute('data-debug-index');
  });
  console.log('🧹 Cleared all debug highlights');
};

export const inspectElement = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
    console.log(`❌ Element not found: ${selector}`);
    return;
  }
  
  const computedStyle = window.getComputedStyle(element);
  const rect = element.getBoundingClientRect();
  
  console.log(`🔍 Inspecting element: ${selector}`);
  console.log('Element:', element);
  console.log('Computed styles:', {
    backgroundColor: computedStyle.backgroundColor,
    backgroundImage: computedStyle.backgroundImage,
    background: computedStyle.background,
    color: computedStyle.color,
    position: computedStyle.position,
    zIndex: computedStyle.zIndex,
    display: computedStyle.display,
    visibility: computedStyle.visibility,
    opacity: computedStyle.opacity
  });
  console.log('Bounding rect:', {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    bottom: rect.bottom,
    right: rect.right
  });
  
  // Highlight the element
  element.style.outline = '5px solid blue';
  element.style.outlineOffset = '3px';
  
  return element;
};

// Make functions available globally for console use
if (typeof window !== 'undefined') {
  window.debugBlackBar = debugBlackBar;
  window.clearHighlights = clearHighlights;
  window.inspectElement = inspectElement;
}
