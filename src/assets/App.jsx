import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/common/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Industries from './pages/Industries/Industries';
import Careers from './pages/Careers/Careers';
import Resources from './pages/Resources/Resources';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/technology-staffing" element={<Services />} />
            <Route path="/services/it-consulting" element={<Services />} />
            <Route path="/services/integration-services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/public-sector" element={<Industries />} />
            <Route path="/industries/private-enterprise" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/blog" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;