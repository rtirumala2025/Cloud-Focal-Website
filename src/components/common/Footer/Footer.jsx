import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import navigationData from '../../../assets/data/navigationData.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [cursorPrompt, setCursorPrompt] = useState({ show: false, text: '', x: 0, y: 0 });

  // Handle cursor prompts
  const handleMouseOver = (e, text) => {
    setCursorPrompt({ show: true, text, x: e.clientX, y: e.clientY - 50 });
  };

  const handleMouseOut = () => {
    setCursorPrompt({ show: false, text: '', x: 0, y: 0 });
  };

  const handleMouseMove = (e) => {
    if (cursorPrompt.show) {
      setCursorPrompt(prev => ({ ...prev, x: e.clientX, y: e.clientY - 50 }));
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [cursorPrompt.show, handleMouseMove]);

  return (
    <>
      {/* Cursor Prompt */}
      <div 
        className={`fixed top-0 left-0 z-50 pointer-events-none transition-all duration-300 ${
          cursorPrompt.show ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          transform: `translate(${cursorPrompt.x}px, ${cursorPrompt.y}px)`,
        }}
      >
        <div className="bg-blue-500/95 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white/20">
          {cursorPrompt.text}
        </div>
      </div>

      <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-48 h-48 bg-white/5 rounded-full"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-60 right-10 w-48 h-48 bg-white/5 rounded-full"
            animate={{
              y: [0, 30, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: -7
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-48 h-48 bg-white/5 rounded-full"
            animate={{
              y: [0, -15, 0],
              rotate: [180, 360, 180],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: -14
            }}
          />
        </div>



        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-10 mb-16 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onMouseOver={(e) => handleMouseOver(e, "Ready to transform your business?")}
            onMouseOut={handleMouseOut}
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how Cloud Focal can help accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 px-7 py-4 rounded-full font-semibold hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onMouseOver={(e) => handleMouseOver(e, "Let's start your transformation")}
                  onMouseOut={handleMouseOut}
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent text-white border-2 border-white/30 px-7 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300"
                  onMouseOver={(e) => handleMouseOver(e, "Discover our solutions")}
                  onMouseOut={handleMouseOut}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-primary-600">
                  CF
                </div>
                <div className="text-2xl font-bold text-white">Cloud Focal</div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
              Leading technology staffing and IT consulting company. We help businesses 
              find top tech talent and implement innovative IT solutions for digital transformation.
            </p>
            
            {/* Social Links */}
              <div className="flex gap-4">
              {navigationData.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:-translate-y-1 transition-all duration-300 group"
                    onMouseOver={(e) => handleMouseOver(e, `Connect on ${social.platform}`)}
                    onMouseOut={handleMouseOut}
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
              <h3 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
              {navigationData.footerNavigation.services.map((service) => (
                <li key={service.title}>
                  <Link
                    to={service.path}
                      className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                      onMouseOver={(e) => handleMouseOver(e, service.title)}
                      onMouseOut={handleMouseOut}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
              <h3 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">
                Industries
              </h3>
              <ul className="space-y-3">
              {navigationData.footerNavigation.industries.map((industry) => (
                <li key={industry.title}>
                  <Link
                    to={industry.path}
                      className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                      onMouseOver={(e) => handleMouseOver(e, industry.title)}
                      onMouseOut={handleMouseOut}
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
              <h3 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
              {navigationData.footerNavigation.company.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                      className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                      onMouseOver={(e) => handleMouseOver(e, item.title)}
                      onMouseOut={handleMouseOut}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="text-white/60">
                © {currentYear} Cloud Focal. All rights reserved.
            </div>

              <nav className="flex gap-8">
                {navigationData.footerNavigation.legal.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    onMouseOver={(e) => handleMouseOver(e, item.title)}
                    onMouseOut={handleMouseOut}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

// Social Media Icons Component
const SocialIcon = ({ platform }) => {
  const iconClasses = "w-5 h-5 text-white group-hover:text-primary-600 transition-colors duration-300";
  
  switch (platform.toLowerCase()) {
    case 'linkedin':
      return (
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;