import React from "react";
import Test1 from "../assets/test1.jpg";

const HeadlineCards = () => {
  return (
    <div>
      <div>
        <div>
          <p>Test1 Restuarent</p>
          <p>8/26</p>
          <button>Order Now</button>
        </div>
        <img src={Test1} alt="test1" />
      </div>
    </div>
  );
};

export default HeadlineCards;
