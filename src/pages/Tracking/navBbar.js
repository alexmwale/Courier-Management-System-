import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


export default function NavBbar () {
    return(
        <div>
        <div className=" text-darkgoldenrod p-4 pt-0 !flex flex-row items-center justify-start">
         <span className="mr-2 text-6px"><NavLink to="/"><IoHomeOutline className=' size-10' /></NavLink></span>
        <FaAngleRight className="text-black bg-white p-1 rounded-full w-10 h-10" />
        <span className="text-customcolor bg-green font-bold"> Parcel Tracking</span>
      </div>
    </div>
    );
}
