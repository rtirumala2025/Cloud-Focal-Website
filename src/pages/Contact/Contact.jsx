import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Users, Sparkles, Building } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      city: "Melbourne (Headquarters)",
      badge: "Global HQ",
      address: "Melbourne CBD, Victoria",
      state: "VIC 3000, Australia",
      phone: "+61 3 9000 0000",
      email: "melbourne@cloudfocal.com",
      hours: "Mon-Fri 9:00 AM - 5:30 PM AEST"
    },
    {
      city: "Sydney Operations",
      badge: "Regional Office",
      address: "Sydney CBD, New South Wales",
      state: "NSW 2000, Australia",
      phone: "+61 2 9000 0000",
      email: "sydney@cloudfocal.com",
      hours: "Mon-Fri 9:00 AM - 5:30 PM AEST"
    },
    {
      city: "Global Client Support",
      badge: "24/7 Priority",
      address: "APAC, US & EMEA Operations",
      state: "International Delivery Network",
      phone: "+61 3 9000 0000",
      email: "global@cloudfocal.com",
      hours: "24/7 Dedicated Support"
    }
  ];

  const inquiryChannels = [
    {
      title: "New Project & Architecture",
      description: "Discuss enterprise cloud modernization, DevOps pipelines, and AI systems integration.",
      email: "info@cloudfocal.com",
      subject: "New Project Inquiry",
      ctaText: "Email our Project Team",
      icon: <Sparkles className="w-7 h-7 text-blue-600" />,
      color: "from-blue-500 to-indigo-600",
      badge: "Response < 24 hrs"
    },
    {
      title: "Specialized Tech Staffing",
      description: "Request pre-vetted senior engineers, cloud architects, and dedicated development pods.",
      email: "staffing@cloudfocal.com",
      subject: "Technology Staffing Inquiry",
      ctaText: "Request Talent Profiles",
      icon: <Users className="w-7 h-7 text-emerald-600" />,
      color: "from-emerald-500 to-teal-600",
      badge: "Profiles in 48 hrs"
    },
    {
      title: "Enterprise IT Consulting",
      description: "Strategic roadmapping, cybersecurity alignment, and Essential Eight compliance advisory.",
      email: "consulting@cloudfocal.com",
      subject: "Enterprise IT Consulting Inquiry",
      ctaText: "Schedule Technical Advisory",
      icon: <ShieldCheck className="w-7 h-7 text-purple-600" />,
      color: "from-purple-500 to-indigo-600",
      badge: "Executive Advisory"
    },
    {
      title: "General Inquiries & Media",
      description: "General questions, vendor partnerships, career opportunities, and corporate relations.",
      email: "info@cloudfocal.com",
      subject: "General Inquiry",
      ctaText: "Send General Message",
      icon: <Mail className="w-7 h-7 text-cyan-600" />,
      color: "from-cyan-500 to-blue-600",
      badge: "Direct Support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Direct Project & Staffing Outreach | Cloud Focal</title>
        <meta name="description" content="Connect directly with Cloud Focal's engineering, technology staffing, and cloud consulting teams in Melbourne, Sydney, and worldwide." />
        <meta name="keywords" content="contact Cloud Focal, technology staffing Melbourne, IT consulting Australia, cloud architects direct contact" />
        <meta property="og:title" content="Contact Us - Direct Outreach | Cloud Focal" />
        <meta property="og:description" content="Connect directly with Cloud Focal's engineering, technology staffing, and cloud consulting teams." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/contact" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="page-content-with-footer"
      >
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 shadow-sm">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />
                <span>Direct Engineering &amp; Talent Outreach</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Let's Build Something Exceptional Together
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connect directly with our practice leads and staffing directors. Skip the generic intake forms and initiate conversations tailored to your project goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Direct Outreach Channels (Replaces Deprecated Form) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Direct Email Outreach
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Select the inquiry track that matches your needs to launch a pre-populated message directly to the appropriate team lead.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {inquiryChannels.map((channel, index) => {
                const mailtoUrl = `mailto:${channel.email}?subject=${encodeURIComponent(channel.subject)}&body=${encodeURIComponent(
                  `Hello Cloud Focal Team,\n\nI would like to discuss ${channel.title.toLowerCase()}.\n\nOrganization:\nEstimated Timeline:\nScope Details:\n\nBest regards,`
                )}`;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-14 h-14 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {channel.icon}
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                          {channel.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {channel.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {channel.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-gray-100">
                      <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-2">
                        Direct Address: <span className="text-gray-700 font-mono normal-case">{channel.email}</span>
                      </div>
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 gap-2 group-hover:translate-x-0.5"
                      >
                        <span>{channel.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Headquarters & Office Locations */}
        <section className="py-20 bg-slate-50 border-t border-b border-gray-200/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Global Headquarters &amp; Strategic Hubs
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Headquartered in Melbourne with active delivery capabilities across major Australian commercial centers and international markets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Building className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                        {office.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{office.city}</h3>
                    <div className="flex items-start gap-2.5 text-gray-600 text-sm mb-4 leading-relaxed">
                      <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>
                        {office.address}<br />
                        {office.state}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-2.5 text-sm">
                    <div className="flex items-center gap-2.5 text-gray-700">
                      <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-blue-600 transition-colors font-medium">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-700">
                      <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-blue-600 transition-colors font-medium">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-500 text-xs">
                      <Clock className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fast Engagement Summary Banner */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">
                Need an Immediate Assessment?
              </h3>
              <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 relative z-10 leading-relaxed">
                Contact our leadership team directly to review requirements, schedule architectural discovery, or arrange specialized team augmentation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <a
                  href="mailto:info@cloudfocal.com?subject=New%20Project%20Inquiry"
                  className="px-8 py-4 rounded-xl font-bold bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Email Executive Team
                </a>
                <a
                  href="tel:+61390000000"
                  className="px-8 py-4 rounded-xl font-bold bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all duration-300"
                >
                  Call +61 3 9000 0000
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
