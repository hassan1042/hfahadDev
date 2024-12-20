import React from "react";
import { motion } from "framer-motion";

function Hobbies({ sectionAnimation }) {
  const hobbies = [
    { title: "Coding", emoji: "💻", color: "bg-blue-200 text-blue-600" },
    { title: "Gaming", emoji: "🎮", color: "bg-gray-200 text-gray-600" },
    // { title: "Astronomy", emoji: "✨", color: "bg-purple-200 text-purple-600" },
    {
      title: "Video Making",
      emoji: "🎥",
      color: "bg-yellow-200 text-yellow-600",
    },
    {
      title: "Book Reading",
      emoji: "📖",
      color: "bg-slate-200 text-slate-600",
    },
    { title: "Cricket", emoji: "🏏", color: "bg-green-200 text-green-600" },
    // { title: "Exploring", emoji: "🏞️", color: "bg-teal-200 text-teal-600" },
    { title: "Hiking", emoji: "🏔️", color: "bg-teal-200 text-teal-600" },
  ];
  return (
    <div>
      <motion.h4
        {...sectionAnimation}
        className="max-sm:text-lg text-2xl text-center font-semibold text-gray-700 max-sm:mb-4 mb-6 italic 2xl:text-4xl"
      >
        What i love to do
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
            className={`flex items-center justify-center max-sm:px-2 max-sm:py-1 px-4 py-2 ${hobby.color} rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition`}
          >
            <span className="max-md:text-sm text-xl mr-2 2xl:text-[30px]">
              {hobby.emoji}
            </span>
            <span className="max-sm:text-[15px] font-medium 2xl:text-[30px]">
              {hobby.title}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hobbies;
