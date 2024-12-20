import React from "react";
import { motion } from "framer-motion";
import { skills } from "./skillsData";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center p-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 md:mb-6 lg:mb-12 mt-2 2xl:text-[40px]">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mt-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="max-sm:p-2 p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:rotate-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center max-sm:mb-2 mb-4 2xl:text-3xl">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-700 text-center mb-2 2xl:text-2xl">
              {skill.name}
            </h3>
            <p className="text-gray-600 text-center 2xl:text-xl">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;