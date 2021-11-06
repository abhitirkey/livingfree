import React from 'react'

import { Map, GoogleApiWrapper } from 'google-maps-react';

import classes from './MapContainer.module.css';

const mapStyles = {
    height: '300px'
};

export function MapContainer({ google }) {
    return (
      <div className={classes.MapContainer}>
        <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
      </div>
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDgydfMeeVMkw7vbfpCXm-FdGnIV_qEaa8'
})(MapContainer);
