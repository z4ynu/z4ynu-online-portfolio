"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Button } from "./ui/button"
import { useState, useEffect, useRef } from "react"

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
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

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedService]);

  const handleServiceClick = (serviceTitle) => {
    if (serviceTitle === "Web Development") {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    const selected = services.find((service) => service.title === serviceTitle);
    setSelectedService(selected || null);
  };

  const services = [
    {
      title: "Web Development",
      description: "Building modern, responsive web applications with cutting-edge technologies",
      features: [
        "React + Vite Applications",
        "Responsive Design & Mobile-First",
        "Performance Optimization",
        "API Integration & Backend Services",
        "Database Design & Management",
      ],
      technologies: ["React", "Vite", "JavaScript", "HTML5", "CSS", "TailwindCSS", "Node.js", "Firebase", "Supabase", "SQLyog", "MySQL"],
      workItems: [
        {
          title: "FishPet Inventory System",
          description: "A modern inventory dashboard for aquarium and pet stores with real-time updates and clean UI flows.",
          tags: ["React", "Firebase", "Tailwind"],
        },
        {
          title: "Hotel Management Portal",
          description: "A structured internal system for booking, room management, and service tracking.",
          tags: ["C#", "MySQL", "Desktop UI"],
        },
        {
          title: "Laundry Service Platform",
          description: "A delivery-focused platform with scheduling, order management, and operational efficiency tools.",
          tags: ["C#", "Database", "Workflow"],
        },
        {
          title: "AutoHub Landing Page",
          description: "A polished dealership landing experience with strong visual hierarchy and content structure.",
          tags: ["PHP", "UI", "Responsive"],
        },
        {
          title: "Portfolio Website",
          description: "A personal site that combines storytelling, polished visuals, and smooth section transitions.",
          tags: ["React", "Vite", "Animation"],
        },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Freelance Writing",
      description: "Creating clear, professional content that makes complex topics accessible across diverse industries",
      features: [
        "Article and blog writing (tech, cybersecurity, AI, etc.)",
        "Rewriting and paraphrasing for clarity",
        "Professional tone adjustments",
        "Structured content with subheadings",
        "Social media content optimization",
      ],
      technologies: ["Cybersecurity", "Technology", "Speech Therapy", "AI & Automation", "Professional Rewriting"],
      workItems: [
        {
          title: "Tech Blog Article Series",
          description: "Explainer content designed to make technical topics easy to understand for broad audiences.",
          tags: ["Blogging", "Research", "Clarity"],
        },
        {
          title: "Cybersecurity Explainer",
          description: "A structured article that turns complex security concepts into relatable and practical reading.",
          tags: ["Cybersecurity", "Simplified", "Tone"],
        },
        {
          title: "AI Workflow Guide",
          description: "A concise instructional piece that explains automation workflows in a readable format.",
          tags: ["AI", "Automation", "How-to"],
        },
        {
          title: "Rewritten Professional Content",
          description: "Refined existing content for stronger organization, voice, and audience clarity.",
          tags: ["Editing", "Professional", "Rewriting"],
        },
        {
          title: "Social Content Drafts",
          description: "Short-form posts tailored for engagement, brand voice, and platform-specific formatting.",
          tags: ["Social Media", "Copy", "Strategy"],
        },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
    {
      title: "Video Editing",
      description: "Crafting polished videos for social media, YouTube, and promotional content with a clean cinematic feel",
      features: [
        "Short-form and long-form video editing",
        "Color correction and visual consistency",
        "Motion graphics and text overlays",
        "Captioning and subtitle integration",
        "Format optimization for different platforms",
      ],
      technologies: ["Premiere Pro", "CapCut", "DaVinci Resolve", "After Effects", "Adobe Photoshop"],
      workItems: [
        {
          title: "Short-Form Promo Reel",
          description: "A fast-paced promotional edit with polished transitions and strong rhythm.",
          tags: ["Reels", "Motion", "Branding"],
        },
        {
          title: "YouTube Content Edit",
          description: "Cleanly structured long-form content with pacing adjustments and subtitle support.",
          tags: ["YouTube", "Pacing", "Captions"],
        },
        {
          title: "Social Media Teasers",
          description: "Platform-ready edits built for attention-grabbing hooks and consistency.",
          tags: ["Short Form", "Engagement", "Visuals"],
        },
        {
          title: "Cinematic Montage",
          description: "A story-driven montage with color correction and dynamic text layering.",
          tags: ["Color", "Effects", "Storytelling"],
        },
        {
          title: "Visual Brand Pack",
          description: "A set of reusable assets and edits designed for a cohesive online presence.",
          tags: ["Branding", "Templates", "Consistency"],
        },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h7a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
          />
        </svg>
      ),
    },
    {
      title: "Music Tutoring",
      description: "Sharing the joy of music through personalized instruction and guidance",
      features: [
        "One-on-One Lessons",
        "Music Theory & Fundamentals",
        "Instrument Instruction",
        "Performance Coaching",
        "Flexible Learning Approaches",
      ],
      technologies: ["Drums", "Bass", "Guitar", "Gospel Chops", "Shredding", "Music Theory", "Performance"],
      workItems: [
        {
          title: "Beginner Rhythm Lessons",
          description: "A structured lesson path focused on timing, control, and confidence building.",
          tags: ["Drums", "Fundamentals", "Practice"],
        },
        {
          title: "Technique Coaching",
          description: "Hands-on guidance for groove, articulation, and dynamic control across instruments.",
          tags: ["Technique", "Coaching", "Performance"],
        },
        {
          title: "Theory & Ear Training",
          description: "Lessons that connect musical theory to practical playing and better listening skills.",
          tags: ["Theory", "Ear Training", "Music"],
        },
        {
          title: "Performance Prep",
          description: "Support for live set preparation, stage confidence, and expressive delivery.",
          tags: ["Performance", "Confidence", "Live"],
        },
        {
          title: "Custom Lesson Plans",
          description: "Personalized learning plans tailored to the student’s goals, pace, and style.",
          tags: ["Personalized", "Flexible", "Growth"],
        },
      ],
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
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className={`py-20 px-6 md:px-8 bg-techstack transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Services</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">What I Bring to the Table</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I offer a unique combination of technical expertise, creative writing skills, and musical knowledge to help
            bring your projects to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 items-stretch">
          {services.map((service, index) => {
            return (
            <Card
              key={index}
              className="border-border/50 transition-all duration-300 ease-out group h-full flex flex-col overflow-hidden hover:border-primary/50 hover:shadow-lg hover:bg-card/10 hover:scale-[1.01] cursor-pointer focus-within:ring-2 focus-within:ring-primary"
              onClick={() => handleServiceClick(service.title)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleServiceClick(service.title);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <CardHeader className="space-y-4 min-h-[150px]">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                  <div className="mt-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {service.title === "Web Development" ? "Click to view projects" : "Click to explore work"}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Key Services</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/30">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                    {service.title === "Freelance Writing" ? "Writing Focus" :
                     service.title === "Music Tutoring" ? "Instruments & Skills" :
                     service.title === "Video Editing" ? "Editing Tools" : "Technologies"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Let's Work Together
          </Button>
        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-4 py-6"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-border/60 bg-card/95 p-6 shadow-2xl shadow-black/30"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Selected Service</p>
                <h3 className="text-2xl font-semibold mt-2">{selectedService.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">A closer look at work and examples connected to this service.</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-full border border-border/60 p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                aria-label="Close service details"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 max-h-[60vh] space-y-4 overflow-y-auto pr-2">
              {selectedService.workItems.map((item, itemIndex) => (
                <div key={itemIndex} className="rounded-xl border border-border/50 bg-background/70 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold">{item.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services
