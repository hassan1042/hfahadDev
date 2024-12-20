import React from "react";

function ContactForm({
  formData,
  handleFocus,
  handleInputChange,
  handleSubmit,
  loading,
  submissionMessage,
}) {
  return (
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
        <label
          htmlFor="message"
          className="block text-gray-600 font-medium mb-1"
        >
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
      <div className="text-center">
        <button
          type="submit"
          className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105 hover:from-pink-500 hover:to-red-500 shadow-md hover:shadow-lg"
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
      {submissionMessage && (
        <p
          aria-live="polite"
          className="text-center mt-2 text-sm text-pink-600"
        >
          {submissionMessage}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
