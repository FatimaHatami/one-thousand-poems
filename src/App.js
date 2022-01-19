import logo from './logo.svg';
import desc from './desc.svg';
import './App.css';
import React from 'react';
import Ganjour from './components/Ganjour';


function App() {
  return (
    <div className="App">
      <Ganjour logo={logo} image={desc}/>
    </div>
  );
}

export default App;
