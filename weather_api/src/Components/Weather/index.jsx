import React from 'react';

//console.log(process.env.REACT_APP_KEY)

const Weather = (props) => {

  var [responseObj, setResponseObj] = React.useState(0);

  fetch(`http://api.openweathermap.org/data/2.5/forecast?&lang={fr}&lat=${props.lati}&lon=${props.long}&appid=3108bae066f9866340396b5038f1eea5&units=metric`)
      .then(response => response.json())
      .then(data => {
        setResponseObj(responseObj = data)
        var name = responseObj.map(a => a.city)
        console.log(name)
        console.log(responseObj)
      })
      .catch(err => console.error(err));
      return(
      <div>
        <p>lol</p>
      </div>
      )
    };


export default (Weather);