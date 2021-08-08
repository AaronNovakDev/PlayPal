import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
<<<<<<< HEAD
  width: '400px',
  height: '500px'
=======
  width: '50%',
  height: '500px',
>>>>>>> origin/not-sure
};

const center = {
  lat: 27.4705,
  lng: 153.0260
};


function Maps() {
    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDIBoKdzvsBBqkwRpuXsEZ0-UjG98CC4zk"
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

    return (isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
     />
      </GoogleMap>
  ) : <></>
    )
}

export default Maps
