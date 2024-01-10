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
import React, { useState, useEffect } from "react";
import Verify from "../assets/verification.jpg";
import { Link } from "react-router-dom";

const Verification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    // Start countdown timer when component mounts
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }
    }, 1000);

    // Clear the timer when component unmounts
    return () => clearInterval(timer);
  }, [countdown]);

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
        const receivedOtp = data.otp.substring(0, 4); // Limit OTP to 4 digits
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
    } else if (otp.length !== 4 || isNaN(otp)) {
      alert("OTP should be a 4-digit number.");
    } else {
      setIsOtpVerified(true);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
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
            disabled={countdown > 0 || !phoneNumber}
          >
            Send OTP ({Math.floor(countdown / 60)}:{countdown % 60})
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
