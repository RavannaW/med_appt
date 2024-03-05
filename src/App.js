import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/LandingPage/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import Notification from './Components/Notification/Notification';
import GiveReviews from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Notification>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing_Page />}/>
            <Route path="/signup" element={<Sign_Up/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/reviews" element={<GiveReviews/>}/>
            <Route path="/profilecard" element={<ProfileForm/>}/>
            <Route path="/report" element={<ReportsLayout/>}/>
            <Route path="<component_route>" element={<component_name/>}/>
          </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;