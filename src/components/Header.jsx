"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);

      element.style.opacity = "0";
      element.style.transition = "opacity 0.8s ease-out";

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        element.style.opacity = "1";
      }, 300);

      setTimeout(() => {
        element.style.transition = "";
      }, 1100);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="group hidden md:block fixed left-0 top-0 z-50 h-screen w-4">
        <aside className="absolute left-0 top-0 flex h-screen w-56 -translate-x-full flex-col bg-black/20 backdrop-blur-sm border-r border-white/10 transition-transform duration-300 ease-out group-hover:translate-x-0">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:text-accent transition-colors duration-200 px-8 py-8 text-left"
          >
            z4ynu
          </button>

          <nav className="mt-4 flex flex-col space-y-2 px-6">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left px-2 py-3 rounded-md text-white/80 hover:text-primary hover:bg-white/5 transition-colors font-medium"
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>
      </div>

      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <nav className="flex items-center justify-between p-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:text-accent transition-colors duration-200"
          >
            z4ynu
          </button>

          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </nav>
      </header>

      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 z-40 bg-black/95 backdrop-blur-md border-l border-white/10 transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-2 px-6 pt-24">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left text-white/80 hover:text-primary transition-colors font-medium py-3"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="md:hidden fixed inset-0 z-30 bg-black/40"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
