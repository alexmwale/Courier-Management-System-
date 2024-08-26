import React from 'react'
import logo from '../../Assets/1.png'


export default function Header () {
    return(
        <div >
        <header>
            <div className="flex justify-between size-15" >
                <div className=' size-12'><img src={logo} alt="pali logo" className="w-12 h-12 justify-start ml-2"/></div>
            
        
            </div>
        </header>
        </div>
    )
}
