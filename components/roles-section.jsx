import { Code, PenTool, Music } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function RolesSection() {
  const roles = [
    {
      icon: <Code className="w-12 h-12 text-teal-400" />,
      title: "Web Developer",
      description:
        "Creating responsive, user-friendly websites and applications using modern technologies like React, Next.js, and TailwindCSS.",
      skills: ["React", "Next.js", "JavaScript", "TailwindCSS", "Node.js"],
    },
    {
      icon: <PenTool className="w-12 h-12 text-blue-400" />,
      title: "Freelance Writer",
      description:
        "Crafting engaging content, technical documentation, and creative pieces that resonate with diverse audiences.",
      skills: ["Technical Writing", "Content Creation", "SEO", "Research", "Editing"],
    },
    {
      icon: <Music className="w-12 h-12 text-purple-400" />,
      title: "Music Tutor",
      description:
        "Teaching music theory, instrument techniques, and fostering musical creativity in students of all ages.",
      skills: ["Music Theory", "Piano", "Guitar", "Composition", "Performance"],
    },
  ]

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What I Do</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I wear multiple hats, bringing together technology, creativity, and education to deliver exceptional
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{role.icon}</div>
                <CardTitle className="text-2xl text-white mb-2">{role.title}</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-600 text-slate-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
