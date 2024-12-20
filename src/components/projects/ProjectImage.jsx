import React from 'react';
import { motion } from "framer-motion";


function ProjectImage({projects, currentIndex}) {
  return (
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
        className="max-lg:w-[90%] max-lg:mx-auto w-full max-lg:h-[40svh]  h-full object-cover rounded-lg shadow"
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
  )
}

export default ProjectImage
