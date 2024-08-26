import React from 'react';
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowRightLong as FaArrowRightLong6 } from 'react-icons/fa6';
import 'tailwindcss/tailwind.css';
import Footer from "../../Components/Footer/Footer";

const PackageCard = () => {
  return (
    <div className="bg-custombrown p-4 rounded-lg shadow-lg mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Package Ya kamba</h2>
        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">In Transit</span>
      </div>
      <div className="flex items-center mt-2">
        <h3 className="text-white font-normal text-left flex items-center">
          Zomba <FaArrowRightLong6 className="mx-2" /> Mangochi
        </h3>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="bg-custombrown p-4 rounded-lg shadow-lg mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-white">Zovala</h2>
        <span className="bg-blue-900 text-white px-2 py-1 rounded-full text-xs">On Hold</span>
      </div>
      <div className="flex items-center">
        <h3 className="text-white font-normal flex items-center">
          Zomba <FaArrowRightLong className="mx-2" /> Salima
        </h3>
      </div>
    </div>
  );
};

const GadgetsCard = () => {
  return (
    <div className="bg-custombrown p-4 rounded-lg shadow-lg mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-white">Gadgets</h2>
        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">Delivered</span>
      </div>
      <div className="flex items-center">
        <h3 className="text-white font-normal flex items-center">
          Mulanje <FaArrowRight className="mx-2" /> Thyolo
        </h3>
      </div>
    </div>
  );
};
//hi
const KitchenWareCard = () => {
  return (
    <div className="bg-custombrown p-4 rounded-lg shadow-lg mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-white">Kitchenware</h2>
        <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs">Delayed</span>
      </div>
      <div className="flex items-center">
        <h3 className=" text-white font-normal flex items-center">
          Lilongwe <FaArrowRight className="mx-2" /> Likoma
        </h3>
      </div>
    </div>
  );
};

const ChimangaCard = () => {
  return (
    <div className="bg-custombrown p-4 rounded-lg shadow-lg mb-8"> 
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-white">Chimanga</h2>
        <span className="bg-emerald-300 text-white px-2 py-1 rounded-full text-xs">Picked</span>
      </div>
      <div className="flex items-center">
        <h3 className="text-white font-normal flex items-center">
          Zomba <FaArrowRight className="mx-2" /> Blantyre
        </h3>
      </div>
    </div>
  );
};

const CombinedCards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <PackageCard />
        <Card />
        <div className="flex flex-row items-center justify-between mb-2">
          <h3 className="font-bold">Recent Activity</h3>
          <div className="flex flex-row justify-between mb-2">
            view all <FaArrowRight className="mx-1" />
          </div>
        </div>
        <div className="font-normal mb-4">
          Check the history of your previous interactions
        </div>
        <GadgetsCard />
        <KitchenWareCard />
        <ChimangaCard />
      </div>
      <br/>
      <Footer />
    </div>
  );
};

export default CombinedCards;