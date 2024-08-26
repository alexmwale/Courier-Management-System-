import React from 'react';

import img6 from '../../Assets/img6.jpg.png'

import Footer from './Footer';
import NavBbar from "../AboutUs/navBbar";
import Header from "../HomePage/Components/Header";



export default function AboutusPage() {

    return (
        <div className=' flex flex-col w-full'>
             <Header />
             <NavBbar/>
             <div className='w-full flex flex-col gap-5 bg-black-950 max-h-fit pl-5'>
            <div className='flex'>

                <div>
                    <div> <h1 className='flex space-x-4 sm:text-5xl? justify-end text-black font-extrabold cursor-pointer hover:text-blue-800'>
                    Customer Feedback</h1></div>
               

                    <h2 className='font-extrabold sm:text-5xl? text-blue-800'>ABOUT US</h2>


                    <p className=" font-sans  font-bold first-letter:only: sm:text-preety">Welcome to delivery express!</p>
                    <p className=" font-sans  font-bold first-letter:only: sm:text-preety">Established  to overcome your challanges when Sending and receiving goods</p>
                    <br/>
                    <p className='font-sans  font-bold first-letter:only: sm:text-preety'>From ... we do express deriveries</p>
                </div>
                <img src={img6} alt=" " className='  w-z h-96 '></img>
            </div> 
          
            <br/>
            <br/>
            <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer />
            </div>
     )         
};
