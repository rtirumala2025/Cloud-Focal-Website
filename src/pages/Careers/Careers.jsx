import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import jobsData from '../../assets/data/jobs.json';
import CTASection from '../../ui/CTA/CTASection';

const Careers = () => {
  // Add null checks to prevent runtime errors
  const jobs = jobsData?.jobs || [];
  const featuredJobs = jobs.slice(0, 6);
  const allJobs = jobs;

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance bonuses and equity options",
      icon: "💰"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs",
      icon: "🏥"
    },
    {
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance support",
      icon: "🏠"
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and career development",
      icon: "📚"
    },
    {
      title: "Team Events",
      description: "Regular team building activities, social events, and company retreats",
      icon: "🎉"
    },
    {
      title: "Modern Tools",
      description: "Latest technology and tools to help you do your best work",
      icon: "💻"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies",
      icon: "🚀"
    },
    {
      title: "Collaboration",
      description: "Teamwork and knowledge sharing are at the heart of our success",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "Honest, ethical, and transparent in all our interactions",
      icon: "🔒"
    }
  ];

  const departments = [
    "Engineering", "Consulting", "Sales", "Marketing", "Operations", "Human Resources"
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Cloud Focal - Join Our Team</title>
        <meta name="description" content="Join Cloud Focal's dynamic team. Explore career opportunities in technology staffing, IT consulting, and system integration. Competitive benefits and growth opportunities." />
        <meta name="keywords" content="careers, jobs, employment, technology jobs, IT consulting careers, remote work, benefits" />
        <link rel="canonical" href="https://sourcecloud.com/careers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Careers | Cloud Focal - Join Our Team" />
        <meta property="og:description" content="Join Cloud Focal's dynamic team. Explore career opportunities in technology staffing, IT consulting, and system integration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/careers" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | Cloud Focal" />
        <meta name="twitter:description" content="Join Cloud Focal's dynamic team. Explore career opportunities." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="page-content-with-footer"
      >
        {/* Hero Section */}
        <section className="section-lg bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-divider-wave">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                Join Our Team
                <span className="block text-accent-300">Build the Future</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              >
                Be part of a dynamic team that's transforming how organizations approach 
                technology. Work with cutting-edge solutions and make a real impact.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  to="#openings"
                  variant="primary"
                  size="large"
                  className="bg-white text-primary-700 hover:bg-gray-100"
                >
                  View Open Positions
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="large"
                  className="border-white text-white hover:bg-white hover:text-primary-700"
                >
                  Contact Recruiting
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Our Culture
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                We foster an environment of innovation, collaboration, and continuous learning 
                where every team member can thrive and grow.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Benefits & Perks
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                We believe in taking care of our team with comprehensive benefits 
                and perks that support your well-being and growth.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Open Positions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Explore exciting opportunities across our departments and join a team 
                that's passionate about technology and innovation.
              </motion.p>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {departments.map((dept, index) => (
                <motion.button
                  key={dept}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-primary-300"
                >
                  <span className="font-medium text-gray-700">{dept}</span>
                </motion.button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {(featuredJobs || []).map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">{job.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {(job.skills || []).slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {(job.skills || []).length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{(job.skills || []).length - 3} more
                        </span>
                      )}
                    </div>
                    <Button
                      to={`/careers/${job.id}`}
                      variant="primary"
                      size="small"
                    >
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-gray-600 mb-6">
                  Don't see a position that matches your skills? We're always looking for talented individuals.
                </p>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="large"
                >
                  Send Us Your Resume
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Application Process
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Our streamlined application process ensures a smooth experience 
                from initial contact to your first day.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Apply",
                  description: "Submit your application with resume and cover letter"
                },
                {
                  step: "02",
                  title: "Review",
                  description: "Our team reviews your application within 48 hours"
                },
                {
                  step: "03",
                  title: "Interview",
                  description: "Meet with our team through video or in-person interviews"
                },
                {
                  step: "04",
                  title: "Offer",
                  description: "Receive your offer and join our amazing team"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                <div className="text-lg text-white/80">Team Members</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">4.8/5</div>
                <div className="text-lg text-white/80">Employee Rating</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-lg text-white/80">Retention Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-lg text-white/80">Countries</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Join Our Team?"
          description="Take the next step in your career and be part of something extraordinary."
          primaryButton={{ text: "View All Positions", link: "#openings", variant: "white" }}
          secondaryButton={{ text: "Contact Recruiting", link: "/contact", variant: "whiteOutline" }}
          background="gradient"
          divider="wave"
        />
      </motion.div>
    </>
  );
};

export default Careers;
