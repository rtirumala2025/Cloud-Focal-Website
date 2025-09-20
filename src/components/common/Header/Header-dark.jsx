import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../../context/AppContext';
import navigationData from '../../../assets/data/navigationData.json';
import { getThemeAwarePath } from '../../../utils/themeUtils';

const HeaderDark = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { state, actions } = useApp();

  // This component is always in dark mode, but we still need theme context for switching

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
      return location.pathname === '/' || location.pathname === '/dark';
    }
    return location.pathname.startsWith(path) || location.pathname.startsWith(path + '-dark');
  };

  // PERFORMANCE FIX: Optimized theme switching with smooth transitions
  const handleThemeSwitch = useCallback((e) => {
    e.preventDefault();
    const currentPath = location.pathname;
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    
    // Update theme in context (this will also save to localStorage)
    actions.setTheme(newTheme);
    
    // Navigate to the appropriate theme version
    let newPath;
    if (newTheme === 'dark') {
      if (currentPath === '/') {
        newPath = '/dark';
      } else if (!currentPath.includes('-dark')) {
        newPath = currentPath + '-dark';
      } else {
        newPath = currentPath; // Already on dark page
      }
    } else {
      if (currentPath === '/dark') {
        newPath = '/';
      } else if (currentPath.includes('-dark')) {
        newPath = currentPath.replace('-dark', '');
      } else {
        newPath = currentPath; // Already on light page
      }
    }
    
    // PERFORMANCE FIX: Use React Router navigation instead of full page reload
    navigate(newPath, { replace: true });
  }, [location.pathname, navigate, state.theme, actions]);

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
            {/* Dropdown Menu - Enhanced Dark Mode */}
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-64 rounded-lg shadow-xl border py-2 z-[99999] dropdown-menu bg-slate-900 border-slate-700 shadow-2xl shadow-black/50"
              style={{
                top: '4rem',
                left: '50%',
                transform: 'translateX(-50%)',
                minWidth: '16rem'
              }}
            >
              {item.children.map((child) => (
                <Link
                  key={child.id}
                  to={getThemeAwarePath(child.path)}
                  className="block px-4 py-3 transition-all duration-200 text-gray-100 hover:bg-slate-700/70 hover:text-emerald-400 border-b border-slate-700/50 last:border-b-0"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="font-medium">{child.title}</div>
                  {child.description && (
                    <div className="text-sm mt-1 text-gray-400">
                      {child.description}
                    </div>
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
            <div className="pl-4 space-y-2 mt-2">
              {item.children.map((child) => (
                <Link
                  key={child.id}
                  to={getThemeAwarePath(child.path)}
                  className="block py-2 px-3 rounded-md transition-all duration-200 text-gray-200 hover:text-emerald-400 hover:bg-slate-700/50"
                >
                  <div className="font-medium">{child.title}</div>
                  {child.description && (
                    <div className="text-sm mt-1 text-gray-400">
                      {child.description}
                    </div>
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
          ? 'bg-slate-900 backdrop-blur-md shadow-2xl shadow-black/25 border-b border-slate-800/50'
          : 'bg-slate-900 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Enhanced for Dark Mode */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logos/cloudfocal-logo.png"
              alt="Cloud Focal - Technology Staffing & IT Consulting"
              className="h-10 lg:h-12 w-auto transition-all duration-200 brightness-110 contrast-110 hover:brightness-125 drop-shadow-lg"
              loading="eager"
            />
          </Link>

          {/* Enhanced Navigation with Dark Mode */}
          <nav role="navigation" aria-label="Main navigation" className="hidden lg:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navigationData.mainNavigation.map((item) => (
                <li key={item.id} className="relative">
                {item.children ? (
                  <div className="relative">
                    <div className="flex items-center">
                      <Link
                        to={getThemeAwarePath(item.path)}
                        className={`py-3 px-4 rounded-l-lg transition-all duration-200 font-medium ${
                          isActiveLink(item.path)
                            ? 'text-emerald-400 bg-emerald-900/30 border-b-2 border-emerald-400'
                            : 'text-gray-200 hover:text-emerald-400 hover:bg-slate-700/50'
                        }`}
                      >
                        {item.title}
                      </Link>
                      <button
                        onClick={(e) => toggleDropdown(item.id, e)}
                        className={`py-3 px-2 rounded-r-lg transition-all duration-200 ${
                          isActiveLink(item.path)
                            ? 'text-emerald-400 bg-emerald-900/30 border-b-2 border-emerald-400'
                            : 'text-gray-200 hover:text-emerald-400 hover:bg-slate-700/50'
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
                    to={getThemeAwarePath(item.path)}
                    className={`py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                      isActiveLink(item.path)
                        ? 'text-emerald-400 bg-emerald-900/30 border-b-2 border-emerald-400'
                        : 'text-gray-200 hover:text-emerald-400 hover:bg-slate-700/50'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
            </ul>
          </nav>

          {/* Right side actions - Enhanced Dark Mode */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Enhanced Theme toggle */}
            <button
              onClick={handleThemeSwitch}
              className="p-3 rounded-lg transition-all duration-200 text-gray-200 hover:text-emerald-400 hover:bg-slate-700/50 bg-slate-800/50"
              aria-label="Toggle theme"
            >
              {state.theme === 'dark' ? (
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

            {/* Enhanced CTA Button */}
            <Link
              to={getThemeAwarePath("/contact")}
              className="px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-500/25 hover:shadow-xl border border-emerald-500/30"
            >
              Get Started
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md transition-all duration-200 text-gray-200 hover:text-emerald-400 hover:bg-slate-700/50"
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

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mobile-menu bg-slate-900 border-t border-slate-700"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Enhanced Mobile Navigation */}
              <nav role="navigation" aria-label="Mobile navigation" className="space-y-2">
                {navigationData.mainNavigation.map((item) => (
                  <div key={item.id}>
                    {item.children ? (
                      <div>
                        <div className="flex items-center">
                          <Link
                            to={getThemeAwarePath(item.path)}
                            className={`flex-1 py-3 px-4 rounded-l-md transition-all duration-200 ${
                              isActiveLink(item.path)
                                ? 'text-emerald-400 bg-emerald-900/30'
                                : 'text-gray-200 hover:text-emerald-400 hover:bg-slate-700/50'
                            }`}
                          >
                            <span className="font-medium">{item.title}</span>
                          </Link>
                          <button
                            onClick={() => toggleDropdown(item.id)}
                            className={`py-3 px-2 rounded-r-md transition-all duration-200 ${
                              isActiveLink(item.path)
                                ? 'text-emerald-400 bg-emerald-900/30'
                                : 'text-gray-200 hover:text-emerald-400 hover:bg-slate-700/50'
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
                        to={getThemeAwarePath(item.path)}
                        className={`block py-3 px-4 rounded-md transition-all duration-200 font-medium ${
                          isActiveLink(item.path)
                            ? 'text-emerald-400 bg-emerald-900/30'
                            : 'text-gray-200 hover:text-emerald-400 hover:bg-slate-700/50'
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Enhanced Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <Link
                  to={getThemeAwarePath("/contact")}
                  className="block w-full text-center py-3 px-6 rounded-lg transition-all duration-200 font-medium bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-500/25 border border-emerald-500/30"
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

export default HeaderDark;
