import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Meals from "../components/Meals";
import ThreeMeals from "../components/ThreeMeals";
const Foods = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ThreeMeals />
      <Meals />
    </div>
  );
};

export default Foods;
