import React from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import Header from './Header';
import HeaderDark from './Header-dark';

const ConditionalHeader = () => {
  const location = useLocation();
  const { state } = useApp();
  
  // Check if current page is a dark mode page (from URL or context)
  const isDarkModePage = state.theme === 'dark' || location.pathname.includes('-dark') || location.pathname === '/dark';
  
  // Return the appropriate header component
  return isDarkModePage ? <HeaderDark /> : <Header />;
};

export default ConditionalHeader;
