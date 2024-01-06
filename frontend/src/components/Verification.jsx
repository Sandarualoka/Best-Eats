import React from "react";
import Verify from "../assets/verification.jpg";
import { Link } from "react-router-dom";

const Login_Prisoner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <div className="hidden sm:block h-screen w-full">
        <img
          className="w-full h-full object-cover"
          src={Verify}
          alt="verification-img"
        />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">
            <span className="text-orange-600 ">Freedom</span> Meals{" "}
            <span className="text-orange-600 ">Delivery</span>{" "}
          </h2>
          <h1 className="text-[red] mb-3">OTP Verification</h1>
          <div className="flex flex-col py-2">
            <label>Phone Number</label>
            <input className="border p-2  rounded-lg" type="text" />
          </div>

          <button className="border w-full my-5 py-2 bg-black font-bold text-white">
            Send
          </button>

          <div className="flex flex-col py-2">
            <label>OTP Here</label>
            <input className="border p-2  rounded-lg" type="text" />
          </div>

          <Link to="/home">
            <button className="border w-full my-5 py-2 bg-black font-bold text-white">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login_Prisoner;
