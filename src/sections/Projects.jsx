import React from "react";
import { motion } from "framer-motion";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";

const PROJECTS = [
  {
    id: 1,
    img: project1,
    description: "Description du projet 1",
    langage: ["React", "Vite", "Tailwind CSS", "SQL"],
  },
  {
    id: 2,
    img: project2,
    description: "Description du projet 2",
    langage: ["C#", "WindowsForms", "SQL"],
  },
  {
    id: 3,
    img: project3,
    description: "Description du projet 3",
    langage: ["React", "Vite", "Tailwind CSS", "SQL"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-4xl font-semibold mb-12 text-center bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-3 gap-12">
          {PROJECTS.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              key={project.id}
              className="flex flex-col items-center justify-center cursor-pointer rounded-xl p-6 bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-105  transform-gpu transition-shadow"
            >
              {/* Image du projet */}
              <div className="mb-6">
                <img
                  src={project.img}
                  alt={`Project ${project.id}`}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>

              {/* Description du projet */}
              <p className="text-gray-300 text-lg text-center mb-4">
                {project.description}
              </p>

              {/* Langages utilisés */}
              <div className="flex flex-wrap gap-2 justify-center">
                {project.langage.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-indigo-500/10 rounded-full px-4 py-2 text-sm text-indigo-300 cursor-pointer hover:bg-indigo-500/20 hover:from-teal-500 hover:to-indigo-600 transition-colors"
                  >
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
