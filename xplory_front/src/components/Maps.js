import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '50%',
  height: '500px',
};

const center = {
  lat: -27.470125,
  lng: 153.021072
};


const Maps = () => {
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

const position = {
  lat: -27.470125,
  lng: 153.021072
}
const marker = React.useRef(null);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
    return (isLoaded ? (
      // <div className="map">
      <GoogleMap
      
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
    <Marker ref={marker} position={position} draggable={true} onDragEnd={(e)=>{console.log({e})

    console.log('lat',e.latLng.lat(),'lng',e.latLng.lng())

    }} />
      </GoogleMap>
      // </div>
  ) : <></>
    )
}

export default Maps