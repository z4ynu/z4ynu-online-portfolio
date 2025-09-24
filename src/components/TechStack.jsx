"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useEffect, useRef, useState } from "react"

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const technologies = [
    { name: "HTML5", icon: "/html5-original-wordmark.svg" },
    { name: "CSS", icon: "/css3-original-wordmark.svg" },
    { name: "JavaScript", icon: "/javascript-original.svg" },
    { name: "ReactJS", icon: "/react-original-wordmark.svg" },
    { name: "TailwindCSS", icon: "/tailwind.svg" },
    { name: "NextJS", icon: "/nodejs-original-wordmark.svg" }, // Using Node.js icon as placeholder
    { name: "Java", icon: "/java-original.svg" },
    { name: "Python", icon: "/python-original.svg" },
    { name: "C#", icon: "/csharp-original.svg" },
    { name: "PHP", icon: "/php-original.svg" },
    { name: "C++", icon: "/cplusplus-original.svg" },
    { name: "Git", icon: "/git.svg" },
    { name: "GitHub", icon: "/git.svg" }, // Using Git icon as placeholder
    { name: "Arduino", icon: "/arduino.svg" },
    { name: "MySQL", icon: "/mysql-original-wordmark.svg" },
    { name: "Firebase", icon: "/nodejs-original-wordmark.svg" }, // Using Node.js icon as placeholder
    { name: "Android Studio", icon: "/nodejs-original-wordmark.svg" } // Using Node.js icon as placeholder
  ]

  const getTechColor = (techName) => {
    const colors = {
      "HTML5": "bg-orange-500/10 text-orange-400 border-orange-500/20",
      "CSS": "bg-blue-500/10 text-blue-400 border-blue-500/20", 
      "JavaScript": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      "ReactJS": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      "TailwindCSS": "bg-teal-500/10 text-teal-400 border-teal-500/20",
      "NextJS": "bg-gray-500/10 text-gray-400 border-gray-500/20",
      "Java": "bg-red-500/10 text-red-400 border-red-500/20",
      "Python": "bg-green-500/10 text-green-400 border-green-500/20",
      "C#": "bg-purple-500/10 text-purple-400 border-purple-500/20",
      "PHP": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      "C++": "bg-blue-600/10 text-blue-300 border-blue-600/20",
      "Git": "bg-orange-600/10 text-orange-300 border-orange-600/20",
      "GitHub": "bg-gray-600/10 text-gray-300 border-gray-600/20",
      "Arduino": "bg-green-600/10 text-green-300 border-green-600/20",
      "MySQL": "bg-blue-700/10 text-blue-300 border-blue-700/20",
      "Firebase": "bg-yellow-600/10 text-yellow-300 border-yellow-600/20",
      "Android Studio": "bg-green-700/10 text-green-300 border-green-700/20"
    }
    return colors[techName] || "bg-primary/10 text-primary border-primary/20"
  }

  return (
    <section 
      ref={sectionRef}
      id="tech-stack" 
      className={`py-20 px-6 md:px-8 bg-techstack transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Tech Stack</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Technologies I Work With</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of the tools and technologies I use to build modern, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <Card className={`border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${getTechColor(tech.name)}`}>
                <CardContent className="p-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-8 h-8 object-contain"
                    />
                    <div className="font-semibold text-xs">{tech.name}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="border-border/50 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">17+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary-foreground mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default TechStack
