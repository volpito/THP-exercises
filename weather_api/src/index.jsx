import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Components/Weather';
import GeoLoc from './Components/GeoLoc';

const App = () => (
  
  <div>
    <h1>Hello world!</h1>
    < Weather />
    < GeoLoc/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));