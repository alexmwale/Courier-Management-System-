import React from 'react'
import logo from '../../Assets/1.png'

import { TbHelpSquareRounded } from "react-icons/tb";

export default function Header () {
    return( 
        <div >
        <header>
            AboutUs
            <div className="flex justify-between size-15" >
                <div className=' size-12'><img src={logo} alt="pali logo" className="w-12 h-12 justify-start ml-2"/> </div>
            
        

            <div className="flex justify-between" >
            <img src={logo} alt="pali logo" className="w-16 h-16 justify-start ml-2"/>
            <div className="p-2 pt-1"><span><TbHelpSquareRounded className="h-14 w-14"/></span></div>
            </div>
            </div>
        </header>
        </div>
    )
}
