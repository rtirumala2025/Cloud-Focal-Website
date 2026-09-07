import React from 'react';
import { motion } from 'framer-motion';
import { trackErrors } from '../../../services/analytics/trackingEvents';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error: error
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      error: error,
      errorInfo: errorInfo,
      errorId: errorId
    });

    // Track error in analytics
    trackErrors.jsError(
      error.message,
      error.stack,
      window.location.href
    );

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo, errorId);
    }
  }

  reportError = (error, errorInfo, errorId) => {
    // Send error to external service (e.g., Sentry, LogRocket, etc.)
    const errorReport = {
      errorId: errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    // Example: Send to error reporting service
    // You can replace this with your preferred error reporting service
    try {
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      }).catch(err => {
        console.error('Failed to report error:', err);
      });
    } catch (reportingError) {
      console.error('Error reporting failed:', reportingError);
    }
  };

  getUserId = () => {
    // Get user ID from localStorage, context, or other sources
    return localStorage.getItem('userId') || 'anonymous';
  };

  getSessionId = () => {
    // Get session ID from localStorage or generate one
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const { error, errorInfo, errorId } = this.state;
      const { fallback: FallbackComponent, showDetails = false } = this.props;

      // Use custom fallback component if provided
      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={error}
            errorInfo={errorInfo}
            errorId={errorId}
            onRetry={this.handleRetry}
            onGoHome={this.handleGoHome}
            onReload={this.handleReload}
          />
        );
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full space-y-8"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto h-24 w-24 bg-red-100 rounded-full flex items-center justify-center mb-6"
              >
                <svg className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Oops! Something went wrong
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 mb-8"
              >
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
              </motion.p>

              {errorId && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-gray-500 mb-8"
                >
                  Error ID: {errorId}
                </motion.p>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={this.handleRetry}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Go Home
                </button>

              <button
                  onClick={this.handleReload}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reload Page
                </button>
              </motion.div>

              {/* Error Details (Development Only) */}
              {showDetails && process.env.NODE_ENV === 'development' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: 0.7 }}
                  className="mt-8 text-left"
                >
                  <details className="bg-gray-100 rounded-lg p-4">
                    <summary className="cursor-pointer font-medium text-gray-900 mb-2">
                      Error Details (Development)
                    </summary>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Error Message:</h4>
                        <pre className="text-sm text-red-600 bg-red-50 p-2 rounded overflow-x-auto">
                          {error?.message}
                        </pre>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Error Stack:</h4>
                        <pre className="text-xs text-gray-600 bg-gray-50 p-2 rounded overflow-x-auto max-h-40">
                          {error?.stack}
                        </pre>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Component Stack:</h4>
                        <pre className="text-xs text-gray-600 bg-gray-50 p-2 rounded overflow-x-auto max-h-40">
                          {errorInfo?.componentStack}
                        </pre>
                      </div>
                    </div>
                  </details>
                </motion.div>
              )}

              {/* Help Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <p className="text-sm text-gray-500 mb-4">
                  If this problem persists, please contact our support team.
                </p>
                <a
                  href="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Contact Support
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for easier usage
export const withErrorBoundary = (Component, errorBoundaryProps = {}) => {
  const WrappedComponent = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Hook for error boundary context
export const useErrorHandler = () => {
  const handleError = (error, errorInfo) => {
    // Track error
    trackErrors.jsError(
      error.message,
      error.stack,
      window.location.href
    );

    // Log error
    console.error('Error caught by useErrorHandler:', error, errorInfo);

    // You can also trigger error reporting here
    // reportError(error, errorInfo);
  };

  return { handleError };
};

// Error boundary for specific components
export const ComponentErrorBoundary = ({ children, componentName, fallback }) => {
  return (
    <ErrorBoundary
      fallback={fallback}
      showDetails={process.env.NODE_ENV === 'development'}
    >
      {children}
    </ErrorBoundary>
  );
};

// Global error handler for unhandled errors
export const setupGlobalErrorHandlers = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    
    trackErrors.jsError(
      `Unhandled promise rejection: ${event.reason}`,
      event.reason?.stack || 'No stack trace available',
      window.location.href
    );

    // Prevent the default handler
    event.preventDefault();
  });

  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
    
    trackErrors.jsError(
      event.error?.message || 'Uncaught error',
      event.error?.stack || 'No stack trace available',
      window.location.href
    );
  });
};

export default ErrorBoundary;