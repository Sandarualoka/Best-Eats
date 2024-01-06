import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import Foods from "../components/Food";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
    </div>
  );
};
export default Home;
