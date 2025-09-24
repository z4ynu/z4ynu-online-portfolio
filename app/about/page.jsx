import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get to know the person behind the code, words, and music.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/young-computer-science-student-headshot.png"
                alt="Zy Henzo S. Nuñez"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">Hello, I'm Zy Henzo S. Nuñez</h2>
              <p className="text-slate-300 leading-relaxed">
                I'm a passionate Computer Science student with a unique blend of technical expertise, creative writing
                skills, and musical talent. My journey in technology began with curiosity and has evolved into a deep
                love for creating digital solutions that make a difference.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding or writing, you'll find me exploring new musical compositions or teaching others the
                joy of music. I believe in the power of interdisciplinary learning and how different fields can
                complement each other to create something extraordinary.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="text-center">
                <GraduationCap className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <CardTitle className="text-white">Education</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300">Bachelor of Science in Computer Science</p>
                <p className="text-slate-400 text-sm mt-2">Currently pursuing</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300">Philippines</p>
                <p className="text-slate-400 text-sm mt-2">Available for remote work</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="text-center">
                <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300">3+ Years</p>
                <p className="text-slate-400 text-sm mt-2">Combined experience</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">My Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-center leading-relaxed text-lg">
                "Technology should serve humanity, creativity should inspire innovation, and knowledge should be shared
                freely. I strive to bridge the gap between technical excellence and human connection through everything
                I create."
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
