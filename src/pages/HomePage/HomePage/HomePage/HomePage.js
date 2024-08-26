import React from "react";
import Header from "../../Components/Header";
import Footer from "../../../HomePage/HomePage/Footer";
import form from "../../../../Assets/form.png";

export default function HomePage() {
  return (
    <div>
      <Header />

      <div>
        <h2>Your Packages Will Be</h2>
      </div>
      <h3 className="font-bold text-left">IN SAFE HANDS</h3>

      <div className="flex text-left">
        <button className="bg-yellow-700 rounded-lg font-bold py-2 px-4">Enquire Now</button>
      </div>

      <div className="flex items-center justify-center mb-6">
        <h4 className="text-lg font-bold">FOLLOW SIMPLE STEPS</h4>
      </div>

      <div className="relative">
        <img src={form} alt="Forms icon" className="h-20" />
        <div className="absolute top-0 left-20">
          <h2 className="font-bold text-black ">Fill the Form</h2>
          <p className="font-normal">
            We specialize in the rapid, cost-effective, and reliable<br />
            delivery of couriers across different locations.
          </p>
        </div>
      </div>

      <br />

      <h1 className="font-bold">
        We collect
        <p className="font-normal">
          Priority depends on the urgency of the<br />
          package and the type of goods, catering to<br />
          varying budgets.
        </p>
      </h1>
      <br />

      <div className="flex flex-row gap-4 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="darkgoldenrod"
          className="w-14 h-14 bg-white text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>

        <div>
          <h2 className="font-bold text-black">Delivery</h2>
          <p className="font-normal">
            Our reliable logistics network enables the<br />
            fastest and most dependable door-to-<br />
            door transit service in the industry.
          </p>
        </div>
      </div>

      <br />
      <h4>
        GET THE <span className="text-amber-600">FASTEST</span>
        <br />
        PRODUCT DELIVERY
      </h4>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
