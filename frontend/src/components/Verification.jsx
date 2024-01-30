// import React, { useState, useEffect } from "react";
// import Verify from "../assets/verification.jpg";
// import { Link } from "react-router-dom";

// const Verification = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [countdown, setCountdown] = useState(600); // 10 minutes in seconds
//   const [startCountdown, setStartCountdown] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (startCountdown && countdown > 0) {
//       // Start countdown timer when startCountdown is true and countdown is greater than 0
//       timer = setInterval(() => {
//         setCountdown((prevCountdown) => prevCountdown - 1);
//       }, 1000);
//     }

//     // Clear the timer when component unmounts or countdown reaches 0
//     return () => clearInterval(timer);
//   }, [countdown, startCountdown]);

//   const sendOtp = () => {
//     // Assume you have an API function to send OTP and verify it
//     // Replace 'yourApiEndpoint' with the actual endpoint
//     fetch("yourApiEndpoint", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ phoneNumber }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Assuming your API response includes the OTP
//         const receivedOtp = data.otp.substring(0, 4); // Limit OTP to 4 digits
//         setOtp(receivedOtp);
//         setStartCountdown(true); // Move setStartCountdown here
//       })
//       .catch((error) => {
//         console.error("Error sending OTP:", error);
//       });
//   };

//   const handleOtpVerification = () => {
//     // Check if the entered OTP matches the received OTP
//     if (otp === "") {
//       alert("Please enter OTP.");
//     } else if (otp.length !== 4 || isNaN(otp)) {
//       alert("OTP should be a 4-digit number.");
//     } else {
//       setIsOtpVerified(true);
//       setStartCountdown(false); // Stop the countdown after OTP verification
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2">
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
//             <input
//               className="border p-2 rounded-lg"
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </div>

//           <button
//             className="border w-full my-5 py-2 bg-black font-bold text-white"
//             onClick={sendOtp}
//             disabled={countdown > 0 || !phoneNumber}
//           >
//             Send OTP ({Math.floor(countdown / 60)}:{countdown % 60})
//           </button>

//           <div className="flex flex-col py-2">
//             <label>OTP Here</label>
//             <input
//               className="border p-2 rounded-lg"
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//           </div>

//           <button
//             className="border w-full my-5 py-2 bg-black font-bold text-white"
//             onClick={handleOtpVerification}
//             disabled={!phoneNumber || !otp}
//           >
//             Verify OTP
//           </button>

//           {isOtpVerified && (
//             <Link to="/home">
//               <button className="border w-full my-5 py-2 bg-black font-bold text-white">
//                 Login
//               </button>
//             </Link>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Verification;

import React, { useState, useEffect } from "react";
import Verify from "../assets/verification.jpg";
import { Link } from "react-router-dom";

const Verification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const [startCountdown, setStartCountdown] = useState(false);

  useEffect(() => {
    let timer;

    if (startCountdown && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown, startCountdown]);

  const sendOtp = () => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Assume you have an API function to send OTP and verify it
    // Replace 'yourApiEndpoint' with the actual endpoint
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
        setStartCountdown(true);
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const handleOtpVerification = () => {
    if (otp === "") {
      alert("Please enter OTP.");
    } else if (otp.length !== 4 || isNaN(otp)) {
      alert("OTP should be a 4-digit number.");
    } else {
      setIsOtpVerified(true);
      setStartCountdown(false);
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
            <span className="text-orange-600 ">AYU</span> Meals{" "}
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
