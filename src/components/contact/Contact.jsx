// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {inputStyles} from '../../styles/common/inputStyles';

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   useEffect(() => {
//     // Create and append the script
//     const script = document.createElement("script");
//     script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
//     script.async = true;
//     script.id = "visme-script"; // Add an ID to track this specific script
//     document.body.appendChild(script);

//     // Cleanup function to remove the script if it exists
//     return () => {
//         const existingScript = document.getElementById("visme-script");
//         if (existingScript) {
//             document.body.removeChild(existingScript);
//         }
//     };
// }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form); // Replace this with your form submission logic
//     alert("Message Sent!");
//   };

//   return (
//   //   <motion.div
//   //   className="max-h-screen flex items-center justify-center p-8"
//   //   initial={{ opacity: 0, y: 50 }}
//   //   animate={{ opacity: 1, y: 0 }}
//   //   exit={{ opacity: 0, y: -50 }}
//   //   transition={{ duration: 0.8 }}
//   // >

 
//   //   <section className="py-16 px-6 bg-white">
//   //     <div className="max-w-4xl mx-auto">
//   //       <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
//   //       <form onSubmit={handleSubmit} className="space-y-6">
//   //         <input
//   //           type="text"
//   //           name="name"
//   //           value={form.name}
//   //           onChange={handleChange}
//   //           placeholder="Your Name"
//   //           // className="w-full px-4 py-3 border rounded-lg focus:outline-none"
//   //           className={`${inputStyles} w-full `}
//   //         />
//   //         <input
//   //           type="email"
//   //           name="email"
//   //           value={form.email}
//   //           onChange={handleChange}
//   //           placeholder="Your Email"
//   //           // className="w-full px-4 py-3 border rounded-lg focus:outline-none"
//   //           className={`${inputStyles} w-full `}
//   //         />
//   //         <textarea
//   //           name="message"
//   //           value={form.message}
//   //           onChange={handleChange}
//   //           placeholder="Your Message"
//   //           rows="5"
//   //           // className="w-full px-4 py-3 border rounded-lg focus:outline-none"
//   //           className={`${inputStyles} w-full `}

//   //         ></textarea>
//   //         <button
//   //           type="submit"
//   //           className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
//   //         >
//   //           Send Message
//   //         </button>
//   //       </form>
//   //     </div>
//   //   </section>
//   //   </motion.div>
// <>
// <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>
// <div
//             className="visme_d mx-auto max-w-lg"
//             data-title="Online Contact Form"
//             data-url="0177kj69-online-contact-form"
//             data-domain="forms"
//             data-full-page="false"
//             data-min-height="500px"
//             data-form-id="103447"
//         ></div>
// </>
//   );
// };

// export default Contact;


import { useState } from "react";
import { motion } from "framer-motion";

const InteractiveForm = () => {
  const [avatarState, setAvatarState] = useState("neutral"); // Avatar expression state

  // Function to handle input focus events
  const handleFocus = (state) => {
    setAvatarState(state);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-sm:py-2 p-6 bg-gray-100 min-h-screen">
      {/* Avatar Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="relative"
        >
          {/* Animated Avatar */}
          <img
            src={`/avatars/${avatarState}.jpeg`} // Dynamic avatar images (neutral, happy, thinking)
            alt="Avatar"
            className="max-md:w-32 max-md:h-32 w-40 h-40 rounded-full"
          />
          {/* Speech Bubble */}
          {avatarState === "happy" && (
            <div className="absolute top-0 max-sm:-right-24 -right-16 w-32 bg-yellow-200 rounded-lg shadow-lg p-2">
              <p className="text-sm text-gray-700">"You're doing great!"</p>
            </div>
          )}
          {avatarState === "thinking" && (
            <div className="absolute top-0 max-sm:-right-24 -right-16 w-32 bg-blue-200 rounded-lg shadow-lg p-2">
              <p className="text-sm text-gray-700">"Hmm... what next?"</p>
            </div>
          )}
          {avatarState === "learning" && (
            <div className="absolute top-0 max-sm:-right-24 -right-16 w-32 bg-blue-200 rounded-lg shadow-lg p-2">
              <p className="text-sm text-gray-700">"let's see"</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Me
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onFocus={() => handleFocus("happy")}
              onBlur={() => handleFocus("neutral")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onFocus={() => handleFocus("thinking")}
              onBlur={() => handleFocus("neutral")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              onFocus={() => handleFocus("learning")}
              onBlur={() => handleFocus("neutral")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Write your message here..."
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default InteractiveForm;

