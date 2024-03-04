import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/LandingPage/Landing_Page';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes></Routes>
          {/* <Routes path="/" element={<Landing_Page/>}/> */}
          <Landing_Page/>

            
        </BrowserRouter>
       
    </div>
  );
}

export default App;