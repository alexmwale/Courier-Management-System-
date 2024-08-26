import React from 'react';
import "./index.css";
import Header from "./Components/Header/Header"
import Aboutus from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import NavBbar from './Components/navBbar';


function App() {
  return (
    
    <div className = "flex flex-col w-full ">
     <Header/>
     <NavBbar/>
     <Aboutus/>
     <Footer />
        </div>
        
  );
}

export default App;
