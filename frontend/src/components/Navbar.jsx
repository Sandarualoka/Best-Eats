import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaTruck } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { FaTag } from "react-icons/fa6";
import { MdOutlineGppGood } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="text-white bg-black rounded-full p-1">Delivery </p>
          <p className="p-1">Pickup</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Serach Foods"
        />
      </div>

      <button className="md:flex bg-black text-white items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/*Mobile View OverLay*/}
      {nav ? (
        <div className="bg-black/80 fixed h-screen w-full z-10 top-0 left-0 "></div>
      ) : (
        " "
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <IoCloseCircleOutline
          size={30}
          className="absolute cursor-pointer top-4 right-4"
          onClick={() => setNav(!nav)}
        />

        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col text-gray-800 p-4">
            <li className="flex py-4 text-xl ">
              <FaTruck className="mr-2" size={25} /> Orders
            </li>

            <li className="flex py-4 text-xl ">
              <MdOutlineFavorite className="mr-2" size={25} /> Favorites
            </li>

            <li className="flex py-4 text-xl ">
              <FaWallet className="mr-2" size={25} /> Wallet
            </li>

            <li className="flex py-4 text-xl ">
              <IoIosHelpCircle className="mr-2" size={25} /> Help
            </li>

            <li className="flex py-4 text-xl ">
              <FaTag className="mr-2" size={25} /> Promotions
            </li>

            <li className="flex py-4 text-xl ">
              <MdOutlineGppGood className="mr-2" size={25} /> Best One
            </li>

            <li className="flex py-4 text-xl ">
              <PiUsersThreeFill className="mr-2" size={25} /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
