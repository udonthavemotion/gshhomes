import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Performance monitoring for Core Web Vitals
if ('PerformanceObserver' in window) {
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to console in development, ready for analytics in production
        if (process.env.NODE_ENV === 'development') {
          console.log('Web Vital:', entry.name, entry.value);
        }
        // In production, send to analytics service
        // Example: gtag('event', entry.name, { value: entry.value });
      }
    });
    
    observer.observe({ 
      entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
    });
  } catch (e) {
    // PerformanceObserver not supported or error
    console.warn('Performance monitoring not available:', e);
  }
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);