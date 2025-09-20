import React from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import Footer from './Footer';
import FooterDark from './Footer-dark';

const ConditionalFooter = () => {
  const location = useLocation();
  const { state } = useApp();

  // Check if current page is a dark mode page (from URL or context)
  const isDarkModePage = state.theme === 'dark' || location.pathname.includes('-dark') || location.pathname === '/dark';

  // Return the appropriate footer component based on dark mode
  return isDarkModePage ? <FooterDark /> : <Footer />;
};

export default ConditionalFooter;
