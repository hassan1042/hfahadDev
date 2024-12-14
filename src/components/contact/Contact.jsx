import { useState } from "react";
import { motion } from "framer-motion";

const InteractiveForm = () => {
  const [avatarState, setAvatarState] = useState("neutral"); // Avatar expression state

  // Function to handle input focus events
  const handleFocus = (state) => {
    setAvatarState(state);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-sm:py-2 max-sm:p-2 p-6 bg-gray-100 min-h-screen">
      {/* Avatar Section */}
      <div className="w-full md:w-1/2 flex justify-center max-md:sticky max-sm:top-0">
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
            className="max-sm:w-24 max-sm:h-24 max-md:w-32 max-md:h-32 w-40 h-40 rounded-full"
          />
          {/* Speech Bubble */}
          {avatarState === "happy" && (
            <div className="absolute top-0 max-sm:-right-24 -right-16 w-32 bg-yellow-200 rounded-lg shadow-lg p-2 ">
              <p className="text-sm text-gray-700 2xl:text-2xl">"Ok here we go!"</p>
            </div>
          )}
          {avatarState === "thinking" && (
            <div className="absolute top-0 max-sm:-right-24 -right-16 w-32 bg-blue-200 rounded-lg shadow-lg p-2 ">
              <p className="text-sm text-gray-700 2xl:text-2xl">"Hmm..."</p>
            </div>
          )}
          {avatarState === "learning" && (
            <div className="absolute top-0 max-sm:-right-24 -right-16 w-32 bg-blue-200 rounded-lg shadow-lg p-2 ">
              <p className="text-sm text-gray-700 2xl:text-2xl">"let it come"</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md max-[350px]:p-2 p-6 2xl:text-[30px]">
        <h2 className="text-xl md:text-2xl max-sm:font-medium font-semibold text-gray-800 mb-4 2xl:text-[40px] 2xl:text-center 2xl:mb-2">
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
  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:from-pink-500 hover:to-red-500 shadow-md hover:shadow-lg"
>
  Send Message
</button>

        </form>
      </div>
    </div>
  );
};

export default InteractiveForm;

