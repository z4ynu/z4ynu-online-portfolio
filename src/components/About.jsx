import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-8 bg-about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Navigation */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">About</div>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">My Journey in Computer Science</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Why Computer Science?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">My Academic Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Looking Forward</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Current Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design
                  with robust engineering. My favorite work lies at the intersection of design and development, creating
                  experiences that not only look great but are meticulously built for performance and usability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I'm a Computer Science student specializing in web development, with a growing expertise in
                  modern frameworks and technologies. I contribute to various projects while building my skills in both
                  frontend and backend development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Beyond Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  In my spare time, I'm usually reading, exploring new technologies, hanging out with friends, or
                  sharing my passion for music through tutoring. I believe in the power of continuous learning and enjoy
                  helping others discover their potential in both technology and music.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
