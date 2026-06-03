'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
  loading: () => (
    <div className="spline-wrapper">
      <div className="spline-loader">
        <div className="loader-content">
          <div className="loader-ring" />
          <span className="loader-text">Loading Experience</span>
        </div>
      </div>
    </div>
  ),
});

export default function SplineWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay rendering the dynamic component to prioritize page startup (Critical CSS, fonts, layouts)
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 600); // 600ms is standard for browser to finish paint/first interactions
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) {
    return (
      <div className="spline-wrapper">
        <div className="spline-loader">
          <div className="loader-content">
            <div className="loader-ring" />
            <span className="loader-text">Initializing Brand</span>
          </div>
        </div>
      </div>
    );
  }

  return <SplineScene />;
}
