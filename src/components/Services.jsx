"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Button } from "./ui/button"

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building modern, responsive web applications with cutting-edge technologies",
      features: [
        "React & Next.js Applications",
        "Responsive Design & Mobile-First",
        "Performance Optimization",
        "API Integration & Backend Services",
        "Database Design & Management",
      ],
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Firebase"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Freelance Writing",
      description: "Crafting compelling content that engages audiences and drives results",
      features: [
        "Technical Documentation",
        "Blog Posts & Articles",
        "Content Strategy",
        "SEO-Optimized Writing",
        "Copy for Web & Marketing",
      ],
      technologies: ["Research", "SEO", "Content Strategy", "Technical Writing", "Copywriting"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
    {
      title: "Music Tutoring",
      description: "Sharing the joy of music through personalized instruction and guidance",
      features: [
        "One-on-One Lessons",
        "Music Theory & Fundamentals",
        "Instrument Instruction",
        "Performance Coaching",
        "Flexible Learning Approaches",
      ],
      technologies: ["Piano", "Guitar", "Music Theory", "Composition", "Performance"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 px-6 md:px-8 bg-techstack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Services</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">What I Bring to the Table</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I offer a unique combination of technical expertise, creative writing skills, and musical knowledge to help
            bring your projects to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Key Services</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services
