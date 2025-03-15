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
      <div className="flex flex-col items-center gap-8">
        {/*---------HOME--------- */}
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl font-semibold text-white relative transition-transform duration-300 mb-4
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          Home
        </a>

        {/*---------ABOUT--------- */}
        <a
          href="#about"
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl font-semibold text-white relative transition-transform duration-300 mb-4
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          About
        </a>

        {/*---------SERVICES--------- */}
        <a
          href="#services"
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl font-semibold text-white relative transition-transform duration-300 mb-4
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          Services
        </a>

        {/*---------PROJECTS--------- */}
        <a
          href="#projects"
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl font-semibold text-white relative transition-transform duration-300 mb-4
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          Projects
        </a>

        {/*---------CONTACT--------- */}
        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl font-semibold text-white relative transition-transform duration-300 mb-4
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
