import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../../HomePage/HomePage/Footer";
import form from "../../../../Assets/form.png";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-x-hidden px-4 sm:px-6 md:px-8">
      {/* Header with Hamburger Menu */}
      <header className="flex justify-between items-center py-4">
        <Header />
        <button
          className="block sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      <nav className={`${isOpen ? "block" : "hidden"} sm:block`}>
        <ul className="space-y-2">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Content */}
      <div>
        <h2>Your Packages Will Be</h2>
      </div>
      <h3 className="font-bold text-left">IN SAFE HANDS</h3>

      <div className="flex text-left">
        <button className="bg-yellow-700 rounded-lg font-bold py-2 px-4">
          Enquire Now
        </button>
      </div>

      <div className="flex items-center justify-center mb-6">
        <h4 className="text-lg font-bold">FOLLOW SIMPLE STEPS</h4>
      </div>

      <div className="flex items-center gap-4">
  <img src={form} alt="Forms icon" className="h-20 w-20" />
  <div>
    <h2 className="font-bold text-black">Fill the Form</h2>
    <p className="font-normal">
      We specialize in the rapid, cost-effective, and reliable
      <br />
      delivery of couriers across different locations.
    </p>
  </div>
</div>


      <br />
      <div>
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
              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          <h1 className="font-bold">
            We collect
            <p className="font-normal">
              Priority depends on the urgency of the
              <br />
              package and the type of goods, catering to
              <br />
              varying budgets.
            </p>
          </h1>
        </div>
      </div>

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
            Our reliable logistics network enables the
            <br />
            fastest and most dependable door-to-
            <br />
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
      <Footer />
    </div>
  );
}
