import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { Code, PenTool, Music, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-16 h-16 text-teal-400" />,
      title: "Web Development",
      description: "Full-stack web development services using modern technologies",
      features: [
        "Responsive Website Design",
        "React & Next.js Applications",
        "E-commerce Solutions",
        "API Development & Integration",
        "Database Design & Management",
        "Performance Optimization",
      ],
      pricing: "Starting at $500",
    },
    {
      icon: <PenTool className="w-16 h-16 text-blue-400" />,
      title: "Freelance Writing",
      description: "Professional writing services for various content needs",
      features: [
        "Technical Documentation",
        "Blog Posts & Articles",
        "Content Strategy",
        "SEO-Optimized Content",
        "Copywriting",
        "Editing & Proofreading",
      ],
      pricing: "Starting at $50/article",
    },
    {
      icon: <Music className="w-16 h-16 text-purple-400" />,
      title: "Music Tutoring",
      description: "Personalized music education for all skill levels",
      features: [
        "One-on-One Lessons",
        "Music Theory Fundamentals",
        "Piano & Guitar Instruction",
        "Composition Guidance",
        "Performance Coaching",
        "Online & In-Person Sessions",
      ],
      pricing: "Starting at $30/hour",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive solutions across technology, content creation, and music education.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <CardTitle className="text-2xl text-white mb-4">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-600">
                    <p className="text-2xl font-bold text-teal-400 mb-4">{service.pricing}</p>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="bg-slate-800 border-slate-700 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Ready to Work Together?</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Let's discuss your project and bring your ideas to life.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3">
                  Contact Me Today
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
