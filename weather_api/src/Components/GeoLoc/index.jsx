import React from 'react';
import BigNumber from '../BigNumber';
import Weather from '../Weather';


const GeoLoc = () => {
  var [lat, setLat]= React.useState(0);
  var [lon, setLon]= React.useState(0);

    navigator.geolocation.getCurrentPosition(function(position) {
      setLon(lon = position.coords.longitude)
      setLat(lat = position.coords.latitude)
    })

    return(  
      <div>
        <BigNumber lati={lat} long={lon} />
        <Weather lati={lat} long={lon} />
      </div>
  )
};

export default (GeoLoc);