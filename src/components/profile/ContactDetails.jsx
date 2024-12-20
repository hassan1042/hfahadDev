import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

function ContactDetails() {
  return (
    <div className="mt-5 space-y-4 w-full ">
      {/* Phone */}
      <motion.div
        className="flex items-center text-gray-800 hover:text-blue-500 cursor-pointer transition-all"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FaPhoneAlt className="mr-3 text-blue-500 2xl:text-[1.5rem]" />
        <a
          href="tel:+923400480888"
          className="text-lg font-medium 2xl:text-[25px]"
        >
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
        <FaEnvelope className="mr-3 text-teal-500 500 2xl:text-[1.5rem]" />
        <a
          href="mailto:hfahad534@gmail.com"
          className="text-lg font-medium 2xl:text-[25px]"
        >
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
        <FaWhatsapp className="mr-3 text-green-500 text-xl 2xl:text-[1.5rem]" />
        <a
          href="https://wa.me/+923400480888"
          className="text-lg font-medium 2xl:text-[25px]"
        >
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
        <FaMapMarkerAlt className="mr-3 text-red-500 2xl:text-[1.5rem]" />
        <p className="text-lg font-medium 2xl:text-[25px]">Swat, Pakistan</p>
      </motion.div>
    </div>
  );
}

export default ContactDetails;
