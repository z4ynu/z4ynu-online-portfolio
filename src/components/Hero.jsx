"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`min-h-screen flex flex-col bg-hero relative overflow-hidden transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
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
          <div className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-4">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-black border-b-2 border-primary/30 pb-2">
                  Zy Henzo S. Nuñez
                </h1>
              </div>
              <div className="border border-border/50 rounded-lg p-4 bg-card/20 backdrop-blur-sm text-center">
                <div className="text-lg md:text-xl text-muted-foreground">
                  Computer Science Student
                </div>
              </div>
              <div className="border border-border/50 rounded-lg p-4 bg-card/20 backdrop-blur-sm text-center">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I build accessible, pixel-perfect digital experiences for the
                  web, craft compelling written content, and share the joy of
                  music through tutoring.
                </p>
              </div>
            </div>

            <div className="border border-secondary/30 rounded-lg p-4 bg-card/20 backdrop-blur-sm">
              <div className="flex flex-wrap gap-4 justify-center">
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
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-4 font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl active:shadow-md active:translate-y-1 transition-all duration-200 w-full sm:w-auto transform hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="text-lg px-8 py-4 font-semibold border-2 border-primary/50 hover:border-primary hover:bg-primary/10 hover:text-white shadow-lg hover:shadow-xl active:shadow-md active:translate-y-1 transition-all duration-200 w-full sm:w-auto transform hover:scale-105"
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="border border-muted/30 rounded-lg p-4 bg-card/10 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/z4ynu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/zy-nuñez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                
                {/* Gmail */}
                <a
                  href="mailto:zyhenzonunez@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="Gmail"
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
                
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@z4ynu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="TikTok"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/zynuuu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@z4ynu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                  {/* Steam */}
                  <a
                    href="https://steamcommunity.com/profiles/76561198994198499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title="Steam"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 58 58"
                    >
                      <path d="M50,26c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S47.794,26,50,26z M50,20c1.103,0,2,0.897,2,2s-0.897,2-2,2s-2-0.897-2-2S48.897,20,50,20z"/>
                      <path d="M55.918,27.364C57.207,25.943,58,24.065,58,22c0-4.411-3.589-8-8-8c-3.661,0-6.748,2.475-7.695,5.837l-4.197,11.193c-0.961,0.058-1.883,0.321-2.721,0.781l-20.47-8.389C14.387,19.75,11.231,17,7.5,17C3.364,17,0,20.364,0,24.5S3.364,32,7.5,32c1.494,0,2.912-0.452,4.144-1.274l20.592,8.44c0.006,0.034-0.002,0.067,0.008,0.101C33.029,42.054,35.602,44,38.5,44c3.584,0,6.5-2.916,6.5-6.5c0-0.175-0.013-0.348-0.026-0.52l10.68-9.223C55.78,27.647,55.861,27.51,55.918,27.364z M50,16c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6c0-0.531,0.076-1.044,0.206-1.535l0.23-0.614c0.019-0.051,0.014-0.103,0.025-0.155C45.367,17.528,47.507,16,50,16z M6.241,26.351c-1.02-0.418-1.51-1.589-1.093-2.608c0.42-1.019,1.591-1.511,2.61-1.093l26.918,11.032c0.19,0.186,0.433,0.283,0.69,0.283l2.891,1.185c0.495,0.203,0.881,0.586,1.087,1.079s0.208,1.036,0.005,1.531c-0.417,1.021-1.584,1.512-2.608,1.092L6.241,26.351z M7.5,30C4.468,30,2,27.532,2,24.5S4.468,19,7.5,19c2.293,0,4.274,1.425,5.089,3.467l-4.073-1.669c-2.04-0.835-4.381,0.146-5.219,2.185c-0.835,2.04,0.145,4.381,2.185,5.218l3.725,1.527C8.662,29.906,8.089,30,7.5,30z M38.5,42c-1.394,0-2.668-0.66-3.505-1.703l0.988,0.405c0.489,0.2,1.003,0.3,1.517,0.3c0.523,0,1.047-0.104,1.545-0.313c0.985-0.412,1.751-1.184,2.155-2.172c0.837-2.041-0.143-4.382-2.184-5.22l-0.694-0.285C38.382,33.011,38.44,33,38.5,33c2.481,0,4.5,2.019,4.5,4.5S40.981,42,38.5,42z M40.171,31.226l2.377-6.338c1.161,2.985,4.058,5.111,7.449,5.112l-5.582,4.821C43.617,33.066,42.064,31.731,40.171,31.226z"/>
                    </svg>
                  </a>
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/z4ynu_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={`hidden lg:flex items-center justify-center transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
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
      <div className={`flex justify-center pb-8 transition-all duration-1000 ease-out delay-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
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
