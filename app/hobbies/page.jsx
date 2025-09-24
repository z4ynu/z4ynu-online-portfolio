import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { Music, BookOpen, Camera, Gamepad2, Plane, Coffee } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

export default function HobbiesPage() {
  const hobbies = [
    {
      icon: <Music className="w-12 h-12 text-purple-400" />,
      title: "Music Composition",
      description:
        "Creating original pieces and exploring different musical genres. I enjoy experimenting with both classical and contemporary styles.",
      image: "/music-composition-studio.jpg",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-400" />,
      title: "Reading & Research",
      description:
        "Diving deep into technology books, science fiction novels, and research papers to expand my knowledge and imagination.",
      image: "/books-and-reading.png",
    },
    {
      icon: <Camera className="w-12 h-12 text-green-400" />,
      title: "Photography",
      description:
        "Capturing moments and exploring the world through the lens. I particularly enjoy landscape and street photography.",
      image: "/photography-camera-landscape.jpg",
    },
    {
      icon: <Gamepad2 className="w-12 h-12 text-red-400" />,
      title: "Gaming",
      description:
        "Playing strategy games and exploring virtual worlds. Gaming also inspires my approach to problem-solving and user experience design.",
      image: "/gaming-setup-computer.jpg",
    },
    {
      icon: <Plane className="w-12 h-12 text-teal-400" />,
      title: "Travel & Culture",
      description:
        "Exploring new places, experiencing different cultures, and meeting people from diverse backgrounds to broaden my perspective.",
      image: "/travel-adventure-culture.jpg",
    },
    {
      icon: <Coffee className="w-12 h-12 text-amber-400" />,
      title: "Coffee Brewing",
      description:
        "Perfecting the art of coffee brewing. There's something meditative about the process that helps me think and create.",
      image: "/coffee-brewing-barista.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Hobbies</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Beyond coding and writing, here's what fuels my creativity and keeps me inspired.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={hobby.image || "/placeholder.svg"}
                    alt={hobby.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {hobby.icon}
                    <CardTitle className="text-xl text-white">{hobby.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300 leading-relaxed">{hobby.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <Card className="bg-slate-800 border-slate-700 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-white text-center">Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center text-lg leading-relaxed">
                  I believe that diverse interests and hobbies contribute to better creativity and problem-solving. Each
                  of these activities teaches me something new and often provides fresh perspectives that I can apply to
                  my professional work. Whether it's the patience learned from music, the attention to detail from
                  photography, or the strategic thinking from gaming, every hobby adds value to who I am as a person and
                  professional.
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
