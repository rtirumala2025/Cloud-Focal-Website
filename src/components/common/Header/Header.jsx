import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import navigationData from '../../../assets/data/navigationData.json';
// Dark mode removed: no theme context needed; use canonical light paths

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // PERFORMANCE FIX: Throttled scroll effect
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[99998] dropdown-overlay"
              onClick={() => setActiveDropdown(null)}
            />
            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
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
                  className={`block px-4 py-3 transition-colors text-gray-700 hover:bg-gray-50 hover:text-primary-600`}
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
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 space-y-2">
              {item.children.map((child) => (
                <Link
                  key={child.id}
                  to={child.path}
                  className={`block py-2 transition-colors text-gray-600 hover:text-primary-600`}
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
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logos/cloudfocal-logo.png"
              alt="Cloud Focal - Technology Staffing & IT Consulting"
              className={`h-10 lg:h-12 w-auto transition-all duration-200 hover:opacity-80`}
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
            {/* CTA Button */}
            <Link
              to="/contact"
              className={`bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-medium`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-md transition-colors text-gray-600 hover:text-primary-600 hover:bg-gray-50`}
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
            transition={{ duration: 0.2 }}
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
                  className={`block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-3 px-6 rounded-lg transition-colors font-medium`}
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