import React from "react";
import Header from "../HomePage/Components/Header";
import NavBbar from "../Payment/NavBar";
import Footer from "../../Components/Footer/Footer";
import Mpamba from "../../Assets/Mpamba.jpg";
import NB from "../../Assets/NB.jpg";
import FDH from "../../Assets/FDH.jpg";
import AirtelMoney from "../../Assets/Airtel Money.png";

const Payment = () => {
  return ( 
    <div className="flex flex-col w-full">
      <Header />
      <NavBbar />
      <br />
      <div className="text-center text-green-600 font-extrabold">
        Choose your Payment method:
      </div>
      <div className="flex justify-center space-x-6 mt-8">
        <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          <img src={AirtelMoney} alt="Airtel Money icon" className="h-32 w-32" />
        </div>
        <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          <img src={FDH} alt="FDH Bank icon" className="h-32 w-32" />
        </div>
        <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          <img src={NB} alt="National Bank icon" className="h-32 w-32" />
        </div>
        <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          <img src={Mpamba} alt="TNM Mpamba icon" className="h-32 w-32" />
        </div>
        
      </div>
      <br/>
      <br/>
      <br/>
        <br/>
      <Footer />
    </div>
  );
};

export default Payment;
