import React, { useState } from "react";
import SkillCard from "../ui/SkillCard";
import { SKILLS_TAB } from "../utils/data";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeTabId, setActiveTabId] = useState(1);
  const [activeTabValue, setActiveTabValue] = useState("all");

  const handleChangeActive = (id, value) => {
    setActiveTabId(id);
    setActiveTabValue(value);
  };

  return (
    <section
      id="skills"
      className="min-h-screen gap-4 font-mono flex flex-col items-center justify-center"
    >
      <div className="p-4 pt-10 mb-10 w-full rounded-lg bg-blue-950/70">
        <motion.h3
          initial={{ opacity: 0, y: -20 }} // État initial (invisible et décalé vers le haut)
          whileInView={{ opacity: 1, y: 0 }} // Animation lorsque l'élément entre dans la vue
          transition={{ duration: 0.6 }} // Durée de l'animation
          viewport={{ once: false }} // Permet de répéter l'animation à chaque défilement
          className="text-2xl text-center font-bold"
        >
          👜 Skills
        </motion.h3>
        <div className="flex items-center justify-center my-10">
          <div className="grid grid-cols-3 items-center gap-4 md:grid-cols-5">
            {SKILLS_TAB.map((tab) => (
              <motion.span
                onClick={() => handleChangeActive(tab.id, tab.value)}
                key={tab.id}
                initial={{ opacity: 0, y: 20 }} // État initial (invisible et décalé vers le bas)
                whileInView={{ opacity: 1, y: 0 }} // Animation lorsque l'élément entre dans la vue
                transition={{ duration: 0.4, delay: tab.id * 0.1 }} // Délai pour un effet d'apparition en cascade
                viewport={{ once: false }} // Permet de répéter l'animation à chaque défilement
                className={`mr-2 md:mr-5 items-center text-center justify-center text-white cursor-pointer ${
                  activeTabId === tab.id
                    ? "bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"
                    : "bg-indigo-500/10 rounded-full"
                } px-4 py-2`}
              >
                {tab.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Animation pour le conteneur des cartes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // État initial (invisible et décalé vers le bas)
        whileInView={{ opacity: 1, y: 0 }} // Animation lorsque l'élément entre dans la vue
        transition={{ duration: 0.6 }} // Durée de l'animation
        viewport={{ once: false }} // Permet de répéter l'animation à chaque défilement
        className="w-full max-w-6xl px-4"
      >
        <SkillCard type={activeTabValue} />
      </motion.div>
    </section>
  );
}
