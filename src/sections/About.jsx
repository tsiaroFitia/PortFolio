import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen gap-4 font-mono flex items-center justify-center  py-12"
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* Titre "About Me" */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-5xl text-center font-bold mb-12 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte de profil */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="p-8 rounded-xl border border-white/10 bg-gray-800/20 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all"
          >
            <h1 className="text-2xl font-bold relative text-white cursor-pointer mb-6">
              Profile
              <span className="absolute left-0 -bottom-2 w-25 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"></span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              As a highly motivated web and mobile developer and a dedicated
              student, I thrive on turning ideas into reality through clean
              code, innovative solutions, and a deep passion for creating
              impactful digital experiences.
            </p>
          </motion.div>

          {/* Carte d'éducation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="p-8 rounded-xl border border-white/10 bg-gray-800/20 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all"
          >
            <h1 className="text-2xl font-bold relative text-white cursor-pointer mb-6">
              Education
              <span className="absolute left-0 -bottom-2 w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"></span>
            </h1>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                <span className="font-semibold text-teal-600">
                  Master I | 2024-2025
                </span>
                <br />
                Student in Management Information Technology, Software
                Engineering, and Artificial Intelligence at{" "}
                <span className="font-semibold text-indigo-600">ISPM</span>
              </p>
              <p className="text-gray-300 text-lg">
                <span className="font-semibold text-teal-600">
                  Licence III | 2023-2024
                </span>
                <br />
                Student in Management Information Technology, Software
                Engineering, and Artificial Intelligence at{" "}
                <span className="font-semibold text-indigo-600">ISPM</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Carte d'expérience */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="p-8 mt-8 rounded-xl border border-white/10 bg-gray-800/20 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all"
        >
          <h1 className="text-2xl font-bold relative text-white cursor-pointer mb-6">
            Experience
            <span className="absolute left-0 -bottom-2 w-34 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"></span>
          </h1>
          <p className="text-gray-300 text-lg">
            <span className="font-semibold text-teal-400">
              Internship | 2024
            </span>
            <br />
            Developing a software for managing allowances and monitoring guard
            shifts for police officers at the Treasury of{" "}
            <span className="font-semibold text-indigo-600">MIARINARIVO</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
