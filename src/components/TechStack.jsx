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
    { name: "HTML5", icon: "/icons/html5-original-wordmark.svg" },
    { name: "CSS", icon: "/icons/css3-original-wordmark.svg" },
    { name: "JavaScript", icon: "/icons/javascript-original.svg" },
    { name: "ReactJS", icon: "/icons/react-original-wordmark.svg" },
    { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
    { name: "NextJS", icon: "/icons/nodejs-original-wordmark.svg" }, // Using Node.js icon as placeholder
    { name: "Java", icon: "/icons/java-original.svg" },
    { name: "Python", icon: "/icons/python-original.svg" },
    { name: "C#", icon: "/icons/csharp-original.svg" },
    { name: "PHP", icon: "/icons/php-original.svg" },
    { name: "C++", icon: "/icons/cplusplus-original.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Arduino", icon: "/icons/arduino.svg" },
    { name: "MySQL", icon: "/icons/mysql-original-wordmark.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "Android Studio", icon: "/icons/nodejs-original-wordmark.svg" } // Using Node.js icon as placeholder
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

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="flex flex-col items-center justify-center p-8 rounded-lg hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TechStack
