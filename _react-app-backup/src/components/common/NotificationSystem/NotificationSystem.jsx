import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackFormEvents } from '../../../services/analytics/trackingEvents';

// Notification types
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// Notification positions
export const NOTIFICATION_POSITIONS = {
  TOP_RIGHT: 'top-right',
  TOP_LEFT: 'top-left',
  TOP_CENTER: 'top-center',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_CENTER: 'bottom-center'
};

// Default notification configuration
const DEFAULT_CONFIG = {
  duration: 5000,
  position: NOTIFICATION_POSITIONS.TOP_RIGHT,
  maxNotifications: 5,
  showProgress: true,
  closeOnClick: true,
  pauseOnHover: true
};

// Notification component
const Notification = ({ 
  notification, 
  onRemove, 
  config = DEFAULT_CONFIG 
}) => {
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  const {
    id,
    type,
    title,
    message,
    duration = config.duration,
    showProgress = config.showProgress,
    closeOnClick = config.closeOnClick,
    pauseOnHover = config.pauseOnHover,
    actions = [],
    icon: customIcon
  } = notification;

  // Progress bar animation
  useEffect(() => {
    if (!showProgress || duration === 0 || isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          onRemove(id);
          return 0;
        }
        return prev - (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, showProgress, isPaused, id, onRemove]);

  // Auto-remove notification
  useEffect(() => {
    if (duration === 0) return;

    const timer = setTimeout(() => {
      onRemove(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, onRemove]);

  // Get icon based on type
  const getIcon = () => {
    if (customIcon) return customIcon;

    const iconProps = { className: "w-6 h-6" };

    switch (type) {
      case NOTIFICATION_TYPES.SUCCESS:
        return (
          <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case NOTIFICATION_TYPES.ERROR:
        return (
          <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case NOTIFICATION_TYPES.WARNING:
        return (
          <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case NOTIFICATION_TYPES.INFO:
        return (
          <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  // Get color classes based on type
  const getColorClasses = () => {
    switch (type) {
      case NOTIFICATION_TYPES.SUCCESS:
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'text-green-400',
          title: 'text-green-800',
          message: 'text-green-700',
          progress: 'bg-green-500'
        };
      case NOTIFICATION_TYPES.ERROR:
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          icon: 'text-red-400',
          title: 'text-red-800',
          message: 'text-red-700',
          progress: 'bg-red-500'
        };
      case NOTIFICATION_TYPES.WARNING:
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-200',
          icon: 'text-yellow-400',
          title: 'text-yellow-800',
          message: 'text-yellow-700',
          progress: 'bg-yellow-500'
        };
      case NOTIFICATION_TYPES.INFO:
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: 'text-blue-400',
          title: 'text-blue-800',
          message: 'text-blue-700',
          progress: 'bg-blue-500'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: 'text-gray-400',
          title: 'text-gray-800',
          message: 'text-gray-700',
          progress: 'bg-gray-500'
        };
    }
  };

  const colors = getColorClasses();

  const handleClick = () => {
    if (closeOnClick) {
      onRemove(id);
    }
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.3 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.5, transition: { duration: 0.2 } }}
      className={`
        relative max-w-sm w-full ${colors.bg} ${colors.border} border rounded-lg shadow-lg
        ${closeOnClick ? 'cursor-pointer' : ''}
      `}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="alert"
      aria-live="polite"
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className={`flex-shrink-0 ${colors.icon}`}>
            {getIcon()}
          </div>
          
          <div className="ml-3 w-0 flex-1">
            {title && (
              <p className={`text-sm font-medium ${colors.title}`}>
                {title}
              </p>
            )}
            
            {message && (
              <p className={`mt-1 text-sm ${colors.message}`}>
                {message}
              </p>
            )}

            {/* Action buttons */}
            {actions.length > 0 && (
              <div className="mt-3 flex space-x-2">
                {actions.map((action, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      action.onClick();
                      if (action.closeOnClick !== false) {
                        onRemove(id);
                      }
                    }}
                    className={`
                      text-sm font-medium rounded-md px-3 py-1 transition-colors
                      ${action.variant === 'primary' 
                        ? 'bg-primary-600 text-white hover:bg-primary-700' 
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                      }
                    `}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(id);
              }}
              className={`
                inline-flex ${colors.icon} hover:${colors.icon.replace('400', '500')} 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
              `}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      {showProgress && duration > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-lg overflow-hidden">
          <motion.div
            className={`h-full ${colors.progress}`}
            initial={{ width: '100%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>
      )}
    </motion.div>
  );
};

// Main notification system component
const NotificationSystem = ({ 
  notifications = [], 
  onRemove, 
  config = DEFAULT_CONFIG 
}) => {
  const { position, maxNotifications } = config;

  // Limit number of notifications
  const limitedNotifications = notifications.slice(0, maxNotifications);

  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
      case NOTIFICATION_POSITIONS.TOP_LEFT:
        return 'top-4 left-4';
      case NOTIFICATION_POSITIONS.TOP_CENTER:
        return 'top-4 left-1/2 transform -translate-x-1/2';
      case NOTIFICATION_POSITIONS.TOP_RIGHT:
        return 'top-4 right-4';
      case NOTIFICATION_POSITIONS.BOTTOM_LEFT:
        return 'bottom-4 left-4';
      case NOTIFICATION_POSITIONS.BOTTOM_CENTER:
        return 'bottom-4 left-1/2 transform -translate-x-1/2';
      case NOTIFICATION_POSITIONS.BOTTOM_RIGHT:
        return 'bottom-4 right-4';
      default:
        return 'top-4 right-4';
    }
  };

  if (limitedNotifications.length === 0) return null;

  return (
    <div className={`fixed z-50 ${getPositionClasses()}`}>
      <div className="space-y-2">
        <AnimatePresence>
          {limitedNotifications.map((notification) => (
            <Notification
              key={notification.id}
              notification={notification}
              onRemove={onRemove}
              config={config}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Notification context
const NotificationContext = React.createContext();

// Notification provider
export const NotificationProvider = ({ children, config = DEFAULT_CONFIG }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = notification.id || `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newNotification = {
      ...notification,
      id,
      timestamp: Date.now()
    };

    setNotifications(prev => [...prev, newNotification]);

    // Track notification display
    trackFormEvents.formSubmit('notification_display', notification.type);

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const updateNotification = useCallback((id, updates) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, ...updates }
          : notification
      )
    );
  }, []);

  const contextValue = {
    notifications,
    addNotification,
    removeNotification,
    clearAllNotifications,
    updateNotification,
    config
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <NotificationSystem
        notifications={notifications}
        onRemove={removeNotification}
        config={config}
      />
    </NotificationContext.Provider>
  );
};

// Hook to use notifications
export const useNotifications = () => {
  const context = React.useContext(NotificationContext);
  
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }

  const { addNotification, removeNotification, clearAllNotifications, updateNotification } = context;

  // Convenience methods
  const showSuccess = useCallback((title, message, options = {}) => {
    return addNotification({
      type: NOTIFICATION_TYPES.SUCCESS,
      title,
      message,
      ...options
    });
  }, [addNotification]);

  const showError = useCallback((title, message, options = {}) => {
    return addNotification({
      type: NOTIFICATION_TYPES.ERROR,
      title,
      message,
      duration: 0, // Don't auto-dismiss errors
      ...options
    });
  }, [addNotification]);

  const showWarning = useCallback((title, message, options = {}) => {
    return addNotification({
      type: NOTIFICATION_TYPES.WARNING,
      title,
      message,
      ...options
    });
  }, [addNotification]);

  const showInfo = useCallback((title, message, options = {}) => {
    return addNotification({
      type: NOTIFICATION_TYPES.INFO,
      title,
      message,
      ...options
    });
  }, [addNotification]);

  return {
    addNotification,
    removeNotification,
    clearAllNotifications,
    updateNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
};

// Higher-order component for notifications
export const withNotifications = (Component) => {
  const WrappedComponent = (props) => {
    const notifications = useNotifications();
    return <Component {...props} notifications={notifications} />;
  };

  WrappedComponent.displayName = `withNotifications(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export default NotificationSystem;
