import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter';

const App = () => (
  <div>
    <h1>Hello world!</h1>
    <p>How are you?</p>
    < Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));