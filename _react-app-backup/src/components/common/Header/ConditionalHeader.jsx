import React from 'react';
import Header from './Header';

const ConditionalHeader = () => {
  // Dark mode removed: always use light Header
  return <Header />;
};

export default ConditionalHeader;
