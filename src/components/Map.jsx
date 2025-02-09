import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const dots = [
    { lat: 40.7128, lng: -74.006 }, // New York
    { lat: 28.7041, lng: 77.1025 }, // Delhi
  ];

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: '100%', height: '250px' }}
      scrollWheelZoom={false}
      className='!-z-10'
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
       <Marker position={[51.505, -0.09]}>
       </Marker>
    </MapContainer>
  );
};

export default Map;