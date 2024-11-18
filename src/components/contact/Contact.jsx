import React, { useState } from "react";
import { motion } from "framer-motion";
import {inputStyles} from '../../styles/common/inputStyles';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Replace this with your form submission logic
    alert("Message Sent!");
  };

  return (
    <motion.div
    className="max-h-screen flex items-center justify-center p-8"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8 }}
  >

 
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            // className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            className={`${inputStyles} w-full `}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            // className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            className={`${inputStyles} w-full `}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            // className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            className={`${inputStyles} w-full `}

          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </motion.div>
  );
};

export default Contact;
