import React from "react";
import Breakfast from "../assets/BreakFast.jpg";
import Lunch from "../assets/Lunch.jpg";
import Dinner from "../assets/Dinner.jpg";
import { Link } from "react-router-dom";

const ThreeMeals = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <Link to="/foods">
        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
            <p className="font-bold text-2xl pt-4 px-2">BreakFast</p>

            {/* <button className="bg-white text-black border-white mx-2 absolute mt-5">
              Order Now
            </button> */}
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={Breakfast}
            alt="breakfast"
          />
        </div>
      </Link>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl pt-4 px-2">Lunch</p>
          {/* <p className="px-2">8/26</p>
          <button className="bg-white text-black border-white mx-2 absolute mt-5">
            Vist Now
          </button> */}
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={Lunch}
          alt="lunch"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl pt-4 px-2">Dinner</p>
          {/* <p className="px-2">8/26</p>
          <button className="bg-white text-black border-white mx-2 absolute mt-5">
            Order Now
          </button> */}
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={Dinner}
          alt="dinner"
        />
      </div>
    </div>
  );
};

export default ThreeMeals;
