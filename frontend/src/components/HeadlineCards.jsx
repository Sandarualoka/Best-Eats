import React from "react";
import Test1 from "../assets/test1.jpg";
import NewRest from "../assets/new-res.jpg";
import Des from "../assets/dess.jpg";
import { Link } from "react-router-dom";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <Link to="/meal">
        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
            <p className="font-bold text-2xl pt-4 px-2">Meals</p>
            <p className="px-2">8/26</p>
            <button className="bg-white text-black border-white mx-2 absolute mt-5">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={Test1}
            alt="test1"
          />
        </div>
      </Link>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl pt-4 px-2">Beverages</p>
          <p className="px-2">8/26</p>
          <button className="bg-white text-black border-white mx-2 absolute mt-5">
            Vist Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={NewRest}
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl pt-4 px-2">Desserts</p>
          <p className="px-2">8/26</p>
          <button className="bg-white text-black border-white mx-2 absolute mt-5">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={Des}
          alt="test1"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
