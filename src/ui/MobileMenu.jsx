import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden
        ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Bouton de fermeture */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute right-7 top-5 text-3xl text-white hover:text-gray-300 transition-colors "
        aria-label="Close Menu"
      >
        <RxCross2 />
      </button>

      {/* Menu */}
      <div className="flex flex-col items-center gap-6">
        {/*---------HOME--------- */}
        <a
          href="#home"
          className={`text-2xl font-semibold text-white relative transition-transform duration-300
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/*---------ABOUT--------- */}
        <a
          href="#about"
          className={`text-2xl font-semibold text-white relative transition-transform duration-300
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/*---------SERVICES--------- */}
        <a
          href="#services"
          className={`text-2xl font-semibold text-white relative transition-transform duration-300
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          Services
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/*---------PROJECTS--------- */}
        <a
          href="#projects"
          className={`text-2xl font-semibold text-white relative transition-transform duration-300
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/*---------CONTACT--------- */}
        <a
          href="#contact"
          className={`text-2xl font-semibold text-white relative transition-transform duration-300
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
}
