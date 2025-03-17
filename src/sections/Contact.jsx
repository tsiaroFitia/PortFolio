import React, { useState } from "react";
import { CgFacebook } from "react-icons/cg";
import { GoMail } from "react-icons/go";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-12"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-xl md:text-4xl text-center font-bold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="p-8 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all"
          >
            <h1 className="text-2xl font-bold relative text-white cursor-pointer mb-8">
              My Social Media
              <span className="absolute left-0 -bottom-3 w-42 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"></span>
            </h1>
            <div className="space-y-6">
              {/* Facebook */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-4"
              >
                <a
                  href="https://web.facebook.com/tsiaro.ainah.3?locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center cursor-pointer hover:rotate-[-9.75deg] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-3"
                >
                  <CgFacebook className="w-6 h-6" />
                </a>
                <span className="text-gray-300 text-lg">Tsiaro Fitia</span>
              </motion.div>

              {/* Mail */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-4"
              >
                <a
                  href="mailto:fitia.rajs.12@gmail.com"
                  className="flex items-center justify-center cursor-pointer hover:rotate-[-9.75deg] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-3"
                >
                  <GoMail className="w-6 h-6" />
                </a>
                <span className="text-gray-300 text-lg">
                  fitia.rajs.12@gmail.com
                </span>
              </motion.div>

              {/* GitHub */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-4"
              >
                <a
                  href="https://github.com/tsiaroFitia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center cursor-pointer hover:rotate-[-9.75deg] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-3"
                >
                  <PiGithubLogoFill className="w-6 h-6" />
                </a>
                <span className="text-gray-300 text-lg">Tsiaro Fitia</span>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-4"
              >
                <a
                  href="https://www.linkedin.com/in/fitia-undefined-269837284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center cursor-pointer hover:rotate-[-9.75deg] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-3"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <span className="text-gray-300 text-lg">Fitia</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-4"
              >
                <a
                  href=""
                  className="flex items-center justify-center cursor-pointer hover:rotate-[-9.75deg] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-3"
                >
                  <FaPhone className="w-6 h-6" />
                </a>
                <span className="text-gray-300 text-lg">+260 38 43 046 13</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="p-8 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all"
          >
            <h1 className="text-2xl font-bold relative text-white cursor-pointer mb-8">
              Send a Message
              <span className="absolute left-0 -bottom-3 w-30 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"></span>
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
