import { FaReact,  FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoFirebase } from "react-icons/io5";

export const skills = [
    {
      name: "JavaScript",
      icon: <FaJsSquare size={40} className="text-yellow-500" />,
      description: "Core logic and interactivity.",
    },
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
      name: "C++",
      icon: <CgCPlusPlus size={40} className="text-green-500" />,
      description: "Basics",
    },
  ];