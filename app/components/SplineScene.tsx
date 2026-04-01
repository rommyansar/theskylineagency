'use client';

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Hide the spline watermark logo after it loads
  useEffect(() => {
    // Rely solely on CSS clipping in globals.css to hide the watermark natively
    setIsLoaded(true);
  }, []);

  return (
    <div className="spline-wrapper">
      {!isLoaded && (
        <div className="spline-loader">
          <div className="loader-ring" />
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/S6WffR5L-zdzbukJ/scene.splinecode"
        onLoad={() => setIsLoaded(true)}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
