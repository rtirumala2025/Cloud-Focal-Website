import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import { Cloud, Cpu, Users, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  // Key focal capabilities matching Cloud Focal's offerings
  const focalPillars = [
    { icon: Cloud, label: 'Cloud Architecture & Migration', desc: 'AWS, Azure, GCP' },
    { icon: Users, label: 'Specialized Tech Staffing', desc: 'Top 1% Engineering Talent' },
    { icon: Cpu, label: 'Digital & AI Transformation', desc: 'Automation & Modern Systems' },
    { icon: ShieldCheck, label: 'Enterprise Systems Integration', desc: 'Secure & Scalable Operations' },
  ];

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#08104d] via-[#101b6b] to-[#1e2eb5] text-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Dynamic Background Mesh & Ambient Glows reflecting Logo's Cyan and Cobalt */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Electric Cyan Glow - Top Left */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#37b5ff]/20 rounded-full blur-3xl" />
        
        {/* Cobalt Glow - Center Right */}
        <div className="absolute top-1/4 -right-32 w-[32rem] h-[32rem] bg-[#5371ff]/25 rounded-full blur-3xl animate-pulse" />
        
        {/* Deep Navy/Cyan Blend - Bottom */}
        <div className="absolute -bottom-40 left-1/3 w-[40rem] h-80 bg-[#37b5ff]/15 rounded-full blur-3xl" />

        {/* Subtle Grid overlay for technical precision */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Headline, Narrative & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status / Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#37b5ff]/30 text-white text-xs sm:text-sm font-medium mb-6 shadow-inner"
            >
              <span className="w-2.5 h-2.5 bg-[#37b5ff] rounded-full animate-ping" />
              <span>Melbourne HQ &bull; Delivering Across Australia &amp; Global Markets</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-white"
            >
              Bridging Strategy &amp; Execution.
              <span className="block mt-2 bg-gradient-to-r from-[#37b5ff] via-[#85caff] to-white bg-clip-text text-transparent drop-shadow-sm">
                Where Cloud Meets Focus.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
            >
              Cloud Focal unites elite technology staffing with full-lifecycle IT consulting. We architect, assemble, and accelerate the digital engines powering modern enterprises.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <Button
                to="/contact"
                variant="white"
                size="large"
                className="w-full sm:w-auto shadow-xl hover:shadow-[#37b5ff]/20 font-semibold !text-[#08104d] hover:!bg-[#f0f4ff] transform hover:-translate-y-1 transition-all"
                icon={<ArrowRight className="w-5 h-5 text-[#5371ff]" />}
                iconPosition="right"
              >
                Start Your Engagement
              </Button>
              <Button
                to="/services"
                variant="whiteOutline"
                size="large"
                className="w-full sm:w-auto !border-white/40 hover:!border-white !bg-white/10 hover:!bg-white/20 !text-white backdrop-blur-md transform hover:-translate-y-1 transition-all"
              >
                Explore Solutions
              </Button>
            </motion.div>

            {/* Quick Metric Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-xl mx-auto lg:mx-0"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">500+</div>
                <div className="text-xs sm:text-sm text-[#85caff]">Talent Placed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">100+</div>
                <div className="text-xs sm:text-sm text-[#85caff]">Cloud Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">99%</div>
                <div className="text-xs sm:text-sm text-[#85caff]">Client Retention</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Custom Brand Logo Graphic Artwork */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Interactive Radial Network Visual (Echoes the Logo Emblem) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full max-w-md aspect-square flex items-center justify-center"
            >
              {/* Outer Orbit Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#37b5ff]/20 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-white/10"
              />

              {/* Central Glowing Card with the Official Logo Emblem */}
              <div className="relative z-20 w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-tr from-white/20 via-white/10 to-transparent backdrop-blur-xl p-[2px] shadow-2xl shadow-[#37b5ff]/20">
                <div className="w-full h-full rounded-[22px] bg-[#08104d]/90 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                  
                  {/* Subtle Background Glow behind emblem */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#37b5ff]/15 to-[#5371ff]/15 pointer-events-none" />

                  {/* High Quality Logo Emblem */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 mb-3 bg-white/95 p-3.5 rounded-2xl shadow-lg border border-white/40"
                  >
                    <img 
                      src="/images/logos/cloudfocal-logo.png" 
                      alt="Cloud Focal Logo Emblem"
                      className="w-32 sm:w-36 h-auto object-contain"
                    />
                  </motion.div>

                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[#37b5ff]/20 text-[#37b5ff] border border-[#37b5ff]/30">
                      Precision IT Ecosystem
                    </span>
                  </div>
                </div>
              </div>

              {/* Orbiting Feature Node Badges (Themed to Cloud Focal network lines) */}
              {/* Top Node: Cloud */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 left-4 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-[#37b5ff]/40 shadow-lg"
              >
                <div className="p-1.5 rounded-lg bg-[#37b5ff]/20 text-[#37b5ff]">
                  <Cloud className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Multi-Cloud</div>
                  <div className="text-[10px] text-blue-200">AWS / Azure / GCP</div>
                </div>
              </motion.div>

              {/* Right Node: Talent */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-2 top-1/3 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-[#5371ff]/50 shadow-lg"
              >
                <div className="p-1.5 rounded-lg bg-[#5371ff]/20 text-[#85caff]">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Elite Staffing</div>
                  <div className="text-[10px] text-blue-200">Pre-vetted Engineers</div>
                </div>
              </motion.div>

              {/* Bottom-Left Node: Integration & AI */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 left-8 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-lg"
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Modern DevOps</div>
                  <div className="text-[10px] text-blue-200">CI/CD &amp; Automation</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Core Pillars Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-20 pt-10 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focalPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#37b5ff]/40 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#37b5ff]/20 to-[#5371ff]/20 border border-[#37b5ff]/30 flex items-center justify-center text-[#37b5ff] mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1 group-hover:text-[#85caff] transition-colors">
                    {pillar.label}
                  </h4>
                  <p className="text-xs text-blue-100/70">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;