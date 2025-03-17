import React, { useEffect } from "react";
import Logo from "./Logo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function NavBar({ isMenuOpen, setIsMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg[rgba(10,10,10,0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
          <Logo />

          {!isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono "
            >
              <HiOutlineMenuAlt3 />
            </div>
          )}

          <div className="flex md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              {/*---------HOME--------- */}
              <a
                href="#home"
                className="text-gray-300 text-lg  hover:text-white transition-all menu-item"
              >
                Home
              </a>
              {/*---------ABOUT--------- */}
              <a
                href="#about"
                className="text-gray-300 text-lg  hover:text-white transition-all menu-item"
              >
                About
              </a>
              {/*---------SKILLS--------- */}
              <a
                href="#skills"
                className="text-gray-300 text-lg  hover:text-white transition-all menu-item"
              >
                Skills
              </a>
              {/*---------PROJECTS--------- */}
              <a
                href="#projects"
                className="text-gray-300 text-lg  hover:text-white transition-all menu-item"
              >
                Projects
              </a>
              {/*---------CONTACT--------- */}
              <a
                href="#contact"
                className="text-gray-300 text-lg  hover:text-white transition-all menu-item"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
