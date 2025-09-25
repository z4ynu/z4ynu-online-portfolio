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
        className={`py-20 px-6 md:px-8 bg-about transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
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
              <div className={`flex items-start space-x-4 transition-all duration-500 ease-out ${
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

              <div className={`flex items-start space-x-4 transition-all duration-500 ease-out ${
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

              <div className={`flex items-start space-x-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
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
              <Card className={`border-border/50 transition-all duration-500 ease-out ${
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

              <Card className={`border-border/50 transition-all duration-500 ease-out ${
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
