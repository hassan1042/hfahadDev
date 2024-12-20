import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { projects } from "./projectsData";
import Navigations from "./Navigations";
import ProjectsDetails from "./ProjectsDetails";
import ProjectImage from "./ProjectImage";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="h-full flex items-center justify-center p-2 max-sm:py-2 md:p-4 lg:p-8 relative"
    >
      {/* Slider Container */}
      <div className="relative w-full max-w-5xl h-full flex items-center overflow-hidden  bg-gray-50 shadow-lg rounded-lg ">
        {/* Slide */}
        <motion.div
          key={currentIndex}
          className="flex w-full max-lg:flex-col 2xl:h-[40vh]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <ProjectImage projects={projects} currentIndex={currentIndex} />

          {/* Details */}
          <ProjectsDetails projects={projects} currentIndex={currentIndex} />
        </motion.div>

        {/* Navigation Buttons */}
        <Navigations handlePrev={handlePrev} handleNext={handleNext} />
      </div>
    </div>
  );
};

export default Projects;