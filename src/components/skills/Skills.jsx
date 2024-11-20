import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  {
    name: "React",
    icon: <FaReact size={40} className="text-blue-500" />,
    description: "Building dynamic and interactive UIs.",
  },
  // {
  //   name: "Node.js",
  //   icon: <FaNodeJs size={40} className="text-green-500" />,
  //   description: "Server-side development and APIs.",
  // },

  {
    name: "Firebase",
    icon: <IoLogoFirebase  size={40} className="text-indigo-500" />,
    description: "Efficient data storage with Firebase.",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 size={40} className="text-orange-500" />,
    description: "Semantic, accessible markup.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={40} className="text-blue-400" />,
    description: "Beautiful, responsive designs.",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={40} className="text-yellow-500" />,
    description: "Core logic and interactivity.",
  },
  {
    name: "C++",
    icon: <CgCPlusPlus size={40} className="text-green-500" />,
    description: "Basics",
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:rotate-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center mb-4">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-700 text-center mb-2">
              {skill.name}
            </h3>
            <p className="text-gray-600 text-center">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
