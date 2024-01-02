import React from "react";
import Test1 from "../assets/test1.jpg";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl pt-4 px-2">Test1 Restuarent</p>
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
    </div>
  );
};

export default HeadlineCards;
