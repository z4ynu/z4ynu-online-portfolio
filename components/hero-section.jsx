import { ArrowDown } from "lucide-react"
import { Button } from "./ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <img
            src="/young-computer-science-student-headshot.png"
            alt="Zy Henzo S. Nuñez"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-teal-400 shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Zy Henzo</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Computer Science Student | Web Developer | Freelance Writer | Music Tutor
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Passionate about creating digital solutions, crafting compelling content, and sharing the joy of music.
          Welcome to my digital space where technology meets creativity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold transition-all duration-300 bg-transparent"
          >
            Get In Touch
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 text-teal-400 mx-auto" />
        </div>
      </div>
    </section>
  )
}
