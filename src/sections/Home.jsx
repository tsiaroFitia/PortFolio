import React from "react";
import myphoto from "../assets/myphoto.jpg";
import resume from "../assets/resume.pdf";
import { HiOutlineDownload } from "react-icons/hi";

export default function Home() {
  return (
    <section
      id="#home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15"
    >
      <div className="text-center z-10 px-4">
        <img
          src={myphoto}
          alt="Profile image"
          className="w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all"
        />
      </div>
      <div className="text-center font-mono z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-w[500px] font-semibold mb-6 px-1 bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-right">
          Hi, I'm Fitia Rajohnson
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est
          excepturi minima cupiditate. Dolores natus, optio voluptate tempore,
          delectus rem eum a ullam nobis cum provident? Commodi officiis ratione
          quae;
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#contact"
            className="py-3 px-6 rounded hover:-translate-y-1 hover:shadow[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden
            bg-gradient-to-r ml-2 from-teal-500 to-indigo-600"
          >
            Contact Me
          </a>
          <a
            href={resume}
            download
            className="py-3 px-6 flex flex-row items-center justify-center gap-4 rounded hover:-translate-y-1 hover:shadow[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden
            bg-gradient-to-r ml-2 from-teal-500 to-indigo-600"
          >
            <p>Resume</p>
            <span className="h-5 text-xl font-bold text-white">
              <HiOutlineDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
