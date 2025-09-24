"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col bg-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-green-400/20 rounded-full animate-pulse delay-500"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float-delayed"></div>
        
        {/* Hobby-themed decorative elements */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce delay-1000"></div>
      </div>
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 md:p-8 bg-black/20 backdrop-blur-sm border-b border-white/10">
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

      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Zy Henzo S. Nuñez
              </h1>
              <div className="text-lg md:text-xl text-muted-foreground">
                Computer Science Student
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I build accessible, pixel-perfect digital experiences for the
                web, craft compelling written content, and share the joy of
                music through tutoring.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="text-base px-4 py-2 font-semibold">
                Web Developer
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2 font-semibold">
                Freelance Writer
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2 font-semibold">
                Music Tutor
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-4 font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="text-lg px-8 py-4 font-semibold border-2 border-primary/50 hover:border-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:zyhenzonunez@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819L12 8.73l6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                  <path d="M12 8.73L5.455 3.82H1.636A1.636 1.636 0 0 0 0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L12 16.64l6.545-4.91v9.273h3.819c.904 0 1.636-.732 1.636-1.636V5.457c0-.904-.732-1.636-1.636-1.636h-3.819L12 8.73z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-card border border-border flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/zaynu.jpg"
                      alt="Zy Henzo S. Nuñez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center shadow-lg animate-float">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-accent/15 border-2 border-accent/30 flex items-center justify-center shadow-lg animate-float-delayed">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="absolute top-1/2 -left-10 w-14 h-14 rounded-full bg-pink-500/20 border-2 border-pink-400/40 flex items-center justify-center shadow-lg animate-float">
                <svg
                  className="w-7 h-7 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              
              {/* Additional hobby elements */}
              <div className="absolute top-1/4 -right-16 w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400/40 flex items-center justify-center shadow-lg animate-float-delayed">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
                  />
                </svg>
              </div>
              
              <div className="absolute bottom-1/4 -left-16 w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-400/40 flex items-center justify-center shadow-lg animate-float">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              
              <div className="absolute top-3/4 -right-8 w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-400/40 flex items-center justify-center shadow-lg animate-float-delayed">
                <svg
                  className="w-4 h-4 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              
              <div className="absolute top-1/6 -left-8 w-6 h-6 rounded-full bg-yellow-500/20 border-2 border-yellow-400/40 flex items-center justify-center shadow-lg animate-float">
                <svg
                  className="w-3 h-3 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
