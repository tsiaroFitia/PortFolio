import React from "react";
import { CgFacebook } from "react-icons/cg";
import { GoMail } from "react-icons/go";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";

const SKILLS_TAB = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "Frontend", value: "frontend" },
  { id: 3, label: "Backend", value: "backend" },
  { id: 4, label: "Tools", value: "tools" },
  { id: 5, label: "Skills", value: "skills" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen gap-4 font-mono flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl text-center font-semibold mb-10 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
          Technical Proficiency
        </h2>

        <div className="p-8 mt-4 mb-12 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
          <h1 className="text-xl font-bold relative text-white cursor-pointer mb-6">
            About Me
            <span className="absolute left-0 -bottom-3 w-25 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"></span>
          </h1>
          <p className="text-gray-300 mb-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsum rem placeat repellat possimus voluptas. Accusamus minus
          </p>
          <div className="flex flex-row">
            <div className="items-center justify-center cursor-pointer gap-3 mr-5 hover:rotate-[-9.75deg]  hover:shadow[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-1">
              <CgFacebook className="w-5 h-5" />
            </div>
            <div className="items-center justify-center cursor-pointer gap-3 mr-5 hover:rotate-[-9.75deg] hover:shadow[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-1">
              <GoMail />
            </div>
            <div className="items-center justify-center cursor-pointer gap-3 mr-5 hover:rotate-[-9.75deg]  hover:shadow[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-1">
              <PiGithubLogoFill />
            </div>
            <div className="items-center justify-center cursor-pointer gap-3 mr-5 hover:rotate-[-9.75deg]  hover:shadow[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-1">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="rounded-xl p-4  bg-blue-950/70">
          <h3 className="text-2xl text-center font-bold">👜 Skills</h3>
          <div className="flex items-center justify-center my-10">
            <div className="grid grid-cols-3 gap-4 md:grid-cols-5 ">
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
      </div>
    </section>
  );
}
