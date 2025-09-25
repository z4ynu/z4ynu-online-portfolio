import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { useState, useEffect, useRef } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-20 px-6 md:px-8 bg-about relative overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles - distributed across the section */}
        <div className="absolute top-16 left-16 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-24 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-8 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-16 w-5 h-5 bg-green-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-16 right-8 w-3 h-3 bg-pink-400/20 rounded-full animate-pulse delay-3000"></div>

        {/* Gradient orbs - spread out more */}
        <div className="absolute top-1/5 left-1/5 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/2 right-1/5 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-1/5 left-1/2 w-28 h-28 bg-gradient-to-r from-green-400/10 to-yellow-400/10 rounded-full blur-xl animate-float"></div>

        {/* Academic-themed decorative elements - better distribution */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-orange-400/30 rounded-full animate-bounce delay-2000"></div>
        
        {/* Additional floating elements - spread across the section */}
        <div className="absolute top-1/6 left-1/8 w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center shadow-xl animate-float hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-primary animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        
        <div className="absolute top-1/2 right-1/8 w-14 h-14 rounded-full bg-accent/15 border-2 border-accent/30 flex items-center justify-center shadow-xl animate-float-delayed hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-accent animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <div className="absolute bottom-1/6 left-1/6 w-12 h-12 rounded-full bg-green-500/15 border-2 border-green-400/30 flex items-center justify-center shadow-xl animate-float hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-green-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="absolute top-3/4 right-1/6 w-10 h-10 rounded-full bg-purple-500/15 border-2 border-purple-400/30 flex items-center justify-center shadow-xl animate-float-delayed hover:scale-110 transition-transform duration-300">
          <svg className="w-5 h-5 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">About</div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mt-2">My Journey in Computer Science</h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className={`flex items-start space-x-4 transition-all duration-300 ease-out hover:shadow-lg hover:bg-card/10 hover:rounded-lg hover:p-4 hover:-m-4 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Why Computer Science?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I chose Computer Science because of my long-time love for technology, supported and encouraged by my family. At first, I had to choose between pursuing music or IT, but in the end, my path led me to Computer Science. It became the perfect balance of passion and opportunity.
                  </p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 transition-all duration-300 ease-out hover:shadow-lg hover:bg-card/10 hover:rounded-lg hover:p-4 hover:-m-4 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">My Academic Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm currently a 4th-year Computer Science student working on my thesis. The start of college was challenging as I adjusted to new demands, but I've continued to push through and grow. Back in high school, I was a consistent achiever, and that drive still guides me today as I face every challenge with persistence.
                  </p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 transition-all duration-300 ease-out hover:shadow-lg hover:bg-card/10 hover:rounded-lg hover:p-4 hover:-m-4 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Looking Forward</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I aspire to become a skilled web developer while also exploring other fields such as mobile development, networking, and cybersecurity. My goal is to keep expanding my knowledge and stay adaptable as technology continues to evolve.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <Card className={`border-border/50 transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/50 hover:bg-card/5 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Current Focus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Right now, I'm focused on improving my web development skills, mastering both frontend and backend technologies. Alongside academics, I still make time for hobbies—whether it's playing instruments, exploring games, or learning new creative outlets that keep me inspired.
                  </p>
                </CardContent>
              </Card>

              <Card className={`border-border/50 transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/50 hover:bg-card/5 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '500ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Beyond Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Outside academics, I serve as a musician at Tagum Alliance Gospel Church and have joined multiple battle of the bands. I also enjoy competing in Valorant tournaments, hanging out with friends, and spending time with my girlfriend, Kissay. These experiences remind me that growth comes not only from studies but also from the passions and people who shape who I am.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
