import React from "react";
import { CgFacebook } from "react-icons/cg";
import { GoMail } from "react-icons/go";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen gap-4 font-mono flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl text-center font-semibold mb-15 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="p-8 mt-4 mb-12 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
          <h1 className="text-xl font-bold relative text-white cursor-pointer mb-6">
            Profile
            <span className="absolute left-0 -bottom-3 w-25 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full"></span>
          </h1>
          <p className="text-gray-300 mb-9 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsum rem placeat repellat possimus voluptas. Accusamus minus
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Facebook */}
            <div className="flex items-center gap-3">
              <a
                href="https://web.facebook.com/tsiaro.ainah.3?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center cursor-pointer hover:rotate-[-9.75deg] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-2"
              >
                <CgFacebook className="w-5 h-5" />
              </a>
              <span className="text-gray-300">Tsiaro Fitia</span>
            </div>

            {/* Mail */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:fitia.rajs.12@gmail.com"
                className="flex items-center justify-center cursor-pointer hover:rotate-[-9.75deg] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-2"
              >
                <GoMail className="w-5 h-5" />
              </a>
              <span className="text-gray-300">fitia.rajs.12@gmail.com</span>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/tsiaroFitia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center cursor-pointer hover:rotate-[-9.75deg] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-2"
              >
                <PiGithubLogoFill className="w-5 h-5" />
              </a>
              <span className="text-gray-300">Tsiaro Fitia</span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/fitia-undefined-269837284/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center cursor-pointer hover:rotate-[-9.75deg] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full p-2"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <span className="text-gray-300">Fitia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
