import { useState } from "react";
import { motion } from "framer-motion";

const InteractiveForm = () => {
  const [avatarState, setAvatarState] = useState("neutral"); // Avatar expression state
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle input focus events
  const handleFocus = (state) => setAvatarState(state);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xdkoqpwg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmissionMessage("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionMessage("Form submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
            src={`/avatars/${avatarState}.jpeg`} // Dynamic avatar images (neutral, happy, thinking, learning)
            alt="Avatar"
            className="max-sm:w-24 max-sm:h-24 max-md:w-32 max-md:h-32 w-40 h-40 rounded-full shadow-md"
          />
          {/* Speech Bubble */}
          {avatarState === "happy" && (
            <div className="absolute top-0 max-sm:-right-24 -right-16 w-32 bg-yellow-200 rounded-lg shadow-lg p-2">
              <p className="text-sm text-gray-700">"Ok here we go!"</p>
            </div>
          )}
          {avatarState === "thinking" && (
            <div className="absolute top-0 max-sm:-right-24 -right-16 w-32 bg-blue-200 rounded-lg shadow-lg p-2">
              <p className="text-sm text-gray-700">"Hmm..."</p>
            </div>
          )}
          {avatarState === "learning" && (
            <div className="absolute top-0 max-sm:-right-24 -right-16 w-32 bg-green-200 rounded-lg shadow-lg p-2">
              <p className="text-sm text-gray-700">"Let it come!"</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md max-[350px]:p-2 p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => handleFocus("happy")}
              onBlur={() => handleFocus("neutral")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => handleFocus("thinking")}
              onBlur={() => handleFocus("neutral")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600 font-medium mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => handleFocus("learning")}
              onBlur={() => handleFocus("neutral")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Write your message here..."
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:from-pink-500 hover:to-red-500 shadow-md hover:shadow-lg"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {submissionMessage && (
            <p aria-live="polite" className="text-center mt-2 text-sm text-gray-600">
              {submissionMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default InteractiveForm;
