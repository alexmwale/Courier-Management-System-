import React from "react";
import { NavLink } from "react-router-dom";

const SearchBox = () => {
  return (
    <div>
      <input 
        className="srch flex-1 p-1 text-lg border border-gray-300 rounded-lg mr-2" 
        type="search" 
        placeholder="e.g. P2G12345678" 
      />
     <NavLink to="/Tracking_Details"> <button 
        className="hover:bg-lime-700 bg-red-400 text-white rounded-3xl px-4 py-2">
          Enter
      </button></NavLink>
    </div>
  );
};

export default SearchBox;
