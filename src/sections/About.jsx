import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen gap-4 font-mono flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto px-4">
        {/* Titre "About Me" */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-4xl text-center font-semibold mb-15 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Carte de profil */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="p-8 mt-4 mb-12 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all"
          >
            <h1 className="text-xl font-bold relative text-white cursor-pointer mb-6">
              Profile
              <span className="absolute left-0 -bottom-3 w-20 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"></span>
            </h1>
            <p className="text-gray-300 mb-9 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ipsum rem placeat repellat possimus voluptas. Accusamus minus
            </p>
          </motion.div>
          {/* Carte de profil */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="p-8 mt-4 mb-12 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all"
          >
            <h1 className="text-xl font-bold relative text-white cursor-pointer mb-6">
              Education & Experience
              <span className="absolute left-0 -bottom-3 w-62 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"></span>
            </h1>
            <p className="text-gray-300 mb-9 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ipsum rem placeat repellat possimus voluptas. Accusamus minus
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
