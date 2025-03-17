import React from "react";
import { SKILLS } from "../utils/data";
import { motion } from "framer-motion";

export default function SkillCard({ type, visibleRows }) {
  const filteredSkills =
    type === "all" ? SKILLS : SKILLS.filter((skill) => skill.type === type);

  const skillsToShow = filteredSkills.slice(0, visibleRows * 4);

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {skillsToShow.map((skill, index) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center text-white cursor-pointer rounded-xl p-6 bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transition-all transform-gpu"
        >
          <div className="flex flex-row items-center justify-evenly w-full mb-4">
            <skill.icon className="w-9 h-9 text-indigo-400 hover:rotate-12 transition-transform" />
            <span className="text-sm font-semibold text-gray-100">
              {skill.skill}
            </span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-3 mb-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.progress}%` }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: false }}
              className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 h-3 rounded-full shadow-lg shadow-indigo-500/30"
            ></motion.div>
          </div>

          <span className="text-sm text-gray-300 font-medium">
            {skill.progress}%
          </span>
        </motion.div>
      ))}
    </div>
  );
}
