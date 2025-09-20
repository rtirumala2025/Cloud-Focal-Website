import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button'; // kept as in your original file

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* ===== Subtle Background Effects (reduced/noisy artifacts) ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* keep an overlay but reduce intensity so it doesn't compete with content */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/25 to-indigo-900/50" />

        {/* grid pattern — much more subtle (lower opacity) */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.04, // was 0.10 — much less visually intrusive
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* orbs — keep them, but smaller, much lower opacity, and more blur so they don't read as a neon halo */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/6 w-56 h-56 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06), rgba(34,211,238,0.02))', opacity: 0.06 }}
            animate={{ y: [-8, 8, -8], x: [-6, 6, -6] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/3 right-1/5 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05), rgba(236,72,153,0.02))', opacity: 0.05 }}
            animate={{ y: [8, -10, 8], x: [-8, 8, -8] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* ===== Content (kept original structure; improved contrast, spacing, buttons) ===== */}
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge — removed heavy border, kept subtle background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/12 backdrop-blur-sm text-blue-100 text-sm font-medium mb-8"
            aria-hidden
          >
            <motion.span
              className="w-2 h-2 bg-emerald-400 rounded-full mr-3"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Trusted by 500+ companies worldwide
          </motion.div>

          {/* Headline — unchanged content, preserved gradient text but kept it for emphasis only */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Vision
            <span
              className="block mt-2"
              style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              Into Reality
            </span>
          </motion.h1>

          {/* Subtext — increased contrast slightly */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Cloud Focal delivers comprehensive technology solutions that accelerate your digital transformation.
            From talent acquisition to system integration, we're your strategic partner for success.
          </motion.p>

          {/* ===== Buttons: made them IDENTICAL in height/visual weight and improved contrast ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* Primary: strong accent, consistent height */}
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center h-12 min-w-[170px] px-6 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              whileHover={{ translateY: -2 }}
            >
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Get Started Today
            </motion.a>

            {/* Secondary: solid dark fill (NOT transparent) so it reads on the dark hero panel.
                This avoids the 'invisible/washed-out' transparent button problem. */}
            <motion.a
              href="/services"
              className="inline-flex items-center justify-center h-12 min-w-[170px] px-6 bg-slate-800/90 text-slate-100 font-semibold text-lg rounded-lg border border-white/6 hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              whileHover={{ translateY: -2 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats — removed heavy hover transforms and improved small text contrast */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <motion.div className="text-center" whileHover={{ y: -3 }} transition={{ duration: 0.15 }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-slate-300 text-sm">Successful Placements</div>
            </motion.div>

            <motion.div className="text-center" whileHover={{ y: -3 }} transition={{ duration: 0.15 }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">100+</div>
              <div className="text-slate-300 text-sm">Projects Delivered</div>
            </motion.div>

            <motion.div className="text-center" whileHover={{ y: -3 }} transition={{ duration: 0.15 }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-slate-300 text-sm">Client Satisfaction</div>
            </motion.div>

            <motion.div className="text-center" whileHover={{ y: -3 }} transition={{ duration: 0.15 }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-slate-300 text-sm">Support Available</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ===== Scroll Indicator — subtle border (reduced thickness) so it doesn't compete visually ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full flex justify-center border border-white/10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
