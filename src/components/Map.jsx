import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {

  const MapStyle = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: data.lat, lng: data.lng
  }

  return(
    <LoadScript googleMapsApiKey='AIzaSyDmaY4cI0otK3MG5Yh69YlOmgr3ikxjw7Y'>
      <GoogleMap
        mapContainerStyle={MapStyle}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;