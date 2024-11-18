import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm [Your Name]</h1>
      <p className="text-lg md:text-2xl font-light mb-6">
        Aspiring MERN Stack Developer | Building web experiences with React & Tailwind
      </p>
      <div>
        <a
          href="#contact"
          className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-100"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="ml-4 bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-500"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
