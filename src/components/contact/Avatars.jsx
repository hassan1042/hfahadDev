import React from "react";
import { motion } from "framer-motion";

function Avatars({ avatarState }) {
  const states = [
    {
      stt: "happy",
      msg: "Ok here we go!",
      bgCol: "bg-yellow-200",
    },
    {
      stt: "thinking",
      msg: "Hmm...",
      bgCol: "bg-blue-200",
    },
    {
      stt: "learning",
      msg: "Let it come!",
      bgCol: "bg-green-200",
    },
  ];
  return (
    <div className="w-full md:w-1/2 flex justify-center max-md:sticky max-sm:top-0">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        className="relative"
      >
        {/* Animated Avatar */}
        <img
          src={`/avatars/${avatarState}.jpeg`} // Dynamic avatar images (neutral, happy, thinking, learning)
          alt="Avatar"
          className="max-sm:w-24 max-sm:h-24 max-md:w-32 max-md:h-32 w-40 h-40 rounded-full shadow-md"
        />
        {/* Speech Bubble */}
        {states.map((state) => (
          <>
            {avatarState === state.stt && (
              <div
                className={`absolute top-0 max-sm:-right-24 -right-16 w-32 bg-yellow-200 rounded-lg shadow-lg p-2 ${state.bgCol} `}
              >
                <p className="text-sm text-gray-700">"{state.msg}"</p>
              </div>
            )}
          </>
        ))}
      </motion.div>
    </div>
  );
}

export default Avatars;