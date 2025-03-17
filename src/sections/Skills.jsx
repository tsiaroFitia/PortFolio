import React, { useState } from "react";
import SkillCard from "../ui/SkillCard";
import { SKILLS_TAB } from "../utils/data";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeTabId, setActiveTabId] = useState(1);
  const [activeTabValue, setActiveTabValue] = useState("all");
  const [visibleRows, setVisibleRows] = useState(1);

  const handleChangeActive = (id, value) => {
    setActiveTabId(id);
    setActiveTabValue(value);
    setVisibleRows(1);
  };

  const handleSeeMore = () => {
    setVisibleRows((prev) => prev + 1);
  };

  return (
    <section
      id="skills"
      className="min-h-screen gap-4 font-mono flex flex-col items-center justify-center"
    >
      <div className="p-4 pt-10 mb-10 w-full rounded-lg bg-blue-950/70">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: tab.id * 0.1 }}
                viewport={{ once: false }}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="w-full max-w-4xl px-4"
      >
        <SkillCard type={activeTabValue} visibleRows={visibleRows} />
      </motion.div>

      {visibleRows < 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          onClick={handleSeeMore}
          className="mr-2 md:mr-5 px-7 py-3 mt-5 items-center text-center justify-center
           text-white cursor-pointer bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full 
           hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all"
        >
          <span>See More...</span>
        </motion.div>
      )}
    </section>
  );
}
