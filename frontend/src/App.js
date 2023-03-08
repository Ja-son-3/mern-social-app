import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'


function App() {
  return <ReactMapGL
    initialViewState={{
      latitude: 48.858093,
      longitude: 2.294694,
      zoom: 15
    }}
    style={{width: 900, height: 1200}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX}
    >
      <Marker longitude={2.294694} latitude={48.858093} anchor="bottom" >
        <div>YOU ARE HERE</div>
      </Marker>
  </ReactMapGL>
}



export default App;
