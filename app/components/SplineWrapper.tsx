'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
  loading: () => null,
});

export default function SplineWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    // Start loading the heavy Spline scene after a short initial delay to let Critical CSS render
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="spline-wrapper">
      {/* Static Placeholder Background Image */}
      <div 
        className="spline-placeholder"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/hero-placeholder.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          pointerEvents: 'none',
          transition: 'opacity 1.5s ease-in-out',
          opacity: isSplineLoaded ? 0 : 1,
        }}
      />

      {shouldLoad && (
        <SplineScene onLoad={() => setIsSplineLoaded(true)} />
      )}
    </div>
  );
}
