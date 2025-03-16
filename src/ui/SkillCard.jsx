import React from "react";
import { SKILLS } from "../utils/data";

export default function SkillCard({ type }) {
  const filteredSkills =
    type === "all"
      ? SKILLS // Affiche toutes les compétences si "all" est sélectionné
      : SKILLS.filter((skill) => skill.type === type); // Filtre les compétences par type

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {filteredSkills.map((skill) => (
        <div
          key={skill.id}
          className="flex flex-col items-center justify-center text-white cursor-pointer rounded-xl p-6 bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all"
        >
          {/* Icône */}
          <skill.icon className="w-10 h-10 mb-4 text-indigo-400" />

          {/* Nom de la compétence */}
          <span className="text-lg font-semibold mb-2">{skill.skill}</span>

          {/* Barre de progression */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
            <div
              className="bg-gradient-to-r from-teal-400 to-indigo-600 h-2.5 rounded-full"
              style={{ width: `${skill.progress}%` }}
            ></div>
          </div>

          {/* Pourcentage de progression */}
          <span className="text-sm text-gray-300">{skill.progress}%</span>
        </div>
      ))}
    </div>
  );
}
