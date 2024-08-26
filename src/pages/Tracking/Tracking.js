import React from "react";
import SearchBox from "./SearchBox";
import NavBbar  from "../Tracking/navBbar";
import Footer from "../../Components/Footer/Footer";
import Header from "../HomePage/Components/Header";

 export default function Tracking(){
  return (
    <div >
    <Header />
    <NavBbar/>
      <div className='font-bold text-center text-4xl text-sky-900'>Parcel Tracking</div>
      <br/>
      <p className="font-bold">
        You can track your parcel delivery and find your item's current <br />
        whereabouts with the quick and simple our company.<br />
      </p>
      <br/>
      <div className='font-bold'>Enter your Tracking Reference:

      <SearchBox />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer className="flex-grow-0" />
    </div>
  );
}


