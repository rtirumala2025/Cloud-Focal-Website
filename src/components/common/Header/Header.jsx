import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import navigationData from '../../../assets/data/navigationData.json';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

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
    event?.preventDefault();
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/20 z-[9999]"
              onClick={() => setActiveDropdown(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 mt-2 w-56 rounded-lg shadow-lg bg-white border border-gray-100 z-[10000]"
            >
              {item.children.map((child) => (
                <Link
                  key={child.id}
                  to={child.path}
                  className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-[9998] bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logos/cloudfocal-logo.png"
              alt="Cloud Focal - Technology Staffing & IT Consulting"
              className="h-10 lg:h-12 w-auto"
              style={{ background: 'transparent' }}
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navigationData.mainNavigation.map((item) => (
                <li key={item.id} className="relative">
                  {item.children ? (
                    <div className="relative">
                      <div className="flex items-center">
                        <Link
                          to={item.path}
                          className={`px-4 py-3 transition-colors ${
                            isActiveLink(item.path)
                              ? 'text-black font-medium border-b-2 border-black'
                              : 'text-gray-800 hover:text-black hover:bg-gray-50'
                          }`}
                        >
                          {item.title}
                        </Link>
                        <button
                          onClick={(e) => toggleDropdown(item.id, e)}
                          className="p-1 -ml-1 text-gray-500 hover:text-black"
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
                      className={`px-4 py-3 transition-colors ${
                        isActiveLink(item.path)
                          ? 'text-black font-medium border-b-2 border-black'
                          : 'text-gray-800 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 -mr-2 text-gray-800 hover:text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
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
            className="lg:hidden bg-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2 border-t border-gray-100">
              {navigationData.mainNavigation.map((item) => (
                <div key={item.id} className="border-b border-gray-100">
                  {item.children ? (
                    <div>
                      <div
                        className="flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg cursor-pointer"
                        onClick={() => toggleDropdown(item.id)}
                      >
                        <span className="font-medium">{item.title}</span>
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
                      </div>
                      {activeDropdown === item.id && (
                        <div className="pl-6 py-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.id}
                              to={child.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
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