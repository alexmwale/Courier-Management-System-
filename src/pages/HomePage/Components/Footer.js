import footerImage from "../logo.jpg"

export default function Footer () {
    return (

        <div className="bg-amber-900 text-white py-4 w-full fixed buttom-0 rounded-tl-[15px] rounded-tr-[15px]"> 
         <ul className=" flex justify-center space-x-8 mb-4" >
            <li className=" hover:text-red-500 cursor-pointer" >About Us</li>
             <li className=" hover:text-red-500 cursor-pointer ">Contact Us</li>
         </ul>
          <p className=" text-center">Copyright  2024.All Rights Reserved</p>
        </div>
    


    )
}