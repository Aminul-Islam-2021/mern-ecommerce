import React from "react";
import "./Slider.css"; // Import custom CSS for the sliding animation

const AutoSlidingBanner = () => {
  return (
    <div className="overflow-hidden">
      <div className="slider flex space-x-4">
        <div className="w-64 h-64 bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
          Slide 1
        </div>
        <div className="w-64 h-64 bg-red-500 flex items-center justify-center text-white text-xl font-bold">
          Slide 2
        </div>
        <div className="w-64 h-64 bg-green-500 flex items-center justify-center text-white text-xl font-bold">
          Slide 3
        </div>
        <div className="w-64 h-64 bg-yellow-500 flex items-center justify-center text-white text-xl font-bold">
          Slide 4
        </div>
      </div>
    </div>
  );
};

export default AutoSlidingBanner;
