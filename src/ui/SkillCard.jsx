import React from "react";
import { SKILLS } from "../utils/data";
import { motion } from "framer-motion";

export default function SkillCard({ type, visibleRows }) {
  const filteredSkills =
    type === "all" ? SKILLS : SKILLS.filter((skill) => skill.type === type);

  const skillsToShow = filteredSkills.slice(0, visibleRows * 3);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {skillsToShow.map((skill, index) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center text-white cursor-pointer rounded-xl p-6 bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-105 transition-all"
        >
          <skill.icon className="w-12 h-12 mb-4 text-indigo-400" />
          <span className="text-lg font-semibold mb-2">{skill.skill}</span>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.progress}%` }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: false }}
              className="bg-gradient-to-r from-teal-400 to-indigo-600 h-2.5 rounded-full"
            ></motion.div>
          </div>
          <span className="text-sm text-gray-300">{skill.progress}%</span>
        </motion.div>
      ))}
    </div>
  );
}
