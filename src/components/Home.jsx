import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white px-6 md:px-12 pt-20"
    >
      {/* Left Section: Name and Designation */}
      <div className="flex flex-col justify-center items-start text-left md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Sammith Gowda
        </h1>
        <p className="text-xl md:text-2xl">
          Full-Stack Developer | GIS Specialist
        </p>
        {/* <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-200 transition">
          View My Work
        </button> */}
      </div>

      {/* Right Section: Larger Animation Positioned to the Left */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <Player
          autoplay
          loop
          src="/Animation.json" // Ensure this path is correct or replace with your animation URL
          className="w-80 h-80 md:w-96 md:h-96 translate-x-[-10%]"
        />
      </div>
    </section>
  );
};

export default Home;
