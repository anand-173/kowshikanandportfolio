import { useCallback, useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const RESET_DELAY_MS = 2000; // 2 seconds of inactivity before reset
const ORIGINAL_POV = { lat: 20, lng: 78, altitude: 2.5 }; // Centered on India

const HeroAnimation = () => {
  const globeEl = useRef<any>();
  const [countries, setCountries] = useState({ features: [] });
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = -1.5;
      controls.enableZoom = false;
    }
  }, []);

  // Called when interaction starts — clear any pending reset
  const handleInteractionStart = useCallback(() => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, []);

  // Called when interaction ends — start the 2-second countdown to reset
  const handleInteractionEnd = useCallback(() => {
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      if (globeEl.current) {
        // Smoothly animate back to original tilt/position over 1.2 seconds
        globeEl.current.pointOfView(ORIGINAL_POV, 1200);
      }
    }, RESET_DELAY_MS);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] hidden md:flex items-center justify-center z-10 lg:right-10 opacity-90 mix-blend-screen hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing"
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <Globe
        ref={globeEl}
        width={600}
        height={600}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        showAtmosphere={true}
        atmosphereColor="#FACC15"
        atmosphereAltitude={0.15}

        polygonsData={countries.features}
        polygonCapColor={() => 'rgba(250, 204, 21, 0.05)'}
        polygonSideColor={() => 'rgba(250, 204, 21, 0.02)'}
        polygonStrokeColor={() => '#FACC15'}
        polygonAltitude={0.01}

        arcsData={[
          { startLat: 17.3850, startLng: 78.4867, endLat: 37.7749, endLng: -122.4194 },
          { startLat: 17.3850, startLng: 78.4867, endLat: 51.5074, endLng: -0.1278 },
          { startLat: 17.3850, startLng: 78.4867, endLat: -33.8688, endLng: 151.2093 },
          { startLat: 17.3850, startLng: 78.4867, endLat: 35.6762, endLng: 139.6503 },
        ]}
        arcColor={() => '#FACC15'}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcAltitudeAutoScale={0.3}
      />
    </div>
  );
};

export default HeroAnimation;
