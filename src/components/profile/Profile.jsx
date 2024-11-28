import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import CVButton from "./CVButton";
import Profile from '../../assets/common/profile.jpg';
import SocialLinks from "./Socials";
import LightAcross from "../../styles/text/LightAcross";

const LeftProfile = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-gray-200 to-gray-100 p-6 rounded-xl shadow-md min-h-screen sticky top-0">
      {/* Profile Picture */}
      <motion.div
        className="w-40 h-40 rounded-full overflow-hidden mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Name and Designation */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* <h1 className="text-xl font-bold text-gray-800">Hassan Fahad Khan</h1> */}
        <div>
        <LightAcross text={'Hassan Fahad Khan'} />

        </div>
        <p className="text-gray-600">Aspiring Full Stack Developer</p>
      </motion.div>

      {/* Contact Details */}
      <div className="mt-5 space-y-4 w-full">
        {/* Phone */}
        <motion.div
          className="flex items-center text-gray-800 hover:text-blue-500 cursor-pointer transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaPhoneAlt className="mr-3 text-blue-500" />
          <a href="tel:+923400480888" className="text-lg font-medium">
            +92 3400480888
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          className="flex items-center text-gray-800 hover:text-teal-500 cursor-pointer transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FaEnvelope className="mr-3 text-teal-500 500" />
          <a href="mailto:hfahad534@gmail.com" className="text-lg font-medium">
          hfahad534@gmail.com
          </a>
        </motion.div>
        
        {/* WA */}
        <motion.div
          className="flex items-center text-gray-800 hover:text-green-500 cursor-pointer transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FaWhatsapp className="mr-3 text-green-500 text-xl" />
          <a href="https://wa.me/+923400480888" className="text-lg font-medium">
          Start a chat
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          className="flex items-center text-gray-800 hover:text-red-500 cursor-pointer transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <FaMapMarkerAlt className="mr-3 text-red-500" />
          <p className="text-lg font-medium">Swat, Pakistan</p>
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
     <CVButton/>
      
      </motion.div>
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
     <SocialLinks/>
      
      </motion.div>
    </div>
  );
};

export default LeftProfile;
