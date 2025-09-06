import React from 'react';

const MinimalTest = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: 'black', marginBottom: '20px' }}>
        Minimal Test Page
      </h1>
      
      <p style={{ color: 'black', marginBottom: '10px' }}>
        This is the most minimal page possible with no external styling.
      </p>
      
      <p style={{ color: 'black', marginBottom: '10px' }}>
        If you see a black bar on this page, it's coming from:
      </p>
      
      <ul style={{ color: 'black', marginLeft: '20px' }}>
        <li>Global CSS (body, html, or universal selectors)</li>
        <li>Browser default styles</li>
        <li>Build tool artifacts</li>
      </ul>
      
      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc'
      }}>
        <h2 style={{ color: 'black', marginBottom: '10px' }}>Test Section</h2>
        <p style={{ color: 'black' }}>
          This section has a light gray background to test for visual artifacts.
        </p>
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: '#e0e0e0',
        border: '1px solid #999'
      }}>
        <h2 style={{ color: 'black', marginBottom: '10px' }}>Another Test Section</h2>
        <p style={{ color: 'black' }}>
          This section has a darker gray background.
        </p>
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white',
        border: '2px solid #333'
      }}>
        <h2 style={{ color: 'black', marginBottom: '10px' }}>White Section with Dark Border</h2>
        <p style={{ color: 'black' }}>
          This section tests if dark borders are causing the black bar issue.
        </p>
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'black',
        color: 'white'
      }}>
        <h2 style={{ color: 'white', marginBottom: '10px' }}>Black Section</h2>
        <p style={{ color: 'white' }}>
          This section has a black background to test if it's related to the black bar.
        </p>
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white',
        border: '1px solid #ddd'
      }}>
        <h2 style={{ color: 'black', marginBottom: '10px' }}>Final Test Section</h2>
        <p style={{ color: 'black' }}>
          This is the last section to test for any black bars between sections.
        </p>
      </div>
    </div>
  );
};

export default MinimalTest;
