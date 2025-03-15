import React, { useState } from "react";
import NavBar from "./ui/NavBar";
import MobileMenu from "./ui/MobileMenu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="text-3xl font-bold underline">
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}
