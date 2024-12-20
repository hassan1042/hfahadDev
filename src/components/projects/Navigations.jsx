import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Navigations({ handlePrev, handleNext }) {
  return (
    <div>
      <button
        onClick={handlePrev}
        className="absolute max-lg:left-0 left-4 max-sm:top-[40%] max-lg:top-1/2  top-[80%] transform -translate-y-1/2 text-gray-700 hover:text-primary"
      >
        <FaArrowLeft className="text-xl md:text-2xl lg:text-3xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute max-lg:right-0 right-1/2 max-sm:top-[40%] max-lg:top-1/2 top-[80%] transform -translate-y-1/2 text-gray-700 hover:text-primary"
      >
        <FaArrowRight className="text-xl md:text-2xl lg:text-3xl" />
      </button>
    </div>
  );
}

export default Navigations;
