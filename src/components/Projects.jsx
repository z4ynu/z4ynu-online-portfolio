"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const projects = [
    {
      title: "FishPet Inventory System",
      description:
        "The ultimate inventory management solution for aquarium and pet shop businesses. Simple, powerful and efficient.",
      image: "/projects/fishpet.png",
      technologies: ["JavaScript", "ReactJS", "Vite", "Firebase", "Cloudinary", "TailwindCSS", "ShadCN"],
      category: "Web Development",
      status: "In Progress",
      links: {
        demo: "https://fishpet-inventory-system.vercel.app",
        github: "https://github.com/rysteim/Fishpet-Inventory-System-Collab",
      },
    },
    {
      title: "ELMS - Employee Lifecycle Management System",
      description:
        "ELMS is a PowerApps solution that streamlines asset lifecycle management with automated forms for onboarding, offboarding, movement, and Dynamics AX integration.",
      image: "/projects/elms.png",
      technologies: ["Power Fx", "Power Automate", "Power Apps", "SharePoint"],
      category: "Education",
      status: "Completed",
      links: {
        demo: null,
        github: null,
      },
      isNDA: true,
    },
    {
      title: "Hotelliere - Hotel Management",
      description:
        "A complete hotel management system with booking, room management, and guest services functionality.",
      image: "/projects/hotelliere.png",
      technologies: ["C#", "GunaUI", "MySQL", "Figma"],
      category: "Web Development",
      status: "Completed",
      links: {
        demo: null,
        github: "https://github.com/z4ynu/hotel-management-system",
      },
    },
    {
      title: "WashingAlley - Laundry Service",
      description:
        "A modern laundry service platform with pickup/delivery scheduling and payment integration.",
      image: "/projects/washingalley.png",
      technologies: ["C#", "MySQL"],
      category: "Web Development",
      status: "In Progress",
      links: {
        demo: null,
        github: "https://github.com/z4ynu/Laundry-System",
      },
    },
    {
      title: "AutoHub - Car Dealership",
      description:
        "A comprehensive car dealership website with vehicle listings, financing options, and customer management.",
      image: "/projects/autohublandingpage.png",
      technologies: ["PHP", "MySQL"],
      category: "Web Development",
      status: "Completed",
      links: {
        demo: null,
        github: "https://github.com/z4ynu/auto-hub-landing-page",
      },
    },
    {
      title: "Automatic Trash Segregator",
      description:
        "An Internet of thing project using Arduino for trash segregation between metal, wet, and dry waste.",
      image: "/projects/arduino.jpeg",
      technologies: ["Arduino", "C++", "IoT", "Sensors"],
      category: "Hardware",
      status: "Completed",
      links: {
        demo: null,
        github: null,
      },
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-primary/20 text-primary border-primary/30";
      case "In Progress":
        return "bg-accent/20 text-accent border-accent/30";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-20 px-6 md:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-500/10 relative overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles - positioned on the sides of the cards */}
        <div className="absolute top-1/4 left-8 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-8 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-12 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-12 w-5 h-5 bg-green-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-6 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/4 right-6 w-3 h-3 bg-pink-400/20 rounded-full animate-pulse delay-3000"></div>

        {/* Gradient orbs - positioned on the sides */}
        <div className="absolute top-1/3 left-4 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/2 right-4 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-8 w-28 h-28 bg-gradient-to-r from-green-400/10 to-yellow-400/10 rounded-full blur-xl animate-float"></div>

        {/* Project-themed decorative elements */}
        <div className="absolute top-1/4 right-16 w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 left-16 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-orange-400/30 rounded-full animate-bounce delay-2000"></div>
        
        {/* Additional floating elements - positioned on the sides of cards */}
        <div className="absolute top-1/4 left-4 w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center shadow-xl animate-float hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-primary animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        
        <div className="absolute top-1/2 right-4 w-14 h-14 rounded-full bg-accent/15 border-2 border-accent/30 flex items-center justify-center shadow-xl animate-float-delayed hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-accent animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>

        <div className="absolute bottom-1/3 left-8 w-12 h-12 rounded-full bg-green-500/15 border-2 border-green-400/30 flex items-center justify-center shadow-xl animate-float hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-green-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>

        <div className="absolute top-2/3 right-8 w-10 h-10 rounded-full bg-purple-500/15 border-2 border-purple-400/30 flex items-center justify-center shadow-xl animate-float-delayed hover:scale-110 transition-transform duration-300">
          <svg className="w-5 h-5 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            School & Personal Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my academic and personal projects that demonstrate my
            skills in web development, problem-solving, and creative thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden flex flex-col h-full ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                transitionDuration: "800ms",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="outline"
                    className={`text-xs ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-lg mb-2 line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 space-y-4 pb-6">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3 mt-auto pt-4">
                  {project.links.demo ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => window.open(project.links.demo, '_blank')}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </Button>
                  ) : project.isNDA ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent opacity-50 cursor-not-allowed"
                      disabled
                      title="Protected by NDA"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Demo (NDA)
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent opacity-50 cursor-not-allowed"
                      disabled
                      title="Demo not available"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo (N/A)
                    </Button>
                  )}
                  {project.links.github ? (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.links.github, '_blank')}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-8.311.469-2.381 1.233-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </Button>
                  ) : project.isNDA ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 opacity-50 cursor-not-allowed"
                      disabled
                      title="Protected by NDA"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Code (NDA)
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 opacity-50 cursor-not-allowed"
                      disabled
                      title="Code not available"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 14v3h8v-3a3 3 0 10-8 0zM7 7V4a1 1 0 012 0v3a1 1 0 11-2 0z"
                        />
                      </svg>
                      Code (N/A)
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/z4ynu?tab=repositories', '_blank')}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
