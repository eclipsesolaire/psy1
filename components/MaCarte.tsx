// src/components/MapCabinet.jsx
import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Remplace ces coordonnées par l'adresse de ton cabinet
const center = {
  lat: 48.8566,  // Latitude de Paris par défaut
  lng: 2.3522    // Longitude de Paris par défaut
};

function MapCabinet() {
  return (
    <LoadScript googleMapsApiKey="VRAIE_CLÉ_API_GOOGLE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapCabinet;
