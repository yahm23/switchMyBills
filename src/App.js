import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainLive from './pages/mainLive';
import  {BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLive></MainLive>
      </BrowserRouter>
    </div>
  );
}

export default App;
