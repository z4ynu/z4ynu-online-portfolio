"use client";

import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      setIsMenuOpen(false); // Close mobile menu when navigating
      
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
    }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <nav className="flex items-center justify-between p-6 md:p-8 relative">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold text-primary hover:text-accent transition-colors duration-200"
        >
          z4ynu
        </button>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
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

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span 
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 bg-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-white/80 hover:text-primary transition-colors font-medium py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left text-white/80 hover:text-primary transition-colors font-medium py-2"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left text-white/80 hover:text-primary transition-colors font-medium py-2"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left text-white/80 hover:text-primary transition-colors font-medium py-2"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
