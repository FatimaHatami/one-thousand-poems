import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hafez from './components/Hafez';
import About from './components/About';
import Poets from './components/Poets';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';



// const rootElement=document.getElementById("root");
// render(<App/>,rootElement)
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/Hafez" element={<Hafez/>}/>
    <Route path="/Poets" element={<Poets/>}/>
    <Route path="/About" element={<About/>}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
