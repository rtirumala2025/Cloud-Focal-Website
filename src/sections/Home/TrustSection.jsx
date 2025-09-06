import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechFlow Solutions",
      content: "Cloud Focal transformed our technology infrastructure in just 6 months. Their team's expertise and dedication exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "VP of Engineering",
      company: "InnovateCorp",
      content: "The quality of talent Cloud Focal provided was exceptional. They truly understand our industry and delivered exactly what we needed.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Director of IT",
      company: "Global Manufacturing Inc.",
      content: "Working with Cloud Focal has been a game-changer for our digital transformation. Their strategic guidance and execution are world-class.",
      rating: 5
    }
  ];

  const trustBadges = [
    {
      icon: "🏆",
      title: "Award Winner",
      description: "Best Technology Staffing 2024"
    },
    {
      icon: "⭐",
      title: "5-Star Rated",
      description: "Client Satisfaction Excellence"
    },
    {
      icon: "🔒",
      title: "ISO Certified",
      description: "Quality Management System"
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description: "Serving 25+ Countries"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 text-neutral-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="body-large text-neutral-600 max-w-4xl mx-auto">
            Our track record speaks for itself. See how we've helped organizations across industries 
            achieve remarkable results and transform their technology landscape.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{badge.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-neutral-600">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>


        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-neutral-900 mb-6">
              What Our Clients Say
            </h3>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the organizations we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.title}</div>
                    <div className="text-sm text-primary-600">{testimonial.company}</div>
                  </div>
                </div>
                
                <blockquote className="text-neutral-600 italic mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h3>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Our success metrics demonstrate our commitment to delivering exceptional value and results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
              <div className="text-primary-100">Faster Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
