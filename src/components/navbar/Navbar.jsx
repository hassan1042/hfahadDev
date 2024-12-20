import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaLaptopCode, FaEnvelope, FaToolbox } from "react-icons/fa";

const navItems = [
  { id: "about", icon: <FaUser  />, text: "About" },
  { id: "skills", icon: <FaToolbox />, text: "Skills" },
  { id: "projects", icon: <FaLaptopCode  />, text: "Projects" },
  { id: "contact", icon: <FaEnvelope  />, text: "Contact" },
];

const RightNav = ({activeSection, setActiveSection }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full space-y-6 2xl:space-y-20 2xl:text-4xl shadow-sm "
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`flex flex-col items-center text-gray-700 hover:text-primary focus:outline-none transition-all transform hover:scale-105 xl:text-3xl 2xl:text-4xl ${activeSection === item.text.toLowerCase() ? 'text-primary' : ''} `}
        >
    
          {item.icon}
          <span className="mt-2 text-sm 2xl:text-4xl">{item.text}</span>
        </button>
      ))}
    </motion.div>
  );
};

export default RightNav;
