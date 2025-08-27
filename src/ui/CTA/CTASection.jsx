import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  background = 'white',
  divider = 'none',
  className = '',
  children
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-primary-600 text-white',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white',
    dark: 'bg-neutral-900 text-white'
  };

  const textColorClasses = {
    white: 'text-neutral-900',
    gray: 'text-neutral-900',
    primary: 'text-white',
    gradient: 'text-white',
    dark: 'text-white'
  };

  const descriptionColorClasses = {
    white: 'text-neutral-600',
    gray: 'text-neutral-600',
    primary: 'text-primary-100',
    gradient: 'text-primary-100',
    dark: 'text-neutral-300'
  };

  return (
    <section className={`relative section-lg ${backgroundClasses[background]} ${className}`}>
      {/* Section Dividers */}
      {divider === 'wave' && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120C200 80 400 60 600 60C800 60 1000 80 1200 120V0H0V120Z"
              fill="#111827"
              className="transition-all duration-500"
            />
          </svg>
        </div>
      )}
      
      {divider === 'angled' && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80L600 0L1200 80V0H0V80Z"
              fill="#111827"
              className="transition-all duration-500"
            />
          </svg>
        </div>
      )}
      
      {divider === 'gradient' && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-primary-700/20 to-neutral-900/30 pointer-events-none"></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <h2 className={`heading-2 mb-6 ${textColorClasses[background]}`}>
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className={`body-large mb-12 ${descriptionColorClasses[background]}`}>
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
