import React from 'react';
import { motion } from "framer-motion";


function ProjectsDetails({projects, currentIndex}) {
  return (
    <div className="max-lg:w-full w-1/2 flex-shrink-0 max-sm:p-4 p-8 ">
    <h3 className="text-xl md:text-2xl lg:text-3xl max-sm:font-medium font-bold max-sm:mb-2 mb-4 2xl:text-[40px]">
      {projects[currentIndex].title}
    </h3>
    <p className="text-gray-700 max-sm:mb-2 mb-6 2xl:text-2xl">
      {projects[currentIndex].description}
    </p>
    {/** technologies */}
    <div className="flex flex-wrap gap-2 justify-center">
      {projects[currentIndex].technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2 max-sm:px-2 max-sm:py-1 px-4 py-2 bg-gray-200 2xl:text-xl rounded-full shadow-lg hover:shadow-xl text-gray-800  text-sm lg:text-lg font-medium cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          {tech.icon}
          <span className="max-sm:text-[15px] font-medium 2xl:text-xl">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
  )
}

export default ProjectsDetails
