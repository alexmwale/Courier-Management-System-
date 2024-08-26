import React from 'react';
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img6 from '../Assets/img6.jpg.png'
import img8 from '../Assets/img8.jpg'

export default function AboutusPage() {

    return (
        <div className='container flex flex-col gap-5 bg-black-950 max-h-fit pl-5'>
            <div className='flex'>

                <div>
                    <h1 className='font-extrabold sm:text-5xl?'>ABOUT US</h1>
                    <p className=" font-sans  font-bold first-letter:only: sm:text-preety">Welcome to delivery express!</p>
                    <p className=" font-sans  font-bold first-letter:only: sm:text-preety">Established by seven innovative students From unima</p>
                    <p className='font-sans  font-bold first-letter:only: sm:text-preety'>From unima we do express deriveries</p>
                </div>
                <img src={img6} className='  w-z h-96 '></img>
            </div>

            <h2 className='flex justify-center font-extrabold sm:text-5xl?'>MEET OUR TEAM</h2>
            <div className='flex gap-2 w-screen justify-start '>
                <img src={img1} className=' w-88 h-48'></img>
                <img src={img2} className=' w-88 h-48'></img>
                <img src={img3} className=' w-88 h-48'></img>

            </div>
            <h3 className='flex justify-center font-extrabold sm:text-5xl?'>CUSTOMER FEEDBACK</h3>
            <div className='flex  justify-center mb-6'>
                <img src={img8} className=' w-98 h-48 z-0'></img>

            </div>

        </div>

    )
}
