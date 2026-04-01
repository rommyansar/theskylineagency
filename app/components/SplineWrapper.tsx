'use client';

import dynamic from 'next/dynamic';

const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
  loading: () => (
    <div className="spline-wrapper">
      <div className="spline-loader">
        <div className="loader-ring" />
      </div>
    </div>
  ),
});

export default function SplineWrapper() {
  return <SplineScene />;
}
