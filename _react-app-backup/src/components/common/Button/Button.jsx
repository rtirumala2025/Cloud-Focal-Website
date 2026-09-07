import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  to,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  type = 'button',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  /* UI FIX: Enhanced base classes with better transitions, disabled states, and visual feedback */
  const baseClasses = 'btn';
  
  // Size classes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base'
  };
  
  /* DESIGN SYSTEM: Button variants using new design tokens */
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-500 hover:-translate-y-0.5 active:translate-y-0',
    danger: 'bg-gradient-to-r from-error-500 to-error-600 text-white hover:from-error-600 hover:to-error-700 focus:ring-error-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm',
    success: 'bg-gradient-to-r from-success-500 to-success-600 text-white hover:from-success-600 hover:to-success-700 focus:ring-success-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm',
    warning: 'bg-gradient-to-r from-warning-500 to-warning-600 text-white hover:from-warning-600 hover:to-warning-700 focus:ring-warning-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm',
    light: 'bg-gradient-to-r from-neutral-100 to-neutral-200 text-neutral-900 hover:from-neutral-200 hover:to-neutral-300 focus:ring-neutral-500 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    dark: 'bg-gradient-to-r from-neutral-800 to-neutral-900 text-white hover:from-neutral-900 hover:to-black focus:ring-neutral-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm',
    white: 'bg-gradient-to-r from-white to-neutral-50 text-primary-700 hover:from-neutral-50 hover:to-neutral-100 focus:ring-primary-500 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    whiteOutline: 'border-2 border-white bg-white text-primary-700 hover:bg-neutral-50 hover:border-neutral-100 focus:ring-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${className}`;
  
  // Icon component
  const IconComponent = icon && (
    <span className={iconPosition === 'left' ? 'mr-2' : 'ml-2'}>
      {loading ? (
        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        icon
      )}
    </span>
  );
  
  // Content with icon
  const content = (
    <>
      {iconPosition === 'left' && IconComponent}
      {loading && !icon ? (
        <svg className="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
      {iconPosition === 'right' && IconComponent}
    </>
  );
  
  // Render as link if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...props}
      >
        {content}
      </a>
    );
  }
  
  // Render as React Router link if to is provided
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        {...props}
      >
        {content}
      </Link>
    );
  }
  
  // Render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;