import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const HeroAnimation = () => {
  const globeEl = useRef<any>();
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    // Fetch GeoJSON for the continents network wireframes
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      // Built-in OrbitControls from react-globe.gl handles the drag interactions perfectly
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = -1.5; // Negative value for clockwise rotation
      controls.enableZoom = false; // Prevent scrolling from zooming the globe to avoid breaking the page scroll
    }
  }, []);

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] hidden md:flex items-center justify-center z-10 lg:right-10 opacity-90 cursor-grab active:cursor-grabbing mix-blend-screen hover:opacity-100 transition-opacity">
      <Globe
        ref={globeEl}
        width={600}
        height={600}
        backgroundColor="rgba(0,0,0,0)" // Transparent background so it floats
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg" // Dark matte earth core
        showAtmosphere={true}
        atmosphereColor="#FACC15" // Gold halo
        atmosphereAltitude={0.15}
        
        // Continent Wireframe Network
        polygonsData={countries.features}
        polygonCapColor={() => 'rgba(250, 204, 21, 0.05)'} // Very faint gold fill
        polygonSideColor={() => 'rgba(250, 204, 21, 0.02)'}
        polygonStrokeColor={() => '#FACC15'} // Solid gold wireframe lines drawing the continents
        polygonAltitude={0.01}

        // Data Arcs (The "Web" network effect)
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
