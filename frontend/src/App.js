import * as React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import {Room, Star} from '@mui/icons-material';
import "./app.css"


function App() {
  const [showPopup, setShowPopup] = React.useState(true);
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
        <Room style={{color:"slateblue" }} />
      </Marker>
      {/* {showPopup && (
      <Popup longitude={2.294694} latitude={48.858093}
        anchor="bottom"
        onClose={() => setShowPopup(false)}>
        <div className='card'>
          <label>Place</label>
          <h4 className='place'>Eiffell Tower</h4>
          <label>Review</label>
          <p className='desc'>Beautiful place. I like it.</p>
          <label>Rating</label>
          <div className='stars'>
            <Star className='star'/>
            <Star className='star'/>
            <Star className='star'/>
            <Star className='star'/>
            <Star className='star'/>
          </div>
          <label>Information</label>
          <span className='username'>Created by <b>jason</b></span>
          <span className='date'>1 hour ago </span>
        </div>
      </Popup>)} */}
  </ReactMapGL>
}



export default App;
