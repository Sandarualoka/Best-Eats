import React from "react";
import { Link } from "react-router-dom";
import Reg from "../assets/Reg.jpg";

const StaffReg = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <div className="hidden sm:block h-screen w-full">
        <img className="w-full h-full object-cover" src={Reg} alt="Reg-logo" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">
            <span className="text-orange-600 ">Freedom</span> Meals{" "}
            <span className="text-orange-600 ">Delivery</span>{" "}
          </h2>
          <h1 className="text-[red] mb-3">Register As Staff Member</h1>
          <div className="flex flex-col py-2">
            <label>User Name</label>
            <input className="border p-2  rounded-lg" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label>Staff ID</label>
            <input className="border p-2 rounded-lg" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2 rounded-lg" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label>Re Enter the Password</label>
            <input className="border p-2 rounded-lg" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label>Designation</label>
            <input className="border p-2 rounded-lg" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label>Section</label>
            <input className="border p-2 rounded-lg" type="text" />
          </div>

          <button className="border w-full my-5 py-2 bg-black font-bold text-white">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default StaffReg;
