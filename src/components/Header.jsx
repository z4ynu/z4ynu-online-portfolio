"use client";

import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      
      // Add fade transition effect
      element.style.opacity = "0";
      element.style.transition = "opacity 0.8s ease-out";
      
      // Smooth scroll to section
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      // Animate the section in after scroll starts
      setTimeout(() => {
        element.style.opacity = "1";
      }, 300);
      
      // Reset transition and scrolling state after animation completes
      setTimeout(() => {
        element.style.transition = "";
        setIsScrolling(false);
      }, 1100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <nav className="flex items-center justify-between p-6 md:p-8">
        <div className="text-xl font-bold text-primary">z4ynu</div>
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/80 hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white/80 hover:text-primary transition-colors font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white/80 hover:text-primary transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white/80 hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
