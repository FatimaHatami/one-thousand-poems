import './App.css';
import React from 'react';
import Ganjour from './components/Ganjour';
import {browserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Ganjour/>
    </div>
  );
}

export default App;
