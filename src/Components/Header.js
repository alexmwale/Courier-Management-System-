import React from 'react'
import logo from '../Assets/1.png'
import { TbHelpSquareRounded } from "react-icons/tb";

export default function Header () {
    return(
        <div >
        <header>
            <div className="flex justify-between" >
            <img src={logo} alt="logo" className="w-12 h-12 justify-start ml-2"/>
            <div className="p-2 pt-1"><span><TbHelpSquareRounded className="h-12 w-12"/></span></div>
            </div>
        </header>
        </div>
    )
}
