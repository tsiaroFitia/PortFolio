import React, { useState } from "react";
import NavBar from "./ui/NavBar";
import MobileMenu from "./ui/MobileMenu";
import LoadingScreenAnimation from "./ui/LoadingScreenAnimation";
import Home from "./sections/Home";
import AnimationWaves from "./ui/AnimationWaves";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && (
        <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
      )}
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Home />
      <AnimationWaves />

      <About />

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
