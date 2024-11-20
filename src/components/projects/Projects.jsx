import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { FaArrowLeft, FaArrowRight, FaCss3Alt, FaDatabase, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import Hostel from '../../assets/projects/hostel/home.png';
import Recipe from '../../assets/projects/recipe/home.png';
import Port from '../../assets/projects/portfolio/main.png';
import { IoLogoFirebase } from "react-icons/io5";

const projects = [
  {
    title: "Recipe Master",
    description: "A complete recipe management system with features like search, filter, and community interaction.",
    image: Recipe,
    link: "https://recipe-master-xi.vercel.app/",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Javascript", icon: <FaJsSquare className="text-green-500" /> },
      { name: "Firebase", icon: <IoLogoFirebase className="text-orange-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
    ],
  },
  {
    title: "HostelEase",
    description: "An online platform for hostel booking, featuring user profiles, booking history, and real-time chat.",
    image: Hostel,
    link: "https://hostel-reserv.vercel.app/",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Javascript", icon: <FaJsSquare className="text-green-500" /> },
      { name: "Firebase", icon: <IoLogoFirebase className="text-orange-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
    ],
  },
  {
    title: "Portfolio",
    description: "This portfolio! A dynamic React app showcasing animations, interactivity, and responsiveness.",
    image: Port,
    link: "https://portfolio.example.com",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Javascript", icon: <FaJsSquare className="text-green-500" /> },
      { name: "Firebase", icon: <IoLogoFirebase className="text-orange-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
    ],
  },
];

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
      <div className="relative w-full max-w-5xl h-full flex items-center overflow-hidden  bg-gray-50 shadow-lg rounded-lg">
        {/* Slide */}
        <motion.div
          key={currentIndex}
          className="flex w-full max-lg:flex-col "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <div className="max-lg:w-full lg:w-1/2 flex-shrink-0 p-4 ">
          <a
  href={projects[currentIndex].link}
  target="_blank"
  rel="noopener noreferrer"
  className="relative group"
>
  {/* Main Image */}
  <motion.img
    src={projects[currentIndex].image}
    alt={projects[currentIndex].title}
    className="max-lg:w-[90%] max-lg:mx-auto w-full max-lg:h-[40svh] h-full object-cover rounded-lg shadow"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
  />

  {/* Floating Animation Overlay */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500 to-transparent rounded-lg opacity-40 pointer-events-none"
    animate={{
      x: [0, 20, 0], // Move horizontally
      y: [0, -20, 0], // Move vertically
    }}
    transition={{
      duration: 3, // Duration of the animation loop
      repeat: Infinity, // Infinite loop
      repeatType: "reverse", // Reverse for smooth animation
    }}
  ></motion.div>
</a>


          </div>

          {/* Details */}
          <div className="max-lg:w-full w-1/2 flex-shrink-0 p-8 ">
            <h3 className="text-3xl font-bold mb-4">
              {projects[currentIndex].title}
            </h3>
            <p className="text-gray-700 mb-6">
              {projects[currentIndex].description}
            </p>
            {/** technologies */}
            <div className="flex flex-wrap gap-2 justify-center">
      {projects[currentIndex].technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200  rounded-full shadow-lg hover:shadow-xl text-gray-800  text-sm lg:text-lg font-medium cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
        >
          {tech.icon}
          <span>{tech.name}</span>
        </motion.div>
      ))}
    </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute max-lg:left-0 left-4 max-lg:top-1/2  top-[80%] transform -translate-y-1/2 text-gray-700 hover:text-primary"
        >
          <FaArrowLeft className="text-xl md:text-2xl lg:text-3xl" />
        </button>
        <button
          onClick={handleNext}
          className="absolute max-lg:right-0 right-1/2 max-lg:top-1/2 top-[80%] transform -translate-y-1/2 text-gray-700 hover:text-primary"
        >
          <FaArrowRight className="text-xl md:text-2xl lg:text-3xl" />
        </button>
  
      </div>
    </div>
  );
};

export default Projects;
