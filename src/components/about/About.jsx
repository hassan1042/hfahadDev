import React from "react";
import { motion } from "framer-motion";
import Hobbies from "./Hobbies";

const AboutMe = () => {
  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.section
      {...sectionAnimation}
      className="flex flex-col justify-center items-center max-sm:px-2 px-6 max-sm:py-2 md:py-12 bg-gray-50  rounded-lg shadow-lg h-full "
    >
      {/* Heading */}
      <motion.h2
        {...sectionAnimation}
        className="max-sm:text-xl text-3xl 2xl:text-[40px] font-bold text-gray-800 max-sm:mb-4  mb-6"
      >
        About Me
      </motion.h2>

      {/* About Me Details */}
      <motion.div
        {...sectionAnimation}
        className="text-center max-sm:text-justify max-sm:ps-2 text-gray-600 mb-8 "
      >
        <p className="max-sm:mb-2 mb-4 2xl:text-[25px]">
          {`Hi! I'm a passionate Computer Science graduate from Swat, Pakistan, working to become a MERN stack developer. I love exploring cutting-edge technologies, building dynamic web applications, and solving real-world problems through code.`
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </p>
      </motion.div>
      <Hobbies sectionAnimation={sectionAnimation} />
    </motion.section>
  );
};

export default AboutMe;
