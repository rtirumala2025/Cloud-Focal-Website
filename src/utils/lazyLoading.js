/**
 * Lazy loading utilities for Cloud Focal website
 * Handles component lazy loading, image lazy loading, and performance optimization
 */

import React, { Suspense, lazy, Component } from 'react';
import { trackPerformance } from '../services/analytics/trackingEvents';

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
  </div>
);

// Error boundary for lazy loaded components
class LazyLoadErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy load error:', error, errorInfo);
    trackPerformance.pageLoadTime(Date.now(), 'lazy_load_error');
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center p-8 text-center">
          <div>
            <p className="text-red-600 mb-2">Failed to load component</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="text-primary-600 hover:text-primary-700"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Create a lazy loaded component with error boundary and loading state
 */
export const createLazyComponent = (importFunction, fallback = LoadingSpinner) => {
  const LazyComponent = lazy(importFunction);

  return (props) => (
    <LazyLoadErrorBoundary>
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    </LazyLoadErrorBoundary>
  );
};

/**
 * Lazy load page components
 */
export const lazyPages = {
  Home: createLazyComponent(() => import('../pages/Home/Home')),
  About: createLazyComponent(() => import('../pages/About/About')),
  Services: createLazyComponent(() => import('../pages/Services/Services')),
  TechnologyStaffing: createLazyComponent(() => import('../pages/Services/TechnologyStaffing')),
  ITConsulting: createLazyComponent(() => import('../pages/Services/ITConsulting')),
  IntegrationServices: createLazyComponent(() => import('../pages/Services/IntegrationServices')),
  Industries: createLazyComponent(() => import('../pages/Industries/Industries')),
  PublicSector: createLazyComponent(() => import('../pages/Industries/PublicSector')),
  PrivateEnterprise: createLazyComponent(() => import('../pages/Industries/PrivateEnterprise')),
  Careers: createLazyComponent(() => import('../pages/Careers/Careers')),
  Resources: createLazyComponent(() => import('../pages/Resources/Resources')),
  Contact: createLazyComponent(() => import('../pages/Contact/Contact')),
  PrivacyPolicy: createLazyComponent(() => import('../pages/Legal/PrivacyPolicy')),
  TermsOfService: createLazyComponent(() => import('../pages/Legal/TermsOfService')),
  CookiePolicy: createLazyComponent(() => import('../pages/Legal/CookiePolicy')),
  NotFound: createLazyComponent(() => import('../pages/NotFound/NotFound'))
};

/**
 * Lazy load section components
 */
export const lazySections = {
  HeroSection: createLazyComponent(() => import('../sections/Home/HeroSection')),
  ServicesOverview: createLazyComponent(() => import('../sections/Home/ServicesOverview')),
  ValueProposition: createLazyComponent(() => import('../sections/Home/ValueProposition')),
  IndustryFocus: createLazyComponent(() => import('../sections/Home/IndustryFocus')),
  TrustSection: createLazyComponent(() => import('../sections/Home/TrustSection')),
  MissionValues: createLazyComponent(() => import('../sections/About/MissionValues')),
  OurStory: createLazyComponent(() => import('../sections/About/OurStory')),
  ContactInfo: createLazyComponent(() => import('../sections/Contacts/ContactInfo')),
  LocationsMap: createLazyComponent(() => import('../sections/Contacts/LocationsMap'))
};


/**
 * Image lazy loading with Intersection Observer
 */
export class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isInView: false,
      hasError: false
    };
    this.imgRef = React.createRef();
    this.observer = null;
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      this.handleIntersection,
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (this.imgRef.current) {
      this.observer.observe(this.imgRef.current);
    }
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.setState({ isInView: true });
        this.observer.unobserve(entry.target);
      }
    });
  };

  handleLoad = () => {
    this.setState({ isLoaded: true });
    
    // Track image load performance
    if (this.props.src) {
      const loadTime = performance.now();
      trackPerformance.imageLoadTime(this.props.src, loadTime, this.props.size || 'unknown');
    }
  };

  handleError = () => {
    this.setState({ hasError: true });
  };

  render() {
    const { src, alt, placeholder, className, ...props } = this.props;
    const { isLoaded, isInView, hasError } = this.state;

    if (hasError) {
      return (
        <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
          <span className="text-gray-500 text-sm">Failed to load image</span>
        </div>
      );
    }

    return (
      <div ref={this.imgRef} className={className}>
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            {placeholder || (
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
            )}
          </div>
        )}
        
        {isInView && (
          <img
            src={src}
            alt={alt}
            onLoad={this.handleLoad}
            onError={this.handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            {...props}
          />
        )}
      </div>
    );
  }
}

/**
 * Lazy load images with React hook
 */
export const useLazyImage = (src, options = {}) => {
  const {
    rootMargin = '50px',
    threshold = 0.1,
    placeholder = null
  } = options;

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const imgRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const handleLoad = React.useCallback(() => {
    setIsLoaded(true);
    
    // Track performance
    const loadTime = performance.now();
    trackPerformance.imageLoadTime(src, loadTime, 'unknown');
  }, [src]);

  const handleError = React.useCallback(() => {
    setHasError(true);
  }, []);

  return {
    imgRef,
    isLoaded,
    isInView,
    hasError,
    handleLoad,
    handleError,
    shouldLoad: isInView
  };
};

/**
 * Lazy load components based on route
 */
export const useRouteBasedLazyLoading = () => {
  const [loadedRoutes, setLoadedRoutes] = React.useState(new Set(['/']));

  const preloadRoute = React.useCallback((route) => {
    if (loadedRoutes.has(route)) return;

    // Preload route component
    const routeComponents = {
      '/about': () => import('../pages/About/About'),
      '/services': () => import('../pages/Services/Services'),
      '/industries': () => import('../pages/Industries/Industries'),
      '/careers': () => import('../pages/Careers/Careers'),
      '/contact': () => import('../pages/Contact/Contact')
    };

    const preloadFunction = routeComponents[route];
    if (preloadFunction) {
      preloadFunction().then(() => {
        setLoadedRoutes(prev => new Set([...prev, route]));
      });
    }
  }, [loadedRoutes]);

  const preloadOnHover = React.useCallback((route) => {
    // Preload on hover with delay
    const timer = setTimeout(() => {
      preloadRoute(route);
    }, 200);

    return () => clearTimeout(timer);
  }, [preloadRoute]);

  return { preloadRoute, preloadOnHover, loadedRoutes };
};


/**
 * Progressive loading strategy
 */
export const useProgressiveLoading = (items, batchSize = 5) => {
  const [loadedItems, setLoadedItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);

  const loadMore = React.useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const startIndex = loadedItems.length;
      const endIndex = Math.min(startIndex + batchSize, items.length);
      const newItems = items.slice(startIndex, endIndex);
      
      setLoadedItems(prev => [...prev, ...newItems]);
      setHasMore(endIndex < items.length);
      setIsLoading(false);
    }, 300);
  }, [items, loadedItems.length, batchSize, isLoading, hasMore]);

  React.useEffect(() => {
    if (loadedItems.length === 0) {
      loadMore();
    }
  }, [loadMore, loadedItems.length]);

  return {
    loadedItems,
    isLoading,
    hasMore,
    loadMore
  };
};

/**
 * Lazy load with retry mechanism
 */
export const useLazyLoadWithRetry = (importFunction, maxRetries = 3) => {
  const [Component, setComponent] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [retryCount, setRetryCount] = React.useState(0);

  const loadComponent = React.useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const module = await importFunction();
      setComponent(() => module.default);
      setRetryCount(0);
    } catch (err) {
      setError(err);
      
      if (retryCount < maxRetries) {
        setRetryCount(prev => prev + 1);
        // Retry with exponential backoff
        setTimeout(() => {
          loadComponent();
        }, Math.pow(2, retryCount) * 1000);
      }
    } finally {
      setIsLoading(false);
    }
  }, [importFunction, isLoading, retryCount, maxRetries]);

  React.useEffect(() => {
    loadComponent();
  }, [loadComponent]);

  return {
    Component,
    isLoading,
    error,
    retryCount,
    retry: loadComponent
  };
};

/**
 * Lazy load with prefetching
 */
export const usePrefetching = () => {
  const [prefetchedModules, setPrefetchedModules] = React.useState(new Set());

  const prefetch = React.useCallback((importFunction, key) => {
    if (prefetchedModules.has(key)) return;

    importFunction().then(() => {
      setPrefetchedModules(prev => new Set([...prev, key]));
    });
  }, [prefetchedModules]);

  const prefetchOnHover = React.useCallback((importFunction, key, delay = 200) => {
    const timer = setTimeout(() => {
      prefetch(importFunction, key);
    }, delay);

    return () => clearTimeout(timer);
  }, [prefetch]);

  return { prefetch, prefetchOnHover, prefetchedModules };
};

/**
 * Performance monitoring for lazy loading
 */
export const useLazyLoadPerformance = () => {
  const [metrics, setMetrics] = React.useState({
    loadTimes: [],
    errorCount: 0,
    successCount: 0
  });

  const trackLoadTime = React.useCallback((componentName, loadTime) => {
    setMetrics(prev => ({
      ...prev,
      loadTimes: [...prev.loadTimes, { componentName, loadTime }],
      successCount: prev.successCount + 1
    }));

    // Track in analytics
    trackPerformance.pageLoadTime(loadTime, `lazy_${componentName}`);
  }, []);

  const trackError = React.useCallback((componentName, error) => {
    setMetrics(prev => ({
      ...prev,
      errorCount: prev.errorCount + 1
    }));

    console.error(`Lazy load error for ${componentName}:`, error);
  }, []);

  const getAverageLoadTime = React.useCallback(() => {
    if (metrics.loadTimes.length === 0) return 0;
    
    const total = metrics.loadTimes.reduce((sum, item) => sum + item.loadTime, 0);
    return total / metrics.loadTimes.length;
  }, [metrics.loadTimes]);

  return {
    metrics,
    trackLoadTime,
    trackError,
    getAverageLoadTime
  };
};

export default {
  createLazyComponent,
  lazyPages,
  lazySections,
  LazyImage,
  useLazyImage,
  useRouteBasedLazyLoading,
  useProgressiveLoading,
  useLazyLoadWithRetry,
  usePrefetching,
  useLazyLoadPerformance
};
