import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const hobbies = [
    { title: "Coding", emoji: "💻", color: "bg-blue-200 text-blue-600" },
    { title: "Cricket", emoji: "🏏", color: "bg-green-200 text-green-600" },
    { title: "Astronomy", emoji: "✨", color: "bg-purple-200 text-purple-600" },
    { title: "Web Series", emoji: "🎥", color: "bg-red-200 text-red-600" },
  ];

  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.section
      {...sectionAnimation}
      className="flex flex-col justify-center items-center px-6 py-12 bg-gray-50  rounded-lg shadow-lg h-full"
    >
      {/* Heading */}
      <motion.h2
        {...sectionAnimation}
        className="text-3xl font-bold text-gray-800  mb-6"
      >
        About Me
      </motion.h2>

      {/* About Me Details */}
      <motion.div
        {...sectionAnimation}
        className="text-center text-gray-600 mb-8"
      >
        <p className="mb-4">
          Hi! I'm a passionate Computer Science student from Swat, Pakistan,
          working to become a MERN stack developer. I love exploring cutting-edge
          technologies, building dynamic web applications, and solving real-world
          problems through code.
        </p>
   
      </motion.div>
      <motion.h4
        {...sectionAnimation}
        className="text-2xl font-semibold text-gray-700  mb-6"
      >
      Hobbies
      </motion.h4>

      {/* Hobbies Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4"
      >
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: index * 0.2 },
              },
            }}
            className={`flex items-center justify-center px-4 py-2 ${hobby.color} rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition`}
          >
            <span className="text-xl mr-2">{hobby.emoji}</span>
            <span className="font-medium">{hobby.title}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
