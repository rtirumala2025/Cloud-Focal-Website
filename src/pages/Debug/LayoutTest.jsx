import React from 'react';
import Layout from '../../components/common/Layout/Layout';

const LayoutTest = () => {
  return (
    <Layout>
      <div style={{ 
        backgroundColor: 'white', 
        minHeight: '50vh', 
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ color: 'black', marginBottom: '20px' }}>
          Layout Test Page
        </h1>
        
        <p style={{ color: 'black', marginBottom: '10px' }}>
          This page uses the Layout component but with minimal content.
        </p>
        
        <p style={{ color: 'black', marginBottom: '10px' }}>
          If you see a black bar on this page, it's coming from:
        </p>
        
        <ul style={{ color: 'black', marginLeft: '20px' }}>
          <li>Layout component wrapper</li>
          <li>Header component</li>
          <li>Footer component</li>
          <li>Global CSS applied by Layout</li>
        </ul>
        
        <div style={{ 
          marginTop: '40px', 
          padding: '20px', 
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc'
        }}>
          <h2 style={{ color: 'black', marginBottom: '10px' }}>Test Section 1</h2>
          <p style={{ color: 'black' }}>
            This section tests for black bars between content and footer.
          </p>
        </div>
        
        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          backgroundColor: '#e0e0e0',
          border: '1px solid #999'
        }}>
          <h2 style={{ color: 'black', marginBottom: '10px' }}>Test Section 2</h2>
          <p style={{ color: 'black' }}>
            This section tests for black bars between sections.
          </p>
        </div>
        
        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          backgroundColor: 'white',
          border: '2px solid #333'
        }}>
          <h2 style={{ color: 'black', marginBottom: '10px' }}>Test Section 3</h2>
          <p style={{ color: 'black' }}>
            This section tests for black bars before the footer.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LayoutTest;
