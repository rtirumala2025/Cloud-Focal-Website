/**
 * Image utility functions for Cloud Focal website
 * Handles image optimization, lazy loading, and error handling
 */

// Default placeholder image
const DEFAULT_PLACEHOLDER = '/images/placeholder.jpg';

// Image quality settings
const IMAGE_QUALITY = {
  high: 90,
  medium: 75,
  low: 60,
  thumbnail: 50
};

// Responsive breakpoints for srcSet generation
const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  large: 1440,
  xlarge: 1920
};

/**
 * Generate responsive srcSet for images
 * @param {string} baseUrl - Base image URL
 * @param {Object} options - Configuration options
 * @returns {string} srcSet string
 */
export const generateSrcSet = (baseUrl, options = {}) => {
  const {
    widths = [320, 640, 768, 1024, 1280, 1920],
    quality = IMAGE_QUALITY.medium,
    format = 'webp'
  } = options;

  if (!baseUrl) return '';

  return widths
    .map(width => {
      const url = optimizeImageUrl(baseUrl, { width, quality, format });
      return `${url} ${width}w`;
    })
    .join(', ');
};

/**
 * Optimize image URL with parameters
 * @param {string} url - Original image URL
 * @param {Object} options - Optimization options
 * @returns {string} Optimized image URL
 */
export const optimizeImageUrl = (url, options = {}) => {
  if (!url) return DEFAULT_PLACEHOLDER;

  const {
    width,
    height,
    quality = IMAGE_QUALITY.medium,
    format = 'webp',
    fit = 'cover',
    crop = 'center'
  } = options;

  // If using Cloudinary or similar service
  if (url.includes('cloudinary.com') || url.includes('res.cloudinary.com')) {
    const transformations = [];
    
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (quality) transformations.push(`q_${quality}`);
    if (format) transformations.push(`f_${format}`);
    if (fit) transformations.push(`c_${fit}`);
    if (crop) transformations.push(`g_${crop}`);

    const transformString = transformations.join(',');
    return url.replace('/upload/', `/upload/${transformString}/`);
  }

  // For other image services or static images
  return url;
};

/**
 * Generate placeholder image URL
 * @param {Object} options - Placeholder options
 * @returns {string} Placeholder image URL
 */
export const generatePlaceholder = (options = {}) => {
  const {
    width = 400,
    height = 300,
    text = 'Cloud Focal',
    backgroundColor = '2563eb',
    textColor = 'ffffff',
    format = 'png'
  } = options;

  // Using placeholder.com service
  return `https://via.placeholder.com/${width}x${height}/${backgroundColor}/${textColor}.${format}?text=${encodeURIComponent(text)}`;
};

/**
 * Lazy load image with intersection observer
 * @param {HTMLImageElement} img - Image element
 * @param {Object} options - Lazy loading options
 */
export const lazyLoadImage = (img, options = {}) => {
  const {
    rootMargin = '50px',
    threshold = 0.1,
    placeholder = DEFAULT_PLACEHOLDER
  } = options;

  if (!img) return;

  // Set placeholder initially
  if (placeholder && !img.src) {
    img.src = placeholder;
  }

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          const dataSrc = image.dataset.src;
          
          if (dataSrc) {
            image.src = dataSrc;
            image.classList.remove('lazy');
            image.classList.add('loaded');
          }
          
          observer.unobserve(image);
        }
      });
    },
    {
      rootMargin,
      threshold
    }
  );

  observer.observe(img);
};

/**
 * Preload critical images
 * @param {Array} imageUrls - Array of image URLs to preload
 * @returns {Promise} Promise that resolves when all images are loaded
 */
export const preloadImages = (imageUrls) => {
  const promises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  });

  return Promise.all(promises);
};

/**
 * Handle image load error
 * @param {Event} event - Error event
 * @param {string} fallbackUrl - Fallback image URL
 */
export const handleImageError = (event, fallbackUrl = DEFAULT_PLACEHOLDER) => {
  const img = event.target;
  if (img.src !== fallbackUrl) {
    img.src = fallbackUrl;
    img.classList.add('error');
  }
};

/**
 * Get optimal image size for container
 * @param {Object} container - Container dimensions
 * @param {Object} image - Image dimensions
 * @param {string} fit - How to fit the image
 * @returns {Object} Optimal dimensions
 */
export const getOptimalImageSize = (container, image, fit = 'cover') => {
  const { width: containerWidth, height: containerHeight } = container;
  const { width: imageWidth, height: imageHeight } = image;

  if (!containerWidth || !containerHeight || !imageWidth || !imageHeight) {
    return { width: containerWidth, height: containerHeight };
  }

  const containerRatio = containerWidth / containerHeight;
  const imageRatio = imageWidth / imageHeight;

  let width, height;

  switch (fit) {
    case 'cover':
      if (imageRatio > containerRatio) {
        width = containerWidth;
        height = containerWidth / imageRatio;
      } else {
        height = containerHeight;
        width = containerHeight * imageRatio;
      }
      break;
    
    case 'contain':
      if (imageRatio > containerRatio) {
        width = containerWidth;
        height = containerWidth / imageRatio;
      } else {
        height = containerHeight;
        width = containerHeight * imageRatio;
      }
      break;
    
    case 'fill':
      width = containerWidth;
      height = containerHeight;
      break;
    
    default:
      width = imageWidth;
      height = imageHeight;
  }

  return { width: Math.round(width), height: Math.round(height) };
};

/**
 * Convert image to base64
 * @param {File} file - Image file
 * @param {number} quality - Compression quality (0-1)
 * @returns {Promise<string>} Base64 string
 */
export const imageToBase64 = (file, quality = 0.8) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Compress image file
 * @param {File} file - Image file
 * @param {Object} options - Compression options
 * @returns {Promise<Blob>} Compressed image blob
 */
export const compressImage = (file, options = {}) => {
  const {
    maxWidth = 1920,
    maxHeight = 1080,
    quality = 0.8,
    format = 'image/jpeg'
  } = options;

  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width *= ratio;
        height *= ratio;
      }

      canvas.width = width;
      canvas.height = height;

      // Draw and compress
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(resolve, format, quality);
    };

    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

/**
 * Get image dimensions
 * @param {string} url - Image URL
 * @returns {Promise<Object>} Image dimensions
 */
export const getImageDimensions = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        ratio: img.naturalWidth / img.naturalHeight
      });
    };
    img.onerror = reject;
    img.src = url;
  });
};

/**
 * Create image loading hook for React
 * @param {string} src - Image source
 * @param {Object} options - Loading options
 * @returns {Object} Loading state and handlers
 */
export const useImageLoader = (src, options = {}) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!src) {
      setLoading(false);
      setError('No image source provided');
      return;
    }

    setLoading(true);
    setError(null);
    setLoaded(false);

    const img = new Image();
    
    img.onload = () => {
      setLoading(false);
      setLoaded(true);
      setError(null);
    };
    
    img.onerror = () => {
      setLoading(false);
      setError('Failed to load image');
      setLoaded(false);
    };
    
    img.src = src;
  }, [src]);

  return { loading, error, loaded };
};

/**
 * Generate responsive image props
 * @param {string} src - Base image source
 * @param {Object} options - Responsive options
 * @returns {Object} Image props for React
 */
export const getResponsiveImageProps = (src, options = {}) => {
  const {
    alt = '',
    sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    quality = IMAGE_QUALITY.medium,
    placeholder = true
  } = options;

  const srcSet = generateSrcSet(src, { quality });
  const optimizedSrc = optimizeImageUrl(src, { quality });

  return {
    src: optimizedSrc,
    srcSet,
    sizes,
    alt,
    loading: 'lazy',
    ...(placeholder && { placeholder: generatePlaceholder() })
  };
};

// Export default configuration
export const imageConfig = {
  quality: IMAGE_QUALITY,
  breakpoints: BREAKPOINTS,
  defaultPlaceholder: DEFAULT_PLACEHOLDER
};

export default {
  generateSrcSet,
  optimizeImageUrl,
  generatePlaceholder,
  lazyLoadImage,
  preloadImages,
  handleImageError,
  getOptimalImageSize,
  imageToBase64,
  compressImage,
  getImageDimensions,
  useImageLoader,
  getResponsiveImageProps,
  imageConfig
};
