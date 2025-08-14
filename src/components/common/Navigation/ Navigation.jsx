import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
      {navigationItems.map((item) => (
        <li key={item.path}>
          <Link 
            to={item.path} 
            className={isActive(item.path) ? styles.active : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;