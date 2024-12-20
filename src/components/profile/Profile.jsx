import React from "react";
import { motion } from "framer-motion";
import CVButton from "./CVButton";
import Profile from "../../assets/common/profile.jpg";
import SocialLinks from "./Socials";
import LightAcross from "../../styles/text/LightAcross";
import ContactDetails from "./ContactDetails";

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
          <LightAcross text={"Hassan Fahad Khan"} />
        </div>
        <p className="text-gray-600 text-[15px] 2xl:text-[20px]">
          Aspiring MERN Stack Developer
        </p>
      </motion.div>

      {/* Contact Details */}
      <ContactDetails />

      {/* CTA Buttons */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <CVButton />
      </motion.div>
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default LeftProfile;
