import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  background = 'white',
  className = '',
  children
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-600 text-white',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white',
    dark: 'bg-gray-900 text-white'
  };

  const textColorClasses = {
    white: 'text-gray-900',
    gray: 'text-gray-900',
    primary: 'text-white',
    gradient: 'text-white',
    dark: 'text-white'
  };

  const descriptionColorClasses = {
    white: 'text-gray-600',
    gray: 'text-gray-600',
    primary: 'text-primary-100',
    gradient: 'text-primary-100',
    dark: 'text-gray-300'
  };

  return (
    <section className={`py-16 md:py-20 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${textColorClasses[background]}`}>
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className={`text-lg md:text-xl mb-8 leading-relaxed ${descriptionColorClasses[background]}`}>
              {description}
            </p>
          )}

          {/* Custom Content */}
          {children}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryButton && (
                <Button
                  to={primaryButton.link}
                  href={primaryButton.href}
                  variant={primaryButton.variant || 'primary'}
                  size="large"
                  onClick={primaryButton.onClick}
                  className={primaryButton.className}
                  icon={primaryButton.icon}
                >
                  {primaryButton.text}
                </Button>
              )}
              
              {secondaryButton && (
                <Button
                  to={secondaryButton.link}
                  href={secondaryButton.href}
                  variant={secondaryButton.variant || 'outline'}
                  size="large"
                  onClick={secondaryButton.onClick}
                  className={secondaryButton.className}
                  icon={secondaryButton.icon}
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
