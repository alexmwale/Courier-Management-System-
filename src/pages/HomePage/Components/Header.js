import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./1.png";

export default function Header() {
    return (
        <div className=" bg-white text-white py-4">
            <div className="container mx-auto flex justify-between items-center">

                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-32 mr-4 rounded-full" />
                    <span className="text-xl font-bold">Courier Services</span>
                </div>


                <nav>
                    <ul className="flex space-x-4 text-black font-bold">
                        <li><NavLink to="/" href="#" className="hover:text-blue-900">Home</NavLink></li>
                        <li><NavLink to="/ServiceWeb" className="hover:text-blue-900">Services</NavLink></li>
                        <li><NavLink to="/Tracking" className="hover:text-blue-900">Tracking</NavLink></li>
                        <li><NavLink to="/AboutUs" className="hover:text-blue-900">About</NavLink></li>
                        <li><NavLink to="/ContactAndLocation" className="hover:text-blue-900">Contact</NavLink></li>
                        <li><NavLink to="/Sign.In.LogInPage" className="hover:text-blue-900">Sign In</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
