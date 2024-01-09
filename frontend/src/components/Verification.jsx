// import React from "react";
// import Verify from "../assets/verification.jpg";
// import { Link } from "react-router-dom";

// const Verification = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 ">
//       <div className="hidden sm:block h-screen w-full">
//         <img
//           className="w-full h-full object-cover"
//           src={Verify}
//           alt="verification-img"
//         />
//       </div>

//       <div className="bg-gray-100 flex flex-col justify-center">
//         <form className="max-w-[400px] w-full mx-auto bg-white p-4">
//           <h2 className="text-4xl font-bold text-center py-6">
//             <span className="text-orange-600 ">Freedom</span> Meals{" "}
//             <span className="text-orange-600 ">Delivery</span>{" "}
//           </h2>
//           <h1 className="text-[red] mb-3">OTP Verification</h1>
//           <div className="flex flex-col py-2">
//             <label>Phone Number</label>
//             <input className="border p-2  rounded-lg" type="text" />
//           </div>

//           <button className="border w-full my-5 py-2 bg-black font-bold text-white">
//             Send OTP
//           </button>

//           <div className="flex flex-col py-2">
//             <label>OTP Here</label>
//             <input className="border p-2  rounded-lg" type="text" />
//           </div>

//           <Link to="/home">
//             <button className="border w-full my-5 py-2 bg-black font-bold text-white">
//               Login
//             </button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Verification;

//*********************************************************fetching data otp-ver********************************************************************************
import React, { useState } from "react";
import Verify from "../assets/verification.jpg";
import { Link } from "react-router-dom";

const Verification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const sendOtp = () => {
    // Assume you have an API function to send OTP and verify it
    // Replace 'yourApiFunction' with the actual function
    // Also, replace 'yourApiEndpoint' with the actual endpoint
    fetch("yourApiEndpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response includes the OTP
        const receivedOtp = data.otp;
        setOtp(receivedOtp);
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const handleOtpVerification = () => {
    // Check if the entered OTP matches the received OTP
    if (otp === "") {
      alert("Please enter OTP.");
    } else if (otp.length !== 6 || isNaN(otp)) {
      alert("OTP should be a 6-digit number.");
    } else {
      setIsOtpVerified(true);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {/* ... (your existing code for the image section) */}

      <div className="hidden sm:block h-screen w-full">
        <img
          className="w-full h-full object-cover"
          src={Verify}
          alt="verification-img"
        />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          {/* ... (your existing code for the form) */}

          <h2 className="text-4xl font-bold text-center py-6">
            <span className="text-orange-600 ">Freedom</span> Meals{" "}
            <span className="text-orange-600 ">Delivery</span>{" "}
          </h2>
          <h1 className="text-[red] mb-3">OTP Verification</h1>
          <div className="flex flex-col py-2">
            <label>Phone Number</label>
            <input
              className="border p-2 rounded-lg"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <button
            className="border w-full my-5 py-2 bg-black font-bold text-white"
            onClick={sendOtp}
          >
            Send OTP
          </button>

          <div className="flex flex-col py-2">
            <label>OTP Here</label>
            <input
              className="border p-2 rounded-lg"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <button
            className="border w-full my-5 py-2 bg-black font-bold text-white"
            onClick={handleOtpVerification}
            disabled={!phoneNumber || !otp}
          >
            Verify OTP
          </button>

          {isOtpVerified && (
            <Link to="/home">
              <button className="border w-full my-5 py-2 bg-black font-bold text-white">
                Login
              </button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default Verification;
