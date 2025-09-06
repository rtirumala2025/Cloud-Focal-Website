import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

/* FIXED: Added error boundary for better error handling */
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';

// Context Providers
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

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
import Resources from './pages/Resources/Resources';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfService from './pages/Legal/TermsOfService';
import CookiePolicy from './pages/Legal/CookiePolicy';
import NotFound from './pages/NotFound/NotFound';

// Debug Components
import MinimalTest from './pages/Debug/MinimalTest';
import LayoutTest from './pages/Debug/LayoutTest';
import DebugControlPanel from './components/debug/DebugControlPanel';
import DarkModeTest from './components/debug/DarkModeTest';
import ThemeTestPage from './components/debug/ThemeTestPage';

// Global Styles
import './assets/index.css';
import './styles/debugOverrides.css';

// Debug Helpers (for console use)
import './utils/debugHelpers';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AppProvider>
          <AuthProvider>
            <ThemeProvider>
              <Router>
                <div className="App">
                {/* Debug Tools - Always show for testing */}
                <DebugControlPanel />
                <DarkModeTest />
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Home />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/about" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <About />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/services" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Services />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/services/technology-staffing" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <TechnologyStaffing />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/services/it-consulting" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ITConsulting />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/services/integration-services" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IntegrationServices />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/industries" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Industries />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/industries/public-sector" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <PublicSector />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/industries/private-enterprise" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <PrivateEnterprise />
                        </motion.div>
                      </Layout>
                    } />
                    
                    
                    <Route path="/careers" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Careers />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/resources" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Resources />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/contact" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Contact />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/privacy-policy" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <PrivacyPolicy />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/terms-of-service" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <TermsOfService />
                        </motion.div>
                      </Layout>
                    } />
                    
                    <Route path="/cookie-policy" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CookiePolicy />
                        </motion.div>
                      </Layout>
                    } />
                    
                    {/* Debug Routes */}
                    <Route path="/debug/minimal" element={<MinimalTest />} />
                    <Route path="/debug/layout" element={<LayoutTest />} />
                    <Route path="/debug/theme" element={<ThemeTestPage />} />
                    
                    <Route path="*" element={
                      <Layout>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <NotFound />
                        </motion.div>
                      </Layout>
                    } />
                  </Routes>
                </AnimatePresence>
              </div>
            </Router>
          </ThemeProvider>
        </AuthProvider>
      </AppProvider>
    </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
