import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../../context/AppContext';
import { useTheme } from '../../../context/ThemeContext';
import navigationData from '../../../assets/data/navigationData.json';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { state, actions } = useApp();
  const { state: themeState, actions: themeActions } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menuId, event) => {
    if (activeDropdown === menuId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menuId);
    }
  };

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const renderDropdownMenu = (item) => {
    if (!item.children) return null;

    return (
      <AnimatePresence>
        {activeDropdown === item.id && (
          <>
            {/* Overlay to prevent clicks behind dropdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[99998] dropdown-overlay"
              onClick={() => setActiveDropdown(null)}
            />
            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[99999] dropdown-menu"
              style={{
                top: '4rem', // Adjust based on header height
                left: '50%',
                transform: 'translateX(-50%)',
                minWidth: '16rem'
              }}
            >
              {item.children.map((child) => (
                <Link
                  key={child.id}
                  to={child.path}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="font-medium">{child.title}</div>
                  {child.description && (
                    <div className="text-sm text-gray-500 mt-1">{child.description}</div>
                  )}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  const renderMobileDropdownMenu = (item) => {
    if (!item.children) return null;

    return (
      <AnimatePresence>
        {activeDropdown === item.id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pl-4 space-y-2">
              {item.children.map((child) => (
                <Link
                  key={child.id}
                  to={child.path}
                  className="block py-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <div className="font-medium">{child.title}</div>
                  {child.description && (
                    <div className="text-sm text-gray-500 mt-1">{child.description}</div>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logos/cloudfocal-logo.png"
              alt="Cloud Focal - Technology Staffing & IT Consulting"
              className="h-8 lg:h-10 w-auto hover:opacity-80 transition-opacity duration-200"
              loading="eager"
            />
          </Link>

          {/* FIXED: Added proper navigation structure with accessibility */}
          <nav role="navigation" aria-label="Main navigation" className="hidden lg:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navigationData.mainNavigation.map((item) => (
                <li key={item.id} className="relative">
                {item.children ? (
                  <div className="relative">
                    <div className="flex items-center">
                      <Link
                        to={item.path}
                        className={`py-3 px-4 rounded-l-lg transition-all duration-200 ${
                          isActiveLink(item.path)
                            ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600'
                            : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                        }`}
                      >
                        {item.title}
                      </Link>
                      <button
                        onClick={(e) => toggleDropdown(item.id, e)}
                        className={`py-3 px-2 rounded-r-lg transition-all duration-200 ${
                          isActiveLink(item.path)
                            ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600'
                            : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    {renderDropdownMenu(item)}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`py-3 px-4 rounded-lg transition-all duration-200 ${
                      isActiveLink(item.path)
                        ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
            </ul>
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={() => themeActions.toggleTheme()}
              className="p-3 rounded-lg text-text-secondary hover:text-primary-600 hover:bg-bg-secondary transition-all duration-200"
              aria-label="Toggle theme"
            >
              {themeState.isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 hover:shadow-lg transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white mobile-menu"
          >
            <div className="container mx-auto px-4 py-4">
              {/* FIXED: Added proper mobile navigation structure */}
              <nav role="navigation" aria-label="Mobile navigation" className="space-y-2">
                {navigationData.mainNavigation.map((item) => (
                  <div key={item.id}>
                    {item.children ? (
                      <div>
                        <div className="flex items-center">
                          <Link
                            to={item.path}
                            className={`flex-1 py-3 px-4 rounded-l-md transition-colors ${
                              isActiveLink(item.path)
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                            }`}
                          >
                            <span className="font-medium">{item.title}</span>
                          </Link>
                          <button
                            onClick={() => toggleDropdown(item.id)}
                            className={`py-3 px-2 rounded-r-md transition-colors ${
                              isActiveLink(item.path)
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                            }`}
                          >
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                activeDropdown === item.id ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        </div>
                        {renderMobileDropdownMenu(item)}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block py-3 px-4 rounded-md transition-colors ${
                          isActiveLink(item.path)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6">
                <Link
                  to="/contact"
                  className="block w-full bg-primary-600 text-white text-center py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;