import React, { useState, useEffect } from "react";

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

    fetch("http://localhost:3001/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        const receivedOtp = data.otp.substring(0, 4);
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
      fetch("http://localhost:3001/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, enteredOtp: otp }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setIsOtpVerified(true);
            setStartCountdown(false);
            alert("OTP verification successful! Redirecting to home page.");
            // Redirect to home page or perform other actions
          } else {
            alert("Invalid OTP. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error verifying OTP:", error);
        });
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-3 text-orange-600">
        Verification Page
      </h1>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="ml-5 h-8 border-2 border-gray-300 rounded text-center mr-1"
        />
      </div>
      <button className="bg-black text-white mt-5 mb-3" onClick={sendOtp}>
        Send OTP
      </button>
      <div>
        <label>OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="ml-10 h-8 border-2 border-gray-300 rounded text-center mr-1"
        />
      </div>
      <button
        className="bg-black text-white mt-5"
        onClick={handleOtpVerification}
      >
        Verify OTP
      </button>
      {isOtpVerified && (
        <p className="text-green-600">OTP verification successful!</p>
      )}
      {countdown > 0 && (
        <p>
          Time left: {Math.floor(countdown / 60)}:{countdown % 60}
        </p>
      )}
    </div>
  );
};

export default Verification;
