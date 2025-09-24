import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export default function TechStackPage() {
  const techCategories = [
    {
      title: "Frontend Development",
      technologies: [
        { name: "HTML5", logo: "/html5-logo.png", proficiency: 95 },
        { name: "CSS3", logo: "/css3-logo.png", proficiency: 90 },
        { name: "JavaScript", logo: "/javascript-logo.png", proficiency: 88 },
        { name: "React", logo: "/react-logo.png", proficiency: 85 },
      ],
    },
    {
      title: "Backend Development",
      technologies: [
        { name: "Node.js", logo: "/nodejs-logo.png", proficiency: 80 },
        { name: "Python", logo: "/python-logo.png", proficiency: 75 },
      ],
    },
    {
      title: "Tools & Others",
      technologies: [
        { name: "Git", logo: "/git-logo.jpg", proficiency: 85 },
        { name: "Firebase", logo: "/firebase-logo.png", proficiency: 70 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tech Stack</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The technologies and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="space-y-12">
            {techCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">{category.title}</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <Card
                      key={techIndex}
                      className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <img
                            src={tech.logo || "/placeholder.svg"}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <CardTitle className="text-white text-lg">{tech.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-300">Proficiency</span>
                            <span className="text-teal-400">{tech.proficiency}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${tech.proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-3xl text-white text-center">Always Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center text-lg leading-relaxed">
                  Technology evolves rapidly, and I'm committed to continuous learning. I'm currently exploring new
                  frameworks, improving my skills, and staying up-to-date with the latest industry trends and best
                  practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
