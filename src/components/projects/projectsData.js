import {
    FaCss3Alt,
    FaHtml5,
    FaJsSquare,
    FaReact,
  } from "react-icons/fa";
  import Hostel from "../../assets/projects/hostel/home.png";
  import Recipe from "../../assets/projects/recipe/home.png";
  import Port from "../../assets/projects/portfolio/main.png";
  import { IoLogoFirebase } from "react-icons/io5";

export const projects = [
    {
      title: "Recipe Master",
      description:
        "A complete recipe management system with features like search, filter, and community interaction.",
      image: Recipe,
      link: "https://recipe-master-xi.vercel.app/",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Javascript", icon: <FaJsSquare className="text-green-500" /> },
        {
          name: "Firebase",
          icon: <IoLogoFirebase className="text-orange-500" />,
        },
        { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
      ],
    },
    {
      title: "HostelEase",
      description:
        "An online platform for hostel booking, featuring user profiles, booking history, and real-time chat.",
      image: Hostel,
      link: "https://hostel-reserv.vercel.app/",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Javascript", icon: <FaJsSquare className="text-green-500" /> },
        {
          name: "Firebase",
          icon: <IoLogoFirebase className="text-orange-500" />,
        },
        { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
      ],
    },
    {
      title: "Portfolio",
      description:
        "This portfolio! A dynamic React app showcasing animations, interactivity, and responsiveness.",
      image: Port,
      link: "https://portfolio.example.com",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Javascript", icon: <FaJsSquare className="text-green-500" /> },
        {
          name: "Firebase",
          icon: <IoLogoFirebase className="text-orange-500" />,
        },
        { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
      ],
    },
    {
      title: "Hotel Management System ",
      description:
        "The HMS includes features like room booking, food ordering, car rental, wedding hall bookings, and admin chat.",
      image: Port,
      link: "https://portfolio.example.com",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Javascript", icon: <FaJsSquare className="text-green-500" /> },
        {
          name: "Firebase",
          icon: <IoLogoFirebase className="text-orange-500" />,
        },
        { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
      ],
    },
  ];