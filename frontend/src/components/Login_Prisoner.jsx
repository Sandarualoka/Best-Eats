import React from "react";
import Logo1 from "../assets/login-logo.jpg";

const Login_Prisoner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <div className="hidden sm:block h-screen w-full">
        <img
          className="w-full h-full object-cover"
          src={Logo1}
          alt="login-logo"
        />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">
            <span className="text-orange-600 ">Freedom</span> Meals{" "}
            <span className="text-orange-600 ">Delivery</span>{" "}
          </h2>
          <div className="flex flex-col py-2">
            <label>User Name</label>
            <input className="border p-2  rounded-lg" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label>Ward No:</label>
            <input className="border p-2 rounded-lg" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label>Mobile Number</label>
            <input className="border p-2  rounded-lg" type="text" />
          </div>

          <button className="border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-600 duration-75 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login_Prisoner;
