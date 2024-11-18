import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaLaptopCode, FaEnvelope, FaToolbox } from "react-icons/fa";

const navItems = [
  { id: "about", icon: <FaUser size={24} />, text: "About" },
  { id: "skills", icon: <FaToolbox size={24} />, text: "Skills" },
  { id: "projects", icon: <FaLaptopCode size={24} />, text: "Projects" },
  { id: "contact", icon: <FaEnvelope size={24} />, text: "Contact" },
];

const RightNav = ({activeSection, setActiveSection }) => {
  console.log(activeSection)
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full space-y-6"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`flex flex-col items-center text-gray-700 hover:text-primary focus:outline-none ${activeSection === item.text.toLowerCase() ? 'text-primary' : ''} `}
        >
        {
  console.log('the item is:' ,item.text)

        }
          {item.icon}
          <span className="mt-2 text-sm">{item.text}</span>
        </button>
      ))}
    </motion.div>
  );
};

export default RightNav;
