import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-custombrown text-white py-3 mt-auto border rounded-t-2xl">
    <div className="container mx-auto px-2">
      <div className="flex justify-between">
        <div>
        <NavLink to="/AboutUs" ><h2 className="text-lg font-semibold mb- cursor-pointer">About Us</h2></NavLink>
          <p className="text-sm">Learn more about our company and values.</p>
        </div>
        <div>
        <NavLink to="/ContactAndLocation" ><h2 className="text-lg font-semibold mb-2 cursor-pointer">Contact Us</h2></NavLink>
          <p className="text-sm">Get in touch with us for more information.</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()}   <span className="font-semibold">
              <span className="text-3xl">Delivery</span> <span className="text-teal-500">Express</span></span>. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;