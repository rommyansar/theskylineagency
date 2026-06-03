'use client';

import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="spline-wrapper">
      <div className={`spline-loader ${isLoaded ? 'loaded' : ''}`}>
        <div className="loader-content">
          <div className="loader-ring" />
          <span className="loader-text">Loading Experience</span>
        </div>
      </div>
      <div className={`spline-canvas-container ${isLoaded ? 'visible' : ''}`}>
        <Spline
          scene="https://prod.spline.design/P99QTO5sUGseFIKJ/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
