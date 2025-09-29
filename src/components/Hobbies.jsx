import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Hobbies = () => {
  const hobbies = [
    {
      title: "Music Production",
      description: "Creating beats and melodies using digital audio workstations and exploring different genres.",
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
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    },
    {
      title: "Gaming",
      description: "Exploring virtual worlds, strategy games, and connecting with friends through online gaming.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      title: "Reading",
      description: "Diving into tech blogs, science fiction novels, and continuous learning through books.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    },
    {
      title: "Photography",
      description: "Capturing moments and exploring creative composition through digital and film photography.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-orange-500/20 to-red-500/20 border-orange-500/30",
    },
    {
      title: "Cooking",
      description: "Experimenting with different cuisines and finding the perfect balance of flavors in the kitchen.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      ),
      color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
    },
    {
      title: "Fitness",
      description: "Staying active through workouts, running, and maintaining a healthy lifestyle balance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-red-500/20 to-pink-500/20 border-red-500/30",
    },
  ]

  return (
    <section id="hobbies" className="py-20 px-6 md:px-8 bg-techstack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Hobbies</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Beyond the Code</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            When I'm not coding or writing, you'll find me exploring these passions that keep me creative and balanced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {hobby.icon}
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Quote */}
        <div className="mt-16 text-center">
          <Card className="border-border/50 bg-card/50 max-w-3xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <blockquote className="text-xl md:text-2xl font-medium text-balance leading-relaxed mb-4">
                "Life is about finding the perfect harmony between passion, creativity, and continuous growth."
              </blockquote>
              <cite className="text-muted-foreground">— Zy Henzo S. Nuñez</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
