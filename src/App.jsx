import React, { useState } from "react";
import NavBar from "./ui/NavBar";
import MobileMenu from "./ui/MobileMenu";
import LoadingScreenAnimation from "./ui/LoadingScreenAnimation";
import Home from "./sections/Home";
import AnimationWaves from "./ui/AnimationWaves";

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
    </>
  );
}
