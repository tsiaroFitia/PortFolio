import React, { useState } from "react";
import SkillCard from "../ui/SkillCard";
import { SKILLS_TAB } from "../utils/data";

export default function Skills() {
  const [activeTabId, setActiveTabId] = useState(1);
  const [activeTabValue, setActiveTabValue] = useState("all");

  const handleChangeActive = (id, value) => {
    setActiveTabId(id);
    setActiveTabValue(value);
  };

  return (
    <section
      id="about"
      className="min-h-screen gap-4 font-mono flex flex-col items-center justify-center"
    >
      <div className="p-4 pt-10 mb-10 w-full rounded-lg bg-blue-950/70">
        <h3 className="text-2xl text-center font-bold">👜 Skills</h3>
        <div className="flex items-center justify-center my-10">
          <div className="grid grid-cols-3 items-center gap-4 md:grid-cols-5">
            {SKILLS_TAB.map((tab) => (
              <span
                onClick={() => handleChangeActive(tab.id, tab.value)}
                key={tab.id}
                className={`mr-2 md:mr-5 items-center text-center justify-center text-white cursor-pointer ${
                  activeTabId === tab.id
                    ? "bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"
                    : "bg-indigo-500/10 rounded-full"
                } px-4 py-2`}
              >
                {tab.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl px-4">
        <SkillCard type={activeTabValue} />
      </div>
    </section>
  );
}
