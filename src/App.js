import React from 'react';
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Tracking from './pages/Tracking/Tracking';
import Tracking_Details from './pages/Tracking/Tracking_Details';
import SignUpPage from './pages/SignUpPage/component/SignUp';
import ContactAndLocation from  "./pages/ContactAndLocation/ContactAndLocation";
import SignInPage from './pages/Sign.In.LogInPage/SignIn';
import Payment from './pages/Payment/Payment';
import ServicesWeb from './pages/Services/ServicesWeb';
 
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactAndLocation" element={<ContactAndLocation />} />
        <Route path="/ServiceWeb" element={<ServicesWeb />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/Sign.In.LogInPage" element={<SignInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/Tracking_Details" element={<Tracking_Details />} />
        <Route path="/Payment" element={< Payment/>} />
      </Routes>
     </BrowserRouter>   
    </div>
  );
}
export default App;

