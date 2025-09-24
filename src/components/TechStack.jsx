import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: "Advanced", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
        { name: "Next.js", level: "Advanced", color: "bg-gray-500/10 text-gray-400 border-gray-500/20" },
        { name: "TypeScript", level: "Intermediate", color: "bg-blue-600/10 text-blue-300 border-blue-600/20" },
        { name: "TailwindCSS", level: "Advanced", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
        { name: "Vite", level: "Intermediate", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
      ],
    },
    {
      category: "Backend & Database",
      technologies: [
        { name: "Node.js", level: "Intermediate", color: "bg-green-500/10 text-green-400 border-green-500/20" },
        { name: "Firebase", level: "Intermediate", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
        { name: "MongoDB", level: "Beginner", color: "bg-green-600/10 text-green-300 border-green-600/20" },
        { name: "PostgreSQL", level: "Beginner", color: "bg-blue-700/10 text-blue-300 border-blue-700/20" },
      ],
    },
    {
      category: "AI & Tools",
      technologies: [
        {
          name: "OpenRouter AI",
          level: "Intermediate",
          color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        },
        { name: "Git & GitHub", level: "Advanced", color: "bg-gray-600/10 text-gray-300 border-gray-600/20" },
        { name: "VS Code", level: "Advanced", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
        { name: "Figma", level: "Intermediate", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
      ],
    },
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-primary/20 text-primary border-primary/30"
      case "Intermediate":
        return "bg-accent/20 text-accent border-accent/30"
      case "Beginner":
        return "bg-secondary/50 text-secondary-foreground border-secondary"
      default:
        return "bg-muted text-muted-foreground border-muted"
    }
  }

  return (
    <section id="tech-stack" className="py-20 px-6 md:px-8 bg-techstack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Tech Stack</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Technologies I Work With</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of the tools and technologies I use to build modern, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  <span>{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full border ${tech.color}`}></div>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <Badge variant="outline" className={`text-xs ${getLevelColor(tech.level)}`}>
                        {tech.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-border/50 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center">
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
