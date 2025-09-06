// Console debugging utilities for black bar investigation
// Run these functions in the browser console to debug the black bar issue

/**
 * Find all elements with dark backgrounds
 */
export const findDarkElements = () => {
  console.log('🔍 Scanning for dark background elements...');
  const allElements = document.querySelectorAll('*');
  const darkElements = [];

  allElements.forEach((element, index) => {
    const computedStyle = window.getComputedStyle(element);
    const bgColor = computedStyle.backgroundColor;
    const bgImage = computedStyle.backgroundImage;
    
    if (bgColor && (
      bgColor.includes('rgb(0, 0, 0)') || 
      bgColor.includes('rgba(0, 0, 0') ||
      bgColor.includes('black') ||
      bgColor.includes('rgb(17, 24, 39)') || // gray-900
      bgColor.includes('rgb(31, 41, 55)') || // gray-800
      bgColor.includes('rgb(55, 65, 81)')    // gray-700
    )) {
      const rect = element.getBoundingClientRect();
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
        }
      });
    }
  });

  console.log(`Found ${darkElements.length} elements with dark backgrounds:`);
  darkElements.forEach((item, index) => {
    console.log(`${index + 1}. ${item.tagName}${item.className ? '.' + item.className : ''}${item.id ? '#' + item.id : ''}`);
    console.log(`   Background: ${item.backgroundColor}`);
    console.log(`   Position: ${item.rect.top}px, ${item.rect.left}px`);
    console.log(`   Size: ${item.rect.width}px x ${item.rect.height}px`);
  });

  return darkElements;
};

/**
 * Find all thin horizontal elements that could be the black bar
 */
export const findThinHorizontalElements = () => {
  console.log('🔍 Scanning for thin horizontal elements...');
  const allElements = document.querySelectorAll('*');
  const thinElements = [];

  allElements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    
    // Look for elements that are thin (height <= 4px) but wide (width > 50px)
    if (rect.height <= 4 && rect.width > 50 && rect.height > 0) {
      const computedStyle = window.getComputedStyle(element);
      thinElements.push({
        element,
        tagName: element.tagName,
        className: element.className,
        id: element.id,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        },
        backgroundColor: computedStyle.backgroundColor,
        borderTop: computedStyle.borderTopWidth,
        borderBottom: computedStyle.borderBottomWidth,
        boxShadow: computedStyle.boxShadow
      });
    }
  });

  console.log(`Found ${thinElements.length} thin horizontal elements:`);
  thinElements.forEach((item, index) => {
    console.log(`${index + 1}. ${item.tagName}${item.className ? '.' + item.className : ''}${item.id ? '#' + item.id : ''}`);
    console.log(`   Size: ${item.rect.width}px x ${item.rect.height}px`);
    console.log(`   Position: ${item.rect.top}px, ${item.rect.left}px`);
    console.log(`   Background: ${item.backgroundColor}`);
    console.log(`   Borders: top=${item.borderTop}, bottom=${item.borderBottom}`);
    console.log(`   Box Shadow: ${item.boxShadow}`);
  });

  return thinElements;
};

/**
 * Test removing different types of elements to identify the black bar
 */
export const testElementRemoval = () => {
  console.log('🧪 Testing element removal to identify black bar...');
  
  const testTypes = [
    {
      name: 'Elements with h-1, h-2, h-px classes',
      selector: '[class*="h-1"], [class*="h-2"], [class*="h-px"]'
    },
    {
      name: 'Elements with black backgrounds',
      selector: '[class*="bg-black"], [class*="bg-gray-900"], [class*="bg-slate-900"]'
    },
    {
      name: 'Elements with dark borders',
      selector: '[class*="border-black"], [class*="border-gray-900"]'
    },
    {
      name: 'Elements with box shadows',
      selector: '[class*="shadow"]'
    },
    {
      name: 'Pseudo elements',
      selector: '*'
    }
  ];

  testTypes.forEach((test, index) => {
    console.log(`\nTest ${index + 1}: ${test.name}`);
    
    if (test.name === 'Pseudo elements') {
      // Special handling for pseudo elements
      const style = document.createElement('style');
      style.id = 'debug-pseudo-hide';
      style.innerHTML = '*::before, *::after { display: none !important; }';
      document.head.appendChild(style);
      console.log('Hidden all pseudo elements. Check if black bar is gone.');
      console.log('Run restorePseudoElements() to restore them.');
    } else {
      const elements = document.querySelectorAll(test.selector);
      console.log(`Found ${elements.length} elements matching: ${test.selector}`);
      
      elements.forEach((element, i) => {
        element.style.display = 'none';
        console.log(`Hidden element ${i + 1}: ${element.tagName}${element.className ? '.' + element.className : ''}`);
      });
      
      if (elements.length > 0) {
        console.log('Check if black bar is gone. Run restoreElements() to restore them.');
      }
    }
  });
};

/**
 * Restore hidden elements
 */
export const restoreElements = () => {
  console.log('♻️ Restoring hidden elements...');
  const allElements = document.querySelectorAll('*');
  let restoredCount = 0;

  allElements.forEach(element => {
    if (element.style.display === 'none') {
      element.style.display = '';
      restoredCount++;
    }
  });

  console.log(`Restored ${restoredCount} elements`);
};

/**
 * Restore pseudo elements
 */
export const restorePseudoElements = () => {
  console.log('♻️ Restoring pseudo elements...');
  const style = document.getElementById('debug-pseudo-hide');
  if (style) {
    style.remove();
    console.log('Pseudo elements restored');
  } else {
    console.log('No pseudo element hiding style found');
  }
};

/**
 * Find elements with problematic inline styles
 */
export const findInlineStyledElements = () => {
  console.log('🔍 Scanning for elements with inline styles...');
  const allElements = document.querySelectorAll('*');
  const styledElements = [];

  allElements.forEach((element, index) => {
    if (element.style && element.style.length > 0) {
      const styles = {};
      for (let i = 0; i < element.style.length; i++) {
        const property = element.style[i];
        styles[property] = element.style[property];
      }

      styledElements.push({
        element,
        tagName: element.tagName,
        className: element.className,
        id: element.id,
        styles
      });
    }
  });

  console.log(`Found ${styledElements.length} elements with inline styles:`);
  styledElements.forEach((item, index) => {
    console.log(`${index + 1}. ${item.tagName}${item.className ? '.' + item.className : ''}${item.id ? '#' + item.id : ''}`);
    console.log('   Inline styles:', item.styles);
  });

  return styledElements;
};

/**
 * Scan for problematic CSS properties
 */
export const scanForProblematicCSS = () => {
  console.log('🔍 Scanning for problematic CSS properties...');
  const allElements = document.querySelectorAll('*');
  const problematicElements = [];

  allElements.forEach((element, index) => {
    const computedStyle = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    
    // Check for problematic properties
    const issues = [];
    
    if (computedStyle.backgroundColor && (
      computedStyle.backgroundColor.includes('rgb(0, 0, 0)') ||
      computedStyle.backgroundColor.includes('black')
    )) {
      issues.push(`Black background: ${computedStyle.backgroundColor}`);
    }
    
    if (computedStyle.borderTopWidth !== '0px' && computedStyle.borderTopColor.includes('rgb(0, 0, 0)')) {
      issues.push(`Black top border: ${computedStyle.borderTopWidth}`);
    }
    
    if (computedStyle.borderBottomWidth !== '0px' && computedStyle.borderBottomColor.includes('rgb(0, 0, 0)')) {
      issues.push(`Black bottom border: ${computedStyle.borderBottomWidth}`);
    }
    
    if (rect.height <= 4 && rect.width > 50) {
      issues.push(`Thin element: ${rect.height}px height`);
    }
    
    if (issues.length > 0) {
      problematicElements.push({
        element,
        tagName: element.tagName,
        className: element.className,
        id: element.id,
        issues,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        }
      });
    }
  });

  console.log(`Found ${problematicElements.length} elements with problematic CSS:`);
  problematicElements.forEach((item, index) => {
    console.log(`${index + 1}. ${item.tagName}${item.className ? '.' + item.className : ''}${item.id ? '#' + item.id : ''}`);
    console.log(`   Issues: ${item.issues.join(', ')}`);
    console.log(`   Position: ${item.rect.top}px, ${item.rect.left}px`);
    console.log(`   Size: ${item.rect.width}px x ${item.rect.height}px`);
  });

  return problematicElements;
};

/**
 * Highlight all potentially problematic elements
 */
export const highlightProblematicElements = () => {
  console.log('🎯 Highlighting potentially problematic elements...');
  
  const darkElements = findDarkElements();
  const thinElements = findThinHorizontalElements();
  const problematicElements = scanForProblematicCSS();
  
  // Combine all elements
  const allProblematic = [...darkElements, ...thinElements, ...problematicElements];
  const uniqueElements = [...new Set(allProblematic.map(item => item.element))];
  
  uniqueElements.forEach((element, index) => {
    element.style.border = '3px solid red';
    element.style.boxShadow = '0 0 10px red';
    element.style.zIndex = '99999';
  });
  
  console.log(`Highlighted ${uniqueElements.length} potentially problematic elements with red borders`);
  console.log('Run clearHighlights() to remove highlights');
};

/**
 * Clear all highlights
 */
export const clearHighlights = () => {
  console.log('🧹 Clearing all highlights...');
  const allElements = document.querySelectorAll('*');
  let clearedCount = 0;

  allElements.forEach(element => {
    if (element.style.border.includes('red') || element.style.boxShadow.includes('red')) {
      element.style.border = '';
      element.style.boxShadow = '';
      element.style.zIndex = '';
      clearedCount++;
    }
  });

  console.log(`Cleared highlights from ${clearedCount} elements`);
};

/**
 * Generate comprehensive DOM analysis report
 */
export const generateElementReport = () => {
  console.log('📊 Generating comprehensive DOM analysis report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    totalElements: document.querySelectorAll('*').length,
    darkElements: findDarkElements(),
    thinElements: findThinHorizontalElements(),
    inlineStyledElements: findInlineStyledElements(),
    problematicElements: scanForProblematicCSS()
  };
  
  console.log('📋 DOM Analysis Report:');
  console.log(`Total elements: ${report.totalElements}`);
  console.log(`Dark background elements: ${report.darkElements.length}`);
  console.log(`Thin horizontal elements: ${report.thinElements.length}`);
  console.log(`Inline styled elements: ${report.inlineStyledElements.length}`);
  console.log(`Problematic elements: ${report.problematicElements.length}`);
  
  return report;
};

// Make functions available globally for console use
if (typeof window !== 'undefined') {
  window.debugHelpers = {
    findDarkElements,
    findThinHorizontalElements,
    testElementRemoval,
    restoreElements,
    restorePseudoElements,
    findInlineStyledElements,
    scanForProblematicCSS,
    highlightProblematicElements,
    clearHighlights,
    generateElementReport
  };
  
  console.log('🛠️ Debug helpers loaded! Available functions:');
  console.log('- window.debugHelpers.findDarkElements()');
  console.log('- window.debugHelpers.findThinHorizontalElements()');
  console.log('- window.debugHelpers.testElementRemoval()');
  console.log('- window.debugHelpers.highlightProblematicElements()');
  console.log('- window.debugHelpers.generateElementReport()');
  console.log('- window.debugHelpers.clearHighlights()');
}
