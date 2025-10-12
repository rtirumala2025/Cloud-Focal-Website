import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

/* FIXED: Added error boundary for better error handling */
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';

// Context Providers
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';

// Layout Components
import Layout from './components/common/Layout/Layout';

// Page Components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import TechnologyStaffing from './pages/Services/TechnologyStaffing';
import ITConsulting from './pages/Services/ITConsulting';
import IntegrationServices from './pages/Services/IntegrationServices';
import Industries from './pages/Industries/Industries';
import PublicSector from './pages/Industries/PublicSector';
import PrivateEnterprise from './pages/Industries/PrivateEnterprise';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfService from './pages/Legal/TermsOfService';
import CookiePolicy from './pages/Legal/CookiePolicy';
import NotFound from './pages/NotFound/NotFound';

// Global Styles
import './assets/index.css';

// Element Inspector (Development Tool)
import ElementInspector from './components/ElementInspector/ElementInspector';


function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AppProvider>
          <AuthProvider>
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <div className="App">
                  {/* Element Inspector - Development Tool */}
                  <ElementInspector />
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Home />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/about" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <About />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/services" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Services />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/services/technology-staffing" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <TechnologyStaffing />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/services/it-consulting" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ITConsulting />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/services/integration-services" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IntegrationServices />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/industries" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Industries />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/industries/public-sector" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <PublicSector />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/industries/private-enterprise" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <PrivateEnterprise />
                        </motion.div>
                      </Layout>
                    } />
                    
                    
                    <Route path="/careers" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Careers />
                        </motion.div>
                      </Layout>
                    } />
                    
                    
                    <Route path="/contact" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Contact />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/privacy-policy" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <PrivacyPolicy />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/terms-of-service" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <TermsOfService />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/cookie-policy" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CookiePolicy />
                        </motion.div>
                      </Layout>
                    } />
                    
                    {/* Dark mode removed: preserve old links by redirecting to light equivalents */}
                    <Route path="/dark" element={
                      <Layout>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                          <Home />
                        </motion.div>
                      </Layout>
                    } />

                    <Route path="/about-dark" element={
                      <Layout>
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          <About />
                        </motion.div>
                      </Layout>
                    } />

                    <Route path="/services-dark" element={
                      <Layout>
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          <Services />
                        </motion.div>
                      </Layout>
                    } />

                    <Route path="/contact-dark" element={
                      <Layout>
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          <Contact />
                        </motion.div>
                      </Layout>
                    } />
                    
                    
                    <Route path="*" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <NotFound />
                        </motion.div>
                      </Layout>
                    } />
                  </Routes>
                </AnimatePresence>
              </div>
            </Router>
        </AuthProvider>
      </AppProvider>
    </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
