import React from "react";

const SKILLS_TAB = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "Frontend", value: "frontend" },
  { id: 3, label: "Backend", value: "backend" },
  { id: 4, label: "Tools", value: "tools" },
  { id: 5, label: "Skills", value: "skills" },
];

export default function Skills() {
  return (
    <div>
      <div className="rounded-xl p-4 mb-10 bg-blue-950/70">
        <h3 className="text-2xl text-center font-bold">👜 Skills</h3>
        <div className="flex items-center justify-center my-10">
          <div className="grid grid-cols-3 items-center  gap-4 md:grid-cols-5 ">
            {SKILLS_TAB.map((tab) => (
              <span
                key={tab.id}
                className="mr-2 md:mr-5 items-center justify-center text-white cursor-pointer bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full px-4 py-2"
              >
                {tab.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl p-4  bg-blue-950/70">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          molestiae dicta ipsa quas. Soluta beatae optio tempora totam
          dignissimos perferendis. Commodi sed officia sunt id repudiandae
          labore molestias quos corrupti.
        </p>
      </div>
    </div>
  );
}
