"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { useState, useEffect, useRef } from "react"

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
      title: "FishPet - Pet Care App",
      description: "A comprehensive pet care application for managing fish and aquatic pets with feeding schedules and health tracking.",
      image: "/projects/fishpet.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      status: "Completed",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "ELMS - Learning Management System",
      description: "An educational platform for course management, student tracking, and interactive learning experiences.",
      image: "/projects/elms.png",
      technologies: ["React", "Firebase", "TailwindCSS", "Node.js"],
      category: "Education",
      status: "Completed",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Hotelliere - Hotel Management",
      description: "A complete hotel management system with booking, room management, and guest services functionality.",
      image: "/projects/hotelliere.png",
      technologies: ["React", "MySQL", "PHP", "Bootstrap"],
      category: "Web Development",
      status: "Completed",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "WashingAlley - Laundry Service",
      description: "A modern laundry service platform with pickup/delivery scheduling and payment integration.",
      image: "/projects/washingalley.png",
      technologies: ["React", "Firebase", "Stripe", "TailwindCSS"],
      category: "Web Development",
      status: "In Progress",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "AutoHub - Car Dealership",
      description: "A comprehensive car dealership website with vehicle listings, financing options, and customer management.",
      image: "/projects/autohublandingpage.png",
      technologies: ["React", "Next.js", "PostgreSQL", "Prisma"],
      category: "Web Development",
      status: "Completed",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Arduino IoT Project",
      description: "An Internet of Things project using Arduino for smart home automation and sensor monitoring.",
      image: "/projects/arduino.jpeg",
      technologies: ["Arduino", "C++", "IoT", "Sensors"],
      category: "Hardware",
      status: "Completed",
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-primary/20 text-primary border-primary/30"
      case "In Progress":
        return "bg-accent/20 text-accent border-accent/30"
      default:
        return "bg-muted text-muted-foreground border-muted"
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`py-20 px-6 md:px-8 bg-projects transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">School & Personal Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my academic and personal projects that demonstrate my skills in web development,
            problem-solving, and creative thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className={`text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
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

                <div className="flex items-center space-x-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
