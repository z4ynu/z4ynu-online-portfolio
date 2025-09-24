import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Task Management App",
      description:
        "A comprehensive task management application with drag-and-drop functionality, team collaboration features, and real-time updates.",
      image: "/task-management-app.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A beautiful weather application providing detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "/weather-app-forecast.png",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Student Management System",
      description:
        "A complete student management dashboard for educational institutions with grade tracking, attendance, and reporting features.",
      image: "/student-management-system-dashboard-interface.jpg",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Music Learning Platform",
      description:
        "An interactive platform for music education featuring virtual instruments, theory lessons, and progress tracking.",
      image: "/music-learning-app-interface.jpg",
      technologies: ["React", "Web Audio API", "Firebase"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog CMS Platform",
      description:
        "A modern content management system for bloggers with markdown support, SEO optimization, and analytics integration.",
      image: "/blog-cms-dashboard-interface.jpg",
      technologies: ["Next.js", "Supabase", "TailwindCSS"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Technical Writing Portfolio",
      description:
        "A collection of technical articles, documentation, and guides covering various programming topics and tutorials.",
      image: "/technical-writing-portfolio.jpg",
      technologies: ["Markdown", "Documentation", "SEO"],
      category: "Writing",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A showcase of my work across web development, writing, and creative projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-teal-500/20 text-teal-400">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-slate-600 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 bg-teal-500 hover:bg-teal-600">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="bg-slate-800 border-slate-700 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Want to See More?</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Check out my GitHub for additional projects and contributions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3">
                  <Github className="w-5 h-5 mr-2" />
                  Visit My GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
