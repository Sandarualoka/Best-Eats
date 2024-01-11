import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor cursor-pointer"
        ></div>
        <Link to="/home">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            <span className="text-orange-600 font-bold">Freedom</span>{" "}
            <span className="font-bold">Meals</span>
          </h1>
        </Link>
      </div>

      <Link to="/checkout">
        <button className="md:flex bg-black text-white items-center py-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2" />
          <span className="hidden md:flex">Cart</span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
