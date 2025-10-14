import React from 'react';
import { motion } from 'framer-motion';

const MissionValues = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Our Mission & Values</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700 mb-8">
            At Cloud Focal, our mission is to empower businesses through innovative technology solutions. 
            We strive to deliver exceptional value by understanding our clients' unique challenges and 
            providing tailored, cutting-edge solutions that drive growth and success.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality solutions and exceeding expectations 
                in everything we do.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and stay at the forefront of technology to provide 
                forward-thinking solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and the highest ethical standards.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and building strong partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionValues;