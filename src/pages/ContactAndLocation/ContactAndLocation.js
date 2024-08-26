import React from 'react'
import Footer from '../../Components/Footer/Footer';
import MapComponent from './Map';
import NavBbar from "../ContactAndLocation/navBbar";
import MainContent from './MainContent';
import Header from "../HomePage/Components/Header";
 

export default function LocationAndContact () {
    return (
    <><div className="flex flex-col min-h-screen">
    <Header/>
  <NavBbar/>
    
    <MainContent />
    <main className="flex-grow">
      <div>
        <MapComponent />
      </div>
    </main>
  
    <Footer />

    </div>
    </>
        
    );
}