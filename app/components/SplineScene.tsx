'use client';

import { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  onLoad: () => void;
}

export default function SplineScene({ onLoad }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  return (
    <div className={`spline-canvas-container ${isLoaded ? 'visible' : ''}`}>
      <Spline
        scene="https://prod.spline.design/P99QTO5sUGseFIKJ/scene.splinecode"
        onLoad={handleLoad}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
